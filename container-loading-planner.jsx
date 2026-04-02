import { useState, useRef, useEffect, useCallback, useMemo, forwardRef, useImperativeHandle } from "react";
import * as THREE from "three";

// ============================================================
// CONSTANTS & DATA
// ============================================================
const CONTAINER_40FT = {
  name: "40ft High Cube Container",
  innerLength: 12032,
  innerWidth: 2352,
  innerHeight: 2698,
  doorWidth: 2340,
  doorHeight: 2585,
  maxPayload: 26580,
};

const CONTAINER_PRESETS = [
  { name: "20ft Standard",   innerLength: 5898,  innerWidth: 2352, innerHeight: 2393, doorWidth: 2340, doorHeight: 2280, maxPayload: 28200 },
  { name: "40ft Standard",   innerLength: 12032, innerWidth: 2352, innerHeight: 2393, doorWidth: 2340, doorHeight: 2280, maxPayload: 26750 },
  { name: "40ft High Cube",  innerLength: 12032, innerWidth: 2352, innerHeight: 2698, doorWidth: 2340, doorHeight: 2585, maxPayload: 26580 },
  { name: "45ft High Cube",  innerLength: 13556, innerWidth: 2352, innerHeight: 2698, doorWidth: 2340, doorHeight: 2585, maxPayload: 27700 },
  { name: "Custom",          innerLength: 12032, innerWidth: 2352, innerHeight: 2698, doorWidth: 2340, doorHeight: 2585, maxPayload: 26580 },
];

const TRUCK_PRESETS = [
  { id: "hilux_dc", name: "Hilux Revo (4Dr)", length: 5325, width: 1855, height: 1815, weight: 2050, wheelbase: 3085, cabRatio: 0.55 },
  { id: "hilux_sc", name: "Hilux Revo (2Dr)", length: 5255, width: 1855, height: 1815, weight: 1910, wheelbase: 3085, cabRatio: 0.40 },
  { id: "ranger_dc", name: "Ranger (4Dr)", length: 5362, width: 1860, height: 1821, weight: 2150, wheelbase: 3220, cabRatio: 0.55 },
  { id: "triton_dc", name: "Triton (4Dr)", length: 5305, width: 1815, height: 1795, weight: 1950, wheelbase: 3000, cabRatio: 0.55 },
  { id: "dmax_dc", name: "D-Max (4Dr)", length: 5265, width: 1870, height: 1790, weight: 1990, wheelbase: 3020, cabRatio: 0.55 },
  { id: "navara_dc", name: "Navara (4Dr)", length: 5260, width: 1850, height: 1840, weight: 2050, wheelbase: 3150, cabRatio: 0.55 },
  { id: "custom", name: "กำหนดเอง (Custom)", length: 5300, width: 1850, height: 1800, weight: 2000, wheelbase: 3000, cabRatio: 0.50 },
];

const BOX_PRESETS = [
  { id: "eu_pallet", name: "EU Pallet",      length: 1200, width: 800,  height: 1450, weight: 800 },
  { id: "th_pallet", name: "TH Pallet",      length: 1100, width: 1100, height: 1450, weight: 800 },
  { id: "box_s",     name: "กล่อง S",        length: 600,  width: 400,  height: 400,  weight: 20  },
  { id: "box_m",     name: "กล่อง M",        length: 800,  width: 600,  height: 600,  weight: 40  },
  { id: "box_l",     name: "กล่อง L",        length: 1200, width: 800,  height: 800,  weight: 80  },
  { id: "box_custom",name: "กำหนดเอง",       length: 1000, width: 800,  height: 800,  weight: 50  },
];

const COLORS = ["#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899", "#06B6D4", "#F97316"];
const generateId = () => Math.random().toString(36).substr(2, 9);

// ============================================================
// 2D TRUCK DRAWING FUNCTIONS
// ============================================================
function drawTruck2D(ctx, v, ox, oy, scale, isSelected, hasCollision) {
  const vx = ox + v.x * scale;
  const vy = oy + v.y * scale;
  let vw, vh;

  ctx.save();

  if (v.rotated) {
    ctx.translate(vx + v.width * scale / 2, vy + v.length * scale / 2);
    ctx.rotate(Math.PI / 2);
    vw = v.length * scale;
    vh = v.width * scale;
    ctx.translate(-vw / 2, -vh / 2);
  } else {
    ctx.translate(vx, vy);
    vw = v.length * scale;
    vh = v.width * scale;
  }

  const color = v.color;
  const cabLen = vw * v.cabRatio;
  const bedLen = vw - cabLen;
  const r = Math.min(8, vw * 0.015);
  const wheelR = Math.min(vh * 0.13, 10);
  const wheelW = Math.min(vh * 0.08, 6);

  // Shadow
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  roundRect(ctx, 3, 3, vw, vh, r);
  ctx.fill();

  // === BED ===
  ctx.fillStyle = shadeColor(color, -30) + "aa";
  ctx.strokeStyle = shadeColor(color, -50) + "cc";
  ctx.lineWidth = 1;
  roundRectRight(ctx, cabLen, 0, bedLen, vh, r);
  ctx.fill();
  ctx.stroke();

  // Bed floor lines
  ctx.strokeStyle = shadeColor(color, -60) + "66";
  ctx.lineWidth = 0.5;
  const lineCount = Math.max(2, Math.floor(bedLen / (12 * (vw / 200))));
  for (let i = 1; i <= lineCount; i++) {
    const lx = cabLen + (bedLen / (lineCount + 1)) * i;
    ctx.beginPath();
    ctx.moveTo(lx, 3);
    ctx.lineTo(lx, vh - 3);
    ctx.stroke();
  }

  // Bed side rails
  ctx.strokeStyle = shadeColor(color, -40) + "bb";
  ctx.lineWidth = Math.max(1.5, vh * 0.02);
  ctx.beginPath();
  ctx.moveTo(cabLen, 1);
  ctx.lineTo(vw - r, 1);
  ctx.moveTo(cabLen, vh - 1);
  ctx.lineTo(vw - r, vh - 1);
  ctx.stroke();

  // Tailgate
  ctx.strokeStyle = shadeColor(color, -20) + "cc";
  ctx.lineWidth = Math.max(2, vh * 0.025);
  ctx.beginPath();
  ctx.moveTo(vw - 1, r);
  ctx.lineTo(vw - 1, vh - r);
  ctx.stroke();

  // === CAB ===
  const cabGrad = ctx.createLinearGradient(0, 0, 0, vh);
  cabGrad.addColorStop(0, shadeColor(color, 20));
  cabGrad.addColorStop(0.5, color);
  cabGrad.addColorStop(1, shadeColor(color, 20));
  ctx.fillStyle = cabGrad;
  ctx.strokeStyle = shadeColor(color, -30) + "cc";
  ctx.lineWidth = 1;
  roundRectLeft(ctx, 0, 0, cabLen, vh, r);
  ctx.fill();
  ctx.stroke();

  // Windshield
  const wsInset = vh * 0.12;
  const wsLen = cabLen * 0.12;
  ctx.fillStyle = "#88ccff55";
  ctx.strokeStyle = "#aaddff88";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(wsLen * 0.5 + 2, wsInset);
  ctx.lineTo(wsLen * 0.5 + wsLen, wsInset * 0.7);
  ctx.lineTo(wsLen * 0.5 + wsLen, vh - wsInset * 0.7);
  ctx.lineTo(wsLen * 0.5 + 2, vh - wsInset);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Roof panel
  const roofInset = vh * 0.18;
  const roofStart = cabLen * 0.22;
  const roofEnd = cabLen * 0.85;
  ctx.fillStyle = shadeColor(color, -15) + "44";
  ctx.strokeStyle = shadeColor(color, -25) + "66";
  ctx.lineWidth = 0.7;
  roundRect(ctx, roofStart, roofInset, roofEnd - roofStart, vh - roofInset * 2, 3);
  ctx.fill();
  ctx.stroke();

  // Side windows
  const winH = vh * 0.18;
  const winStart = cabLen * 0.28;
  const winEnd = cabLen * 0.82;
  ctx.fillStyle = "#88ccff44";
  ctx.strokeStyle = "#aaddff55";
  ctx.lineWidth = 0.8;
  roundRect(ctx, winStart, vh * 0.08, winEnd - winStart, winH, 2);
  ctx.fill(); ctx.stroke();
  roundRect(ctx, winStart, vh * 0.92 - winH, winEnd - winStart, winH, 2);
  ctx.fill(); ctx.stroke();

  // A-pillar
  ctx.strokeStyle = shadeColor(color, -40) + "88";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cabLen * 0.2, roofInset * 0.8);
  ctx.lineTo(cabLen * 0.2, vh - roofInset * 0.8);
  ctx.stroke();

  // Cab-bed divider
  ctx.strokeStyle = shadeColor(color, -50) + "aa";
  ctx.lineWidth = Math.max(1.5, vh * 0.02);
  ctx.beginPath();
  ctx.moveTo(cabLen, 0);
  ctx.lineTo(cabLen, vh);
  ctx.stroke();

  // Bumpers
  ctx.fillStyle = "#33333388";
  roundRectLeft(ctx, -2, vh * 0.08, 4, vh * 0.84, 2);
  ctx.fill();
  roundRectRight(ctx, vw - 2, vh * 0.1, 4, vh * 0.8, 2);
  ctx.fill();

  // Side mirrors
  ctx.fillStyle = color;
  ctx.strokeStyle = shadeColor(color, -30);
  ctx.lineWidth = 0.8;
  const mirX = cabLen * 0.18;
  ctx.beginPath(); ctx.ellipse(mirX, -2, 4, 2.5, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(mirX, vh + 2, 4, 2.5, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

  // Wheels
  const drawWheel = (wx, wy) => {
    ctx.fillStyle = "#1a1a1a";
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 0.8;
    roundRect(ctx, wx - wheelW / 2, wy - wheelR, wheelW, wheelR * 2, 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#444";
    ctx.beginPath(); ctx.arc(wx, wy, wheelR * 0.35, 0, Math.PI * 2); ctx.fill();
  };
  drawWheel(cabLen * 0.3, -1);
  drawWheel(cabLen * 0.3, vh + 1);
  drawWheel(cabLen + bedLen * 0.55, -1);
  drawWheel(cabLen + bedLen * 0.55, vh + 1);

  // Headlights
  ctx.fillStyle = "#ffffcc88";
  ctx.beginPath(); ctx.ellipse(1, vh * 0.2, 2.5, 3.5, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(1, vh * 0.8, 2.5, 3.5, 0, 0, Math.PI * 2); ctx.fill();

  // Taillights
  ctx.fillStyle = "#ff333388";
  ctx.fillRect(vw - 2, vh * 0.12, 3, 5);
  ctx.fillRect(vw - 2, vh * 0.88 - 5, 3, 5);

  // Labels
  if (v.rearLifted) {
    ctx.fillStyle = "#ffaa00dd";
    ctx.font = `bold ${Math.max(8, vw * 0.028)}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("⬆ LIFTED", cabLen + bedLen / 2, vh / 2 - vw * 0.03);
  }

  ctx.fillStyle = "#ffffffcc";
  ctx.font = `${isSelected ? "bold " : ""}${Math.max(8, vw * 0.025)}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(v.preset, vw / 2, vh / 2 + (v.rearLifted ? vw * 0.025 : 0));

  ctx.fillStyle = "#ffffff55";
  ctx.font = `${Math.max(7, vw * 0.018)}px monospace`;
  ctx.fillText(`${v.length}×${v.width}`, vw / 2, vh - Math.max(4, vh * 0.08));

  if (isSelected) {
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    roundRect(ctx, -3, -3, vw + 6, vh + 6, r + 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (hasCollision) {
    ctx.strokeStyle = "#ff4444";
    ctx.lineWidth = 2.5;
    ctx.setLineDash([6, 3]);
    roundRect(ctx, -4, -4, vw + 8, vh + 8, r + 3);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.restore();
}

function shadeColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);
  R = Math.min(255, Math.max(0, Math.floor(R * (100 + percent) / 100)));
  G = Math.min(255, Math.max(0, Math.floor(G * (100 + percent) / 100)));
  B = Math.min(255, Math.max(0, Math.floor(B * (100 + percent) / 100)));
  return "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
}

function roundRect(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function roundRectLeft(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.lineTo(x + w, y); ctx.lineTo(x + w, y + h); ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r); ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath();
}

function roundRectRight(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r); ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h); ctx.lineTo(x, y + h);
  ctx.closePath();
}

// ============================================================
// 3D TRUCK BUILDER
// ============================================================
function buildTruck3D(v, isSelected) {
  const group = new THREE.Group();
  const c = new THREE.Color(v.color);
  const cabLen = v.length * v.cabRatio;
  const bedLen = v.length - cabLen;
  const bodyH = v.height * 0.55;
  const cabH = v.height;
  const bedWallH = v.height * 0.35;
  const floorH = v.height * 0.12;
  const wheelRadius = 340;
  const wheelWidth = 180;

  // Chassis
  const chassis = new THREE.Mesh(
    new THREE.BoxGeometry(v.length * 0.95, floorH, v.width * 0.85),
    new THREE.MeshPhongMaterial({ color: 0x222222 })
  );
  chassis.position.y = wheelRadius - floorH / 2;
  chassis.castShadow = true;
  group.add(chassis);

  // Cab lower
  const cabBody = new THREE.Mesh(
    new THREE.BoxGeometry(cabLen, bodyH, v.width),
    new THREE.MeshPhongMaterial({ color: c, specular: 0x444444, shininess: 60 })
  );
  cabBody.position.set(-(v.length - cabLen) / 2, wheelRadius + bodyH / 2, 0);
  cabBody.castShadow = true;
  group.add(cabBody);

  // Cab roof
  const roofH = cabH - bodyH - floorH;
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(cabLen * 0.88, roofH, v.width * 0.92),
    new THREE.MeshPhongMaterial({ color: c, specular: 0x444444, shininess: 60 })
  );
  roof.position.set(-(v.length - cabLen) / 2 + cabLen * 0.02, wheelRadius + bodyH + roofH / 2, 0);
  roof.castShadow = true;
  group.add(roof);

  // Windows
  const wsMat = new THREE.MeshPhongMaterial({ color: 0x88ccff, transparent: true, opacity: 0.4, specular: 0xffffff, shininess: 100, side: THREE.DoubleSide });
  // Windshield
  const ws = new THREE.Mesh(new THREE.PlaneGeometry(v.width * 0.85, roofH * 0.9), wsMat);
  ws.rotation.y = Math.PI / 2;
  ws.position.set(-v.length / 2 + 20, wheelRadius + bodyH + roofH * 0.45, 0);
  group.add(ws);
  // Rear window
  const rw = new THREE.Mesh(new THREE.PlaneGeometry(v.width * 0.8, roofH * 0.7), wsMat);
  rw.rotation.y = Math.PI / 2;
  rw.position.set(-(v.length - cabLen) / 2 + cabLen - 20, wheelRadius + bodyH + roofH * 0.4, 0);
  group.add(rw);
  // Side windows
  [-1, 1].forEach((side) => {
    const sw = new THREE.Mesh(new THREE.PlaneGeometry(cabLen * 0.6, roofH * 0.75), wsMat);
    sw.position.set(-(v.length - cabLen) / 2 + cabLen * 0.1, wheelRadius + bodyH + roofH * 0.4, side * v.width / 2 + side * 2);
    group.add(sw);
  });

  // Bed floor
  const bedFloor = new THREE.Mesh(
    new THREE.BoxGeometry(bedLen, floorH * 1.5, v.width * 0.95),
    new THREE.MeshPhongMaterial({ color: c.clone().multiplyScalar(0.6) })
  );
  bedFloor.position.set((v.length - bedLen) / 2, wheelRadius + floorH * 0.5, 0);
  bedFloor.castShadow = true;
  group.add(bedFloor);

  // Bed walls
  const wallT = 60;
  const bwMat = new THREE.MeshPhongMaterial({ color: c.clone().multiplyScalar(0.8), specular: 0x333333, shininess: 40 });
  [-1, 1].forEach((side) => {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(bedLen, bedWallH, wallT), bwMat);
    wall.position.set((v.length - bedLen) / 2, wheelRadius + floorH + bedWallH / 2, side * (v.width * 0.95 / 2 - wallT / 2));
    wall.castShadow = true;
    group.add(wall);
  });
  // Front wall
  const fw = new THREE.Mesh(new THREE.BoxGeometry(wallT, bedWallH * 1.3, v.width * 0.95), bwMat);
  fw.position.set((v.length - bedLen) / 2 - bedLen / 2 + wallT / 2, wheelRadius + floorH + bedWallH * 0.65, 0);
  fw.castShadow = true;
  group.add(fw);
  // Tailgate
  const tg = new THREE.Mesh(
    new THREE.BoxGeometry(wallT * 0.7, bedWallH, v.width * 0.95),
    new THREE.MeshPhongMaterial({ color: c.clone().multiplyScalar(0.75) })
  );
  tg.position.set(v.length / 2 - wallT * 0.35, wheelRadius + floorH + bedWallH / 2, 0);
  tg.castShadow = true;
  group.add(tg);

  // Wheels
  const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth, 16);
  const wheelMat = new THREE.MeshPhongMaterial({ color: 0x111111, specular: 0x222222, shininess: 30 });
  const hubGeo = new THREE.CylinderGeometry(wheelRadius * 0.45, wheelRadius * 0.45, wheelWidth + 4, 8);
  const hubMat = new THREE.MeshPhongMaterial({ color: 0x888888, specular: 0xaaaaaa, shininess: 80 });
  [
    { x: -v.length / 2 + cabLen * 0.32, z: v.width / 2 + wheelWidth / 2 - 40 },
    { x: -v.length / 2 + cabLen * 0.32, z: -v.width / 2 - wheelWidth / 2 + 40 },
    { x: v.length / 2 - bedLen * 0.35, z: v.width / 2 + wheelWidth / 2 - 40 },
    { x: v.length / 2 - bedLen * 0.35, z: -v.width / 2 - wheelWidth / 2 + 40 },
  ].forEach((wp) => {
    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    wheel.rotation.x = Math.PI / 2; wheel.position.set(wp.x, wheelRadius, wp.z);
    wheel.castShadow = true; group.add(wheel);
    const hub = new THREE.Mesh(hubGeo, hubMat);
    hub.rotation.x = Math.PI / 2; hub.position.set(wp.x, wheelRadius, wp.z);
    group.add(hub);
  });

  // Bumpers
  const bumpGeo = new THREE.BoxGeometry(120, 250, v.width * 0.9);
  const bumpMat = new THREE.MeshPhongMaterial({ color: 0x333333 });
  const fb = new THREE.Mesh(bumpGeo, bumpMat); fb.position.set(-v.length / 2 - 40, wheelRadius - 50, 0); group.add(fb);
  const rb = new THREE.Mesh(bumpGeo, bumpMat); rb.position.set(v.length / 2 + 40, wheelRadius - 50, 0); group.add(rb);

  // Headlights
  const hlGeo = new THREE.SphereGeometry(80, 8, 8);
  const hlMat = new THREE.MeshPhongMaterial({ color: 0xffffcc, emissive: 0xffff88, emissiveIntensity: 0.3 });
  [-1, 1].forEach((s) => { const hl = new THREE.Mesh(hlGeo, hlMat); hl.position.set(-v.length / 2 - 20, wheelRadius + bodyH * 0.3, s * v.width * 0.35); group.add(hl); });

  // Taillights
  const tlMat = new THREE.MeshPhongMaterial({ color: 0xff2222, emissive: 0xff0000, emissiveIntensity: 0.3 });
  [-1, 1].forEach((s) => { const tl = new THREE.Mesh(hlGeo, tlMat); tl.position.set(v.length / 2 + 20, wheelRadius + floorH + bedWallH * 0.3, s * v.width * 0.38); group.add(tl); });

  // Side mirrors
  const mirMat = new THREE.MeshPhongMaterial({ color: c });
  [-1, 1].forEach((s) => {
    const mir = new THREE.Mesh(new THREE.BoxGeometry(100, 80, 50), mirMat);
    mir.position.set(-v.length / 2 + cabLen * 0.22, wheelRadius + bodyH + 100, s * (v.width / 2 + 80));
    group.add(mir);
  });

  if (isSelected) {
    const glow = new THREE.Mesh(
      new THREE.BoxGeometry(v.length + 200, v.height + 200, v.width + 200),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06, wireframe: true })
    );
    glow.position.y = v.height / 2;
    group.add(glow);
  }

  return group;
}

