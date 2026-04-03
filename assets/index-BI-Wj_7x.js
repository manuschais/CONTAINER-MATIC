(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var bm={exports:{}},$l={},Pm={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),w_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),A_=Symbol.for("react.strict_mode"),C_=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),P_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),D_=Symbol.for("react.memo"),I_=Symbol.for("react.lazy"),dh=Symbol.iterator;function U_(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dm=Object.assign,Im={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Lm}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Um(){}Um.prototype=Xs.prototype;function ef(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Lm}var tf=ef.prototype=new Um;tf.constructor=ef;Dm(tf,Xs.prototype);tf.isPureReactComponent=!0;var fh=Array.isArray,Nm=Object.prototype.hasOwnProperty,nf={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Nm.call(e,i)&&!Fm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Yo,type:t,key:s,ref:o,props:r,_owner:nf.current}}function N_(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function F_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hh=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F_(""+t.key):e.toString(36)}function Ka(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yo:case w_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xc(o,0):i,fh(r)?(n="",t!=null&&(n=t.replace(hh,"$&/")+"/"),Ka(r,e,n,"",function(c){return c})):r!=null&&(rf(r)&&(r=N_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xc(s,a);o+=Ka(s,e,n,l,r)}else if(l=U_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xc(s,a++),o+=Ka(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(t,e,n){if(t==null)return t;var i=[],r=0;return Ka(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Za={transition:null},k_={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Za,ReactCurrentOwner:nf};function km(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=Xs;Ze.Fragment=T_;Ze.Profiler=C_;Ze.PureComponent=ef;Ze.StrictMode=A_;Ze.Suspense=L_;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;Ze.act=km;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Nm.call(e,l)&&!Fm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Yo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:b_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:R_,_context:t},t.Consumer=t};Ze.createElement=Om;Ze.createFactory=function(t){var e=Om.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:P_,render:t}};Ze.isValidElement=rf;Ze.lazy=function(t){return{$$typeof:I_,_payload:{_status:-1,_result:t},_init:O_}};Ze.memo=function(t,e){return{$$typeof:D_,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=Za.transition;Za.transition={};try{t()}finally{Za.transition=e}};Ze.unstable_act=km;Ze.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ze.useContext=function(t){return Qt.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ze.useId=function(){return Qt.current.useId()};Ze.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ze.useRef=function(t){return Qt.current.useRef(t)};Ze.useState=function(t){return Qt.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return Qt.current.useTransition()};Ze.version="18.3.1";Pm.exports=Ze;var xe=Pm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=xe,B_=Symbol.for("react.element"),H_=Symbol.for("react.fragment"),V_=Object.prototype.hasOwnProperty,G_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W_={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)V_.call(e,i)&&!W_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B_,type:t,key:s,ref:o,props:r,_owner:G_.current}}$l.Fragment=H_;$l.jsx=zm;$l.jsxs=zm;bm.exports=$l;var F=bm.exports,Bm={exports:{}},vn={},Hm={exports:{}},Vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,H){var K=I.length;I.push(H);e:for(;0<K;){var te=K-1>>>1,he=I[te];if(0<r(he,H))I[te]=H,I[K]=he,K=te;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var H=I[0],K=I.pop();if(K!==H){I[0]=K;e:for(var te=0,he=I.length,Fe=he>>>1;te<Fe;){var q=2*(te+1)-1,ie=I[q],ge=q+1,me=I[ge];if(0>r(ie,K))ge<he&&0>r(me,ie)?(I[te]=me,I[ge]=K,te=ge):(I[te]=ie,I[q]=K,te=q);else if(ge<he&&0>r(me,K))I[te]=me,I[ge]=K,te=ge;else break e}}return H}function r(I,H){var K=I.sortIndex-H.sortIndex;return K!==0?K:I.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,d=3,p=!1,y=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=I)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function x(I){if(v=!1,_(I),!y)if(n(l)!==null)y=!0,X(N);else{var H=n(c);H!==null&&j(x,H.startTime-I)}}function N(I,H){y=!1,v&&(v=!1,u(D),D=-1),p=!0;var K=d;try{for(_(H),f=n(l);f!==null&&(!(f.expirationTime>H)||I&&!P());){var te=f.callback;if(typeof te=="function"){f.callback=null,d=f.priorityLevel;var he=te(f.expirationTime<=H);H=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&i(l),_(H)}else i(l);f=n(l)}if(f!==null)var Fe=!0;else{var q=n(c);q!==null&&j(x,q.startTime-H),Fe=!1}return Fe}finally{f=null,d=K,p=!1}}var R=!1,w=null,D=-1,E=5,S=-1;function P(){return!(t.unstable_now()-S<E)}function C(){if(w!==null){var I=t.unstable_now();S=I;var H=!0;try{H=w(!0,I)}finally{H?z():(R=!1,w=null)}}else R=!1}var z;if(typeof g=="function")z=function(){g(C)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,G=$.port2;$.port1.onmessage=C,z=function(){G.postMessage(null)}}else z=function(){m(C,0)};function X(I){w=I,R||(R=!0,z())}function j(I,H){D=m(function(){I(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,X(N))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var K=d;d=H;try{return I()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=d;d=I;try{return H()}finally{d=K}},t.unstable_scheduleCallback=function(I,H,K){var te=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?te+K:te):K=te,I){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=K+he,I={id:h++,callback:H,priorityLevel:I,startTime:K,expirationTime:he,sortIndex:-1},K>te?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(v?(u(D),D=-1):v=!0,j(x,K-te))):(I.sortIndex=he,e(l,I),y||p||(y=!0,X(N))),I},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(I){var H=d;return function(){var K=d;d=H;try{return I.apply(this,arguments)}finally{d=K}}}})(Vm);Hm.exports=Vm;var X_=Hm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=xe,gn=X_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gm=new Set,bo={};function Fr(t,e){Is(t,e),Is(t+"Capture",e)}function Is(t,e){for(bo[t]=e,t=0;t<e.length;t++)Gm.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,Y_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},mh={};function $_(t){return wu.call(mh,t)?!0:wu.call(ph,t)?!1:Y_.test(t)?mh[t]=!0:(ph[t]=!0,!1)}function q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sf=/[\-:]([a-z])/g;function of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sf,of);Ot[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sf,of);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sf,of);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function af(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?$_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),cs=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Xm=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),uf=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),jm=Symbol.for("react.offscreen"),gh=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,yc;function po(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var Sc=!1;function Mc(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?po(t):""}function Z_(t){switch(t.tag){case 5:return po(t.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case cs:return"Portal";case Tu:return"Profiler";case lf:return"StrictMode";case Au:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xm:return(t.displayName||"Context")+".Consumer";case Wm:return(t._context.displayName||"Context")+".Provider";case cf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uf:return e=t.displayName||null,e!==null?e:Ru(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return Ru(t(e))}catch{}}return null}function Q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(e);case 8:return e===lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ym(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J_(t){var e=Ym(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ia(t){t._valueTracker||(t._valueTracker=J_(t))}function $m(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ym(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _h(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qm(t,e){e=e.checked,e!=null&&af(t,"checked",e,!1)}function Pu(t,e){qm(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lu(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lu(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var mo=Array.isArray;function Es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(mo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function Km(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Iu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ra,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ra=ra||document.createElement("div"),ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function Jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tv=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uu(t,e){if(e){if(tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Nu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fu=null;function df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,ws=null,Ts=null;function Sh(t){if(t=Ko(t)){if(typeof Ou!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Jl(e),Ou(t.stateNode,t.type,e))}}function tg(t){ws?Ts?Ts.push(t):Ts=[t]:ws=t}function ng(){if(ws){var t=ws,e=Ts;if(Ts=ws=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function ig(t,e){return t(e)}function rg(){}var Ec=!1;function sg(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return ig(t,e,n)}finally{Ec=!1,(ws!==null||Ts!==null)&&(rg(),ng())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var i=Jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var ku=!1;if(vi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{ku=!1}function nv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var So=!1,gl=null,_l=!1,zu=null,iv={onError:function(t){So=!0,gl=t}};function rv(t,e,n,i,r,s,o,a,l){So=!1,gl=null,nv.apply(iv,arguments)}function sv(t,e,n,i,r,s,o,a,l){if(rv.apply(this,arguments),So){if(So){var c=gl;So=!1,gl=null}else throw Error(oe(198));_l||(_l=!0,zu=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mh(t){if(Or(t)!==t)throw Error(oe(188))}function ov(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mh(r),t;if(s===i)return Mh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function ag(t){return t=ov(t),t!==null?lg(t):null}function lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lg(t);if(e!==null)return e;t=t.sibling}return null}var cg=gn.unstable_scheduleCallback,Eh=gn.unstable_cancelCallback,av=gn.unstable_shouldYield,lv=gn.unstable_requestPaint,St=gn.unstable_now,cv=gn.unstable_getCurrentPriorityLevel,ff=gn.unstable_ImmediatePriority,ug=gn.unstable_UserBlockingPriority,vl=gn.unstable_NormalPriority,uv=gn.unstable_LowPriority,dg=gn.unstable_IdlePriority,ql=null,ii=null;function dv(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:pv,fv=Math.log,hv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(fv(t)/hv|0)|0}var sa=64,oa=4194304;function go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=go(a):(s&=o,s!==0&&(i=go(s)))}else o=n&~r,o!==0?i=go(o):s!==0&&(i=go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function mv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fg(){var t=sa;return sa<<=1,!(sa&4194240)&&(sa=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function _v(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pg,pf,mg,gg,_g,Hu=!1,aa=[],Gi=null,Wi=null,Xi=null,Do=new Map,Io=new Map,Oi=[],vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ko(e),e!==null&&pf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xv(t,e,n,i,r){switch(e){case"focusin":return Gi=Qs(Gi,t,e,n,i,r),!0;case"dragenter":return Wi=Qs(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=Qs(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Do.set(s,Qs(Do.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Io.set(s,Qs(Io.get(s)||null,t,e,n,i,r)),!0}return!1}function vg(t){var e=Sr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=og(n),e!==null){t.blockedOn=e,_g(t.priority,function(){mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fu=i,n.target.dispatchEvent(i),Fu=null}else return e=Ko(n),e!==null&&pf(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){Qa(t)&&n.delete(e)}function yv(){Hu=!1,Gi!==null&&Qa(Gi)&&(Gi=null),Wi!==null&&Qa(Wi)&&(Wi=null),Xi!==null&&Qa(Xi)&&(Xi=null),Do.forEach(Th),Io.forEach(Th)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Hu||(Hu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,yv)))}function Uo(t){function e(r){return Js(r,t)}if(0<aa.length){Js(aa[0],t);for(var n=1;n<aa.length;n++){var i=aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&Js(Gi,t),Wi!==null&&Js(Wi,t),Xi!==null&&Js(Xi,t),Do.forEach(e),Io.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)vg(n),n.blockedOn===null&&Oi.shift()}var As=Ei.ReactCurrentBatchConfig,yl=!0;function Sv(t,e,n,i){var r=rt,s=As.transition;As.transition=null;try{rt=1,mf(t,e,n,i)}finally{rt=r,As.transition=s}}function Mv(t,e,n,i){var r=rt,s=As.transition;As.transition=null;try{rt=4,mf(t,e,n,i)}finally{rt=r,As.transition=s}}function mf(t,e,n,i){if(yl){var r=Vu(t,e,n,i);if(r===null)Uc(t,e,i,Sl,n),wh(t,i);else if(xv(r,t,e,n,i))i.stopPropagation();else if(wh(t,i),e&4&&-1<vv.indexOf(t)){for(;r!==null;){var s=Ko(r);if(s!==null&&pg(s),s=Vu(t,e,n,i),s===null&&Uc(t,e,i,Sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var Sl=null;function Vu(t,e,n,i){if(Sl=null,t=df(i),t=Sr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=og(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cv()){case ff:return 1;case ug:return 4;case vl:case uv:return 16;case dg:return 536870912;default:return 16}default:return 16}}var Bi=null,gf=null,Ja=null;function yg(){if(Ja)return Ja;var t,e=gf,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ja=r.slice(t,1<i?1-i:void 0)}function el(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function Ah(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?la:Ah,this.isPropagationStopped=Ah,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=xn(js),qo=_t({},js,{view:0,detail:0}),Ev=xn(qo),Tc,Ac,eo,Kl=_t({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Tc=t.screenX-eo.screenX,Ac=t.screenY-eo.screenY):Ac=Tc=0,eo=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),Ch=xn(Kl),wv=_t({},Kl,{dataTransfer:0}),Tv=xn(wv),Av=_t({},qo,{relatedTarget:0}),Cc=xn(Av),Cv=_t({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=xn(Cv),bv=_t({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pv=xn(bv),Lv=_t({},js,{data:0}),Rh=xn(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uv[t])?!!e[t]:!1}function vf(){return Nv}var Fv=_t({},qo,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=xn(Fv),kv=_t({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=xn(kv),zv=_t({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),Bv=xn(zv),Hv=_t({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=xn(Hv),Gv=_t({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=xn(Gv),Xv=[9,13,27,32],xf=vi&&"CompositionEvent"in window,Mo=null;vi&&"documentMode"in document&&(Mo=document.documentMode);var jv=vi&&"TextEvent"in window&&!Mo,Sg=vi&&(!xf||Mo&&8<Mo&&11>=Mo),Ph=" ",Lh=!1;function Mg(t,e){switch(t){case"keyup":return Xv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Yv(t,e){switch(t){case"compositionend":return Eg(e);case"keypress":return e.which!==32?null:(Lh=!0,Ph);case"textInput":return t=e.data,t===Ph&&Lh?null:t;default:return null}}function $v(t,e){if(ds)return t==="compositionend"||!xf&&Mg(t,e)?(t=yg(),Ja=gf=Bi=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sg&&e.locale!=="ko"?null:e.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qv[t.type]:e==="textarea"}function wg(t,e,n,i){tg(i),e=Ml(e,"onChange"),0<e.length&&(n=new _f("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Eo=null,No=null;function Kv(t){Ng(t,0)}function Zl(t){var e=ps(t);if($m(e))return t}function Zv(t,e){if(t==="change")return e}var Tg=!1;if(vi){var Rc;if(vi){var bc="oninput"in document;if(!bc){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),bc=typeof Ih.oninput=="function"}Rc=bc}else Rc=!1;Tg=Rc&&(!document.documentMode||9<document.documentMode)}function Uh(){Eo&&(Eo.detachEvent("onpropertychange",Ag),No=Eo=null)}function Ag(t){if(t.propertyName==="value"&&Zl(No)){var e=[];wg(e,No,t,df(t)),sg(Kv,e)}}function Qv(t,e,n){t==="focusin"?(Uh(),Eo=e,No=n,Eo.attachEvent("onpropertychange",Ag)):t==="focusout"&&Uh()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(No)}function ex(t,e){if(t==="click")return Zl(e)}function tx(t,e){if(t==="input"||t==="change")return Zl(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:nx;function Fo(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Nh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fh(t,e){var n=Nh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nh(n)}}function Cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rg(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ix(t){var e=Rg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(i!==null&&yf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fh(n,s);var o=Fh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=vi&&"documentMode"in document&&11>=document.documentMode,fs=null,Gu=null,wo=null,Wu=!1;function Oh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||fs==null||fs!==ml(i)||(i=fs,"selectionStart"in i&&yf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wo&&Fo(wo,i)||(wo=i,i=Ml(Gu,"onSelect"),0<i.length&&(e=new _f("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},Pc={},bg={};vi&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Ql(t){if(Pc[t])return Pc[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bg)return Pc[t]=e[n];return t}var Pg=Ql("animationend"),Lg=Ql("animationiteration"),Dg=Ql("animationstart"),Ig=Ql("transitionend"),Ug=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Ug.set(t,e),Fr(e,[t])}for(var Lc=0;Lc<kh.length;Lc++){var Dc=kh[Lc],sx=Dc.toLowerCase(),ox=Dc[0].toUpperCase()+Dc.slice(1);rr(sx,"on"+ox)}rr(Pg,"onAnimationEnd");rr(Lg,"onAnimationIteration");rr(Dg,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Ig,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sv(i,e,void 0,t),t.currentTarget=null}function Ng(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zh(r,a,c),s=l}}}if(_l)throw t=zu,_l=!1,zu=null,t}function lt(t,e){var n=e[qu];n===void 0&&(n=e[qu]=new Set);var i=t+"__bubble";n.has(i)||(Fg(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),Fg(n,t,i,e)}var ua="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[ua]){t[ua]=!0,Gm.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ua]||(e[ua]=!0,Ic("selectionchange",!1,e))}}function Fg(t,e,n,i){switch(xg(e)){case 1:var r=Sv;break;case 4:r=Mv;break;default:r=mf}n=r.bind(null,e,n,t),r=void 0,!ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}sg(function(){var c=s,h=df(n),f=[];e:{var d=Ug.get(t);if(d!==void 0){var p=_f,y=t;switch(t){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":p=Ov;break;case"focusin":y="focus",p=Cc;break;case"focusout":y="blur",p=Cc;break;case"beforeblur":case"afterblur":p=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Bv;break;case Pg:case Lg:case Dg:p=Rv;break;case Ig:p=Vv;break;case"scroll":p=Ev;break;case"wheel":p=Wv;break;case"copy":case"cut":case"paste":p=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bh}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var g=c,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,u!==null&&(x=Lo(g,u),x!=null&&v.push(ko(g,x,_)))),m)break;g=g.return}0<v.length&&(d=new p(d,y,null,n,h),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Fu&&(y=n.relatedTarget||n.fromElement)&&(Sr(y)||y[xi]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?Sr(y):null,y!==null&&(m=Or(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(v=Ch,x="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=bh,x="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:ps(p),_=y==null?d:ps(y),d=new v(x,g+"leave",p,n,h),d.target=m,d.relatedTarget=_,x=null,Sr(h)===c&&(v=new v(u,g+"enter",y,n,h),v.target=_,v.relatedTarget=m,x=v),m=x,p&&y)t:{for(v=p,u=y,g=0,_=v;_;_=Br(_))g++;for(_=0,x=u;x;x=Br(x))_++;for(;0<g-_;)v=Br(v),g--;for(;0<_-g;)u=Br(u),_--;for(;g--;){if(v===u||u!==null&&v===u.alternate)break t;v=Br(v),u=Br(u)}v=null}else v=null;p!==null&&Bh(f,d,p,v,!1),y!==null&&m!==null&&Bh(f,m,y,v,!0)}}e:{if(d=c?ps(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var N=Zv;else if(Dh(d))if(Tg)N=tx;else{N=Jv;var R=Qv}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=ex);if(N&&(N=N(t,c))){wg(f,N,n,h);break e}R&&R(t,d,c),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Lu(d,"number",d.value)}switch(R=c?ps(c):window,t){case"focusin":(Dh(R)||R.contentEditable==="true")&&(fs=R,Gu=c,wo=null);break;case"focusout":wo=Gu=fs=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Oh(f,n,h);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Oh(f,n,h)}var w;if(xf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ds?Mg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Sg&&n.locale!=="ko"&&(ds||D!=="onCompositionStart"?D==="onCompositionEnd"&&ds&&(w=yg()):(Bi=h,gf="value"in Bi?Bi.value:Bi.textContent,ds=!0)),R=Ml(c,D),0<R.length&&(D=new Rh(D,t,null,n,h),f.push({event:D,listeners:R}),w?D.data=w:(w=Eg(n),w!==null&&(D.data=w)))),(w=jv?Yv(t,n):$v(t,n))&&(c=Ml(c,"onBeforeInput"),0<c.length&&(h=new Rh("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=w))}Ng(f,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Lo(t,n),s!=null&&i.unshift(ko(t,s,r)),s=Lo(t,e),s!=null&&i.push(ko(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Lo(n,s),l!=null&&o.unshift(ko(n,l,a))):r||(l=Lo(n,s),l!=null&&o.push(ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lx=/\r\n?/g,cx=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(cx,"")}function da(t,e,n){if(e=Hh(e),Hh(t)!==e&&n)throw Error(oe(425))}function El(){}var Xu=null,ju=null;function Yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,dx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(t){return Vh.resolve(null).then(t).catch(fx)}:$u;function fx(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Uo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Uo(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ti="__reactFiber$"+Ys,zo="__reactProps$"+Ys,xi="__reactContainer$"+Ys,qu="__reactEvents$"+Ys,hx="__reactListeners$"+Ys,px="__reactHandles$"+Ys;function Sr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gh(t);t!==null;){if(n=t[ti])return n;t=Gh(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[ti]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Jl(t){return t[zo]||null}var Ku=[],ms=-1;function sr(t){return{current:t}}function ut(t){0>ms||(t.current=Ku[ms],Ku[ms]=null,ms--)}function ot(t,e){ms++,Ku[ms]=t.current,t.current=e}var tr={},Xt=sr(tr),sn=sr(!1),Rr=tr;function Us(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function wl(){ut(sn),ut(Xt)}function Wh(t,e,n){if(Xt.current!==tr)throw Error(oe(168));ot(Xt,e),ot(sn,n)}function Og(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Q_(t)||"Unknown",r));return _t({},n,i)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Rr=Xt.current,ot(Xt,t),ot(sn,sn.current),!0}function Xh(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Og(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,ut(sn),ut(Xt),ot(Xt,t)):ut(sn),ot(sn,n)}var fi=null,ec=!1,Fc=!1;function kg(t){fi===null?fi=[t]:fi.push(t)}function mx(t){ec=!0,kg(t)}function or(){if(!Fc&&fi!==null){Fc=!0;var t=0,e=rt;try{var n=fi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,ec=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),cg(ff,or),r}finally{rt=e,Fc=!1}}return null}var gs=[],_s=0,Al=null,Cl=0,Mn=[],En=0,br=null,hi=1,pi="";function gr(t,e){gs[_s++]=Cl,gs[_s++]=Al,Al=t,Cl=e}function zg(t,e,n){Mn[En++]=hi,Mn[En++]=pi,Mn[En++]=br,br=t;var i=hi;t=pi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-Wn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function Sf(t){t.return!==null&&(gr(t,1),zg(t,1,0))}function Mf(t){for(;t===Al;)Al=gs[--_s],gs[_s]=null,Cl=gs[--_s],gs[_s]=null;for(;t===br;)br=Mn[--En],Mn[En]=null,pi=Mn[--En],Mn[En]=null,hi=Mn[--En],Mn[En]=null}var mn=null,pn=null,ht=!1,Bn=null;function Bg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qu(t){if(ht){var e=pn;if(e){var n=e;if(!jh(t,e)){if(Zu(t))throw Error(oe(418));e=ji(n.nextSibling);var i=mn;e&&jh(t,e)?Bg(i,n):(t.flags=t.flags&-4097|2,ht=!1,mn=t)}}else{if(Zu(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ht=!1,mn=t}}}function Yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function fa(t){if(t!==mn)return!1;if(!ht)return Yh(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yu(t.type,t.memoizedProps)),e&&(e=pn)){if(Zu(t))throw Hg(),Error(oe(418));for(;e;)Bg(t,e),e=ji(e.nextSibling)}if(Yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?ji(t.stateNode.nextSibling):null;return!0}function Hg(){for(var t=pn;t;)t=ji(t.nextSibling)}function Ns(){pn=mn=null,ht=!1}function Ef(t){Bn===null?Bn=[t]:Bn.push(t)}var gx=Ei.ReactCurrentBatchConfig;function to(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $h(t){var e=t._init;return e(t._payload)}function Vg(t){function e(u,g){if(t){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Ki(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=2,g):_):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,_,x){return g===null||g.tag!==6?(g=Gc(_,u.mode,x),g.return=u,g):(g=r(g,_),g.return=u,g)}function l(u,g,_,x){var N=_.type;return N===us?h(u,g,_.props.children,x,_.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ui&&$h(N)===g.type)?(x=r(g,_.props),x.ref=to(u,g,_),x.return=u,x):(x=al(_.type,_.key,_.props,null,u.mode,x),x.ref=to(u,g,_),x.return=u,x)}function c(u,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Wc(_,u.mode,x),g.return=u,g):(g=r(g,_.children||[]),g.return=u,g)}function h(u,g,_,x,N){return g===null||g.tag!==7?(g=Cr(_,u.mode,x,N),g.return=u,g):(g=r(g,_),g.return=u,g)}function f(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Gc(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case na:return _=al(g.type,g.key,g.props,null,u.mode,_),_.ref=to(u,null,g),_.return=u,_;case cs:return g=Wc(g,u.mode,_),g.return=u,g;case Ui:var x=g._init;return f(u,x(g._payload),_)}if(mo(g)||Ks(g))return g=Cr(g,u.mode,_,null),g.return=u,g;ha(u,g)}return null}function d(u,g,_,x){var N=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return N!==null?null:a(u,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case na:return _.key===N?l(u,g,_,x):null;case cs:return _.key===N?c(u,g,_,x):null;case Ui:return N=_._init,d(u,g,N(_._payload),x)}if(mo(_)||Ks(_))return N!==null?null:h(u,g,_,x,null);ha(u,_)}return null}function p(u,g,_,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(_)||null,a(g,u,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case na:return u=u.get(x.key===null?_:x.key)||null,l(g,u,x,N);case cs:return u=u.get(x.key===null?_:x.key)||null,c(g,u,x,N);case Ui:var R=x._init;return p(u,g,_,R(x._payload),N)}if(mo(x)||Ks(x))return u=u.get(_)||null,h(g,u,x,N,null);ha(g,x)}return null}function y(u,g,_,x){for(var N=null,R=null,w=g,D=g=0,E=null;w!==null&&D<_.length;D++){w.index>D?(E=w,w=null):E=w.sibling;var S=d(u,w,_[D],x);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(u,w),g=s(S,g,D),R===null?N=S:R.sibling=S,R=S,w=E}if(D===_.length)return n(u,w),ht&&gr(u,D),N;if(w===null){for(;D<_.length;D++)w=f(u,_[D],x),w!==null&&(g=s(w,g,D),R===null?N=w:R.sibling=w,R=w);return ht&&gr(u,D),N}for(w=i(u,w);D<_.length;D++)E=p(w,u,D,_[D],x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?D:E.key),g=s(E,g,D),R===null?N=E:R.sibling=E,R=E);return t&&w.forEach(function(P){return e(u,P)}),ht&&gr(u,D),N}function v(u,g,_,x){var N=Ks(_);if(typeof N!="function")throw Error(oe(150));if(_=N.call(_),_==null)throw Error(oe(151));for(var R=N=null,w=g,D=g=0,E=null,S=_.next();w!==null&&!S.done;D++,S=_.next()){w.index>D?(E=w,w=null):E=w.sibling;var P=d(u,w,S.value,x);if(P===null){w===null&&(w=E);break}t&&w&&P.alternate===null&&e(u,w),g=s(P,g,D),R===null?N=P:R.sibling=P,R=P,w=E}if(S.done)return n(u,w),ht&&gr(u,D),N;if(w===null){for(;!S.done;D++,S=_.next())S=f(u,S.value,x),S!==null&&(g=s(S,g,D),R===null?N=S:R.sibling=S,R=S);return ht&&gr(u,D),N}for(w=i(u,w);!S.done;D++,S=_.next())S=p(w,u,D,S.value,x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?D:S.key),g=s(S,g,D),R===null?N=S:R.sibling=S,R=S);return t&&w.forEach(function(C){return e(u,C)}),ht&&gr(u,D),N}function m(u,g,_,x){if(typeof _=="object"&&_!==null&&_.type===us&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case na:e:{for(var N=_.key,R=g;R!==null;){if(R.key===N){if(N=_.type,N===us){if(R.tag===7){n(u,R.sibling),g=r(R,_.props.children),g.return=u,u=g;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ui&&$h(N)===R.type){n(u,R.sibling),g=r(R,_.props),g.ref=to(u,R,_),g.return=u,u=g;break e}n(u,R);break}else e(u,R);R=R.sibling}_.type===us?(g=Cr(_.props.children,u.mode,x,_.key),g.return=u,u=g):(x=al(_.type,_.key,_.props,null,u.mode,x),x.ref=to(u,g,_),x.return=u,u=x)}return o(u);case cs:e:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),g=r(g,_.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Wc(_,u.mode,x),g.return=u,u=g}return o(u);case Ui:return R=_._init,m(u,g,R(_._payload),x)}if(mo(_))return y(u,g,_,x);if(Ks(_))return v(u,g,_,x);ha(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,_),g.return=u,u=g):(n(u,g),g=Gc(_,u.mode,x),g.return=u,u=g),o(u)):n(u,g)}return m}var Fs=Vg(!0),Gg=Vg(!1),Rl=sr(null),bl=null,vs=null,wf=null;function Tf(){wf=vs=bl=null}function Af(t){var e=Rl.current;ut(Rl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){bl=t,wf=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(wf!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(bl===null)throw Error(oe(308));vs=t,bl.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Mr=null;function Cf(t){Mr===null?Mr=[t]:Mr.push(t)}function Wg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Cf(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Cf(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hf(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(p,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,f,d):y,d==null)break e;f=_t({},f,d);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=f}}function Kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Zo={},ri=sr(Zo),Bo=sr(Zo),Ho=sr(Zo);function Er(t){if(t===Zo)throw Error(oe(174));return t}function bf(t,e){switch(ot(Ho,e),ot(Bo,t),ot(ri,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Iu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Iu(e,t)}ut(ri),ot(ri,e)}function Os(){ut(ri),ut(Bo),ut(Ho)}function jg(t){Er(Ho.current);var e=Er(ri.current),n=Iu(e,t.type);e!==n&&(ot(Bo,t),ot(ri,n))}function Pf(t){Bo.current===t&&(ut(ri),ut(Bo))}var mt=sr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function Lf(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var nl=Ei.ReactCurrentDispatcher,kc=Ei.ReactCurrentBatchConfig,Pr=0,gt=null,Tt=null,Lt=null,Dl=!1,To=!1,Vo=0,_x=0;function Bt(){throw Error(oe(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function If(t,e,n,i,r,s){if(Pr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?Sx:Mx,t=n(i,r),To){s=0;do{if(To=!1,Vo=0,25<=s)throw Error(oe(301));s+=1,Lt=Tt=null,e.updateQueue=null,nl.current=Ex,t=n(i,r)}while(To)}if(nl.current=Il,e=Tt!==null&&Tt.next!==null,Pr=0,Lt=Tt=gt=null,Dl=!1,e)throw Error(oe(300));return t}function Uf(){var t=Vo!==0;return Vo=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Ln(){if(Tt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Lt===null?gt.memoizedState:Lt.next;if(e!==null)Lt=e,Tt=t;else{if(t===null)throw Error(oe(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Go(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Pr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=h,Lr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Yg(){}function $g(t,e){var n=gt,i=Ln(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Nf(Zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Wo(9,Kg.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(oe(349));Pr&30||qg(n,e,r)}return r}function qg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kg(t,e,n,i){e.value=n,e.getSnapshot=i,Qg(e)&&Jg(t)}function Zg(t,e,n){return n(function(){Qg(e)&&Jg(t)})}function Qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Jg(t){var e=yi(t,1);e!==null&&Xn(e,t,1,-1)}function Zh(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=yx.bind(null,gt,t),[e.memoizedState,t]}function Wo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function e0(){return Ln().memoizedState}function il(t,e,n,i){var r=Qn();gt.flags|=t,r.memoizedState=Wo(1|e,n,void 0,i===void 0?null:i)}function tc(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&Df(i,o.deps)){r.memoizedState=Wo(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Wo(1|e,n,s,i)}function Qh(t,e){return il(8390656,8,t,e)}function Nf(t,e){return tc(2048,8,t,e)}function t0(t,e){return tc(4,2,t,e)}function n0(t,e){return tc(4,4,t,e)}function i0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r0(t,e,n){return n=n!=null?n.concat([t]):null,tc(4,4,i0.bind(null,e,t),n)}function Ff(){}function s0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function o0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function a0(t,e,n){return Pr&21?(Yn(n,e)||(n=fg(),gt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function vx(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{rt=n,kc.transition=i}}function l0(){return Ln().memoizedState}function xx(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},c0(t))u0(e,n);else if(n=Wg(t,e,n,i),n!==null){var r=Kt();Xn(n,t,i,r),d0(n,e,i)}}function yx(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(c0(t))u0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Cf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Wg(t,e,r,i),n!==null&&(r=Kt(),Xn(n,t,i,r),d0(n,e,i))}}function c0(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function u0(t,e){To=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hf(t,n)}}var Il={readContext:Pn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Sx={readContext:Pn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,il(4194308,4,i0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return il(4194308,4,t,e)},useInsertionEffect:function(t,e){return il(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xx.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Zh,useDebugValue:Ff,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Zh(!1),e=t[0];return t=vx.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Qn();if(ht){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Dt===null)throw Error(oe(349));Pr&30||qg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qh(Zg.bind(null,i,s,t),[t]),i.flags|=2048,Wo(9,Kg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=Dt.identifierPrefix;if(ht){var n=pi,i=hi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mx={readContext:Pn,useCallback:s0,useContext:Pn,useEffect:Nf,useImperativeHandle:r0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:zc,useRef:e0,useState:function(){return zc(Go)},useDebugValue:Ff,useDeferredValue:function(t){var e=Ln();return a0(e,Tt.memoizedState,t)},useTransition:function(){var t=zc(Go)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Yg,useSyncExternalStore:$g,useId:l0,unstable_isNewReconciler:!1},Ex={readContext:Pn,useCallback:s0,useContext:Pn,useEffect:Nf,useImperativeHandle:r0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:Bc,useRef:e0,useState:function(){return Bc(Go)},useDebugValue:Ff,useDeferredValue:function(t){var e=Ln();return Tt===null?e.memoizedState=t:a0(e,Tt.memoizedState,t)},useTransition:function(){var t=Bc(Go)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Yg,useSyncExternalStore:$g,useId:l0,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nc={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=qi(t),s=_i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(Xn(e,t,r,i),tl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=qi(t),s=_i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(Xn(e,t,r,i),tl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=qi(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(Xn(e,t,i,n),tl(e,t,i))}};function Jh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,i)||!Fo(r,s):!0}function f0(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=on(e)?Rr:Xt.current,i=e.contextTypes,s=(i=i!=null)?Us(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ep(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&nc.enqueueReplaceState(e,e.state,null)}function td(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=on(e)?Rr:Xt.current,r.context=Us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nc.enqueueReplaceState(r,r.state,null),Pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,e){try{var n="",i=e;do n+=Z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function h0(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,fd=i),nd(t,e)},n}function p0(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nd(t,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kx.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var Tx=Ei.ReactCurrentOwner,rn=!1;function qt(t,e,n,i){e.child=t===null?Gg(e,null,n,i):Fs(e,t.child,n,i)}function rp(t,e,n,i,r){n=n.render;var s=e.ref;return Cs(e,r),i=If(t,e,n,i,s,r),n=Uf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ht&&n&&Sf(e),e.flags|=1,qt(t,e,i,r),e.child)}function sp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,m0(t,e,s,i,r)):(t=al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=Ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function m0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Fo(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Si(t,e,r)}return id(t,e,n,i,r)}function g0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ys,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(ys,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(ys,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(ys,hn),hn|=i;return qt(t,e,r,n),e.child}function _0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,i,r){var s=on(n)?Rr:Xt.current;return s=Us(e,s),Cs(e,r),n=If(t,e,n,i,s,r),i=Uf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ht&&i&&Sf(e),e.flags|=1,qt(t,e,n,r),e.child)}function op(t,e,n,i,r){if(on(n)){var s=!0;Tl(e)}else s=!1;if(Cs(e,r),e.stateNode===null)rl(t,e),f0(e,n,i),td(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=on(n)?Rr:Xt.current,c=Us(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ep(e,o,i,c),Ni=!1;var d=e.memoizedState;o.state=d,Pl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||sn.current||Ni?(typeof h=="function"&&(ed(e,n,h,i),l=e.memoizedState),(a=Ni||Jh(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Xg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:kn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=on(n)?Rr:Xt.current,l=Us(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&ep(e,o,i,l),Ni=!1,d=e.memoizedState,o.state=d,Pl(e,i,o,r);var y=e.memoizedState;a!==f||d!==y||sn.current||Ni?(typeof p=="function"&&(ed(e,n,p,i),y=e.memoizedState),(c=Ni||Jh(e,n,c,i,d,y,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return rd(t,e,n,i,s,r)}function rd(t,e,n,i,r,s){_0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xh(e,n,!1),Si(t,e,s);i=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Xh(e,n,!0),e.child}function v0(t){var e=t.stateNode;e.pendingContext?Wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wh(t,e.context,!1),bf(t,e.containerInfo)}function ap(t,e,n,i,r){return Ns(),Ef(r),e.flags|=256,qt(t,e,n,i),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function od(t){return{baseLanes:t,cachePool:null,transitions:null}}function x0(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(mt,r&1),t===null)return Qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sc(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=od(n),e.memoizedState=sd,t):Of(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ax(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ki(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?od(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sd,i}return s=t.child,t=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Of(t,e){return e=sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pa(t,e,n,i){return i!==null&&Ef(i),Fs(e,t.child,null,n),t=Of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(oe(422))),pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sc({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=od(o),e.memoizedState=sd,s);if(!(e.mode&1))return pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Hc(s,i,void 0),pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Xn(i,t,r,-1))}return Gf(),i=Hc(Error(oe(421))),pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=ji(r.nextSibling),mn=e,ht=!0,Bn=null,t!==null&&(Mn[En++]=hi,Mn[En++]=pi,Mn[En++]=br,hi=t.id,pi=t.overflow,br=e),e=Of(e,i.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function Vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function y0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vc(e,!0,n,null,s);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cx(t,e,n){switch(e.tag){case 3:v0(e),Ns();break;case 5:jg(e);break;case 1:on(e.type)&&Tl(e);break;case 4:bf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?x0(t,e,n):(ot(mt,mt.current&1),t=Si(t,e,n),t!==null?t.sibling:null);ot(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return y0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,g0(t,e,n)}return Si(t,e,n)}var S0,ad,M0,E0;S0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ad=function(){};M0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ri.current);var s=null;switch(n){case"input":r=bu(t,r),i=bu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Du(t,r),i=Du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=El)}Uu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};E0=function(t,e,n,i){n!==i&&(e.flags|=4)};function no(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Rx(t,e,n){var i=e.pendingProps;switch(Mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return on(e.type)&&wl(),Ht(e),null;case 3:return i=e.stateNode,Os(),ut(sn),ut(Xt),Lf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(md(Bn),Bn=null))),ad(t,e),Ht(e),null;case 5:Pf(e);var r=Er(Ho.current);if(n=e.type,t!==null&&e.stateNode!=null)M0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Ht(e),null}if(t=Er(ri.current),fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[zo]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<_o.length;r++)lt(_o[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":_h(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":xh(i,s),lt("invalid",i)}Uu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",""+a]):bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":ia(i),vh(i,s,!0);break;case"textarea":ia(i),yh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=El)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[zo]=i,S0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<_o.length;r++)lt(_o[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":_h(t,i),r=bu(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),lt("invalid",t);break;case"textarea":xh(t,i),r=Du(t,i),lt("invalid",t);break;default:r=i}Uu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?eg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Po(t,l):typeof l=="number"&&Po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&af(t,s,l,o))}switch(n){case"input":ia(t),vh(t,i,!1);break;case"textarea":ia(t),yh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Es(t,!!i.multiple,s,!1):i.defaultValue!=null&&Es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)E0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Er(Ho.current),Er(ri.current),fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:da(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Ht(e),null;case 13:if(ut(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&pn!==null&&e.mode&1&&!(e.flags&128))Hg(),Ns(),e.flags|=98560,s=!1;else if(s=fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[ti]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Bn!==null&&(md(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Ct===0&&(Ct=3):Gf())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Os(),ad(t,e),t===null&&Oo(e.stateNode.containerInfo),Ht(e),null;case 10:return Af(e.type._context),Ht(e),null;case 17:return on(e.type)&&wl(),Ht(e),null;case 19:if(ut(mt),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)no(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,no(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>zs&&(e.flags|=128,i=!0,no(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ll(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Ht(e),null}else 2*St()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,i=!0,no(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=mt.current,ot(mt,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return Vf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function bx(t,e){switch(Mf(e),e.tag){case 1:return on(e.type)&&wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),ut(sn),ut(Xt),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pf(e),null;case 13:if(ut(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(mt),null;case 4:return Os(),null;case 10:return Af(e.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var ma=!1,Wt=!1,Px=typeof WeakSet=="function"?WeakSet:Set,we=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function ld(t,e,n){try{n()}catch(i){yt(t,e,i)}}var cp=!1;function Lx(t,e){if(Xu=yl,t=Rg(),yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ju={focusedElem:t,selectionRange:n},yl=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,m=y.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:kn(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(x){yt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return y=cp,cp=!1,y}function Ao(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ld(e,n,s)}r=r.next}while(r!==i)}}function ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[zo],delete e[qu],delete e[hx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T0(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Nt=null,zn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)A0(t,e,n),n=n.sibling}function A0(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 5:Wt||xs(n,e);case 6:var i=Nt,r=zn;Nt=null,Ci(t,e,n),Nt=i,zn=r,Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),Uo(t)):Nc(Nt,n.stateNode));break;case 4:i=Nt,r=zn,Nt=n.stateNode.containerInfo,zn=!0,Ci(t,e,n),Nt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ld(n,e,o),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!Wt&&(xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ci(t,e,n),Wt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Px),e.forEach(function(i){var r=Bx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,zn=!1;break e;case 3:Nt=a.stateNode.containerInfo,zn=!0;break e;case 4:Nt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Nt===null)throw Error(oe(160));A0(s,o,r),Nt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)C0(e,t),e=e.sibling}function C0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Zn(t),i&4){try{Ao(3,t,t.return),ic(3,t)}catch(v){yt(t,t.return,v)}try{Ao(5,t,t.return)}catch(v){yt(t,t.return,v)}}break;case 1:Un(e,t),Zn(t),i&512&&n!==null&&xs(n,n.return);break;case 5:if(Un(e,t),Zn(t),i&512&&n!==null&&xs(n,n.return),t.flags&32){var r=t.stateNode;try{Po(r,"")}catch(v){yt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qm(r,s),Nu(a,o);var c=Nu(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?eg(r,f):h==="dangerouslySetInnerHTML"?Qm(r,f):h==="children"?Po(r,f):af(r,h,f,c)}switch(a){case"input":Pu(r,s);break;case"textarea":Km(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Es(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Es(r,!!s.multiple,s.defaultValue,!0):Es(r,!!s.multiple,s.multiple?[]:"",!1))}r[zo]=s}catch(v){yt(t,t.return,v)}}break;case 6:if(Un(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){yt(t,t.return,v)}}break;case 3:if(Un(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(v){yt(t,t.return,v)}break;case 4:Un(e,t),Zn(t);break;case 13:Un(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Bf=St())),i&4&&dp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||h,Un(e,t),Wt=c):Un(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(we=t,h=t.child;h!==null;){for(f=we=h;we!==null;){switch(d=we,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ao(4,d,d.return);break;case 1:xs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){yt(i,n,v)}}break;case 5:xs(d,d.return);break;case 22:if(d.memoizedState!==null){hp(f);continue}}p!==null?(p.return=d,we=p):hp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jm("display",o))}catch(v){yt(t,t.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){yt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),Zn(t),i&4&&dp(t);break;case 21:break;default:Un(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T0(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Po(r,""),i.flags&=-33);var s=up(t);dd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=up(t);ud(t,a,o);break;default:throw Error(oe(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dx(t,e,n){we=t,R0(t)}function R0(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ma;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=ma;var c=Wt;if(ma=o,(Wt=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?pp(r):l!==null?(l.return=o,we=l):pp(r);for(;s!==null;)we=s,R0(s),s=s.sibling;we=r,ma=a,Wt=c}fp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):fp(t)}}function fp(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Uo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Wt||e.flags&512&&cd(e)}catch(d){yt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function hp(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function pp(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ic(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{cd(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{cd(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var Ix=Math.ceil,Ul=Ei.ReactCurrentDispatcher,kf=Ei.ReactCurrentOwner,Rn=Ei.ReactCurrentBatchConfig,Je=0,Dt=null,wt=null,Ft=0,hn=0,ys=sr(0),Ct=0,Xo=null,Lr=0,rc=0,zf=0,Co=null,en=null,Bf=0,zs=1/0,di=null,Nl=!1,fd=null,$i=null,ga=!1,Hi=null,Fl=0,Ro=0,hd=null,sl=-1,ol=0;function Kt(){return Je&6?St():sl!==-1?sl:sl=St()}function qi(t){return t.mode&1?Je&2&&Ft!==0?Ft&-Ft:gx.transition!==null?(ol===0&&(ol=fg()),ol):(t=rt,t!==0||(t=window.event,t=t===void 0?16:xg(t.type)),t):1}function Xn(t,e,n,i){if(50<Ro)throw Ro=0,hd=null,Error(oe(185));$o(t,n,i),(!(Je&2)||t!==Dt)&&(t===Dt&&(!(Je&2)&&(rc|=n),Ct===4&&ki(t,Ft)),an(t,i),n===1&&Je===0&&!(e.mode&1)&&(zs=St()+500,ec&&or()))}function an(t,e){var n=t.callbackNode;gv(t,e);var i=xl(t,t===Dt?Ft:0);if(i===0)n!==null&&Eh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Eh(n),e===1)t.tag===0?mx(mp.bind(null,t)):kg(mp.bind(null,t)),dx(function(){!(Je&6)&&or()}),n=null;else{switch(hg(i)){case 1:n=ff;break;case 4:n=ug;break;case 16:n=vl;break;case 536870912:n=dg;break;default:n=vl}n=F0(n,b0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b0(t,e){if(sl=-1,ol=0,Je&6)throw Error(oe(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var i=xl(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ol(t,i);else{e=i;var r=Je;Je|=2;var s=L0();(Dt!==t||Ft!==e)&&(di=null,zs=St()+500,Ar(t,e));do try{Fx();break}catch(a){P0(t,a)}while(!0);Tf(),Ul.current=s,Je=r,wt!==null?e=0:(Dt=null,Ft=0,e=Ct)}if(e!==0){if(e===2&&(r=Bu(t),r!==0&&(i=r,e=pd(t,r))),e===1)throw n=Xo,Ar(t,0),ki(t,i),an(t,St()),n;if(e===6)ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ux(r)&&(e=Ol(t,i),e===2&&(s=Bu(t),s!==0&&(i=s,e=pd(t,s))),e===1))throw n=Xo,Ar(t,0),ki(t,i),an(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:_r(t,en,di);break;case 3:if(ki(t,i),(i&130023424)===i&&(e=Bf+500-St(),10<e)){if(xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$u(_r.bind(null,t,en,di),e);break}_r(t,en,di);break;case 4:if(ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ix(i/1960))-i,10<i){t.timeoutHandle=$u(_r.bind(null,t,en,di),i);break}_r(t,en,di);break;case 5:_r(t,en,di);break;default:throw Error(oe(329))}}}return an(t,St()),t.callbackNode===n?b0.bind(null,t):null}function pd(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=en,en=n,e!==null&&md(e)),t}function md(t){en===null?en=t:en.push.apply(en,t)}function Ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~zf,e&=~rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function mp(t){if(Je&6)throw Error(oe(327));Rs();var e=xl(t,0);if(!(e&1))return an(t,St()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var i=Bu(t);i!==0&&(e=i,n=pd(t,i))}if(n===1)throw n=Xo,Ar(t,0),ki(t,e),an(t,St()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,en,di),an(t,St()),null}function Hf(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(zs=St()+500,ec&&or())}}function Dr(t){Hi!==null&&Hi.tag===0&&!(Je&6)&&Rs();var e=Je;Je|=1;var n=Rn.transition,i=rt;try{if(Rn.transition=null,rt=1,t)return t()}finally{rt=i,Rn.transition=n,Je=e,!(Je&6)&&or()}}function Vf(){hn=ys.current,ut(ys)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ux(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Mf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wl();break;case 3:Os(),ut(sn),ut(Xt),Lf();break;case 5:Pf(i);break;case 4:Os();break;case 13:ut(mt);break;case 19:ut(mt);break;case 10:Af(i.type._context);break;case 22:case 23:Vf()}n=n.return}if(Dt=t,wt=t=Ki(t.current,null),Ft=hn=e,Ct=0,Xo=null,zf=rc=Lr=0,en=Co=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function P0(t,e){do{var n=wt;try{if(Tf(),nl.current=Il,Dl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(Pr=0,Lt=Tt=gt=null,To=!1,Vo=0,kf.current=null,n===null||n.return===null){Ct=1,Xo=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=np(o);if(p!==null){p.flags&=-257,ip(p,o,a,s,e),p.mode&1&&tp(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){tp(s,c,e),Gf();break e}l=Error(oe(426))}}else if(ht&&a.mode&1){var m=np(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ip(m,o,a,s,e),Ef(ks(l,a));break e}}s=l=ks(l,a),Ct!==4&&(Ct=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=h0(s,l,e);qh(s,u);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&($i===null||!$i.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=p0(s,a,e);qh(s,x);break e}}s=s.return}while(s!==null)}I0(n)}catch(N){e=N,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function L0(){var t=Ul.current;return Ul.current=Il,t===null?Il:t}function Gf(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Lr&268435455)&&!(rc&268435455)||ki(Dt,Ft)}function Ol(t,e){var n=Je;Je|=2;var i=L0();(Dt!==t||Ft!==e)&&(di=null,Ar(t,e));do try{Nx();break}catch(r){P0(t,r)}while(!0);if(Tf(),Je=n,Ul.current=i,wt!==null)throw Error(oe(261));return Dt=null,Ft=0,Ct}function Nx(){for(;wt!==null;)D0(wt)}function Fx(){for(;wt!==null&&!av();)D0(wt)}function D0(t){var e=N0(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?I0(t):wt=e,kf.current=null}function I0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bx(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}else if(n=Rx(n,e,hn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ct===0&&(Ct=5)}function _r(t,e,n){var i=rt,r=Rn.transition;try{Rn.transition=null,rt=1,Ox(t,e,n,i)}finally{Rn.transition=r,rt=i}return null}function Ox(t,e,n,i){do Rs();while(Hi!==null);if(Je&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_v(t,s),t===Dt&&(wt=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,F0(vl,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=rt;rt=1;var a=Je;Je|=4,kf.current=null,Lx(t,n),C0(n,t),ix(ju),yl=!!Xu,ju=Xu=null,t.current=n,Dx(n),lv(),Je=a,rt=o,Rn.transition=s}else t.current=n;if(ga&&(ga=!1,Hi=t,Fl=r),s=t.pendingLanes,s===0&&($i=null),dv(n.stateNode),an(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=fd,fd=null,t;return Fl&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===hd?Ro++:(Ro=0,hd=t):Ro=0,or(),null}function Rs(){if(Hi!==null){var t=hg(Fl),e=Rn.transition,n=rt;try{if(Rn.transition=null,rt=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Fl=0,Je&6)throw Error(oe(331));var r=Je;for(Je|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var h=we;switch(h.tag){case 0:case 11:case 15:Ao(8,h,s)}var f=h.child;if(f!==null)f.return=h,we=f;else for(;we!==null;){h=we;var d=h.sibling,p=h.return;if(w0(h),h===c){we=null;break}if(d!==null){d.return=p,we=d;break}we=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ao(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,we=u;break e}we=s.return}}var g=t.current;for(we=g;we!==null;){o=we;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,we=_;else e:for(o=g;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ic(9,a)}}catch(N){yt(a,a.return,N)}if(a===o){we=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,we=x;break e}we=a.return}}if(Je=r,or(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(ql,t)}catch{}i=!0}return i}finally{rt=n,Rn.transition=e}}return!1}function gp(t,e,n){e=ks(n,e),e=h0(t,e,1),t=Yi(t,e,1),e=Kt(),t!==null&&($o(t,1,e),an(t,e))}function yt(t,e,n){if(t.tag===3)gp(t,t,n);else for(;e!==null;){if(e.tag===3){gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){t=ks(n,t),t=p0(e,t,1),e=Yi(e,t,1),t=Kt(),e!==null&&($o(e,1,t),an(e,t));break}}e=e.return}}function kx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(Ct===4||Ct===3&&(Ft&130023424)===Ft&&500>St()-Bf?Ar(t,0):zf|=n),an(t,e)}function U0(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=Kt();t=yi(t,e),t!==null&&($o(t,e,n),an(t,n))}function zx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),U0(t,n)}function Bx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),U0(t,n)}var N0;N0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Cx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ht&&e.flags&1048576&&zg(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rl(t,e),t=e.pendingProps;var r=Us(e,Xt.current);Cs(e,n),r=If(null,e,i,t,r,n);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,Tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rf(e),r.updater=nc,e.stateNode=r,r._reactInternals=e,td(e,i,t,n),e=rd(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Sf(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Vx(i),t=kn(i,t),r){case 0:e=id(null,e,i,t,n);break e;case 1:e=op(null,e,i,t,n);break e;case 11:e=rp(null,e,i,t,n);break e;case 14:e=sp(null,e,i,kn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),op(t,e,i,r,n);case 3:e:{if(v0(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Xg(t,e),Pl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ks(Error(oe(423)),e),e=ap(t,e,i,n,r);break e}else if(i!==r){r=ks(Error(oe(424)),e),e=ap(t,e,i,n,r);break e}else for(pn=ji(e.stateNode.containerInfo.firstChild),mn=e,ht=!0,Bn=null,n=Gg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=Si(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return jg(e),t===null&&Qu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yu(i,r)?o=null:s!==null&&Yu(i,s)&&(e.flags|=32),_0(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&Qu(e),null;case 13:return x0(t,e,n);case 4:return bf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),rp(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Rl,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!sn.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ju(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ju(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Cs(e,n),r=Pn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),sp(t,e,i,r,n);case 15:return m0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),rl(t,e),e.tag=1,on(i)?(t=!0,Tl(e)):t=!1,Cs(e,n),f0(e,i,r),td(e,i,r,n),rd(null,e,i,!0,t,n);case 19:return y0(t,e,n);case 22:return g0(t,e,n)}throw Error(oe(156,e.tag))};function F0(t,e){return cg(t,e)}function Hx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Hx(t,e,n,i)}function Wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return Wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cf)return 11;if(t===uf)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Wf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return Cr(n.children,r,s,e);case lf:o=8,r|=8;break;case Tu:return t=An(12,n,e,r|2),t.elementType=Tu,t.lanes=s,t;case Au:return t=An(13,n,e,r),t.elementType=Au,t.lanes=s,t;case Cu:return t=An(19,n,e,r),t.elementType=Cu,t.lanes=s,t;case jm:return sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wm:o=10;break e;case Xm:o=9;break e;case cf:o=11;break e;case uf:o=14;break e;case Ui:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function sc(t,e,n,i){return t=An(22,t,i,e),t.elementType=jm,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xf(t,e,n,i,r,s,o,a,l){return t=new Gx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(s),t}function Wx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function O0(t){if(!t)return tr;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(on(n))return Og(t,n,e)}return e}function k0(t,e,n,i,r,s,o,a,l){return t=Xf(n,i,!0,t,r,s,o,a,l),t.context=O0(null),n=t.current,i=Kt(),r=qi(n),s=_i(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,$o(t,r,i),an(t,i),t}function oc(t,e,n,i){var r=e.current,s=Kt(),o=qi(r);return n=O0(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,o),t!==null&&(Xn(t,r,o,s),tl(t,r,o)),o}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){_p(t,e),(t=t.alternate)&&_p(t,e)}function Xx(){return null}var z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yf(t){this._internalRoot=t}ac.prototype.render=Yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));oc(t,e,null,null)};ac.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){oc(null,t,null,null)}),e[xi]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&vg(t)}};function $f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=kl(o);s.call(c)}}var o=k0(e,i,t,0,null,!1,!1,"",vp);return t._reactRootContainer=o,t[xi]=o.current,Oo(t.nodeType===8?t.parentNode:t),Dr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=kl(l);a.call(c)}}var l=Xf(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[xi]=l.current,Oo(t.nodeType===8?t.parentNode:t),Dr(function(){oc(e,l,n,i)}),l}function cc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=kl(o);a.call(l)}}oc(e,o,t,r)}else o=jx(n,e,t,r,i);return kl(o)}pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=go(e.pendingLanes);n!==0&&(hf(e,n|1),an(e,St()),!(Je&6)&&(zs=St()+500,or()))}break;case 13:Dr(function(){var i=yi(t,1);if(i!==null){var r=Kt();Xn(i,t,1,r)}}),jf(t,1)}};pf=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=Kt();Xn(e,t,134217728,n)}jf(t,134217728)}};mg=function(t){if(t.tag===13){var e=qi(t),n=yi(t,e);if(n!==null){var i=Kt();Xn(n,t,e,i)}jf(t,e)}};gg=function(){return rt};_g=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Ou=function(t,e,n){switch(e){case"input":if(Pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jl(i);if(!r)throw Error(oe(90));$m(i),Pu(i,r)}}}break;case"textarea":Km(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};ig=Hf;rg=Dr;var Yx={usingClientEntryPoint:!1,Events:[Ko,ps,Jl,tg,ng,Hf]},io={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ag(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{ql=_a.inject($x),ii=_a}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$f(e))throw Error(oe(200));return Wx(t,e,null,n)};vn.createRoot=function(t,e){if(!$f(t))throw Error(oe(299));var n=!1,i="",r=z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xf(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Yf(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=ag(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Dr(t)};vn.hydrate=function(t,e,n){if(!lc(e))throw Error(oe(200));return cc(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!$f(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=z0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=k0(e,null,t,1,n??null,r,!1,s,o),t[xi]=e.current,Oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ac(e)};vn.render=function(t,e,n){if(!lc(e))throw Error(oe(200));return cc(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!lc(t))throw Error(oe(40));return t._reactRootContainer?(Dr(function(){cc(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};vn.unstable_batchedUpdates=Hf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!lc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return cc(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function B0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0)}catch(t){console.error(t)}}B0(),Bm.exports=vn;var qx=Bm.exports,H0,xp=qx;H0=xp.createRoot,xp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qf="168",Kx=0,yp=1,Zx=2,V0=1,G0=2,ui=3,nr=0,ln=1,Hn=2,Zi=0,bs=1,Sp=2,Mp=3,Ep=4,Qx=5,xr=100,Jx=101,ey=102,ty=103,ny=104,iy=200,ry=201,sy=202,oy=203,gd=204,_d=205,ay=206,ly=207,cy=208,uy=209,dy=210,fy=211,hy=212,py=213,my=214,gy=0,_y=1,vy=2,zl=3,xy=4,yy=5,Sy=6,My=7,uc=0,Ey=1,wy=2,Qi=0,Ty=1,Ay=2,Cy=3,Ry=4,by=5,Py=6,Ly=7,W0=300,Bs=301,Hs=302,vd=303,xd=304,dc=306,yd=1e3,wr=1001,Sd=1002,Cn=1003,Dy=1004,va=1005,Vn=1006,Xc=1007,Tr=1008,Mi=1009,X0=1010,j0=1011,jo=1012,Kf=1013,Ir=1014,mi=1015,Qo=1016,Zf=1017,Qf=1018,Vs=1020,Y0=35902,$0=1021,q0=1022,Gn=1023,K0=1024,Z0=1025,Ps=1026,Gs=1027,Q0=1028,Jf=1029,J0=1030,eh=1031,th=1033,ll=33776,cl=33777,ul=33778,dl=33779,Md=35840,Ed=35841,wd=35842,Td=35843,Ad=36196,Cd=37492,Rd=37496,bd=37808,Pd=37809,Ld=37810,Dd=37811,Id=37812,Ud=37813,Nd=37814,Fd=37815,Od=37816,kd=37817,zd=37818,Bd=37819,Hd=37820,Vd=37821,fl=36492,Gd=36494,Wd=36495,e_=36283,Xd=36284,jd=36285,Yd=36286,Iy=3200,Uy=3201,nh=0,Ny=1,zi="",Jn="srgb",ar="srgb-linear",ih="display-p3",fc="display-p3-linear",Bl="linear",ct="srgb",Hl="rec709",Vl="p3",Hr=7680,wp=519,Fy=512,Oy=513,ky=514,t_=515,zy=516,By=517,Hy=518,Vy=519,$d=35044,Tp="300 es",gi=2e3,Gl=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hl=Math.PI/180,qd=180/Math.PI;function Ji(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function Gy(t,e){return(t%e+e)%e}function jc(t,e,n){return(1-n)*t+n*e}function ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function st(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],y=i[8],v=r[0],m=r[3],u=r[6],g=r[1],_=r[4],x=r[7],N=r[2],R=r[5],w=r[8];return s[0]=o*v+a*g+l*N,s[3]=o*m+a*_+l*R,s[6]=o*u+a*x+l*w,s[1]=c*v+h*g+f*N,s[4]=c*m+h*_+f*R,s[7]=c*u+h*x+f*w,s[2]=d*v+p*g+y*N,s[5]=d*m+p*_+y*R,s[8]=d*u+p*x+y*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,y=n*f+i*d+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=f*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yc.makeScale(e,n)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new qe;function n_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Wy(){const t=Wl("canvas");return t.style.display="block",t}const Ap={};function Ls(t){t in Ap||(Ap[t]=!0,console.warn(t))}function Xy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Cp=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rp=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ro={[ar]:{transfer:Bl,primaries:Hl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Jn]:{transfer:ct,primaries:Hl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[fc]:{transfer:Bl,primaries:Vl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(Cp)},[ih]:{transfer:ct,primaries:Vl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(Cp).convertLinearToSRGB()}},jy=new Set([ar,fc]),it={enabled:!0,_workingColorSpace:ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!jy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ro[e].toReference,r=ro[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ro[t].primaries},getTransfer:function(t){return t===zi?Bl:ro[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ro[e].luminanceCoefficients)}};function Ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $c(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vr;class Yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=Wl("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ds(n[i]/255)*255):n[i]=Ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $y=0;class i_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qy=0;class Zt extends $s{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=wr,r=wr,s=Vn,o=Tr,a=Gn,l=Mi,c=Zt.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Ji(),this.name="",this.source=new i_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==W0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=W0;Zt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],y=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,x=(p+1)/2,N=(u+1)/2,R=(h+d)/4,w=(f+v)/4,D=(y+m)/4;return _>x&&_>N?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=w/i):x>N?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=D/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=w/s,r=D/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-y)*(m-y)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-y)/g,this.y=(f-v)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ky extends $s{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new i_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends Ky{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class r_ extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zy extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],y=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=y,e[n+3]=v;return}if(f!==v||l!==d||c!==p||h!==y){let m=1-a;const u=l*d+c*p+h*y+f*v,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const N=Math.sqrt(_),R=Math.atan2(N,u*g);m=Math.sin(m*R)/N,a=Math.sin(a*R)/N}const x=a*g;if(l=l*m+d*x,c=c*m+p*x,h=h*m+y*x,f=f*m+v*x,m===1-a){const N=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=N,c*=N,h*=N,f*=N}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+h*f+l*p-c*d,e[n+1]=l*y+h*d+c*f-a*p,e[n+2]=c*y+h*p+a*d-l*f,e[n+3]=h*y-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*y,this._y=c*p*f-d*h*y,this._z=c*h*y+d*p*f,this._w=c*h*f-d*p*y;break;case"YXZ":this._x=d*h*f+c*p*y,this._y=c*p*f-d*h*y,this._z=c*h*y-d*p*f,this._w=c*h*f+d*p*y;break;case"ZXY":this._x=d*h*f-c*p*y,this._y=c*p*f+d*h*y,this._z=c*h*y+d*p*f,this._w=c*h*f-d*p*y;break;case"ZYX":this._x=d*h*f-c*p*y,this._y=c*p*f+d*h*y,this._z=c*h*y-d*p*f,this._w=c*h*f+d*p*y;break;case"YZX":this._x=d*h*f+c*p*y,this._y=c*p*f+d*h*y,this._z=c*h*y-d*p*f,this._w=c*h*f-d*p*y;break;case"XZY":this._x=d*h*f-c*p*y,this._y=c*p*f-d*h*y,this._z=c*h*y+d*p*f,this._w=c*h*f+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new W,bp=new Jo;class ea{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),ya.subVectors(this.max,so),Gr.subVectors(e.a,so),Wr.subVectors(e.b,so),Xr.subVectors(e.c,so),Ri.subVectors(Wr,Gr),bi.subVectors(Xr,Wr),ur.subVectors(Gr,Xr);let n=[0,-Ri.z,Ri.y,0,-bi.z,bi.y,0,-ur.z,ur.y,Ri.z,0,-Ri.x,bi.z,0,-bi.x,ur.z,0,-ur.x,-Ri.y,Ri.x,0,-bi.y,bi.x,0,-ur.y,ur.x,0];return!Zc(n,Gr,Wr,Xr,ya)||(n=[1,0,0,0,1,0,0,0,1],!Zc(n,Gr,Wr,Xr,ya))?!1:(Sa.crossVectors(Ri,bi),n=[Sa.x,Sa.y,Sa.z],Zc(n,Gr,Wr,Xr,ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new W,new W,new W,new W,new W,new W,new W,new W],Nn=new W,xa=new ea,Gr=new W,Wr=new W,Xr=new W,Ri=new W,bi=new W,ur=new W,so=new W,ya=new W,Sa=new W,dr=new W;function Zc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),h=i.dot(dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qy=new ea,oo=new W,Qc=new W;class hc{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Qy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const n=oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(oo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Qc)),this.expandByPoint(oo.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new W,Jc=new W,Ma=new W,Pi=new W,eu=new W,Ea=new W,tu=new W;class rh{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jc.copy(e).add(n).multiplyScalar(.5),Ma.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Jc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ma),a=Pi.dot(this.direction),l=-Pi.dot(Ma),c=Pi.lengthSq(),h=Math.abs(1-o*o);let f,d,p,y;if(h>0)if(f=o*l-a,d=o*a-l,y=s*h,f>=0)if(d>=-y)if(d<=y){const v=1/h;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-y?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=y?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Jc).addScaledVector(Ma,d),p}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){eu.subVectors(n,e),Ea.subVectors(i,e),tu.crossVectors(eu,Ea);let o=this.direction.dot(tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Ea.crossVectors(Pi,Ea));if(l<0)return null;const c=a*this.direction.dot(eu.cross(Pi));if(c<0||l+c>o)return null;const h=-a*Pi.dot(tu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,c,h,f,d,p,y,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,p,y,v,m)}set(e,n,i,r,s,o,a,l,c,h,f,d,p,y,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=y,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,y=a*h,v=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+y*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=y+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,y=c*h,v=c*f;n[0]=d+v*a,n[4]=y*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=p*a-y,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,y=c*h,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*h,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,y=a*h,v=a*f;n[0]=l*h,n[4]=y*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,y=a*l,v=a*c;n[0]=l*h,n[4]=v-d*f,n[8]=y*f+p,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*f+y,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,y=a*l,v=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+v,n[5]=o*h,n[9]=p*f-y,n[2]=y*f-p,n[6]=a*h,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jy,e,eS)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Li.crossVectors(i,dn),Li.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Li.crossVectors(i,dn)),Li.normalize(),wa.crossVectors(dn,Li),r[0]=Li.x,r[4]=wa.x,r[8]=dn.x,r[1]=Li.y,r[5]=wa.y,r[9]=dn.y,r[2]=Li.z,r[6]=wa.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],y=i[2],v=i[6],m=i[10],u=i[14],g=i[3],_=i[7],x=i[11],N=i[15],R=r[0],w=r[4],D=r[8],E=r[12],S=r[1],P=r[5],C=r[9],z=r[13],$=r[2],G=r[6],X=r[10],j=r[14],I=r[3],H=r[7],K=r[11],te=r[15];return s[0]=o*R+a*S+l*$+c*I,s[4]=o*w+a*P+l*G+c*H,s[8]=o*D+a*C+l*X+c*K,s[12]=o*E+a*z+l*j+c*te,s[1]=h*R+f*S+d*$+p*I,s[5]=h*w+f*P+d*G+p*H,s[9]=h*D+f*C+d*X+p*K,s[13]=h*E+f*z+d*j+p*te,s[2]=y*R+v*S+m*$+u*I,s[6]=y*w+v*P+m*G+u*H,s[10]=y*D+v*C+m*X+u*K,s[14]=y*E+v*z+m*j+u*te,s[3]=g*R+_*S+x*$+N*I,s[7]=g*w+_*P+x*G+N*H,s[11]=g*D+_*C+x*X+N*K,s[15]=g*E+_*z+x*j+N*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],y=e[3],v=e[7],m=e[11],u=e[15];return y*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],y=e[12],v=e[13],m=e[14],u=e[15],g=f*m*c-v*d*c+v*l*p-a*m*p-f*l*u+a*d*u,_=y*d*c-h*m*c-y*l*p+o*m*p+h*l*u-o*d*u,x=h*v*c-y*f*c+y*a*p-o*v*p-h*a*u+o*f*u,N=y*f*l-h*v*l-y*a*d+o*v*d+h*a*m-o*f*m,R=n*g+i*_+r*x+s*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=g*w,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*u-i*d*u)*w,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(h*m*s-y*d*s+y*r*p-n*m*p-h*r*u+n*d*u)*w,e[6]=(y*l*s-o*m*s-y*r*c+n*m*c+o*r*u-n*l*u)*w,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(y*f*s-h*v*s-y*i*p+n*v*p+h*i*u-n*f*u)*w,e[10]=(o*v*s-y*a*s+y*i*c-n*v*c-o*i*u+n*a*u)*w,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=N*w,e[13]=(h*v*r-y*f*r+y*i*d-n*v*d-h*i*m+n*f*m)*w,e[14]=(y*a*r-o*v*r-y*i*l+n*v*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,y=s*f,v=o*h,m=o*f,u=a*f,g=l*c,_=l*h,x=l*f,N=i.x,R=i.y,w=i.z;return r[0]=(1-(v+u))*N,r[1]=(p+x)*N,r[2]=(y-_)*N,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(d+u))*R,r[6]=(m+g)*R,r[7]=0,r[8]=(y+_)*w,r[9]=(m-g)*w,r[10]=(1-(d+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,h=1/o,f=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=gi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,y;if(a===gi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Gl)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*h;let y,v;if(a===gi)y=(o+s)*f,v=-2*f;else if(a===Gl)y=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new W,Fn=new pt,Jy=new W(0,0,0),eS=new W(1,1,1),Li=new W,wa=new W,dn=new W,Pp=new pt,Lp=new Jo;class $n{constructor(e=0,n=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tS=0;const Dp=new W,Yr=new Jo,ai=new pt,Ta=new W,ao=new W,nS=new W,iS=new Jo,Ip=new W(1,0,0),Up=new W(0,1,0),Np=new W(0,0,1),Fp={type:"added"},rS={type:"removed"},$r={type:"childadded",child:null},nu={type:"childremoved",child:null};class It extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new W,n=new $n,i=new Jo,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new qe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Up,e)}rotateZ(e){return this.rotateOnAxis(Np,e)}translateOnAxis(e,n){return Dp.copy(e).applyQuaternion(this.quaternion),this.position.add(Dp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Up,e)}translateZ(e){return this.translateOnAxis(Np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ta.copy(e):Ta.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(ao,Ta,this.up):ai.lookAt(Ta,ao,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(ai),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fp),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rS),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fp),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,nS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,iS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new W(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new W,li=new W,iu=new W,ci=new W,qr=new W,Kr=new W,Op=new W,ru=new W,su=new W,ou=new W;class Tn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),li.subVectors(i,n),iu.subVectors(e,n);const o=On.dot(On),a=On.dot(li),l=On.dot(iu),c=li.dot(li),h=li.dot(iu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*h)*d,y=(o*h-a*l)*d;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),li.subVectors(e,n),On.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),li.subVectors(this.a,this.b),On.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Kr.subVectors(s,i),ru.subVectors(e,i);const l=qr.dot(ru),c=Kr.dot(ru);if(l<=0&&c<=0)return n.copy(i);su.subVectors(e,r);const h=qr.dot(su),f=Kr.dot(su);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(qr,o);ou.subVectors(e,s);const p=qr.dot(ou),y=Kr.dot(ou);if(y>=0&&p<=y)return n.copy(s);const v=p*c-l*y;if(v<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Kr,a);const m=h*y-p*f;if(m<=0&&f-h>=0&&p-y>=0)return Op.subVectors(s,r),a=(f-h)/(f-h+(p-y)),n.copy(r).addScaledVector(Op,a);const u=1/(m+v+d);return o=v*u,a=d*u,n.copy(i).addScaledVector(qr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=Gy(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=au(o,s,e+1/3),this.g=au(o,s,e),this.b=au(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const i=s_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return it.fromWorkingColorSpace(Gt.copy(this),e),Math.round(tn(Gt.r*255,0,255))*65536+Math.round(tn(Gt.g*255,0,255))*256+Math.round(tn(Gt.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Jn){it.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Aa);const i=jc(Di.h,Aa.h,n),r=jc(Di.s,Aa.s,n),s=jc(Di.l,Aa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new We;We.NAMES=s_;let sS=0;class lr extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=bs,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gd&&(i.blendSrc=this.blendSrc),this.blendDst!==_d&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class o_ extends lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new W,Ca=new Xe;class jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$d,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ls("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ca.fromBufferAttribute(this,n),Ca.applyMatrix3(e),this.setXY(n,Ca.x,Ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ni(n,this.array)),n}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ni(n,this.array)),n}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ni(n,this.array)),n}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ni(n,this.array)),n}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$d&&(e.usage=this.usage),e}}class a_ extends jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class l_ extends jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bn extends jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oS=0;const Sn=new pt,lu=new It,Zr=new W,fn=new ea,lo=new ea,Pt=new W;class _n extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?l_:a_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(fn.min,lo.min),fn.expandByPoint(Pt),Pt.addVectors(fn.max,lo.max),fn.expandByPoint(Pt)):(fn.expandByPoint(lo.min),fn.expandByPoint(lo.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),Pt.add(Zr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new W,l[D]=new W;const c=new W,h=new W,f=new W,d=new Xe,p=new Xe,y=new Xe,v=new W,m=new W;function u(D,E,S){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,E),y.fromBufferAttribute(s,S),h.sub(c),f.sub(c),p.sub(d),y.sub(d);const P=1/(p.x*y.y-y.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(P),a[D].add(v),a[E].add(v),a[S].add(v),l[D].add(m),l[E].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let D=0,E=g.length;D<E;++D){const S=g[D],P=S.start,C=S.count;for(let z=P,$=P+C;z<$;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new W,x=new W,N=new W,R=new W;function w(D){N.fromBufferAttribute(r,D),R.copy(N);const E=a[D];_.copy(E),_.sub(N.multiplyScalar(N.dot(E))).normalize(),x.crossVectors(R,E);const P=x.dot(l[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,P)}for(let D=0,E=g.length;D<E;++D){const S=g[D],P=S.start,C=S.count;for(let z=P,$=P+C;z<$;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,h=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const y=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let p=0,y=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let u=0;u<h;u++)d[y++]=c[p++]}return new jn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kp=new pt,fr=new rh,Ra=new hc,zp=new W,Qr=new W,Jr=new W,es=new W,cu=new W,ba=new W,Pa=new Xe,La=new Xe,Da=new Xe,Bp=new W,Hp=new W,Vp=new W,Ia=new W,Ua=new W;class nn extends It{constructor(e=new _n,n=new o_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ba.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(cu.fromBufferAttribute(f,e),o?ba.addScaledVector(cu,h):ba.addScaledVector(cu.sub(n),h))}n.add(ba)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Ra.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Ra,zp)===null||fr.origin.distanceToSquared(zp)>(e.far-e.near)**2))&&(kp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(kp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){const m=d[y],u=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,N=_;x<N;x+=3){const R=a.getX(x),w=a.getX(x+1),D=a.getX(x+2);r=Na(this,u,e,i,c,h,f,R,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=y,u=v;m<u;m+=3){const g=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);r=Na(this,o,e,i,c,h,f,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=d.length;y<v;y++){const m=d[y],u=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,N=_;x<N;x+=3){const R=x,w=x+1,D=x+2;r=Na(this,u,e,i,c,h,f,R,w,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=y,u=v;m<u;m+=3){const g=m,_=m+1,x=m+2;r=Na(this,o,e,i,c,h,f,g,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aS(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===nr,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ua);return c<n.near||c>n.far?null:{distance:c,point:Ua.clone(),object:t}}function Na(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Qr),t.getVertexPosition(l,Jr),t.getVertexPosition(c,es);const h=aS(t,e,n,i,Qr,Jr,es,Ia);if(h){r&&(Pa.fromBufferAttribute(r,a),La.fromBufferAttribute(r,l),Da.fromBufferAttribute(r,c),h.uv=Tn.getInterpolation(Ia,Qr,Jr,es,Pa,La,Da,new Xe)),s&&(Pa.fromBufferAttribute(s,a),La.fromBufferAttribute(s,l),Da.fromBufferAttribute(s,c),h.uv1=Tn.getInterpolation(Ia,Qr,Jr,es,Pa,La,Da,new Xe)),o&&(Bp.fromBufferAttribute(o,a),Hp.fromBufferAttribute(o,l),Vp.fromBufferAttribute(o,c),h.normal=Tn.getInterpolation(Ia,Qr,Jr,es,Bp,Hp,Vp,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};Tn.getNormal(Qr,Jr,es,f.normal),h.face=f}return h}class Nr extends _n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(h,3)),this.setAttribute("uv",new bn(f,2));function y(v,m,u,g,_,x,N,R,w,D,E){const S=x/w,P=N/D,C=x/2,z=N/2,$=R/2,G=w+1,X=D+1;let j=0,I=0;const H=new W;for(let K=0;K<X;K++){const te=K*P-z;for(let he=0;he<G;he++){const Fe=he*S-C;H[v]=Fe*g,H[m]=te*_,H[u]=$,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[u]=R>0?1:-1,h.push(H.x,H.y,H.z),f.push(he/w),f.push(1-K/D),j+=1}}for(let K=0;K<D;K++)for(let te=0;te<w;te++){const he=d+te+G*K,Fe=d+te+G*(K+1),q=d+(te+1)+G*(K+1),ie=d+(te+1)+G*K;l.push(he,Fe,ie),l.push(Fe,q,ie),I+=6}a.addGroup(p,I,E),p+=I,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Ws(t[n]);for(const r in i)e[r]=i[r]}return e}function lS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const cS={clone:Ws,merge:$t};var uS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uS,this.fragmentShader=dS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=lS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class u_ extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new W,Gp=new Xe,Wp=new Xe;class wn extends u_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qd*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,n){return this.getViewBounds(e,Gp,Wp),n.subVectors(Wp,Gp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ts=-90,ns=1;class fS extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new wn(ts,ns,e,n);s.layers=this.layers,this.add(s);const o=new wn(ts,ns,e,n);o.layers=this.layers,this.add(o);const a=new wn(ts,ns,e,n);a.layers=this.layers,this.add(a);const l=new wn(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new wn(ts,ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class d_ extends Zt{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hS extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new d_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nr(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Zi});s.uniforms.tEquirect.value=n;const o=new nn(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Vn),new fS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const uu=new W,pS=new W,mS=new qe;class Fi{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=uu.subVectors(i,n).cross(pS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mS.getNormalMatrix(e),r=this.coplanarPoint(uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new hc,Fa=new W;class oh{constructor(e=new Fi,n=new Fi,i=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],y=r[9],v=r[10],m=r[11],u=r[12],g=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-u).normalize(),i[1].setComponents(l+s,d+c,m+p,x+u).normalize(),i[2].setComponents(l+o,d+h,m+y,x+g).normalize(),i[3].setComponents(l-o,d-h,m-y,x-g).normalize(),i[4].setComponents(l-a,d-f,m-v,x-_).normalize(),n===gi)i[5].setComponents(l+a,d+f,m+v,x+_).normalize();else if(n===Gl)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gS(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,h),d.length!==0){for(let p=0,y=d.length;p<y;p++){const v=d[p];t.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Vi extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,p=[],y=[],v=[],m=[];for(let u=0;u<h;u++){const g=u*d-o;for(let _=0;_<c;_++){const x=_*f-s;y.push(x,-g,0),v.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const _=g+c*u,x=g+c*(u+1),N=g+1+c*(u+1),R=g+1+c*u;p.push(_,x,R),p.push(x,N,R)}this.setIndex(p),this.setAttribute("position",new bn(y,3)),this.setAttribute("normal",new bn(v,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}var _S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ES=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,BS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_E=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$E=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:_S,alphahash_pars_fragment:vS,alphamap_fragment:xS,alphamap_pars_fragment:yS,alphatest_fragment:SS,alphatest_pars_fragment:MS,aomap_fragment:ES,aomap_pars_fragment:wS,batching_pars_vertex:TS,batching_vertex:AS,begin_vertex:CS,beginnormal_vertex:RS,bsdfs:bS,iridescence_fragment:PS,bumpmap_pars_fragment:LS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:IS,clipping_planes_pars_vertex:US,clipping_planes_vertex:NS,color_fragment:FS,color_pars_fragment:OS,color_pars_vertex:kS,color_vertex:zS,common:BS,cube_uv_reflection_fragment:HS,defaultnormal_vertex:VS,displacementmap_pars_vertex:GS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:jS,colorspace_fragment:YS,colorspace_pars_fragment:$S,envmap_fragment:qS,envmap_common_pars_fragment:KS,envmap_pars_fragment:ZS,envmap_pars_vertex:QS,envmap_physical_pars_fragment:cM,envmap_vertex:JS,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:aM,lights_pars_begin:lM,lights_toon_fragment:uM,lights_toon_pars_fragment:dM,lights_phong_fragment:fM,lights_phong_pars_fragment:hM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:_M,lights_fragment_end:vM,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:MM,map_fragment:EM,map_pars_fragment:wM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:bM,morphcolor_vertex:PM,morphnormal_vertex:LM,morphtarget_pars_vertex:DM,morphtarget_vertex:IM,normal_fragment_begin:UM,normal_fragment_maps:NM,normal_pars_fragment:FM,normal_pars_vertex:OM,normal_vertex:kM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:BM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:GM,opaque_fragment:WM,packing:XM,premultiplied_alpha_fragment:jM,project_vertex:YM,dithering_fragment:$M,dithering_pars_fragment:qM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:QM,shadowmap_pars_vertex:JM,shadowmap_vertex:eE,shadowmask_pars_fragment:tE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:rE,skinnormal_vertex:sE,specularmap_fragment:oE,specularmap_pars_fragment:aE,tonemapping_fragment:lE,tonemapping_pars_fragment:cE,transmission_fragment:uE,transmission_pars_fragment:dE,uv_pars_fragment:fE,uv_pars_vertex:hE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:_E,backgroundCube_vert:vE,backgroundCube_frag:xE,cube_vert:yE,cube_frag:SE,depth_vert:ME,depth_frag:EE,distanceRGBA_vert:wE,distanceRGBA_frag:TE,equirect_vert:AE,equirect_frag:CE,linedashed_vert:RE,linedashed_frag:bE,meshbasic_vert:PE,meshbasic_frag:LE,meshlambert_vert:DE,meshlambert_frag:IE,meshmatcap_vert:UE,meshmatcap_frag:NE,meshnormal_vert:FE,meshnormal_frag:OE,meshphong_vert:kE,meshphong_frag:zE,meshphysical_vert:BE,meshphysical_frag:HE,meshtoon_vert:VE,meshtoon_frag:GE,points_vert:WE,points_frag:XE,shadow_vert:jE,shadow_frag:YE,sprite_vert:$E,sprite_frag:qE},ve={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ei={basic:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:$t([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:$t([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:$t([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:$t([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:$t([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:$t([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:$t([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:$t([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:$t([ve.common,ve.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:$t([ve.lights,ve.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ei.physical={uniforms:$t([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Oa={r:0,b:0,g:0},pr=new $n,KE=new pt;function ZE(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,h,f=null,d=0,p=null;function y(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function v(g){let _=!1;const x=y(g);x===null?u(a,l):x&&x.isColor&&(u(x,1),_=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const x=y(_);x&&(x.isCubeTexture||x.mapping===dc)?(h===void 0&&(h=new nn(new Nr(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Ws(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),pr.copy(_.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(pr)),h.material.toneMapped=it.getTransfer(x.colorSpace)!==ct,(f!==x||d!==x.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new nn(new Vi(2,2),new ir({name:"BackgroundMaterial",uniforms:Ws(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,_){g.getRGB(Oa,c_(t)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:v,addToRenderList:m}}function QE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,P,C,z,$){let G=!1;const X=f(z,C,P);s!==X&&(s=X,c(s.object)),G=p(S,z,C,$),G&&y(S,z,C,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(S,P,C,z),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function f(S,P,C){const z=C.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let G=$[P.id];G===void 0&&(G={},$[P.id]=G);let X=G[z];return X===void 0&&(X=d(l()),G[z]=X),X}function d(S){const P=[],C=[],z=[];for(let $=0;$<n;$++)P[$]=0,C[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,P,C,z){const $=s.attributes,G=P.attributes;let X=0;const j=C.getAttributes();for(const I in j)if(j[I].location>=0){const K=$[I];let te=G[I];if(te===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),K===void 0||K.attribute!==te||te&&K.data!==te.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function y(S,P,C,z){const $={},G=P.attributes;let X=0;const j=C.getAttributes();for(const I in j)if(j[I].location>=0){let K=G[I];K===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const te={};te.attribute=K,K&&K.data&&(te.data=K.data),$[I]=te,X++}s.attributes=$,s.attributesNum=X,s.index=z}function v(){const S=s.newAttributes;for(let P=0,C=S.length;P<C;P++)S[P]=0}function m(S){u(S,0)}function u(S,P){const C=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;C[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),$[S]!==P&&(t.vertexAttribDivisor(S,P),$[S]=P)}function g(){const S=s.newAttributes,P=s.enabledAttributes;for(let C=0,z=P.length;C<z;C++)P[C]!==S[C]&&(t.disableVertexAttribArray(C),P[C]=0)}function _(S,P,C,z,$,G,X){X===!0?t.vertexAttribIPointer(S,P,C,$,G):t.vertexAttribPointer(S,P,C,z,$,G)}function x(S,P,C,z){v();const $=z.attributes,G=C.getAttributes(),X=P.defaultAttributeValues;for(const j in G){const I=G[j];if(I.location>=0){let H=$[j];if(H===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(H=S.instanceColor)),H!==void 0){const K=H.normalized,te=H.itemSize,he=e.get(H);if(he===void 0)continue;const Fe=he.buffer,q=he.type,ie=he.bytesPerElement,ge=q===t.INT||q===t.UNSIGNED_INT||H.gpuType===Kf;if(H.isInterleavedBufferAttribute){const me=H.data,Ie=me.stride,Oe=H.offset;if(me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<I.locationSize;Ve++)u(I.location+Ve,me.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<I.locationSize;Ve++)m(I.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let Ve=0;Ve<I.locationSize;Ve++)_(I.location+Ve,te/I.locationSize,q,K,Ie*ie,(Oe+te/I.locationSize*Ve)*ie,ge)}else{if(H.isInstancedBufferAttribute){for(let me=0;me<I.locationSize;me++)u(I.location+me,H.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let me=0;me<I.locationSize;me++)m(I.location+me);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let me=0;me<I.locationSize;me++)_(I.location+me,te/I.locationSize,q,K,te*ie,te/I.locationSize*me*ie,ge)}}else if(X!==void 0){const K=X[j];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}g()}function N(){D();for(const S in i){const P=i[S];for(const C in P){const z=P[C];for(const $ in z)h(z[$].object),delete z[$];delete P[C]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const C in P){const z=P[C];for(const $ in z)h(z[$].object),delete z[$];delete P[C]}delete i[S.id]}function w(S){for(const P in i){const C=i[P];if(C[S.id]===void 0)continue;const z=C[S.id];for(const $ in z)h(z[$].object),delete z[$];delete C[S.id]}}function D(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function JE(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let y=0;y<f;y++)p+=h[y];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],h[y],d[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let y=0;for(let v=0;v<f;v++)y+=h[v];for(let v=0;v<d.length;v++)n.update(y,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Gn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const w=R===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Mi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mi&&!w)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:x,maxSamples:N}}function t1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const y=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||y===null||y.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,_=g*4;let x=u.clippingState||null;l.value=x,x=h(y,d,_,p);for(let N=0;N!==_;++N)x[N]=n[N];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,y){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,y!==!0||m===null){const u=p+v*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,x=p;_!==v;++_,x+=4)o.copy(f[_]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function n1(t){let e=new WeakMap;function n(o,a){return a===vd?o.mapping=Bs:a===xd&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vd||a===xd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class h_ extends u_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ss=4,Xp=[.125,.215,.35,.446,.526,.582],yr=20,du=new h_,jp=new We;let fu=null,hu=0,pu=0,mu=!1;const vr=(1+Math.sqrt(5))/2,is=1/vr,Yp=[new W(-vr,is,0),new W(vr,is,0),new W(-is,0,vr),new W(is,0,vr),new W(0,vr,-is),new W(0,vr,is),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class $p{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,hu,pu),this._renderer.xr.enabled=mu,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Qo,format:Gn,colorSpace:ar,depthBuffer:!1},r=qp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i1(s)),this._blurMaterial=r1(s,e,n)}return r}_compileMaterial(e){const n=new nn(this._lodPlanes[0],e);this._renderer.compile(n,du)}_sceneToCubeUV(e,n,i,r){const a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(jp),h.toneMapping=Qi,h.autoClear=!1;const p=new o_({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),y=new nn(new Nr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(jp),v=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;ka(r,g*_,u>2?_:0,_,_),h.setRenderTarget(r),v&&h.render(y,a),h.render(e,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ka(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yp[(r-s-1)%Yp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new nn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),v=s/y,m=isFinite(s)?1+Math.floor(h*v):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const u=[];let g=0;for(let w=0;w<yr;++w){const D=w/v,E=Math.exp(-D*D/2);u.push(E),w===0?g+=E:w<m&&(g+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-i;const x=this._sizeLods[r],N=3*x*(r>_-Ss?r-_+Ss:0),R=4*(this._cubeSize-x);ka(n,N,R,3*x,2*x),l.setRenderTarget(n),l.render(f,du)}}function i1(t){const e=[],n=[],i=[];let r=t;const s=t-Ss+1+Xp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ss?l=Xp[o-t+Ss-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,y=6,v=3,m=2,u=1,g=new Float32Array(v*y*p),_=new Float32Array(m*y*p),x=new Float32Array(u*y*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,D=R>2?0:-1,E=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];g.set(E,v*y*R),_.set(d,m*y*R);const S=[R,R,R,R,R,R];x.set(S,u*y*R)}const N=new _n;N.setAttribute("position",new jn(g,v)),N.setAttribute("uv",new jn(_,m)),N.setAttribute("faceIndex",new jn(x,u)),e.push(N),r>Ss&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function qp(t,e,n){const i=new Ur(t,e,n);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function r1(t,e,n){const i=new Float32Array(yr),r=new W(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Kp(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Zp(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vd||l===xd,h=l===Bs||l===Hs;if(c||h){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new $p(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new $p(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function o1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ls("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function a1(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const v=d.morphAttributes[y];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const y in d)e.update(d[y],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const y in p){const v=p[y];for(let m=0,u=v.length;m<u;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,y=f.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let _=0,x=g.length;_<x;_+=3){const N=g[_+0],R=g[_+1],w=g[_+2];d.push(N,R,R,w,w,N)}}else if(y!==void 0){const g=y.array;v=y.version;for(let _=0,x=g.length/3-1;_<x;_+=3){const N=_+0,R=_+1,w=_+2;d.push(N,R,R,w,w,N)}}else return;const m=new(n_(d)?l_:a_)(d,1);m.version=v;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function l1(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,d*o,y),n.update(p,i,y))}function h(d,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,y);let m=0;for(let u=0;u<y;u++)m+=p[u];n.update(m,i,1)}function f(d,p,y,v){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,y);let u=0;for(let g=0;g<y;g++)u+=p[g];for(let g=0;g<v.length;g++)n.update(u,i,v[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function c1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function u1(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const y=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;y===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let N=a.attributes.position.count*x,R=1;N>e.maxTextureSize&&(R=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const w=new Float32Array(N*R*4*f),D=new r_(w,N,R,f);D.type=mi,D.needsUpdate=!0;const E=x*4;for(let P=0;P<f;P++){const C=u[P],z=g[P],$=_[P],G=N*R*4*P;for(let X=0;X<C.count;X++){const j=X*E;y===!0&&(r.fromBufferAttribute(C,X),w[G+j+0]=r.x,w[G+j+1]=r.y,w[G+j+2]=r.z,w[G+j+3]=0),v===!0&&(r.fromBufferAttribute(z,X),w[G+j+4]=r.x,w[G+j+5]=r.y,w[G+j+6]=r.z,w[G+j+7]=0),m===!0&&(r.fromBufferAttribute($,X),w[G+j+8]=r.x,w[G+j+9]=r.y,w[G+j+10]=r.z,w[G+j+11]=$.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new Xe(N,R)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const v=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function d1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class p_ extends Zt{constructor(e,n,i,r,s,o,a,l,c,h=Ps){if(h!==Ps&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ps&&(i=Ir),i===void 0&&h===Gs&&(i=Vs),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const m_=new Zt,Qp=new p_(1,1),g_=new r_,__=new Zy,v_=new d_,Jp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jp[r];if(s===void 0&&(s=new Float32Array(r),Jp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pc(t,e){let n=em[e];n===void 0&&(n=new Int32Array(e),em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function f1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function g1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;im.set(i),t.uniformMatrix2fv(this.addr,!1,im),bt(n,i)}}function _1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;nm.set(i),t.uniformMatrix3fv(this.addr,!1,nm),bt(n,i)}}function v1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;tm.set(i),t.uniformMatrix4fv(this.addr,!1,tm),bt(n,i)}}function x1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function E1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qp.compareFunction=t_,s=Qp):s=m_,n.setTexture2D(e||s,r)}function R1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||__,r)}function b1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v_,r)}function P1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||g_,r)}function L1(t){switch(t){case 5126:return f1;case 35664:return h1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return x1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return M1;case 5125:return E1;case 36294:return w1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return P1}}function D1(t,e){t.uniform1fv(this.addr,e)}function I1(t,e){const n=qs(e,this.size,2);t.uniform2fv(this.addr,n)}function U1(t,e){const n=qs(e,this.size,3);t.uniform3fv(this.addr,n)}function N1(t,e){const n=qs(e,this.size,4);t.uniform4fv(this.addr,n)}function F1(t,e){const n=qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function O1(t,e){const n=qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function k1(t,e){const n=qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function z1(t,e){t.uniform1iv(this.addr,e)}function B1(t,e){t.uniform2iv(this.addr,e)}function H1(t,e){t.uniform3iv(this.addr,e)}function V1(t,e){t.uniform4iv(this.addr,e)}function G1(t,e){t.uniform1uiv(this.addr,e)}function W1(t,e){t.uniform2uiv(this.addr,e)}function X1(t,e){t.uniform3uiv(this.addr,e)}function j1(t,e){t.uniform4uiv(this.addr,e)}function Y1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||m_,s[o])}function $1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||__,s[o])}function q1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||v_,s[o])}function K1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||g_,s[o])}function Z1(t){switch(t){case 5126:return D1;case 35664:return I1;case 35665:return U1;case 35666:return N1;case 35674:return F1;case 35675:return O1;case 35676:return k1;case 5124:case 35670:return z1;case 35667:case 35671:return B1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return X1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return K1}}class Q1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=L1(n.type)}}class J1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Z1(n.type)}}class ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function rm(t,e){t.seq.push(e),t.map[e.id]=e}function tw(t,e,n){const i=t.name,r=i.length;for(gu.lastIndex=0;;){const s=gu.exec(i),o=gu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rm(n,c===void 0?new Q1(a,t,e):new J1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ew(a),rm(n,f)),n=f}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);tw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nw=37297;let iw=0;function rw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function sw(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Vl&&n===Hl?i="LinearDisplayP3ToLinearSRGB":e===Hl&&n===Vl&&(i="LinearSRGBToLinearDisplayP3"),t){case ar:case fc:return[i,"LinearTransferOETF"];case Jn:case ih:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rw(t.getShaderSource(e),o)}else return r}function ow(t,e){const n=sw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function aw(t,e){let n;switch(e){case Ty:n="Linear";break;case Ay:n="Reinhard";break;case Cy:n="Cineon";break;case Ry:n="ACESFilmic";break;case Py:n="AgX";break;case Ly:n="Neutral";break;case by:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const za=new W;function lw(){it.getLuminanceCoefficients(za);const t=za.x.toFixed(4),e=za.y.toFixed(4),n=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function uw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function dw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function vo(t){return t!==""}function am(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(t){return t.replace(fw,pw)}const hw=new Map;function pw(t,e){let n=$e[e];if(n===void 0){const i=hw.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kd(n)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(t){return t.replace(mw,gw)}function gw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function um(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _w(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===V0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===G0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function vw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function yw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case uc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ey:e="ENVMAP_BLENDING_MIX";break;case wy:e="ENVMAP_BLENDING_ADD";break}return e}function Sw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Mw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_w(n),c=vw(n),h=xw(n),f=yw(n),d=Sw(n),p=cw(n),y=uw(s),v=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(vo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(vo).join(`
`),u.length>0&&(u+=`
`)):(m=[um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),u=[um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?$e.tonemapping_pars_fragment:"",n.toneMapping!==Qi?aw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,ow("linearToOutputTexel",n.outputColorSpace),lw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vo).join(`
`)),o=Kd(o),o=am(o,n),o=lm(o,n),a=Kd(a),a=am(a,n),a=lm(a,n),o=cm(o),a=cm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+o,x=g+u+a,N=sm(r,r.VERTEX_SHADER,_),R=sm(r,r.FRAGMENT_SHADER,x);r.attachShader(v,N),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(P){if(t.debug.checkShaderErrors){const C=r.getProgramInfoLog(v).trim(),z=r.getShaderInfoLog(N).trim(),$=r.getShaderInfoLog(R).trim();let G=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,N,R);else{const j=om(r,N,"vertex"),I=om(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+j+`
`+I)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(z===""||$==="")&&(X=!1);X&&(P.diagnostics={runnable:G,programLog:C,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:u}})}r.deleteShader(N),r.deleteShader(R),D=new pl(r,v),E=dw(r,v)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,nw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=R,this}let Ew=0;class ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Tw(e),n.set(e,i)),i}}class Tw{constructor(e){this.id=Ew++,this.code=e,this.usedTimes=0}}function Aw(t,e,n,i,r,s,o){const a=new sh,l=new ww,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,P,C,z){const $=C.fog,G=z.geometry,X=E.isMeshStandardMaterial?C.environment:null,j=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),I=j&&j.mapping===dc?j.image.height:null,H=y[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const K=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=K!==void 0?K.length:0;let he=0;G.morphAttributes.position!==void 0&&(he=1),G.morphAttributes.normal!==void 0&&(he=2),G.morphAttributes.color!==void 0&&(he=3);let Fe,q,ie,ge;if(H){const Ye=ei[H];Fe=Ye.vertexShader,q=Ye.fragmentShader}else Fe=E.vertexShader,q=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const me=t.getRenderTarget(),Ie=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,Ve=!!E.map,ae=!!E.matcap,U=!!j,He=!!E.aoMap,ce=!!E.lightMap,pe=!!E.bumpMap,le=!!E.normalMap,be=!!E.displacementMap,Ae=!!E.emissiveMap,Se=!!E.metalnessMap,L=!!E.roughnessMap,M=E.anisotropy>0,Y=E.clearcoat>0,ee=E.dispersion>0,ne=E.iridescence>0,re=E.sheen>0,Pe=E.transmission>0,_e=M&&!!E.anisotropyMap,ye=Y&&!!E.clearcoatMap,Ge=Y&&!!E.clearcoatNormalMap,ue=Y&&!!E.clearcoatRoughnessMap,Ee=ne&&!!E.iridescenceMap,Qe=ne&&!!E.iridescenceThicknessMap,ke=re&&!!E.sheenColorMap,Te=re&&!!E.sheenRoughnessMap,Le=!!E.specularMap,je=!!E.specularColorMap,at=!!E.specularIntensityMap,k=Pe&&!!E.transmissionMap,de=Pe&&!!E.thicknessMap,O=!!E.gradientMap,T=!!E.alphaMap,b=E.alphaTest>0,J=!!E.alphaHash,se=!!E.extensions;let Ue=Qi;E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const dt={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:Fe,fragmentShader:q,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ar,alphaToCoverage:!!E.alphaToCoverage,map:Ve,matcap:ae,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:I,aoMap:He,lightMap:ce,bumpMap:pe,normalMap:le,displacementMap:d&&be,emissiveMap:Ae,normalMapObjectSpace:le&&E.normalMapType===Ny,normalMapTangentSpace:le&&E.normalMapType===nh,metalnessMap:Se,roughnessMap:L,anisotropy:M,anisotropyMap:_e,clearcoat:Y,clearcoatMap:ye,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ue,dispersion:ee,iridescence:ne,iridescenceMap:Ee,iridescenceThicknessMap:Qe,sheen:re,sheenColorMap:ke,sheenRoughnessMap:Te,specularMap:Le,specularColorMap:je,specularIntensityMap:at,transmission:Pe,transmissionMap:k,thicknessMap:de,gradientMap:O,opaque:E.transparent===!1&&E.blending===bs&&E.alphaToCoverage===!1,alphaMap:T,alphaTest:b,alphaHash:J,combine:E.combine,mapUv:Ve&&v(E.map.channel),aoMapUv:He&&v(E.aoMap.channel),lightMapUv:ce&&v(E.lightMap.channel),bumpMapUv:pe&&v(E.bumpMap.channel),normalMapUv:le&&v(E.normalMap.channel),displacementMapUv:be&&v(E.displacementMap.channel),emissiveMapUv:Ae&&v(E.emissiveMap.channel),metalnessMapUv:Se&&v(E.metalnessMap.channel),roughnessMapUv:L&&v(E.roughnessMap.channel),anisotropyMapUv:_e&&v(E.anisotropyMap.channel),clearcoatMapUv:ye&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(E.sheenRoughnessMap.channel),specularMapUv:Le&&v(E.specularMap.channel),specularColorMapUv:je&&v(E.specularColorMap.channel),specularIntensityMapUv:at&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:de&&v(E.thicknessMap.channel),alphaMapUv:T&&v(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(le||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Ve||T),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ve&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hn,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:se&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(g(S,E),_(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function g(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function x(E){const S=y[E.type];let P;if(S){const C=ei[S];P=cS.clone(C.uniforms)}else P=E.uniforms;return P}function N(E,S){let P;for(let C=0,z=h.length;C<z;C++){const $=h[C];if($.cacheKey===S){P=$,++P.usedTimes;break}}return P===void 0&&(P=new Mw(t,S,E,s),h.push(P)),P}function R(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:N,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:D}}function Cw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Rw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,y,v,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:y,renderOrder:f.renderOrder,z:v,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function a(f,d,p,y,v,m){const u=o(f,d,p,y,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,d,p,y,v,m){const u=o(f,d,p,y,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||Rw),i.length>1&&i.sort(d||dm),r.length>1&&r.sort(d||dm)}function h(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function bw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new fm,t.set(i,[o])):r>=s.length?(o=new fm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new We};break;case"SpotLight":n={position:new W,direction:new W,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function Lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Dw=0;function Iw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Uw(t){const e=new Pw,n=Lw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new pt,o=new pt;function a(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,y=0,v=0,m=0,u=0,g=0,_=0,x=0,N=0,R=0,w=0;c.sort(Iw);for(let E=0,S=c.length;E<S;E++){const P=c[E],C=P.color,z=P.intensity,$=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*z,f+=C.g*z,d+=C.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],z);w++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,I=n.get(P);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(C).multiplyScalar(z),X.distance=$,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;const j=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,j.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=j.matrix,P.castShadow){const I=n.get(P);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.spotShadow[v]=I,i.spotShadowMap[v]=G,x++}v++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(C).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const j=P.shadow,I=n.get(P);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,i.pointShadow[y]=I,i.pointShadowMap[y]=G,i.pointShadowMatrix[y]=P.shadow.matrix,_++}i.point[y]=X,y++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==y||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==_||D.numSpotShadows!==x||D.numSpotMaps!==N||D.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,D.directionalLength=p,D.pointLength=y,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=_,D.numSpotShadows=x,D.numSpotMaps=N,D.numLightProbes=w,i.version=Dw++)}function l(c,h){let f=0,d=0,p=0,y=0,v=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[y];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function hm(t){const e=new Uw(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Nw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hm(t),e.set(r,[a])):s>=o.length?(a=new hm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Fw extends lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bw(t,e,n){let i=new oh;const r=new Xe,s=new Xe,o=new At,a=new Fw({depthPacking:Uy}),l=new Ow,c={},h=n.maxTextureSize,f={[nr]:ln,[ln]:nr,[Hn]:Hn},d=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:kw,fragmentShader:zw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const y=new _n;y.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nn(y,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=V0;let u=this.type;this.render=function(R,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),C=t.state;C.setBlending(Zi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const z=u!==ui&&this.type===ui,$=u===ui&&this.type!==ui;for(let G=0,X=R.length;G<X;G++){const j=R[G],I=j.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const H=I.getFrameExtents();if(r.multiply(H),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/H.x),r.x=s.x*H.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/H.y),r.y=s.y*H.y,I.mapSize.y=s.y)),I.map===null||z===!0||$===!0){const te=this.type!==ui?{minFilter:Cn,magFilter:Cn}:{};I.map!==null&&I.map.dispose(),I.map=new Ur(r.x,r.y,te),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const K=I.getViewportCount();for(let te=0;te<K;te++){const he=I.getViewport(te);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),C.viewport(o),I.updateMatrices(j,te),i=I.getFrustum(),x(w,D,I.camera,j,this.type)}I.isPointLightShadow!==!0&&this.type===ui&&g(I,D),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,P)};function g(R,w){const D=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ur(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,D,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,D,p,v,null)}function _(R,w,D,E){let S=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const C=S.uuid,z=w.uuid;let $=c[C];$===void 0&&($={},c[C]=$);let G=$[z];G===void 0&&(G=S.clone(),$[z]=G,w.addEventListener("dispose",N)),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,E===ui?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const C=t.properties.get(S);C.light=D}return S}function x(R,w,D,E,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ui)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const z=e.update(R),$=R.material;if(Array.isArray($)){const G=z.groups;for(let X=0,j=G.length;X<j;X++){const I=G[X],H=$[I.materialIndex];if(H&&H.visible){const K=_(R,H,E,S);R.onBeforeShadow(t,R,w,D,z,K,I),t.renderBufferDirect(D,null,z,K,R,I),R.onAfterShadow(t,R,w,D,z,K,I)}}}else if($.visible){const G=_(R,$,E,S);R.onBeforeShadow(t,R,w,D,z,G,null),t.renderBufferDirect(D,null,z,G,R,null),R.onAfterShadow(t,R,w,D,z,G,null)}}const C=R.children;for(let z=0,$=C.length;z<$;z++)x(C[z],w,D,E,S)}function N(R){R.target.removeEventListener("dispose",N);for(const D in c){const E=c[D],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function Hw(t){function e(){let k=!1;const de=new At;let O=null;const T=new At(0,0,0,0);return{setMask:function(b){O!==b&&!k&&(t.colorMask(b,b,b,b),O=b)},setLocked:function(b){k=b},setClear:function(b,J,se,Ue,dt){dt===!0&&(b*=Ue,J*=Ue,se*=Ue),de.set(b,J,se,Ue),T.equals(de)===!1&&(t.clearColor(b,J,se,Ue),T.copy(de))},reset:function(){k=!1,O=null,T.set(-1,0,0,0)}}}function n(){let k=!1,de=null,O=null,T=null;return{setTest:function(b){b?ge(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(b){de!==b&&!k&&(t.depthMask(b),de=b)},setFunc:function(b){if(O!==b){switch(b){case gy:t.depthFunc(t.NEVER);break;case _y:t.depthFunc(t.ALWAYS);break;case vy:t.depthFunc(t.LESS);break;case zl:t.depthFunc(t.LEQUAL);break;case xy:t.depthFunc(t.EQUAL);break;case yy:t.depthFunc(t.GEQUAL);break;case Sy:t.depthFunc(t.GREATER);break;case My:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}O=b}},setLocked:function(b){k=b},setClear:function(b){T!==b&&(t.clearDepth(b),T=b)},reset:function(){k=!1,de=null,O=null,T=null}}}function i(){let k=!1,de=null,O=null,T=null,b=null,J=null,se=null,Ue=null,dt=null;return{setTest:function(Ye){k||(Ye?ge(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(Ye){de!==Ye&&!k&&(t.stencilMask(Ye),de=Ye)},setFunc:function(Ye,kt,Ke){(O!==Ye||T!==kt||b!==Ke)&&(t.stencilFunc(Ye,kt,Ke),O=Ye,T=kt,b=Ke)},setOp:function(Ye,kt,Ke){(J!==Ye||se!==kt||Ue!==Ke)&&(t.stencilOp(Ye,kt,Ke),J=Ye,se=kt,Ue=Ke)},setLocked:function(Ye){k=Ye},setClear:function(Ye){dt!==Ye&&(t.clearStencil(Ye),dt=Ye)},reset:function(){k=!1,de=null,O=null,T=null,b=null,J=null,se=null,Ue=null,dt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,d=[],p=null,y=!1,v=null,m=null,u=null,g=null,_=null,x=null,N=null,R=new We(0,0,0),w=0,D=!1,E=null,S=null,P=null,C=null,z=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=X>=2);let I=null,H={};const K=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),he=new At().fromArray(K),Fe=new At().fromArray(te);function q(k,de,O,T){const b=new Uint8Array(4),J=t.createTexture();t.bindTexture(k,J),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let se=0;se<O;se++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,T,0,t.RGBA,t.UNSIGNED_BYTE,b):t.texImage2D(de+se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,b);return J}const ie={};ie[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(t.DEPTH_TEST),s.setFunc(zl),pe(!1),le(yp),ge(t.CULL_FACE),He(Zi);function ge(k){c[k]!==!0&&(t.enable(k),c[k]=!0)}function me(k){c[k]!==!1&&(t.disable(k),c[k]=!1)}function Ie(k,de){return h[k]!==de?(t.bindFramebuffer(k,de),h[k]=de,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Oe(k,de){let O=d,T=!1;if(k){O=f.get(de),O===void 0&&(O=[],f.set(de,O));const b=k.textures;if(O.length!==b.length||O[0]!==t.COLOR_ATTACHMENT0){for(let J=0,se=b.length;J<se;J++)O[J]=t.COLOR_ATTACHMENT0+J;O.length=b.length,T=!0}}else O[0]!==t.BACK&&(O[0]=t.BACK,T=!0);T&&t.drawBuffers(O)}function Ve(k){return p!==k?(t.useProgram(k),p=k,!0):!1}const ae={[xr]:t.FUNC_ADD,[Jx]:t.FUNC_SUBTRACT,[ey]:t.FUNC_REVERSE_SUBTRACT};ae[ty]=t.MIN,ae[ny]=t.MAX;const U={[iy]:t.ZERO,[ry]:t.ONE,[sy]:t.SRC_COLOR,[gd]:t.SRC_ALPHA,[dy]:t.SRC_ALPHA_SATURATE,[cy]:t.DST_COLOR,[ay]:t.DST_ALPHA,[oy]:t.ONE_MINUS_SRC_COLOR,[_d]:t.ONE_MINUS_SRC_ALPHA,[uy]:t.ONE_MINUS_DST_COLOR,[ly]:t.ONE_MINUS_DST_ALPHA,[fy]:t.CONSTANT_COLOR,[hy]:t.ONE_MINUS_CONSTANT_COLOR,[py]:t.CONSTANT_ALPHA,[my]:t.ONE_MINUS_CONSTANT_ALPHA};function He(k,de,O,T,b,J,se,Ue,dt,Ye){if(k===Zi){y===!0&&(me(t.BLEND),y=!1);return}if(y===!1&&(ge(t.BLEND),y=!0),k!==Qx){if(k!==v||Ye!==D){if((m!==xr||_!==xr)&&(t.blendEquation(t.FUNC_ADD),m=xr,_=xr),Ye)switch(k){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.ONE,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}u=null,g=null,x=null,N=null,R.set(0,0,0),w=0,v=k,D=Ye}return}b=b||de,J=J||O,se=se||T,(de!==m||b!==_)&&(t.blendEquationSeparate(ae[de],ae[b]),m=de,_=b),(O!==u||T!==g||J!==x||se!==N)&&(t.blendFuncSeparate(U[O],U[T],U[J],U[se]),u=O,g=T,x=J,N=se),(Ue.equals(R)===!1||dt!==w)&&(t.blendColor(Ue.r,Ue.g,Ue.b,dt),R.copy(Ue),w=dt),v=k,D=!1}function ce(k,de){k.side===Hn?me(t.CULL_FACE):ge(t.CULL_FACE);let O=k.side===ln;de&&(O=!O),pe(O),k.blending===bs&&k.transparent===!1?He(Zi):He(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const T=k.stencilWrite;o.setTest(T),T&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ae(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function pe(k){E!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),E=k)}function le(k){k!==Kx?(ge(t.CULL_FACE),k!==S&&(k===yp?t.cullFace(t.BACK):k===Zx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),S=k}function be(k){k!==P&&(G&&t.lineWidth(k),P=k)}function Ae(k,de,O){k?(ge(t.POLYGON_OFFSET_FILL),(C!==de||z!==O)&&(t.polygonOffset(de,O),C=de,z=O)):me(t.POLYGON_OFFSET_FILL)}function Se(k){k?ge(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function L(k){k===void 0&&(k=t.TEXTURE0+$-1),I!==k&&(t.activeTexture(k),I=k)}function M(k,de,O){O===void 0&&(I===null?O=t.TEXTURE0+$-1:O=I);let T=H[O];T===void 0&&(T={type:void 0,texture:void 0},H[O]=T),(T.type!==k||T.texture!==de)&&(I!==O&&(t.activeTexture(O),I=O),t.bindTexture(k,de||ie[k]),T.type=k,T.texture=de)}function Y(){const k=H[I];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(k){he.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),he.copy(k))}function Te(k){Fe.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Fe.copy(k))}function Le(k,de){let O=l.get(de);O===void 0&&(O=new WeakMap,l.set(de,O));let T=O.get(k);T===void 0&&(T=t.getUniformBlockIndex(de,k.name),O.set(k,T))}function je(k,de){const T=l.get(de).get(k);a.get(de)!==T&&(t.uniformBlockBinding(de,T,k.__bindingPointIndex),a.set(de,T))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,H={},h={},f=new WeakMap,d=[],p=null,y=!1,v=null,m=null,u=null,g=null,_=null,x=null,N=null,R=new We(0,0,0),w=0,D=!1,E=null,S=null,P=null,C=null,z=null,he.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:me,bindFramebuffer:Ie,drawBuffers:Oe,useProgram:Ve,setBlending:He,setMaterial:ce,setFlipSided:pe,setCullFace:le,setLineWidth:be,setPolygonOffset:Ae,setScissorTest:Se,activeTexture:L,bindTexture:M,unbindTexture:Y,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:Ee,texImage3D:Qe,updateUBOMapping:Le,uniformBlockBinding:je,texStorage2D:Ge,texStorage3D:ue,texSubImage2D:re,texSubImage3D:Pe,compressedTexSubImage2D:_e,compressedTexSubImage3D:ye,scissor:ke,viewport:Te,reset:at}}function pm(t,e,n,i){const r=Vw(i);switch(n){case $0:return t*e;case K0:return t*e;case Z0:return t*e*2;case Q0:return t*e/r.components*r.byteLength;case Jf:return t*e/r.components*r.byteLength;case J0:return t*e*2/r.components*r.byteLength;case eh:return t*e*2/r.components*r.byteLength;case q0:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case th:return t*e*4/r.components*r.byteLength;case ll:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ul:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:case Td:return Math.max(t,16)*Math.max(e,8)/4;case Md:case wd:return Math.max(t,8)*Math.max(e,8)/2;case Ad:case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fl:case Gd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case e_:case Xd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jd:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Vw(t){switch(t){case Mi:case X0:return{byteLength:1,components:1};case jo:case j0:case Qo:return{byteLength:2,components:1};case Zf:case Qf:return{byteLength:2,components:4};case Ir:case Kf:case mi:return{byteLength:4,components:1};case Y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Gw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,M){return p?new OffscreenCanvas(L,M):Wl("canvas")}function v(L,M,Y){let ee=1;const ne=Se(L);if((ne.width>Y||ne.height>Y)&&(ee=Y/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(ee*ne.width),Pe=Math.floor(ee*ne.height);f===void 0&&(f=y(re,Pe));const _e=M?y(re,Pe):f;return _e.width=re,_e.height=Pe,_e.getContext("2d").drawImage(L,0,0,re,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+Pe+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Cn&&L.minFilter!==Vn}function u(L){t.generateMipmap(L)}function g(L,M,Y,ee,ne=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=M;if(M===t.RED&&(Y===t.FLOAT&&(re=t.R32F),Y===t.HALF_FLOAT&&(re=t.R16F),Y===t.UNSIGNED_BYTE&&(re=t.R8)),M===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(re=t.R8UI),Y===t.UNSIGNED_SHORT&&(re=t.R16UI),Y===t.UNSIGNED_INT&&(re=t.R32UI),Y===t.BYTE&&(re=t.R8I),Y===t.SHORT&&(re=t.R16I),Y===t.INT&&(re=t.R32I)),M===t.RG&&(Y===t.FLOAT&&(re=t.RG32F),Y===t.HALF_FLOAT&&(re=t.RG16F),Y===t.UNSIGNED_BYTE&&(re=t.RG8)),M===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(re=t.RG8UI),Y===t.UNSIGNED_SHORT&&(re=t.RG16UI),Y===t.UNSIGNED_INT&&(re=t.RG32UI),Y===t.BYTE&&(re=t.RG8I),Y===t.SHORT&&(re=t.RG16I),Y===t.INT&&(re=t.RG32I)),M===t.RGB&&Y===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),M===t.RGBA){const Pe=ne?Bl:it.getTransfer(ee);Y===t.FLOAT&&(re=t.RGBA32F),Y===t.HALF_FLOAT&&(re=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(re=Pe===ct?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(L,M){let Y;return L?M===null||M===Ir||M===Vs?Y=t.DEPTH24_STENCIL8:M===mi?Y=t.DEPTH32F_STENCIL8:M===jo&&(Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ir||M===Vs?Y=t.DEPTH_COMPONENT24:M===mi?Y=t.DEPTH_COMPONENT32F:M===jo&&(Y=t.DEPTH_COMPONENT16),Y}function x(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function N(L){const M=L.target;M.removeEventListener("dispose",N),w(M),M.isVideoTexture&&h.delete(M)}function R(L){const M=L.target;M.removeEventListener("dispose",R),E(M)}function w(L){const M=i.get(L);if(M.__webglInit===void 0)return;const Y=L.source,ee=d.get(Y);if(ee){const ne=ee[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(L),Object.keys(ee).length===0&&d.delete(Y)}i.remove(L)}function D(L){const M=i.get(L);t.deleteTexture(M.__webglTexture);const Y=L.source,ee=d.get(Y);delete ee[M.__cacheKey],o.memory.textures--}function E(L){const M=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ne=0;ne<M.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=L.textures;for(let ee=0,ne=Y.length;ee<ne;ee++){const re=i.get(Y[ee]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(Y[ee])}i.remove(L)}let S=0;function P(){S=0}function C(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function z(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function $(L,M){const Y=i.get(L);if(L.isVideoTexture&&be(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(Y,L,M);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+M)}function G(L,M){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){Fe(Y,L,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+M)}function X(L,M){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){Fe(Y,L,M);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+M)}function j(L,M){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){q(Y,L,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+M)}const I={[yd]:t.REPEAT,[wr]:t.CLAMP_TO_EDGE,[Sd]:t.MIRRORED_REPEAT},H={[Cn]:t.NEAREST,[Dy]:t.NEAREST_MIPMAP_NEAREST,[va]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[Xc]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},K={[Fy]:t.NEVER,[Vy]:t.ALWAYS,[Oy]:t.LESS,[t_]:t.LEQUAL,[ky]:t.EQUAL,[Hy]:t.GEQUAL,[zy]:t.GREATER,[By]:t.NOTEQUAL};function te(L,M){if(M.type===mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Xc||M.magFilter===va||M.magFilter===Tr||M.minFilter===Vn||M.minFilter===Xc||M.minFilter===va||M.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,I[M.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,H[M.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==va&&M.minFilter!==Tr||M.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function he(L,M){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",N));const ee=M.source;let ne=d.get(ee);ne===void 0&&(ne={},d.set(ee,ne));const re=z(M);if(re!==L.__cacheKey){ne[re]===void 0&&(ne[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[re].usedTimes++;const Pe=ne[L.__cacheKey];Pe!==void 0&&(ne[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&D(M)),L.__cacheKey=re,L.__webglTexture=ne[re].texture}return Y}function Fe(L,M,Y){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=he(L,M),re=M.source;n.bindTexture(ee,L.__webglTexture,t.TEXTURE0+Y);const Pe=i.get(re);if(re.version!==Pe.__version||ne===!0){n.activeTexture(t.TEXTURE0+Y);const _e=it.getPrimaries(it.workingColorSpace),ye=M.colorSpace===zi?null:it.getPrimaries(M.colorSpace),Ge=M.colorSpace===zi||_e===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ue=v(M.image,!1,r.maxTextureSize);ue=Ae(M,ue);const Ee=s.convert(M.format,M.colorSpace),Qe=s.convert(M.type);let ke=g(M.internalFormat,Ee,Qe,M.colorSpace,M.isVideoTexture);te(ee,M);let Te;const Le=M.mipmaps,je=M.isVideoTexture!==!0,at=Pe.__version===void 0||ne===!0,k=re.dataReady,de=x(M,ue);if(M.isDepthTexture)ke=_(M.format===Gs,M.type),at&&(je?n.texStorage2D(t.TEXTURE_2D,1,ke,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,ke,ue.width,ue.height,0,Ee,Qe,null));else if(M.isDataTexture)if(Le.length>0){je&&at&&n.texStorage2D(t.TEXTURE_2D,de,ke,Le[0].width,Le[0].height);for(let O=0,T=Le.length;O<T;O++)Te=Le[O],je?k&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,Te.width,Te.height,Ee,Qe,Te.data):n.texImage2D(t.TEXTURE_2D,O,ke,Te.width,Te.height,0,Ee,Qe,Te.data);M.generateMipmaps=!1}else je?(at&&n.texStorage2D(t.TEXTURE_2D,de,ke,ue.width,ue.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Ee,Qe,ue.data)):n.texImage2D(t.TEXTURE_2D,0,ke,ue.width,ue.height,0,Ee,Qe,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ke,Le[0].width,Le[0].height,ue.depth);for(let O=0,T=Le.length;O<T;O++)if(Te=Le[O],M.format!==Gn)if(Ee!==null)if(je){if(k)if(M.layerUpdates.size>0){const b=pm(Te.width,Te.height,M.format,M.type);for(const J of M.layerUpdates){const se=Te.data.subarray(J*b/Te.data.BYTES_PER_ELEMENT,(J+1)*b/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,J,Te.width,Te.height,1,Ee,se,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,Te.width,Te.height,ue.depth,Ee,Te.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,O,ke,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,Te.width,Te.height,ue.depth,Ee,Qe,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,O,ke,Te.width,Te.height,ue.depth,0,Ee,Qe,Te.data)}else{je&&at&&n.texStorage2D(t.TEXTURE_2D,de,ke,Le[0].width,Le[0].height);for(let O=0,T=Le.length;O<T;O++)Te=Le[O],M.format!==Gn?Ee!==null?je?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,O,0,0,Te.width,Te.height,Ee,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,O,ke,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?k&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,Te.width,Te.height,Ee,Qe,Te.data):n.texImage2D(t.TEXTURE_2D,O,ke,Te.width,Te.height,0,Ee,Qe,Te.data)}else if(M.isDataArrayTexture)if(je){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ke,ue.width,ue.height,ue.depth),k)if(M.layerUpdates.size>0){const O=pm(ue.width,ue.height,M.format,M.type);for(const T of M.layerUpdates){const b=ue.data.subarray(T*O/ue.data.BYTES_PER_ELEMENT,(T+1)*O/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,T,ue.width,ue.height,1,Ee,Qe,b)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Qe,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,ue.width,ue.height,ue.depth,0,Ee,Qe,ue.data);else if(M.isData3DTexture)je?(at&&n.texStorage3D(t.TEXTURE_3D,de,ke,ue.width,ue.height,ue.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Qe,ue.data)):n.texImage3D(t.TEXTURE_3D,0,ke,ue.width,ue.height,ue.depth,0,Ee,Qe,ue.data);else if(M.isFramebufferTexture){if(at)if(je)n.texStorage2D(t.TEXTURE_2D,de,ke,ue.width,ue.height);else{let O=ue.width,T=ue.height;for(let b=0;b<de;b++)n.texImage2D(t.TEXTURE_2D,b,ke,O,T,0,Ee,Qe,null),O>>=1,T>>=1}}else if(Le.length>0){if(je&&at){const O=Se(Le[0]);n.texStorage2D(t.TEXTURE_2D,de,ke,O.width,O.height)}for(let O=0,T=Le.length;O<T;O++)Te=Le[O],je?k&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,Ee,Qe,Te):n.texImage2D(t.TEXTURE_2D,O,ke,Ee,Qe,Te);M.generateMipmaps=!1}else if(je){if(at){const O=Se(ue);n.texStorage2D(t.TEXTURE_2D,de,ke,O.width,O.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Qe,ue)}else n.texImage2D(t.TEXTURE_2D,0,ke,Ee,Qe,ue);m(M)&&u(ee),Pe.__version=re.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function q(L,M,Y){if(M.image.length!==6)return;const ee=he(L,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+Y);const re=i.get(ne);if(ne.version!==re.__version||ee===!0){n.activeTexture(t.TEXTURE0+Y);const Pe=it.getPrimaries(it.workingColorSpace),_e=M.colorSpace===zi?null:it.getPrimaries(M.colorSpace),ye=M.colorSpace===zi||Pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ge=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let T=0;T<6;T++)!Ge&&!ue?Ee[T]=v(M.image[T],!0,r.maxCubemapSize):Ee[T]=ue?M.image[T].image:M.image[T],Ee[T]=Ae(M,Ee[T]);const Qe=Ee[0],ke=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),Le=g(M.internalFormat,ke,Te,M.colorSpace),je=M.isVideoTexture!==!0,at=re.__version===void 0||ee===!0,k=ne.dataReady;let de=x(M,Qe);te(t.TEXTURE_CUBE_MAP,M);let O;if(Ge){je&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Le,Qe.width,Qe.height);for(let T=0;T<6;T++){O=Ee[T].mipmaps;for(let b=0;b<O.length;b++){const J=O[b];M.format!==Gn?ke!==null?je?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,b,0,0,J.width,J.height,ke,J.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,b,Le,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,b,0,0,J.width,J.height,ke,Te,J.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,b,Le,J.width,J.height,0,ke,Te,J.data)}}}else{if(O=M.mipmaps,je&&at){O.length>0&&de++;const T=Se(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Le,T.width,T.height)}for(let T=0;T<6;T++)if(ue){je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Ee[T].width,Ee[T].height,ke,Te,Ee[T].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,Le,Ee[T].width,Ee[T].height,0,ke,Te,Ee[T].data);for(let b=0;b<O.length;b++){const se=O[b].image[T].image;je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,b+1,0,0,se.width,se.height,ke,Te,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,b+1,Le,se.width,se.height,0,ke,Te,se.data)}}else{je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,ke,Te,Ee[T]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,Le,ke,Te,Ee[T]);for(let b=0;b<O.length;b++){const J=O[b];je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,b+1,0,0,ke,Te,J.image[T]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,b+1,Le,ke,Te,J.image[T])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),re.__version=ne.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ie(L,M,Y,ee,ne,re){const Pe=s.convert(Y.format,Y.colorSpace),_e=s.convert(Y.type),ye=g(Y.internalFormat,Pe,_e,Y.colorSpace);if(!i.get(M).__hasExternalTextures){const ue=Math.max(1,M.width>>re),Ee=Math.max(1,M.height>>re);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,re,ye,ue,Ee,M.depth,0,Pe,_e,null):n.texImage2D(ne,re,ye,ue,Ee,0,Pe,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),le(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,i.get(Y).__webglTexture,0,pe(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,i.get(Y).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(L,M,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,L),M.depthBuffer){const ee=M.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,re=_(M.stencilBuffer,ne),Pe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=pe(M);le(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,re,M.width,M.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,L)}else{const ee=M.textures;for(let ne=0;ne<ee.length;ne++){const re=ee[ne],Pe=s.convert(re.format,re.colorSpace),_e=s.convert(re.type),ye=g(re.internalFormat,Pe,_e,re.colorSpace),Ge=pe(M);Y&&le(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,ye,M.width,M.height):le(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge,ye,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ye,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,ne=pe(M);if(M.depthTexture.format===Ps)le(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Gs)le(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const M=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const ee=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=ee}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,L)}else if(Y){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),ge(M.__webglDepthbuffer[ee],L,!1);else{const ne=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ge(M.__webglDepthbuffer,L,!1);else{const ee=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(L,M,Y){const ee=i.get(L);M!==void 0&&ie(ee.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&Ie(L)}function Ve(L){const M=L.texture,Y=i.get(L),ee=i.get(M);L.addEventListener("dispose",R);const ne=L.textures,re=L.isWebGLCubeRenderTarget===!0,Pe=ne.length>1;if(Pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),re){Y.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[_e]=[];for(let ye=0;ye<M.mipmaps.length;ye++)Y.__webglFramebuffer[_e][ye]=t.createFramebuffer()}else Y.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)Y.__webglFramebuffer[_e]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let _e=0,ye=ne.length;_e<ye;_e++){const Ge=i.get(ne[_e]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&le(L)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let _e=0;_e<ne.length;_e++){const ye=ne[_e];Y.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[_e]);const Ge=s.convert(ye.format,ye.colorSpace),ue=s.convert(ye.type),Ee=g(ye.internalFormat,Ge,ue,ye.colorSpace,L.isXRRenderTarget===!0),Qe=pe(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,Ee,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Y.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(Y.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),te(t.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)ie(Y.__webglFramebuffer[_e][ye],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else ie(Y.__webglFramebuffer[_e],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let _e=0,ye=ne.length;_e<ye;_e++){const Ge=ne[_e],ue=i.get(Ge);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),te(t.TEXTURE_2D,Ge),ie(Y.__webglFramebuffer,L,Ge,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),m(Ge)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,ee.__webglTexture),te(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)ie(Y.__webglFramebuffer[ye],L,M,t.COLOR_ATTACHMENT0,_e,ye);else ie(Y.__webglFramebuffer,L,M,t.COLOR_ATTACHMENT0,_e,0);m(M)&&u(_e),n.unbindTexture()}L.depthBuffer&&Ie(L)}function ae(L){const M=L.textures;for(let Y=0,ee=M.length;Y<ee;Y++){const ne=M[Y];if(m(ne)){const re=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Pe=i.get(ne).__webglTexture;n.bindTexture(re,Pe),u(re),n.unbindTexture()}}}const U=[],He=[];function ce(L){if(L.samples>0){if(le(L)===!1){const M=L.textures,Y=L.width,ee=L.height;let ne=t.COLOR_BUFFER_BIT;const re=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(L),_e=M.length>1;if(_e)for(let ye=0;ye<M.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const Ge=i.get(M[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ge,0)}t.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,ne,t.NEAREST),l===!0&&(U.length=0,He.length=0,U.push(t.COLOR_ATTACHMENT0+ye),L.depthBuffer&&L.resolveDepthBuffer===!1&&(U.push(re),He.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,U))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let ye=0;ye<M.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const Ge=i.get(M[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const M=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function pe(L){return Math.min(r.maxSamples,L.samples)}function le(L){const M=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(L){const M=o.render.frame;h.get(L)!==M&&(h.set(L,M),L.update())}function Ae(L,M){const Y=L.colorSpace,ee=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==ar&&Y!==zi&&(it.getTransfer(Y)===ct?(ee!==Gn||ne!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function Se(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Oe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=le}function Ww(t,e){function n(i,r=zi){let s;const o=it.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===Zf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Y0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===X0)return t.BYTE;if(i===j0)return t.SHORT;if(i===jo)return t.UNSIGNED_SHORT;if(i===Kf)return t.INT;if(i===Ir)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Qo)return t.HALF_FLOAT;if(i===$0)return t.ALPHA;if(i===q0)return t.RGB;if(i===Gn)return t.RGBA;if(i===K0)return t.LUMINANCE;if(i===Z0)return t.LUMINANCE_ALPHA;if(i===Ps)return t.DEPTH_COMPONENT;if(i===Gs)return t.DEPTH_STENCIL;if(i===Q0)return t.RED;if(i===Jf)return t.RED_INTEGER;if(i===J0)return t.RG;if(i===eh)return t.RG_INTEGER;if(i===th)return t.RGBA_INTEGER;if(i===ll||i===cl||i===ul||i===dl)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Md||i===Ed||i===wd||i===Td)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ad||i===Cd||i===Rd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ad||i===Cd)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bd||i===Pd||i===Ld||i===Dd||i===Id||i===Ud||i===Nd||i===Fd||i===Od||i===kd||i===zd||i===Bd||i===Hd||i===Vd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ld)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Id)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ud)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vd)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fl||i===Gd||i===Wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fl)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===e_||i===Xd||i===jd||i===Yd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Xw extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ba extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jw={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,y=.005;c.inputState.pinching&&d>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$w=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ir({vertexShader:Yw,fragmentShader:$w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new nn(new Vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kw extends $s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,y=null;const v=new qw,m=n.getContextAttributes();let u=null,g=null;const _=[],x=[],N=new Xe;let R=null;const w=new wn;w.layers.enable(1),w.viewport=new At;const D=new wn;D.layers.enable(2),D.viewport=new At;const E=[w,D],S=new Xw;S.layers.enable(1),S.layers.enable(2);let P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=_[q];return ie===void 0&&(ie=new _u,_[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=_[q];return ie===void 0&&(ie=new _u,_[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=_[q];return ie===void 0&&(ie=new _u,_[q]=ie),ie.getHandSpace()};function z(q){const ie=x.indexOf(q.inputSource);if(ie===-1)return;const ge=_[ie];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||o),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",G);for(let q=0;q<_.length;q++){const ie=x[q];ie!==null&&(x[q]=null,_[q].disconnect(ie))}P=null,C=null,v.reset(),e.setRenderTarget(u),p=null,d=null,f=null,r=null,g=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Ur(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ge=null,me=null;m.depth&&(me=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?Gs:Ps,ge=m.stencil?Vs:Ir);const Ie={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Ur(d.textureWidth,d.textureHeight,{format:Gn,type:Mi,depthTexture:new p_(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(q){for(let ie=0;ie<q.removed.length;ie++){const ge=q.removed[ie],me=x.indexOf(ge);me>=0&&(x[me]=null,_[me].disconnect(ge))}for(let ie=0;ie<q.added.length;ie++){const ge=q.added[ie];let me=x.indexOf(ge);if(me===-1){for(let Oe=0;Oe<_.length;Oe++)if(Oe>=x.length){x.push(ge),me=Oe;break}else if(x[Oe]===null){x[Oe]=ge,me=Oe;break}if(me===-1)break}const Ie=_[me];Ie&&Ie.connect(ge)}}const X=new W,j=new W;function I(q,ie,ge){X.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const me=X.distanceTo(j),Ie=ie.projectionMatrix.elements,Oe=ge.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),ae=Ie[14]/(Ie[10]+1),U=(Ie[9]+1)/Ie[5],He=(Ie[9]-1)/Ie[5],ce=(Ie[8]-1)/Ie[0],pe=(Oe[8]+1)/Oe[0],le=Ve*ce,be=Ve*pe,Ae=me/(-ce+pe),Se=Ae*-ce;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Se),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const L=Ve+Ae,M=ae+Ae,Y=le-Se,ee=be+(me-Se),ne=U*ae/M*L,re=He*ae/M*L;q.projectionMatrix.makePerspective(Y,ee,ne,re,L,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function H(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ie=q.near,ge=q.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),S.near=D.near=w.near=ie,S.far=D.far=w.far=ge,(P!==S.near||C!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,C=S.far);const me=q.parent,Ie=S.cameras;H(S,me);for(let Oe=0;Oe<Ie.length;Oe++)H(Ie[Oe],me);Ie.length===2?I(S,w,D):S.projectionMatrix.copy(w.projectionMatrix),K(q,S,me)};function K(q,ie,ge){ge===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let te=null;function he(q,ie){if(h=ie.getViewerPose(c||o),y=ie,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let me=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let Oe=0;Oe<ge.length;Oe++){const Ve=ge[Oe];let ae=null;if(p!==null)ae=p.getViewport(Ve);else{const He=f.getViewSubImage(d,Ve);ae=He.viewport,Oe===0&&(e.setRenderTargetTextures(g,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(g))}let U=E[Oe];U===void 0&&(U=new wn,U.layers.enable(Oe),U.viewport=new At,E[Oe]=U),U.matrix.fromArray(Ve.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Ve.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(ae.x,ae.y,ae.width,ae.height),Oe===0&&(S.matrix.copy(U.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(U)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Oe=f.getDepthInformation(ge[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,r.renderState)}}for(let ge=0;ge<_.length;ge++){const me=x[ge],Ie=_[ge];me!==null&&Ie!==void 0&&Ie.update(me,ie,c||o)}te&&te(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),y=null}const Fe=new f_;Fe.setAnimationLoop(he),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}}const mr=new $n,Zw=new pt;function Qw(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,c_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,_,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),y(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ln&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ln&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),_=g.envMap,x=g.envMapRotation;_&&(m.envMap.value=_,mr.copy(x),mr.x*=-1,mr.y*=-1,mr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(mr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Jw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const x=_.program;i.uniformBlockBinding(g,x)}function c(g,_){let x=r[g.id];x===void 0&&(y(g),x=h(g),r[g.id]=x,g.addEventListener("dispose",m));const N=_.program;i.updateUBOMapping(g,N);const R=e.render.frame;s[g.id]!==R&&(d(g),s[g.id]=R)}function h(g){const _=f();g.__bindingPointIndex=_;const x=t.createBuffer(),N=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,N,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],x=g.uniforms,N=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let R=0,w=x.length;R<w;R++){const D=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,S=D.length;E<S;E++){const P=D[E];if(p(P,R,E,N)===!0){const C=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let G=0;G<z.length;G++){const X=z[G],j=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,C+$,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,x,N){const R=g.value,w=_+"_"+x;if(N[w]===void 0)return typeof R=="number"||typeof R=="boolean"?N[w]=R:N[w]=R.clone(),!0;{const D=N[w];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return N[w]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function y(g){const _=g.uniforms;let x=0;const N=16;for(let w=0,D=_.length;w<D;w++){const E=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,P=E.length;S<P;S++){const C=E[S],z=Array.isArray(C.value)?C.value:[C.value];for(let $=0,G=z.length;$<G;$++){const X=z[$],j=v(X),I=x%N,H=I%j.boundary,K=I+H;x+=H,K!==0&&N-K<j.storage&&(x+=N-K),C.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,x+=j.storage}}}const R=x%N;return R>0&&(x+=N-R),g.__size=x,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class eT{constructor(e={}){const{canvas:n=Wy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),y=new Int32Array(4);let v=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=Qi,this.toneMappingExposure=1;const _=this;let x=!1,N=0,R=0,w=null,D=-1,E=null;const S=new At,P=new At;let C=null;const z=new We(0);let $=0,G=n.width,X=n.height,j=1,I=null,H=null;const K=new At(0,0,G,X),te=new At(0,0,G,X);let he=!1;const Fe=new oh;let q=!1,ie=!1;const ge=new pt,me=new W,Ie=new At,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ae(){return w===null?j:1}let U=i;function He(A,B){return n.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qf}`),n.addEventListener("webglcontextlost",O,!1),n.addEventListener("webglcontextrestored",T,!1),n.addEventListener("webglcontextcreationerror",b,!1),U===null){const B="webgl2";if(U=He(B,A),U===null)throw He(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,pe,le,be,Ae,Se,L,M,Y,ee,ne,re,Pe,_e,ye,Ge,ue,Ee,Qe,ke,Te,Le,je,at;function k(){ce=new o1(U),ce.init(),Le=new Ww(U,ce),pe=new e1(U,ce,e,Le),le=new Hw(U),be=new c1(U),Ae=new Cw,Se=new Gw(U,ce,le,Ae,pe,Le,be),L=new n1(_),M=new s1(_),Y=new gS(U),je=new QE(U,Y),ee=new a1(U,Y,be,je),ne=new d1(U,ee,Y,be),Qe=new u1(U,pe,Se),Ge=new t1(Ae),re=new Aw(_,L,M,ce,pe,je,Ge),Pe=new Qw(_,Ae),_e=new bw,ye=new Nw(ce),Ee=new ZE(_,L,M,le,ne,d,l),ue=new Bw(_,ne,pe),at=new Jw(U,be,pe,le),ke=new JE(U,ce,be),Te=new l1(U,ce,be),be.programs=re.programs,_.capabilities=pe,_.extensions=ce,_.properties=Ae,_.renderLists=_e,_.shadowMap=ue,_.state=le,_.info=be}k();const de=new Kw(_,U);this.xr=de,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(G,X,!1))},this.getSize=function(A){return A.set(G,X)},this.setSize=function(A,B,Z=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,X=B,n.width=Math.floor(A*j),n.height=Math.floor(B*j),Z===!0&&(n.style.width=A+"px",n.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(G*j,X*j).floor()},this.setDrawingBufferSize=function(A,B,Z){G=A,X=B,j=Z,n.width=Math.floor(A*Z),n.height=Math.floor(B*Z),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,B,Z,Q){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,B,Z,Q),le.viewport(S.copy(K).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,B,Z,Q){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,B,Z,Q),le.scissor(P.copy(te).multiplyScalar(j).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){le.setScissorTest(he=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){H=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(A=!0,B=!0,Z=!0){let Q=0;if(A){let V=!1;if(w!==null){const fe=w.texture.format;V=fe===th||fe===eh||fe===Jf}if(V){const fe=w.texture.type,Me=fe===Mi||fe===Ir||fe===jo||fe===Vs||fe===Zf||fe===Qf,Ce=Ee.getClearColor(),Re=Ee.getClearAlpha(),ze=Ce.r,Be=Ce.g,De=Ce.b;Me?(p[0]=ze,p[1]=Be,p[2]=De,p[3]=Re,U.clearBufferuiv(U.COLOR,0,p)):(y[0]=ze,y[1]=Be,y[2]=De,y[3]=Re,U.clearBufferiv(U.COLOR,0,y))}else Q|=U.COLOR_BUFFER_BIT}B&&(Q|=U.DEPTH_BUFFER_BIT),Z&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",O,!1),n.removeEventListener("webglcontextrestored",T,!1),n.removeEventListener("webglcontextcreationerror",b,!1),_e.dispose(),ye.dispose(),Ae.dispose(),L.dispose(),M.dispose(),ne.dispose(),je.dispose(),at.dispose(),re.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ke),de.removeEventListener("sessionend",zt),ft.stop()};function O(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=be.autoReset,B=ue.enabled,Z=ue.autoUpdate,Q=ue.needsUpdate,V=ue.type;k(),be.autoReset=A,ue.enabled=B,ue.autoUpdate=Z,ue.needsUpdate=Q,ue.type=V}function b(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function J(A){const B=A.target;B.removeEventListener("dispose",J),se(B)}function se(A){Ue(A),Ae.remove(A)}function Ue(A){const B=Ae.get(A).programs;B!==void 0&&(B.forEach(function(Z){re.releaseProgram(Z)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Z,Q,V,fe){B===null&&(B=Oe);const Me=V.isMesh&&V.matrixWorld.determinant()<0,Ce=mc(A,B,Z,Q,V);le.setMaterial(Q,Me);let Re=Z.index,ze=1;if(Q.wireframe===!0){if(Re=ee.getWireframeAttribute(Z),Re===void 0)return;ze=2}const Be=Z.drawRange,De=Z.attributes.position;let et=Be.start*ze,vt=(Be.start+Be.count)*ze;fe!==null&&(et=Math.max(et,fe.start*ze),vt=Math.min(vt,(fe.start+fe.count)*ze)),Re!==null?(et=Math.max(et,0),vt=Math.min(vt,Re.count)):De!=null&&(et=Math.max(et,0),vt=Math.min(vt,De.count));const xt=vt-et;if(xt<0||xt===1/0)return;je.setup(V,Q,Ce,Z,Re);let cn,tt=ke;if(Re!==null&&(cn=Y.get(Re),tt=Te,tt.setIndex(cn)),V.isMesh)Q.wireframe===!0?(le.setLineWidth(Q.wireframeLinewidth*ae()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(V.isLine){let Ne=Q.linewidth;Ne===void 0&&(Ne=1),le.setLineWidth(Ne*ae()),V.isLineSegments?tt.setMode(U.LINES):V.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else V.isPoints?tt.setMode(U.POINTS):V.isSprite&&tt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)tt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ne=V._multiDrawStarts,Ut=V._multiDrawCounts,nt=V._multiDrawCount,In=Re?Y.get(Re).bytesPerElement:1,zr=Ae.get(Q).currentProgram.getUniforms();for(let un=0;un<nt;un++)zr.setValue(U,"_gl_DrawID",un),tt.render(Ne[un]/In,Ut[un])}else if(V.isInstancedMesh)tt.renderInstances(et,xt,V.count);else if(Z.isInstancedBufferGeometry){const Ne=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ut=Math.min(Z.instanceCount,Ne);tt.renderInstances(et,xt,Ut)}else tt.render(et,xt)};function dt(A,B,Z){A.transparent===!0&&A.side===Hn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,Ti(A,B,Z),A.side=nr,A.needsUpdate=!0,Ti(A,B,Z),A.side=Hn):Ti(A,B,Z)}this.compile=function(A,B,Z=null){Z===null&&(Z=A),m=ye.get(Z),m.init(B),g.push(m),Z.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==Z&&A.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const Q=new Set;return A.traverse(function(V){const fe=V.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Ce=fe[Me];dt(Ce,Z,V),Q.add(Ce)}else dt(fe,Z,V),Q.add(fe)}),g.pop(),m=null,Q},this.compileAsync=function(A,B,Z=null){const Q=this.compile(A,B,Z);return new Promise(V=>{function fe(){if(Q.forEach(function(Me){Ae.get(Me).currentProgram.isReady()&&Q.delete(Me)}),Q.size===0){V(A);return}setTimeout(fe,10)}ce.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ye=null;function kt(A){Ye&&Ye(A)}function Ke(){ft.stop()}function zt(){ft.start()}const ft=new f_;ft.setAnimationLoop(kt),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(A){Ye=A,de.setAnimationLoop(A),A===null?ft.stop():ft.start()},de.addEventListener("sessionstart",Ke),de.addEventListener("sessionend",zt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(B),B=de.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,B,w),m=ye.get(A,g.length),m.init(B),g.push(m),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(ge),ie=this.localClippingEnabled,q=Ge.init(this.clippingPlanes,ie),v=_e.get(A,u.length),v.init(),u.push(v),de.enabled===!0&&de.isPresenting===!0){const fe=_.xr.getDepthSensingMesh();fe!==null&&qn(fe,B,-1/0,_.sortObjects)}qn(A,B,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(I,H),Ve=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Ve&&Ee.addToRenderList(v,A),this.info.render.frame++,q===!0&&Ge.beginShadows();const Z=m.state.shadowsArray;ue.render(Z,A,B),q===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=v.opaque,V=v.transmissive;if(m.setupLights(),B.isArrayCamera){const fe=B.cameras;if(V.length>0)for(let Me=0,Ce=fe.length;Me<Ce;Me++){const Re=fe[Me];Dn(Q,V,A,Re)}Ve&&Ee.render(A);for(let Me=0,Ce=fe.length;Me<Ce;Me++){const Re=fe[Me];Kn(v,A,Re,Re.viewport)}}else V.length>0&&Dn(Q,V,A,B),Ve&&Ee.render(A),Kn(v,A,B);w!==null&&(Se.updateMultisampleRenderTarget(w),Se.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(_,A,B),je.resetDefaultState(),D=-1,E=null,g.pop(),g.length>0?(m=g[g.length-1],q===!0&&Ge.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function qn(A,B,Z,Q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){Q&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Me=ne.update(A),Ce=A.material;Ce.visible&&v.push(A,Me,Ce,Z,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){const Me=ne.update(A),Ce=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ie.copy(Me.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Ce)){const Re=Me.groups;for(let ze=0,Be=Re.length;ze<Be;ze++){const De=Re[ze],et=Ce[De.materialIndex];et&&et.visible&&v.push(A,Me,et,Z,Ie.z,De)}}else Ce.visible&&v.push(A,Me,Ce,Z,Ie.z,null)}}const fe=A.children;for(let Me=0,Ce=fe.length;Me<Ce;Me++)qn(fe[Me],B,Z,Q)}function Kn(A,B,Z,Q){const V=A.opaque,fe=A.transmissive,Me=A.transparent;m.setupLightsView(Z),q===!0&&Ge.setGlobalState(_.clippingPlanes,Z),Q&&le.viewport(S.copy(Q)),V.length>0&&wi(V,B,Z),fe.length>0&&wi(fe,B,Z),Me.length>0&&wi(Me,B,Z),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Dn(A,B,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Ur(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Qo:Mi,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const fe=m.state.transmissionRenderTarget[Q.id],Me=Q.viewport||S;fe.setSize(Me.z,Me.w);const Ce=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(z),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Ve&&Ee.render(Z);const Re=_.toneMapping;_.toneMapping=Qi;const ze=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),q===!0&&Ge.setGlobalState(_.clippingPlanes,Q),wi(A,Z,Q),Se.updateMultisampleRenderTarget(fe),Se.updateRenderTargetMipmap(fe),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let De=0,et=B.length;De<et;De++){const vt=B[De],xt=vt.object,cn=vt.geometry,tt=vt.material,Ne=vt.group;if(tt.side===Hn&&xt.layers.test(Q.layers)){const Ut=tt.side;tt.side=ln,tt.needsUpdate=!0,jt(xt,Z,Q,cn,tt,Ne),tt.side=Ut,tt.needsUpdate=!0,Be=!0}}Be===!0&&(Se.updateMultisampleRenderTarget(fe),Se.updateRenderTargetMipmap(fe))}_.setRenderTarget(Ce),_.setClearColor(z,$),ze!==void 0&&(Q.viewport=ze),_.toneMapping=Re}function wi(A,B,Z){const Q=B.isScene===!0?B.overrideMaterial:null;for(let V=0,fe=A.length;V<fe;V++){const Me=A[V],Ce=Me.object,Re=Me.geometry,ze=Q===null?Me.material:Q,Be=Me.group;Ce.layers.test(Z.layers)&&jt(Ce,B,Z,Re,ze,Be)}}function jt(A,B,Z,Q,V,fe){A.onBeforeRender(_,B,Z,Q,V,fe),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(_,B,Z,Q,A,fe),V.transparent===!0&&V.side===Hn&&V.forceSinglePass===!1?(V.side=ln,V.needsUpdate=!0,_.renderBufferDirect(Z,B,Q,V,A,fe),V.side=nr,V.needsUpdate=!0,_.renderBufferDirect(Z,B,Q,V,A,fe),V.side=Hn):_.renderBufferDirect(Z,B,Q,V,A,fe),A.onAfterRender(_,B,Z,Q,V,fe)}function Ti(A,B,Z){B.isScene!==!0&&(B=Oe);const Q=Ae.get(A),V=m.state.lights,fe=m.state.shadowsArray,Me=V.state.version,Ce=re.getParameters(A,V.state,fe,B,Z),Re=re.getProgramCacheKey(Ce);let ze=Q.programs;Q.environment=A.isMeshStandardMaterial?B.environment:null,Q.fog=B.fog,Q.envMap=(A.isMeshStandardMaterial?M:L).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",J),ze=new Map,Q.programs=ze);let Be=ze.get(Re);if(Be!==void 0){if(Q.currentProgram===Be&&Q.lightsStateVersion===Me)return kr(A,Ce),Be}else Ce.uniforms=re.getUniforms(A),A.onBeforeCompile(Ce,_),Be=re.acquireProgram(Ce,Re),ze.set(Re,Be),Q.uniforms=Ce.uniforms;const De=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=Ge.uniform),kr(A,Ce),Q.needsLights=M_(A),Q.lightsStateVersion=Me,Q.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),Q.currentProgram=Be,Q.uniformsList=null,Be}function cr(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=pl.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function kr(A,B){const Z=Ae.get(A);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function mc(A,B,Z,Q,V){B.isScene!==!0&&(B=Oe),Se.resetTextureUnits();const fe=B.fog,Me=Q.isMeshStandardMaterial?B.environment:null,Ce=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ar,Re=(Q.isMeshStandardMaterial?M:L).get(Q.envMap||Me),ze=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Be=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),De=!!Z.morphAttributes.position,et=!!Z.morphAttributes.normal,vt=!!Z.morphAttributes.color;let xt=Qi;Q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xt=_.toneMapping);const cn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,tt=cn!==void 0?cn.length:0,Ne=Ae.get(Q),Ut=m.state.lights;if(q===!0&&(ie===!0||A!==E)){const yn=A===E&&Q.id===D;Ge.setState(Q,A,yn)}let nt=!1;Q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ut.state.version||Ne.outputColorSpace!==Ce||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==Re||Q.fog===!0&&Ne.fog!==fe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ge.numPlanes||Ne.numIntersection!==Ge.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==Be||Ne.morphTargets!==De||Ne.morphNormals!==et||Ne.morphColors!==vt||Ne.toneMapping!==xt||Ne.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Ne.__version=Q.version);let In=Ne.currentProgram;nt===!0&&(In=Ti(Q,B,V));let zr=!1,un=!1,gc=!1;const Mt=In.getUniforms(),Ai=Ne.uniforms;if(le.useProgram(In.program)&&(zr=!0,un=!0,gc=!0),Q.id!==D&&(D=Q.id,un=!0),zr||E!==A){Mt.setValue(U,"projectionMatrix",A.projectionMatrix),Mt.setValue(U,"viewMatrix",A.matrixWorldInverse);const yn=Mt.map.cameraPosition;yn!==void 0&&yn.setValue(U,me.setFromMatrixPosition(A.matrixWorld)),pe.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,un=!0,gc=!0)}if(V.isSkinnedMesh){Mt.setOptional(U,V,"bindMatrix"),Mt.setOptional(U,V,"bindMatrixInverse");const yn=V.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Mt.setValue(U,"boneTexture",yn.boneTexture,Se))}V.isBatchedMesh&&(Mt.setOptional(U,V,"batchingTexture"),Mt.setValue(U,"batchingTexture",V._matricesTexture,Se),Mt.setOptional(U,V,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",V._indirectTexture,Se),Mt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",V._colorsTexture,Se));const _c=Z.morphAttributes;if((_c.position!==void 0||_c.normal!==void 0||_c.color!==void 0)&&Qe.update(V,Z,In),(un||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,Mt.setValue(U,"receiveShadow",V.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ai.envMap.value=Re,Ai.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&B.environment!==null&&(Ai.envMapIntensity.value=B.environmentIntensity),un&&(Mt.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&S_(Ai,gc),fe&&Q.fog===!0&&Pe.refreshFogUniforms(Ai,fe),Pe.refreshMaterialUniforms(Ai,Q,j,X,m.state.transmissionRenderTarget[A.id]),pl.upload(U,cr(Ne),Ai,Se)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(pl.upload(U,cr(Ne),Ai,Se),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Mt.setValue(U,"center",V.center),Mt.setValue(U,"modelViewMatrix",V.modelViewMatrix),Mt.setValue(U,"normalMatrix",V.normalMatrix),Mt.setValue(U,"modelMatrix",V.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const yn=Q.uniformsGroups;for(let vc=0,E_=yn.length;vc<E_;vc++){const uh=yn[vc];at.update(uh,In),at.bind(uh,In)}}return In}function S_(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function M_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,B,Z){Ae.get(A.texture).__webglTexture=B,Ae.get(A.depthTexture).__webglTexture=Z;const Q=Ae.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const Z=Ae.get(A);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Z=0){w=A,N=B,R=Z;let Q=!0,V=null,fe=!1,Me=!1;if(A){const Re=Ae.get(A);if(Re.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1;else if(Re.__webglFramebuffer===void 0)Se.setupRenderTarget(A);else if(Re.__hasExternalTextures)Se.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(Re.__boundDepthTexture!==De){if(De!==null&&Ae.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);const Be=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?V=Be[B][Z]:V=Be[B],fe=!0):A.samples>0&&Se.useMultisampledRTT(A)===!1?V=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[Z]:V=Be,S.copy(A.viewport),P.copy(A.scissor),C=A.scissorTest}else S.copy(K).multiplyScalar(j).floor(),P.copy(te).multiplyScalar(j).floor(),C=he;if(le.bindFramebuffer(U.FRAMEBUFFER,V)&&Q&&le.drawBuffers(A,V),le.viewport(S),le.scissor(P),le.setScissorTest(C),fe){const Re=Ae.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,Z)}else if(Me){const Re=Ae.get(A.texture),ze=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,Z||0,ze)}D=-1},this.readRenderTargetPixels=function(A,B,Z,Q,V,fe,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){le.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Re=A.texture,ze=Re.format,Be=Re.type;if(!pe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Q&&Z>=0&&Z<=A.height-V&&U.readPixels(B,Z,Q,V,Le.convert(ze),Le.convert(Be),fe)}finally{const Re=w!==null?Ae.get(w).__webglFramebuffer:null;le.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,B,Z,Q,V,fe,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){le.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Re=A.texture,ze=Re.format,Be=Re.type;if(!pe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-Q&&Z>=0&&Z<=A.height-V){const De=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,De),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(B,Z,Q,V,Le.convert(ze),Le.convert(Be),0),U.flush();const et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await Xy(U,et,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,De),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe)}finally{U.deleteBuffer(De),U.deleteSync(et)}return fe}}finally{const Re=w!==null?Ae.get(w).__webglFramebuffer:null;le.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,B=null,Z=0){A.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-Z),V=Math.floor(A.image.width*Q),fe=Math.floor(A.image.height*Q),Me=B!==null?B.x:0,Ce=B!==null?B.y:0;Se.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Me,Ce,V,fe),le.unbindTexture()},this.copyTextureToTexture=function(A,B,Z=null,Q=null,V=0){A.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],B=arguments[2],V=arguments[3]||0,Z=null);let fe,Me,Ce,Re,ze,Be;Z!==null?(fe=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Ce=Z.min.x,Re=Z.min.y):(fe=A.image.width,Me=A.image.height,Ce=0,Re=0),Q!==null?(ze=Q.x,Be=Q.y):(ze=0,Be=0);const De=Le.convert(B.format),et=Le.convert(B.type);Se.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const vt=U.getParameter(U.UNPACK_ROW_LENGTH),xt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),cn=U.getParameter(U.UNPACK_SKIP_PIXELS),tt=U.getParameter(U.UNPACK_SKIP_ROWS),Ne=U.getParameter(U.UNPACK_SKIP_IMAGES),Ut=A.isCompressedTexture?A.mipmaps[V]:A.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),U.pixelStorei(U.UNPACK_SKIP_ROWS,Re),A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,V,ze,Be,fe,Me,De,et,Ut.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,V,ze,Be,Ut.width,Ut.height,De,Ut.data):U.texSubImage2D(U.TEXTURE_2D,V,ze,Be,fe,Me,De,et,Ut),U.pixelStorei(U.UNPACK_ROW_LENGTH,vt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,cn),U.pixelStorei(U.UNPACK_SKIP_ROWS,tt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ne),V===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(A,B,Z=null,Q=null,V=0){A.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],B=arguments[3],V=arguments[4]||0);let fe,Me,Ce,Re,ze,Be,De,et,vt;const xt=A.isCompressedTexture?A.mipmaps[V]:A.image;Z!==null?(fe=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Ce=Z.max.z-Z.min.z,Re=Z.min.x,ze=Z.min.y,Be=Z.min.z):(fe=xt.width,Me=xt.height,Ce=xt.depth,Re=0,ze=0,Be=0),Q!==null?(De=Q.x,et=Q.y,vt=Q.z):(De=0,et=0,vt=0);const cn=Le.convert(B.format),tt=Le.convert(B.type);let Ne;if(B.isData3DTexture)Se.setTexture3D(B,0),Ne=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Se.setTexture2DArray(B,0),Ne=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Ut=U.getParameter(U.UNPACK_ROW_LENGTH),nt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),In=U.getParameter(U.UNPACK_SKIP_PIXELS),zr=U.getParameter(U.UNPACK_SKIP_ROWS),un=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Be),A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ne,V,De,et,vt,fe,Me,Ce,cn,tt,xt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ne,V,De,et,vt,fe,Me,Ce,cn,xt.data):U.texSubImage3D(Ne,V,De,et,vt,fe,Me,Ce,cn,tt,xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ut),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,In),U.pixelStorei(U.UNPACK_SKIP_ROWS,zr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,un),V===0&&B.generateMipmaps&&U.generateMipmap(Ne),le.unbindTexture()},this.initRenderTarget=function(A){Ae.get(A).__webglFramebuffer===void 0&&Se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Se.setTextureCube(A,0):A.isData3DTexture?Se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Se.setTexture2DArray(A,0):Se.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){N=0,R=0,w=null,le.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ih?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===fc?"display-p3":"srgb"}}class lh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=n}clone(){return new lh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tT extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class nT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=$d,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ls("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new W;class Xl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ni(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ni(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ni(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ni(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new jn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xo extends lr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const co=new W,ss=new W,os=new W,as=new Xe,uo=new Xe,x_=new pt,Ha=new W,fo=new W,Va=new W,mm=new Xe,vu=new Xe,gm=new Xe;class Ga extends It{constructor(e=new xo){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new _n;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new nT(n,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new Xl(i,3,0,!1)),rs.setAttribute("uv",new Xl(i,2,3,!1))}this.geometry=rs,this.material=e,this.center=new Xe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),x_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-os.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Wa(Ha.set(-.5,-.5,0),os,o,ss,r,s),Wa(fo.set(.5,-.5,0),os,o,ss,r,s),Wa(Va.set(.5,.5,0),os,o,ss,r,s),mm.set(0,0),vu.set(1,0),gm.set(1,1);let a=e.ray.intersectTriangle(Ha,fo,Va,!1,co);if(a===null&&(Wa(fo.set(-.5,.5,0),os,o,ss,r,s),vu.set(0,1),a=e.ray.intersectTriangle(Ha,Va,fo,!1,co),a===null))return;const l=e.ray.origin.distanceTo(co);l<e.near||l>e.far||n.push({distance:l,point:co.clone(),uv:Tn.getInterpolation(co,Ha,fo,Va,mm,vu,gm,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Wa(t,e,n,i,r,s){as.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(uo.x=s*as.x-r*as.y,uo.y=r*as.x+s*as.y):uo.copy(as),t.copy(e),t.x+=uo.x,t.y+=uo.y,t.applyMatrix4(x_)}class Ms extends lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jl=new W,Yl=new W,_m=new pt,ho=new rh,Xa=new hc,xu=new W,vm=new W;class Zd extends It{constructor(e=new _n,n=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)jl.fromBufferAttribute(n,r-1),Yl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=jl.distanceTo(Yl);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;_m.copy(r).invert(),ho.copy(e.ray).applyMatrix4(_m);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let v=p,m=y-1;v<m;v+=c){const u=h.getX(v),g=h.getX(v+1),_=ja(this,e,ho,l,u,g);_&&n.push(_)}if(this.isLineLoop){const v=h.getX(y-1),m=h.getX(p),u=ja(this,e,ho,l,v,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let v=p,m=y-1;v<m;v+=c){const u=ja(this,e,ho,l,v,v+1);u&&n.push(u)}if(this.isLineLoop){const v=ja(this,e,ho,l,y-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ja(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(jl.fromBufferAttribute(o,r),Yl.fromBufferAttribute(o,s),n.distanceSqToSegment(jl,Yl,xu,vm)>i)return;xu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(xu);if(!(l<e.near||l>e.far))return{distance:l,point:vm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const xm=new W,ym=new W;class Qd extends Zd{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)xm.fromBufferAttribute(n,r),ym.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xm.distanceTo(ym);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ch extends Zt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ya=new W,$a=new W,yu=new W,qa=new Tn;class Sm extends _n{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(hl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},p=[];for(let y=0;y<l;y+=3){o?(c[0]=o.getX(y),c[1]=o.getX(y+1),c[2]=o.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);const{a:v,b:m,c:u}=qa;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),qa.getNormal(yu),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let g=0;g<3;g++){const _=(g+1)%3,x=f[g],N=f[_],R=qa[h[g]],w=qa[h[_]],D=`${x}_${N}`,E=`${N}_${x}`;E in d&&d[E]?(yu.dot(d[E].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(w.x,w.y,w.z)),d[E]=null):D in d||(d[D]={index0:c[g],index1:c[_],normal:yu.clone()})}}for(const y in d)if(d[y]){const{index0:v,index1:m}=d[y];Ya.fromBufferAttribute(a,v),$a.fromBufferAttribute(a,m),p.push(Ya.x,Ya.y,Ya.z),p.push($a.x,$a.y,$a.z)}this.setAttribute("position",new bn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class iT extends lr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Su extends lr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y_ extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Mu=new pt,Mm=new W,Em=new W;class rT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Mm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mm),Em.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Em),n.updateMatrixWorld(),Mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sT extends rT{constructor(){super(new h_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oT extends y_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new sT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aT extends y_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const wm=new pt;class lT{constructor(e,n,i=0,r=1/0){this.ray=new rh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wm),this}intersectObject(e,n=!0,i=[]){return Jd(e,this,i,n),i.sort(Tm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Jd(e[r],this,i,n);return i.sort(Tm),i}}function Tm(t,e){return t.distance-e.distance}function Jd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Jd(s[o],e,n,!0)}}class cT extends Qd{constructor(e=10,n=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,y=-a;d<=n;d++,y+=o){l.push(-a,0,y,a,0,y),l.push(y,0,-a,y,0,a);const v=d===s?i:r;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new _n;h.setAttribute("position",new bn(l,3)),h.setAttribute("color",new bn(c,3));const f=new Ms({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qf);const uT={name:"40ft High Cube Container",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580},Am=[{name:"20ft Standard",innerLength:5898,innerWidth:2352,innerHeight:2393,doorWidth:2340,doorHeight:2280,maxPayload:28200},{name:"40ft Standard",innerLength:12032,innerWidth:2352,innerHeight:2393,doorWidth:2340,doorHeight:2280,maxPayload:26750},{name:"40ft High Cube",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580},{name:"45ft High Cube",innerLength:13556,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:27700},{name:"Custom",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580}],Cm=[{id:"hilux_dc",name:"Hilux Revo (4Dr)",length:5325,width:1855,height:1815,weight:2050,wheelbase:3085,cabRatio:.55},{id:"hilux_sc",name:"Hilux Revo (2Dr)",length:5255,width:1855,height:1815,weight:1910,wheelbase:3085,cabRatio:.4},{id:"ranger_dc",name:"Ranger (4Dr)",length:5362,width:1860,height:1821,weight:2150,wheelbase:3220,cabRatio:.55},{id:"triton_dc",name:"Triton (4Dr)",length:5305,width:1815,height:1795,weight:1950,wheelbase:3e3,cabRatio:.55},{id:"dmax_dc",name:"D-Max (4Dr)",length:5265,width:1870,height:1790,weight:1990,wheelbase:3020,cabRatio:.55},{id:"navara_dc",name:"Navara (4Dr)",length:5260,width:1850,height:1840,weight:2050,wheelbase:3150,cabRatio:.55},{id:"custom",name:"กำหนดเอง (Custom)",length:5300,width:1850,height:1800,weight:2e3,wheelbase:3e3,cabRatio:.5}],Rm=[{id:"eu_pallet",name:"EU Pallet",length:1200,width:800,height:1450,weight:800},{id:"th_pallet",name:"TH Pallet",length:1100,width:1100,height:1450,weight:800},{id:"box_s",name:"กล่อง S",length:600,width:400,height:400,weight:20},{id:"box_m",name:"กล่อง M",length:800,width:600,height:600,weight:40},{id:"box_l",name:"กล่อง L",length:1200,width:800,height:800,weight:80},{id:"box_custom",name:"กำหนดเอง",length:1e3,width:800,height:800,weight:50}],ls=["#3B82F6","#EF4444","#10B981","#F59E0B","#8B5CF6","#EC4899","#06B6D4","#F97316"],Eu=()=>Math.random().toString(36).substr(2,9);function dT(t,e=45){const n=t.naturalWidth||t.width,i=t.naturalHeight||t.height,r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d");s.drawImage(t,0,0);const o=s.getImageData(0,0,n,i),a=o.data,l=a[0],c=a[1],h=a[2],f=new Uint8Array(n*i),d=[0,n-1,(i-1)*n,i*n-1];for(;d.length;){const p=d.pop();if(p<0||p>=n*i||f[p])continue;f[p]=1;const y=p*4;if(Math.abs(a[y]-l)+Math.abs(a[y+1]-c)+Math.abs(a[y+2]-h)>e*3)continue;a[y+3]=0;const v=p%n;v>0&&d.push(p-1),v<n-1&&d.push(p+1),d.push(p-n,p+n)}return s.putImageData(o,0,0),r}const fT=xe.forwardRef(function({container:e,vehicles:n,selectedId:i,onSelectVehicle:r,onUpdateVehicle:s},o){const a=xe.useRef(null);xe.useImperativeHandle(o,()=>({getCanvas:()=>a.current}),[]);const l=xe.useRef({}),[c,h]=xe.useState(null),[f,d]=xe.useState(1),[p,y]=xe.useState({x:0,y:0}),v=xe.useRef({zoom:1,pan:{x:0,y:0}}),m=xe.useRef(null),u=xe.useCallback((P,C)=>{v.current={zoom:P,pan:C},d(P),y(C)},[]),g=60;xe.useEffect(()=>{n.forEach(P=>{if(!P.sideImage)return;const C=`${P.id}_${P.removeBg?1:0}`;if(l.current[C])return;const z=new Image;z.src=P.sideImage,z.onload=()=>{l.current[C]=P.removeBg?dT(z):z,x()}})},[n]);const _=xe.useCallback(()=>{const P=a.current;if(!P)return{scale:1,ox:g,oy:g,cW:0,cH:0,baseScale:1};const C=P.getBoundingClientRect(),z=Math.min((C.width-g*2)/e.innerLength,(C.height-g*2)/e.innerHeight),$=z*f,G=e.innerLength*$,X=e.innerHeight*$,j=(C.height-e.innerHeight*z)/2,I=g+p.x,H=j+p.y;return{scale:$,ox:I,oy:H,cW:G,cH:X,baseScale:z}},[e,f,p]),x=xe.useCallback(()=>{const P=a.current;if(!P)return;const C=P.getContext("2d"),z=P.getBoundingClientRect(),$=Math.min(window.devicePixelRatio||1,2);P.width=z.width*$,P.height=z.height*$,C.scale($,$);const G=z.width,X=z.height,{scale:j,ox:I,oy:H,cW:K,cH:te}=_();C.fillStyle="#18253a",C.fillRect(0,0,G,X),C.fillStyle="#ffffff",C.fillRect(I,H,K,te);const he=(()=>{const ae=45/j;return ae<=100?100:ae<=200?200:ae<=500?500:ae<=1e3?1e3:2e3})();for(let ae=he;ae<e.innerLength;ae+=he){const U=I+ae*j;U<I||U>I+K||(C.strokeStyle=ae%1e3===0?"#00000060":"#00000035",C.lineWidth=ae%1e3===0?1:.5,C.beginPath(),C.moveTo(U,H),C.lineTo(U,H+te),C.stroke())}for(let ae=he;ae<e.innerHeight;ae+=he){const U=H+te-ae*j;U<H||U>H+te||(C.strokeStyle=ae%1e3===0?"#00000060":"#00000035",C.lineWidth=ae%1e3===0?1:.5,C.beginPath(),C.moveTo(I,U),C.lineTo(I+K,U),C.stroke())}C.strokeStyle="#00ffaa",C.lineWidth=2,C.strokeRect(I,H,K,te),C.fillStyle="#d0e8d088",C.fillRect(I,H+te-5,K,5);const Fe=H+te-e.doorHeight*j;C.strokeStyle="#dd7700cc",C.lineWidth=1.5,C.setLineDash([8,4]),C.beginPath(),C.moveTo(I,Fe),C.lineTo(I+K,Fe),C.stroke(),C.setLineDash([]),C.fillStyle="#dd7700ee",C.font="bold 9px monospace",C.textAlign="right",C.fillText(`⚠ DOOR MAX ${e.doorHeight}mm`,I+K-4,Fe-4);const q=22,ie=36,ge=Math.max(0,Math.floor(Math.max(0,-I)/j/100)*100),me=Math.min(e.innerLength,Math.ceil((G-I)/j/100)*100+100),Ie=Math.max(0,Math.floor(Math.max(0,H+te-X)/j/100)*100),Oe=Math.min(e.innerHeight,Math.ceil((H+te)/j/100)*100+100),Ve=ae=>ae>=1e3&&he>=1e3?`${ae/1e3}m`:`${ae}`;[{base:H+te+2,dir:1},{base:H-2,dir:-1}].forEach(({base:ae,dir:U})=>{C.fillStyle="#141e30ee",C.fillRect(I,U===1?ae:ae-q,K,q);for(let He=ge;He<=me;He+=100){const ce=I+He*j;if(ce<I-1||ce>I+K+1)continue;const pe=He%he===0,le=He%500===0&&!pe,be=(pe?13:le?8:4)*U;C.strokeStyle=pe?"#00ffaadd":le?"#00ffaa55":"#00000022",C.lineWidth=pe?1.2:.5,C.beginPath(),C.moveTo(ce,ae),C.lineTo(ce,ae+be),C.stroke(),pe&&(C.fillStyle="#00ffaaee",C.font="bold 8px monospace",C.textAlign="center",C.fillText(Ve(He),ce,U===1?ae+q:ae-4))}}),[{base:I-2,dir:-1},{base:I+K+2,dir:1}].forEach(({base:ae,dir:U})=>{C.fillStyle="#141e30ee",C.fillRect(U===-1?ae-ie:ae,H,ie,te);for(let He=Ie;He<=Oe;He+=100){const ce=H+te-He*j;if(ce<H-1||ce>H+te+1)continue;const pe=He%he===0,le=He%500===0&&!pe,be=(pe?13:le?8:4)*U;C.strokeStyle=pe?"#00ffaadd":le?"#00ffaa55":"#00000022",C.lineWidth=pe?1.2:.5,C.beginPath(),C.moveTo(ae,ce),C.lineTo(ae+be,ce),C.stroke(),pe&&(C.fillStyle="#00ffaaee",C.font="bold 8px monospace",C.textAlign=U===-1?"right":"left",C.fillText(`${He}`,U===-1?ae-4:ae+4,ce+3))}}),C.fillStyle="#00ffaacc",C.font="bold 10px monospace",C.textAlign="center",C.fillText(`${e.innerLength} mm`,I+K/2,H-q-4),C.save(),C.translate(I-ie-14,H+te/2),C.rotate(-Math.PI/2),C.fillText(`${e.innerHeight} mm`,0,0),C.restore(),n.forEach(ae=>{const U=ae.sideX??200,He=ae.sideY??0,ce=(ae.sideAngle??0)*Math.PI/180,pe=ae.length*j,le=ae.height*j,be=I+U*j+pe/2,Ae=H+te-He*j-le/2,Se=ae.id===i;C.save(),C.translate(be,Ae),C.rotate(ce);const L=`${ae.id}_${ae.removeBg?1:0}`,M=l.current[L];if(M&&M.complete!==!1){const Y=(ae.imgRealLength??ae.length)*j,ee=(ae.imgRealHeight??ae.height)*j;ae.flipX&&C.scale(-1,1),C.drawImage(M,-Y/2,-ee/2,Y,ee),ae.flipX&&C.scale(-1,1)}else{C.fillStyle=ae.color+"22",C.strokeStyle=ae.color+"cc",C.lineWidth=1.5,C.fillRect(-pe/2,-le/2,pe,le),C.strokeRect(-pe/2,-le/2,pe,le);const Y=pe*(ae.cabRatio??.5);C.strokeStyle=ae.color+"77",C.lineWidth=1,C.beginPath(),C.moveTo(-pe/2+Y,-le/2),C.lineTo(-pe/2+Y,le/2),C.stroke(),C.fillStyle="#ffffffaa",C.font=`bold ${Math.max(8,pe*.04)}px sans-serif`,C.textAlign="center",C.textBaseline="middle",C.fillText(ae.preset,0,0)}Se&&(C.strokeStyle="#ffffff",C.lineWidth=2,C.setLineDash([4,3]),C.strokeRect(-pe/2-3,-le/2-3,pe+6,le+6),C.setLineDash([]),C.strokeStyle="#00ffaa",C.lineWidth=1.5,C.beginPath(),C.moveTo(0,-le/2-2),C.lineTo(0,-le/2-14),C.stroke(),C.fillStyle="#00ffaadd",C.strokeStyle="#00ffaa",C.lineWidth=1,C.beginPath(),C.arc(0,-le/2-21,7,0,Math.PI*2),C.fill(),C.stroke(),C.fillStyle="#ffffff88",C.font="8px monospace",C.textAlign="left",C.textBaseline="top",C.fillText(`${Math.round((ae.sideAngle??0)*10)/10}°`,pe/2+5,-le/2)),C.restore()})},[e,n,i,_]);xe.useEffect(()=>{x()},[x]),xe.useEffect(()=>(window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[x]),xe.useEffect(()=>{const P=a.current;if(!P)return;const C=z=>{z.preventDefault();const $=P.getBoundingClientRect(),G=z.clientX-$.left,X=z.clientY-$.top,{zoom:j,pan:I}=v.current,H=Math.min(($.width-g*2)/e.innerLength,($.height-g*2)/e.innerHeight),K=H*j,te=($.height-e.innerHeight*H)/2,he=g+I.x,Fe=te+I.y,q=z.deltaY<0?1.15:1/1.15,ie=Math.max(.5,Math.min(20,j*q)),ge=H*ie,me=G-(G-he)*ge/K,Ie=X-(X-Fe)*ge/K;u(ie,{x:me-g,y:Ie-te})};return P.addEventListener("wheel",C,{passive:!1}),()=>P.removeEventListener("wheel",C)},[e,u]);const N=P=>{const C=a.current.getBoundingClientRect();return{mx:P.clientX-C.left,my:P.clientY-C.top}},R=P=>{const{scale:C,ox:z,oy:$,cH:G}=_(),X=P.length*C,j=P.height*C,I=z+(P.sideX??200)*C+X/2,H=$+G-(P.sideY??0)*C-j/2;return{cx:I,cy:H,vW:X,vH:j}},w=P=>{if(P.button===1){P.preventDefault();const{mx:$,my:G}=N(P);m.current={mx:$,my:G,panX:v.current.pan.x,panY:v.current.pan.y},h({id:null,type:"pan"});return}const{mx:C,my:z}=N(P);for(let $=n.length-1;$>=0;$--){const G=n[$],{cx:X,cy:j,vW:I,vH:H}=R(G),K=(G.sideAngle??0)*Math.PI/180;if(G.id===i){const Fe=-H/2-21,q=X-Fe*Math.sin(K),ie=j+Fe*Math.cos(K);if(Math.hypot(C-q,z-ie)<12){r(G.id),h({id:G.id,type:"rotate",cx:X,cy:j});return}}const te=(C-X)*Math.cos(-K)-(z-j)*Math.sin(-K),he=(C-X)*Math.sin(-K)+(z-j)*Math.cos(-K);if(Math.abs(te)<=I/2+5&&Math.abs(he)<=H/2+5){r(G.id),h({id:G.id,type:"move",offX:C-X,offY:z-j});return}}r(null),m.current={mx:C,my:z,panX:v.current.pan.x,panY:v.current.pan.y},h({id:null,type:"pan"})},D=P=>{if((c==null?void 0:c.type)==="pan"&&m.current){const{mx:H,my:K}=N(P);u(v.current.zoom,{x:m.current.panX+H-m.current.mx,y:m.current.panY+K-m.current.my});return}if(!c)return;const{mx:C,my:z}=N(P),{scale:$,ox:G,oy:X,cH:j}=_(),I=n.find(H=>H.id===c.id);if(I){if(c.type==="move"){const H=I.length*$,K=I.height*$,te=C-c.offX,he=z-c.offY;s(I.id,{sideX:Math.round((te-G-H/2)/$),sideY:Math.max(0,Math.round((X+j-he-K/2)/$))})}else if(c.type==="rotate"){const H=Math.atan2(C-c.cx,-(z-c.cy))*180/Math.PI;s(I.id,{sideAngle:Math.round(H*10)/10})}}},E=()=>h(null),S=(c==null?void 0:c.type)==="pan"||c?"grabbing":"crosshair";return F.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[F.jsx("canvas",{ref:a,style:{width:"100%",height:"100%",cursor:S,display:"block"},onMouseDown:w,onMouseMove:D,onMouseUp:E,onMouseLeave:E}),F.jsxs("div",{style:{position:"absolute",bottom:10,right:10,display:"flex",gap:4,alignItems:"center"},children:[F.jsx("button",{onClick:()=>u(Math.min(20,v.current.zoom*1.3),v.current.pan),style:{width:28,height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",cursor:"pointer",fontSize:16,lineHeight:1},children:"+"}),F.jsx("button",{onClick:()=>u(Math.max(.5,v.current.zoom/1.3),v.current.pan),style:{width:28,height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",cursor:"pointer",fontSize:16,lineHeight:1},children:"−"}),F.jsxs("button",{onClick:()=>u(1,{x:0,y:0}),style:{padding:"0 8px",height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#00ddaa",cursor:"pointer",fontSize:10,fontFamily:"monospace"},children:[f.toFixed(1),"× ↺"]})]})]})});function hT({container:t,boxes:e,selectedId:n,onSelectBox:i,onMoveBox:r,collisions:s}){const o=xe.useRef(null),[a,l]=xe.useState(null),[c,h]=xe.useState({x:0,y:0}),f=xe.useRef(1),d=50,p=xe.useCallback(()=>{const _=o.current;if(!_)return 1;const x=_.getBoundingClientRect();return Math.min((x.width-d*2)/t.innerLength,(x.height-d*2)/t.innerWidth)},[t]),y=xe.useCallback(()=>{const _=o.current;if(!_)return;const x=_.getContext("2d"),N=_.getBoundingClientRect(),R=Math.min(window.devicePixelRatio||1,2);_.width=N.width*R,_.height=N.height*R,x.scale(R,R);const w=N.width,D=N.height,E=p();f.current=E;const S=d,P=d,C=t.innerLength*E,z=t.innerWidth*E;x.fillStyle="#18253a",x.fillRect(0,0,w,D),x.strokeStyle="#ffffff10",x.lineWidth=.5;for(let G=1e3;G<t.innerLength;G+=1e3)x.beginPath(),x.moveTo(S+G*E,P),x.lineTo(S+G*E,P+z),x.stroke();for(let G=500;G<t.innerWidth;G+=500)x.beginPath(),x.moveTo(S,P+G*E),x.lineTo(S+C,P+G*E),x.stroke();x.strokeStyle="#00ffaa",x.lineWidth=2,x.strokeRect(S,P,C,z);const $=(t.innerWidth-t.doorWidth)/2;x.strokeStyle="#00ffaa88",x.lineWidth=3,x.setLineDash([8,4]),x.beginPath(),x.moveTo(S+C,P+$*E),x.lineTo(S+C,P+($+t.doorWidth)*E),x.stroke(),x.setLineDash([]),x.fillStyle="#00ffaa",x.font="bold 11px monospace",x.textAlign="center",x.fillText(`${t.innerLength} mm`,S+C/2,P-16),x.save(),x.translate(S-20,P+z/2),x.rotate(-Math.PI/2),x.fillText(`${t.innerWidth} mm`,0,0),x.restore(),x.fillStyle="#00ffaa66",x.font="10px sans-serif",x.textAlign="left",x.fillText("DOOR →",S+C+8,P+z/2+4),e.forEach(G=>{const X=S+G.x*E,j=P+G.y*E,I=G.length*E,H=G.width*E,K=G.id===n,te=s.has(G.id);x.fillStyle="rgba(0,0,0,0.2)",x.fillRect(X+2,j+2,I,H),x.fillStyle=G.color+(te?"cc":"99"),x.fillRect(X,j,I,H),x.strokeStyle=te?"#ff4444":K?"#ffffff":G.color,x.lineWidth=K?2:1.5,x.strokeRect(X,j,I,H),x.strokeStyle=G.color+"44",x.lineWidth=.5,x.beginPath(),x.moveTo(X,j),x.lineTo(X+I,j+H),x.moveTo(X+I,j),x.lineTo(X,j+H),x.stroke();const he=Math.max(8,Math.min(I,H)*.16);x.fillStyle="#ffffffcc",x.font=`${K?"bold ":""}${he}px sans-serif`,x.textAlign="center",x.textBaseline="middle",x.fillText(G.name||G.preset,X+I/2,j+H/2-he*.5),x.font=`${Math.max(7,he*.8)}px monospace`,x.fillStyle="#ffffff88",x.fillText(`${G.length}×${G.width}×${G.height}`,X+I/2,j+H/2+he*.5),K&&(x.strokeStyle="#ffffff",x.lineWidth=2,x.setLineDash([4,3]),x.strokeRect(X-3,j-3,I+6,H+6),x.setLineDash([]))})},[t,e,n,s,p]);xe.useEffect(()=>{y()},[y]),xe.useEffect(()=>(window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[y]);const v=_=>{const x=o.current.getBoundingClientRect();return{cx:_.clientX-x.left,cy:_.clientY-x.top}},m=_=>{const{cx:x,cy:N}=v(_),R=f.current;for(let w=e.length-1;w>=0;w--){const D=e[w],E=d+D.x*R,S=d+D.y*R,P=D.length*R,C=D.width*R;if(x>=E&&x<=E+P&&N>=S&&N<=S+C){i(D.id),l(D.id),h({x:x-E,y:N-S});return}}i(null)},u=_=>{if(!a)return;const{cx:x,cy:N}=v(_),R=f.current,w=e.find(S=>S.id===a);if(!w)return;const D=Math.max(0,Math.min(t.innerLength-w.length,Math.round((x-d-c.x)/R))),E=Math.max(0,Math.min(t.innerWidth-w.width,Math.round((N-d-c.y)/R)));r(a,D,E)},g=()=>l(null);return F.jsx("canvas",{ref:o,style:{width:"100%",height:"100%",cursor:a?"grabbing":"crosshair",display:"block"},onMouseDown:m,onMouseMove:u,onMouseUp:g,onMouseLeave:g})}function pT(t,e){const n=document.createElement("canvas");n.width=256,n.height=44;const i=n.getContext("2d");return i.fillStyle="rgba(0,0,0,0.60)",i.fillRect(0,0,256,44),i.strokeStyle=e||"#ffffff",i.lineWidth=2,i.strokeRect(1,1,254,42),i.fillStyle="#ffffffdd",i.font="bold 18px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(t,128,22),new ch(n)}function mT(t,e){const n=document.createElement("canvas");n.width=512,n.height=80;const i=n.getContext("2d");return i.fillStyle=e||"#00ddaa",i.globalAlpha=.92,i.beginPath(),i.roundRect(0,0,512,80,10),i.fill(),i.globalAlpha=1,i.fillStyle="#000000cc",i.font="bold 38px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,256,40),new ch(n)}function gT({container:t,boxes:e,selectedId:n,onMoveBox:i,onSelectBox:r,onPlaceBox:s}){const o=xe.useRef(null),a=xe.useRef(null),l=xe.useRef(null),c=xe.useRef(null),h=xe.useRef({}),f=xe.useRef(null),d=xe.useRef({});return xe.useEffect(()=>{d.current={boxes:e,container:t,onMoveBox:i,onSelectBox:r,onPlaceBox:s,selectedId:n}}),xe.useEffect(()=>{const p=o.current;if(!p)return;const y=p.clientWidth,v=p.clientHeight,m=new tT;m.background=new We(14477557),m.fog=new lh(14477557,4e-5);const u=new wn(50,y/v,10,1e5),g=new eT({antialias:!0});g.setSize(y,v),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.shadowMap.enabled=!0,g.shadowMap.type=G0,p.appendChild(g.domElement),a.current=m,l.current=u,c.current=g,m.add(new aT(16777215,1.2));const _=new oT(16777215,1.8);_.position.set(15e3,2e4,1e4),_.castShadow=!0,_.shadow.mapSize.set(2048,2048),_.shadow.camera.near=100,_.shadow.camera.far=5e4,_.shadow.camera.left=-15e3,_.shadow.camera.right=15e3,_.shadow.camera.top=15e3,_.shadow.camera.bottom=-15e3,m.add(_);const x=new nn(new Vi(6e4,6e4),new Su({color:13162728}));x.rotation.x=-Math.PI/2,x.position.y=-5,x.receiveShadow=!0,m.add(x),m.add(new cT(4e4,40,8952251,11189196));const N=new lT,R=new Xe,w=new Fi(new W(0,1,0),0),D=new W;let E=!1,S=0,P=0,C=.7,z=.55,$=2e4,G=!1,X=null,j=0,I=0,H=0,K=0,te=!1,he=null,Fe=0;const q=new W(6e3,1200,0),ie=()=>{u.position.set(q.x+$*Math.sin(z)*Math.cos(C),q.y+$*Math.cos(z),q.z+$*Math.sin(z)*Math.sin(C)),u.lookAt(q)};ie();const ge=()=>{const ce=[];return m.traverse(pe=>{pe.userData.isBoxMesh&&ce.push(pe)}),ce},me=ce=>{var pe,le;if(S=ce.clientX,P=ce.clientY,ce.altKey){ce.preventDefault();const be=d.current.selectedId,Ae=d.current.boxes.find(Se=>Se.id===be);Ae&&(he=be,Fe=Ae.z,te=!0,g.domElement.style.cursor="ns-resize");return}if(!ce.ctrlKey&&!ce.shiftKey){const be=g.domElement.getBoundingClientRect();R.x=(ce.clientX-be.left)/be.width*2-1,R.y=-((ce.clientY-be.top)/be.height)*2+1,N.setFromCamera(R,u);const Ae=N.intersectObjects(ge());if(Ae.length>0){const Se=Ae[0].object.userData.boxId;(le=(pe=d.current).onSelectBox)==null||le.call(pe,Se),N.ray.intersectPlane(w,D);const L=d.current.boxes.find(Y=>Y.id===Se),M=d.current.container;L&&(j=D.x-(L.x+L.length/2),I=D.z-(L.y-M.innerWidth/2+L.width/2),H=L.x,K=L.y,X=Se,G=!0,g.domElement.style.cursor="grabbing");return}}E=!0,g.domElement.style.cursor="grabbing"},Ie=ce=>{const pe=ce.clientX-S,le=ce.clientY-P;if(S=ce.clientX,P=ce.clientY,te&&he){const{boxes:be,container:Ae}=d.current,Se=be.find(Y=>Y.id===he);if(!Se)return;const L=Ae.innerHeight/p.clientHeight*2;Fe=Math.max(0,Math.min(Ae.innerHeight-Se.height,Fe-le*L));const M=h.current[he];if(M){const Y=Se.x+Se.length/2,ee=Se.y-Ae.innerWidth/2+Se.width/2;M.mesh.position.set(Y,Fe+Se.height/2,ee),M.edges.position.set(Y,Fe+Se.height/2,ee),M.label&&M.label.position.set(Y,Fe+Se.height+280,ee)}return}if(G&&X){const be=g.domElement.getBoundingClientRect();if(R.x=(ce.clientX-be.left)/be.width*2-1,R.y=-((ce.clientY-be.top)/be.height)*2+1,N.setFromCamera(R,u),!N.ray.intersectPlane(w,D))return;const{boxes:Ae,container:Se}=d.current,L=Ae.find(_e=>_e.id===X);if(!L)return;const M=D.x-j,Y=D.z-I;H=Math.max(0,Math.min(Se.innerLength-L.length,M-L.length/2)),K=Math.max(0,Math.min(Se.innerWidth-L.width,Y+Se.innerWidth/2-L.width/2));const ee=H+L.length/2,ne=L.z+L.height/2,re=K-Se.innerWidth/2+L.width/2,Pe=h.current[X];Pe&&(Pe.mesh.position.set(ee,ne,re),Pe.edges.position.set(ee,ne,re),Pe.label&&Pe.label.position.set(ee,L.z+L.height+280,re));return}if(E){if(ce.shiftKey){const be=$/p.clientHeight;q.y-=le*be}else if(ce.ctrlKey){const be=$/p.clientHeight;q.x-=Math.sin(C)*pe*be,q.z+=Math.cos(C)*pe*be,q.x-=Math.cos(C)*le*be,q.z-=Math.sin(C)*le*be}else C+=pe*.005,z=Math.max(.1,Math.min(Math.PI/2-.05,z-le*.005));ie()}},Oe=()=>{var ce,pe,le,be;te&&he&&((pe=(ce=d.current).onPlaceBox)==null||pe.call(ce,he,null,null,Fe)),G&&X&&((be=(le=d.current).onMoveBox)==null||be.call(le,X,H,K)),te=!1,he=null,G=!1,X=null,E=!1,g.domElement.style.cursor="grab"},Ve=ce=>{if(ce.preventDefault(),ce.ctrlKey){const pe=$/p.clientHeight;q.y-=ce.deltaY*pe*.5}else $=Math.max(4e3,Math.min(45e3,$+ce.deltaY*12));ie()},ae=ce=>{if(ce.target.tagName==="INPUT"||ce.target.tagName==="TEXTAREA")return;const pe=$*.05;ce.key==="ArrowLeft"&&(q.x-=Math.sin(C)*pe,q.z+=Math.cos(C)*pe),ce.key==="ArrowRight"&&(q.x+=Math.sin(C)*pe,q.z-=Math.cos(C)*pe),ce.key==="ArrowUp"&&(q.y+=pe*.4),ce.key==="ArrowDown"&&(q.y-=pe*.4),ie()};g.domElement.addEventListener("mousedown",me),g.domElement.addEventListener("mousemove",Ie),g.domElement.addEventListener("mouseup",Oe),g.domElement.addEventListener("mouseleave",Oe),g.domElement.addEventListener("wheel",Ve,{passive:!1}),g.domElement.style.cursor="grab",window.addEventListener("keydown",ae);const U=()=>{f.current=requestAnimationFrame(U),g.render(m,u)};U();const He=()=>{const ce=p.clientWidth,pe=p.clientHeight;u.aspect=ce/pe,u.updateProjectionMatrix(),g.setSize(ce,pe)};return window.addEventListener("resize",He),()=>{cancelAnimationFrame(f.current),window.removeEventListener("resize",He),window.removeEventListener("keydown",ae),g.domElement.removeEventListener("mousedown",me),g.domElement.removeEventListener("mousemove",Ie),g.domElement.removeEventListener("mouseup",Oe),g.domElement.removeEventListener("mouseleave",Oe),g.domElement.removeEventListener("wheel",Ve),p.contains(g.domElement)&&p.removeChild(g.domElement),g.dispose()}},[]),xe.useEffect(()=>{const p=a.current;if(!p)return;const y=[];p.traverse(w=>{w.userData.dynamic&&y.push(w)}),y.forEach(w=>p.remove(w)),h.current={};const v=new Qd(new Sm(new Nr(t.innerLength,t.innerHeight,t.innerWidth)),new Ms({color:65450}));v.position.set(t.innerLength/2,t.innerHeight/2,0),v.userData.dynamic=!0,p.add(v);const m=new nn(new Vi(t.innerLength,t.innerWidth),new Su({color:1718826,transparent:!0,opacity:.4,side:Hn}));m.rotation.x=-Math.PI/2,m.position.set(t.innerLength/2,2,0),m.receiveShadow=!0,m.userData.dynamic=!0,p.add(m);const u=new Su({color:8956620,transparent:!0,opacity:.1,side:Hn});[-1,1].forEach(w=>{const D=new nn(new Vi(t.innerLength,t.innerHeight),u);D.position.set(t.innerLength/2,t.innerHeight/2,w*t.innerWidth/2),D.userData.dynamic=!0,p.add(D)});const g=new nn(new Vi(t.innerWidth,t.innerHeight),u);g.rotation.y=Math.PI/2,g.position.set(0,t.innerHeight/2,0),g.userData.dynamic=!0,p.add(g);const _=w=>{const D=document.createElement("canvas");D.width=256,D.height=64;const E=D.getContext("2d");return E.fillStyle="rgba(0,20,40,0.82)",E.fillRect(0,0,256,64),E.fillStyle="#00ffaa",E.font="bold 28px monospace",E.textAlign="center",E.textBaseline="middle",E.fillText(w,128,32),new ch(D)},x=1e3;for(let w=0;w<=t.innerLength;w+=x){const D=new Ga(new xo({map:_(`${w}`),depthTest:!1}));D.scale.set(700,175,1),D.position.set(w,-250,t.innerWidth/2+200),D.userData.dynamic=!0,p.add(D);const E=[new W(w,-10,t.innerWidth/2),new W(w,-300,t.innerWidth/2)],S=new Zd(new _n().setFromPoints(E),new Ms({color:65450}));S.userData.dynamic=!0,p.add(S)}const N=500;for(let w=0;w<=t.innerHeight;w+=N){const D=new Ga(new xo({map:_(`${w}`),depthTest:!1}));D.scale.set(600,150,1),D.position.set(-450,w,t.innerWidth/2),D.userData.dynamic=!0,p.add(D);const E=[new W(-10,w,t.innerWidth/2),new W(-300,w,t.innerWidth/2)],S=new Zd(new _n().setFromPoints(E),new Ms({color:65450}));S.userData.dynamic=!0,p.add(S)}const R=new Set;for(let w=0;w<e.length;w++)for(let D=w+1;D<e.length;D++){const E=e[w],S=e[D];E.x<S.x+S.length&&E.x+E.length>S.x&&E.y<S.y+S.width&&E.y+E.width>S.y&&E.z<S.z+S.height&&E.z+E.height>S.z&&(R.add(E.id),R.add(S.id))}e.forEach(w=>{const E=R.has(w.id)?new We(8947848):new We(w.color),S=w.id===n,P=new Nr(w.length,w.height,w.width),C=new nn(P,new iT({color:E,specular:2236962,shininess:40,transparent:!0,opacity:S?1:.88}));C.position.set(w.x+w.length/2,w.z+w.height/2,w.y-t.innerWidth/2+w.width/2),C.castShadow=!0,C.userData.dynamic=!0,C.userData.isBoxMesh=!0,C.userData.boxId=w.id,p.add(C);const z=new Qd(new Sm(P),new Ms({color:S?16777215:0,transparent:!0,opacity:S?.9:.25}));z.position.copy(C.position),z.userData.dynamic=!0,p.add(z);const $=pT(`${w.length}×${w.width}×${w.height} mm`,w.color),G=new Ga(new xo({map:$,depthTest:!1})),X=Math.max(w.length*.65,700);if(G.scale.set(X,X*.172,1),G.position.set(w.x+w.length/2,w.z+w.height/2,w.y-t.innerWidth/2+w.width+180),G.userData.dynamic=!0,p.add(G),S){const j=mT(w.name||w.preset,w.color),I=new Ga(new xo({map:j,depthTest:!1})),H=Math.max(w.length,1200);I.scale.set(H,H*.156,1),I.position.set(w.x+w.length/2,w.z+w.height+380,w.y-t.innerWidth/2+w.width/2),I.userData.dynamic=!0,p.add(I)}h.current[w.id]={mesh:C,edges:z,label:G}})},[t,e,n]),F.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[F.jsx("div",{ref:o,style:{width:"100%",height:"100%"}}),F.jsx("div",{style:{position:"absolute",bottom:10,left:10,fontSize:10,color:"#6677aa",pointerEvents:"none",background:"rgba(0,0,0,0.4)",padding:"4px 9px",borderRadius:4,lineHeight:1.7},children:"🖱 Drag = หมุน  |  Ctrl+Drag = เลื่อน  |  Shift+Drag = บนล่าง  |  Scroll = ซูม  |  ↑↓←→ = เลื่อน  |  ลากกล่อง = จัดพื้น  |  Alt+ลาก(เลือกกล่องก่อน) = ยกขึ้นลง  |  ⬜ = ชนกัน"})]})}function _T({boxes:t,container:e,projectName:n,onClose:i}){const r=xe.useRef({}),s=xe.useMemo(()=>{const f=[...t].filter(p=>p.x>=-50).sort((p,y)=>p.x!==y.x?p.x-y.x:p.z!==y.z?p.z-y.z:p.y-y.y),d=Math.max(...f.filter(p=>p.z<100).map(p=>p.height),800);return f.map(p=>({...p,floor:p.z<100?1:p.z<d*1.2?2:3}))},[t]),o=xe.useMemo(()=>[...new Set(s.map(f=>f.floor))].sort(),[s]),a=xe.useCallback((f,d)=>{if(!f)return;const p=f.width,y=f.height,v=f.getContext("2d"),m=32,u=Math.min((p-m*2)/e.innerLength,(y-m*2-20)/e.innerWidth),g=m,_=m,x=e.innerLength*u,N=e.innerWidth*u;v.clearRect(0,0,p,y),v.fillStyle="#f5f7fa",v.fillRect(0,0,p,y),v.fillStyle="#dde4ee",v.fillRect(g,_,x,N),v.strokeStyle="#445",v.lineWidth=2,v.strokeRect(g,_,x,N),v.fillStyle="#44bb77",v.fillRect(g+x-3,_,6,N),v.font="10px sans-serif",v.fillStyle="#556",v.textAlign="left",v.textBaseline="alphabetic",v.fillText("ใน",g+2,_-6),v.textAlign="right",v.fillText("ประตู ▶",g+x,_-6),s.forEach((R,w)=>{if(R.floor!==d)return;const D=g+R.x*u,E=_+R.y*u,S=R.length*u,P=R.width*u;v.fillStyle=R.color+"bb",v.fillRect(D,E,S,P),v.strokeStyle=R.color,v.lineWidth=1.5,v.strokeRect(D,E,S,P);const C=Math.max(7,Math.min(12,Math.min(S,P)*.55));v.fillStyle="#111",v.font=`bold ${C}px sans-serif`,v.textAlign="center",v.textBaseline="middle",v.fillText(String(w+1),D+S/2,E+P/2)})},[s,e]);xe.useEffect(()=>{o.forEach(f=>a(r.current[f],f))},[o,a]);const l=()=>{const f=["#4488ff","#ff8833","#ff4455"],d=o.map(v=>{const m=r.current[v];return m?`<div class="floor-hdr">Layout ชั้น ${v}</div><img src="${m.toDataURL()}"/>`:""}).join(""),p=s.map((v,m)=>`
      <tr style="background:${m%2?"#f9f9f9":"#fff"}">
        <td style="text-align:center;font-weight:700;color:#224">${m+1}</td>
        <td style="font-weight:600">${v.name||v.preset}</td>
        <td style="font-family:monospace">${v.length}×${v.width}×${v.height}</td>
        <td style="text-align:right;font-family:monospace">${Math.round(v.x)}</td>
        <td style="text-align:right;font-family:monospace">${Math.round(v.y)}</td>
        <td style="text-align:right;font-family:monospace">${Math.round(v.z)}</td>
        <td style="text-align:center;font-weight:700;color:${f[v.floor-1]}">ชั้น ${v.floor}</td>
        <td style="text-align:right;font-family:monospace">${v.weight}</td>
      </tr>`).join(""),y=window.open("","_blank");y.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"/>
      <title>Loading Report — ${n}</title>
      <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:sans-serif;padding:20px;color:#222}
      h2{font-size:16px;margin-bottom:4px}.sub{font-size:11px;color:#666;margin-bottom:12px}
      .floor-hdr{font-size:12px;font-weight:700;color:#2a3a5a;margin:12px 0 4px;padding:3px 0;border-bottom:2px solid #2a3a5a}
      img{max-width:100%;border:1px solid #ccc;border-radius:4px;margin-bottom:4px}
      table{width:100%;border-collapse:collapse;font-size:12px;margin-top:14px}
      th{background:#2a3a5a;color:#fff;padding:5px 8px;text-align:left}
      td{padding:4px 8px;border-bottom:1px solid #eee}
      @media print{body{padding:10px}}</style></head><body>
      <h2>📦 Loading Report — ${n}</h2>
      <div class="sub">${e.name} | ${e.innerLength}×${e.innerWidth}×${e.innerHeight} mm | ${new Date().toLocaleDateString("th-TH")} | รวม ${s.length} รายการ (เรียงจากในสุด → ประตู)</div>
      ${d}
      <table><thead><tr>
        <th style="width:36px">ที่</th><th>ชื่อสินค้า</th><th>L×W×H (mm)</th>
        <th>X</th><th>Y</th><th>Z พื้น</th><th style="width:50px">ชั้น</th><th>น้ำหนัก kg</th>
      </tr></thead><tbody>${p}</tbody></table>
    </body></html>`),y.document.close(),y.addEventListener("load",()=>y.print())},c=["#4488ff","#ff8833","#ff4455"],h=["ชั้น 1 (พื้น)","ชั้น 2","ชั้น 3"];return F.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center"},onClick:i,children:F.jsxs("div",{style:{background:"#1a2235",borderRadius:10,border:"1px solid #3a4a66",width:"min(94vw,800px)",maxHeight:"90vh",overflow:"auto",padding:0},onClick:f=>f.stopPropagation(),children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px",borderBottom:"1px solid #2e3a52",position:"sticky",top:0,background:"#1a2235",zIndex:1},children:[F.jsxs("div",{style:{fontWeight:700,color:"#00ffaa",fontSize:14},children:["📋 Loading Report — ",n]}),F.jsxs("div",{style:{display:"flex",gap:6},children:[F.jsx("button",{style:{padding:"4px 12px",borderRadius:5,border:"1px solid #00ddaa",background:"#00ddaa22",color:"#00ddaa",cursor:"pointer",fontSize:11},onClick:l,children:"🖨 Print / PDF"}),F.jsx("button",{style:{padding:"4px 10px",borderRadius:5,border:"1px solid #555",background:"#2a3a52",color:"#aaa",cursor:"pointer",fontSize:11},onClick:i,children:"✕ ปิด"})]})]}),F.jsxs("div",{style:{padding:"12px 16px"},children:[F.jsxs("div",{style:{fontSize:10,color:"#7a8aaa",marginBottom:10},children:[e.name," | ",e.innerLength,"×",e.innerWidth,"×",e.innerHeight," mm | รวม ",s.length," รายการ — เรียงจากในสุด → ประตู"]}),o.map(f=>F.jsxs("div",{style:{marginBottom:12},children:[F.jsxs("div",{style:{fontSize:11,fontWeight:700,color:c[f-1],marginBottom:4,paddingBottom:3,borderBottom:`1px solid ${c[f-1]}44`},children:[h[f-1]," — ",s.filter(d=>d.floor===f).length," รายการ"]}),F.jsx("canvas",{ref:d=>{r.current[f]=d,a(d,f)},width:740,height:200,style:{width:"100%",borderRadius:6,border:`1px solid ${c[f-1]}55`,display:"block"}})]},f)),F.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:11,marginTop:4},children:[F.jsx("thead",{children:F.jsx("tr",{style:{background:"#0d1628"},children:["ที่","ชื่อสินค้า","L×W×H mm","X","Y","Z พื้น","ชั้น","น้ำหนัก kg"].map(f=>F.jsx("th",{style:{padding:"5px 7px",textAlign:"left",color:"#00ddaa",fontWeight:600,borderBottom:"1px solid #2e3a52",whiteSpace:"nowrap"},children:f},f))})}),F.jsx("tbody",{children:s.map((f,d)=>F.jsxs("tr",{style:{background:d%2?"#1a2235":"#1e2a42"},children:[F.jsx("td",{style:{padding:"4px 7px",fontWeight:700,color:"#00ffaa",textAlign:"center"},children:d+1}),F.jsx("td",{style:{padding:"4px 7px"},children:F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[F.jsx("div",{style:{width:8,height:8,borderRadius:2,background:f.color,flexShrink:0}}),F.jsx("span",{style:{fontWeight:600},children:f.name||f.preset})]})}),F.jsxs("td",{style:{padding:"4px 7px",fontFamily:"monospace",color:"#aab"},children:[f.length,"×",f.width,"×",f.height]}),F.jsx("td",{style:{padding:"4px 7px",fontFamily:"monospace",textAlign:"right"},children:Math.round(f.x)}),F.jsx("td",{style:{padding:"4px 7px",fontFamily:"monospace",textAlign:"right"},children:Math.round(f.y)}),F.jsx("td",{style:{padding:"4px 7px",fontFamily:"monospace",textAlign:"right"},children:Math.round(f.z)}),F.jsxs("td",{style:{padding:"4px 7px",textAlign:"center",fontWeight:700,color:c[f.floor-1]},children:["ชั้น ",f.floor]}),F.jsx("td",{style:{padding:"4px 7px",fontFamily:"monospace",textAlign:"right"},children:f.weight})]},f.id))})]})]})]})})}function vT(){const[t,e]=xe.useState([]),[n,i]=xe.useState(null),[r,s]=xe.useState("car"),[o,a]=xe.useState(!1),[l,c]=xe.useState("hilux_dc"),[h,f]=xe.useState({length:5300,width:1850,height:1800,weight:2e3,label:""}),[d,p]=xe.useState({...uT}),[y,v]=xe.useState(!1),[m,u]=xe.useState([]),[g,_]=xe.useState([]),[x,N]=xe.useState([]),[R,w]=xe.useState(null),[D,E]=xe.useState(!1),[S,P]=xe.useState("eu_pallet"),[C,z]=xe.useState({length:1e3,width:800,height:800,weight:50,label:""}),[$,G]=xe.useState(-1500),[X,j]=xe.useState(0),[I,H]=xe.useState(0),[K,te]=xe.useState("My Project"),[he,Fe]=xe.useState(!1),q=xe.useRef([]);q.current=t;const ie=xe.useRef(null),ge=xe.useRef(null),me=()=>{const T={projectName:K,container:d,vehicles:t,boxes:x},b=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),J=document.createElement("a");J.href=URL.createObjectURL(b),J.download=`${K.replace(/\s+/g,"_")||"project"}.clp.json`,J.click(),URL.revokeObjectURL(J.href)},Ie=T=>{const b=new FileReader;b.onload=J=>{try{const se=JSON.parse(J.target.result);se.container&&p(se.container),se.vehicles&&(e(se.vehicles),i(null)),se.boxes&&(N(se.boxes),w(null)),se.projectName&&te(se.projectName)}catch{alert("ไฟล์ไม่ถูกต้อง")}},b.readAsText(T)},Oe=()=>{var J;const T=(J=ie.current)==null?void 0:J.getCanvas();if(!T){alert("สลับไปหน้า Car Load ก่อน");return}const b=document.createElement("a");b.href=T.toDataURL("image/png"),b.download=`${K.replace(/\s+/g,"_")||"layout"}.png`,b.click()},Ve=()=>{var se;const T=(se=ie.current)==null?void 0:se.getCanvas();if(!T){alert("สลับไปหน้า Car Load ก่อน");return}const b=T.toDataURL("image/png"),J=window.open("","_blank");J.document.write(`<!DOCTYPE html><html><head><title>${K}</title><style>*{margin:0;padding:0}body{background:#fff}img{max-width:100%;display:block}h3{font-family:sans-serif;padding:8px 12px;font-size:13px}@media print{h3{margin:0}}</style></head><body><h3>${K} — ${d.name} | ${new Date().toLocaleDateString("th-TH")}</h3><img src="${b}"/></body></html>`),J.document.close(),J.addEventListener("load",()=>J.print())},ae=t.reduce((T,b)=>T+b.weight,0),U=ae>d.maxPayload,He=xe.useMemo(()=>{if(!t.length)return{lenUsed:0,lenLeft:d.innerLength};let T=0;return t.forEach(b=>{const J=b.x+(b.rotated?b.width:b.length);J>T&&(T=J)}),{lenUsed:T,lenLeft:d.innerLength-T}},[t,d]),ce=xe.useMemo(()=>{const T=new Set;for(let b=0;b<t.length;b++)for(let J=b+1;J<t.length;J++){const se=t[b],Ue=t[J],dt=se.rotated?se.width:se.length,Ye=se.rotated?se.length:se.width,kt=Ue.rotated?Ue.width:Ue.length,Ke=Ue.rotated?Ue.length:Ue.width;se.x<Ue.x+kt&&se.x+dt>Ue.x&&se.y<Ue.y+Ke&&se.y+Ye>Ue.y&&(T.add(se.id),T.add(Ue.id))}return t.forEach(b=>{const J=b.rotated?b.width:b.length,se=b.rotated?b.length:b.width;(b.x<0||b.y<0||b.x+J>d.innerLength||b.y+se>d.innerWidth)&&T.add(b.id)}),T},[t,d]),pe=()=>{const T=Cm.find(se=>se.id===l),b=l==="custom",J={id:Eu(),preset:b?h.label||"Custom":T.name,length:b?h.length:T.length,width:b?h.width:T.width,height:b?h.height:T.height,weight:b?h.weight:T.weight,cabRatio:b?.5:T.cabRatio,x:200,y:Math.round((d.innerWidth-(b?h.width:T.width))/2),rotated:!1,rearLifted:!1,color:ls[t.length%ls.length],sideX:200,sideY:0,sideAngle:0,sideImage:null,removeBg:!0,flipX:!1,imgRealLength:b?h.length:T.length,imgRealHeight:b?h.height:T.height};be(),e(se=>[...se,J]),i(J.id),a(!1)},le=(T,b)=>{const J=new FileReader;J.onload=se=>Le(T,{sideImage:se.target.result}),J.readAsDataURL(b)},be=xe.useCallback(()=>{u(T=>[...T.slice(-49),q.current]),_([])},[]),Ae=xe.useCallback(()=>{u(T=>{if(!T.length)return T;const b=T[T.length-1];return _(J=>[q.current,...J.slice(0,49)]),e(b),T.slice(0,-1)})},[]),Se=xe.useCallback(()=>{_(T=>{if(!T.length)return T;const b=T[0];return u(J=>[...J.slice(-49),q.current]),e(b),T.slice(1)})},[]);xe.useEffect(()=>{const T=b=>{b.target.tagName==="INPUT"||b.target.tagName==="TEXTAREA"||(b.ctrlKey&&!b.shiftKey&&b.key==="z"&&(b.preventDefault(),Ae()),b.ctrlKey&&(b.key==="y"||b.shiftKey&&b.key==="z")&&(b.preventDefault(),Se()))};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[Ae,Se]);const L=xe.useMemo(()=>{const T=new Set;for(let b=0;b<x.length;b++)for(let J=b+1;J<x.length;J++){const se=x[b],Ue=x[J];se.x<Ue.x+Ue.length&&se.x+se.length>Ue.x&&se.y<Ue.y+Ue.width&&se.y+se.width>Ue.y&&(T.add(se.id),T.add(Ue.id))}return x.forEach(b=>{(b.x<0||b.y<0||b.x+b.length>d.innerLength||b.y+b.width>d.innerWidth)&&T.add(b.id)}),T},[x,d]),M=x.reduce((T,b)=>T+b.weight,0),Y=d.innerLength*d.innerWidth*d.innerHeight,ee=x.reduce((T,b)=>T+b.length*b.width*b.height,0),ne=Math.round(ee/Y*100),re=x.filter(T=>T.x>=0&&T.x+T.length<=d.innerLength&&T.y>=0&&T.y+T.width<=d.innerWidth).length,Pe=()=>{const T=Rm.find(Ue=>Ue.id===S),b=S==="box_custom",J=b?C.width:T.width;be();const se={id:Eu(),preset:b?C.label||"Custom":T.name,name:b?C.label||"Custom":T.name,length:b?C.length:T.length,width:J,height:b?C.height:T.height,weight:b?C.weight:T.weight,x:$,y:Math.max(0,Math.min(d.innerWidth-J,X)),z:Math.max(0,I),color:ls[x.length%ls.length]};N(Ue=>[...Ue,se]),w(se.id),E(!1)},_e=xe.useRef(null),ye=(T,b)=>N(J=>J.map(se=>se.id===T?{...se,...b}:se)),Ge=(T,b,J)=>ye(T,{x:Math.max(0,b),y:Math.max(0,J)}),ue=(T,b)=>{const J=[...T].sort((Ke,zt)=>zt.length*zt.width-Ke.length*Ke.width),se=[];let Ue=0,dt=0,Ye=0;const kt=[];for(const Ke of J)Ue+Ke.length>b.innerLength&&(Ue=0,dt+=Ye,Ye=0),dt+Ke.width<=b.innerWidth?(se.push({...Ke,x:Ue,y:dt,z:0}),Ue+=Ke.length,Ye=Math.max(Ye,Ke.width)):kt.push(Ke);for(const Ke of kt){let zt=null;for(const ft of se){const qn=ft.x,Kn=ft.y,Dn=ft.z+ft.height;if(qn+Ke.length>b.innerLength||Kn+Ke.width>b.innerWidth||Dn+Ke.height>b.innerHeight)continue;!se.some(jt=>{const Ti=Math.min(qn+Ke.length,jt.x+jt.length)-Math.max(qn,jt.x),cr=Math.min(Kn+Ke.width,jt.y+jt.width)-Math.max(Kn,jt.y),kr=Math.min(Dn+Ke.height,jt.z+jt.height)-Math.max(Dn,jt.z);return Ti>1&&cr>1&&kr>1})&&(!zt||Dn<zt.tz)&&(zt={tx:qn,ty:Kn,tz:Dn})}se.push(zt?{...Ke,x:zt.tx,y:zt.ty,z:zt.tz}:{...Ke})}return se},Ee=()=>{be(),N(T=>ue(T,d))},Qe=T=>{const b=new FileReader;b.onload=J=>{var zt;const Ye=J.target.result.replace(/^\uFEFF/,"").replace(/(\d)([A-Za-z])/g,`$1
$2`).split(/\r\n|\r|\n/).filter(ft=>ft.trim()).map(ft=>ft.split(/[,;\t]/)),kt=isNaN(Number((zt=Ye[0])==null?void 0:zt[1]))?1:0,Ke=[];if(Ye.slice(kt).forEach((ft,qn)=>{var cr;const Kn=((cr=ft[0])==null?void 0:cr.trim())||`Item ${qn+1}`,Dn=Math.round(Number(ft[1])||500),wi=Math.round(Number(ft[2])||400),jt=Math.round(Number(ft[3])||400),Ti=Math.round(Number(ft[4])||0);Dn>0&&wi>0&&jt>0&&Ke.push({id:Eu(),preset:Kn,name:Kn,length:Dn,width:wi,height:jt,weight:Ti,x:$,y:X,z:I+Ke.reduce((kr,mc)=>kr+mc.height,0),color:ls[(x.length+Ke.length)%ls.length]})}),!Ke.length){alert("ไม่พบข้อมูล — format: ชื่อ,ยาว,กว้าง,สูง[,น้ำหนัก]");return}be(),N(ft=>[...ft,...Ke])},b.readAsText(T,"UTF-8")},ke=(T,b,J,se)=>{const Ue={};b!=null&&(Ue.x=Math.max(0,b)),J!=null&&(Ue.y=Math.max(0,J)),se!=null&&(Ue.z=Math.max(0,se)),ye(T,Ue)},Te=T=>{be(),N(b=>b.filter(J=>J.id!==T)),R===T&&w(null)},Le=(T,b)=>e(J=>J.map(se=>se.id===T?{...se,...b}:se)),je=T=>{be(),e(b=>b.filter(J=>J.id!==T)),n===T&&i(null)},at=()=>{be();const T=[...t].sort((J,se)=>se.length-J.length);let b=100;e(T.map(J=>{const se={...J,x:b,y:Math.round((d.innerWidth-(J.rotated?J.length:J.width))/2)};return b+=(J.rotated?J.width:J.length)+200,se}))},k=He.lenUsed/d.innerLength*100,de=ae/d.maxPayload*100,O={app:{fontFamily:"'Segoe UI','Noto Sans Thai',sans-serif",background:"#1c2333",color:"#e8eaf5",height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden",fontSize:13},hdr:{background:"linear-gradient(135deg,#1e3a5f,#2d5a8e)",padding:"8px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #00ddaa55",flexShrink:0},body:{display:"flex",flex:1,overflow:"hidden"},side:{width:290,background:"#212a3e",borderRight:"1px solid #2e3a52",display:"flex",flexDirection:"column",overflow:"hidden",flexShrink:0},sec:{padding:"10px 12px",borderBottom:"1px solid #2e3a52"},lbl:{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#00ddaa",marginBottom:6},vp:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},tb:{display:"flex",gap:5,padding:"6px 10px",background:"#1c2840",borderBottom:"1px solid #2e3a52",alignItems:"center",flexShrink:0},va:{flex:1,position:"relative",overflow:"hidden"},btn:{padding:"5px 10px",borderRadius:5,border:"1px solid #3a4a66",background:"#263048",color:"#c8cedf",cursor:"pointer",fontSize:11,fontWeight:500},btnA:{background:"#00ddaa22",borderColor:"#00ddaa",color:"#00ddaa"},btnP:{background:"linear-gradient(135deg,#00ddaa,#00aa88)",border:"none",color:"#0a1a14",fontWeight:700},btnD:{background:"#ff44441a",borderColor:"#ff6666",color:"#ff8888"},inp:{width:"100%",padding:"5px 7px",borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",fontSize:12,boxSizing:"border-box"},sel:{width:"100%",padding:"5px 7px",borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",fontSize:12,boxSizing:"border-box"},card:(T,b)=>({padding:"7px 9px",borderRadius:6,border:`1px solid ${b?"#ff6666":T?"#00ddaa":"#2e3a52"}`,background:T?"#00ddaa15":"#1e2a40",cursor:"pointer",marginBottom:5}),bar:{height:4,borderRadius:2,background:"#2e3a52",marginTop:3,overflow:"hidden"},fill:(T,b)=>({height:"100%",width:`${Math.min(100,T)}%`,background:T>95?"#ff5555":b,borderRadius:2,transition:"width .3s"}),badge:T=>({display:"inline-block",padding:"1px 5px",borderRadius:3,fontSize:9,fontWeight:600,background:T+"22",color:T,marginLeft:5}),status:{padding:"5px 12px",background:"#1a2235",borderTop:"1px solid #2e3a52",display:"flex",justifyContent:"space-between",fontSize:10,color:"#7a8aaa",flexShrink:0}};return F.jsxs("div",{style:O.app,children:[F.jsxs("div",{style:O.hdr,children:[F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[F.jsx("div",{style:{width:32,height:32,background:"linear-gradient(135deg,#00ffaa,#00aa77)",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#0a0a18"},children:"📦"}),F.jsxs("div",{children:[F.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#00ffaa"},children:"CONTAINER LOADING PLANNER"}),F.jsx("input",{value:K,onChange:T=>te(T.target.value),style:{background:"transparent",border:"none",borderBottom:"1px solid #3a4a66",color:"#aab",fontSize:10,outline:"none",width:180,padding:"1px 2px"},placeholder:"ชื่อ Project..."})]})]}),F.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[F.jsx("button",{style:O.btn,onClick:me,title:"Export โปรเจกต์เป็น JSON",children:"💾 Export"}),F.jsxs("label",{style:{...O.btn,cursor:"pointer"},title:"Import โปรเจกต์จาก JSON",children:["📂 Import",F.jsx("input",{ref:ge,type:"file",accept:".json,.clp.json",style:{display:"none"},onChange:T=>{T.target.files[0]&&(Ie(T.target.files[0]),T.target.value="")}})]}),F.jsx("button",{style:O.btn,onClick:Oe,title:"ดาวน์โหลด PNG (Car Load view)",children:"⬇ PNG"}),F.jsx("button",{style:O.btn,onClick:Ve,title:"Print / PDF (Car Load view)",children:"🖨 Print"}),F.jsx("button",{style:O.btn,onClick:at,disabled:!t.length,children:"⚡ Auto"})]})]}),F.jsxs("div",{style:O.body,children:[F.jsxs("div",{style:O.side,children:[F.jsxs("div",{style:O.sec,children:[F.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:F.jsxs("div",{onClick:()=>v(!y),style:{...O.lbl,cursor:"pointer",marginBottom:0},children:["📦 Container ",y?"▲":"▼"]})}),F.jsx("div",{style:{display:"flex",justifyContent:"space-between",padding:"2px 0"},children:F.jsx("span",{style:{color:"#888",fontSize:11},children:d.name})}),F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"2px 0"},children:[F.jsx("span",{style:{color:"#888",fontSize:10},children:"L×W×H"}),F.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:10},children:[d.innerLength,"×",d.innerWidth,"×",d.innerHeight]})]}),y&&F.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:5},children:[F.jsx("select",{style:O.sel,onChange:T=>{const b=Am.find(J=>J.name===T.target.value);b&&p({...b})},children:Am.map(T=>F.jsx("option",{value:T.name,children:T.name},T.name))}),F.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[["ยาว (mm)","innerLength"],["กว้าง (mm)","innerWidth"],["สูง (mm)","innerHeight"],["Door H (mm)","doorHeight"],["Door W (mm)","doorWidth"],["Max kg","maxPayload"]].map(([T,b])=>F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:T}),F.jsx("input",{style:O.inp,type:"number",value:d[b],onChange:J=>p(se=>({...se,[b]:Number(J.target.value),name:"Custom"}))})]},b))})]})]}),F.jsxs("div",{style:O.sec,children:[F.jsx("div",{style:O.lbl,children:"📐 Clearance & Weight"}),F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0"},children:[F.jsx("span",{style:{color:"#888",fontSize:11},children:"ใช้ความยาว"}),F.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11},children:[Math.round(He.lenUsed)," mm (",Math.round(k),"%)"]})]}),F.jsx("div",{style:O.bar,children:F.jsx("div",{style:O.fill(k,"#00ffaa")})}),F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",marginTop:4},children:[F.jsx("span",{style:{color:"#888",fontSize:11},children:"เหลือ"}),F.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11,color:He.lenLeft<500?"#ff6666":"#00ffaa"},children:[Math.round(He.lenLeft)," mm"]})]}),F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",marginTop:6},children:[F.jsx("span",{style:{color:"#888",fontSize:11},children:"น้ำหนักรวม"}),F.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11,color:U?"#ff4444":"#ddd"},children:[ae.toLocaleString()," / ",d.maxPayload.toLocaleString()," kg"]})]}),F.jsx("div",{style:O.bar,children:F.jsx("div",{style:O.fill(de,U?"#ff4444":"#F59E0B")})}),U&&F.jsxs("div",{style:{color:"#ff4444",fontSize:10,marginTop:3,fontWeight:600},children:["⚠️ เกิน ",(ae-d.maxPayload).toLocaleString()," kg"]}),ce.size>0&&F.jsxs("div",{style:{color:"#ff4444",fontSize:10,marginTop:4,fontWeight:600},children:["⚠️ ชนกัน/เกินขอบ ",ce.size," คัน"]})]}),r==="car"?F.jsxs("div",{style:{...O.sec,flex:1,overflow:"auto"},children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[F.jsxs("div",{style:O.lbl,children:["🚗 รถในตู้ (",t.length,")"]}),F.jsx("button",{style:{...O.btn,...O.btnP,padding:"3px 8px"},onClick:()=>a(!o),children:"+ เพิ่มรถ"})]}),o&&F.jsxs("div",{style:{background:"#161638",borderRadius:7,padding:9,marginBottom:8,border:"1px solid #00ffaa33"},children:[F.jsx("select",{style:O.sel,value:l,onChange:T=>c(T.target.value),children:Cm.map(T=>F.jsxs("option",{value:T.id,children:[T.name," ",T.id!=="custom"?`(${T.length}×${T.width})`:""]},T.id))}),l==="custom"&&F.jsx("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[["ชื่อ","label","text"],["น้ำหนัก kg","weight","number"],["ยาว mm","length","number"],["กว้าง mm","width","number"],["สูง mm","height","number"]].map(([T,b,J])=>F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:T}),F.jsx("input",{style:O.inp,type:J,value:h[b],onChange:se=>f({...h,[b]:J==="number"?Number(se.target.value):se.target.value})})]},b))}),F.jsx("button",{style:{...O.btn,...O.btnP,width:"100%",marginTop:7},onClick:pe,children:"✓ เพิ่มรถเข้าตู้"})]}),t.map(T=>F.jsxs("div",{style:O.card(T.id===n,ce.has(T.id)),onClick:()=>i(T.id===n?null:T.id),children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[F.jsx("div",{style:{width:10,height:10,borderRadius:2,background:T.color}}),F.jsx("span",{style:{fontWeight:600,fontSize:11},children:T.preset})]}),F.jsx("button",{style:{...O.btn,...O.btnD,padding:"1px 5px",fontSize:10},onClick:b=>{b.stopPropagation(),je(T.id)},children:"✕"})]}),F.jsxs("div",{style:{fontSize:10,color:"#777",marginTop:3},children:[T.length,"×",T.width,"×",T.height," mm • ",T.weight," kg",T.rearLifted&&F.jsx("span",{style:O.badge("#F59E0B"),children:"ยกล้อหลัง"}),T.rotated&&F.jsx("span",{style:O.badge("#8B5CF6"),children:"หมุน 90°"})]}),T.id===n&&F.jsxs("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:5},children:[F.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:"X (mm)"}),F.jsx("input",{style:O.inp,type:"number",value:T.x,onChange:b=>Le(T.id,{x:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:"Y (mm)"}),F.jsx("input",{style:O.inp,type:"number",value:T.y,onChange:b=>Le(T.id,{y:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]})]}),F.jsxs("div",{style:{display:"flex",gap:4},children:[F.jsx("button",{style:{...O.btn,flex:1,...T.rearLifted?O.btnA:{},fontSize:10,padding:3},onClick:b=>{b.stopPropagation(),Le(T.id,{rearLifted:!T.rearLifted})},children:"⬆ ยกล้อหลัง"}),F.jsx("button",{style:{...O.btn,flex:1,...T.rotated?O.btnA:{},fontSize:10,padding:3},onClick:b=>{b.stopPropagation(),Le(T.id,{rotated:!T.rotated})},children:"🔄 หมุน 90°"})]}),F.jsx("button",{style:{...O.btn,fontSize:10,padding:3},onClick:b=>{b.stopPropagation(),Le(T.id,{x:Math.round(T.x/50)*50,y:Math.round(T.y/50)*50})},children:"📐 Snap 50mm"}),F.jsxs("div",{style:{borderTop:"1px solid #252540",paddingTop:5},children:[F.jsx("div",{style:{fontSize:9,color:"#00ffaa88",marginBottom:4,fontWeight:600,letterSpacing:1},children:"SIDE ELEV"}),F.jsxs("div",{style:{display:"flex",gap:4,marginBottom:4},children:[F.jsxs("label",{style:{...O.btn,flex:1,textAlign:"center",cursor:"pointer",fontSize:10,padding:"4px 0"},onClick:b=>b.stopPropagation(),children:["🖼 ",T.sideImage?"เปลี่ยนรูป":"Upload รูป",F.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:b=>{b.target.files[0]&&le(T.id,b.target.files[0])},onClick:b=>b.stopPropagation()})]}),F.jsx("button",{style:{...O.btn,fontSize:10,padding:"4px 6px",...T.removeBg?O.btnA:{}},onClick:b=>{b.stopPropagation(),Le(T.id,{removeBg:!T.removeBg})},title:"ลบพื้นหลังสีขาว",children:"✂ BG"}),F.jsx("button",{style:{...O.btn,fontSize:10,padding:"4px 6px",...T.flipX?O.btnA:{}},onClick:b=>{b.stopPropagation(),Le(T.id,{flipX:!T.flipX})},title:"พลิกภาพซ้าย-ขวา",children:"⇄ Flip"})]}),F.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:"Side X"}),F.jsx("input",{style:O.inp,type:"number",value:T.sideX??200,onChange:b=>Le(T.id,{sideX:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:"Floor Y"}),F.jsx("input",{style:O.inp,type:"number",value:T.sideY??0,onChange:b=>Le(T.id,{sideY:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:"องศา°"}),F.jsx("input",{style:O.inp,type:"number",step:"0.5",value:T.sideAngle??0,onChange:b=>Le(T.id,{sideAngle:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]})]}),F.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginTop:5},children:[F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ความยาวรูป (mm)"}),F.jsx("input",{style:O.inp,type:"number",step:"1",value:T.imgRealLength??T.length,onChange:b=>Le(T.id,{imgRealLength:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ความสูงรูป (mm)"}),F.jsx("input",{style:O.inp,type:"number",step:"1",value:T.imgRealHeight??T.height,onChange:b=>Le(T.id,{imgRealHeight:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]})]}),F.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}})]})]})]},T.id)),!t.length&&F.jsx("div",{style:{textAlign:"center",color:"#444",padding:16,fontSize:12},children:'กด "+ เพิ่มรถ" เพื่อเริ่มวางแผน'})]}):F.jsxs("div",{style:{...O.sec,flex:1,overflow:"auto"},children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[F.jsxs("div",{style:O.lbl,children:["📦 สินค้า (",x.length,") • ",M.toLocaleString()," kg"]}),F.jsx("button",{style:{...O.btn,...O.btnP,padding:"3px 8px"},onClick:()=>E(!D),children:"+ เพิ่ม"})]}),F.jsxs("div",{style:{fontSize:10,color:"#7a8aaa",marginBottom:5,display:"flex",justifyContent:"space-between"},children:[F.jsxs("span",{children:["ในตู้: ",re,"/",x.length," ชิ้น"]}),F.jsxs("span",{style:{color:ne>100?"#ff5555":ne>80?"#F59E0B":"#00ddaa"},children:["Vol: ",ne,"%"]})]}),F.jsx("div",{style:O.bar,children:F.jsx("div",{style:O.fill(Math.min(ne,100),ne>100?"#ff5555":ne>80?"#F59E0B":"#00ddaa")})}),F.jsxs("div",{style:{display:"flex",gap:4,marginBottom:6},children:[F.jsxs("label",{style:{...O.btn,flex:1,textAlign:"center",cursor:"pointer",fontSize:10,padding:"3px 0"},children:["📂 Import CSV",F.jsx("input",{ref:_e,type:"file",accept:".csv,.txt,.tsv",style:{display:"none"},onChange:T=>{T.target.files[0]&&(Qe(T.target.files[0]),T.target.value="")}})]}),F.jsx("button",{style:{...O.btn,flex:1,fontSize:10,padding:"3px 0"},onClick:Ee,disabled:!x.length,children:"⚡ Auto Pack"}),F.jsx("button",{style:{...O.btn,flex:1,fontSize:10,padding:"3px 0"},onClick:()=>Fe(!0),disabled:!x.length,children:"📋 รายงาน"})]}),D&&F.jsxs("div",{style:{background:"#161638",borderRadius:7,padding:9,marginBottom:8,border:"1px solid #00ffaa33"},children:[F.jsx("select",{style:O.sel,value:S,onChange:T=>P(T.target.value),children:Rm.map(T=>F.jsxs("option",{value:T.id,children:[T.name," ",T.id!=="box_custom"?`(${T.length}×${T.width}×${T.height}mm)`:""]},T.id))}),S==="box_custom"&&F.jsx("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[["ชื่อ","label","text"],["ยาว mm","length","number"],["กว้าง mm","width","number"],["สูง mm","height","number"],["น้ำหนัก kg","weight","number"]].map(([T,b,J])=>F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:T}),F.jsx("input",{style:O.inp,type:J,value:C[b],onChange:se=>z({...C,[b]:J==="number"?Number(se.target.value):se.target.value})})]},b))}),F.jsxs("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"จุดเกิด X (mm)"}),F.jsx("input",{style:O.inp,type:"number",value:$,onChange:T=>G(Number(T.target.value))}),F.jsx("div",{style:{fontSize:9,color:"#555",marginTop:1},children:"ลบ = นอกตู้"})]}),F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"จุดเกิด Y (mm)"}),F.jsx("input",{style:O.inp,type:"number",value:X,onChange:T=>j(Number(T.target.value))}),F.jsx("div",{style:{fontSize:9,color:"#555",marginTop:1},children:"0 = ผนังซ้าย"})]}),F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"จุดเกิด Z (mm)"}),F.jsx("input",{style:O.inp,type:"number",value:I,onChange:T=>H(Number(T.target.value))}),F.jsx("div",{style:{fontSize:9,color:"#555",marginTop:1},children:"0 = พื้น"})]})]}),F.jsx("button",{style:{...O.btn,...O.btnP,width:"100%",marginTop:7},onClick:Pe,children:"✓ เพิ่มสินค้า"})]}),x.map(T=>F.jsxs("div",{style:O.card(T.id===R,L.has(T.id)),onClick:()=>w(T.id===R?null:T.id),children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[F.jsx("div",{style:{width:10,height:10,borderRadius:2,background:T.color}}),F.jsx("span",{style:{fontWeight:600,fontSize:11},children:T.name||T.preset})]}),F.jsx("button",{style:{...O.btn,...O.btnD,padding:"1px 5px",fontSize:10},onClick:b=>{b.stopPropagation(),Te(T.id)},children:"✕"})]}),F.jsxs("div",{style:{fontSize:10,color:"#777",marginTop:3},children:[T.length,"×",T.width,"×",T.height," mm • ",T.weight," kg"]}),T.id===R&&F.jsxs("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:4},children:[F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ชื่อสินค้า"}),F.jsx("input",{style:O.inp,value:T.name||T.preset,onChange:b=>ye(T.id,{name:b.target.value}),onClick:b=>b.stopPropagation(),placeholder:"ชื่อสินค้า..."})]}),F.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:"X (mm)"}),F.jsx("input",{style:O.inp,type:"number",value:T.x,onChange:b=>ye(T.id,{x:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:"Y (mm)"}),F.jsx("input",{style:O.inp,type:"number",value:T.y,onChange:b=>ye(T.id,{y:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),F.jsxs("div",{children:[F.jsx("label",{style:{fontSize:9,color:"#777"},children:"Z พื้น (mm)"}),F.jsx("input",{style:O.inp,type:"number",value:T.z,onChange:b=>ye(T.id,{z:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]})]})]})]},T.id)),!x.length&&F.jsx("div",{style:{textAlign:"center",color:"#444",padding:16,fontSize:12},children:'กด "+ เพิ่ม" เพื่อเพิ่มสินค้า'})]})]}),F.jsxs("div",{style:O.vp,children:[F.jsxs("div",{style:O.tb,children:[F.jsx("span",{style:{fontSize:10,color:"#555",marginRight:3},children:"VIEW:"}),[["car","🚗 Car Load"],["boxtop","📦 Box Top"],["box3d","📦 Box 3D"]].map(([T,b])=>F.jsx("button",{style:{...O.btn,...r===T?O.btnA:{},padding:"3px 9px"},onClick:()=>s(T),children:b},T)),F.jsx("div",{style:{flex:1}}),F.jsx("button",{style:{...O.btn,padding:"3px 8px",opacity:m.length?1:.35},onClick:Ae,disabled:!m.length,title:"Ctrl+Z",children:"↩ Undo"}),F.jsx("button",{style:{...O.btn,padding:"3px 8px",opacity:g.length?1:.35},onClick:Se,disabled:!g.length,title:"Ctrl+Y",children:"↪ Redo"})]}),F.jsxs("div",{style:O.va,children:[r==="car"&&F.jsx(fT,{ref:ie,container:d,vehicles:t,selectedId:n,onSelectVehicle:i,onUpdateVehicle:Le}),r==="boxtop"&&F.jsx(hT,{container:d,boxes:x,selectedId:R,onSelectBox:w,onMoveBox:Ge,collisions:L}),r==="box3d"&&F.jsx(gT,{container:d,boxes:x,selectedId:R,onMoveBox:Ge,onSelectBox:w,onPlaceBox:ke})]})]})]}),F.jsxs("div",{style:O.status,children:[F.jsxs("span",{children:[d.name," | ",d.innerLength,"×",d.innerWidth,"×",d.innerHeight," mm"]}),r==="car"?F.jsxs("span",{children:["Vehicles: ",t.length," | ",ae.toLocaleString()," kg | Length: ",Math.round(k),"%"]}):F.jsxs("span",{children:["Boxes: ",x.length," | ",M.toLocaleString()," kg ",M>d.maxPayload?`⚠️ +${(M-d.maxPayload).toLocaleString()}kg`:""]})]}),he&&F.jsx(_T,{boxes:x,container:d,projectName:K,onClose:()=>Fe(!1)})]})}H0(document.getElementById("root")).render(F.jsx(xe.StrictMode,{children:F.jsx(vT,{})}));