// ============================================================
// 3D SCENE
// ============================================================
function ThreeScene({ container, vehicles, selectedId }) {
  const mountRef = useRef(null);
  const sceneRef = useRef({});
  const frameRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const w = mount.clientWidth, h = mount.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdce8f5);
    scene.fog = new THREE.FogExp2(0xdce8f5, 0.00004);
    const camera = new THREE.PerspectiveCamera(50, w / h, 10, 100000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const dir = new THREE.DirectionalLight(0xffffff, 1.8);
    dir.position.set(15000, 20000, 10000);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.camera.near = 100; dir.shadow.camera.far = 50000;
    dir.shadow.camera.left = -15000; dir.shadow.camera.right = 15000;
    dir.shadow.camera.top = 15000; dir.shadow.camera.bottom = -15000;
    scene.add(dir);
    scene.add(new THREE.DirectionalLight(0x8888cc, 0.3).translateX(-10000).translateY(5000));

    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(60000, 60000), new THREE.MeshLambertMaterial({ color: 0xc8d8e8 }));
    gnd.rotation.x = -Math.PI / 2; gnd.position.y = -5; gnd.receiveShadow = true; scene.add(gnd);
    const grid = new THREE.GridHelper(40000, 40, 0x8899bb, 0xaabbcc);
    grid.position.y = -2; scene.add(grid);

    sceneRef.current = { scene, camera, renderer, mount };

    let isDown = false, startX = 0, startY = 0, theta = 0.7, phi = 0.55, radius = 20000;
    const target = new THREE.Vector3(6000, 1200, 0);
    const updateCam = () => {
      camera.position.set(target.x + radius * Math.sin(phi) * Math.cos(theta), target.y + radius * Math.cos(phi), target.z + radius * Math.sin(phi) * Math.sin(theta));
      camera.lookAt(target);
    };
    updateCam();

    const onDown = (e) => { isDown = true; startX = e.clientX; startY = e.clientY; };
    const onMove = (e) => { if (!isDown) return; theta += (e.clientX - startX) * 0.005; phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, phi - (e.clientY - startY) * 0.005)); startX = e.clientX; startY = e.clientY; updateCam(); };
    const onUp = () => { isDown = false; };
    const onWheel = (e) => { radius = Math.max(4000, Math.min(45000, radius + e.deltaY * 12)); updateCam(); };
    renderer.domElement.addEventListener("mousedown", onDown);
    renderer.domElement.addEventListener("mousemove", onMove);
    renderer.domElement.addEventListener("mouseup", onUp);
    renderer.domElement.addEventListener("wheel", onWheel);

    const animate = () => { frameRef.current = requestAnimationFrame(animate); renderer.render(scene, camera); };
    animate();

    const onResize = () => { const nw = mount.clientWidth, nh = mount.clientHeight; camera.aspect = nw / nh; camera.updateProjectionMatrix(); renderer.setSize(nw, nh); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("mousedown", onDown);
      renderer.domElement.removeEventListener("mousemove", onMove);
      renderer.domElement.removeEventListener("mouseup", onUp);
      renderer.domElement.removeEventListener("wheel", onWheel);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const { scene } = sceneRef.current;
    if (!scene) return;
    const rem = [];
    scene.traverse((o) => { if (o.userData.dynamic) rem.push(o); });
    rem.forEach((o) => scene.remove(o));

    // Container wireframe
    const cEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(container.innerLength, container.innerHeight, container.innerWidth)),
      new THREE.LineBasicMaterial({ color: 0x00ffaa })
    );
    cEdge.position.set(container.innerLength / 2, container.innerHeight / 2, 0);
    cEdge.userData.dynamic = true; scene.add(cEdge);

    // Floor
    const cf = new THREE.Mesh(new THREE.PlaneGeometry(container.innerLength, container.innerWidth), new THREE.MeshLambertMaterial({ color: 0x1a3a2a, transparent: true, opacity: 0.5, side: THREE.DoubleSide }));
    cf.rotation.x = -Math.PI / 2; cf.position.set(container.innerLength / 2, 2, 0);
    cf.receiveShadow = true; cf.userData.dynamic = true; scene.add(cf);

    // Walls
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x88aacc, transparent: true, opacity: 0.12, side: THREE.DoubleSide });
    [-1, 1].forEach((s) => {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(container.innerLength, container.innerHeight), wallMat);
      w.position.set(container.innerLength / 2, container.innerHeight / 2, s * container.innerWidth / 2);
      w.userData.dynamic = true; scene.add(w);
    });
    const bw = new THREE.Mesh(new THREE.PlaneGeometry(container.innerWidth, container.innerHeight), wallMat);
    bw.rotation.y = Math.PI / 2; bw.position.set(0, container.innerHeight / 2, 0);
    bw.userData.dynamic = true; scene.add(bw);

    // Door
    const door = new THREE.Mesh(new THREE.PlaneGeometry(container.doorWidth, container.doorHeight), new THREE.MeshBasicMaterial({ color: 0x00ffaa, transparent: true, opacity: 0.04, side: THREE.DoubleSide }));
    door.rotation.y = Math.PI / 2; door.position.set(container.innerLength, container.doorHeight / 2, 0);
    door.userData.dynamic = true; scene.add(door);

    // Vehicles
    vehicles.forEach((v) => {
      const truck = buildTruck3D(v, v.id === selectedId);
      truck.position.set(v.x + v.length / 2, 0, v.y - container.innerWidth / 2 + v.width / 2);
      if (v.rotated) truck.rotation.y = Math.PI / 2;
      if (v.rearLifted) {
        const tilt = -0.14;
        if (v.rotated) truck.rotation.x = tilt; else truck.rotation.z = tilt;
        truck.position.y += 280;
      }
      truck.userData.dynamic = true;
      scene.add(truck);
    });
  }, [container, vehicles, selectedId]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", cursor: "grab" }} />;
}

// ============================================================
// 2D TOP VIEW
// ============================================================
function TopView2D({ container, vehicles, selectedId, onSelectVehicle, onMoveVehicle, collisions }) {
  const canvasRef = useRef(null);
  const [dragging, setDragging] = useState(null);
  const [dragOff, setDragOff] = useState({ x: 0, y: 0 });
  const scaleRef = useRef(1);
  const PAD = 50;

  const getScale = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return 1;
    const r = c.getBoundingClientRect();
    return Math.min((r.width - PAD * 2) / container.innerLength, (r.height - PAD * 2) / container.innerWidth);
  }, [container]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width, h = rect.height;
    const scale = getScale();
    scaleRef.current = scale;

    ctx.fillStyle = "#18253a"; ctx.fillRect(0, 0, w, h);
    const ox = PAD, oy = PAD;
    const cW = container.innerLength * scale, cH = container.innerWidth * scale;

    // Grid
    ctx.strokeStyle = "#ffffff10"; ctx.lineWidth = 0.5;
    for (let x = 1000; x < container.innerLength; x += 1000) { ctx.beginPath(); ctx.moveTo(ox + x * scale, oy); ctx.lineTo(ox + x * scale, oy + cH); ctx.stroke(); }
    for (let y = 500; y < container.innerWidth; y += 500) { ctx.beginPath(); ctx.moveTo(ox, oy + y * scale); ctx.lineTo(ox + cW, oy + y * scale); ctx.stroke(); }

    // Container
    ctx.strokeStyle = "#00ffaa"; ctx.lineWidth = 2;
    ctx.strokeRect(ox, oy, cW, cH);

    // Door
    const ds = (container.innerWidth - container.doorWidth) / 2;
    ctx.strokeStyle = "#00ffaa88"; ctx.lineWidth = 3; ctx.setLineDash([8, 4]);
    ctx.beginPath(); ctx.moveTo(ox + cW, oy + ds * scale); ctx.lineTo(ox + cW, oy + (ds + container.doorWidth) * scale); ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = "#00ffaa"; ctx.font = "bold 11px monospace"; ctx.textAlign = "center";
    ctx.fillText(`${container.innerLength} mm`, ox + cW / 2, oy - 16);
    ctx.save(); ctx.translate(ox - 20, oy + cH / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(`${container.innerWidth} mm`, 0, 0); ctx.restore();
    ctx.fillStyle = "#00ffaa66"; ctx.font = "10px sans-serif"; ctx.textAlign = "left";
    ctx.fillText("DOOR →", ox + cW + 8, oy + cH / 2 + 4);

    // Scale bar
    const sbMM = 2000, sbPx = sbMM * scale;
    ctx.strokeStyle = "#ffffff44"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(ox, oy + cH + 20); ctx.lineTo(ox + sbPx, oy + cH + 20);
    ctx.moveTo(ox, oy + cH + 16); ctx.lineTo(ox, oy + cH + 24);
    ctx.moveTo(ox + sbPx, oy + cH + 16); ctx.lineTo(ox + sbPx, oy + cH + 24); ctx.stroke();
    ctx.fillStyle = "#ffffff44"; ctx.font = "9px monospace"; ctx.textAlign = "center";
    ctx.fillText(`${sbMM} mm`, ox + sbPx / 2, oy + cH + 32);

    vehicles.forEach((v) => drawTruck2D(ctx, v, ox, oy, scale, v.id === selectedId, collisions.has(v.id)));
  }, [container, vehicles, selectedId, collisions, getScale]);

  useEffect(() => { draw(); }, [draw]);
  useEffect(() => { window.addEventListener("resize", draw); return () => window.removeEventListener("resize", draw); }, [draw]);

  const getPos = (e) => { const r = canvasRef.current.getBoundingClientRect(); return { cx: e.clientX - r.left, cy: e.clientY - r.top }; };
  const handleDown = (e) => {
    const { cx, cy } = getPos(e);
    const s = scaleRef.current;
    for (let i = vehicles.length - 1; i >= 0; i--) {
      const v = vehicles[i];
      const vx = PAD + v.x * s, vy = PAD + v.y * s;
      const vw = (v.rotated ? v.width : v.length) * s, vh = (v.rotated ? v.length : v.width) * s;
      if (cx >= vx && cx <= vx + vw && cy >= vy && cy <= vy + vh) {
        onSelectVehicle(v.id); setDragging(v.id); setDragOff({ x: cx - vx, y: cy - vy }); return;
      }
    }
    onSelectVehicle(null);
  };
  const handleMove = (e) => { if (!dragging) return; const { cx, cy } = getPos(e); const s = scaleRef.current; onMoveVehicle(dragging, Math.round((cx - PAD - dragOff.x) / s), Math.round((cy - PAD - dragOff.y) / s)); };
  const handleUp = () => setDragging(null);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", cursor: dragging ? "grabbing" : "crosshair", display: "block" }} onMouseDown={handleDown} onMouseMove={handleMove} onMouseUp={handleUp} onMouseLeave={handleUp} />;
}

// ============================================================
// BACKGROUND REMOVAL (flood-fill from corners)
// ============================================================
function removeBackground(img, tolerance = 45) {
  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;
  const off = document.createElement("canvas");
  off.width = w; off.height = h;
  const ctx = off.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const id = ctx.getImageData(0, 0, w, h);
  const d = id.data;
  const bgR = d[0], bgG = d[1], bgB = d[2];
  const visited = new Uint8Array(w * h);
  const queue = [0, w - 1, (h - 1) * w, h * w - 1];
  while (queue.length) {
    const idx = queue.pop();
    if (idx < 0 || idx >= w * h || visited[idx]) continue;
    visited[idx] = 1;
    const p = idx * 4;
    if (Math.abs(d[p] - bgR) + Math.abs(d[p + 1] - bgG) + Math.abs(d[p + 2] - bgB) > tolerance * 3) continue;
    d[p + 3] = 0;
    const x = idx % w;
    if (x > 0) queue.push(idx - 1);
    if (x < w - 1) queue.push(idx + 1);
    queue.push(idx - w, idx + w);
  }
  ctx.putImageData(id, 0, 0);
  return off;
}

// ============================================================
// SIDE ELEVATION VIEW
// ============================================================
const SideElevView = forwardRef(function SideElevView({ container, vehicles, selectedId, onSelectVehicle, onUpdateVehicle }, ref) {
  const canvasRef = useRef(null);
  useImperativeHandle(ref, () => ({ getCanvas: () => canvasRef.current }), []);
  const imgCacheRef = useRef({});
  const [dragging, setDragging] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const viewRef = useRef({ zoom: 1, pan: { x: 0, y: 0 } });
  const panStartRef = useRef(null);

  const updateView = useCallback((newZoom, newPan) => {
    viewRef.current = { zoom: newZoom, pan: newPan };
    setZoom(newZoom);
    setPanOffset(newPan);
  }, []);

  const PAD = 60;

  useEffect(() => {
    vehicles.forEach((v) => {
      if (!v.sideImage) return;
      const key = `${v.id}_${v.removeBg ? 1 : 0}`;
      if (imgCacheRef.current[key]) return;
      const img = new Image();
      img.src = v.sideImage;
      img.onload = () => {
        imgCacheRef.current[key] = v.removeBg ? removeBackground(img) : img;
        draw();
      };
    });
  }, [vehicles]);

  const getLayout = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return { scale: 1, ox: PAD, oy: PAD, cW: 0, cH: 0, baseScale: 1 };
    const r = c.getBoundingClientRect();
    const baseScale = Math.min((r.width - PAD * 2) / container.innerLength, (r.height - PAD * 2) / container.innerHeight);
    const scale = baseScale * zoom;
    const cW = container.innerLength * scale;
    const cH = container.innerHeight * scale;
    const baseOy = (r.height - container.innerHeight * baseScale) / 2;
    const ox = PAD + panOffset.x;
    const oy = baseOy + panOffset.y;
    return { scale, ox, oy, cW, cH, baseScale };
  }, [container, zoom, panOffset]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width, h = rect.height;
    const { scale, ox, oy, cW, cH } = getLayout();

    ctx.fillStyle = "#18253a";
    ctx.fillRect(0, 0, w, h);

    // Container interior (white bg)
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(ox, oy, cW, cH);

    // ── labelStep ใช้ร่วมกันระหว่าง grid และ ruler ──
    const labelStep = (() => { const m = 45 / scale; return m <= 100 ? 100 : m <= 200 ? 200 : m <= 500 ? 500 : m <= 1000 ? 1000 : 2000; })();

    // ── GRID LINES — ตรงกับ labelStep ของ ruler เสมอ ──
    for (let x = labelStep; x < container.innerLength; x += labelStep) {
      const rx = ox + x * scale;
      if (rx < ox || rx > ox + cW) continue;
      ctx.strokeStyle = x % 1000 === 0 ? "#00000060" : "#00000035";
      ctx.lineWidth = x % 1000 === 0 ? 1 : 0.5;
      ctx.beginPath(); ctx.moveTo(rx, oy); ctx.lineTo(rx, oy + cH); ctx.stroke();
    }
    for (let y = labelStep; y < container.innerHeight; y += labelStep) {
      const ry = oy + cH - y * scale;
      if (ry < oy || ry > oy + cH) continue;
      ctx.strokeStyle = y % 1000 === 0 ? "#00000060" : "#00000035";
      ctx.lineWidth = y % 1000 === 0 ? 1 : 0.5;
      ctx.beginPath(); ctx.moveTo(ox, ry); ctx.lineTo(ox + cW, ry); ctx.stroke();
    }

    // Container box
    ctx.strokeStyle = "#00ffaa"; ctx.lineWidth = 2;
    ctx.strokeRect(ox, oy, cW, cH);

    // Floor
    ctx.fillStyle = "#d0e8d088";
    ctx.fillRect(ox, oy + cH - 5, cW, 5);

    // Door height line
    const doorY = oy + cH - container.doorHeight * scale;
    ctx.strokeStyle = "#dd7700cc"; ctx.lineWidth = 1.5; ctx.setLineDash([8, 4]);
    ctx.beginPath(); ctx.moveTo(ox, doorY); ctx.lineTo(ox + cW, doorY); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#dd7700ee"; ctx.font = "bold 9px monospace"; ctx.textAlign = "right";
    ctx.fillText(`⚠ DOOR MAX ${container.doorHeight}mm`, ox + cW - 4, doorY - 4);

    const rulerH = 22;
    const rulerW = 36;
    const xStart = Math.max(0, Math.floor(Math.max(0, -ox) / scale / 100) * 100);
    const xEnd = Math.min(container.innerLength, Math.ceil((w - ox) / scale / 100) * 100 + 100);
    const yStart = Math.max(0, Math.floor(Math.max(0, oy + cH - h) / scale / 100) * 100);
    const yEnd = Math.min(container.innerHeight, Math.ceil((oy + cH) / scale / 100) * 100 + 100);
    const xLabel = (x) => x >= 1000 && labelStep >= 1000 ? `${x / 1000}m` : `${x}`;

    // ── HORIZONTAL RULER (bottom + top) ──
    [{ base: oy + cH + 2, dir: 1 }, { base: oy - 2, dir: -1 }].forEach(({ base, dir }) => {
      ctx.fillStyle = "#141e30ee";
      ctx.fillRect(ox, dir === 1 ? base : base - rulerH, cW, rulerH);
      for (let x = xStart; x <= xEnd; x += 100) {
        const rx = ox + x * scale;
        if (rx < ox - 1 || rx > ox + cW + 1) continue;
        const isLabel = x % labelStep === 0;
        const isMid = x % 500 === 0 && !isLabel;
        const tickH = (isLabel ? 13 : isMid ? 8 : 4) * dir;
        ctx.strokeStyle = isLabel ? "#00ffaadd" : isMid ? "#00ffaa55" : "#00000022";
        ctx.lineWidth = isLabel ? 1.2 : 0.5;
        ctx.beginPath(); ctx.moveTo(rx, base); ctx.lineTo(rx, base + tickH); ctx.stroke();
        if (isLabel) {
          ctx.fillStyle = "#00ffaaee"; ctx.font = "bold 8px monospace"; ctx.textAlign = "center";
          ctx.fillText(xLabel(x), rx, dir === 1 ? base + rulerH : base - 4);
        }
      }
    });

    // ── VERTICAL RULER (left + right) ──
    [{ base: ox - 2, dir: -1 }, { base: ox + cW + 2, dir: 1 }].forEach(({ base, dir }) => {
      ctx.fillStyle = "#141e30ee";
      ctx.fillRect(dir === -1 ? base - rulerW : base, oy, rulerW, cH);
      for (let y = yStart; y <= yEnd; y += 100) {
        const ry = oy + cH - y * scale;
        if (ry < oy - 1 || ry > oy + cH + 1) continue;
        const isLabel = y % labelStep === 0;
        const isMid = y % 500 === 0 && !isLabel;
        const tickW = (isLabel ? 13 : isMid ? 8 : 4) * dir;
        ctx.strokeStyle = isLabel ? "#00ffaadd" : isMid ? "#00ffaa55" : "#00000022";
        ctx.lineWidth = isLabel ? 1.2 : 0.5;
        ctx.beginPath(); ctx.moveTo(base, ry); ctx.lineTo(base + tickW, ry); ctx.stroke();
        if (isLabel) {
          ctx.fillStyle = "#00ffaaee"; ctx.font = "bold 8px monospace";
          ctx.textAlign = dir === -1 ? "right" : "left";
          ctx.fillText(`${y}`, dir === -1 ? base - 4 : base + 4, ry + 3);
        }
      }
    });

    // Dimension labels
    ctx.fillStyle = "#00ffaacc"; ctx.font = "bold 10px monospace"; ctx.textAlign = "center";
    ctx.fillText(`${container.innerLength} mm`, ox + cW / 2, oy - rulerH - 4);
    ctx.save(); ctx.translate(ox - rulerW - 14, oy + cH / 2); ctx.rotate(-Math.PI / 2);
    ctx.fillText(`${container.innerHeight} mm`, 0, 0); ctx.restore();

    // Vehicles
    vehicles.forEach((v) => {
      const sx = v.sideX ?? 200;
      const sy = v.sideY ?? 0;
      const angle = (v.sideAngle ?? 0) * Math.PI / 180;
      const vW = v.length * scale;
      const vH = v.height * scale;
      const cx = ox + sx * scale + vW / 2;
      const cy = oy + cH - sy * scale - vH / 2;
      const isSelected = v.id === selectedId;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      const key = `${v.id}_${v.removeBg ? 1 : 0}`;
      const img = imgCacheRef.current[key];
      if (img && (img.complete !== false)) {
        const dW = (v.imgRealLength ?? v.length) * scale;
        const dH = (v.imgRealHeight ?? v.height) * scale;
        if (v.flipX) { ctx.scale(-1, 1); }
        ctx.drawImage(img, -dW / 2, -dH / 2, dW, dH);
        if (v.flipX) { ctx.scale(-1, 1); }
      } else {
        ctx.fillStyle = v.color + "22";
        ctx.strokeStyle = v.color + "cc";
        ctx.lineWidth = 1.5;
        ctx.fillRect(-vW / 2, -vH / 2, vW, vH);
        ctx.strokeRect(-vW / 2, -vH / 2, vW, vH);
        const cabW = vW * (v.cabRatio ?? 0.5);
        ctx.strokeStyle = v.color + "77"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(-vW / 2 + cabW, -vH / 2); ctx.lineTo(-vW / 2 + cabW, vH / 2); ctx.stroke();
        ctx.fillStyle = "#ffffffaa";
        ctx.font = `bold ${Math.max(8, vW * 0.04)}px sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(v.preset, 0, 0);
      }

      if (isSelected) {
        ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
        ctx.strokeRect(-vW / 2 - 3, -vH / 2 - 3, vW + 6, vH + 6);
        ctx.setLineDash([]);
        ctx.strokeStyle = "#00ffaa"; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, -vH / 2 - 2); ctx.lineTo(0, -vH / 2 - 14); ctx.stroke();
        ctx.fillStyle = "#00ffaadd"; ctx.strokeStyle = "#00ffaa"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(0, -vH / 2 - 21, 7, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#ffffff88"; ctx.font = "8px monospace"; ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(`${Math.round((v.sideAngle ?? 0) * 10) / 10}°`, vW / 2 + 5, -vH / 2);
      }

      ctx.restore();
    });
  }, [container, vehicles, selectedId, getLayout]);

  useEffect(() => { draw(); }, [draw]);
  useEffect(() => { window.addEventListener("resize", draw); return () => window.removeEventListener("resize", draw); }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onWheel = (e) => {
      e.preventDefault();
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;
      const { zoom: curZoom, pan: curPan } = viewRef.current;
      const baseScale = Math.min((r.width - PAD * 2) / container.innerLength, (r.height - PAD * 2) / container.innerHeight);
      const scale = baseScale * curZoom;
      const baseOy = (r.height - container.innerHeight * baseScale) / 2;
      const ox = PAD + curPan.x;
      const oy = baseOy + curPan.y;
      const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
      const newZoom = Math.max(0.5, Math.min(20, curZoom * factor));
      const newScale = baseScale * newZoom;
      const newOx = mx - (mx - ox) * newScale / scale;
      const newOy = my - (my - oy) * newScale / scale;
      updateView(newZoom, { x: newOx - PAD, y: newOy - baseOy });
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", onWheel);
  }, [container, updateView]);

  const getCanvasPos = (e) => { const r = canvasRef.current.getBoundingClientRect(); return { mx: e.clientX - r.left, my: e.clientY - r.top }; };

  const getVehicleInfo = (v) => {
    const { scale, ox, oy, cH } = getLayout();
    const vW = v.length * scale, vH = v.height * scale;
    const cx = ox + (v.sideX ?? 200) * scale + vW / 2;
    const cy = oy + cH - (v.sideY ?? 0) * scale - vH / 2;
    return { cx, cy, vW, vH };
  };

  const handleDown = (e) => {
    if (e.button === 1) {
      e.preventDefault();
      const { mx, my } = getCanvasPos(e);
      panStartRef.current = { mx, my, panX: viewRef.current.pan.x, panY: viewRef.current.pan.y };
      setDragging({ id: null, type: "pan" });
      return;
    }
    const { mx, my } = getCanvasPos(e);
    for (let i = vehicles.length - 1; i >= 0; i--) {
      const v = vehicles[i];
      const { cx, cy, vW, vH } = getVehicleInfo(v);
      const angle = (v.sideAngle ?? 0) * Math.PI / 180;
      if (v.id === selectedId) {
        const hLy = -vH / 2 - 21;
        const hWx = cx - hLy * Math.sin(angle);
        const hWy = cy + hLy * Math.cos(angle);
        if (Math.hypot(mx - hWx, my - hWy) < 12) {
          onSelectVehicle(v.id);
          setDragging({ id: v.id, type: "rotate", cx, cy });
          return;
        }
      }
      const lx = (mx - cx) * Math.cos(-angle) - (my - cy) * Math.sin(-angle);
      const ly = (mx - cx) * Math.sin(-angle) + (my - cy) * Math.cos(-angle);
      if (Math.abs(lx) <= vW / 2 + 5 && Math.abs(ly) <= vH / 2 + 5) {
        onSelectVehicle(v.id);
        setDragging({ id: v.id, type: "move", offX: mx - cx, offY: my - cy });
        return;
      }
    }
    onSelectVehicle(null);
    panStartRef.current = { mx, my, panX: viewRef.current.pan.x, panY: viewRef.current.pan.y };
    setDragging({ id: null, type: "pan" });
  };

  const handleMove = (e) => {
    if (dragging?.type === "pan" && panStartRef.current) {
      const { mx, my } = getCanvasPos(e);
      updateView(viewRef.current.zoom, {
        x: panStartRef.current.panX + mx - panStartRef.current.mx,
        y: panStartRef.current.panY + my - panStartRef.current.my,
      });
      return;
    }
    if (!dragging) return;
    const { mx, my } = getCanvasPos(e);
    const { scale, ox, oy, cH } = getLayout();
    const v = vehicles.find((v) => v.id === dragging.id);
    if (!v) return;
    if (dragging.type === "move") {
      const vW = v.length * scale, vH = v.height * scale;
      const newCx = mx - dragging.offX, newCy = my - dragging.offY;
      onUpdateVehicle(v.id, { sideX: Math.round((newCx - ox - vW / 2) / scale), sideY: Math.max(0, Math.round((oy + cH - newCy - vH / 2) / scale)) });
    } else if (dragging.type === "rotate") {
      const angle = Math.atan2(mx - dragging.cx, -(my - dragging.cy)) * 180 / Math.PI;
      onUpdateVehicle(v.id, { sideAngle: Math.round(angle * 10) / 10 });
    }
  };

  const handleUp = () => setDragging(null);

  const cursor = dragging?.type === "pan" ? "grabbing" : dragging ? "grabbing" : "crosshair";
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", cursor, display: "block" }}
        onMouseDown={handleDown} onMouseMove={handleMove} onMouseUp={handleUp} onMouseLeave={handleUp} />
      <div style={{ position: "absolute", bottom: 10, right: 10, display: "flex", gap: 4, alignItems: "center" }}>
        <button onClick={() => updateView(Math.min(20, viewRef.current.zoom * 1.3), viewRef.current.pan)}
          style={{ width: 28, height: 28, borderRadius: 4, border: "1px solid #3a4a66", background: "#1e2a42", color: "#e8eaf5", cursor: "pointer", fontSize: 16, lineHeight: 1 }}>+</button>
        <button onClick={() => updateView(Math.max(0.5, viewRef.current.zoom / 1.3), viewRef.current.pan)}
          style={{ width: 28, height: 28, borderRadius: 4, border: "1px solid #3a4a66", background: "#1e2a42", color: "#e8eaf5", cursor: "pointer", fontSize: 16, lineHeight: 1 }}>−</button>
        <button onClick={() => updateView(1, { x: 0, y: 0 })}
          style={{ padding: "0 8px", height: 28, borderRadius: 4, border: "1px solid #3a4a66", background: "#1e2a42", color: "#00ddaa", cursor: "pointer", fontSize: 10, fontFamily: "monospace" }}>
          {zoom.toFixed(1)}× ↺
        </button>
      </div>
    </div>
  );
});

// ============================================================
// BOX TOP VIEW (2D top-down)
// ============================================================
function BoxTopView({ container, boxes, selectedId, onSelectBox, onMoveBox, collisions }) {
  const canvasRef = useRef(null);
  const [dragging, setDragging] = useState(null);
  const [dragOff, setDragOff] = useState({ x: 0, y: 0 });
  const scaleRef = useRef(1);
  const PAD = 50;

  const getScale = useCallback(() => {
    const c = canvasRef.current; if (!c) return 1;
    const r = c.getBoundingClientRect();
    return Math.min((r.width - PAD * 2) / container.innerLength, (r.height - PAD * 2) / container.innerWidth);
  }, [container]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width, h = rect.height;
    const scale = getScale(); scaleRef.current = scale;
    const ox = PAD, oy = PAD;
    const cW = container.innerLength * scale, cH = container.innerWidth * scale;

    ctx.fillStyle = "#18253a"; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#ffffff10"; ctx.lineWidth = 0.5;
    for (let x = 1000; x < container.innerLength; x += 1000) { ctx.beginPath(); ctx.moveTo(ox + x*scale, oy); ctx.lineTo(ox + x*scale, oy+cH); ctx.stroke(); }
    for (let y = 500; y < container.innerWidth; y += 500) { ctx.beginPath(); ctx.moveTo(ox, oy+y*scale); ctx.lineTo(ox+cW, oy+y*scale); ctx.stroke(); }

    ctx.strokeStyle = "#00ffaa"; ctx.lineWidth = 2; ctx.strokeRect(ox, oy, cW, cH);
    const ds = (container.innerWidth - container.doorWidth) / 2;
    ctx.strokeStyle = "#00ffaa88"; ctx.lineWidth = 3; ctx.setLineDash([8,4]);
    ctx.beginPath(); ctx.moveTo(ox+cW, oy+ds*scale); ctx.lineTo(ox+cW, oy+(ds+container.doorWidth)*scale); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#00ffaa"; ctx.font = "bold 11px monospace"; ctx.textAlign = "center";
    ctx.fillText(`${container.innerLength} mm`, ox+cW/2, oy-16);
    ctx.save(); ctx.translate(ox-20, oy+cH/2); ctx.rotate(-Math.PI/2); ctx.fillText(`${container.innerWidth} mm`, 0, 0); ctx.restore();
    ctx.fillStyle = "#00ffaa66"; ctx.font = "10px sans-serif"; ctx.textAlign = "left";
    ctx.fillText("DOOR →", ox+cW+8, oy+cH/2+4);

    boxes.forEach((b) => {
      const bx = ox + b.x*scale, by = oy + b.y*scale;
      const bw = b.length*scale, bh = b.width*scale;
      const isSelected = b.id === selectedId, hasCol = collisions.has(b.id);
      ctx.fillStyle = "rgba(0,0,0,0.2)"; ctx.fillRect(bx+2, by+2, bw, bh);
      ctx.fillStyle = b.color + (hasCol ? "cc" : "99"); ctx.fillRect(bx, by, bw, bh);
      ctx.strokeStyle = hasCol ? "#ff4444" : isSelected ? "#ffffff" : b.color;
      ctx.lineWidth = isSelected ? 2 : 1.5; ctx.strokeRect(bx, by, bw, bh);
      ctx.strokeStyle = b.color+"44"; ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(bx,by); ctx.lineTo(bx+bw,by+bh); ctx.moveTo(bx+bw,by); ctx.lineTo(bx,by+bh); ctx.stroke();
      const fs = Math.max(8, Math.min(bw,bh)*0.16);
      ctx.fillStyle = "#ffffffcc"; ctx.font = `${isSelected?"bold ":""}${fs}px sans-serif`;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(b.preset, bx+bw/2, by+bh/2 - fs*0.5);
      ctx.font = `${Math.max(7,fs*0.8)}px monospace`; ctx.fillStyle = "#ffffff88";
      ctx.fillText(`${b.length}×${b.width}×${b.height}`, bx+bw/2, by+bh/2+fs*0.5);
      if (isSelected) { ctx.strokeStyle="#ffffff"; ctx.lineWidth=2; ctx.setLineDash([4,3]); ctx.strokeRect(bx-3,by-3,bw+6,bh+6); ctx.setLineDash([]); }
    });
  }, [container, boxes, selectedId, collisions, getScale]);

  useEffect(() => { draw(); }, [draw]);
  useEffect(() => { window.addEventListener("resize", draw); return () => window.removeEventListener("resize", draw); }, [draw]);

  const getPos = (e) => { const r = canvasRef.current.getBoundingClientRect(); return { cx: e.clientX-r.left, cy: e.clientY-r.top }; };
  const handleDown = (e) => {
    const { cx, cy } = getPos(e); const s = scaleRef.current;
    for (let i = boxes.length-1; i >= 0; i--) {
      const b = boxes[i];
      const bx = PAD+b.x*s, by = PAD+b.y*s, bw = b.length*s, bh = b.width*s;
      if (cx>=bx && cx<=bx+bw && cy>=by && cy<=by+bh) { onSelectBox(b.id); setDragging(b.id); setDragOff({x:cx-bx,y:cy-by}); return; }
    }
    onSelectBox(null);
  };
  const handleMove = (e) => { if (!dragging) return; const {cx,cy}=getPos(e); const s=scaleRef.current; onMoveBox(dragging, Math.round((cx-PAD-dragOff.x)/s), Math.round((cy-PAD-dragOff.y)/s)); };
  const handleUp = () => setDragging(null);

  return <canvas ref={canvasRef} style={{width:"100%",height:"100%",cursor:dragging?"grabbing":"crosshair",display:"block"}} onMouseDown={handleDown} onMouseMove={handleMove} onMouseUp={handleUp} onMouseLeave={handleUp}/>;
}

// ============================================================
// BOX 3D SCENE
// ============================================================
function makeBoxLabel(text, boxColor) {
  const c = document.createElement("canvas");
  c.width = 400; c.height = 72;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "rgba(0,0,0,0.72)";
  ctx.fillRect(0, 0, 400, 72);
  ctx.strokeStyle = boxColor || "#ffffff";
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, 396, 68);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 26px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 200, 36);
  return new THREE.CanvasTexture(c);
}

function BoxScene({ container, boxes, selectedId, onMoveBox, onSelectBox, onPlaceBox }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshMapRef = useRef({});
  const frameRef = useRef(null);
  const stateRef = useRef({});
  useEffect(() => { stateRef.current = { boxes, container, onMoveBox, onSelectBox, onPlaceBox, selectedId }; });

  useEffect(() => {
    const mount = mountRef.current; if (!mount) return;
    const w = mount.clientWidth, h = mount.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdce8f5);
    scene.fog = new THREE.FogExp2(0xdce8f5, 0.00004);
    const camera = new THREE.PerspectiveCamera(50, w/h, 10, 100000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);
    sceneRef.current = scene; cameraRef.current = camera; rendererRef.current = renderer;

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const dir = new THREE.DirectionalLight(0xffffff, 1.8);
    dir.position.set(15000,20000,10000); dir.castShadow=true;
    dir.shadow.mapSize.set(2048,2048); dir.shadow.camera.near=100; dir.shadow.camera.far=50000;
    dir.shadow.camera.left=-15000; dir.shadow.camera.right=15000; dir.shadow.camera.top=15000; dir.shadow.camera.bottom=-15000;
    scene.add(dir);
    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(60000,60000), new THREE.MeshLambertMaterial({color:0xc8d8e8}));
    gnd.rotation.x=-Math.PI/2; gnd.position.y=-5; gnd.receiveShadow=true; scene.add(gnd);
    scene.add(new THREE.GridHelper(40000,40,0x8899bb,0xaabbcc));

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const floorPlane = new THREE.Plane(new THREE.Vector3(0,1,0), 0);
    const floorPt = new THREE.Vector3();
    let isOrbit=false, startX=0, startY=0, theta=0.7, phi=0.55, radius=20000;
    let isDraggingBox=false, dragBoxId=null, dragOffX=0, dragOffZ=0, dragNewX=0, dragNewY=0;
    let isAltLift=false, altLiftId=null, altLiftZ=0;
    const target = new THREE.Vector3(6000,1200,0);

    const updateCam = () => {
      camera.position.set(
        target.x + radius*Math.sin(phi)*Math.cos(theta),
        target.y + radius*Math.cos(phi),
        target.z + radius*Math.sin(phi)*Math.sin(theta)
      );
      camera.lookAt(target);
    };
    updateCam();

    const getBoxMeshes = () => {
      const m = [];
      scene.traverse(o => { if(o.userData.isBoxMesh) m.push(o); });
      return m;
    };

    const onDown = (e) => {
      startX = e.clientX; startY = e.clientY;
      // Alt+drag: lift selected box up/down along Z
      if(e.altKey) {
        e.preventDefault();
        const selId = stateRef.current.selectedId;
        const b = stateRef.current.boxes.find(x => x.id === selId);
        if(b) {
          altLiftId = selId; altLiftZ = b.z; isAltLift = true;
          renderer.domElement.style.cursor = "ns-resize";
        }
        return;
      }
      if(!e.ctrlKey && !e.shiftKey) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX-rect.left)/rect.width)*2-1;
        mouse.y = -((e.clientY-rect.top)/rect.height)*2+1;
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(getBoxMeshes());
        if(hits.length > 0) {
          const bId = hits[0].object.userData.boxId;
          stateRef.current.onSelectBox?.(bId);
          raycaster.ray.intersectPlane(floorPlane, floorPt);
          const b = stateRef.current.boxes.find(x => x.id === bId);
          const cnt = stateRef.current.container;
          if(b) {
            dragOffX = floorPt.x - (b.x + b.length/2);
            dragOffZ = floorPt.z - (b.y - cnt.innerWidth/2 + b.width/2);
            dragNewX = b.x; dragNewY = b.y;
            dragBoxId = bId; isDraggingBox = true;
            renderer.domElement.style.cursor = "grabbing";
          }
          return;
        }
      }
      isOrbit = true;
      renderer.domElement.style.cursor = "grabbing";
    };

    const onMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      startX = e.clientX; startY = e.clientY;

      if(isAltLift && altLiftId) {
        const { boxes: bxs, container: cnt } = stateRef.current;
        const b = bxs.find(x => x.id === altLiftId);
        if(!b) return;
        const liftSpeed = cnt.innerHeight / mount.clientHeight * 2;
        altLiftZ = Math.max(0, Math.min(cnt.innerHeight - b.height, altLiftZ - dy * liftSpeed));
        const entry = meshMapRef.current[altLiftId];
        if(entry) {
          const mx = b.x + b.length/2;
          const mz = b.y - cnt.innerWidth/2 + b.width/2;
          entry.mesh.position.set(mx, altLiftZ + b.height/2, mz);
          entry.edges.position.set(mx, altLiftZ + b.height/2, mz);
          if(entry.label) entry.label.position.set(mx, altLiftZ + b.height + 280, mz);
        }
        return;
      }

      if(isDraggingBox && dragBoxId) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX-rect.left)/rect.width)*2-1;
        mouse.y = -((e.clientY-rect.top)/rect.height)*2+1;
        raycaster.setFromCamera(mouse, camera);
        if(!raycaster.ray.intersectPlane(floorPlane, floorPt)) return;
        const { boxes: bxs, container: cnt } = stateRef.current;
        const b = bxs.find(x => x.id === dragBoxId);
        if(!b) return;
        const newMeshX = floorPt.x - dragOffX;
        const newMeshZ = floorPt.z - dragOffZ;
        dragNewX = Math.max(0, Math.min(cnt.innerLength - b.length, newMeshX - b.length/2));
        dragNewY = Math.max(0, Math.min(cnt.innerWidth - b.width, newMeshZ + cnt.innerWidth/2 - b.width/2));
        const finalMeshX = dragNewX + b.length/2;
        const finalMeshY = b.z + b.height/2;
        const finalMeshZ = dragNewY - cnt.innerWidth/2 + b.width/2;
        const entry = meshMapRef.current[dragBoxId];
        if(entry) {
          entry.mesh.position.set(finalMeshX, finalMeshY, finalMeshZ);
          entry.edges.position.set(finalMeshX, finalMeshY, finalMeshZ);
          if(entry.label) entry.label.position.set(finalMeshX, b.z + b.height + 280, finalMeshZ);
        }
        return;
      }

      if(!isOrbit) return;
      if(e.shiftKey) {
        // Shift+drag: pan camera up/down (world Y)
        const panSpeed = radius / mount.clientHeight;
        target.y -= dy * panSpeed;
      } else if(e.ctrlKey) {
        const panSpeed = radius / mount.clientHeight;
        target.x -= Math.sin(theta) * dx * panSpeed;
        target.z += Math.cos(theta) * dx * panSpeed;
        target.x -= Math.cos(theta) * dy * panSpeed;
        target.z -= Math.sin(theta) * dy * panSpeed;
      } else {
        theta += dx * 0.005;
        phi = Math.max(0.1, Math.min(Math.PI/2-0.05, phi - dy * 0.005));
      }
      updateCam();
    };

    const onUp = () => {
      if(isAltLift && altLiftId) {
        stateRef.current.onPlaceBox?.(altLiftId, null, null, altLiftZ);
      }
      if(isDraggingBox && dragBoxId) {
        stateRef.current.onMoveBox?.(dragBoxId, dragNewX, dragNewY);
      }
      isAltLift = false; altLiftId = null;
      isDraggingBox = false; dragBoxId = null; isOrbit = false;
      renderer.domElement.style.cursor = "grab";
    };

    const onWheel = (e) => {
      e.preventDefault();
      if(e.ctrlKey) {
        // Ctrl+scroll = pan up/down
        const panSpeed = radius / mount.clientHeight;
        target.y -= e.deltaY * panSpeed * 0.5;
      } else {
        radius = Math.max(4000, Math.min(45000, radius + e.deltaY * 12));
      }
      updateCam();
    };

    const onKey = (e) => {
      if(e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      const step = radius * 0.05;
      if(e.key === "ArrowLeft")  { target.x -= Math.sin(theta)*step; target.z += Math.cos(theta)*step; }
      if(e.key === "ArrowRight") { target.x += Math.sin(theta)*step; target.z -= Math.cos(theta)*step; }
      if(e.key === "ArrowUp")    { target.y += step * 0.4; }
      if(e.key === "ArrowDown")  { target.y -= step * 0.4; }
      updateCam();
    };

    renderer.domElement.addEventListener("mousedown", onDown);
    renderer.domElement.addEventListener("mousemove", onMove);
    renderer.domElement.addEventListener("mouseup", onUp);
    renderer.domElement.addEventListener("mouseleave", onUp);
    renderer.domElement.addEventListener("wheel", onWheel, { passive: false });
    renderer.domElement.style.cursor = "grab";
    window.addEventListener("keydown", onKey);

    const animate = () => { frameRef.current=requestAnimationFrame(animate); renderer.render(scene,camera); };
    animate();
    const onResize = () => { const nw=mount.clientWidth,nh=mount.clientHeight; camera.aspect=nw/nh; camera.updateProjectionMatrix(); renderer.setSize(nw,nh); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      renderer.domElement.removeEventListener("mousedown",onDown); renderer.domElement.removeEventListener("mousemove",onMove);
      renderer.domElement.removeEventListener("mouseup",onUp); renderer.domElement.removeEventListener("mouseleave",onUp);
      renderer.domElement.removeEventListener("wheel",onWheel);
      if(mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current; if(!scene) return;
    const rem = []; scene.traverse(o => { if(o.userData.dynamic) rem.push(o); }); rem.forEach(o => scene.remove(o));
    meshMapRef.current = {};

    const cEdge = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(container.innerLength,container.innerHeight,container.innerWidth)),new THREE.LineBasicMaterial({color:0x00ffaa}));
    cEdge.position.set(container.innerLength/2,container.innerHeight/2,0); cEdge.userData.dynamic=true; scene.add(cEdge);
    const cf = new THREE.Mesh(new THREE.PlaneGeometry(container.innerLength,container.innerWidth),new THREE.MeshLambertMaterial({color:0x1a3a2a,transparent:true,opacity:0.4,side:THREE.DoubleSide}));
    cf.rotation.x=-Math.PI/2; cf.position.set(container.innerLength/2,2,0); cf.receiveShadow=true; cf.userData.dynamic=true; scene.add(cf);
    const wallMat = new THREE.MeshLambertMaterial({color:0x88aacc,transparent:true,opacity:0.1,side:THREE.DoubleSide});
    [-1,1].forEach(s => { const w=new THREE.Mesh(new THREE.PlaneGeometry(container.innerLength,container.innerHeight),wallMat); w.position.set(container.innerLength/2,container.innerHeight/2,s*container.innerWidth/2); w.userData.dynamic=true; scene.add(w); });
    const bw = new THREE.Mesh(new THREE.PlaneGeometry(container.innerWidth,container.innerHeight),wallMat);
    bw.rotation.y=Math.PI/2; bw.position.set(0,container.innerHeight/2,0); bw.userData.dynamic=true; scene.add(bw);

    // Scale labels along bottom (length) and left wall (height)
    const makeScaleLabel3D = (text) => {
      const c = document.createElement("canvas");
      c.width = 256; c.height = 64;
      const ctx2 = c.getContext("2d");
      ctx2.fillStyle = "rgba(0,20,40,0.82)";
      ctx2.fillRect(0,0,256,64);
      ctx2.fillStyle = "#00ffaa";
      ctx2.font = "bold 28px monospace";
      ctx2.textAlign = "center";
      ctx2.textBaseline = "middle";
      ctx2.fillText(text, 128, 32);
      return new THREE.CanvasTexture(c);
    };
    // Length labels every 1000mm along bottom front edge
    const lenStep = 1000;
    for(let x=0; x<=container.innerLength; x+=lenStep) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({map:makeScaleLabel3D(`${x}`), depthTest:false}));
      sp.scale.set(700,175,1);
      sp.position.set(x, -250, container.innerWidth/2+200);
      sp.userData.dynamic=true; scene.add(sp);
      // tick line
      const pts=[new THREE.Vector3(x,-10,container.innerWidth/2),new THREE.Vector3(x,-300,container.innerWidth/2)];
      const tick=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0x00ffaa}));
      tick.userData.dynamic=true; scene.add(tick);
    }
    // Height labels every 500mm on left corner
    const hStep = 500;
    for(let y=0; y<=container.innerHeight; y+=hStep) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({map:makeScaleLabel3D(`${y}`), depthTest:false}));
      sp.scale.set(600,150,1);
      sp.position.set(-450, y, container.innerWidth/2);
      sp.userData.dynamic=true; scene.add(sp);
      const pts=[new THREE.Vector3(-10,y,container.innerWidth/2),new THREE.Vector3(-300,y,container.innerWidth/2)];
      const tick=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0x00ffaa}));
      tick.userData.dynamic=true; scene.add(tick);
    }

    // 3D collision detection
    const colliding3D = new Set();
    for(let i=0;i<boxes.length;i++) for(let j=i+1;j<boxes.length;j++) {
      const a=boxes[i],b2=boxes[j];
      if(a.x<b2.x+b2.length&&a.x+a.length>b2.x&&a.y<b2.y+b2.width&&a.y+a.width>b2.y&&a.z<b2.z+b2.height&&a.z+a.height>b2.z){
        colliding3D.add(a.id);colliding3D.add(b2.id);
      }
    }

    boxes.forEach(b => {
      const isColliding = colliding3D.has(b.id);
      const color = isColliding ? new THREE.Color(0x888888) : new THREE.Color(b.color);
      const isSel = b.id === selectedId;
      const geo = new THREE.BoxGeometry(b.length,b.height,b.width);
      const mesh = new THREE.Mesh(geo, new THREE.MeshPhongMaterial({color,specular:0x222222,shininess:40,transparent:true,opacity:isSel?1:0.88}));
      mesh.position.set(b.x+b.length/2, b.z+b.height/2, b.y-container.innerWidth/2+b.width/2);
      mesh.castShadow=true; mesh.userData.dynamic=true; mesh.userData.isBoxMesh=true; mesh.userData.boxId=b.id;
      scene.add(mesh);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo),new THREE.LineBasicMaterial({color:isSel?0xffffff:0x000000,transparent:true,opacity:isSel?0.9:0.25}));
      edges.position.copy(mesh.position); edges.userData.dynamic=true; scene.add(edges);

      const labelTex = makeBoxLabel(`${b.length}×${b.width}×${b.height} mm`, b.color);
      const label = new THREE.Sprite(new THREE.SpriteMaterial({map:labelTex, depthTest:false}));
      const lw = Math.max(b.length, 1400);
      label.scale.set(lw, lw*0.18, 1);
      label.position.set(b.x+b.length/2, b.z+b.height+280, b.y-container.innerWidth/2+b.width/2);
      label.userData.dynamic=true; scene.add(label);

      meshMapRef.current[b.id] = { mesh, edges, label };
    });
  }, [container, boxes, selectedId]);

  return (
    <div style={{position:"relative",width:"100%",height:"100%"}}>
      <div ref={mountRef} style={{width:"100%",height:"100%"}}/>
      <div style={{position:"absolute",bottom:10,left:10,fontSize:10,color:"#6677aa",pointerEvents:"none",background:"rgba(0,0,0,0.4)",padding:"4px 9px",borderRadius:4,lineHeight:1.7}}>
        🖱 Drag = หมุน &nbsp;|&nbsp; Ctrl+Drag = เลื่อน &nbsp;|&nbsp; Shift+Drag = บนล่าง &nbsp;|&nbsp; Scroll = ซูม &nbsp;|&nbsp; ↑↓←→ = เลื่อน &nbsp;|&nbsp; ลากกล่อง = จัดพื้น &nbsp;|&nbsp; Alt+ลาก(เลือกกล่องก่อน) = ยกขึ้นลง &nbsp;|&nbsp; ⬜ = ชนกัน
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function App() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [viewMode, setViewMode] = useState("car");
  const [showAdd, setShowAdd] = useState(false);
  const [addPreset, setAddPreset] = useState("hilux_dc");
  const [custom, setCustom] = useState({ length: 5300, width: 1850, height: 1800, weight: 2000, label: "" });

  const [container, setContainer] = useState({ ...CONTAINER_40FT });
  const [showContainerEdit, setShowContainerEdit] = useState(false);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [selectedBoxId, setSelectedBoxId] = useState(null);
  const [showAddBox, setShowAddBox] = useState(false);
  const [addBoxPreset, setAddBoxPreset] = useState("eu_pallet");
  const [customBox, setCustomBox] = useState({ length: 1000, width: 800, height: 800, weight: 50, label: "" });
  const [projectName, setProjectName] = useState("My Project");
  const vehiclesRef = useRef([]);
  vehiclesRef.current = vehicles;
  const sideElevRef = useRef(null);
  const importFileRef = useRef(null);

  const exportProject = () => {
    const data = { projectName, container, vehicles, boxes };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${projectName.replace(/\s+/g, "_") || "project"}.clp.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importProject = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.container) setContainer(data.container);
        if (data.vehicles) { setVehicles(data.vehicles); setSelectedId(null); }
        if (data.boxes) { setBoxes(data.boxes); setSelectedBoxId(null); }
        if (data.projectName) setProjectName(data.projectName);
      } catch { alert("ไฟล์ไม่ถูกต้อง"); }
    };
    reader.readAsText(file);
  };

  const exportPng = () => {
    const canvas = sideElevRef.current?.getCanvas();
    if (!canvas) { alert("สลับไปหน้า Car Load ก่อน"); return; }
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `${projectName.replace(/\s+/g, "_") || "layout"}.png`;
    a.click();
  };

  const printView = () => {
    const canvas = sideElevRef.current?.getCanvas();
    if (!canvas) { alert("สลับไปหน้า Car Load ก่อน"); return; }
    const url = canvas.toDataURL("image/png");
    const win = window.open("", "_blank");
    win.document.write(`<!DOCTYPE html><html><head><title>${projectName}</title><style>*{margin:0;padding:0}body{background:#fff}img{max-width:100%;display:block}h3{font-family:sans-serif;padding:8px 12px;font-size:13px}@media print{h3{margin:0}}</style></head><body><h3>${projectName} — ${container.name} | ${new Date().toLocaleDateString("th-TH")}</h3><img src="${url}"/></body></html>`);
    win.document.close();
    win.addEventListener("load", () => win.print());
  };

  const totalWeight = vehicles.reduce((s, v) => s + v.weight, 0);
  const overweight = totalWeight > container.maxPayload;

  const clearance = useMemo(() => {
    if (!vehicles.length) return { lenUsed: 0, lenLeft: container.innerLength };
    let maxX = 0;
    vehicles.forEach((v) => { const end = v.x + (v.rotated ? v.width : v.length); if (end > maxX) maxX = end; });
    return { lenUsed: maxX, lenLeft: container.innerLength - maxX };
  }, [vehicles, container]);

  const collisions = useMemo(() => {
    const c = new Set();
    for (let i = 0; i < vehicles.length; i++) for (let j = i + 1; j < vehicles.length; j++) {
      const a = vehicles[i], b = vehicles[j];
      const aL = a.rotated ? a.width : a.length, aW = a.rotated ? a.length : a.width;
      const bL = b.rotated ? b.width : b.length, bW = b.rotated ? b.length : b.width;
      if (a.x < b.x + bL && a.x + aL > b.x && a.y < b.y + bW && a.y + aW > b.y) { c.add(a.id); c.add(b.id); }
    }
    vehicles.forEach((v) => {
      const vL = v.rotated ? v.width : v.length, vW = v.rotated ? v.length : v.width;
      if (v.x < 0 || v.y < 0 || v.x + vL > container.innerLength || v.y + vW > container.innerWidth) c.add(v.id);
    });
    return c;
  }, [vehicles, container]);

  const addVehicle = () => {
    const p = TRUCK_PRESETS.find((t) => t.id === addPreset);
    const isCust = addPreset === "custom";
    const nv = {
      id: generateId(), preset: isCust ? (custom.label || "Custom") : p.name,
      length: isCust ? custom.length : p.length, width: isCust ? custom.width : p.width,
      height: isCust ? custom.height : p.height, weight: isCust ? custom.weight : p.weight,
      cabRatio: isCust ? 0.5 : p.cabRatio,
      x: 200, y: Math.round((container.innerWidth - (isCust ? custom.width : p.width)) / 2),
      rotated: false, rearLifted: false, color: COLORS[vehicles.length % COLORS.length],
      sideX: 200, sideY: 0, sideAngle: 0, sideImage: null, removeBg: true, flipX: false,
      imgRealLength: isCust ? custom.length : p.length,
      imgRealHeight: isCust ? custom.height : p.height,
    };
    saveHistory(); setVehicles((prev) => [...prev, nv]); setSelectedId(nv.id); setShowAdd(false);
  };

  const handleImageUpload = (id, file) => {
    const reader = new FileReader();
    reader.onload = (e) => updateV(id, { sideImage: e.target.result });
    reader.readAsDataURL(file);
  };

  const saveHistory = useCallback(() => {
    setHistory(h => [...h.slice(-49), vehiclesRef.current]);
    setFuture([]);
  }, []);

  const undo = useCallback(() => {
    setHistory(h => {
      if (!h.length) return h;
      const prev = h[h.length - 1];
      setFuture(f => [vehiclesRef.current, ...f.slice(0, 49)]);
      setVehicles(prev);
      return h.slice(0, -1);
    });
  }, []);

  const redo = useCallback(() => {
    setFuture(f => {
      if (!f.length) return f;
      const next = f[0];
      setHistory(h => [...h.slice(-49), vehiclesRef.current]);
      setVehicles(next);
      return f.slice(1);
    });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.ctrlKey && !e.shiftKey && e.key === "z") { e.preventDefault(); undo(); }
      if (e.ctrlKey && (e.key === "y" || (e.shiftKey && e.key === "z"))) { e.preventDefault(); redo(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [undo, redo]);

  const boxCollisions = useMemo(() => {
    const c = new Set();
    for (let i = 0; i < boxes.length; i++) for (let j = i+1; j < boxes.length; j++) {
      const a=boxes[i],b=boxes[j];
      if(a.x<b.x+b.length&&a.x+a.length>b.x&&a.y<b.y+b.width&&a.y+a.width>b.y){c.add(a.id);c.add(b.id);}
    }
    boxes.forEach((b)=>{ if(b.x<0||b.y<0||b.x+b.length>container.innerLength||b.y+b.width>container.innerWidth)c.add(b.id); });
    return c;
  }, [boxes, container]);

  const totalBoxWeight = boxes.reduce((s,b)=>s+b.weight,0);

  const addBox = () => {
    const p = BOX_PRESETS.find(t=>t.id===addBoxPreset);
    const isCust = addBoxPreset==="box_custom";
    saveHistory();
    const nb = {
      id: generateId(),
      preset: isCust?(customBox.label||"Custom"):p.name,
      length: isCust?customBox.length:p.length, width: isCust?customBox.width:p.width,
      height: isCust?customBox.height:p.height, weight: isCust?customBox.weight:p.weight,
      x: 200, y: Math.round((container.innerWidth-(isCust?customBox.width:p.width))/2),
      z: 0, color: COLORS[boxes.length%COLORS.length],
    };
    setBoxes(prev=>[...prev,nb]); setSelectedBoxId(nb.id); setShowAddBox(false);
  };
  const updateBox = (id,u) => setBoxes(p=>p.map(b=>b.id===id?{...b,...u}:b));
  const moveBox = (id,x,y) => updateBox(id,{x:Math.max(0,x),y:Math.max(0,y)});
  const placeBox = (id,x,y,z) => {
    const upd = {};
    if(x !== null && x !== undefined) upd.x = Math.max(0, x);
    if(y !== null && y !== undefined) upd.y = Math.max(0, y);
    if(z !== null && z !== undefined) upd.z = Math.max(0, z);
    updateBox(id, upd);
  };
  const removeBox = (id) => { saveHistory(); setBoxes(p=>p.filter(b=>b.id!==id)); if(selectedBoxId===id)setSelectedBoxId(null); };

  const updateV = (id, u) => setVehicles((p) => p.map((v) => v.id === id ? { ...v, ...u } : v));
  const moveV = (id, x, y) => updateV(id, { x: Math.max(-500, x), y: Math.max(-500, y) });
  const removeV = (id) => { saveHistory(); setVehicles((p) => p.filter((v) => v.id !== id)); if (selectedId === id) setSelectedId(null); };
  const autoArrange = () => {
    saveHistory();
    const sorted = [...vehicles].sort((a, b) => b.length - a.length);
    let cx = 100;
    setVehicles(sorted.map((v) => { const nv = { ...v, x: cx, y: Math.round((container.innerWidth - (v.rotated ? v.length : v.width)) / 2) }; cx += (v.rotated ? v.width : v.length) + 200; return nv; }));
  };

  const lengthPct = (clearance.lenUsed / container.innerLength) * 100;
  const weightPct = (totalWeight / container.maxPayload) * 100;

  const S = {
    app: { fontFamily: "'Segoe UI','Noto Sans Thai',sans-serif", background: "#1c2333", color: "#e8eaf5", height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", fontSize: 13 },
    hdr: { background: "linear-gradient(135deg,#1e3a5f,#2d5a8e)", padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #00ddaa55", flexShrink: 0 },
    body: { display: "flex", flex: 1, overflow: "hidden" },
    side: { width: 290, background: "#212a3e", borderRight: "1px solid #2e3a52", display: "flex", flexDirection: "column", overflow: "hidden", flexShrink: 0 },
    sec: { padding: "10px 12px", borderBottom: "1px solid #2e3a52" },
    lbl: { fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "#00ddaa", marginBottom: 6 },
    vp: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" },
    tb: { display: "flex", gap: 5, padding: "6px 10px", background: "#1c2840", borderBottom: "1px solid #2e3a52", alignItems: "center", flexShrink: 0 },
    va: { flex: 1, position: "relative", overflow: "hidden" },
    btn: { padding: "5px 10px", borderRadius: 5, border: "1px solid #3a4a66", background: "#263048", color: "#c8cedf", cursor: "pointer", fontSize: 11, fontWeight: 500 },
    btnA: { background: "#00ddaa22", borderColor: "#00ddaa", color: "#00ddaa" },
    btnP: { background: "linear-gradient(135deg,#00ddaa,#00aa88)", border: "none", color: "#0a1a14", fontWeight: 700 },
    btnD: { background: "#ff44441a", borderColor: "#ff6666", color: "#ff8888" },
    inp: { width: "100%", padding: "5px 7px", borderRadius: 4, border: "1px solid #3a4a66", background: "#1e2a42", color: "#e8eaf5", fontSize: 12, boxSizing: "border-box" },
    sel: { width: "100%", padding: "5px 7px", borderRadius: 4, border: "1px solid #3a4a66", background: "#1e2a42", color: "#e8eaf5", fontSize: 12, boxSizing: "border-box" },
    card: (sel, col) => ({ padding: "7px 9px", borderRadius: 6, border: `1px solid ${col ? "#ff6666" : sel ? "#00ddaa" : "#2e3a52"}`, background: sel ? "#00ddaa15" : "#1e2a40", cursor: "pointer", marginBottom: 5 }),
    bar: { height: 4, borderRadius: 2, background: "#2e3a52", marginTop: 3, overflow: "hidden" },
    fill: (pct, col) => ({ height: "100%", width: `${Math.min(100, pct)}%`, background: pct > 95 ? "#ff5555" : col, borderRadius: 2, transition: "width .3s" }),
    badge: (c) => ({ display: "inline-block", padding: "1px 5px", borderRadius: 3, fontSize: 9, fontWeight: 600, background: c + "22", color: c, marginLeft: 5 }),
    status: { padding: "5px 12px", background: "#1a2235", borderTop: "1px solid #2e3a52", display: "flex", justifyContent: "space-between", fontSize: 10, color: "#7a8aaa", flexShrink: 0 },
  };

  return (
    <div style={S.app}>
      <div style={S.hdr}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "linear-gradient(135deg,#00ffaa,#00aa77)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#0a0a18" }}>📦</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#00ffaa" }}>CONTAINER LOADING PLANNER</div>
            <input
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              style={{ background: "transparent", border: "none", borderBottom: "1px solid #3a4a66", color: "#aab", fontSize: 10, outline: "none", width: 180, padding: "1px 2px" }}
              placeholder="ชื่อ Project..."
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <button style={S.btn} onClick={exportProject} title="Export โปรเจกต์เป็น JSON">💾 Export</button>
          <label style={{ ...S.btn, cursor: "pointer" }} title="Import โปรเจกต์จาก JSON">
            📂 Import
            <input ref={importFileRef} type="file" accept=".json,.clp.json" style={{ display: "none" }}
              onChange={e => { if (e.target.files[0]) { importProject(e.target.files[0]); e.target.value = ""; } }} />
          </label>
          <button style={S.btn} onClick={exportPng} title="ดาวน์โหลด PNG (Car Load view)">⬇ PNG</button>
          <button style={S.btn} onClick={printView} title="Print / PDF (Car Load view)">🖨 Print</button>
          <button style={S.btn} onClick={autoArrange} disabled={!vehicles.length}>⚡ Auto</button>
        </div>
      </div>

      <div style={S.body}>
        <div style={S.side}>
          <div style={S.sec}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div onClick={() => setShowContainerEdit(!showContainerEdit)} style={{ ...S.lbl, cursor: "pointer", marginBottom: 0 }}>📦 Container {showContainerEdit ? "▲" : "▼"}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
              <span style={{ color: "#888", fontSize: 11 }}>{container.name}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "2px 0" }}>
              <span style={{ color: "#888", fontSize: 10 }}>L×W×H</span>
              <span style={{ fontFamily: "monospace", fontWeight: 600, fontSize: 10 }}>{container.innerLength}×{container.innerWidth}×{container.innerHeight}</span>
            </div>
            {showContainerEdit && (
              <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 5 }}>
                <select style={S.sel} onChange={(e) => { const p = CONTAINER_PRESETS.find(c => c.name === e.target.value); if (p) setContainer({ ...p }); }}>
                  {CONTAINER_PRESETS.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                  {[["ยาว (mm)", "innerLength"], ["กว้าง (mm)", "innerWidth"], ["สูง (mm)", "innerHeight"], ["Door H (mm)", "doorHeight"], ["Door W (mm)", "doorWidth"], ["Max kg", "maxPayload"]].map(([lbl, key]) => (
                    <div key={key}>
                      <label style={{ fontSize: 9, color: "#777" }}>{lbl}</label>
                      <input style={S.inp} type="number" value={container[key]}
                        onChange={(e) => setContainer(c => ({ ...c, [key]: Number(e.target.value), name: "Custom" }))} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={S.sec}>
            <div style={S.lbl}>📐 Clearance & Weight</div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "3px 0" }}><span style={{ color: "#888", fontSize: 11 }}>ใช้ความยาว</span><span style={{ fontFamily: "monospace", fontWeight: 600, fontSize: 11 }}>{Math.round(clearance.lenUsed)} mm ({Math.round(lengthPct)}%)</span></div>
            <div style={S.bar}><div style={S.fill(lengthPct, "#00ffaa")} /></div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "3px 0", marginTop: 4 }}><span style={{ color: "#888", fontSize: 11 }}>เหลือ</span><span style={{ fontFamily: "monospace", fontWeight: 600, fontSize: 11, color: clearance.lenLeft < 500 ? "#ff6666" : "#00ffaa" }}>{Math.round(clearance.lenLeft)} mm</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "3px 0", marginTop: 6 }}><span style={{ color: "#888", fontSize: 11 }}>น้ำหนักรวม</span><span style={{ fontFamily: "monospace", fontWeight: 600, fontSize: 11, color: overweight ? "#ff4444" : "#ddd" }}>{totalWeight.toLocaleString()} / {container.maxPayload.toLocaleString()} kg</span></div>
            <div style={S.bar}><div style={S.fill(weightPct, overweight ? "#ff4444" : "#F59E0B")} /></div>
            {overweight && <div style={{ color: "#ff4444", fontSize: 10, marginTop: 3, fontWeight: 600 }}>⚠️ เกิน {(totalWeight - container.maxPayload).toLocaleString()} kg</div>}
            {collisions.size > 0 && <div style={{ color: "#ff4444", fontSize: 10, marginTop: 4, fontWeight: 600 }}>⚠️ ชนกัน/เกินขอบ {collisions.size} คัน</div>}
          </div>

          {(viewMode==="car") ? (
          <div style={{ ...S.sec, flex: 1, overflow: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div style={S.lbl}>🚗 รถในตู้ ({vehicles.length})</div>
              <button style={{ ...S.btn, ...S.btnP, padding: "3px 8px" }} onClick={() => setShowAdd(!showAdd)}>+ เพิ่มรถ</button>
            </div>

            {showAdd && (
              <div style={{ background: "#161638", borderRadius: 7, padding: 9, marginBottom: 8, border: "1px solid #00ffaa33" }}>
                <select style={S.sel} value={addPreset} onChange={(e) => setAddPreset(e.target.value)}>
                  {TRUCK_PRESETS.map((p) => <option key={p.id} value={p.id}>{p.name} {p.id !== "custom" ? `(${p.length}×${p.width})` : ""}</option>)}
                </select>
                {addPreset === "custom" && (
                  <div style={{ marginTop: 6, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
                    {[["ชื่อ", "label", "text"], ["น้ำหนัก kg", "weight", "number"], ["ยาว mm", "length", "number"], ["กว้าง mm", "width", "number"], ["สูง mm", "height", "number"]].map(([l, k, t]) => (
                      <div key={k}><label style={{ fontSize: 9, color: "#777" }}>{l}</label><input style={S.inp} type={t} value={custom[k]} onChange={(e) => setCustom({ ...custom, [k]: t === "number" ? Number(e.target.value) : e.target.value })} /></div>
                    ))}
                  </div>
                )}
                <button style={{ ...S.btn, ...S.btnP, width: "100%", marginTop: 7 }} onClick={addVehicle}>✓ เพิ่มรถเข้าตู้</button>
              </div>
            )}

            {vehicles.map((v) => (
              <div key={v.id} style={S.card(v.id === selectedId, collisions.has(v.id))} onClick={() => setSelectedId(v.id === selectedId ? null : v.id)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: v.color }} />
                    <span style={{ fontWeight: 600, fontSize: 11 }}>{v.preset}</span>
                  </div>
                  <button style={{ ...S.btn, ...S.btnD, padding: "1px 5px", fontSize: 10 }} onClick={(e) => { e.stopPropagation(); removeV(v.id); }}>✕</button>
                </div>
                <div style={{ fontSize: 10, color: "#777", marginTop: 3 }}>
                  {v.length}×{v.width}×{v.height} mm • {v.weight} kg
                  {v.rearLifted && <span style={S.badge("#F59E0B")}>ยกล้อหลัง</span>}
                  {v.rotated && <span style={S.badge("#8B5CF6")}>หมุน 90°</span>}
                </div>
                {v.id === selectedId && (
                  <div style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 5 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                      <div><label style={{ fontSize: 9, color: "#777" }}>X (mm)</label><input style={S.inp} type="number" value={v.x} onChange={(e) => updateV(v.id, { x: Number(e.target.value) })} onClick={(e) => e.stopPropagation()} /></div>
                      <div><label style={{ fontSize: 9, color: "#777" }}>Y (mm)</label><input style={S.inp} type="number" value={v.y} onChange={(e) => updateV(v.id, { y: Number(e.target.value) })} onClick={(e) => e.stopPropagation()} /></div>
                    </div>
                    <div style={{ display: "flex", gap: 4 }}>
                      <button style={{ ...S.btn, flex: 1, ...(v.rearLifted ? S.btnA : {}), fontSize: 10, padding: 3 }} onClick={(e) => { e.stopPropagation(); updateV(v.id, { rearLifted: !v.rearLifted }); }}>⬆ ยกล้อหลัง</button>
                      <button style={{ ...S.btn, flex: 1, ...(v.rotated ? S.btnA : {}), fontSize: 10, padding: 3 }} onClick={(e) => { e.stopPropagation(); updateV(v.id, { rotated: !v.rotated }); }}>🔄 หมุน 90°</button>
                    </div>
                    <button style={{ ...S.btn, fontSize: 10, padding: 3 }} onClick={(e) => { e.stopPropagation(); updateV(v.id, { x: Math.round(v.x / 50) * 50, y: Math.round(v.y / 50) * 50 }); }}>📐 Snap 50mm</button>
                    <div style={{ borderTop: "1px solid #252540", paddingTop: 5 }}>
                      <div style={{ fontSize: 9, color: "#00ffaa88", marginBottom: 4, fontWeight: 600, letterSpacing: 1 }}>SIDE ELEV</div>
                      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                        <label style={{ ...S.btn, flex: 1, textAlign: "center", cursor: "pointer", fontSize: 10, padding: "4px 0" }} onClick={(e) => e.stopPropagation()}>
                          🖼 {v.sideImage ? "เปลี่ยนรูป" : "Upload รูป"}
                          <input type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => { if (e.target.files[0]) handleImageUpload(v.id, e.target.files[0]); }} onClick={(ee) => ee.stopPropagation()} />
                        </label>
                        <button style={{ ...S.btn, fontSize: 10, padding: "4px 6px", ...(v.removeBg ? S.btnA : {}) }} onClick={(e) => { e.stopPropagation(); updateV(v.id, { removeBg: !v.removeBg }); }} title="ลบพื้นหลังสีขาว">✂ BG</button>
                        <button style={{ ...S.btn, fontSize: 10, padding: "4px 6px", ...(v.flipX ? S.btnA : {}) }} onClick={(e) => { e.stopPropagation(); updateV(v.id, { flipX: !v.flipX }); }} title="พลิกภาพซ้าย-ขวา">⇄ Flip</button>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
                        <div><label style={{ fontSize: 9, color: "#777" }}>Side X</label><input style={S.inp} type="number" value={v.sideX ?? 200} onChange={(e) => updateV(v.id, { sideX: Number(e.target.value) })} onClick={(e) => e.stopPropagation()} /></div>
                        <div><label style={{ fontSize: 9, color: "#777" }}>Floor Y</label><input style={S.inp} type="number" value={v.sideY ?? 0} onChange={(e) => updateV(v.id, { sideY: Number(e.target.value) })} onClick={(e) => e.stopPropagation()} /></div>
                        <div><label style={{ fontSize: 9, color: "#777" }}>องศา°</label><input style={S.inp} type="number" step="0.5" value={v.sideAngle ?? 0} onChange={(e) => updateV(v.id, { sideAngle: Number(e.target.value) })} onClick={(e) => e.stopPropagation()} /></div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginTop: 5 }}>
                        <div>
                          <label style={{ fontSize: 9, color: "#00ddaa" }}>ความยาวรูป (mm)</label>
                          <input style={S.inp} type="number" step="1" value={v.imgRealLength ?? v.length}
                            onChange={(e) => updateV(v.id, { imgRealLength: Number(e.target.value) })}
                            onClick={(e) => e.stopPropagation()} />
                        </div>
                        <div>
                          <label style={{ fontSize: 9, color: "#00ddaa" }}>ความสูงรูป (mm)</label>
                          <input style={S.inp} type="number" step="1" value={v.imgRealHeight ?? v.height}
                            onChange={(e) => updateV(v.id, { imgRealHeight: Number(e.target.value) })}
                            onClick={(e) => e.stopPropagation()} />
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {!vehicles.length && <div style={{ textAlign: "center", color: "#444", padding: 16, fontSize: 12 }}>กด "+ เพิ่มรถ" เพื่อเริ่มวางแผน</div>}
          </div>
          ) : (
          <div style={{ ...S.sec, flex: 1, overflow: "auto" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
              <div style={S.lbl}>📦 สินค้า ({boxes.length}) • {totalBoxWeight.toLocaleString()} kg</div>
              <button style={{...S.btn,...S.btnP,padding:"3px 8px"}} onClick={()=>setShowAddBox(!showAddBox)}>+ เพิ่ม</button>
            </div>
            {showAddBox && (
              <div style={{background:"#161638",borderRadius:7,padding:9,marginBottom:8,border:"1px solid #00ffaa33"}}>
                <select style={S.sel} value={addBoxPreset} onChange={e=>setAddBoxPreset(e.target.value)}>
                  {BOX_PRESETS.map(p=><option key={p.id} value={p.id}>{p.name} {p.id!=="box_custom"?`(${p.length}×${p.width}×${p.height}mm)`:""}</option>)}
                </select>
                {addBoxPreset==="box_custom" && (
                  <div style={{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
                    {[["ชื่อ","label","text"],["ยาว mm","length","number"],["กว้าง mm","width","number"],["สูง mm","height","number"],["น้ำหนัก kg","weight","number"]].map(([l,k,t])=>(
                      <div key={k}><label style={{fontSize:9,color:"#777"}}>{l}</label><input style={S.inp} type={t} value={customBox[k]} onChange={e=>setCustomBox({...customBox,[k]:t==="number"?Number(e.target.value):e.target.value})} /></div>
                    ))}
                  </div>
                )}
                <button style={{...S.btn,...S.btnP,width:"100%",marginTop:7}} onClick={addBox}>✓ เพิ่มสินค้า</button>
              </div>
            )}
            {boxes.map(b=>(
              <div key={b.id} style={S.card(b.id===selectedBoxId, boxCollisions.has(b.id))} onClick={()=>setSelectedBoxId(b.id===selectedBoxId?null:b.id)}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{display:"flex",alignItems:"center",gap:5}}>
                    <div style={{width:10,height:10,borderRadius:2,background:b.color}}/>
                    <span style={{fontWeight:600,fontSize:11}}>{b.preset}</span>
                  </div>
                  <button style={{...S.btn,...S.btnD,padding:"1px 5px",fontSize:10}} onClick={e=>{e.stopPropagation();removeBox(b.id);}}>✕</button>
                </div>
                <div style={{fontSize:10,color:"#777",marginTop:3}}>{b.length}×{b.width}×{b.height} mm • {b.weight} kg</div>
                {b.id===selectedBoxId && (
                  <div style={{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}}>
                    <div><label style={{fontSize:9,color:"#777"}}>X (mm)</label><input style={S.inp} type="number" value={b.x} onChange={e=>updateBox(b.id,{x:Number(e.target.value)})} onClick={e=>e.stopPropagation()}/></div>
                    <div><label style={{fontSize:9,color:"#777"}}>Y (mm)</label><input style={S.inp} type="number" value={b.y} onChange={e=>updateBox(b.id,{y:Number(e.target.value)})} onClick={e=>e.stopPropagation()}/></div>
                    <div><label style={{fontSize:9,color:"#777"}}>Z พื้น (mm)</label><input style={S.inp} type="number" value={b.z} onChange={e=>updateBox(b.id,{z:Number(e.target.value)})} onClick={e=>e.stopPropagation()}/></div>
                  </div>
                )}
              </div>
            ))}
            {!boxes.length && <div style={{textAlign:"center",color:"#444",padding:16,fontSize:12}}>กด "+ เพิ่ม" เพื่อเพิ่มสินค้า</div>}
          </div>
          )}

        </div>

        <div style={S.vp}>
          <div style={S.tb}>
            <span style={{ fontSize: 10, color: "#555", marginRight: 3 }}>VIEW:</span>
            {[["car","🚗 Car Load"],["boxtop","📦 Box Top"],["box3d","📦 Box 3D"]].map(([m,l])=>(
              <button key={m} style={{...S.btn,...(viewMode===m?S.btnA:{}),padding:"3px 9px"}} onClick={()=>setViewMode(m)}>{l}</button>
            ))}
            <div style={{ flex: 1 }} />
            <button style={{ ...S.btn, padding: "3px 8px", opacity: history.length ? 1 : 0.35 }} onClick={undo} disabled={!history.length} title="Ctrl+Z">↩ Undo</button>
            <button style={{ ...S.btn, padding: "3px 8px", opacity: future.length ? 1 : 0.35 }} onClick={redo} disabled={!future.length} title="Ctrl+Y">↪ Redo</button>
          </div>
          <div style={S.va}>
            {viewMode==="car" && <SideElevView ref={sideElevRef} container={container} vehicles={vehicles} selectedId={selectedId} onSelectVehicle={setSelectedId} onUpdateVehicle={updateV}/>}
            {viewMode==="boxtop" && <BoxTopView container={container} boxes={boxes} selectedId={selectedBoxId} onSelectBox={setSelectedBoxId} onMoveBox={moveBox} collisions={boxCollisions}/>}
            {viewMode==="box3d" && <BoxScene container={container} boxes={boxes} selectedId={selectedBoxId} onMoveBox={moveBox} onSelectBox={setSelectedBoxId} onPlaceBox={placeBox}/>}
          </div>
        </div>
      </div>

      <div style={S.status}>
        <span>{container.name} | {container.innerLength}×{container.innerWidth}×{container.innerHeight} mm</span>
        {viewMode==="car"
          ? <span>Vehicles: {vehicles.length} | {totalWeight.toLocaleString()} kg | Length: {Math.round(lengthPct)}%</span>
          : <span>Boxes: {boxes.length} | {totalBoxWeight.toLocaleString()} kg {totalBoxWeight>container.maxPayload?`⚠️ +${(totalBoxWeight-container.maxPayload).toLocaleString()}kg`:""}</span>
        }
      </div>
    </div>
  );
}
