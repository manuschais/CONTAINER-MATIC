(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Cm={exports:{}},zl={},Rm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),w_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),A_=Symbol.for("react.strict_mode"),C_=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),P_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),D_=Symbol.for("react.memo"),I_=Symbol.for("react.lazy"),lh=Symbol.iterator;function U_(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,Lm={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||bm}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dm(){}Dm.prototype=Ns.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||bm}var $f=Yf.prototype=new Dm;$f.constructor=Yf;Pm($f,Ns.prototype);$f.isPureReactComponent=!0;var uh=Array.isArray,Im=Object.prototype.hasOwnProperty,qf={current:null},Um={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Im.call(e,i)&&!Um.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fo,type:t,key:s,ref:o,props:r,_owner:qf.current}}function N_(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function F_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ch=/\/+/g;function fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F_(""+t.key):e.toString(36)}function Ha(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case w_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+fu(o,0):i,uh(r)?(n="",t!=null&&(n=t.replace(ch,"$&/")+"/"),Ha(r,e,n,"",function(u){return u})):r!=null&&(Kf(r)&&(r=N_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ch,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",uh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+fu(s,a);o+=Ha(s,e,n,l,r)}else if(l=U_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+fu(s,a++),o+=Ha(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jo(t,e,n){if(t==null)return t;var i=[],r=0;return Ha(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Va={transition:null},k_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Va,ReactCurrentOwner:qf};function Fm(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!Kf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ns;Ye.Fragment=T_;Ye.Profiler=C_;Ye.PureComponent=Yf;Ye.StrictMode=A_;Ye.Suspense=L_;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;Ye.act=Fm;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Im.call(e,l)&&!Um.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Fo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:b_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:R_,_context:t},t.Consumer=t};Ye.createElement=Nm;Ye.createFactory=function(t){var e=Nm.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:P_,render:t}};Ye.isValidElement=Kf;Ye.lazy=function(t){return{$$typeof:I_,_payload:{_status:-1,_result:t},_init:O_}};Ye.memo=function(t,e){return{$$typeof:D_,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Va.transition;Va.transition={};try{t()}finally{Va.transition=e}};Ye.unstable_act=Fm;Ye.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Ye.useContext=function(t){return Yt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Ye.useId=function(){return Yt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Ye.useRef=function(t){return Yt.current.useRef(t)};Ye.useState=function(t){return Yt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return Yt.current.useTransition()};Ye.version="18.3.1";Rm.exports=Ye;var Ee=Rm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=Ee,z_=Symbol.for("react.element"),H_=Symbol.for("react.fragment"),V_=Object.prototype.hasOwnProperty,G_=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W_={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)V_.call(e,i)&&!W_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:z_,type:t,key:s,ref:o,props:r,_owner:G_.current}}zl.Fragment=H_;zl.jsx=Om;zl.jsxs=Om;Cm.exports=zl;var G=Cm.exports,km={exports:{}},hn={},Bm={exports:{}},zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,V){var $=U.length;U.push(V);e:for(;0<$;){var ne=$-1>>>1,me=U[ne];if(0<r(me,V))U[ne]=V,U[$]=me,$=ne;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var V=U[0],$=U.pop();if($!==V){U[0]=$;e:for(var ne=0,me=U.length,Ie=me>>>1;ne<Ie;){var Q=2*(ne+1)-1,re=U[Q],de=Q+1,pe=U[de];if(0>r(re,$))de<me&&0>r(pe,re)?(U[ne]=pe,U[de]=$,ne=de):(U[ne]=re,U[Q]=$,ne=Q);else if(de<me&&0>r(pe,$))U[ne]=pe,U[de]=$,ne=de;else break e}}return V}function r(U,V){var $=U.sortIndex-V.sortIndex;return $!==0?$:U.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,p=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=U)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function v(U){if(y=!1,g(U),!x)if(n(l)!==null)x=!0,Y(P);else{var V=n(u);V!==null&&j(v,V.startTime-U)}}function P(U,V){x=!1,y&&(y=!1,c(N),N=-1),p=!0;var $=f;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||U&&!D());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var me=ne(h.expirationTime<=V);V=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&i(l),g(V)}else i(l);h=n(l)}if(h!==null)var Ie=!0;else{var Q=n(u);Q!==null&&j(v,Q.startTime-V),Ie=!1}return Ie}finally{h=null,f=$,p=!1}}var C=!1,A=null,N=-1,E=5,S=-1;function D(){return!(t.unstable_now()-S<E)}function R(){if(A!==null){var U=t.unstable_now();S=U;var V=!0;try{V=A(!0,U)}finally{V?O():(C=!1,A=null)}}else C=!1}var O;if(typeof _=="function")O=function(){_(R)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,X=q.port2;q.port1.onmessage=R,O=function(){X.postMessage(null)}}else O=function(){m(R,0)};function Y(U){A=U,C||(C=!0,O())}function j(U,V){N=m(function(){U(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,Y(P))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var $=f;f=V;try{return U()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var $=f;f=U;try{return V()}finally{f=$}},t.unstable_scheduleCallback=function(U,V,$){var ne=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,U){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=$+me,U={id:d++,callback:V,priorityLevel:U,startTime:$,expirationTime:me,sortIndex:-1},$>ne?(U.sortIndex=$,e(u,U),n(l)===null&&U===n(u)&&(y?(c(N),N=-1):y=!0,j(v,$-ne))):(U.sortIndex=me,e(l,U),x||p||(x=!0,Y(P))),U},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(U){var V=f;return function(){var $=f;f=V;try{return U.apply(this,arguments)}finally{f=$}}}})(zm);Bm.exports=zm;var X_=Bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=Ee,fn=X_;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,vo={};function Rr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(vo[t]=e,t=0;t<e.length;t++)Hm.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=Object.prototype.hasOwnProperty,Y_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fh={},dh={};function $_(t){return gc.call(dh,t)?!0:gc.call(fh,t)?!1:Y_.test(t)?dh[t]=!0:(fh[t]=!0,!1)}function q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function Qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zf,Qf);Nt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zf,Qf);Nt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zf,Qf);Nt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jf(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?$_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),nd=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),hh=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,du;function io(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var hu=!1;function pu(t,e){if(!t||hu)return"";hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function Z_(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case _c:return"Profiler";case ed:return"StrictMode";case vc:return"Suspense";case xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gm:return(t.displayName||"Context")+".Consumer";case Vm:return(t._context.displayName||"Context")+".Provider";case td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nd:return e=t.displayName||null,e!==null?e:yc(t.type)||"Memo";case Ai:e=t._payload,t=t._init;try{return yc(t(e))}catch{}}return null}function Q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yc(e);case 8:return e===ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J_(t){var e=Xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=J_(t))}function jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sc(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ym(t,e){e=e.checked,e!=null&&Jf(t,"checked",e,!1)}function Mc(t,e){Ym(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ec(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ec(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ec(t,e,n){(e!=="number"||al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ro(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function $m(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qo,Km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function Zm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function Qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tv=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(t,e){if(e){if(tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=null;function id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bc=null,ps=null,ms=null;function vh(t){if(t=Bo(t)){if(typeof bc!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Xl(e),bc(t.stateNode,t.type,e))}}function Jm(t){ps?ms?ms.push(t):ms=[t]:ps=t}function eg(){if(ps){var t=ps,e=ms;if(ms=ps=null,vh(t),e)for(t=0;t<e.length;t++)vh(e[t])}}function tg(t,e){return t(e)}function ng(){}var mu=!1;function ig(t,e,n){if(mu)return t(e,n);mu=!0;try{return tg(t,e,n)}finally{mu=!1,(ps!==null||ms!==null)&&(ng(),eg())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var i=Xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Pc=!1;if(di)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Pc=!1}function nv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var uo=!1,ll=null,ul=!1,Lc=null,iv={onError:function(t){uo=!0,ll=t}};function rv(t,e,n,i,r,s,o,a,l){uo=!1,ll=null,nv.apply(iv,arguments)}function sv(t,e,n,i,r,s,o,a,l){if(rv.apply(this,arguments),uo){if(uo){var u=ll;uo=!1,ll=null}else throw Error(ae(198));ul||(ul=!0,Lc=u)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xh(t){if(br(t)!==t)throw Error(ae(188))}function ov(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xh(r),t;if(s===i)return xh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function sg(t){return t=ov(t),t!==null?og(t):null}function og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=og(t);if(e!==null)return e;t=t.sibling}return null}var ag=fn.unstable_scheduleCallback,yh=fn.unstable_cancelCallback,av=fn.unstable_shouldYield,lv=fn.unstable_requestPaint,_t=fn.unstable_now,uv=fn.unstable_getCurrentPriorityLevel,rd=fn.unstable_ImmediatePriority,lg=fn.unstable_UserBlockingPriority,cl=fn.unstable_NormalPriority,cv=fn.unstable_LowPriority,ug=fn.unstable_IdlePriority,Hl=null,Kn=null;function fv(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:pv,dv=Math.log,hv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(dv(t)/hv|0)|0}var Ko=64,Zo=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=so(a):(s&=o,s!==0&&(i=so(s)))}else o=n&~r,o!==0?i=so(o):s!==0&&(i=so(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function mv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cg(){var t=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function _v(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dg,od,hg,pg,mg,Ic=!1,Qo=[],Ni=null,Fi=null,Oi=null,So=new Map,Mo=new Map,bi=[],vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(t,e){switch(t){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Bo(e),e!==null&&od(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xv(t,e,n,i,r){switch(e){case"focusin":return Ni=Vs(Ni,t,e,n,i,r),!0;case"dragenter":return Fi=Vs(Fi,t,e,n,i,r),!0;case"mouseover":return Oi=Vs(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return So.set(s,Vs(So.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Mo.set(s,Vs(Mo.get(s)||null,t,e,n,i,r)),!0}return!1}function gg(t){var e=hr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,mg(t.priority,function(){hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Rc=i,n.target.dispatchEvent(i),Rc=null}else return e=Bo(n),e!==null&&od(e),t.blockedOn=n,!1;e.shift()}return!0}function Mh(t,e,n){Ga(t)&&n.delete(e)}function yv(){Ic=!1,Ni!==null&&Ga(Ni)&&(Ni=null),Fi!==null&&Ga(Fi)&&(Fi=null),Oi!==null&&Ga(Oi)&&(Oi=null),So.forEach(Mh),Mo.forEach(Mh)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ic||(Ic=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,yv)))}function Eo(t){function e(r){return Gs(r,t)}if(0<Qo.length){Gs(Qo[0],t);for(var n=1;n<Qo.length;n++){var i=Qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ni!==null&&Gs(Ni,t),Fi!==null&&Gs(Fi,t),Oi!==null&&Gs(Oi,t),So.forEach(e),Mo.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&bi.shift()}var gs=_i.ReactCurrentBatchConfig,dl=!0;function Sv(t,e,n,i){var r=nt,s=gs.transition;gs.transition=null;try{nt=1,ad(t,e,n,i)}finally{nt=r,gs.transition=s}}function Mv(t,e,n,i){var r=nt,s=gs.transition;gs.transition=null;try{nt=4,ad(t,e,n,i)}finally{nt=r,gs.transition=s}}function ad(t,e,n,i){if(dl){var r=Uc(t,e,n,i);if(r===null)Au(t,e,i,hl,n),Sh(t,i);else if(xv(r,t,e,n,i))i.stopPropagation();else if(Sh(t,i),e&4&&-1<vv.indexOf(t)){for(;r!==null;){var s=Bo(r);if(s!==null&&dg(s),s=Uc(t,e,n,i),s===null&&Au(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Au(t,e,i,null,n)}}var hl=null;function Uc(t,e,n,i){if(hl=null,t=id(i),t=hr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function _g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uv()){case rd:return 1;case lg:return 4;case cl:case cv:return 16;case ug:return 536870912;default:return 16}default:return 16}}var Di=null,ld=null,Wa=null;function vg(){if(Wa)return Wa;var t,e=ld,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Wa=r.slice(t,1<i?1-i:void 0)}function Xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Eh(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:Eh,this.isPropagationStopped=Eh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ud=pn(Fs),ko=ht({},Fs,{view:0,detail:0}),Ev=pn(ko),_u,vu,Ws,Vl=ht({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(_u=t.screenX-Ws.screenX,vu=t.screenY-Ws.screenY):vu=_u=0,Ws=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),wh=pn(Vl),wv=ht({},Vl,{dataTransfer:0}),Tv=pn(wv),Av=ht({},ko,{relatedTarget:0}),xu=pn(Av),Cv=ht({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=pn(Cv),bv=ht({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pv=pn(bv),Lv=ht({},Fs,{data:0}),Th=pn(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uv[t])?!!e[t]:!1}function cd(){return Nv}var Fv=ht({},ko,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(t){return t.type==="keypress"?Xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=pn(Fv),kv=ht({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=pn(kv),Bv=ht({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),zv=pn(Bv),Hv=ht({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=pn(Hv),Gv=ht({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=pn(Gv),Xv=[9,13,27,32],fd=di&&"CompositionEvent"in window,co=null;di&&"documentMode"in document&&(co=document.documentMode);var jv=di&&"TextEvent"in window&&!co,xg=di&&(!fd||co&&8<co&&11>=co),Ch=" ",Rh=!1;function yg(t,e){switch(t){case"keyup":return Xv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function Yv(t,e){switch(t){case"compositionend":return Sg(e);case"keypress":return e.which!==32?null:(Rh=!0,Ch);case"textInput":return t=e.data,t===Ch&&Rh?null:t;default:return null}}function $v(t,e){if(ts)return t==="compositionend"||!fd&&yg(t,e)?(t=vg(),Wa=ld=Di=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qv[t.type]:e==="textarea"}function Mg(t,e,n,i){Jm(i),e=pl(e,"onChange"),0<e.length&&(n=new ud("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fo=null,wo=null;function Kv(t){Ig(t,0)}function Gl(t){var e=rs(t);if(jm(e))return t}function Zv(t,e){if(t==="change")return e}var Eg=!1;if(di){var yu;if(di){var Su="oninput"in document;if(!Su){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),Su=typeof Ph.oninput=="function"}yu=Su}else yu=!1;Eg=yu&&(!document.documentMode||9<document.documentMode)}function Lh(){fo&&(fo.detachEvent("onpropertychange",wg),wo=fo=null)}function wg(t){if(t.propertyName==="value"&&Gl(wo)){var e=[];Mg(e,wo,t,id(t)),ig(Kv,e)}}function Qv(t,e,n){t==="focusin"?(Lh(),fo=e,wo=n,fo.attachEvent("onpropertychange",wg)):t==="focusout"&&Lh()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(wo)}function ex(t,e){if(t==="click")return Gl(e)}function tx(t,e){if(t==="input"||t==="change")return Gl(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:nx;function To(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gc.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function Dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ih(t,e){var n=Dh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dh(n)}}function Tg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=al(t.document)}return e}function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ix(t){var e=Ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tg(n.ownerDocument.documentElement,n)){if(i!==null&&dd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ih(n,s);var o=Ih(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=di&&"documentMode"in document&&11>=document.documentMode,ns=null,Nc=null,ho=null,Fc=!1;function Uh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||ns==null||ns!==al(i)||(i=ns,"selectionStart"in i&&dd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&To(ho,i)||(ho=i,i=pl(Nc,"onSelect"),0<i.length&&(e=new ud("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Mu={},Cg={};di&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Wl(t){if(Mu[t])return Mu[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cg)return Mu[t]=e[n];return t}var Rg=Wl("animationend"),bg=Wl("animationiteration"),Pg=Wl("animationstart"),Lg=Wl("transitionend"),Dg=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Dg.set(t,e),Rr(e,[t])}for(var Eu=0;Eu<Nh.length;Eu++){var wu=Nh[Eu],sx=wu.toLowerCase(),ox=wu[0].toUpperCase()+wu.slice(1);Ki(sx,"on"+ox)}Ki(Rg,"onAnimationEnd");Ki(bg,"onAnimationIteration");Ki(Pg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Lg,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Fh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sv(i,e,void 0,t),t.currentTarget=null}function Ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fh(r,a,u),s=l}}}if(ul)throw t=Lc,ul=!1,Lc=null,t}function st(t,e){var n=e[Hc];n===void 0&&(n=e[Hc]=new Set);var i=t+"__bubble";n.has(i)||(Ug(e,t,2,!1),n.add(i))}function Tu(t,e,n){var i=0;e&&(i|=4),Ug(n,t,i,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[ta]){t[ta]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||Tu(n,!1,t),Tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,Tu("selectionchange",!1,e))}}function Ug(t,e,n,i){switch(_g(e)){case 1:var r=Sv;break;case 4:r=Mv;break;default:r=ad}n=r.bind(null,e,n,t),r=void 0,!Pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Au(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ig(function(){var u=s,d=id(n),h=[];e:{var f=Dg.get(t);if(f!==void 0){var p=ud,x=t;switch(t){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":p=Ov;break;case"focusin":x="focus",p=xu;break;case"focusout":x="blur",p=xu;break;case"beforeblur":case"afterblur":p=xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zv;break;case Rg:case bg:case Pg:p=Rv;break;case Lg:p=Vv;break;case"scroll":p=Ev;break;case"wheel":p=Wv;break;case"copy":case"cut":case"paste":p=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ah}var y=(e&4)!==0,m=!y&&t==="scroll",c=y?f!==null?f+"Capture":null:f;y=[];for(var _=u,g;_!==null;){g=_;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,c!==null&&(v=yo(_,c),v!=null&&y.push(Co(_,v,g)))),m)break;_=_.return}0<y.length&&(f=new p(f,x,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Rc&&(x=n.relatedTarget||n.fromElement)&&(hr(x)||x[hi]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?hr(x):null,x!==null&&(m=br(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(y=wh,v="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ah,v="onPointerLeave",c="onPointerEnter",_="pointer"),m=p==null?f:rs(p),g=x==null?f:rs(x),f=new y(v,_+"leave",p,n,d),f.target=m,f.relatedTarget=g,v=null,hr(d)===u&&(y=new y(c,_+"enter",x,n,d),y.target=g,y.relatedTarget=m,v=y),m=v,p&&x)t:{for(y=p,c=x,_=0,g=y;g;g=Lr(g))_++;for(g=0,v=c;v;v=Lr(v))g++;for(;0<_-g;)y=Lr(y),_--;for(;0<g-_;)c=Lr(c),g--;for(;_--;){if(y===c||c!==null&&y===c.alternate)break t;y=Lr(y),c=Lr(c)}y=null}else y=null;p!==null&&Oh(h,f,p,y,!1),x!==null&&m!==null&&Oh(h,m,x,y,!0)}}e:{if(f=u?rs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=Zv;else if(bh(f))if(Eg)P=tx;else{P=Jv;var C=Qv}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=ex);if(P&&(P=P(t,u))){Mg(h,P,n,d);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Ec(f,"number",f.value)}switch(C=u?rs(u):window,t){case"focusin":(bh(C)||C.contentEditable==="true")&&(ns=C,Nc=u,ho=null);break;case"focusout":ho=Nc=ns=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Uh(h,n,d);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Uh(h,n,d)}var A;if(fd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ts?yg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(xg&&n.locale!=="ko"&&(ts||N!=="onCompositionStart"?N==="onCompositionEnd"&&ts&&(A=vg()):(Di=d,ld="value"in Di?Di.value:Di.textContent,ts=!0)),C=pl(u,N),0<C.length&&(N=new Th(N,t,null,n,d),h.push({event:N,listeners:C}),A?N.data=A:(A=Sg(n),A!==null&&(N.data=A)))),(A=jv?Yv(t,n):$v(t,n))&&(u=pl(u,"onBeforeInput"),0<u.length&&(d=new Th("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=A))}Ig(h,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=yo(t,n),s!=null&&i.unshift(Co(t,s,r)),s=yo(t,e),s!=null&&i.push(Co(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Oh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=yo(n,s),l!=null&&o.unshift(Co(n,l,a))):r||(l=yo(n,s),l!=null&&o.push(Co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function kh(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(ux,"")}function na(t,e,n){if(e=kh(e),kh(t)!==e&&n)throw Error(ae(425))}function ml(){}var Oc=null,kc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(t){return Bh.resolve(null).then(t).catch(dx)}:zc;function dx(t){setTimeout(function(){throw t})}function Cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Eo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Eo(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),$n="__reactFiber$"+Os,Ro="__reactProps$"+Os,hi="__reactContainer$"+Os,Hc="__reactEvents$"+Os,hx="__reactListeners$"+Os,px="__reactHandles$"+Os;function hr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zh(t);t!==null;){if(n=t[$n])return n;t=zh(t)}return e}t=n,n=t.parentNode}return null}function Bo(t){return t=t[$n]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Xl(t){return t[Ro]||null}var Vc=[],ss=-1;function Zi(t){return{current:t}}function at(t){0>ss||(t.current=Vc[ss],Vc[ss]=null,ss--)}function rt(t,e){ss++,Vc[ss]=t.current,t.current=e}var Yi={},Ht=Zi(Yi),Jt=Zi(!1),yr=Yi;function ws(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function gl(){at(Jt),at(Ht)}function Hh(t,e,n){if(Ht.current!==Yi)throw Error(ae(168));rt(Ht,e),rt(Jt,n)}function Ng(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Q_(t)||"Unknown",r));return ht({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,yr=Ht.current,rt(Ht,t),rt(Jt,Jt.current),!0}function Vh(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=Ng(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,at(Jt),at(Ht),rt(Ht,t)):at(Jt),rt(Jt,n)}var oi=null,jl=!1,Ru=!1;function Fg(t){oi===null?oi=[t]:oi.push(t)}function mx(t){jl=!0,Fg(t)}function Qi(){if(!Ru&&oi!==null){Ru=!0;var t=0,e=nt;try{var n=oi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,jl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),ag(rd,Qi),r}finally{nt=e,Ru=!1}}return null}var os=[],as=0,vl=null,xl=0,_n=[],vn=0,Sr=null,ai=1,li="";function lr(t,e){os[as++]=xl,os[as++]=vl,vl=t,xl=e}function Og(t,e,n){_n[vn++]=ai,_n[vn++]=li,_n[vn++]=Sr,Sr=t;var i=ai;t=li;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ai=1<<32-kn(e)+r|n<<r|i,li=s+t}else ai=1<<s|n<<r|i,li=t}function hd(t){t.return!==null&&(lr(t,1),Og(t,1,0))}function pd(t){for(;t===vl;)vl=os[--as],os[as]=null,xl=os[--as],os[as]=null;for(;t===Sr;)Sr=_n[--vn],_n[vn]=null,li=_n[--vn],_n[vn]=null,ai=_n[--vn],_n[vn]=null}var cn=null,un=null,lt=!1,Un=null;function kg(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,un=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,un=null,!0):!1;default:return!1}}function Gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(lt){var e=un;if(e){var n=e;if(!Gh(t,e)){if(Gc(t))throw Error(ae(418));e=ki(n.nextSibling);var i=cn;e&&Gh(t,e)?kg(i,n):(t.flags=t.flags&-4097|2,lt=!1,cn=t)}}else{if(Gc(t))throw Error(ae(418));t.flags=t.flags&-4097|2,lt=!1,cn=t}}}function Wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function ia(t){if(t!==cn)return!1;if(!lt)return Wh(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=un)){if(Gc(t))throw Bg(),Error(ae(418));for(;e;)kg(t,e),e=ki(e.nextSibling)}if(Wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=cn?ki(t.stateNode.nextSibling):null;return!0}function Bg(){for(var t=un;t;)t=ki(t.nextSibling)}function Ts(){un=cn=null,lt=!1}function md(t){Un===null?Un=[t]:Un.push(t)}var gx=_i.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xh(t){var e=t._init;return e(t._payload)}function zg(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Vi(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,v){return _===null||_.tag!==6?(_=Nu(g,c.mode,v),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,v){var P=g.type;return P===es?d(c,_,g.props.children,v,g.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ai&&Xh(P)===_.type)?(v=r(_,g.props),v.ref=Xs(c,_,g),v.return=c,v):(v=Qa(g.type,g.key,g.props,null,c.mode,v),v.ref=Xs(c,_,g),v.return=c,v)}function u(c,_,g,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Fu(g,c.mode,v),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function d(c,_,g,v,P){return _===null||_.tag!==7?(_=xr(g,c.mode,v,P),_.return=c,_):(_=r(_,g),_.return=c,_)}function h(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Nu(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:return g=Qa(_.type,_.key,_.props,null,c.mode,g),g.ref=Xs(c,null,_),g.return=c,g;case Jr:return _=Fu(_,c.mode,g),_.return=c,_;case Ai:var v=_._init;return h(c,v(_._payload),g)}if(ro(_)||zs(_))return _=xr(_,c.mode,g,null),_.return=c,_;ra(c,_)}return null}function f(c,_,g,v){var P=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(c,_,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return g.key===P?l(c,_,g,v):null;case Jr:return g.key===P?u(c,_,g,v):null;case Ai:return P=g._init,f(c,_,P(g._payload),v)}if(ro(g)||zs(g))return P!==null?null:d(c,_,g,v,null);ra(c,g)}return null}function p(c,_,g,v,P){if(typeof v=="string"&&v!==""||typeof v=="number")return c=c.get(g)||null,a(_,c,""+v,P);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yo:return c=c.get(v.key===null?g:v.key)||null,l(_,c,v,P);case Jr:return c=c.get(v.key===null?g:v.key)||null,u(_,c,v,P);case Ai:var C=v._init;return p(c,_,g,C(v._payload),P)}if(ro(v)||zs(v))return c=c.get(g)||null,d(_,c,v,P,null);ra(_,v)}return null}function x(c,_,g,v){for(var P=null,C=null,A=_,N=_=0,E=null;A!==null&&N<g.length;N++){A.index>N?(E=A,A=null):E=A.sibling;var S=f(c,A,g[N],v);if(S===null){A===null&&(A=E);break}t&&A&&S.alternate===null&&e(c,A),_=s(S,_,N),C===null?P=S:C.sibling=S,C=S,A=E}if(N===g.length)return n(c,A),lt&&lr(c,N),P;if(A===null){for(;N<g.length;N++)A=h(c,g[N],v),A!==null&&(_=s(A,_,N),C===null?P=A:C.sibling=A,C=A);return lt&&lr(c,N),P}for(A=i(c,A);N<g.length;N++)E=p(A,c,N,g[N],v),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?N:E.key),_=s(E,_,N),C===null?P=E:C.sibling=E,C=E);return t&&A.forEach(function(D){return e(c,D)}),lt&&lr(c,N),P}function y(c,_,g,v){var P=zs(g);if(typeof P!="function")throw Error(ae(150));if(g=P.call(g),g==null)throw Error(ae(151));for(var C=P=null,A=_,N=_=0,E=null,S=g.next();A!==null&&!S.done;N++,S=g.next()){A.index>N?(E=A,A=null):E=A.sibling;var D=f(c,A,S.value,v);if(D===null){A===null&&(A=E);break}t&&A&&D.alternate===null&&e(c,A),_=s(D,_,N),C===null?P=D:C.sibling=D,C=D,A=E}if(S.done)return n(c,A),lt&&lr(c,N),P;if(A===null){for(;!S.done;N++,S=g.next())S=h(c,S.value,v),S!==null&&(_=s(S,_,N),C===null?P=S:C.sibling=S,C=S);return lt&&lr(c,N),P}for(A=i(c,A);!S.done;N++,S=g.next())S=p(A,c,N,S.value,v),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?N:S.key),_=s(S,_,N),C===null?P=S:C.sibling=S,C=S);return t&&A.forEach(function(R){return e(c,R)}),lt&&lr(c,N),P}function m(c,_,g,v){if(typeof g=="object"&&g!==null&&g.type===es&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:e:{for(var P=g.key,C=_;C!==null;){if(C.key===P){if(P=g.type,P===es){if(C.tag===7){n(c,C.sibling),_=r(C,g.props.children),_.return=c,c=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ai&&Xh(P)===C.type){n(c,C.sibling),_=r(C,g.props),_.ref=Xs(c,C,g),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}g.type===es?(_=xr(g.props.children,c.mode,v,g.key),_.return=c,c=_):(v=Qa(g.type,g.key,g.props,null,c.mode,v),v.ref=Xs(c,_,g),v.return=c,c=v)}return o(c);case Jr:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=Fu(g,c.mode,v),_.return=c,c=_}return o(c);case Ai:return C=g._init,m(c,_,C(g._payload),v)}if(ro(g))return x(c,_,g,v);if(zs(g))return y(c,_,g,v);ra(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=Nu(g,c.mode,v),_.return=c,c=_),o(c)):n(c,_)}return m}var As=zg(!0),Hg=zg(!1),yl=Zi(null),Sl=null,ls=null,gd=null;function _d(){gd=ls=Sl=null}function vd(t){var e=yl.current;at(yl),t._currentValue=e}function Xc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){Sl=t,gd=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(gd!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(Sl===null)throw Error(ae(308));ls=t,Sl.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var pr=null;function xd(t){pr===null?pr=[t]:pr.push(t)}function Vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sd(t,n)}}function jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;Ci=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(f=e,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(p,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(p,h,f):x,f==null)break e;h=ht({},h,f);break e;case 2:Ci=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=h}}function Yh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var zo={},Zn=Zi(zo),bo=Zi(zo),Po=Zi(zo);function mr(t){if(t===zo)throw Error(ae(174));return t}function Sd(t,e){switch(rt(Po,e),rt(bo,t),rt(Zn,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tc(e,t)}at(Zn),rt(Zn,e)}function Cs(){at(Zn),at(bo),at(Po)}function Wg(t){mr(Po.current);var e=mr(Zn.current),n=Tc(e,t.type);e!==n&&(rt(bo,t),rt(Zn,n))}function Md(t){bo.current===t&&(at(Zn),at(bo))}var ft=Zi(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function Ed(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var Ya=_i.ReactCurrentDispatcher,Pu=_i.ReactCurrentBatchConfig,Mr=0,dt=null,Mt=null,Rt=null,wl=!1,po=!1,Lo=0,_x=0;function Ft(){throw Error(ae(321))}function wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Td(t,e,n,i,r,s){if(Mr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ya.current=t===null||t.memoizedState===null?Sx:Mx,t=n(i,r),po){s=0;do{if(po=!1,Lo=0,25<=s)throw Error(ae(301));s+=1,Rt=Mt=null,e.updateQueue=null,Ya.current=Ex,t=n(i,r)}while(po)}if(Ya.current=Tl,e=Mt!==null&&Mt.next!==null,Mr=0,Rt=Mt=dt=null,wl=!1,e)throw Error(ae(300));return t}function Ad(){var t=Lo!==0;return Lo=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function An(){if(Mt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?dt.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(ae(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Do(t,e){return typeof e=="function"?e(t):e}function Lu(t){var e=An(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Mr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,dt.lanes|=d,Er|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Hn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Du(t){var e=An(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Hn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xg(){}function jg(t,e){var n=dt,i=An(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Cd(qg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Io(9,$g.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(ae(349));Mr&30||Yg(n,e,r)}return r}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $g(t,e,n,i){e.value=n,e.getSnapshot=i,Kg(e)&&Zg(t)}function qg(t,e,n){return n(function(){Kg(e)&&Zg(t)})}function Kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function Zg(t){var e=pi(t,1);e!==null&&Bn(e,t,1,-1)}function $h(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=yx.bind(null,dt,t),[e.memoizedState,t]}function Io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Qg(){return An().memoizedState}function $a(t,e,n,i){var r=Xn();dt.flags|=t,r.memoizedState=Io(1|e,n,void 0,i===void 0?null:i)}function Yl(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&wd(i,o.deps)){r.memoizedState=Io(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Io(1|e,n,s,i)}function qh(t,e){return $a(8390656,8,t,e)}function Cd(t,e){return Yl(2048,8,t,e)}function Jg(t,e){return Yl(4,2,t,e)}function e0(t,e){return Yl(4,4,t,e)}function t0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n0(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,t0.bind(null,e,t),n)}function Rd(){}function i0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function r0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function s0(t,e,n){return Mr&21?(Hn(n,e)||(n=cg(),dt.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function vx(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Pu.transition;Pu.transition={};try{t(!1),e()}finally{nt=n,Pu.transition=i}}function o0(){return An().memoizedState}function xx(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},a0(t))l0(e,n);else if(n=Vg(t,e,n,i),n!==null){var r=Xt();Bn(n,t,i,r),u0(n,e,i)}}function yx(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(a0(t))l0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(r.next=r,xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vg(t,e,r,i),n!==null&&(r=Xt(),Bn(n,t,i,r),u0(n,e,i))}}function a0(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function l0(t,e){po=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sd(t,n)}}var Tl={readContext:Tn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Sx={readContext:Tn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$a(4194308,4,t0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $a(4194308,4,t,e)},useInsertionEffect:function(t,e){return $a(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xx.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:$h,useDebugValue:Rd,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=$h(!1),e=t[0];return t=vx.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Xn();if(lt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),bt===null)throw Error(ae(349));Mr&30||Yg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qh(qg.bind(null,i,s,t),[t]),i.flags|=2048,Io(9,$g.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=bt.identifierPrefix;if(lt){var n=li,i=ai;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mx={readContext:Tn,useCallback:i0,useContext:Tn,useEffect:Cd,useImperativeHandle:n0,useInsertionEffect:Jg,useLayoutEffect:e0,useMemo:r0,useReducer:Lu,useRef:Qg,useState:function(){return Lu(Do)},useDebugValue:Rd,useDeferredValue:function(t){var e=An();return s0(e,Mt.memoizedState,t)},useTransition:function(){var t=Lu(Do)[0],e=An().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:o0,unstable_isNewReconciler:!1},Ex={readContext:Tn,useCallback:i0,useContext:Tn,useEffect:Cd,useImperativeHandle:n0,useInsertionEffect:Jg,useLayoutEffect:e0,useMemo:r0,useReducer:Du,useRef:Qg,useState:function(){return Du(Do)},useDebugValue:Rd,useDeferredValue:function(t){var e=An();return Mt===null?e.memoizedState=t:s0(e,Mt.memoizedState,t)},useTransition:function(){var t=Du(Do)[0],e=An().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:o0,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Hi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Bn(e,t,r,i),ja(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Hi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Bn(e,t,r,i),ja(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Hi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(Bn(e,t,i,n),ja(e,t,i))}};function Kh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(n,i)||!To(r,s):!0}function c0(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=en(e)?yr:Ht.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function Yc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=en(e)?yr:Ht.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$l.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",i=e;do n+=Z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $c(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function f0(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cl||(Cl=!0,sf=i),$c(t,e)},n}function d0(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$c(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$c(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kx.bind(null,t,e,n),e.then(t,t))}function Jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ep(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var Tx=_i.ReactCurrentOwner,Qt=!1;function Wt(t,e,n,i){e.child=t===null?Hg(e,null,n,i):As(e,t.child,n,i)}function tp(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=Td(t,e,n,i,s,r),n=Ad(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(lt&&n&&hd(e),e.flags|=1,Wt(t,e,i,r),e.child)}function np(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,h0(t,e,s,i,r)):(t=Qa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(o,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function h0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(To(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return qc(t,e,n,i,r)}function p0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(cs,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(cs,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(cs,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(cs,ln),ln|=i;return Wt(t,e,r,n),e.child}function m0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qc(t,e,n,i,r){var s=en(n)?yr:Ht.current;return s=ws(e,s),_s(e,r),n=Td(t,e,n,i,s,r),i=Ad(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(lt&&i&&hd(e),e.flags|=1,Wt(t,e,n,r),e.child)}function ip(t,e,n,i,r){if(en(n)){var s=!0;_l(e)}else s=!1;if(_s(e,r),e.stateNode===null)qa(t,e),c0(e,n,i),Yc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tn(u):(u=en(n)?yr:Ht.current,u=ws(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Zh(e,o,i,u),Ci=!1;var f=e.memoizedState;o.state=f,Ml(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Jt.current||Ci?(typeof d=="function"&&(jc(e,n,d,i),l=e.memoizedState),(a=Ci||Kh(e,n,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Gg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=en(n)?yr:Ht.current,l=ws(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Zh(e,o,i,l),Ci=!1,f=e.memoizedState,o.state=f,Ml(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||Jt.current||Ci?(typeof p=="function"&&(jc(e,n,p,i),x=e.memoizedState),(u=Ci||Kh(e,n,u,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Kc(t,e,n,i,s,r)}function Kc(t,e,n,i,r,s){m0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Vh(e,n,!1),mi(t,e,s);i=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&Vh(e,n,!0),e.child}function g0(t){var e=t.stateNode;e.pendingContext?Hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hh(t,e.context,!1),Sd(t,e.containerInfo)}function rp(t,e,n,i,r){return Ts(),md(r),e.flags|=256,Wt(t,e,n,i),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function _0(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ft,r&1),t===null)return Wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zl(o,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qc(n),e.memoizedState=Zc,t):bd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ax(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vi(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Qc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bd(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,n,i){return i!==null&&md(i),As(e,t.child,null,n),t=bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Iu(Error(ae(422))),sa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Zl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Qc(o),e.memoizedState=Zc,s);if(!(e.mode&1))return sa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Iu(s,i,void 0),sa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Qt||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),Bn(i,t,r,-1))}return Nd(),i=Iu(Error(ae(421))),sa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Bx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=ki(r.nextSibling),cn=e,lt=!0,Un=null,t!==null&&(_n[vn++]=ai,_n[vn++]=li,_n[vn++]=Sr,ai=t.id,li=t.overflow,Sr=e),e=bd(e,i.children),e.flags|=4096,e)}function sp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xc(t.return,e,n)}function Uu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function v0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sp(t,n,e);else if(t.tag===19)sp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uu(e,!0,n,null,s);break;case"together":Uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cx(t,e,n){switch(e.tag){case 3:g0(e),Ts();break;case 5:Wg(e);break;case 1:en(e.type)&&_l(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?_0(t,e,n):(rt(ft,ft.current&1),t=mi(t,e,n),t!==null?t.sibling:null);rt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return v0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,p0(t,e,n)}return mi(t,e,n)}var x0,Jc,y0,S0;x0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jc=function(){};y0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Zn.current);var s=null;switch(n){case"input":r=Sc(t,r),i=Sc(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=wc(t,r),i=wc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}Ac(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};S0=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Rx(t,e,n){var i=e.pendingProps;switch(pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return en(e.type)&&gl(),Ot(e),null;case 3:return i=e.stateNode,Cs(),at(Jt),at(Ht),Ed(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(lf(Un),Un=null))),Jc(t,e),Ot(e),null;case 5:Md(e);var r=mr(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)y0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Ot(e),null}if(t=mr(Zn.current),ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)st(oo[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":ph(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":gh(i,s),st("invalid",i)}Ac(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",""+a]):vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":$o(i),mh(i,s,!0);break;case"textarea":$o(i),_h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[Ro]=i,x0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cc(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)st(oo[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":ph(t,i),r=Sc(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":gh(t,i),r=wc(t,i),st("invalid",t);break;default:r=i}Ac(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Km(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Jf(t,s,l,o))}switch(n){case"input":$o(t),mh(t,i,!1);break;case"textarea":$o(t),_h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)S0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=mr(Po.current),mr(Zn.current),ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ot(e),null;case 13:if(at(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&un!==null&&e.mode&1&&!(e.flags&128))Bg(),Ts(),e.flags|=98560,s=!1;else if(s=ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[$n]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Un!==null&&(lf(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?wt===0&&(wt=3):Nd())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Cs(),Jc(t,e),t===null&&Ao(e.stateNode.containerInfo),Ot(e),null;case 10:return vd(e.type._context),Ot(e),null;case 17:return en(e.type)&&gl(),Ot(e),null;case 19:if(at(ft),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)js(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=El(t),o!==null){for(e.flags|=128,js(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>bs&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Ot(e),null}else 2*_t()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ft.current,rt(ft,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Ud(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function bx(t,e){switch(pd(e),e.tag){case 1:return en(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),at(Jt),at(Ht),Ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Md(e),null;case 13:if(at(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ft),null;case 4:return Cs(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Ud(),null;case 24:return null;default:return null}}var oa=!1,zt=!1,Px=typeof WeakSet=="function"?WeakSet:Set,Se=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function ef(t,e,n){try{n()}catch(i){gt(t,e,i)}}var op=!1;function Lx(t,e){if(Oc=dl,t=Ag(),dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kc={focusedElem:t,selectionRange:n},dl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:Dn(e.type,y),m);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(v){gt(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return x=op,op=!1,x}function mo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ef(e,n,s)}r=r.next}while(r!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M0(t){var e=t.alternate;e!==null&&(t.alternate=null,M0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Ro],delete e[Hc],delete e[hx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E0(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}function rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}var It=null,In=!1;function xi(t,e,n){for(n=n.child;n!==null;)w0(t,e,n),n=n.sibling}function w0(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:zt||us(n,e);case 6:var i=It,r=In;It=null,xi(t,e,n),It=i,In=r,It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?Cu(t.parentNode,n):t.nodeType===1&&Cu(t,n),Eo(t)):Cu(It,n.stateNode));break;case 4:i=It,r=In,It=n.stateNode.containerInfo,In=!0,xi(t,e,n),It=i,In=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ef(n,e,o),r=r.next}while(r!==i)}xi(t,e,n);break;case 1:if(!zt&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}xi(t,e,n);break;case 21:xi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,xi(t,e,n),zt=i):xi(t,e,n);break;default:xi(t,e,n)}}function lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Px),e.forEach(function(i){var r=zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,In=!1;break e;case 3:It=a.stateNode.containerInfo,In=!0;break e;case 4:It=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(It===null)throw Error(ae(160));w0(s,o,r),It=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T0(e,t),e=e.sibling}function T0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Wn(t),i&4){try{mo(3,t,t.return),ql(3,t)}catch(y){gt(t,t.return,y)}try{mo(5,t,t.return)}catch(y){gt(t,t.return,y)}}break;case 1:Rn(e,t),Wn(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(Rn(e,t),Wn(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{xo(r,"")}catch(y){gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ym(r,s),Cc(a,o);var u=Cc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Qm(r,h):d==="dangerouslySetInnerHTML"?Km(r,h):d==="children"?xo(r,h):Jf(r,d,h,u)}switch(a){case"input":Mc(r,s);break;case"textarea":$m(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ro]=s}catch(y){gt(t,t.return,y)}}break;case 6:if(Rn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){gt(t,t.return,y)}}break;case 3:if(Rn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(y){gt(t,t.return,y)}break;case 4:Rn(e,t),Wn(t);break;case 13:Rn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dd=_t())),i&4&&lp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||d,Rn(e,t),zt=u):Rn(e,t),Wn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Se=t,d=t.child;d!==null;){for(h=Se=d;Se!==null;){switch(f=Se,p=f.child,f.tag){case 0:case 11:case 14:case 15:mo(4,f,f.return);break;case 1:us(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){gt(i,n,y)}}break;case 5:us(f,f.return);break;case 22:if(f.memoizedState!==null){cp(h);continue}}p!==null?(p.return=f,Se=p):cp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zm("display",o))}catch(y){gt(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){gt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rn(e,t),Wn(t),i&4&&lp(t);break;case 21:break;default:Rn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E0(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var s=ap(t);rf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ap(t);nf(t,a,o);break;default:throw Error(ae(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dx(t,e,n){Se=t,A0(t)}function A0(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||oa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=oa;var u=zt;if(oa=o,(zt=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?fp(r):l!==null?(l.return=o,Se=l):fp(r);for(;s!==null;)Se=s,A0(s),s=s.sibling;Se=r,oa=a,zt=u}up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):up(t)}}function up(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Eo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}zt||e.flags&512&&tf(e)}catch(f){gt(e,e.return,f)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function cp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function fp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{tf(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{tf(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Ix=Math.ceil,Al=_i.ReactCurrentDispatcher,Pd=_i.ReactCurrentOwner,En=_i.ReactCurrentBatchConfig,Ke=0,bt=null,St=null,Ut=0,ln=0,cs=Zi(0),wt=0,Uo=null,Er=0,Kl=0,Ld=0,go=null,qt=null,Dd=0,bs=1/0,si=null,Cl=!1,sf=null,zi=null,aa=!1,Ii=null,Rl=0,_o=0,of=null,Ka=-1,Za=0;function Xt(){return Ke&6?_t():Ka!==-1?Ka:Ka=_t()}function Hi(t){return t.mode&1?Ke&2&&Ut!==0?Ut&-Ut:gx.transition!==null?(Za===0&&(Za=cg()),Za):(t=nt,t!==0||(t=window.event,t=t===void 0?16:_g(t.type)),t):1}function Bn(t,e,n,i){if(50<_o)throw _o=0,of=null,Error(ae(185));Oo(t,n,i),(!(Ke&2)||t!==bt)&&(t===bt&&(!(Ke&2)&&(Kl|=n),wt===4&&Pi(t,Ut)),tn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(bs=_t()+500,jl&&Qi()))}function tn(t,e){var n=t.callbackNode;gv(t,e);var i=fl(t,t===bt?Ut:0);if(i===0)n!==null&&yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yh(n),e===1)t.tag===0?mx(dp.bind(null,t)):Fg(dp.bind(null,t)),fx(function(){!(Ke&6)&&Qi()}),n=null;else{switch(fg(i)){case 1:n=rd;break;case 4:n=lg;break;case 16:n=cl;break;case 536870912:n=ug;break;default:n=cl}n=U0(n,C0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C0(t,e){if(Ka=-1,Za=0,Ke&6)throw Error(ae(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=fl(t,t===bt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=Ke;Ke|=2;var s=b0();(bt!==t||Ut!==e)&&(si=null,bs=_t()+500,vr(t,e));do try{Fx();break}catch(a){R0(t,a)}while(!0);_d(),Al.current=s,Ke=r,St!==null?e=0:(bt=null,Ut=0,e=wt)}if(e!==0){if(e===2&&(r=Dc(t),r!==0&&(i=r,e=af(t,r))),e===1)throw n=Uo,vr(t,0),Pi(t,i),tn(t,_t()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ux(r)&&(e=bl(t,i),e===2&&(s=Dc(t),s!==0&&(i=s,e=af(t,s))),e===1))throw n=Uo,vr(t,0),Pi(t,i),tn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:ur(t,qt,si);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=Dd+500-_t(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zc(ur.bind(null,t,qt,si),e);break}ur(t,qt,si);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ix(i/1960))-i,10<i){t.timeoutHandle=zc(ur.bind(null,t,qt,si),i);break}ur(t,qt,si);break;case 5:ur(t,qt,si);break;default:throw Error(ae(329))}}}return tn(t,_t()),t.callbackNode===n?C0.bind(null,t):null}function af(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=bl(t,e),t!==2&&(e=qt,qt=n,e!==null&&lf(e)),t}function lf(t){qt===null?qt=t:qt.push.apply(qt,t)}function Ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~Ld,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function dp(t){if(Ke&6)throw Error(ae(327));vs();var e=fl(t,0);if(!(e&1))return tn(t,_t()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=Dc(t);i!==0&&(e=i,n=af(t,i))}if(n===1)throw n=Uo,vr(t,0),Pi(t,e),tn(t,_t()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,qt,si),tn(t,_t()),null}function Id(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(bs=_t()+500,jl&&Qi())}}function wr(t){Ii!==null&&Ii.tag===0&&!(Ke&6)&&vs();var e=Ke;Ke|=1;var n=En.transition,i=nt;try{if(En.transition=null,nt=1,t)return t()}finally{nt=i,En.transition=n,Ke=e,!(Ke&6)&&Qi()}}function Ud(){ln=cs.current,at(cs)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(pd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:Cs(),at(Jt),at(Ht),Ed();break;case 5:Md(i);break;case 4:Cs();break;case 13:at(ft);break;case 19:at(ft);break;case 10:vd(i.type._context);break;case 22:case 23:Ud()}n=n.return}if(bt=t,St=t=Vi(t.current,null),Ut=ln=e,wt=0,Uo=null,Ld=Kl=Er=0,qt=go=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}pr=null}return t}function R0(t,e){do{var n=St;try{if(_d(),Ya.current=Tl,wl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wl=!1}if(Mr=0,Rt=Mt=dt=null,po=!1,Lo=0,Pd.current=null,n===null||n.return===null){wt=1,Uo=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Jh(o);if(p!==null){p.flags&=-257,ep(p,o,a,s,e),p.mode&1&&Qh(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Qh(s,u,e),Nd();break e}l=Error(ae(426))}}else if(lt&&a.mode&1){var m=Jh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ep(m,o,a,s,e),md(Rs(l,a));break e}}s=l=Rs(l,a),wt!==4&&(wt=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=f0(s,l,e);jh(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zi===null||!zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=d0(s,a,e);jh(s,v);break e}}s=s.return}while(s!==null)}L0(n)}catch(P){e=P,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function b0(){var t=Al.current;return Al.current=Tl,t===null?Tl:t}function Nd(){(wt===0||wt===3||wt===2)&&(wt=4),bt===null||!(Er&268435455)&&!(Kl&268435455)||Pi(bt,Ut)}function bl(t,e){var n=Ke;Ke|=2;var i=b0();(bt!==t||Ut!==e)&&(si=null,vr(t,e));do try{Nx();break}catch(r){R0(t,r)}while(!0);if(_d(),Ke=n,Al.current=i,St!==null)throw Error(ae(261));return bt=null,Ut=0,wt}function Nx(){for(;St!==null;)P0(St)}function Fx(){for(;St!==null&&!av();)P0(St)}function P0(t){var e=I0(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?L0(t):St=e,Pd.current=null}function L0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,St=null;return}}else if(n=Rx(n,e,ln),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);wt===0&&(wt=5)}function ur(t,e,n){var i=nt,r=En.transition;try{En.transition=null,nt=1,Ox(t,e,n,i)}finally{En.transition=r,nt=i}return null}function Ox(t,e,n,i){do vs();while(Ii!==null);if(Ke&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_v(t,s),t===bt&&(St=bt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,U0(cl,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=nt;nt=1;var a=Ke;Ke|=4,Pd.current=null,Lx(t,n),T0(n,t),ix(kc),dl=!!Oc,kc=Oc=null,t.current=n,Dx(n),lv(),Ke=a,nt=o,En.transition=s}else t.current=n;if(aa&&(aa=!1,Ii=t,Rl=r),s=t.pendingLanes,s===0&&(zi=null),fv(n.stateNode),tn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cl)throw Cl=!1,t=sf,sf=null,t;return Rl&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===of?_o++:(_o=0,of=t):_o=0,Qi(),null}function vs(){if(Ii!==null){var t=fg(Rl),e=En.transition,n=nt;try{if(En.transition=null,nt=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,Rl=0,Ke&6)throw Error(ae(331));var r=Ke;for(Ke|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var d=Se;switch(d.tag){case 0:case 11:case 15:mo(8,d,s)}var h=d.child;if(h!==null)h.return=d,Se=h;else for(;Se!==null;){d=Se;var f=d.sibling,p=d.return;if(M0(d),d===u){Se=null;break}if(f!==null){f.return=p,Se=f;break}Se=p}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,Se=c;break e}Se=s.return}}var _=t.current;for(Se=_;Se!==null;){o=Se;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Se=g;else e:for(o=_;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ql(9,a)}}catch(P){gt(a,a.return,P)}if(a===o){Se=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,Se=v;break e}Se=a.return}}if(Ke=r,Qi(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Hl,t)}catch{}i=!0}return i}finally{nt=n,En.transition=e}}return!1}function hp(t,e,n){e=Rs(n,e),e=f0(t,e,1),t=Bi(t,e,1),e=Xt(),t!==null&&(Oo(t,1,e),tn(t,e))}function gt(t,e,n){if(t.tag===3)hp(t,t,n);else for(;e!==null;){if(e.tag===3){hp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=Rs(n,t),t=d0(e,t,1),e=Bi(e,t,1),t=Xt(),e!==null&&(Oo(e,1,t),tn(e,t));break}}e=e.return}}function kx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Ut&n)===n&&(wt===4||wt===3&&(Ut&130023424)===Ut&&500>_t()-Dd?vr(t,0):Ld|=n),tn(t,e)}function D0(t,e){e===0&&(t.mode&1?(e=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):e=1);var n=Xt();t=pi(t,e),t!==null&&(Oo(t,e,n),tn(t,n))}function Bx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D0(t,n)}function zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),D0(t,n)}var I0;I0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,Cx(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,lt&&e.flags&1048576&&Og(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qa(t,e),t=e.pendingProps;var r=ws(e,Ht.current);_s(e,n),r=Td(null,e,i,t,r,n);var s=Ad();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yd(e),r.updater=$l,e.stateNode=r,r._reactInternals=e,Yc(e,i,t,n),e=Kc(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&hd(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(qa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Vx(i),t=Dn(i,t),r){case 0:e=qc(null,e,i,t,n);break e;case 1:e=ip(null,e,i,t,n);break e;case 11:e=tp(null,e,i,t,n);break e;case 14:e=np(null,e,i,Dn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),qc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),ip(t,e,i,r,n);case 3:e:{if(g0(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gg(t,e),Ml(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Rs(Error(ae(423)),e),e=rp(t,e,i,n,r);break e}else if(i!==r){r=Rs(Error(ae(424)),e),e=rp(t,e,i,n,r);break e}else for(un=ki(e.stateNode.containerInfo.firstChild),cn=e,lt=!0,Un=null,n=Hg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===r){e=mi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return Wg(e),t===null&&Wc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Bc(i,r)?o=null:s!==null&&Bc(i,s)&&(e.flags|=32),m0(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Wc(e),null;case 13:return _0(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),tp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(yl,i._currentValue),i._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===r.children&&!Jt.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Tn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),np(t,e,i,r,n);case 15:return h0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),qa(t,e),e.tag=1,en(i)?(t=!0,_l(e)):t=!1,_s(e,n),c0(e,i,r),Yc(e,i,r,n),Kc(null,e,i,!0,t,n);case 19:return v0(t,e,n);case 22:return p0(t,e,n)}throw Error(ae(156,e.tag))};function U0(t,e){return ag(t,e)}function Hx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new Hx(t,e,n,i)}function Fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return Fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===td)return 11;if(t===nd)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Fd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return xr(n.children,r,s,e);case ed:o=8,r|=8;break;case _c:return t=Sn(12,n,e,r|2),t.elementType=_c,t.lanes=s,t;case vc:return t=Sn(13,n,e,r),t.elementType=vc,t.lanes=s,t;case xc:return t=Sn(19,n,e,r),t.elementType=xc,t.lanes=s,t;case Wm:return Zl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vm:o=10;break e;case Gm:o=9;break e;case td:o=11;break e;case nd:o=14;break e;case Ai:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Zl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=Wm,t.lanes=n,t.stateNode={isHidden:!1},t}function Nu(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Fu(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Od(t,e,n,i,r,s,o,a,l){return t=new Gx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yd(s),t}function Wx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function N0(t){if(!t)return Yi;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(en(n))return Ng(t,n,e)}return e}function F0(t,e,n,i,r,s,o,a,l){return t=Od(n,i,!0,t,r,s,o,a,l),t.context=N0(null),n=t.current,i=Xt(),r=Hi(n),s=fi(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,Oo(t,r,i),tn(t,i),t}function Ql(t,e,n,i){var r=e.current,s=Xt(),o=Hi(r);return n=N0(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,o),t!==null&&(Bn(t,r,o,s),ja(t,r,o)),o}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kd(t,e){pp(t,e),(t=t.alternate)&&pp(t,e)}function Xx(){return null}var O0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}Jl.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Ql(t,e,null,null)};Jl.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Ql(null,t,null,null)}),e[hi]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&gg(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mp(){}function jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Pl(o);s.call(u)}}var o=F0(e,i,t,0,null,!1,!1,"",mp);return t._reactRootContainer=o,t[hi]=o.current,Ao(t.nodeType===8?t.parentNode:t),wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Pl(l);a.call(u)}}var l=Od(t,0,!1,null,null,!1,!1,"",mp);return t._reactRootContainer=l,t[hi]=l.current,Ao(t.nodeType===8?t.parentNode:t),wr(function(){Ql(e,l,n,i)}),l}function tu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Pl(o);a.call(l)}}Ql(e,o,t,r)}else o=jx(n,e,t,r,i);return Pl(o)}dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(sd(e,n|1),tn(e,_t()),!(Ke&6)&&(bs=_t()+500,Qi()))}break;case 13:wr(function(){var i=pi(t,1);if(i!==null){var r=Xt();Bn(i,t,1,r)}}),kd(t,1)}};od=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Xt();Bn(e,t,134217728,n)}kd(t,134217728)}};hg=function(t){if(t.tag===13){var e=Hi(t),n=pi(t,e);if(n!==null){var i=Xt();Bn(n,t,e,i)}kd(t,e)}};pg=function(){return nt};mg=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};bc=function(t,e,n){switch(e){case"input":if(Mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xl(i);if(!r)throw Error(ae(90));jm(i),Mc(i,r)}}}break;case"textarea":$m(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};tg=Id;ng=wr;var Yx={usingClientEntryPoint:!1,Events:[Bo,rs,Xl,Jm,eg,Id]},Ys={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Hl=la.inject($x),Kn=la}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(ae(200));return Wx(t,e,null,n)};hn.createRoot=function(t,e){if(!zd(t))throw Error(ae(299));var n=!1,i="",r=O0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Od(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,Ao(t.nodeType===8?t.parentNode:t),new Bd(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=sg(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return wr(t)};hn.hydrate=function(t,e,n){if(!eu(e))throw Error(ae(200));return tu(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=O0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F0(e,null,t,1,n??null,r,!1,s,o),t[hi]=e.current,Ao(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Jl(e)};hn.render=function(t,e,n){if(!eu(e))throw Error(ae(200));return tu(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!eu(t))throw Error(ae(40));return t._reactRootContainer?(wr(function(){tu(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};hn.unstable_batchedUpdates=Id;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!eu(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return tu(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function k0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k0)}catch(t){console.error(t)}}k0(),km.exports=hn;var qx=km.exports,B0,gp=qx;B0=gp.createRoot,gp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="168",Kx=0,_p=1,Zx=2,z0=1,H0=2,ri=3,$i=0,nn=1,Nn=2,Gi=0,xs=1,vp=2,xp=3,yp=4,Qx=5,fr=100,Jx=101,ey=102,ty=103,ny=104,iy=200,ry=201,sy=202,oy=203,uf=204,cf=205,ay=206,ly=207,uy=208,cy=209,fy=210,dy=211,hy=212,py=213,my=214,gy=0,_y=1,vy=2,Ll=3,xy=4,yy=5,Sy=6,My=7,nu=0,Ey=1,wy=2,Wi=0,Ty=1,Ay=2,Cy=3,Ry=4,by=5,Py=6,Ly=7,V0=300,Ps=301,Ls=302,ff=303,df=304,iu=306,hf=1e3,gr=1001,pf=1002,Mn=1003,Dy=1004,ua=1005,Fn=1006,Ou=1007,_r=1008,gi=1009,G0=1010,W0=1011,No=1012,Vd=1013,Tr=1014,ui=1015,Ho=1016,Gd=1017,Wd=1018,Ds=1020,X0=35902,j0=1021,Y0=1022,On=1023,$0=1024,q0=1025,ys=1026,Is=1027,K0=1028,Xd=1029,Z0=1030,jd=1031,Yd=1033,Ja=33776,el=33777,tl=33778,nl=33779,mf=35840,gf=35841,_f=35842,vf=35843,xf=36196,yf=37492,Sf=37496,Mf=37808,Ef=37809,wf=37810,Tf=37811,Af=37812,Cf=37813,Rf=37814,bf=37815,Pf=37816,Lf=37817,Df=37818,If=37819,Uf=37820,Nf=37821,il=36492,Ff=36494,Of=36495,Q0=36283,kf=36284,Bf=36285,zf=36286,Iy=3200,Uy=3201,$d=0,Ny=1,Li="",jn="srgb",Ji="srgb-linear",qd="display-p3",ru="display-p3-linear",Dl="linear",ot="srgb",Il="rec709",Ul="p3",Dr=7680,Sp=519,Fy=512,Oy=513,ky=514,J0=515,By=516,zy=517,Hy=518,Vy=519,Hf=35044,Mp="300 es",ci=2e3,Nl=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rl=Math.PI/180,Vf=180/Math.PI;function Xi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function Gy(t,e){return(t%e+e)%e}function ku(t,e,n){return(1-n)*t+n*e}function qn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function it(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],p=i[5],x=i[8],y=r[0],m=r[3],c=r[6],_=r[1],g=r[4],v=r[7],P=r[2],C=r[5],A=r[8];return s[0]=o*y+a*_+l*P,s[3]=o*m+a*g+l*C,s[6]=o*c+a*v+l*A,s[1]=u*y+d*_+h*P,s[4]=u*m+d*g+h*C,s[7]=u*c+d*v+h*A,s[2]=f*y+p*_+x*P,s[5]=f*m+p*g+x*C,s[8]=f*c+p*v+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=d*o-a*u,f=a*l-d*s,p=u*s-o*l,x=n*h+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*u-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bu=new Xe;function e_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Wy(){const t=Fl("canvas");return t.style.display="block",t}const Ep={};function Ss(t){t in Ep||(Ep[t]=!0,console.warn(t))}function Xy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const wp=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tp=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$s={[Ji]:{transfer:Dl,primaries:Il,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[jn]:{transfer:ot,primaries:Il,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ru]:{transfer:Dl,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Tp),fromReference:t=>t.applyMatrix3(wp)},[qd]:{transfer:ot,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Tp),fromReference:t=>t.applyMatrix3(wp).convertLinearToSRGB()}},jy=new Set([Ji,ru]),tt={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!jy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$s[e].toReference,r=$s[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $s[t].primaries},getTransfer:function(t){return t===Li?Dl:$s[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray($s[e].luminanceCoefficients)}};function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class Yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=Fl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $y=0;class t_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hu(r[o].image)):s.push(Hu(r[o]))}else s=Hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qy=0;class jt extends ks{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=gr,r=gr,s=Fn,o=_r,a=On,l=gi,u=jt.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Xi(),this.name="",this.source=new t_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=V0;jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],p=l[5],x=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,v=(p+1)/2,P=(c+1)/2,C=(d+f)/4,A=(h+y)/4,N=(x+m)/4;return g>v&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=A/i):v>P?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=N/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-x)*(m-x)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(h-y)/_,this.z=(f-d)/_,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ky extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new t_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends Ky{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class n_ extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zy extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(h!==y||l!==f||u!==p||d!==x){let m=1-a;const c=l*f+u*p+d*x+h*y,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const P=Math.sqrt(g),C=Math.atan2(P,c*_);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const v=a*_;if(l=l*m+f*v,u=u*m+p*v,d=d*m+x*v,h=h*m+y*v,m===1-a){const P=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=P,u*=P,d*=P,h*=P}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*p-u*f,e[n+1]=l*x+d*f+u*h-a*p,e[n+2]=u*x+d*p+a*f-l*h,e[n+3]=d*x-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+u*p*x,this._y=u*p*h-f*d*x,this._z=u*d*x+f*p*h,this._w=u*d*h-f*p*x;break;case"YXZ":this._x=f*d*h+u*p*x,this._y=u*p*h-f*d*x,this._z=u*d*x-f*p*h,this._w=u*d*h+f*p*x;break;case"ZXY":this._x=f*d*h-u*p*x,this._y=u*p*h+f*d*x,this._z=u*d*x+f*p*h,this._w=u*d*h-f*p*x;break;case"ZYX":this._x=f*d*h-u*p*x,this._y=u*p*h+f*d*x,this._z=u*d*x-f*p*h,this._w=u*d*h+f*p*x;break;case"YZX":this._x=f*d*h+u*p*x,this._y=u*p*h+f*d*x,this._z=u*d*x-f*p*h,this._w=u*d*h-f*p*x;break;case"XZY":this._x=f*d*h-u*p*x,this._y=u*p*h-f*d*x,this._z=u*d*x+f*p*h,this._w=u*d*h+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ap.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*d,this.y=i+l*d+a*u-s*h,this.z=r+l*h+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vu=new W,Ap=new Vo;class Go{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ca.copy(i.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),fa.subVectors(this.max,qs),Ur.subVectors(e.a,qs),Nr.subVectors(e.b,qs),Fr.subVectors(e.c,qs),yi.subVectors(Nr,Ur),Si.subVectors(Fr,Nr),nr.subVectors(Ur,Fr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-nr.z,nr.y,yi.z,0,-yi.x,Si.z,0,-Si.x,nr.z,0,-nr.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-nr.y,nr.x,0];return!Gu(n,Ur,Nr,Fr,fa)||(n=[1,0,0,0,1,0,0,0,1],!Gu(n,Ur,Nr,Fr,fa))?!1:(da.crossVectors(yi,Si),n=[da.x,da.y,da.z],Gu(n,Ur,Nr,Fr,fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new W,new W,new W,new W,new W,new W,new W,new W],bn=new W,ca=new Go,Ur=new W,Nr=new W,Fr=new W,yi=new W,Si=new W,nr=new W,qs=new W,fa=new W,da=new W,ir=new W;function Gu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),u=n.dot(ir),d=i.dot(ir);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const Qy=new Go,Ks=new W,Wu=new W;class su{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Qy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Wu)),this.expandByPoint(Ks.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new W,Xu=new W,ha=new W,Mi=new W,ju=new W,pa=new W,Yu=new W;class Kd{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xu.copy(e).add(n).multiplyScalar(.5),ha.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ha),a=Mi.dot(this.direction),l=-Mi.dot(ha),u=Mi.lengthSq(),d=Math.abs(1-o*o);let h,f,p,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const y=1/d;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xu).addScaledVector(ha,f),p}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){ju.subVectors(n,e),pa.subVectors(i,e),Yu.crossVectors(ju,pa);let o=this.direction.dot(Yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(pa.crossVectors(Mi,pa));if(l<0)return null;const u=a*this.direction.dot(ju.cross(Mi));if(u<0||l+u>o)return null;const d=-a*Mi.dot(Yu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,u,d,h,f,p,x,y,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,d,h,f,p,x,y,m)}set(e,n,i,r,s,o,a,l,u,d,h,f,p,x,y,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=h,c[14]=f,c[3]=p,c[7]=x,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=p+x*u,n[5]=f-y*u,n[9]=-a*l,n[2]=y-f*u,n[6]=x+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,x=u*d,y=u*h;n[0]=f+y*a,n[4]=x*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-x,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,x=u*d,y=u*h;n[0]=f-y*a,n[4]=-o*h,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=x*u-p,n[8]=f*u+y,n[1]=l*h,n[5]=y*u+f,n[9]=p*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,x=a*l,y=a*u;n[0]=l*d,n[4]=y-f*h,n[8]=x*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=p*h+x,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*u,x=a*l,y=a*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+y,n[5]=o*d,n[9]=p*h-x,n[2]=x*h-p,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jy,e,eS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ei.crossVectors(i,on),Ei.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ei.crossVectors(i,on)),Ei.normalize(),ma.crossVectors(on,Ei),r[0]=Ei.x,r[4]=ma.x,r[8]=on.x,r[1]=Ei.y,r[5]=ma.y,r[9]=on.y,r[2]=Ei.z,r[6]=ma.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],p=i[13],x=i[2],y=i[6],m=i[10],c=i[14],_=i[3],g=i[7],v=i[11],P=i[15],C=r[0],A=r[4],N=r[8],E=r[12],S=r[1],D=r[5],R=r[9],O=r[13],q=r[2],X=r[6],Y=r[10],j=r[14],U=r[3],V=r[7],$=r[11],ne=r[15];return s[0]=o*C+a*S+l*q+u*U,s[4]=o*A+a*D+l*X+u*V,s[8]=o*N+a*R+l*Y+u*$,s[12]=o*E+a*O+l*j+u*ne,s[1]=d*C+h*S+f*q+p*U,s[5]=d*A+h*D+f*X+p*V,s[9]=d*N+h*R+f*Y+p*$,s[13]=d*E+h*O+f*j+p*ne,s[2]=x*C+y*S+m*q+c*U,s[6]=x*A+y*D+m*X+c*V,s[10]=x*N+y*R+m*Y+c*$,s[14]=x*E+y*O+m*j+c*ne,s[3]=_*C+g*S+v*q+P*U,s[7]=_*A+g*D+v*X+P*V,s[11]=_*N+g*R+v*Y+P*$,s[15]=_*E+g*O+v*j+P*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],p=e[14],x=e[3],y=e[7],m=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+y*(+n*l*p-n*u*f+s*o*f-r*o*p+r*u*d-s*l*d)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*d-i*u*d)+c*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],p=e[11],x=e[12],y=e[13],m=e[14],c=e[15],_=h*m*u-y*f*u+y*l*p-a*m*p-h*l*c+a*f*c,g=x*f*u-d*m*u-x*l*p+o*m*p+d*l*c-o*f*c,v=d*y*u-x*h*u+x*a*p-o*y*p-d*a*c+o*h*c,P=x*h*l-d*y*l-x*a*f+o*y*f+d*a*m-o*h*m,C=n*_+i*g+r*v+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*c-i*f*c)*A,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*c+i*l*c)*A,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(d*m*s-x*f*s+x*r*p-n*m*p-d*r*c+n*f*c)*A,e[6]=(x*l*s-o*m*s-x*r*u+n*m*u+o*r*c-n*l*c)*A,e[7]=(o*f*s-d*l*s+d*r*u-n*f*u-o*r*p+n*l*p)*A,e[8]=v*A,e[9]=(x*h*s-d*y*s-x*i*p+n*y*p+d*i*c-n*h*c)*A,e[10]=(o*y*s-x*a*s+x*i*u-n*y*u-o*i*c+n*a*c)*A,e[11]=(d*a*s-o*h*s-d*i*u+n*h*u+o*i*p-n*a*p)*A,e[12]=P*A,e[13]=(d*y*r-x*h*r+x*i*f-n*y*f-d*i*m+n*h*m)*A,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,h=a+a,f=s*u,p=s*d,x=s*h,y=o*d,m=o*h,c=a*h,_=l*u,g=l*d,v=l*h,P=i.x,C=i.y,A=i.z;return r[0]=(1-(y+c))*P,r[1]=(p+v)*P,r[2]=(x-g)*P,r[3]=0,r[4]=(p-v)*C,r[5]=(1-(f+c))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(x+g)*A,r[9]=(m-_)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const u=1/s,d=1/o,h=1/a;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=d,Pn.elements[5]*=d,Pn.elements[6]*=d,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,n.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ci){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,x;if(a===ci)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Nl)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ci){const l=this.elements,u=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*u,p=(i+r)*d;let x,y;if(a===ci)x=(o+s)*h,y=-2*h;else if(a===Nl)x=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new W,Pn=new ut,Jy=new W(0,0,0),eS=new W(1,1,1),Ei=new W,ma=new W,on=new W,Cp=new ut,Rp=new Vo;class Vn{constructor(e=0,n=0,i=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tS=0;const bp=new W,kr=new Vo,ti=new ut,ga=new W,Zs=new W,nS=new W,iS=new Vo,Pp=new W(1,0,0),Lp=new W(0,1,0),Dp=new W(0,0,1),Ip={type:"added"},rS={type:"removed"},Br={type:"childadded",child:null},$u={type:"childremoved",child:null};class Pt extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new W,n=new Vn,i=new Vo,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Xe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,n){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ga.copy(e):ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Zs,ga,this.up):ti.lookAt(ga,Zs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(ti),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rS),$u.child=e,this.dispatchEvent($u),$u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,nS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,iS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new W(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new W,ni=new W,qu=new W,ii=new W,zr=new W,Hr=new W,Up=new W,Ku=new W,Zu=new W,Qu=new W;class yn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),ni.subVectors(i,n),qu.subVectors(e,n);const o=Ln.dot(Ln),a=Ln.dot(ni),l=Ln.dot(qu),u=ni.dot(ni),d=ni.dot(qu),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ni.subVectors(e,n),Ln.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;zr.subVectors(r,i),Hr.subVectors(s,i),Ku.subVectors(e,i);const l=zr.dot(Ku),u=Hr.dot(Ku);if(l<=0&&u<=0)return n.copy(i);Zu.subVectors(e,r);const d=zr.dot(Zu),h=Hr.dot(Zu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(zr,o);Qu.subVectors(e,s);const p=zr.dot(Qu),x=Hr.dot(Qu);if(x>=0&&p<=x)return n.copy(s);const y=p*u-l*x;if(y<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Hr,a);const m=d*x-p*h;if(m<=0&&h-d>=0&&p-x>=0)return Up.subVectors(s,r),a=(h-d)/(h-d+(p-x)),n.copy(r).addScaledVector(Up,a);const c=1/(m+y+f);return o=y*c,a=f*c,n.copy(i).addScaledVector(zr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=Gy(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ju(o,s,e+1/3),this.g=Ju(o,s,e),this.b=Ju(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=zu(e.r),this.g=zu(e.g),this.b=zu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return tt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Kt(Bt.r*255,0,255))*65536+Math.round(Kt(Bt.g*255,0,255))*256+Math.round(Kt(Bt.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=jn){tt.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(_a);const i=ku(wi.h,_a.h,n),r=ku(wi.s,_a.s,n),s=ku(wi.l,_a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ge;Ge.NAMES=i_;let sS=0;class er extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=xs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=cf,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uf&&(i.blendSrc=this.blendSrc),this.blendDst!==cf&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ll&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class r_ extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new W,va=new Ve;class zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ss("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)va.fromBufferAttribute(this,n),va.applyMatrix3(e),this.setXY(n,va.x,va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qn(n,this.array)),n}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qn(n,this.array)),n}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qn(n,this.array)),n}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hf&&(e.usage=this.usage),e}}class s_ extends zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o_ extends zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wn extends zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oS=0;const gn=new ut,ec=new Pt,Vr=new W,an=new Go,Qs=new Go,Ct=new W;class dn extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?o_:s_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(an.min,Qs.min),an.expandByPoint(Ct),Ct.addVectors(an.max,Qs.max),an.expandByPoint(Ct)):(an.expandByPoint(Qs.min),an.expandByPoint(Qs.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Ct.fromBufferAttribute(a,u),l&&(Vr.fromBufferAttribute(e,u),Ct.add(Vr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new W,l[N]=new W;const u=new W,d=new W,h=new W,f=new Ve,p=new Ve,x=new Ve,y=new W,m=new W;function c(N,E,S){u.fromBufferAttribute(i,N),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,S),d.sub(u),h.sub(u),p.sub(f),x.sub(f);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),a[N].add(y),a[E].add(y),a[S].add(y),l[N].add(m),l[E].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let N=0,E=_.length;N<E;++N){const S=_[N],D=S.start,R=S.count;for(let O=D,q=D+R;O<q;O+=3)c(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const g=new W,v=new W,P=new W,C=new W;function A(N){P.fromBufferAttribute(r,N),C.copy(P);const E=a[N];g.copy(E),g.sub(P.multiplyScalar(P.dot(E))).normalize(),v.crossVectors(C,E);const D=v.dot(l[N])<0?-1:1;o.setXYZW(N,g.x,g.y,g.z,D)}for(let N=0,E=_.length;N<E;++N){const S=_[N],D=S.start,R=S.count;for(let O=D,q=D+R;O<q;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,u=new W,d=new W,h=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(d),l.add(d),u.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,h=a.normalized,f=new u.constructor(l.length*d);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let c=0;c<d;c++)f[x++]=u[p++]}return new zn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,h=u.length;d<h;d++){const f=u[d],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new ut,rr=new Kd,xa=new su,Fp=new W,Gr=new W,Wr=new W,Xr=new W,tc=new W,ya=new W,Sa=new Ve,Ma=new Ve,Ea=new Ve,Op=new W,kp=new W,Bp=new W,wa=new W,Ta=new W;class Zt extends Pt{constructor(e=new dn,n=new r_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ya.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],h=s[l];d!==0&&(tc.fromBufferAttribute(h,e),o?ya.addScaledVector(tc,d):ya.addScaledVector(tc.sub(n),d))}n.add(ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(xa.containsPoint(rr.origin)===!1&&(rr.intersectSphere(xa,Fp)===null||rr.origin.distanceToSquared(Fp)>(e.far-e.near)**2))&&(Np.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Np),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],c=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,P=g;v<P;v+=3){const C=a.getX(v),A=a.getX(v+1),N=a.getX(v+2);r=Aa(this,c,e,i,u,d,h,C,A,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,c=y;m<c;m+=3){const _=a.getX(m),g=a.getX(m+1),v=a.getX(m+2);r=Aa(this,o,e,i,u,d,h,_,g,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],c=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,P=g;v<P;v+=3){const C=v,A=v+1,N=v+2;r=Aa(this,c,e,i,u,d,h,C,A,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,c=y;m<c;m+=3){const _=m,g=m+1,v=m+2;r=Aa(this,o,e,i,u,d,h,_,g,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aS(t,e,n,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ta);return u<n.near||u>n.far?null:{distance:u,point:Ta.clone(),object:t}}function Aa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Gr),t.getVertexPosition(l,Wr),t.getVertexPosition(u,Xr);const d=aS(t,e,n,i,Gr,Wr,Xr,wa);if(d){r&&(Sa.fromBufferAttribute(r,a),Ma.fromBufferAttribute(r,l),Ea.fromBufferAttribute(r,u),d.uv=yn.getInterpolation(wa,Gr,Wr,Xr,Sa,Ma,Ea,new Ve)),s&&(Sa.fromBufferAttribute(s,a),Ma.fromBufferAttribute(s,l),Ea.fromBufferAttribute(s,u),d.uv1=yn.getInterpolation(wa,Gr,Wr,Xr,Sa,Ma,Ea,new Ve)),o&&(Op.fromBufferAttribute(o,a),kp.fromBufferAttribute(o,l),Bp.fromBufferAttribute(o,u),d.normal=yn.getInterpolation(wa,Gr,Wr,Xr,Op,kp,Bp,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new W,materialIndex:0};yn.getNormal(Gr,Wr,Xr,h.normal),d.face=h}return d}class Cr extends dn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(u,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(h,2));function x(y,m,c,_,g,v,P,C,A,N,E){const S=v/A,D=P/N,R=v/2,O=P/2,q=C/2,X=A+1,Y=N+1;let j=0,U=0;const V=new W;for(let $=0;$<Y;$++){const ne=$*D-O;for(let me=0;me<X;me++){const Ie=me*S-R;V[y]=Ie*_,V[m]=ne*g,V[c]=q,u.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[c]=C>0?1:-1,d.push(V.x,V.y,V.z),h.push(me/A),h.push(1-$/N),j+=1}}for(let $=0;$<N;$++)for(let ne=0;ne<A;ne++){const me=f+ne+X*$,Ie=f+ne+X*($+1),Q=f+(ne+1)+X*($+1),re=f+(ne+1)+X*$;l.push(me,Ie,re),l.push(Ie,Q,re),U+=6}a.addGroup(p,U,E),p+=U,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function lS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const uS={clone:Us,merge:Gt};var cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=fS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=lS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class l_ extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new W,zp=new Ve,Hp=new Ve;class xn extends l_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vf*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,zp,Hp),n.subVectors(Hp,zp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Yr=1;class dS extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(jr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new xn(jr,Yr,e,n);s.layers=this.layers,this.add(s);const o=new xn(jr,Yr,e,n);o.layers=this.layers,this.add(o);const a=new xn(jr,Yr,e,n);a.layers=this.layers,this.add(a);const l=new xn(jr,Yr,e,n);l.layers=this.layers,this.add(l);const u=new xn(jr,Yr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class u_ extends jt{constructor(e,n,i,r,s,o,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Ps,super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hS extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new u_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Gi});s.uniforms.tEquirect.value=n;const o=new Zt(r,s),a=n.minFilter;return n.minFilter===_r&&(n.minFilter=Fn),new dS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const nc=new W,pS=new W,mS=new Xe;class Ri{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nc.subVectors(i,n).cross(pS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mS.getNormalMatrix(e),r=this.coplanarPoint(nc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new su,Ca=new W;class Qd{constructor(e=new Ri,n=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],y=r[10],m=r[11],c=r[12],_=r[13],g=r[14],v=r[15];if(i[0].setComponents(l-s,f-u,m-p,v-c).normalize(),i[1].setComponents(l+s,f+u,m+p,v+c).normalize(),i[2].setComponents(l+o,f+d,m+x,v+_).normalize(),i[3].setComponents(l-o,f-d,m-x,v-_).normalize(),i[4].setComponents(l-a,f-h,m-y,v-g).normalize(),n===ci)i[5].setComponents(l+a,f+h,m+y,v+g).normalize();else if(n===Nl)i[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function c_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gS(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&f.length===0&&t.bufferSubData(u,0,d),f.length!==0){for(let p=0,x=f.length;p<x;p++){const y=f[p];t.bufferSubData(u,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Ui extends dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,h=e/a,f=n/l,p=[],x=[],y=[],m=[];for(let c=0;c<d;c++){const _=c*f-o;for(let g=0;g<u;g++){const v=g*h-s;x.push(v,-_,0),y.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,v=_+u*(c+1),P=_+1+u*(c+1),C=_+1+u*c;p.push(g,v,C),p.push(v,P,C)}this.setIndex(p),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(y,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var _S=`#ifdef USE_ALPHAHASH
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
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zS=`#define PI 3.141592653589793
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
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,cM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
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
#endif`,BM=`#ifdef USE_NORMALMAP
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
#endif`,zM=`#ifdef USE_CLEARCOAT
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
#endif`,uE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cE=`#ifdef USE_TRANSMISSION
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
#endif`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,BE=`#define PHONG
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
}`,zE=`#define STANDARD
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
}`,We={alphahash_fragment:_S,alphahash_pars_fragment:vS,alphamap_fragment:xS,alphamap_pars_fragment:yS,alphatest_fragment:SS,alphatest_pars_fragment:MS,aomap_fragment:ES,aomap_pars_fragment:wS,batching_pars_vertex:TS,batching_vertex:AS,begin_vertex:CS,beginnormal_vertex:RS,bsdfs:bS,iridescence_fragment:PS,bumpmap_pars_fragment:LS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:IS,clipping_planes_pars_vertex:US,clipping_planes_vertex:NS,color_fragment:FS,color_pars_fragment:OS,color_pars_vertex:kS,color_vertex:BS,common:zS,cube_uv_reflection_fragment:HS,defaultnormal_vertex:VS,displacementmap_pars_vertex:GS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:jS,colorspace_fragment:YS,colorspace_pars_fragment:$S,envmap_fragment:qS,envmap_common_pars_fragment:KS,envmap_pars_fragment:ZS,envmap_pars_vertex:QS,envmap_physical_pars_fragment:uM,envmap_vertex:JS,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:aM,lights_pars_begin:lM,lights_toon_fragment:cM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:hM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:_M,lights_fragment_end:vM,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:MM,map_fragment:EM,map_pars_fragment:wM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:bM,morphcolor_vertex:PM,morphnormal_vertex:LM,morphtarget_pars_vertex:DM,morphtarget_vertex:IM,normal_fragment_begin:UM,normal_fragment_maps:NM,normal_pars_fragment:FM,normal_pars_vertex:OM,normal_vertex:kM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:zM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:GM,opaque_fragment:WM,packing:XM,premultiplied_alpha_fragment:jM,project_vertex:YM,dithering_fragment:$M,dithering_pars_fragment:qM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:QM,shadowmap_pars_vertex:JM,shadowmap_vertex:eE,shadowmask_pars_fragment:tE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:rE,skinnormal_vertex:sE,specularmap_fragment:oE,specularmap_pars_fragment:aE,tonemapping_fragment:lE,tonemapping_pars_fragment:uE,transmission_fragment:cE,transmission_pars_fragment:fE,uv_pars_fragment:dE,uv_pars_vertex:hE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:_E,backgroundCube_vert:vE,backgroundCube_frag:xE,cube_vert:yE,cube_frag:SE,depth_vert:ME,depth_frag:EE,distanceRGBA_vert:wE,distanceRGBA_frag:TE,equirect_vert:AE,equirect_frag:CE,linedashed_vert:RE,linedashed_frag:bE,meshbasic_vert:PE,meshbasic_frag:LE,meshlambert_vert:DE,meshlambert_frag:IE,meshmatcap_vert:UE,meshmatcap_frag:NE,meshnormal_vert:FE,meshnormal_frag:OE,meshphong_vert:kE,meshphong_frag:BE,meshphysical_vert:zE,meshphysical_frag:HE,meshtoon_vert:VE,meshtoon_frag:GE,points_vert:WE,points_frag:XE,shadow_vert:jE,shadow_frag:YE,sprite_vert:$E,sprite_frag:qE},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Yn={basic:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Gt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Gt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Gt([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Gt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Gt([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Gt([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Gt([ge.common,ge.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Gt([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Yn.physical={uniforms:Gt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ra={r:0,b:0,g:0},or=new Vn,KE=new ut;function ZE(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,u,d,h=null,f=0,p=null;function x(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function y(_){let g=!1;const v=x(_);v===null?c(a,l):v&&v.isColor&&(c(v,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const v=x(g);v&&(v.isCubeTexture||v.mapping===iu)?(d===void 0&&(d=new Zt(new Cr(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Us(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),or.copy(g.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(or)),d.material.toneMapped=tt.getTransfer(v.colorSpace)!==ot,(h!==v||f!==v.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=v,f=v.version,p=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Zt(new Ui(2,2),new qi({name:"BackgroundMaterial",uniforms:Us(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=tt.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function c(_,g){_.getRGB(Ra,a_(t)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,c(a,l)},render:y,addToRenderList:m}}function QE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,D,R,O,q){let X=!1;const Y=h(O,R,D);s!==Y&&(s=Y,u(s.object)),X=p(S,O,R,q),X&&x(S,O,R,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(S,D,R,O),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,D,R){const O=R.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let X=q[D.id];X===void 0&&(X={},q[D.id]=X);let Y=X[O];return Y===void 0&&(Y=f(l()),X[O]=Y),Y}function f(S){const D=[],R=[],O=[];for(let q=0;q<n;q++)D[q]=0,R[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:R,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,D,R,O){const q=s.attributes,X=D.attributes;let Y=0;const j=R.getAttributes();for(const U in j)if(j[U].location>=0){const $=q[U];let ne=X[U];if(ne===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;Y++}return s.attributesNum!==Y||s.index!==O}function x(S,D,R,O){const q={},X=D.attributes;let Y=0;const j=R.getAttributes();for(const U in j)if(j[U].location>=0){let $=X[U];$===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&($=S.instanceColor));const ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),q[U]=ne,Y++}s.attributes=q,s.attributesNum=Y,s.index=O}function y(){const S=s.newAttributes;for(let D=0,R=S.length;D<R;D++)S[D]=0}function m(S){c(S,0)}function c(S,D){const R=s.newAttributes,O=s.enabledAttributes,q=s.attributeDivisors;R[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),q[S]!==D&&(t.vertexAttribDivisor(S,D),q[S]=D)}function _(){const S=s.newAttributes,D=s.enabledAttributes;for(let R=0,O=D.length;R<O;R++)D[R]!==S[R]&&(t.disableVertexAttribArray(R),D[R]=0)}function g(S,D,R,O,q,X,Y){Y===!0?t.vertexAttribIPointer(S,D,R,q,X):t.vertexAttribPointer(S,D,R,O,q,X)}function v(S,D,R,O){y();const q=O.attributes,X=R.getAttributes(),Y=D.defaultAttributeValues;for(const j in X){const U=X[j];if(U.location>=0){let V=q[j];if(V===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const $=V.normalized,ne=V.itemSize,me=e.get(V);if(me===void 0)continue;const Ie=me.buffer,Q=me.type,re=me.bytesPerElement,de=Q===t.INT||Q===t.UNSIGNED_INT||V.gpuType===Vd;if(V.isInterleavedBufferAttribute){const pe=V.data,be=pe.stride,Le=V.offset;if(pe.isInstancedInterleavedBuffer){for(let ke=0;ke<U.locationSize;ke++)c(U.location+ke,pe.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ke=0;ke<U.locationSize;ke++)m(U.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let ke=0;ke<U.locationSize;ke++)g(U.location+ke,ne/U.locationSize,Q,$,be*re,(Le+ne/U.locationSize*ke)*re,de)}else{if(V.isInstancedBufferAttribute){for(let pe=0;pe<U.locationSize;pe++)c(U.location+pe,V.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let pe=0;pe<U.locationSize;pe++)m(U.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let pe=0;pe<U.locationSize;pe++)g(U.location+pe,ne/U.locationSize,Q,$,ne*re,ne/U.locationSize*pe*re,de)}}else if(Y!==void 0){const $=Y[j];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(U.location,$);break;case 3:t.vertexAttrib3fv(U.location,$);break;case 4:t.vertexAttrib4fv(U.location,$);break;default:t.vertexAttrib1fv(U.location,$)}}}}_()}function P(){N();for(const S in i){const D=i[S];for(const R in D){const O=D[R];for(const q in O)d(O[q].object),delete O[q];delete D[R]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const R in D){const O=D[R];for(const q in O)d(O[q].object),delete O[q];delete D[R]}delete i[S.id]}function A(S){for(const D in i){const R=i[D];if(R[S.id]===void 0)continue;const O=R[S.id];for(const q in O)d(O[q].object),delete O[q];delete R[S.id]}}function N(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function JE(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function o(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function a(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=d[x];n.update(p,i,1)}function l(u,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u.length;x++)o(u[x],d[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let x=0;for(let y=0;y<h;y++)x+=d[y];for(let y=0;y<f.length;y++)n.update(x,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==On&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const A=C===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ui&&!A)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:c,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:v,maxSamples:P}}function t1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ri,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!m)s?d(null):u();else{const _=s?0:i,g=_*4;let v=c.clippingState||null;l.value=v,v=d(x,f,g,p);for(let P=0;P!==g;++P)v[P]=n[P];c.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,x){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const c=p+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,v=p;g!==y;++g,v+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function n1(t){let e=new WeakMap;function n(o,a){return a===ff?o.mapping=Ps:a===df&&(o.mapping=Ls),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ff||a===df)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new hS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class f_ extends l_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,Vp=[.125,.215,.35,.446,.526,.582],dr=20,ic=new f_,Gp=new Ge;let rc=null,sc=0,oc=0,ac=!1;const cr=(1+Math.sqrt(5))/2,$r=1/cr,Wp=[new W(-cr,$r,0),new W(cr,$r,0),new W(-$r,0,cr),new W($r,0,cr),new W(0,cr,-$r),new W(0,cr,$r),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rc,sc,oc),this._renderer.xr.enabled=ac,e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ho,format:On,colorSpace:Ji,depthBuffer:!1},r=jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i1(s)),this._blurMaterial=r1(s,e,n)}return r}_compileMaterial(e){const n=new Zt(this._lodPlanes[0],e);this._renderer.compile(n,ic)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Gp),d.toneMapping=Wi,d.autoClear=!1;const p=new r_({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),x=new Zt(new Cr,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Gp),y=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;ba(r,_*g,c>2?g:0,g,g),d.setRenderTarget(r),y&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ps||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ba(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ic)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wp[(r-s-1)%Wp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Zt(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*dr-1),y=s/x,m=isFinite(s)?1+Math.floor(d*y):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const c=[];let _=0;for(let A=0;A<dr;++A){const N=A/y,E=Math.exp(-N*N/2);c.push(E),A===0?_+=E:A<m&&(_+=2*E)}for(let A=0;A<c.length;A++)c[A]=c[A]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=c,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-i;const v=this._sizeLods[r],P=3*v*(r>g-fs?r-g+fs:0),C=4*(this._cubeSize-v);ba(n,P,C,3*v,2*v),l.setRenderTarget(n),l.render(h,ic)}}function i1(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+Vp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-fs?l=Vp[o-t+fs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,y=3,m=2,c=1,_=new Float32Array(y*x*p),g=new Float32Array(m*x*p),v=new Float32Array(c*x*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,N=C>2?0:-1,E=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];_.set(E,y*x*C),g.set(f,m*x*C);const S=[C,C,C,C,C,C];v.set(S,c*x*C)}const P=new dn;P.setAttribute("position",new zn(_,y)),P.setAttribute("uv",new zn(g,m)),P.setAttribute("faceIndex",new zn(v,c)),e.push(P),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jp(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ba(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function r1(t,e,n){const i=new Float32Array(dr),r=new W(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Yp(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function $p(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Jd(){return`

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
	`}function s1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ff||l===df,d=l===Ps||l===Ls;if(u||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Xp(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Xp(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function o1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ss("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function a1(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let m=0,c=y.length;m<c;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const y=p[x];for(let m=0,c=y.length;m<c;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,x=h.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let g=0,v=_.length;g<v;g+=3){const P=_[g+0],C=_[g+1],A=_[g+2];f.push(P,C,C,A,A,P)}}else if(x!==void 0){const _=x.array;y=x.version;for(let g=0,v=_.length/3-1;g<v;g+=3){const P=g+0,C=g+1,A=g+2;f.push(P,C,C,A,A,P)}}else return;const m=new(e_(f)?o_:s_)(f,1);m.version=y;const c=s.get(h);c&&e.remove(c),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function l1(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function u(f,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,f*o,x),n.update(p,i,x))}function d(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,x);let m=0;for(let c=0;c<x;c++)m+=p[c];n.update(m,i,1)}function h(f,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<f.length;c++)u(f[c]/o,p[c],y[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,x);let c=0;for(let _=0;_<x;_++)c+=p[_];for(let _=0;_<y.length;_++)n.update(c,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function u1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function c1(t,e,n){const i=new WeakMap,r=new Et;function s(o,a,l){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*C*4*h),N=new n_(A,P,C,h);N.type=ui,N.needsUpdate=!0;const E=v*4;for(let D=0;D<h;D++){const R=c[D],O=_[D],q=g[D],X=P*C*4*D;for(let Y=0;Y<R.count;Y++){const j=Y*E;x===!0&&(r.fromBufferAttribute(R,Y),A[X+j+0]=r.x,A[X+j+1]=r.y,A[X+j+2]=r.z,A[X+j+3]=0),y===!0&&(r.fromBufferAttribute(O,Y),A[X+j+4]=r.x,A[X+j+5]=r.y,A[X+j+6]=r.z,A[X+j+7]=0),m===!0&&(r.fromBufferAttribute(q,Y),A[X+j+8]=r.x,A[X+j+9]=r.y,A[X+j+10]=r.z,A[X+j+11]=q.itemSize===4?r.w:1)}}f={count:h,texture:N,size:new Ve(P,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<u.length;m++)x+=u[m];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function f1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class d_ extends jt{constructor(e,n,i,r,s,o,a,l,u,d=ys){if(d!==ys&&d!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ys&&(i=Tr),i===void 0&&d===Is&&(i=Ds),super(null,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const h_=new jt,qp=new d_(1,1),p_=new n_,m_=new Zy,g_=new u_,Kp=[],Zp=[],Qp=new Float32Array(16),Jp=new Float32Array(9),em=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kp[r];if(s===void 0&&(s=new Float32Array(r),Kp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ou(t,e){let n=Zp[e];n===void 0&&(n=new Int32Array(e),Zp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function d1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function g1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;em.set(i),t.uniformMatrix2fv(this.addr,!1,em),At(n,i)}}function _1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Jp.set(i),t.uniformMatrix3fv(this.addr,!1,Jp),At(n,i)}}function v1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Qp.set(i),t.uniformMatrix4fv(this.addr,!1,Qp),At(n,i)}}function x1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function E1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qp.compareFunction=J0,s=qp):s=h_,n.setTexture2D(e||s,r)}function R1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m_,r)}function b1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g_,r)}function P1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p_,r)}function L1(t){switch(t){case 5126:return d1;case 35664:return h1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return x1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return M1;case 5125:return E1;case 36294:return w1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return P1}}function D1(t,e){t.uniform1fv(this.addr,e)}function I1(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function U1(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function N1(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function F1(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function O1(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function k1(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function B1(t,e){t.uniform1iv(this.addr,e)}function z1(t,e){t.uniform2iv(this.addr,e)}function H1(t,e){t.uniform3iv(this.addr,e)}function V1(t,e){t.uniform4iv(this.addr,e)}function G1(t,e){t.uniform1uiv(this.addr,e)}function W1(t,e){t.uniform2uiv(this.addr,e)}function X1(t,e){t.uniform3uiv(this.addr,e)}function j1(t,e){t.uniform4uiv(this.addr,e)}function Y1(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||h_,s[o])}function $1(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||m_,s[o])}function q1(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||g_,s[o])}function K1(t,e,n){const i=this.cache,r=e.length,s=ou(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||p_,s[o])}function Z1(t){switch(t){case 5126:return D1;case 35664:return I1;case 35665:return U1;case 35666:return N1;case 35674:return F1;case 35675:return O1;case 35676:return k1;case 5124:case 35670:return B1;case 35667:case 35671:return z1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return X1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return K1}}class Q1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=L1(n.type)}}class J1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Z1(n.type)}}class ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function tm(t,e){t.seq.push(e),t.map[e.id]=e}function tw(t,e,n){const i=t.name,r=i.length;for(lc.lastIndex=0;;){const s=lc.exec(i),o=lc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){tm(n,u===void 0?new Q1(a,t,e):new J1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new ew(a),tm(n,h)),n=h}}}class sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);tw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function nm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nw=37297;let iw=0;function rw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function sw(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Ul&&n===Il?i="LinearDisplayP3ToLinearSRGB":e===Il&&n===Ul&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case ru:return[i,"LinearTransferOETF"];case jn:case qd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rw(t.getShaderSource(e),o)}else return r}function ow(t,e){const n=sw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function aw(t,e){let n;switch(e){case Ty:n="Linear";break;case Ay:n="Reinhard";break;case Cy:n="Cineon";break;case Ry:n="ACESFilmic";break;case Py:n="AgX";break;case Ly:n="Neutral";break;case by:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pa=new W;function lw(){tt.getLuminanceCoefficients(Pa);const t=Pa.x.toFixed(4),e=Pa.y.toFixed(4),n=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function cw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ao(t){return t!==""}function rm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(t){return t.replace(dw,pw)}const hw=new Map;function pw(t,e){let n=We[e];if(n===void 0){const i=hw.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gf(n)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(t){return t.replace(mw,gw)}function gw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function am(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function _w(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===H0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function vw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function yw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case nu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ey:e="ENVMAP_BLENDING_MIX";break;case wy:e="ENVMAP_BLENDING_ADD";break}return e}function Sw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Mw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_w(n),u=vw(n),d=xw(n),h=yw(n),f=Sw(n),p=uw(n),x=cw(s),y=r.createProgram();let m,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ao).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ao).join(`
`),c.length>0&&(c+=`
`)):(m=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),c=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?We.tonemapping_pars_fragment:"",n.toneMapping!==Wi?aw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,ow("linearToOutputTexel",n.outputColorSpace),lw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),o=Gf(o),o=rm(o,n),o=sm(o,n),a=Gf(a),a=rm(a,n),a=sm(a,n),o=om(o),a=om(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+m+o,v=_+c+a,P=nm(r,r.VERTEX_SHADER,g),C=nm(r,r.FRAGMENT_SHADER,v);r.attachShader(y,P),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(D){if(t.debug.checkShaderErrors){const R=r.getProgramInfoLog(y).trim(),O=r.getShaderInfoLog(P).trim(),q=r.getShaderInfoLog(C).trim();let X=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,C);else{const j=im(r,P,"vertex"),U=im(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+R+`
`+j+`
`+U)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(O===""||q==="")&&(Y=!1);Y&&(D.diagnostics={runnable:X,programLog:R,vertexShader:{log:O,prefix:m},fragmentShader:{log:q,prefix:c}})}r.deleteShader(P),r.deleteShader(C),N=new sl(r,y),E=fw(r,y)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,nw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=C,this}let Ew=0;class ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Tw(e),n.set(e,i)),i}}class Tw{constructor(e){this.id=Ew++,this.code=e,this.usedTimes=0}}function Aw(t,e,n,i,r,s,o){const a=new Zd,l=new ww,u=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,R,O){const q=R.fog,X=O.geometry,Y=E.isMeshStandardMaterial?R.environment:null,j=(E.isMeshStandardMaterial?n:e).get(E.envMap||Y),U=j&&j.mapping===iu?j.image.height:null,V=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ne=$!==void 0?$.length:0;let me=0;X.morphAttributes.position!==void 0&&(me=1),X.morphAttributes.normal!==void 0&&(me=2),X.morphAttributes.color!==void 0&&(me=3);let Ie,Q,re,de;if(V){const Ze=Yn[V];Ie=Ze.vertexShader,Q=Ze.fragmentShader}else Ie=E.vertexShader,Q=E.fragmentShader,l.update(E),re=l.getVertexShaderID(E),de=l.getFragmentShaderID(E);const pe=t.getRenderTarget(),be=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,ke=!!E.map,te=!!E.matcap,L=!!j,Ce=!!E.aoMap,we=!!E.lightMap,ye=!!E.bumpMap,oe=!!E.normalMap,Fe=!!E.displacementMap,ve=!!E.emissiveMap,De=!!E.metalnessMap,I=!!E.roughnessMap,M=E.anisotropy>0,H=E.clearcoat>0,F=E.dispersion>0,T=E.iridescence>0,b=E.sheen>0,ee=E.transmission>0,J=M&&!!E.anisotropyMap,ue=H&&!!E.clearcoatMap,He=H&&!!E.clearcoatNormalMap,le=H&&!!E.clearcoatRoughnessMap,xe=T&&!!E.iridescenceMap,$e=T&&!!E.iridescenceThicknessMap,Be=b&&!!E.sheenColorMap,Me=b&&!!E.sheenRoughnessMap,ze=!!E.specularMap,je=!!E.specularColorMap,ct=!!E.specularIntensityMap,k=ee&&!!E.transmissionMap,ce=ee&&!!E.thicknessMap,ie=!!E.gradientMap,se=!!E.alphaMap,he=E.alphaTest>0,Ue=!!E.alphaHash,qe=!!E.extensions;let vt=Wi;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Lt={shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:Ie,fragmentShader:Q,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ji,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:te,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:U,aoMap:Ce,lightMap:we,bumpMap:ye,normalMap:oe,displacementMap:f&&Fe,emissiveMap:ve,normalMapObjectSpace:oe&&E.normalMapType===Ny,normalMapTangentSpace:oe&&E.normalMapType===$d,metalnessMap:De,roughnessMap:I,anisotropy:M,anisotropyMap:J,clearcoat:H,clearcoatMap:ue,clearcoatNormalMap:He,clearcoatRoughnessMap:le,dispersion:F,iridescence:T,iridescenceMap:xe,iridescenceThicknessMap:$e,sheen:b,sheenColorMap:Be,sheenRoughnessMap:Me,specularMap:ze,specularColorMap:je,specularIntensityMap:ct,transmission:ee,transmissionMap:k,thicknessMap:ce,gradientMap:ie,opaque:E.transparent===!1&&E.blending===xs&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:he,alphaHash:Ue,combine:E.combine,mapUv:ke&&y(E.map.channel),aoMapUv:Ce&&y(E.aoMap.channel),lightMapUv:we&&y(E.lightMap.channel),bumpMapUv:ye&&y(E.bumpMap.channel),normalMapUv:oe&&y(E.normalMap.channel),displacementMapUv:Fe&&y(E.displacementMap.channel),emissiveMapUv:ve&&y(E.emissiveMap.channel),metalnessMapUv:De&&y(E.metalnessMap.channel),roughnessMapUv:I&&y(E.roughnessMap.channel),anisotropyMapUv:J&&y(E.anisotropyMap.channel),clearcoatMapUv:ue&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&y(E.sheenRoughnessMap.channel),specularMapUv:ze&&y(E.specularMap.channel),specularColorMapUv:je&&y(E.specularColorMap.channel),specularIntensityMapUv:ct&&y(E.specularIntensityMap.channel),transmissionMapUv:k&&y(E.transmissionMap.channel),thicknessMapUv:ce&&y(E.thicknessMap.channel),alphaMapUv:se&&y(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(oe||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ke||se),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nn,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:qe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&E.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Lt.vertexUv1s=u.has(1),Lt.vertexUv2s=u.has(2),Lt.vertexUv3s=u.has(3),u.clear(),Lt}function c(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(_(S,E),g(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function g(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function v(E){const S=x[E.type];let D;if(S){const R=Yn[S];D=uS.clone(R.uniforms)}else D=E.uniforms;return D}function P(E,S){let D;for(let R=0,O=d.length;R<O;R++){const q=d[R];if(q.cacheKey===S){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Mw(t,S,E,s),d.push(D)),D}function C(E){if(--E.usedTimes===0){const S=d.indexOf(E);d[S]=d[d.length-1],d.pop(),E.destroy()}}function A(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:v,acquireProgram:P,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:N}}function Cw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Rw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function um(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,x,y,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:y,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=f,c.material=p,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=y,c.group=m),e++,c}function a(h,f,p,x,y,m){const c=o(h,f,p,x,y,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,f,p,x,y,m){const c=o(h,f,p,x,y,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,f){n.length>1&&n.sort(h||Rw),i.length>1&&i.sort(f||lm),r.length>1&&r.sort(f||lm)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function bw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new um,t.set(i,[o])):r>=s.length?(o=new um,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Ge};break;case"SpotLight":n={position:new W,direction:new W,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function Lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Dw=0;function Iw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Uw(t){const e=new Pw,n=Lw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,s=new ut,o=new ut;function a(u){let d=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,x=0,y=0,m=0,c=0,_=0,g=0,v=0,P=0,C=0,A=0;u.sort(Iw);for(let E=0,S=u.length;E<S;E++){const D=u[E],R=D.color,O=D.intensity,q=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=R.r*O,h+=R.g*O,f+=R.b*O;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],O);A++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,U=n.get(D);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=Y,p++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(R).multiplyScalar(O),Y.distance=q,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[y]=Y;const j=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,j.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[y]=j.matrix,D.castShadow){const U=n.get(D);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=X,v++}y++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(R).multiplyScalar(O),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const j=D.shadow,U=n.get(D);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=X,i.pointShadowMatrix[x]=D.shadow.matrix,g++}i.point[x]=Y,x++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(O),Y.groundColor.copy(D.groundColor).multiplyScalar(O),i.hemi[c]=Y,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==x||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==c||N.numDirectionalShadows!==_||N.numPointShadows!==g||N.numSpotShadows!==v||N.numSpotMaps!==P||N.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=c,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.directionalLength=p,N.pointLength=x,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=c,N.numDirectionalShadows=_,N.numPointShadows=g,N.numSpotShadows=v,N.numSpotMaps=P,N.numLightProbes=A,i.version=Dw++)}function l(u,d){let h=0,f=0,p=0,x=0,y=0;const m=d.matrixWorldInverse;for(let c=0,_=u.length;c<_;c++){const g=u[c];if(g.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(g.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(g.width*.5,0,0),v.halfHeight.set(0,g.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const v=i.hemi[y];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function cm(t){const e=new Uw(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Nw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new cm(t),e.set(r,[a])):s>=o.length?(a=new cm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Fw extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
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
}`;function zw(t,e,n){let i=new Qd;const r=new Ve,s=new Ve,o=new Et,a=new Fw({depthPacking:Uy}),l=new Ow,u={},d=n.maxTextureSize,h={[$i]:nn,[nn]:$i,[Nn]:Nn},f=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:kw,fragmentShader:Bw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new dn;x.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Zt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z0;let c=this.type;this.render=function(C,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),R=t.state;R.setBlending(Gi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const O=c!==ri&&this.type===ri,q=c===ri&&this.type!==ri;for(let X=0,Y=C.length;X<Y;X++){const j=C[X],U=j.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const V=U.getFrameExtents();if(r.multiply(V),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/V.x),r.x=s.x*V.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/V.y),r.y=s.y*V.y,U.mapSize.y=s.y)),U.map===null||O===!0||q===!0){const ne=this.type!==ri?{minFilter:Mn,magFilter:Mn}:{};U.map!==null&&U.map.dispose(),U.map=new Ar(r.x,r.y,ne),U.map.texture.name=j.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const $=U.getViewportCount();for(let ne=0;ne<$;ne++){const me=U.getViewport(ne);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),R.viewport(o),U.updateMatrices(j,ne),i=U.getFrustum(),v(A,N,U.camera,j,this.type)}U.isPointLightShadow!==!0&&this.type===ri&&_(U,N),U.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,D)};function _(C,A){const N=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ar(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,N,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,N,p,y,null)}function g(C,A,N,E){let S=null;const D=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const R=S.uuid,O=A.uuid;let q=u[R];q===void 0&&(q={},u[R]=q);let X=q[O];X===void 0&&(X=S.clone(),q[O]=X,A.addEventListener("dispose",P)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,E===ri?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const R=t.properties.get(S);R.light=N}return S}function v(C,A,N,E,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ri)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const O=e.update(C),q=C.material;if(Array.isArray(q)){const X=O.groups;for(let Y=0,j=X.length;Y<j;Y++){const U=X[Y],V=q[U.materialIndex];if(V&&V.visible){const $=g(C,V,E,S);C.onBeforeShadow(t,C,A,N,O,$,U),t.renderBufferDirect(N,null,O,$,C,U),C.onAfterShadow(t,C,A,N,O,$,U)}}}else if(q.visible){const X=g(C,q,E,S);C.onBeforeShadow(t,C,A,N,O,X,null),t.renderBufferDirect(N,null,O,X,C,null),C.onAfterShadow(t,C,A,N,O,X,null)}}const R=C.children;for(let O=0,q=R.length;O<q;O++)v(R[O],A,N,E,S)}function P(C){C.target.removeEventListener("dispose",P);for(const N in u){const E=u[N],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function Hw(t){function e(){let k=!1;const ce=new Et;let ie=null;const se=new Et(0,0,0,0);return{setMask:function(he){ie!==he&&!k&&(t.colorMask(he,he,he,he),ie=he)},setLocked:function(he){k=he},setClear:function(he,Ue,qe,vt,Lt){Lt===!0&&(he*=vt,Ue*=vt,qe*=vt),ce.set(he,Ue,qe,vt),se.equals(ce)===!1&&(t.clearColor(he,Ue,qe,vt),se.copy(ce))},reset:function(){k=!1,ie=null,se.set(-1,0,0,0)}}}function n(){let k=!1,ce=null,ie=null,se=null;return{setTest:function(he){he?de(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(he){ce!==he&&!k&&(t.depthMask(he),ce=he)},setFunc:function(he){if(ie!==he){switch(he){case gy:t.depthFunc(t.NEVER);break;case _y:t.depthFunc(t.ALWAYS);break;case vy:t.depthFunc(t.LESS);break;case Ll:t.depthFunc(t.LEQUAL);break;case xy:t.depthFunc(t.EQUAL);break;case yy:t.depthFunc(t.GEQUAL);break;case Sy:t.depthFunc(t.GREATER);break;case My:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=he}},setLocked:function(he){k=he},setClear:function(he){se!==he&&(t.clearDepth(he),se=he)},reset:function(){k=!1,ce=null,ie=null,se=null}}}function i(){let k=!1,ce=null,ie=null,se=null,he=null,Ue=null,qe=null,vt=null,Lt=null;return{setTest:function(Ze){k||(Ze?de(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(Ze){ce!==Ze&&!k&&(t.stencilMask(Ze),ce=Ze)},setFunc:function(Ze,Qn,Gn){(ie!==Ze||se!==Qn||he!==Gn)&&(t.stencilFunc(Ze,Qn,Gn),ie=Ze,se=Qn,he=Gn)},setOp:function(Ze,Qn,Gn){(Ue!==Ze||qe!==Qn||vt!==Gn)&&(t.stencilOp(Ze,Qn,Gn),Ue=Ze,qe=Qn,vt=Gn)},setLocked:function(Ze){k=Ze},setClear:function(Ze){Lt!==Ze&&(t.clearStencil(Ze),Lt=Ze)},reset:function(){k=!1,ce=null,ie=null,se=null,he=null,Ue=null,qe=null,vt=null,Lt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,x=!1,y=null,m=null,c=null,_=null,g=null,v=null,P=null,C=new Ge(0,0,0),A=0,N=!1,E=null,S=null,D=null,R=null,O=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=Y>=2);let U=null,V={};const $=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),me=new Et().fromArray($),Ie=new Et().fromArray(ne);function Q(k,ce,ie,se){const he=new Uint8Array(4),Ue=t.createTexture();t.bindTexture(k,Ue),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<ie;qe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return Ue}const re={};re[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(Ll),ye(!1),oe(_p),de(t.CULL_FACE),Ce(Gi);function de(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function pe(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function be(k,ce){return d[k]!==ce?(t.bindFramebuffer(k,ce),d[k]=ce,k===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),k===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Le(k,ce){let ie=f,se=!1;if(k){ie=h.get(ce),ie===void 0&&(ie=[],h.set(ce,ie));const he=k.textures;if(ie.length!==he.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Ue=0,qe=he.length;Ue<qe;Ue++)ie[Ue]=t.COLOR_ATTACHMENT0+Ue;ie.length=he.length,se=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,se=!0);se&&t.drawBuffers(ie)}function ke(k){return p!==k?(t.useProgram(k),p=k,!0):!1}const te={[fr]:t.FUNC_ADD,[Jx]:t.FUNC_SUBTRACT,[ey]:t.FUNC_REVERSE_SUBTRACT};te[ty]=t.MIN,te[ny]=t.MAX;const L={[iy]:t.ZERO,[ry]:t.ONE,[sy]:t.SRC_COLOR,[uf]:t.SRC_ALPHA,[fy]:t.SRC_ALPHA_SATURATE,[uy]:t.DST_COLOR,[ay]:t.DST_ALPHA,[oy]:t.ONE_MINUS_SRC_COLOR,[cf]:t.ONE_MINUS_SRC_ALPHA,[cy]:t.ONE_MINUS_DST_COLOR,[ly]:t.ONE_MINUS_DST_ALPHA,[dy]:t.CONSTANT_COLOR,[hy]:t.ONE_MINUS_CONSTANT_COLOR,[py]:t.CONSTANT_ALPHA,[my]:t.ONE_MINUS_CONSTANT_ALPHA};function Ce(k,ce,ie,se,he,Ue,qe,vt,Lt,Ze){if(k===Gi){x===!0&&(pe(t.BLEND),x=!1);return}if(x===!1&&(de(t.BLEND),x=!0),k!==Qx){if(k!==y||Ze!==N){if((m!==fr||g!==fr)&&(t.blendEquation(t.FUNC_ADD),m=fr,g=fr),Ze)switch(k){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vp:t.blendFunc(t.ONE,t.ONE);break;case xp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}c=null,_=null,v=null,P=null,C.set(0,0,0),A=0,y=k,N=Ze}return}he=he||ce,Ue=Ue||ie,qe=qe||se,(ce!==m||he!==g)&&(t.blendEquationSeparate(te[ce],te[he]),m=ce,g=he),(ie!==c||se!==_||Ue!==v||qe!==P)&&(t.blendFuncSeparate(L[ie],L[se],L[Ue],L[qe]),c=ie,_=se,v=Ue,P=qe),(vt.equals(C)===!1||Lt!==A)&&(t.blendColor(vt.r,vt.g,vt.b,Lt),C.copy(vt),A=Lt),y=k,N=!1}function we(k,ce){k.side===Nn?pe(t.CULL_FACE):de(t.CULL_FACE);let ie=k.side===nn;ce&&(ie=!ie),ye(ie),k.blending===xs&&k.transparent===!1?Ce(Gi):Ce(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const se=k.stencilWrite;o.setTest(se),se&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ye(k){E!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),E=k)}function oe(k){k!==Kx?(de(t.CULL_FACE),k!==S&&(k===_p?t.cullFace(t.BACK):k===Zx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),S=k}function Fe(k){k!==D&&(X&&t.lineWidth(k),D=k)}function ve(k,ce,ie){k?(de(t.POLYGON_OFFSET_FILL),(R!==ce||O!==ie)&&(t.polygonOffset(ce,ie),R=ce,O=ie)):pe(t.POLYGON_OFFSET_FILL)}function De(k){k?de(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function I(k){k===void 0&&(k=t.TEXTURE0+q-1),U!==k&&(t.activeTexture(k),U=k)}function M(k,ce,ie){ie===void 0&&(U===null?ie=t.TEXTURE0+q-1:ie=U);let se=V[ie];se===void 0&&(se={type:void 0,texture:void 0},V[ie]=se),(se.type!==k||se.texture!==ce)&&(U!==ie&&(t.activeTexture(ie),U=ie),t.bindTexture(k,ce||re[k]),se.type=k,se.texture=ce)}function H(){const k=V[U];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function F(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function T(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function b(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(k){me.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),me.copy(k))}function Me(k){Ie.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Ie.copy(k))}function ze(k,ce){let ie=l.get(ce);ie===void 0&&(ie=new WeakMap,l.set(ce,ie));let se=ie.get(k);se===void 0&&(se=t.getUniformBlockIndex(ce,k.name),ie.set(k,se))}function je(k,ce){const se=l.get(ce).get(k);a.get(ce)!==se&&(t.uniformBlockBinding(ce,se,k.__bindingPointIndex),a.set(ce,se))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},U=null,V={},d={},h=new WeakMap,f=[],p=null,x=!1,y=null,m=null,c=null,_=null,g=null,v=null,P=null,C=new Ge(0,0,0),A=0,N=!1,E=null,S=null,D=null,R=null,O=null,me.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:pe,bindFramebuffer:be,drawBuffers:Le,useProgram:ke,setBlending:Ce,setMaterial:we,setFlipSided:ye,setCullFace:oe,setLineWidth:Fe,setPolygonOffset:ve,setScissorTest:De,activeTexture:I,bindTexture:M,unbindTexture:H,compressedTexImage2D:F,compressedTexImage3D:T,texImage2D:xe,texImage3D:$e,updateUBOMapping:ze,uniformBlockBinding:je,texStorage2D:He,texStorage3D:le,texSubImage2D:b,texSubImage3D:ee,compressedTexSubImage2D:J,compressedTexSubImage3D:ue,scissor:Be,viewport:Me,reset:ct}}function fm(t,e,n,i){const r=Vw(i);switch(n){case j0:return t*e;case $0:return t*e;case q0:return t*e*2;case K0:return t*e/r.components*r.byteLength;case Xd:return t*e/r.components*r.byteLength;case Z0:return t*e*2/r.components*r.byteLength;case jd:return t*e*2/r.components*r.byteLength;case Y0:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case Yd:return t*e*4/r.components*r.byteLength;case Ja:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case tl:case nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gf:case vf:return Math.max(t,16)*Math.max(e,8)/4;case mf:case _f:return Math.max(t,8)*Math.max(e,8)/2;case xf:case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case il:case Ff:case Of:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Q0:case kf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bf:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Vw(t){switch(t){case gi:case G0:return{byteLength:1,components:1};case No:case W0:case Ho:return{byteLength:2,components:1};case Gd:case Wd:return{byteLength:2,components:4};case Tr:case Vd:case ui:return{byteLength:4,components:1};case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Gw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,M){return p?new OffscreenCanvas(I,M):Fl("canvas")}function y(I,M,H){let F=1;const T=De(I);if((T.width>H||T.height>H)&&(F=H/Math.max(T.width,T.height)),F<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const b=Math.floor(F*T.width),ee=Math.floor(F*T.height);h===void 0&&(h=x(b,ee));const J=M?x(b,ee):h;return J.width=b,J.height=ee,J.getContext("2d").drawImage(I,0,0,b,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+b+"x"+ee+")."),J}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),I;return I}function m(I){return I.generateMipmaps&&I.minFilter!==Mn&&I.minFilter!==Fn}function c(I){t.generateMipmap(I)}function _(I,M,H,F,T=!1){if(I!==null){if(t[I]!==void 0)return t[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let b=M;if(M===t.RED&&(H===t.FLOAT&&(b=t.R32F),H===t.HALF_FLOAT&&(b=t.R16F),H===t.UNSIGNED_BYTE&&(b=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(b=t.R8UI),H===t.UNSIGNED_SHORT&&(b=t.R16UI),H===t.UNSIGNED_INT&&(b=t.R32UI),H===t.BYTE&&(b=t.R8I),H===t.SHORT&&(b=t.R16I),H===t.INT&&(b=t.R32I)),M===t.RG&&(H===t.FLOAT&&(b=t.RG32F),H===t.HALF_FLOAT&&(b=t.RG16F),H===t.UNSIGNED_BYTE&&(b=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(b=t.RG8UI),H===t.UNSIGNED_SHORT&&(b=t.RG16UI),H===t.UNSIGNED_INT&&(b=t.RG32UI),H===t.BYTE&&(b=t.RG8I),H===t.SHORT&&(b=t.RG16I),H===t.INT&&(b=t.RG32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(b=t.RGB9_E5),M===t.RGBA){const ee=T?Dl:tt.getTransfer(F);H===t.FLOAT&&(b=t.RGBA32F),H===t.HALF_FLOAT&&(b=t.RGBA16F),H===t.UNSIGNED_BYTE&&(b=ee===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(b=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(b=t.RGB5_A1)}return(b===t.R16F||b===t.R32F||b===t.RG16F||b===t.RG32F||b===t.RGBA16F||b===t.RGBA32F)&&e.get("EXT_color_buffer_float"),b}function g(I,M){let H;return I?M===null||M===Tr||M===Ds?H=t.DEPTH24_STENCIL8:M===ui?H=t.DEPTH32F_STENCIL8:M===No&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Tr||M===Ds?H=t.DEPTH_COMPONENT24:M===ui?H=t.DEPTH_COMPONENT32F:M===No&&(H=t.DEPTH_COMPONENT16),H}function v(I,M){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Mn&&I.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function P(I){const M=I.target;M.removeEventListener("dispose",P),A(M),M.isVideoTexture&&d.delete(M)}function C(I){const M=I.target;M.removeEventListener("dispose",C),E(M)}function A(I){const M=i.get(I);if(M.__webglInit===void 0)return;const H=I.source,F=f.get(H);if(F){const T=F[M.__cacheKey];T.usedTimes--,T.usedTimes===0&&N(I),Object.keys(F).length===0&&f.delete(H)}i.remove(I)}function N(I){const M=i.get(I);t.deleteTexture(M.__webglTexture);const H=I.source,F=f.get(H);delete F[M.__cacheKey],o.memory.textures--}function E(I){const M=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(M.__webglFramebuffer[F]))for(let T=0;T<M.__webglFramebuffer[F].length;T++)t.deleteFramebuffer(M.__webglFramebuffer[F][T]);else t.deleteFramebuffer(M.__webglFramebuffer[F]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[F])}else{if(Array.isArray(M.__webglFramebuffer))for(let F=0;F<M.__webglFramebuffer.length;F++)t.deleteFramebuffer(M.__webglFramebuffer[F]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let F=0;F<M.__webglColorRenderbuffer.length;F++)M.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[F]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=I.textures;for(let F=0,T=H.length;F<T;F++){const b=i.get(H[F]);b.__webglTexture&&(t.deleteTexture(b.__webglTexture),o.memory.textures--),i.remove(H[F])}i.remove(I)}let S=0;function D(){S=0}function R(){const I=S;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),S+=1,I}function O(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function q(I,M){const H=i.get(I);if(I.isVideoTexture&&Fe(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){const F=I.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(H,I,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function X(I,M){const H=i.get(I);if(I.version>0&&H.__version!==I.version){Ie(H,I,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function Y(I,M){const H=i.get(I);if(I.version>0&&H.__version!==I.version){Ie(H,I,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function j(I,M){const H=i.get(I);if(I.version>0&&H.__version!==I.version){Q(H,I,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const U={[hf]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[pf]:t.MIRRORED_REPEAT},V={[Mn]:t.NEAREST,[Dy]:t.NEAREST_MIPMAP_NEAREST,[ua]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[Ou]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},$={[Fy]:t.NEVER,[Vy]:t.ALWAYS,[Oy]:t.LESS,[J0]:t.LEQUAL,[ky]:t.EQUAL,[Hy]:t.GEQUAL,[By]:t.GREATER,[zy]:t.NOTEQUAL};function ne(I,M){if(M.type===ui&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===Ou||M.magFilter===ua||M.magFilter===_r||M.minFilter===Fn||M.minFilter===Ou||M.minFilter===ua||M.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,U[M.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,U[M.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,U[M.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,V[M.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,V[M.minFilter]),M.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mn||M.minFilter!==ua&&M.minFilter!==_r||M.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function me(I,M){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",P));const F=M.source;let T=f.get(F);T===void 0&&(T={},f.set(F,T));const b=O(M);if(b!==I.__cacheKey){T[b]===void 0&&(T[b]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),T[b].usedTimes++;const ee=T[I.__cacheKey];ee!==void 0&&(T[I.__cacheKey].usedTimes--,ee.usedTimes===0&&N(M)),I.__cacheKey=b,I.__webglTexture=T[b].texture}return H}function Ie(I,M,H){let F=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(F=t.TEXTURE_3D);const T=me(I,M),b=M.source;n.bindTexture(F,I.__webglTexture,t.TEXTURE0+H);const ee=i.get(b);if(b.version!==ee.__version||T===!0){n.activeTexture(t.TEXTURE0+H);const J=tt.getPrimaries(tt.workingColorSpace),ue=M.colorSpace===Li?null:tt.getPrimaries(M.colorSpace),He=M.colorSpace===Li||J===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let le=y(M.image,!1,r.maxTextureSize);le=ve(M,le);const xe=s.convert(M.format,M.colorSpace),$e=s.convert(M.type);let Be=_(M.internalFormat,xe,$e,M.colorSpace,M.isVideoTexture);ne(F,M);let Me;const ze=M.mipmaps,je=M.isVideoTexture!==!0,ct=ee.__version===void 0||T===!0,k=b.dataReady,ce=v(M,le);if(M.isDepthTexture)Be=g(M.format===Is,M.type),ct&&(je?n.texStorage2D(t.TEXTURE_2D,1,Be,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Be,le.width,le.height,0,xe,$e,null));else if(M.isDataTexture)if(ze.length>0){je&&ct&&n.texStorage2D(t.TEXTURE_2D,ce,Be,ze[0].width,ze[0].height);for(let ie=0,se=ze.length;ie<se;ie++)Me=ze[ie],je?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Me.width,Me.height,xe,$e,Me.data):n.texImage2D(t.TEXTURE_2D,ie,Be,Me.width,Me.height,0,xe,$e,Me.data);M.generateMipmaps=!1}else je?(ct&&n.texStorage2D(t.TEXTURE_2D,ce,Be,le.width,le.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,xe,$e,le.data)):n.texImage2D(t.TEXTURE_2D,0,Be,le.width,le.height,0,xe,$e,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Be,ze[0].width,ze[0].height,le.depth);for(let ie=0,se=ze.length;ie<se;ie++)if(Me=ze[ie],M.format!==On)if(xe!==null)if(je){if(k)if(M.layerUpdates.size>0){const he=fm(Me.width,Me.height,M.format,M.type);for(const Ue of M.layerUpdates){const qe=Me.data.subarray(Ue*he/Me.data.BYTES_PER_ELEMENT,(Ue+1)*he/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Ue,Me.width,Me.height,1,xe,qe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,Me.width,Me.height,le.depth,xe,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Be,Me.width,Me.height,le.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,Me.width,Me.height,le.depth,xe,$e,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Be,Me.width,Me.height,le.depth,0,xe,$e,Me.data)}else{je&&ct&&n.texStorage2D(t.TEXTURE_2D,ce,Be,ze[0].width,ze[0].height);for(let ie=0,se=ze.length;ie<se;ie++)Me=ze[ie],M.format!==On?xe!==null?je?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,Me.width,Me.height,xe,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Me.width,Me.height,xe,$e,Me.data):n.texImage2D(t.TEXTURE_2D,ie,Be,Me.width,Me.height,0,xe,$e,Me.data)}else if(M.isDataArrayTexture)if(je){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Be,le.width,le.height,le.depth),k)if(M.layerUpdates.size>0){const ie=fm(le.width,le.height,M.format,M.type);for(const se of M.layerUpdates){const he=le.data.subarray(se*ie/le.data.BYTES_PER_ELEMENT,(se+1)*ie/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,le.width,le.height,1,xe,$e,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,$e,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,le.width,le.height,le.depth,0,xe,$e,le.data);else if(M.isData3DTexture)je?(ct&&n.texStorage3D(t.TEXTURE_3D,ce,Be,le.width,le.height,le.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,$e,le.data)):n.texImage3D(t.TEXTURE_3D,0,Be,le.width,le.height,le.depth,0,xe,$e,le.data);else if(M.isFramebufferTexture){if(ct)if(je)n.texStorage2D(t.TEXTURE_2D,ce,Be,le.width,le.height);else{let ie=le.width,se=le.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,Be,ie,se,0,xe,$e,null),ie>>=1,se>>=1}}else if(ze.length>0){if(je&&ct){const ie=De(ze[0]);n.texStorage2D(t.TEXTURE_2D,ce,Be,ie.width,ie.height)}for(let ie=0,se=ze.length;ie<se;ie++)Me=ze[ie],je?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,xe,$e,Me):n.texImage2D(t.TEXTURE_2D,ie,Be,xe,$e,Me);M.generateMipmaps=!1}else if(je){if(ct){const ie=De(le);n.texStorage2D(t.TEXTURE_2D,ce,Be,ie.width,ie.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,$e,le)}else n.texImage2D(t.TEXTURE_2D,0,Be,xe,$e,le);m(M)&&c(F),ee.__version=b.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Q(I,M,H){if(M.image.length!==6)return;const F=me(I,M),T=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+H);const b=i.get(T);if(T.version!==b.__version||F===!0){n.activeTexture(t.TEXTURE0+H);const ee=tt.getPrimaries(tt.workingColorSpace),J=M.colorSpace===Li?null:tt.getPrimaries(M.colorSpace),ue=M.colorSpace===Li||ee===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!He&&!le?xe[se]=y(M.image[se],!0,r.maxCubemapSize):xe[se]=le?M.image[se].image:M.image[se],xe[se]=ve(M,xe[se]);const $e=xe[0],Be=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),ze=_(M.internalFormat,Be,Me,M.colorSpace),je=M.isVideoTexture!==!0,ct=b.__version===void 0||F===!0,k=T.dataReady;let ce=v(M,$e);ne(t.TEXTURE_CUBE_MAP,M);let ie;if(He){je&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,$e.width,$e.height);for(let se=0;se<6;se++){ie=xe[se].mipmaps;for(let he=0;he<ie.length;he++){const Ue=ie[he];M.format!==On?Be!==null?je?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,he,0,0,Ue.width,Ue.height,Be,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,he,ze,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,he,0,0,Ue.width,Ue.height,Be,Me,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,he,ze,Ue.width,Ue.height,0,Be,Me,Ue.data)}}}else{if(ie=M.mipmaps,je&&ct){ie.length>0&&ce++;const se=De(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,se.width,se.height)}for(let se=0;se<6;se++)if(le){je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,Be,Me,xe[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,xe[se].width,xe[se].height,0,Be,Me,xe[se].data);for(let he=0;he<ie.length;he++){const qe=ie[he].image[se].image;je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,he+1,0,0,qe.width,qe.height,Be,Me,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,he+1,ze,qe.width,qe.height,0,Be,Me,qe.data)}}else{je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,Me,xe[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,Be,Me,xe[se]);for(let he=0;he<ie.length;he++){const Ue=ie[he];je?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,he+1,0,0,Be,Me,Ue.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,he+1,ze,Be,Me,Ue.image[se])}}}m(M)&&c(t.TEXTURE_CUBE_MAP),b.__version=T.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function re(I,M,H,F,T,b){const ee=s.convert(H.format,H.colorSpace),J=s.convert(H.type),ue=_(H.internalFormat,ee,J,H.colorSpace);if(!i.get(M).__hasExternalTextures){const le=Math.max(1,M.width>>b),xe=Math.max(1,M.height>>b);T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY?n.texImage3D(T,b,ue,le,xe,M.depth,0,ee,J,null):n.texImage2D(T,b,ue,le,xe,0,ee,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),oe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,T,i.get(H).__webglTexture,0,ye(M)):(T===t.TEXTURE_2D||T>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,T,i.get(H).__webglTexture,b),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(I,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,I),M.depthBuffer){const F=M.depthTexture,T=F&&F.isDepthTexture?F.type:null,b=g(M.stencilBuffer,T),ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=ye(M);oe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,b,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,J,b,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,b,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,I)}else{const F=M.textures;for(let T=0;T<F.length;T++){const b=F[T],ee=s.convert(b.format,b.colorSpace),J=s.convert(b.type),ue=_(b.internalFormat,ee,J,b.colorSpace),He=ye(M);H&&oe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,ue,M.width,M.height):oe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ue,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(I,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const F=i.get(M.depthTexture).__webglTexture,T=ye(M);if(M.depthTexture.format===ys)oe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,T):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(M.depthTexture.format===Is)oe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,T):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function be(I){const M=i.get(I),H=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const F=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),F){const T=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,F.removeEventListener("dispose",T)};F.addEventListener("dispose",T),M.__depthDisposeCallback=T}M.__boundDepthTexture=F}if(I.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");pe(M.__webglFramebuffer,I)}else if(H){M.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[F]),M.__webglDepthbuffer[F]===void 0)M.__webglDepthbuffer[F]=t.createRenderbuffer(),de(M.__webglDepthbuffer[F],I,!1);else{const T=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,b=M.__webglDepthbuffer[F];t.bindRenderbuffer(t.RENDERBUFFER,b),t.framebufferRenderbuffer(t.FRAMEBUFFER,T,t.RENDERBUFFER,b)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,I,!1);else{const F=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,T=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,T),t.framebufferRenderbuffer(t.FRAMEBUFFER,F,t.RENDERBUFFER,T)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(I,M,H){const F=i.get(I);M!==void 0&&re(F.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&be(I)}function ke(I){const M=I.texture,H=i.get(I),F=i.get(M);I.addEventListener("dispose",C);const T=I.textures,b=I.isWebGLCubeRenderTarget===!0,ee=T.length>1;if(ee||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=M.version,o.memory.textures++),b){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let ue=0;ue<M.mipmaps.length;ue++)H.__webglFramebuffer[J][ue]=t.createFramebuffer()}else H.__webglFramebuffer[J]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)H.__webglFramebuffer[J]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ee)for(let J=0,ue=T.length;J<ue;J++){const He=i.get(T[J]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(I.samples>0&&oe(I)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<T.length;J++){const ue=T[J];H.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[J]);const He=s.convert(ue.format,ue.colorSpace),le=s.convert(ue.type),xe=_(ue.internalFormat,He,le,ue.colorSpace,I.isXRRenderTarget===!0),$e=ye(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,xe,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,H.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),de(H.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(b){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),ne(t.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)re(H.__webglFramebuffer[J][ue],I,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue);else re(H.__webglFramebuffer[J],I,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){for(let J=0,ue=T.length;J<ue;J++){const He=T[J],le=i.get(He);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),ne(t.TEXTURE_2D,He),re(H.__webglFramebuffer,I,He,t.COLOR_ATTACHMENT0+J,t.TEXTURE_2D,0),m(He)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(J=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,F.__webglTexture),ne(J,M),M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)re(H.__webglFramebuffer[ue],I,M,t.COLOR_ATTACHMENT0,J,ue);else re(H.__webglFramebuffer,I,M,t.COLOR_ATTACHMENT0,J,0);m(M)&&c(J),n.unbindTexture()}I.depthBuffer&&be(I)}function te(I){const M=I.textures;for(let H=0,F=M.length;H<F;H++){const T=M[H];if(m(T)){const b=I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ee=i.get(T).__webglTexture;n.bindTexture(b,ee),c(b),n.unbindTexture()}}}const L=[],Ce=[];function we(I){if(I.samples>0){if(oe(I)===!1){const M=I.textures,H=I.width,F=I.height;let T=t.COLOR_BUFFER_BIT;const b=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=i.get(I),J=M.length>1;if(J)for(let ue=0;ue<M.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(T|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(T|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ee.__webglColorRenderbuffer[ue]);const He=i.get(M[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,H,F,0,0,H,F,T,t.NEAREST),l===!0&&(L.length=0,Ce.length=0,L.push(t.COLOR_ATTACHMENT0+ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(L.push(b),Ce.push(b),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ce)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<M.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ee.__webglColorRenderbuffer[ue]);const He=i.get(M[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const M=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ye(I){return Math.min(r.maxSamples,I.samples)}function oe(I){const M=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Fe(I){const M=o.render.frame;d.get(I)!==M&&(d.set(I,M),I.update())}function ve(I,M){const H=I.colorSpace,F=I.format,T=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Ji&&H!==Li&&(tt.getTransfer(H)===ot?(F!==On||T!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function De(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=R,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Le,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=re,this.useMultisampledRTT=oe}function Ww(t,e){function n(i,r=Li){let s;const o=tt.getTransfer(r);if(i===gi)return t.UNSIGNED_BYTE;if(i===Gd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Wd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===X0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===G0)return t.BYTE;if(i===W0)return t.SHORT;if(i===No)return t.UNSIGNED_SHORT;if(i===Vd)return t.INT;if(i===Tr)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Ho)return t.HALF_FLOAT;if(i===j0)return t.ALPHA;if(i===Y0)return t.RGB;if(i===On)return t.RGBA;if(i===$0)return t.LUMINANCE;if(i===q0)return t.LUMINANCE_ALPHA;if(i===ys)return t.DEPTH_COMPONENT;if(i===Is)return t.DEPTH_STENCIL;if(i===K0)return t.RED;if(i===Xd)return t.RED_INTEGER;if(i===Z0)return t.RG;if(i===jd)return t.RG_INTEGER;if(i===Yd)return t.RGBA_INTEGER;if(i===Ja||i===el||i===tl||i===nl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mf||i===gf||i===_f||i===vf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xf||i===yf||i===Sf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xf||i===yf)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mf||i===Ef||i===wf||i===Tf||i===Af||i===Cf||i===Rf||i===bf||i===Pf||i===Lf||i===Df||i===If||i===Uf||i===Nf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ef)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Af)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Df)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===If)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===il||i===Ff||i===Of)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===il)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ff)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Of)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Q0||i===kf||i===Bf||i===zf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===il)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Xw extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jw={type:"move"};class uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,x=.005;u.inputState.pinching&&f>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Yw=`
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

}`;class qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:Yw,fragmentShader:$w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zt(new Ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kw extends ks{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,h=null,f=null,p=null,x=null;const y=new qw,m=n.getContextAttributes();let c=null,_=null;const g=[],v=[],P=new Ve;let C=null;const A=new xn;A.layers.enable(1),A.viewport=new Et;const N=new xn;N.layers.enable(2),N.viewport=new Et;const E=[A,N],S=new Xw;S.layers.enable(1),S.layers.enable(2);let D=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=g[Q];return re===void 0&&(re=new uc,g[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=g[Q];return re===void 0&&(re=new uc,g[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=g[Q];return re===void 0&&(re=new uc,g[Q]=re),re.getHandSpace()};function O(Q){const re=v.indexOf(Q.inputSource);if(re===-1)return;const de=g[re];de!==void 0&&(de.update(Q.inputSource,Q.frame,u||o),de.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",X);for(let Q=0;Q<g.length;Q++){const re=v[Q];re!==null&&(v[Q]=null,g[Q].disconnect(re))}D=null,R=null,y.reset(),e.setRenderTarget(c),p=null,f=null,h=null,r=null,_=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",q),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ar(p.framebufferWidth,p.framebufferHeight,{format:On,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,de=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Is:ys,de=m.stencil?Ds:Tr);const be={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ar(f.textureWidth,f.textureHeight,{format:On,type:gi,depthTexture:new d_(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(Q){for(let re=0;re<Q.removed.length;re++){const de=Q.removed[re],pe=v.indexOf(de);pe>=0&&(v[pe]=null,g[pe].disconnect(de))}for(let re=0;re<Q.added.length;re++){const de=Q.added[re];let pe=v.indexOf(de);if(pe===-1){for(let Le=0;Le<g.length;Le++)if(Le>=v.length){v.push(de),pe=Le;break}else if(v[Le]===null){v[Le]=de,pe=Le;break}if(pe===-1)break}const be=g[pe];be&&be.connect(de)}}const Y=new W,j=new W;function U(Q,re,de){Y.setFromMatrixPosition(re.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const pe=Y.distanceTo(j),be=re.projectionMatrix.elements,Le=de.projectionMatrix.elements,ke=be[14]/(be[10]-1),te=be[14]/(be[10]+1),L=(be[9]+1)/be[5],Ce=(be[9]-1)/be[5],we=(be[8]-1)/be[0],ye=(Le[8]+1)/Le[0],oe=ke*we,Fe=ke*ye,ve=pe/(-we+ye),De=ve*-we;if(re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(De),Q.translateZ(ve),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const I=ke+ve,M=te+ve,H=oe-De,F=Fe+(pe-De),T=L*te/M*I,b=Ce*te/M*I;Q.projectionMatrix.makePerspective(H,F,T,b,I,M),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function V(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let re=Q.near,de=Q.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(de=y.depthFar)),S.near=N.near=A.near=re,S.far=N.far=A.far=de,(D!==S.near||R!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,R=S.far);const pe=Q.parent,be=S.cameras;V(S,pe);for(let Le=0;Le<be.length;Le++)V(be[Le],pe);be.length===2?U(S,A,N):S.projectionMatrix.copy(A.projectionMatrix),$(Q,S,pe)};function $(Q,re,de){de===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(de.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Vf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ne=null;function me(Q,re){if(d=re.getViewerPose(u||o),x=re,d!==null){const de=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let pe=!1;de.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let Le=0;Le<de.length;Le++){const ke=de[Le];let te=null;if(p!==null)te=p.getViewport(ke);else{const Ce=h.getViewSubImage(f,ke);te=Ce.viewport,Le===0&&(e.setRenderTargetTextures(_,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(_))}let L=E[Le];L===void 0&&(L=new xn,L.layers.enable(Le),L.viewport=new Et,E[Le]=L),L.matrix.fromArray(ke.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(ke.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(te.x,te.y,te.width,te.height),Le===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(L)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Le=h.getDepthInformation(de[0]);Le&&Le.isValid&&Le.texture&&y.init(e,Le,r.renderState)}}for(let de=0;de<g.length;de++){const pe=v[de],be=g[de];pe!==null&&be!==void 0&&be.update(pe,re,u||o)}ne&&ne(Q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),x=null}const Ie=new c_;Ie.setAnimationLoop(me),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}}const ar=new Vn,Zw=new ut;function Qw(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,a_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,_,g,v){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),h(m,c)):c.isMeshPhongMaterial?(s(m,c),d(m,c)):c.isMeshStandardMaterial?(s(m,c),f(m,c),c.isMeshPhysicalMaterial&&p(m,c,v)):c.isMeshMatcapMaterial?(s(m,c),x(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),y(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,_,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===nn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===nn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const _=e.get(c),g=_.envMap,v=_.envMapRotation;g&&(m.envMap.value=g,ar.copy(v),ar.x*=-1,ar.y*=-1,ar.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(ar)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,_,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*_,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function f(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,_){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===nn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const _=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Jw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const v=g.program;i.uniformBlockBinding(_,v)}function u(_,g){let v=r[_.id];v===void 0&&(x(_),v=d(_),r[_.id]=v,_.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(_,P);const C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function d(_){const g=h();_.__bindingPointIndex=g;const v=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=r[_.id],v=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,A=v.length;C<A;C++){const N=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,S=N.length;E<S;E++){const D=N[E];if(p(D,C,E,P)===!0){const R=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let X=0;X<O.length;X++){const Y=O[X],j=y(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,R+q,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,R,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,v,P){const C=_.value,A=g+"_"+v;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const N=P[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return P[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function x(_){const g=_.uniforms;let v=0;const P=16;for(let A=0,N=g.length;A<N;A++){const E=Array.isArray(g[A])?g[A]:[g[A]];for(let S=0,D=E.length;S<D;S++){const R=E[S],O=Array.isArray(R.value)?R.value:[R.value];for(let q=0,X=O.length;q<X;q++){const Y=O[q],j=y(Y),U=v%P,V=U%j.boundary,$=U+V;v+=V,$!==0&&P-$<j.storage&&(v+=P-$),R.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=v,v+=j.storage}}}const C=v%P;return C>0&&(v+=P-C),_.__size=v,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const v=o.indexOf(g.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class eT{constructor(e={}){const{canvas:n=Wy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Wi,this.toneMappingExposure=1;const g=this;let v=!1,P=0,C=0,A=null,N=-1,E=null;const S=new Et,D=new Et;let R=null;const O=new Ge(0);let q=0,X=n.width,Y=n.height,j=1,U=null,V=null;const $=new Et(0,0,X,Y),ne=new Et(0,0,X,Y);let me=!1;const Ie=new Qd;let Q=!1,re=!1;const de=new ut,pe=new W,be=new Et,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function te(){return A===null?j:1}let L=i;function Ce(w,B){return n.getContext(w,B)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hd}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",he,!1),L===null){const B="webgl2";if(L=Ce(B,w),L===null)throw Ce(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let we,ye,oe,Fe,ve,De,I,M,H,F,T,b,ee,J,ue,He,le,xe,$e,Be,Me,ze,je,ct;function k(){we=new o1(L),we.init(),ze=new Ww(L,we),ye=new e1(L,we,e,ze),oe=new Hw(L),Fe=new u1(L),ve=new Cw,De=new Gw(L,we,oe,ve,ye,ze,Fe),I=new n1(g),M=new s1(g),H=new gS(L),je=new QE(L,H),F=new a1(L,H,Fe,je),T=new f1(L,F,H,Fe),$e=new c1(L,ye,De),He=new t1(ve),b=new Aw(g,I,M,we,ye,je,He),ee=new Qw(g,ve),J=new bw,ue=new Nw(we),xe=new ZE(g,I,M,oe,T,f,l),le=new zw(g,T,ye),ct=new Jw(L,Fe,ye,oe),Be=new JE(L,we,Fe),Me=new l1(L,we,Fe),Fe.programs=b.programs,g.capabilities=ye,g.extensions=we,g.properties=ve,g.renderLists=J,g.shadowMap=le,g.state=oe,g.info=Fe}k();const ce=new Kw(g,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=we.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=we.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(X,Y,!1))},this.getSize=function(w){return w.set(X,Y)},this.setSize=function(w,B,K=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,Y=B,n.width=Math.floor(w*j),n.height=Math.floor(B*j),K===!0&&(n.style.width=w+"px",n.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(X*j,Y*j).floor()},this.setDrawingBufferSize=function(w,B,K){X=w,Y=B,j=K,n.width=Math.floor(w*K),n.height=Math.floor(B*K),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,B,K,Z){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,B,K,Z),oe.viewport(S.copy($).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,B,K,Z){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,B,K,Z),oe.scissor(D.copy(ne).multiplyScalar(j).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){oe.setScissorTest(me=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){V=w},this.getClearColor=function(w){return w.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(w=!0,B=!0,K=!0){let Z=0;if(w){let z=!1;if(A!==null){const fe=A.texture.format;z=fe===Yd||fe===jd||fe===Xd}if(z){const fe=A.texture.type,_e=fe===gi||fe===Tr||fe===No||fe===Ds||fe===Gd||fe===Wd,Te=xe.getClearColor(),Ae=xe.getClearAlpha(),Ne=Te.r,Oe=Te.g,Re=Te.b;_e?(p[0]=Ne,p[1]=Oe,p[2]=Re,p[3]=Ae,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=Ne,x[1]=Oe,x[2]=Re,x[3]=Ae,L.clearBufferiv(L.COLOR,0,x))}else Z|=L.COLOR_BUFFER_BIT}B&&(Z|=L.DEPTH_BUFFER_BIT),K&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",he,!1),J.dispose(),ue.dispose(),ve.dispose(),I.dispose(),M.dispose(),T.dispose(),je.dispose(),ct.dispose(),b.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Gn),ce.removeEventListener("sessionend",th),tr.stop()};function ie(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const w=Fe.autoReset,B=le.enabled,K=le.autoUpdate,Z=le.needsUpdate,z=le.type;k(),Fe.autoReset=w,le.enabled=B,le.autoUpdate=K,le.needsUpdate=Z,le.type=z}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){const B=w.target;B.removeEventListener("dispose",Ue),qe(B)}function qe(w){vt(w),ve.remove(w)}function vt(w){const B=ve.get(w).programs;B!==void 0&&(B.forEach(function(K){b.releaseProgram(K)}),w.isShaderMaterial&&b.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,K,Z,z,fe){B===null&&(B=Le);const _e=z.isMesh&&z.matrixWorld.determinant()<0,Te=y_(w,B,K,Z,z);oe.setMaterial(Z,_e);let Ae=K.index,Ne=1;if(Z.wireframe===!0){if(Ae=F.getWireframeAttribute(K),Ae===void 0)return;Ne=2}const Oe=K.drawRange,Re=K.attributes.position;let Qe=Oe.start*Ne,pt=(Oe.start+Oe.count)*Ne;fe!==null&&(Qe=Math.max(Qe,fe.start*Ne),pt=Math.min(pt,(fe.start+fe.count)*Ne)),Ae!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,Ae.count)):Re!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Re.count));const mt=pt-Qe;if(mt<0||mt===1/0)return;je.setup(z,Z,Te,K,Ae);let rn,Je=Be;if(Ae!==null&&(rn=H.get(Ae),Je=Me,Je.setIndex(rn)),z.isMesh)Z.wireframe===!0?(oe.setLineWidth(Z.wireframeLinewidth*te()),Je.setMode(L.LINES)):Je.setMode(L.TRIANGLES);else if(z.isLine){let Pe=Z.linewidth;Pe===void 0&&(Pe=1),oe.setLineWidth(Pe*te()),z.isLineSegments?Je.setMode(L.LINES):z.isLineLoop?Je.setMode(L.LINE_LOOP):Je.setMode(L.LINE_STRIP)}else z.isPoints?Je.setMode(L.POINTS):z.isSprite&&Je.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Je.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Je.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pe=z._multiDrawStarts,Dt=z._multiDrawCounts,et=z._multiDrawCount,Cn=Ae?H.get(Ae).bytesPerElement:1,Pr=ve.get(Z).currentProgram.getUniforms();for(let sn=0;sn<et;sn++)Pr.setValue(L,"_gl_DrawID",sn),Je.render(Pe[sn]/Cn,Dt[sn])}else if(z.isInstancedMesh)Je.renderInstances(Qe,mt,z.count);else if(K.isInstancedBufferGeometry){const Pe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Dt=Math.min(K.instanceCount,Pe);Je.renderInstances(Qe,mt,Dt)}else Je.render(Qe,mt)};function Lt(w,B,K){w.transparent===!0&&w.side===Nn&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,Xo(w,B,K),w.side=$i,w.needsUpdate=!0,Xo(w,B,K),w.side=Nn):Xo(w,B,K)}this.compile=function(w,B,K=null){K===null&&(K=w),m=ue.get(K),m.init(B),_.push(m),K.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),w!==K&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const Z=new Set;return w.traverse(function(z){const fe=z.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){const Te=fe[_e];Lt(Te,K,z),Z.add(Te)}else Lt(fe,K,z),Z.add(fe)}),_.pop(),m=null,Z},this.compileAsync=function(w,B,K=null){const Z=this.compile(w,B,K);return new Promise(z=>{function fe(){if(Z.forEach(function(_e){ve.get(_e).currentProgram.isReady()&&Z.delete(_e)}),Z.size===0){z(w);return}setTimeout(fe,10)}we.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ze=null;function Qn(w){Ze&&Ze(w)}function Gn(){tr.stop()}function th(){tr.start()}const tr=new c_;tr.setAnimationLoop(Qn),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(w){Ze=w,ce.setAnimationLoop(w),w===null?tr.stop():tr.start()},ce.addEventListener("sessionstart",Gn),ce.addEventListener("sessionend",th),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(B),B=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,B,A),m=ue.get(w,_.length),m.init(B),_.push(m),de.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ie.setFromProjectionMatrix(de),re=this.localClippingEnabled,Q=He.init(this.clippingPlanes,re),y=J.get(w,c.length),y.init(),c.push(y),ce.enabled===!0&&ce.isPresenting===!0){const fe=g.xr.getDepthSensingMesh();fe!==null&&au(fe,B,-1/0,g.sortObjects)}au(w,B,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(U,V),ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ke&&xe.addToRenderList(y,w),this.info.render.frame++,Q===!0&&He.beginShadows();const K=m.state.shadowsArray;le.render(K,w,B),Q===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,z=y.transmissive;if(m.setupLights(),B.isArrayCamera){const fe=B.cameras;if(z.length>0)for(let _e=0,Te=fe.length;_e<Te;_e++){const Ae=fe[_e];ih(Z,z,w,Ae)}ke&&xe.render(w);for(let _e=0,Te=fe.length;_e<Te;_e++){const Ae=fe[_e];nh(y,w,Ae,Ae.viewport)}}else z.length>0&&ih(Z,z,w,B),ke&&xe.render(w),nh(y,w,B);A!==null&&(De.updateMultisampleRenderTarget(A),De.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(g,w,B),je.resetDefaultState(),N=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],Q===!0&&He.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?y=c[c.length-1]:y=null};function au(w,B,K,Z){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){Z&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);const _e=T.update(w),Te=w.material;Te.visible&&y.push(w,_e,Te,K,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){const _e=T.update(w),Te=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),be.copy(_e.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(de)),Array.isArray(Te)){const Ae=_e.groups;for(let Ne=0,Oe=Ae.length;Ne<Oe;Ne++){const Re=Ae[Ne],Qe=Te[Re.materialIndex];Qe&&Qe.visible&&y.push(w,_e,Qe,K,be.z,Re)}}else Te.visible&&y.push(w,_e,Te,K,be.z,null)}}const fe=w.children;for(let _e=0,Te=fe.length;_e<Te;_e++)au(fe[_e],B,K,Z)}function nh(w,B,K,Z){const z=w.opaque,fe=w.transmissive,_e=w.transparent;m.setupLightsView(K),Q===!0&&He.setGlobalState(g.clippingPlanes,K),Z&&oe.viewport(S.copy(Z)),z.length>0&&Wo(z,B,K),fe.length>0&&Wo(fe,B,K),_e.length>0&&Wo(_e,B,K),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function ih(w,B,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Ar(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?Ho:gi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const fe=m.state.transmissionRenderTarget[Z.id],_e=Z.viewport||S;fe.setSize(_e.z,_e.w);const Te=g.getRenderTarget();g.setRenderTarget(fe),g.getClearColor(O),q=g.getClearAlpha(),q<1&&g.setClearColor(16777215,.5),g.clear(),ke&&xe.render(K);const Ae=g.toneMapping;g.toneMapping=Wi;const Ne=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),Q===!0&&He.setGlobalState(g.clippingPlanes,Z),Wo(w,K,Z),De.updateMultisampleRenderTarget(fe),De.updateRenderTargetMipmap(fe),we.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Re=0,Qe=B.length;Re<Qe;Re++){const pt=B[Re],mt=pt.object,rn=pt.geometry,Je=pt.material,Pe=pt.group;if(Je.side===Nn&&mt.layers.test(Z.layers)){const Dt=Je.side;Je.side=nn,Je.needsUpdate=!0,rh(mt,K,Z,rn,Je,Pe),Je.side=Dt,Je.needsUpdate=!0,Oe=!0}}Oe===!0&&(De.updateMultisampleRenderTarget(fe),De.updateRenderTargetMipmap(fe))}g.setRenderTarget(Te),g.setClearColor(O,q),Ne!==void 0&&(Z.viewport=Ne),g.toneMapping=Ae}function Wo(w,B,K){const Z=B.isScene===!0?B.overrideMaterial:null;for(let z=0,fe=w.length;z<fe;z++){const _e=w[z],Te=_e.object,Ae=_e.geometry,Ne=Z===null?_e.material:Z,Oe=_e.group;Te.layers.test(K.layers)&&rh(Te,B,K,Ae,Ne,Oe)}}function rh(w,B,K,Z,z,fe){w.onBeforeRender(g,B,K,Z,z,fe),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(g,B,K,Z,w,fe),z.transparent===!0&&z.side===Nn&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,g.renderBufferDirect(K,B,Z,z,w,fe),z.side=$i,z.needsUpdate=!0,g.renderBufferDirect(K,B,Z,z,w,fe),z.side=Nn):g.renderBufferDirect(K,B,Z,z,w,fe),w.onAfterRender(g,B,K,Z,z,fe)}function Xo(w,B,K){B.isScene!==!0&&(B=Le);const Z=ve.get(w),z=m.state.lights,fe=m.state.shadowsArray,_e=z.state.version,Te=b.getParameters(w,z.state,fe,B,K),Ae=b.getProgramCacheKey(Te);let Ne=Z.programs;Z.environment=w.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(w.isMeshStandardMaterial?M:I).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Ue),Ne=new Map,Z.programs=Ne);let Oe=Ne.get(Ae);if(Oe!==void 0){if(Z.currentProgram===Oe&&Z.lightsStateVersion===_e)return oh(w,Te),Oe}else Te.uniforms=b.getUniforms(w),w.onBeforeCompile(Te,g),Oe=b.acquireProgram(Te,Ae),Ne.set(Ae,Oe),Z.uniforms=Te.uniforms;const Re=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=He.uniform),oh(w,Te),Z.needsLights=M_(w),Z.lightsStateVersion=_e,Z.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMap.value=z.state.directionalShadowMap,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotShadowMap.value=z.state.spotShadowMap,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMap.value=z.state.pointShadowMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=Oe,Z.uniformsList=null,Oe}function sh(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=sl.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function oh(w,B){const K=ve.get(w);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function y_(w,B,K,Z,z){B.isScene!==!0&&(B=Le),De.resetTextureUnits();const fe=B.fog,_e=Z.isMeshStandardMaterial?B.environment:null,Te=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ji,Ae=(Z.isMeshStandardMaterial?M:I).get(Z.envMap||_e),Ne=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Oe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Re=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,pt=!!K.morphAttributes.color;let mt=Wi;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=g.toneMapping);const rn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Je=rn!==void 0?rn.length:0,Pe=ve.get(Z),Dt=m.state.lights;if(Q===!0&&(re===!0||w!==E)){const mn=w===E&&Z.id===N;He.setState(Z,w,mn)}let et=!1;Z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Dt.state.version||Pe.outputColorSpace!==Te||z.isBatchedMesh&&Pe.batching===!1||!z.isBatchedMesh&&Pe.batching===!0||z.isBatchedMesh&&Pe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pe.instancing===!1||!z.isInstancedMesh&&Pe.instancing===!0||z.isSkinnedMesh&&Pe.skinning===!1||!z.isSkinnedMesh&&Pe.skinning===!0||z.isInstancedMesh&&Pe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pe.instancingMorph===!1&&z.morphTexture!==null||Pe.envMap!==Ae||Z.fog===!0&&Pe.fog!==fe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==He.numPlanes||Pe.numIntersection!==He.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==Oe||Pe.morphTargets!==Re||Pe.morphNormals!==Qe||Pe.morphColors!==pt||Pe.toneMapping!==mt||Pe.morphTargetsCount!==Je)&&(et=!0):(et=!0,Pe.__version=Z.version);let Cn=Pe.currentProgram;et===!0&&(Cn=Xo(Z,B,z));let Pr=!1,sn=!1,lu=!1;const xt=Cn.getUniforms(),vi=Pe.uniforms;if(oe.useProgram(Cn.program)&&(Pr=!0,sn=!0,lu=!0),Z.id!==N&&(N=Z.id,sn=!0),Pr||E!==w){xt.setValue(L,"projectionMatrix",w.projectionMatrix),xt.setValue(L,"viewMatrix",w.matrixWorldInverse);const mn=xt.map.cameraPosition;mn!==void 0&&mn.setValue(L,pe.setFromMatrixPosition(w.matrixWorld)),ye.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&xt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,sn=!0,lu=!0)}if(z.isSkinnedMesh){xt.setOptional(L,z,"bindMatrix"),xt.setOptional(L,z,"bindMatrixInverse");const mn=z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),xt.setValue(L,"boneTexture",mn.boneTexture,De))}z.isBatchedMesh&&(xt.setOptional(L,z,"batchingTexture"),xt.setValue(L,"batchingTexture",z._matricesTexture,De),xt.setOptional(L,z,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",z._indirectTexture,De),xt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",z._colorsTexture,De));const uu=K.morphAttributes;if((uu.position!==void 0||uu.normal!==void 0||uu.color!==void 0)&&$e.update(z,K,Cn),(sn||Pe.receiveShadow!==z.receiveShadow)&&(Pe.receiveShadow=z.receiveShadow,xt.setValue(L,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(vi.envMap.value=Ae,vi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(vi.envMapIntensity.value=B.environmentIntensity),sn&&(xt.setValue(L,"toneMappingExposure",g.toneMappingExposure),Pe.needsLights&&S_(vi,lu),fe&&Z.fog===!0&&ee.refreshFogUniforms(vi,fe),ee.refreshMaterialUniforms(vi,Z,j,Y,m.state.transmissionRenderTarget[w.id]),sl.upload(L,sh(Pe),vi,De)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(sl.upload(L,sh(Pe),vi,De),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&xt.setValue(L,"center",z.center),xt.setValue(L,"modelViewMatrix",z.modelViewMatrix),xt.setValue(L,"normalMatrix",z.normalMatrix),xt.setValue(L,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const mn=Z.uniformsGroups;for(let cu=0,E_=mn.length;cu<E_;cu++){const ah=mn[cu];ct.update(ah,Cn),ct.bind(ah,Cn)}}return Cn}function S_(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function M_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,B,K){ve.get(w.texture).__webglTexture=B,ve.get(w.depthTexture).__webglTexture=K;const Z=ve.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const K=ve.get(w);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,K=0){A=w,P=B,C=K;let Z=!0,z=null,fe=!1,_e=!1;if(w){const Ae=ve.get(w);if(Ae.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1;else if(Ae.__webglFramebuffer===void 0)De.setupRenderTarget(w);else if(Ae.__hasExternalTextures)De.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(Ae.__boundDepthTexture!==Re){if(Re!==null&&ve.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);const Oe=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?z=Oe[B][K]:z=Oe[B],fe=!0):w.samples>0&&De.useMultisampledRTT(w)===!1?z=ve.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[K]:z=Oe,S.copy(w.viewport),D.copy(w.scissor),R=w.scissorTest}else S.copy($).multiplyScalar(j).floor(),D.copy(ne).multiplyScalar(j).floor(),R=me;if(oe.bindFramebuffer(L.FRAMEBUFFER,z)&&Z&&oe.drawBuffers(w,z),oe.viewport(S),oe.scissor(D),oe.setScissorTest(R),fe){const Ae=ve.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,K)}else if(_e){const Ae=ve.get(w.texture),Ne=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.__webglTexture,K||0,Ne)}N=-1},this.readRenderTargetPixels=function(w,B,K,Z,z,fe,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){oe.bindFramebuffer(L.FRAMEBUFFER,Te);try{const Ae=w.texture,Ne=Ae.format,Oe=Ae.type;if(!ye.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Z&&K>=0&&K<=w.height-z&&L.readPixels(B,K,Z,z,ze.convert(Ne),ze.convert(Oe),fe)}finally{const Ae=A!==null?ve.get(A).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,B,K,Z,z,fe,_e){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){oe.bindFramebuffer(L.FRAMEBUFFER,Te);try{const Ae=w.texture,Ne=Ae.format,Oe=Ae.type;if(!ye.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-Z&&K>=0&&K<=w.height-z){const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(B,K,Z,z,ze.convert(Ne),ze.convert(Oe),0),L.flush();const Qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Xy(L,Qe,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe)}finally{L.deleteBuffer(Re),L.deleteSync(Qe)}return fe}}finally{const Ae=A!==null?ve.get(A).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(w,B=null,K=0){w.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-K),z=Math.floor(w.image.width*Z),fe=Math.floor(w.image.height*Z),_e=B!==null?B.x:0,Te=B!==null?B.y:0;De.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,_e,Te,z,fe),oe.unbindTexture()},this.copyTextureToTexture=function(w,B,K=null,Z=null,z=0){w.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,K=null);let fe,_e,Te,Ae,Ne,Oe;K!==null?(fe=K.max.x-K.min.x,_e=K.max.y-K.min.y,Te=K.min.x,Ae=K.min.y):(fe=w.image.width,_e=w.image.height,Te=0,Ae=0),Z!==null?(Ne=Z.x,Oe=Z.y):(Ne=0,Oe=0);const Re=ze.convert(B.format),Qe=ze.convert(B.type);De.setTexture2D(B,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const pt=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),Je=L.getParameter(L.UNPACK_SKIP_ROWS),Pe=L.getParameter(L.UNPACK_SKIP_IMAGES),Dt=w.isCompressedTexture?w.mipmaps[z]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,z,Ne,Oe,fe,_e,Re,Qe,Dt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,z,Ne,Oe,Dt.width,Dt.height,Re,Dt.data):L.texSubImage2D(L.TEXTURE_2D,z,Ne,Oe,fe,_e,Re,Qe,Dt),L.pixelStorei(L.UNPACK_ROW_LENGTH,pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),z===0&&B.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(w,B,K=null,Z=null,z=0){w.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0);let fe,_e,Te,Ae,Ne,Oe,Re,Qe,pt;const mt=w.isCompressedTexture?w.mipmaps[z]:w.image;K!==null?(fe=K.max.x-K.min.x,_e=K.max.y-K.min.y,Te=K.max.z-K.min.z,Ae=K.min.x,Ne=K.min.y,Oe=K.min.z):(fe=mt.width,_e=mt.height,Te=mt.depth,Ae=0,Ne=0,Oe=0),Z!==null?(Re=Z.x,Qe=Z.y,pt=Z.z):(Re=0,Qe=0,pt=0);const rn=ze.convert(B.format),Je=ze.convert(B.type);let Pe;if(B.isData3DTexture)De.setTexture3D(B,0),Pe=L.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)De.setTexture2DArray(B,0),Pe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Dt=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),Pr=L.getParameter(L.UNPACK_SKIP_ROWS),sn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Pe,z,Re,Qe,pt,fe,_e,Te,rn,Je,mt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,z,Re,Qe,pt,fe,_e,Te,rn,mt.data):L.texSubImage3D(Pe,z,Re,Qe,pt,fe,_e,Te,rn,Je,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,sn),z===0&&B.generateMipmaps&&L.generateMipmap(Pe),oe.unbindTexture()},this.initRenderTarget=function(w){ve.get(w).__webglFramebuffer===void 0&&De.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?De.setTextureCube(w,0):w.isData3DTexture?De.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?De.setTexture2DArray(w,0):De.setTexture2D(w,0),oe.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,oe.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qd?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===ru?"display-p3":"srgb"}}class eh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new eh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tT extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class nT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Hf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ss("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new W;class Ol{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=qn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=qn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=qn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=qn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new zn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ol(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ol extends er{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qr;const Js=new W,Kr=new W,Zr=new W,Qr=new Ve,eo=new Ve,__=new ut,Da=new W,to=new W,Ia=new W,dm=new Ve,cc=new Ve,hm=new Ve;class fc extends Pt{constructor(e=new ol){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new dn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new nT(n,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new Ol(i,3,0,!1)),qr.setAttribute("uv",new Ol(i,2,3,!1))}this.geometry=qr,this.material=e,this.center=new Ve(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),__.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Zr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ua(Da.set(-.5,-.5,0),Zr,o,Kr,r,s),Ua(to.set(.5,-.5,0),Zr,o,Kr,r,s),Ua(Ia.set(.5,.5,0),Zr,o,Kr,r,s),dm.set(0,0),cc.set(1,0),hm.set(1,1);let a=e.ray.intersectTriangle(Da,to,Ia,!1,Js);if(a===null&&(Ua(to.set(-.5,.5,0),Zr,o,Kr,r,s),cc.set(0,1),a=e.ray.intersectTriangle(Da,Ia,to,!1,Js),a===null))return;const l=e.ray.origin.distanceTo(Js);l<e.near||l>e.far||n.push({distance:l,point:Js.clone(),uv:yn.getInterpolation(Js,Da,to,Ia,dm,cc,hm,new Ve),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ua(t,e,n,i,r,s){Qr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(eo.x=s*Qr.x-r*Qr.y,eo.y=r*Qr.x+s*Qr.y):eo.copy(Qr),t.copy(e),t.x+=eo.x,t.y+=eo.y,t.applyMatrix4(__)}class ds extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new W,Bl=new W,pm=new ut,no=new Kd,Na=new su,dc=new W,mm=new W;class Wf extends Pt{constructor(e=new dn,n=new ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)kl.fromBufferAttribute(n,r-1),Bl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=kl.distanceTo(Bl);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;pm.copy(r).invert(),no.copy(e.ray).applyMatrix4(pm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let y=p,m=x-1;y<m;y+=u){const c=d.getX(y),_=d.getX(y+1),g=Fa(this,e,no,l,c,_);g&&n.push(g)}if(this.isLineLoop){const y=d.getX(x-1),m=d.getX(p),c=Fa(this,e,no,l,y,m);c&&n.push(c)}}else{const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let y=p,m=x-1;y<m;y+=u){const c=Fa(this,e,no,l,y,y+1);c&&n.push(c)}if(this.isLineLoop){const y=Fa(this,e,no,l,x-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fa(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(kl.fromBufferAttribute(o,r),Bl.fromBufferAttribute(o,s),n.distanceSqToSegment(kl,Bl,dc,mm)>i)return;dc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(dc);if(!(l<e.near||l>e.far))return{distance:l,point:mm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const gm=new W,_m=new W;class Xf extends Wf{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)gm.fromBufferAttribute(n,r),_m.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gm.distanceTo(_m);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v_ extends jt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Oa=new W,ka=new W,hc=new W,Ba=new yn;class vm extends dn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(rl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],d=["a","b","c"],h=new Array(3),f={},p=[];for(let x=0;x<l;x+=3){o?(u[0]=o.getX(x),u[1]=o.getX(x+1),u[2]=o.getX(x+2)):(u[0]=x,u[1]=x+1,u[2]=x+2);const{a:y,b:m,c}=Ba;if(y.fromBufferAttribute(a,u[0]),m.fromBufferAttribute(a,u[1]),c.fromBufferAttribute(a,u[2]),Ba.getNormal(hc),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(c.x*r)},${Math.round(c.y*r)},${Math.round(c.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const g=(_+1)%3,v=h[_],P=h[g],C=Ba[d[_]],A=Ba[d[g]],N=`${v}_${P}`,E=`${P}_${v}`;E in f&&f[E]?(hc.dot(f[E].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(A.x,A.y,A.z)),f[E]=null):N in f||(f[N]={index0:u[_],index1:u[g],normal:hc.clone()})}}for(const x in f)if(f[x]){const{index0:y,index1:m}=f[x];Oa.fromBufferAttribute(a,y),ka.fromBufferAttribute(a,m),p.push(Oa.x,Oa.y,Oa.z),p.push(ka.x,ka.y,ka.z)}this.setAttribute("position",new wn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class iT extends er{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pc extends er{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class x_ extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const mc=new ut,xm=new W,ym=new W;class rT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;xm.setFromMatrixPosition(e.matrixWorld),n.position.copy(xm),ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ym),n.updateMatrixWorld(),mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sT extends rT{constructor(){super(new f_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oT extends x_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new sT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aT extends x_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Sm=new ut;class lT{constructor(e,n,i=0,r=1/0){this.ray=new Kd(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Sm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sm),this}intersectObject(e,n=!0,i=[]){return jf(e,this,i,n),i.sort(Mm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)jf(e[r],this,i,n);return i.sort(Mm),i}}function Mm(t,e){return t.distance-e.distance}function jf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)jf(s[o],e,n,!0)}}class uT extends Xf{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let f=0,p=0,x=-a;f<=n;f++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const y=f===s?i:r;y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3}const d=new dn;d.setAttribute("position",new wn(l,3)),d.setAttribute("color",new wn(u,3));const h=new ds({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);const cT={name:"40ft High Cube Container",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580},Em=[{name:"20ft Standard",innerLength:5898,innerWidth:2352,innerHeight:2393,doorWidth:2340,doorHeight:2280,maxPayload:28200},{name:"40ft Standard",innerLength:12032,innerWidth:2352,innerHeight:2393,doorWidth:2340,doorHeight:2280,maxPayload:26750},{name:"40ft High Cube",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580},{name:"45ft High Cube",innerLength:13556,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:27700},{name:"Custom",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580}],wm=[{id:"hilux_dc",name:"Hilux Revo (4Dr)",length:5325,width:1855,height:1815,weight:2050,wheelbase:3085,cabRatio:.55},{id:"hilux_sc",name:"Hilux Revo (2Dr)",length:5255,width:1855,height:1815,weight:1910,wheelbase:3085,cabRatio:.4},{id:"ranger_dc",name:"Ranger (4Dr)",length:5362,width:1860,height:1821,weight:2150,wheelbase:3220,cabRatio:.55},{id:"triton_dc",name:"Triton (4Dr)",length:5305,width:1815,height:1795,weight:1950,wheelbase:3e3,cabRatio:.55},{id:"dmax_dc",name:"D-Max (4Dr)",length:5265,width:1870,height:1790,weight:1990,wheelbase:3020,cabRatio:.55},{id:"navara_dc",name:"Navara (4Dr)",length:5260,width:1850,height:1840,weight:2050,wheelbase:3150,cabRatio:.55},{id:"custom",name:"กำหนดเอง (Custom)",length:5300,width:1850,height:1800,weight:2e3,wheelbase:3e3,cabRatio:.5}],Tm=[{id:"eu_pallet",name:"EU Pallet",length:1200,width:800,height:1450,weight:800},{id:"th_pallet",name:"TH Pallet",length:1100,width:1100,height:1450,weight:800},{id:"box_s",name:"กล่อง S",length:600,width:400,height:400,weight:20},{id:"box_m",name:"กล่อง M",length:800,width:600,height:600,weight:40},{id:"box_l",name:"กล่อง L",length:1200,width:800,height:800,weight:80},{id:"box_custom",name:"กำหนดเอง",length:1e3,width:800,height:800,weight:50}],za=["#3B82F6","#EF4444","#10B981","#F59E0B","#8B5CF6","#EC4899","#06B6D4","#F97316"],Am=()=>Math.random().toString(36).substr(2,9);function fT(t,e=45){const n=t.naturalWidth||t.width,i=t.naturalHeight||t.height,r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d");s.drawImage(t,0,0);const o=s.getImageData(0,0,n,i),a=o.data,l=a[0],u=a[1],d=a[2],h=new Uint8Array(n*i),f=[0,n-1,(i-1)*n,i*n-1];for(;f.length;){const p=f.pop();if(p<0||p>=n*i||h[p])continue;h[p]=1;const x=p*4;if(Math.abs(a[x]-l)+Math.abs(a[x+1]-u)+Math.abs(a[x+2]-d)>e*3)continue;a[x+3]=0;const y=p%n;y>0&&f.push(p-1),y<n-1&&f.push(p+1),f.push(p-n,p+n)}return s.putImageData(o,0,0),r}const dT=Ee.forwardRef(function({container:e,vehicles:n,selectedId:i,onSelectVehicle:r,onUpdateVehicle:s},o){const a=Ee.useRef(null);Ee.useImperativeHandle(o,()=>({getCanvas:()=>a.current}),[]);const l=Ee.useRef({}),[u,d]=Ee.useState(null),[h,f]=Ee.useState(1),[p,x]=Ee.useState({x:0,y:0}),y=Ee.useRef({zoom:1,pan:{x:0,y:0}}),m=Ee.useRef(null),c=Ee.useCallback((D,R)=>{y.current={zoom:D,pan:R},f(D),x(R)},[]),_=60;Ee.useEffect(()=>{n.forEach(D=>{if(!D.sideImage)return;const R=`${D.id}_${D.removeBg?1:0}`;if(l.current[R])return;const O=new Image;O.src=D.sideImage,O.onload=()=>{l.current[R]=D.removeBg?fT(O):O,v()}})},[n]);const g=Ee.useCallback(()=>{const D=a.current;if(!D)return{scale:1,ox:_,oy:_,cW:0,cH:0,baseScale:1};const R=D.getBoundingClientRect(),O=Math.min((R.width-_*2)/e.innerLength,(R.height-_*2)/e.innerHeight),q=O*h,X=e.innerLength*q,Y=e.innerHeight*q,j=(R.height-e.innerHeight*O)/2,U=_+p.x,V=j+p.y;return{scale:q,ox:U,oy:V,cW:X,cH:Y,baseScale:O}},[e,h,p]),v=Ee.useCallback(()=>{const D=a.current;if(!D)return;const R=D.getContext("2d"),O=D.getBoundingClientRect(),q=Math.min(window.devicePixelRatio||1,2);D.width=O.width*q,D.height=O.height*q,R.scale(q,q);const X=O.width,Y=O.height,{scale:j,ox:U,oy:V,cW:$,cH:ne}=g();R.fillStyle="#18253a",R.fillRect(0,0,X,Y),R.fillStyle="#ffffff",R.fillRect(U,V,$,ne);const me=(()=>{const te=45/j;return te<=100?100:te<=200?200:te<=500?500:te<=1e3?1e3:2e3})();for(let te=me;te<e.innerLength;te+=me){const L=U+te*j;L<U||L>U+$||(R.strokeStyle=te%1e3===0?"#00000060":"#00000035",R.lineWidth=te%1e3===0?1:.5,R.beginPath(),R.moveTo(L,V),R.lineTo(L,V+ne),R.stroke())}for(let te=me;te<e.innerHeight;te+=me){const L=V+ne-te*j;L<V||L>V+ne||(R.strokeStyle=te%1e3===0?"#00000060":"#00000035",R.lineWidth=te%1e3===0?1:.5,R.beginPath(),R.moveTo(U,L),R.lineTo(U+$,L),R.stroke())}R.strokeStyle="#00ffaa",R.lineWidth=2,R.strokeRect(U,V,$,ne),R.fillStyle="#d0e8d088",R.fillRect(U,V+ne-5,$,5);const Ie=V+ne-e.doorHeight*j;R.strokeStyle="#dd7700cc",R.lineWidth=1.5,R.setLineDash([8,4]),R.beginPath(),R.moveTo(U,Ie),R.lineTo(U+$,Ie),R.stroke(),R.setLineDash([]),R.fillStyle="#dd7700ee",R.font="bold 9px monospace",R.textAlign="right",R.fillText(`⚠ DOOR MAX ${e.doorHeight}mm`,U+$-4,Ie-4);const Q=22,re=36,de=Math.max(0,Math.floor(Math.max(0,-U)/j/100)*100),pe=Math.min(e.innerLength,Math.ceil((X-U)/j/100)*100+100),be=Math.max(0,Math.floor(Math.max(0,V+ne-Y)/j/100)*100),Le=Math.min(e.innerHeight,Math.ceil((V+ne)/j/100)*100+100),ke=te=>te>=1e3&&me>=1e3?`${te/1e3}m`:`${te}`;[{base:V+ne+2,dir:1},{base:V-2,dir:-1}].forEach(({base:te,dir:L})=>{R.fillStyle="#141e30ee",R.fillRect(U,L===1?te:te-Q,$,Q);for(let Ce=de;Ce<=pe;Ce+=100){const we=U+Ce*j;if(we<U-1||we>U+$+1)continue;const ye=Ce%me===0,oe=Ce%500===0&&!ye,Fe=(ye?13:oe?8:4)*L;R.strokeStyle=ye?"#00ffaadd":oe?"#00ffaa55":"#00000022",R.lineWidth=ye?1.2:.5,R.beginPath(),R.moveTo(we,te),R.lineTo(we,te+Fe),R.stroke(),ye&&(R.fillStyle="#00ffaaee",R.font="bold 8px monospace",R.textAlign="center",R.fillText(ke(Ce),we,L===1?te+Q:te-4))}}),[{base:U-2,dir:-1},{base:U+$+2,dir:1}].forEach(({base:te,dir:L})=>{R.fillStyle="#141e30ee",R.fillRect(L===-1?te-re:te,V,re,ne);for(let Ce=be;Ce<=Le;Ce+=100){const we=V+ne-Ce*j;if(we<V-1||we>V+ne+1)continue;const ye=Ce%me===0,oe=Ce%500===0&&!ye,Fe=(ye?13:oe?8:4)*L;R.strokeStyle=ye?"#00ffaadd":oe?"#00ffaa55":"#00000022",R.lineWidth=ye?1.2:.5,R.beginPath(),R.moveTo(te,we),R.lineTo(te+Fe,we),R.stroke(),ye&&(R.fillStyle="#00ffaaee",R.font="bold 8px monospace",R.textAlign=L===-1?"right":"left",R.fillText(`${Ce}`,L===-1?te-4:te+4,we+3))}}),R.fillStyle="#00ffaacc",R.font="bold 10px monospace",R.textAlign="center",R.fillText(`${e.innerLength} mm`,U+$/2,V-Q-4),R.save(),R.translate(U-re-14,V+ne/2),R.rotate(-Math.PI/2),R.fillText(`${e.innerHeight} mm`,0,0),R.restore(),n.forEach(te=>{const L=te.sideX??200,Ce=te.sideY??0,we=(te.sideAngle??0)*Math.PI/180,ye=te.length*j,oe=te.height*j,Fe=U+L*j+ye/2,ve=V+ne-Ce*j-oe/2,De=te.id===i;R.save(),R.translate(Fe,ve),R.rotate(we);const I=`${te.id}_${te.removeBg?1:0}`,M=l.current[I];if(M&&M.complete!==!1){const H=(te.imgRealLength??te.length)*j,F=(te.imgRealHeight??te.height)*j;te.flipX&&R.scale(-1,1),R.drawImage(M,-H/2,-F/2,H,F),te.flipX&&R.scale(-1,1)}else{R.fillStyle=te.color+"22",R.strokeStyle=te.color+"cc",R.lineWidth=1.5,R.fillRect(-ye/2,-oe/2,ye,oe),R.strokeRect(-ye/2,-oe/2,ye,oe);const H=ye*(te.cabRatio??.5);R.strokeStyle=te.color+"77",R.lineWidth=1,R.beginPath(),R.moveTo(-ye/2+H,-oe/2),R.lineTo(-ye/2+H,oe/2),R.stroke(),R.fillStyle="#ffffffaa",R.font=`bold ${Math.max(8,ye*.04)}px sans-serif`,R.textAlign="center",R.textBaseline="middle",R.fillText(te.preset,0,0)}De&&(R.strokeStyle="#ffffff",R.lineWidth=2,R.setLineDash([4,3]),R.strokeRect(-ye/2-3,-oe/2-3,ye+6,oe+6),R.setLineDash([]),R.strokeStyle="#00ffaa",R.lineWidth=1.5,R.beginPath(),R.moveTo(0,-oe/2-2),R.lineTo(0,-oe/2-14),R.stroke(),R.fillStyle="#00ffaadd",R.strokeStyle="#00ffaa",R.lineWidth=1,R.beginPath(),R.arc(0,-oe/2-21,7,0,Math.PI*2),R.fill(),R.stroke(),R.fillStyle="#ffffff88",R.font="8px monospace",R.textAlign="left",R.textBaseline="top",R.fillText(`${Math.round((te.sideAngle??0)*10)/10}°`,ye/2+5,-oe/2)),R.restore()})},[e,n,i,g]);Ee.useEffect(()=>{v()},[v]),Ee.useEffect(()=>(window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[v]),Ee.useEffect(()=>{const D=a.current;if(!D)return;const R=O=>{O.preventDefault();const q=D.getBoundingClientRect(),X=O.clientX-q.left,Y=O.clientY-q.top,{zoom:j,pan:U}=y.current,V=Math.min((q.width-_*2)/e.innerLength,(q.height-_*2)/e.innerHeight),$=V*j,ne=(q.height-e.innerHeight*V)/2,me=_+U.x,Ie=ne+U.y,Q=O.deltaY<0?1.15:1/1.15,re=Math.max(.5,Math.min(20,j*Q)),de=V*re,pe=X-(X-me)*de/$,be=Y-(Y-Ie)*de/$;c(re,{x:pe-_,y:be-ne})};return D.addEventListener("wheel",R,{passive:!1}),()=>D.removeEventListener("wheel",R)},[e,c]);const P=D=>{const R=a.current.getBoundingClientRect();return{mx:D.clientX-R.left,my:D.clientY-R.top}},C=D=>{const{scale:R,ox:O,oy:q,cH:X}=g(),Y=D.length*R,j=D.height*R,U=O+(D.sideX??200)*R+Y/2,V=q+X-(D.sideY??0)*R-j/2;return{cx:U,cy:V,vW:Y,vH:j}},A=D=>{if(D.button===1){D.preventDefault();const{mx:q,my:X}=P(D);m.current={mx:q,my:X,panX:y.current.pan.x,panY:y.current.pan.y},d({id:null,type:"pan"});return}const{mx:R,my:O}=P(D);for(let q=n.length-1;q>=0;q--){const X=n[q],{cx:Y,cy:j,vW:U,vH:V}=C(X),$=(X.sideAngle??0)*Math.PI/180;if(X.id===i){const Ie=-V/2-21,Q=Y-Ie*Math.sin($),re=j+Ie*Math.cos($);if(Math.hypot(R-Q,O-re)<12){r(X.id),d({id:X.id,type:"rotate",cx:Y,cy:j});return}}const ne=(R-Y)*Math.cos(-$)-(O-j)*Math.sin(-$),me=(R-Y)*Math.sin(-$)+(O-j)*Math.cos(-$);if(Math.abs(ne)<=U/2+5&&Math.abs(me)<=V/2+5){r(X.id),d({id:X.id,type:"move",offX:R-Y,offY:O-j});return}}r(null),m.current={mx:R,my:O,panX:y.current.pan.x,panY:y.current.pan.y},d({id:null,type:"pan"})},N=D=>{if((u==null?void 0:u.type)==="pan"&&m.current){const{mx:V,my:$}=P(D);c(y.current.zoom,{x:m.current.panX+V-m.current.mx,y:m.current.panY+$-m.current.my});return}if(!u)return;const{mx:R,my:O}=P(D),{scale:q,ox:X,oy:Y,cH:j}=g(),U=n.find(V=>V.id===u.id);if(U){if(u.type==="move"){const V=U.length*q,$=U.height*q,ne=R-u.offX,me=O-u.offY;s(U.id,{sideX:Math.round((ne-X-V/2)/q),sideY:Math.max(0,Math.round((Y+j-me-$/2)/q))})}else if(u.type==="rotate"){const V=Math.atan2(R-u.cx,-(O-u.cy))*180/Math.PI;s(U.id,{sideAngle:Math.round(V*10)/10})}}},E=()=>d(null),S=(u==null?void 0:u.type)==="pan"||u?"grabbing":"crosshair";return G.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[G.jsx("canvas",{ref:a,style:{width:"100%",height:"100%",cursor:S,display:"block"},onMouseDown:A,onMouseMove:N,onMouseUp:E,onMouseLeave:E}),G.jsxs("div",{style:{position:"absolute",bottom:10,right:10,display:"flex",gap:4,alignItems:"center"},children:[G.jsx("button",{onClick:()=>c(Math.min(20,y.current.zoom*1.3),y.current.pan),style:{width:28,height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",cursor:"pointer",fontSize:16,lineHeight:1},children:"+"}),G.jsx("button",{onClick:()=>c(Math.max(.5,y.current.zoom/1.3),y.current.pan),style:{width:28,height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",cursor:"pointer",fontSize:16,lineHeight:1},children:"−"}),G.jsxs("button",{onClick:()=>c(1,{x:0,y:0}),style:{padding:"0 8px",height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#00ddaa",cursor:"pointer",fontSize:10,fontFamily:"monospace"},children:[h.toFixed(1),"× ↺"]})]})]})});function hT({container:t,boxes:e,selectedId:n,onSelectBox:i,onMoveBox:r,collisions:s}){const o=Ee.useRef(null),[a,l]=Ee.useState(null),[u,d]=Ee.useState({x:0,y:0}),h=Ee.useRef(1),f=50,p=Ee.useCallback(()=>{const g=o.current;if(!g)return 1;const v=g.getBoundingClientRect();return Math.min((v.width-f*2)/t.innerLength,(v.height-f*2)/t.innerWidth)},[t]),x=Ee.useCallback(()=>{const g=o.current;if(!g)return;const v=g.getContext("2d"),P=g.getBoundingClientRect(),C=Math.min(window.devicePixelRatio||1,2);g.width=P.width*C,g.height=P.height*C,v.scale(C,C);const A=P.width,N=P.height,E=p();h.current=E;const S=f,D=f,R=t.innerLength*E,O=t.innerWidth*E;v.fillStyle="#18253a",v.fillRect(0,0,A,N),v.strokeStyle="#ffffff10",v.lineWidth=.5;for(let X=1e3;X<t.innerLength;X+=1e3)v.beginPath(),v.moveTo(S+X*E,D),v.lineTo(S+X*E,D+O),v.stroke();for(let X=500;X<t.innerWidth;X+=500)v.beginPath(),v.moveTo(S,D+X*E),v.lineTo(S+R,D+X*E),v.stroke();v.strokeStyle="#00ffaa",v.lineWidth=2,v.strokeRect(S,D,R,O);const q=(t.innerWidth-t.doorWidth)/2;v.strokeStyle="#00ffaa88",v.lineWidth=3,v.setLineDash([8,4]),v.beginPath(),v.moveTo(S+R,D+q*E),v.lineTo(S+R,D+(q+t.doorWidth)*E),v.stroke(),v.setLineDash([]),v.fillStyle="#00ffaa",v.font="bold 11px monospace",v.textAlign="center",v.fillText(`${t.innerLength} mm`,S+R/2,D-16),v.save(),v.translate(S-20,D+O/2),v.rotate(-Math.PI/2),v.fillText(`${t.innerWidth} mm`,0,0),v.restore(),v.fillStyle="#00ffaa66",v.font="10px sans-serif",v.textAlign="left",v.fillText("DOOR →",S+R+8,D+O/2+4),e.forEach(X=>{const Y=S+X.x*E,j=D+X.y*E,U=X.length*E,V=X.width*E,$=X.id===n,ne=s.has(X.id);v.fillStyle="rgba(0,0,0,0.2)",v.fillRect(Y+2,j+2,U,V),v.fillStyle=X.color+(ne?"cc":"99"),v.fillRect(Y,j,U,V),v.strokeStyle=ne?"#ff4444":$?"#ffffff":X.color,v.lineWidth=$?2:1.5,v.strokeRect(Y,j,U,V),v.strokeStyle=X.color+"44",v.lineWidth=.5,v.beginPath(),v.moveTo(Y,j),v.lineTo(Y+U,j+V),v.moveTo(Y+U,j),v.lineTo(Y,j+V),v.stroke();const me=Math.max(8,Math.min(U,V)*.16);v.fillStyle="#ffffffcc",v.font=`${$?"bold ":""}${me}px sans-serif`,v.textAlign="center",v.textBaseline="middle",v.fillText(X.preset,Y+U/2,j+V/2-me*.5),v.font=`${Math.max(7,me*.8)}px monospace`,v.fillStyle="#ffffff88",v.fillText(`${X.length}×${X.width}×${X.height}`,Y+U/2,j+V/2+me*.5),$&&(v.strokeStyle="#ffffff",v.lineWidth=2,v.setLineDash([4,3]),v.strokeRect(Y-3,j-3,U+6,V+6),v.setLineDash([]))})},[t,e,n,s,p]);Ee.useEffect(()=>{x()},[x]),Ee.useEffect(()=>(window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[x]);const y=g=>{const v=o.current.getBoundingClientRect();return{cx:g.clientX-v.left,cy:g.clientY-v.top}},m=g=>{const{cx:v,cy:P}=y(g),C=h.current;for(let A=e.length-1;A>=0;A--){const N=e[A],E=f+N.x*C,S=f+N.y*C,D=N.length*C,R=N.width*C;if(v>=E&&v<=E+D&&P>=S&&P<=S+R){i(N.id),l(N.id),d({x:v-E,y:P-S});return}}i(null)},c=g=>{if(!a)return;const{cx:v,cy:P}=y(g),C=h.current;r(a,Math.round((v-f-u.x)/C),Math.round((P-f-u.y)/C))},_=()=>l(null);return G.jsx("canvas",{ref:o,style:{width:"100%",height:"100%",cursor:a?"grabbing":"crosshair",display:"block"},onMouseDown:m,onMouseMove:c,onMouseUp:_,onMouseLeave:_})}function pT(t,e){const n=document.createElement("canvas");n.width=400,n.height=72;const i=n.getContext("2d");return i.fillStyle="rgba(0,0,0,0.72)",i.fillRect(0,0,400,72),i.strokeStyle=e||"#ffffff",i.lineWidth=4,i.strokeRect(2,2,396,68),i.fillStyle="#ffffff",i.font="bold 26px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(t,200,36),new v_(n)}function mT({container:t,boxes:e,selectedId:n,onMoveBox:i,onSelectBox:r}){const s=Ee.useRef(null),o=Ee.useRef(null),a=Ee.useRef(null),l=Ee.useRef(null),u=Ee.useRef({}),d=Ee.useRef(null),h=Ee.useRef({});return Ee.useEffect(()=>{h.current={boxes:e,container:t,onMoveBox:i,onSelectBox:r}}),Ee.useEffect(()=>{const f=s.current;if(!f)return;const p=f.clientWidth,x=f.clientHeight,y=new tT;y.background=new Ge(14477557),y.fog=new eh(14477557,4e-5);const m=new xn(50,p/x,10,1e5),c=new eT({antialias:!0});c.setSize(p,x),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.shadowMap.enabled=!0,c.shadowMap.type=H0,f.appendChild(c.domElement),o.current=y,a.current=m,l.current=c,y.add(new aT(16777215,1.2));const _=new oT(16777215,1.8);_.position.set(15e3,2e4,1e4),_.castShadow=!0,_.shadow.mapSize.set(2048,2048),_.shadow.camera.near=100,_.shadow.camera.far=5e4,_.shadow.camera.left=-15e3,_.shadow.camera.right=15e3,_.shadow.camera.top=15e3,_.shadow.camera.bottom=-15e3,y.add(_);const g=new Zt(new Ui(6e4,6e4),new pc({color:13162728}));g.rotation.x=-Math.PI/2,g.position.y=-5,g.receiveShadow=!0,y.add(g),y.add(new uT(4e4,40,8952251,11189196));const v=new lT,P=new Ve,C=new Ri(new W(0,1,0),0),A=new W;let N=!1,E=0,S=0,D=.7,R=.55,O=2e4,q=!1,X=null,Y=0,j=0,U=0,V=0;const $=new W(6e3,1200,0),ne=()=>{m.position.set($.x+O*Math.sin(R)*Math.cos(D),$.y+O*Math.cos(R),$.z+O*Math.sin(R)*Math.sin(D)),m.lookAt($)};ne();const me=()=>{const te=[];return y.traverse(L=>{L.userData.isBoxMesh&&te.push(L)}),te},Ie=te=>{var L,Ce;if(E=te.clientX,S=te.clientY,!te.ctrlKey){const we=c.domElement.getBoundingClientRect();P.x=(te.clientX-we.left)/we.width*2-1,P.y=-((te.clientY-we.top)/we.height)*2+1,v.setFromCamera(P,m);const ye=v.intersectObjects(me());if(ye.length>0){const oe=ye[0].object.userData.boxId;(Ce=(L=h.current).onSelectBox)==null||Ce.call(L,oe),v.ray.intersectPlane(C,A);const Fe=h.current.boxes.find(De=>De.id===oe),ve=h.current.container;Fe&&(Y=A.x-(Fe.x+Fe.length/2),j=A.z-(Fe.y-ve.innerWidth/2+Fe.width/2),U=Fe.x,V=Fe.y,X=oe,q=!0,c.domElement.style.cursor="grabbing");return}}N=!0,c.domElement.style.cursor="grabbing"},Q=te=>{const L=te.clientX-E,Ce=te.clientY-S;if(E=te.clientX,S=te.clientY,q&&X){const we=c.domElement.getBoundingClientRect();if(P.x=(te.clientX-we.left)/we.width*2-1,P.y=-((te.clientY-we.top)/we.height)*2+1,v.setFromCamera(P,m),!v.ray.intersectPlane(C,A))return;const{boxes:ye,container:oe}=h.current,Fe=ye.find(F=>F.id===X);if(!Fe)return;const ve=A.x-Y,De=A.z-j;U=Math.max(0,Math.min(oe.innerLength-Fe.length,ve-Fe.length/2)),V=Math.max(0,Math.min(oe.innerWidth-Fe.width,De+oe.innerWidth/2-Fe.width/2));const I=U+Fe.length/2,M=V-oe.innerWidth/2+Fe.width/2,H=u.current[X];H&&(H.mesh.position.x=I,H.mesh.position.z=M,H.edges.position.x=I,H.edges.position.z=M,H.label&&(H.label.position.x=I,H.label.position.z=M));return}if(N){if(te.ctrlKey){const we=O/f.clientHeight;$.x-=Math.sin(D)*L*we,$.z+=Math.cos(D)*L*we,$.y-=Ce*we}else D+=L*.005,R=Math.max(.1,Math.min(Math.PI/2-.05,R-Ce*.005));ne()}},re=(te,L,Ce)=>{const{boxes:we,container:ye}=h.current,oe=we.find(I=>I.id===te);if(!oe)return{x:L,y:Ce};const Fe=we.filter(I=>I.id!==te),ve=(I,M)=>Fe.some(H=>I<H.x+H.length&&I+oe.length>H.x&&M<H.y+H.width&&M+oe.width>H.y);if(!ve(L,Ce))return{x:L,y:Ce};const De=Math.max(oe.length,oe.width,200);for(let I=1;I<30;I++)for(let M=-I;M<=I;M++)for(let H=-I;H<=I;H++){if(Math.abs(M)!==I&&Math.abs(H)!==I)continue;const F=Math.max(0,Math.min(ye.innerLength-oe.length,L+M*De)),T=Math.max(0,Math.min(ye.innerWidth-oe.width,Ce+H*De));if(!ve(F,T))return{x:F,y:T}}return{x:L,y:Ce}},de=()=>{var te,L;if(q&&X){const Ce=re(X,U,V);(L=(te=h.current).onMoveBox)==null||L.call(te,X,Ce.x,Ce.y)}q=!1,X=null,N=!1,c.domElement.style.cursor="grab"},pe=te=>{if(te.preventDefault(),te.ctrlKey){const L=O/f.clientHeight;$.y-=te.deltaY*L*.5}else O=Math.max(4e3,Math.min(45e3,O+te.deltaY*12));ne()},be=te=>{if(te.target.tagName==="INPUT"||te.target.tagName==="TEXTAREA")return;const L=O*.05;te.key==="ArrowLeft"&&($.x-=Math.sin(D)*L,$.z+=Math.cos(D)*L),te.key==="ArrowRight"&&($.x+=Math.sin(D)*L,$.z-=Math.cos(D)*L),te.key==="ArrowUp"&&($.y+=L*.4),te.key==="ArrowDown"&&($.y-=L*.4),ne()};c.domElement.addEventListener("mousedown",Ie),c.domElement.addEventListener("mousemove",Q),c.domElement.addEventListener("mouseup",de),c.domElement.addEventListener("mouseleave",de),c.domElement.addEventListener("wheel",pe,{passive:!1}),c.domElement.style.cursor="grab",window.addEventListener("keydown",be);const Le=()=>{d.current=requestAnimationFrame(Le),c.render(y,m)};Le();const ke=()=>{const te=f.clientWidth,L=f.clientHeight;m.aspect=te/L,m.updateProjectionMatrix(),c.setSize(te,L)};return window.addEventListener("resize",ke),()=>{cancelAnimationFrame(d.current),window.removeEventListener("resize",ke),window.removeEventListener("keydown",be),c.domElement.removeEventListener("mousedown",Ie),c.domElement.removeEventListener("mousemove",Q),c.domElement.removeEventListener("mouseup",de),c.domElement.removeEventListener("mouseleave",de),c.domElement.removeEventListener("wheel",pe),f.contains(c.domElement)&&f.removeChild(c.domElement),c.dispose()}},[]),Ee.useEffect(()=>{const f=o.current;if(!f)return;const p=[];f.traverse(P=>{P.userData.dynamic&&p.push(P)}),p.forEach(P=>f.remove(P)),u.current={};const x=new Xf(new vm(new Cr(t.innerLength,t.innerHeight,t.innerWidth)),new ds({color:65450}));x.position.set(t.innerLength/2,t.innerHeight/2,0),x.userData.dynamic=!0,f.add(x);const y=new Zt(new Ui(t.innerLength,t.innerWidth),new pc({color:1718826,transparent:!0,opacity:.4,side:Nn}));y.rotation.x=-Math.PI/2,y.position.set(t.innerLength/2,2,0),y.receiveShadow=!0,y.userData.dynamic=!0,f.add(y);const m=new pc({color:8956620,transparent:!0,opacity:.1,side:Nn});[-1,1].forEach(P=>{const C=new Zt(new Ui(t.innerLength,t.innerHeight),m);C.position.set(t.innerLength/2,t.innerHeight/2,P*t.innerWidth/2),C.userData.dynamic=!0,f.add(C)});const c=new Zt(new Ui(t.innerWidth,t.innerHeight),m);c.rotation.y=Math.PI/2,c.position.set(0,t.innerHeight/2,0),c.userData.dynamic=!0,f.add(c);const _=P=>{const C=document.createElement("canvas");C.width=256,C.height=64;const A=C.getContext("2d");return A.fillStyle="rgba(0,20,40,0.82)",A.fillRect(0,0,256,64),A.fillStyle="#00ffaa",A.font="bold 28px monospace",A.textAlign="center",A.textBaseline="middle",A.fillText(P,128,32),new v_(C)},g=1e3;for(let P=0;P<=t.innerLength;P+=g){const C=new fc(new ol({map:_(`${P}`),depthTest:!1}));C.scale.set(700,175,1),C.position.set(P,-250,t.innerWidth/2+200),C.userData.dynamic=!0,f.add(C);const A=[new W(P,-10,t.innerWidth/2),new W(P,-300,t.innerWidth/2)],N=new Wf(new dn().setFromPoints(A),new ds({color:65450}));N.userData.dynamic=!0,f.add(N)}const v=500;for(let P=0;P<=t.innerHeight;P+=v){const C=new fc(new ol({map:_(`${P}`),depthTest:!1}));C.scale.set(600,150,1),C.position.set(-450,P,t.innerWidth/2),C.userData.dynamic=!0,f.add(C);const A=[new W(-10,P,t.innerWidth/2),new W(-300,P,t.innerWidth/2)],N=new Wf(new dn().setFromPoints(A),new ds({color:65450}));N.userData.dynamic=!0,f.add(N)}e.forEach(P=>{const C=new Ge(P.color),A=P.id===n,N=new Cr(P.length,P.height,P.width),E=new Zt(N,new iT({color:C,specular:2236962,shininess:40,transparent:!0,opacity:A?1:.88}));E.position.set(P.x+P.length/2,P.z+P.height/2,P.y-t.innerWidth/2+P.width/2),E.castShadow=!0,E.userData.dynamic=!0,E.userData.isBoxMesh=!0,E.userData.boxId=P.id,f.add(E);const S=new Xf(new vm(N),new ds({color:A?16777215:0,transparent:!0,opacity:A?.9:.25}));S.position.copy(E.position),S.userData.dynamic=!0,f.add(S);const D=pT(`${P.length}×${P.width}×${P.height} mm`,P.color),R=new fc(new ol({map:D,depthTest:!1})),O=Math.max(P.length,1400);R.scale.set(O,O*.18,1),R.position.set(P.x+P.length/2,P.z+P.height+280,P.y-t.innerWidth/2+P.width/2),R.userData.dynamic=!0,f.add(R),u.current[P.id]={mesh:E,edges:S,label:R}})},[t,e,n]),G.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[G.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),G.jsx("div",{style:{position:"absolute",bottom:10,left:10,fontSize:10,color:"#6677aa",pointerEvents:"none",background:"rgba(0,0,0,0.4)",padding:"4px 9px",borderRadius:4,lineHeight:1.7},children:"🖱 Drag = หมุน  |  Ctrl+Drag = เลื่อนซ้ายขวา  |  Ctrl+Scroll = เลื่อนบนล่าง  |  Scroll = ซูม  |  ↑↓←→ = เลื่อนมุมมอง  |  ลากกล่อง = จัดตำแหน่ง"})]})}function gT(){const[t,e]=Ee.useState([]),[n,i]=Ee.useState(null),[r,s]=Ee.useState("car"),[o,a]=Ee.useState(!1),[l,u]=Ee.useState("hilux_dc"),[d,h]=Ee.useState({length:5300,width:1850,height:1800,weight:2e3,label:""}),[f,p]=Ee.useState({...cT}),[x,y]=Ee.useState(!1),[m,c]=Ee.useState([]),[_,g]=Ee.useState([]),[v,P]=Ee.useState([]),[C,A]=Ee.useState(null),[N,E]=Ee.useState(!1),[S,D]=Ee.useState("eu_pallet"),[R,O]=Ee.useState({length:1e3,width:800,height:800,weight:50,label:""}),[q,X]=Ee.useState("My Project"),Y=Ee.useRef([]);Y.current=t;const j=Ee.useRef(null),U=Ee.useRef(null),V=()=>{const T={projectName:q,container:f,vehicles:t,boxes:v},b=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),ee=document.createElement("a");ee.href=URL.createObjectURL(b),ee.download=`${q.replace(/\s+/g,"_")||"project"}.clp.json`,ee.click(),URL.revokeObjectURL(ee.href)},$=T=>{const b=new FileReader;b.onload=ee=>{try{const J=JSON.parse(ee.target.result);J.container&&p(J.container),J.vehicles&&(e(J.vehicles),i(null)),J.boxes&&(P(J.boxes),A(null)),J.projectName&&X(J.projectName)}catch{alert("ไฟล์ไม่ถูกต้อง")}},b.readAsText(T)},ne=()=>{var ee;const T=(ee=j.current)==null?void 0:ee.getCanvas();if(!T){alert("สลับไปหน้า Car Load ก่อน");return}const b=document.createElement("a");b.href=T.toDataURL("image/png"),b.download=`${q.replace(/\s+/g,"_")||"layout"}.png`,b.click()},me=()=>{var J;const T=(J=j.current)==null?void 0:J.getCanvas();if(!T){alert("สลับไปหน้า Car Load ก่อน");return}const b=T.toDataURL("image/png"),ee=window.open("","_blank");ee.document.write(`<!DOCTYPE html><html><head><title>${q}</title><style>*{margin:0;padding:0}body{background:#fff}img{max-width:100%;display:block}h3{font-family:sans-serif;padding:8px 12px;font-size:13px}@media print{h3{margin:0}}</style></head><body><h3>${q} — ${f.name} | ${new Date().toLocaleDateString("th-TH")}</h3><img src="${b}"/></body></html>`),ee.document.close(),ee.addEventListener("load",()=>ee.print())},Ie=t.reduce((T,b)=>T+b.weight,0),Q=Ie>f.maxPayload,re=Ee.useMemo(()=>{if(!t.length)return{lenUsed:0,lenLeft:f.innerLength};let T=0;return t.forEach(b=>{const ee=b.x+(b.rotated?b.width:b.length);ee>T&&(T=ee)}),{lenUsed:T,lenLeft:f.innerLength-T}},[t,f]),de=Ee.useMemo(()=>{const T=new Set;for(let b=0;b<t.length;b++)for(let ee=b+1;ee<t.length;ee++){const J=t[b],ue=t[ee],He=J.rotated?J.width:J.length,le=J.rotated?J.length:J.width,xe=ue.rotated?ue.width:ue.length,$e=ue.rotated?ue.length:ue.width;J.x<ue.x+xe&&J.x+He>ue.x&&J.y<ue.y+$e&&J.y+le>ue.y&&(T.add(J.id),T.add(ue.id))}return t.forEach(b=>{const ee=b.rotated?b.width:b.length,J=b.rotated?b.length:b.width;(b.x<0||b.y<0||b.x+ee>f.innerLength||b.y+J>f.innerWidth)&&T.add(b.id)}),T},[t,f]),pe=()=>{const T=wm.find(J=>J.id===l),b=l==="custom",ee={id:Am(),preset:b?d.label||"Custom":T.name,length:b?d.length:T.length,width:b?d.width:T.width,height:b?d.height:T.height,weight:b?d.weight:T.weight,cabRatio:b?.5:T.cabRatio,x:200,y:Math.round((f.innerWidth-(b?d.width:T.width))/2),rotated:!1,rearLifted:!1,color:za[t.length%za.length],sideX:200,sideY:0,sideAngle:0,sideImage:null,removeBg:!0,flipX:!1,imgRealLength:b?d.length:T.length,imgRealHeight:b?d.height:T.height};Le(),e(J=>[...J,ee]),i(ee.id),a(!1)},be=(T,b)=>{const ee=new FileReader;ee.onload=J=>ve(T,{sideImage:J.target.result}),ee.readAsDataURL(b)},Le=Ee.useCallback(()=>{c(T=>[...T.slice(-49),Y.current]),g([])},[]),ke=Ee.useCallback(()=>{c(T=>{if(!T.length)return T;const b=T[T.length-1];return g(ee=>[Y.current,...ee.slice(0,49)]),e(b),T.slice(0,-1)})},[]),te=Ee.useCallback(()=>{g(T=>{if(!T.length)return T;const b=T[0];return c(ee=>[...ee.slice(-49),Y.current]),e(b),T.slice(1)})},[]);Ee.useEffect(()=>{const T=b=>{b.target.tagName==="INPUT"||b.target.tagName==="TEXTAREA"||(b.ctrlKey&&!b.shiftKey&&b.key==="z"&&(b.preventDefault(),ke()),b.ctrlKey&&(b.key==="y"||b.shiftKey&&b.key==="z")&&(b.preventDefault(),te()))};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[ke,te]);const L=Ee.useMemo(()=>{const T=new Set;for(let b=0;b<v.length;b++)for(let ee=b+1;ee<v.length;ee++){const J=v[b],ue=v[ee];J.x<ue.x+ue.length&&J.x+J.length>ue.x&&J.y<ue.y+ue.width&&J.y+J.width>ue.y&&(T.add(J.id),T.add(ue.id))}return v.forEach(b=>{(b.x<0||b.y<0||b.x+b.length>f.innerLength||b.y+b.width>f.innerWidth)&&T.add(b.id)}),T},[v,f]),Ce=v.reduce((T,b)=>T+b.weight,0),we=()=>{const T=Tm.find(J=>J.id===S),b=S==="box_custom";Le();const ee={id:Am(),preset:b?R.label||"Custom":T.name,length:b?R.length:T.length,width:b?R.width:T.width,height:b?R.height:T.height,weight:b?R.weight:T.weight,x:200,y:Math.round((f.innerWidth-(b?R.width:T.width))/2),z:0,color:za[v.length%za.length]};P(J=>[...J,ee]),A(ee.id),E(!1)},ye=(T,b)=>P(ee=>ee.map(J=>J.id===T?{...J,...b}:J)),oe=(T,b,ee)=>ye(T,{x:Math.max(0,b),y:Math.max(0,ee)}),Fe=T=>{Le(),P(b=>b.filter(ee=>ee.id!==T)),C===T&&A(null)},ve=(T,b)=>e(ee=>ee.map(J=>J.id===T?{...J,...b}:J)),De=T=>{Le(),e(b=>b.filter(ee=>ee.id!==T)),n===T&&i(null)},I=()=>{Le();const T=[...t].sort((ee,J)=>J.length-ee.length);let b=100;e(T.map(ee=>{const J={...ee,x:b,y:Math.round((f.innerWidth-(ee.rotated?ee.length:ee.width))/2)};return b+=(ee.rotated?ee.width:ee.length)+200,J}))},M=re.lenUsed/f.innerLength*100,H=Ie/f.maxPayload*100,F={app:{fontFamily:"'Segoe UI','Noto Sans Thai',sans-serif",background:"#1c2333",color:"#e8eaf5",height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden",fontSize:13},hdr:{background:"linear-gradient(135deg,#1e3a5f,#2d5a8e)",padding:"8px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #00ddaa55",flexShrink:0},body:{display:"flex",flex:1,overflow:"hidden"},side:{width:290,background:"#212a3e",borderRight:"1px solid #2e3a52",display:"flex",flexDirection:"column",overflow:"hidden",flexShrink:0},sec:{padding:"10px 12px",borderBottom:"1px solid #2e3a52"},lbl:{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#00ddaa",marginBottom:6},vp:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},tb:{display:"flex",gap:5,padding:"6px 10px",background:"#1c2840",borderBottom:"1px solid #2e3a52",alignItems:"center",flexShrink:0},va:{flex:1,position:"relative",overflow:"hidden"},btn:{padding:"5px 10px",borderRadius:5,border:"1px solid #3a4a66",background:"#263048",color:"#c8cedf",cursor:"pointer",fontSize:11,fontWeight:500},btnA:{background:"#00ddaa22",borderColor:"#00ddaa",color:"#00ddaa"},btnP:{background:"linear-gradient(135deg,#00ddaa,#00aa88)",border:"none",color:"#0a1a14",fontWeight:700},btnD:{background:"#ff44441a",borderColor:"#ff6666",color:"#ff8888"},inp:{width:"100%",padding:"5px 7px",borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",fontSize:12,boxSizing:"border-box"},sel:{width:"100%",padding:"5px 7px",borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",fontSize:12,boxSizing:"border-box"},card:(T,b)=>({padding:"7px 9px",borderRadius:6,border:`1px solid ${b?"#ff6666":T?"#00ddaa":"#2e3a52"}`,background:T?"#00ddaa15":"#1e2a40",cursor:"pointer",marginBottom:5}),bar:{height:4,borderRadius:2,background:"#2e3a52",marginTop:3,overflow:"hidden"},fill:(T,b)=>({height:"100%",width:`${Math.min(100,T)}%`,background:T>95?"#ff5555":b,borderRadius:2,transition:"width .3s"}),badge:T=>({display:"inline-block",padding:"1px 5px",borderRadius:3,fontSize:9,fontWeight:600,background:T+"22",color:T,marginLeft:5}),status:{padding:"5px 12px",background:"#1a2235",borderTop:"1px solid #2e3a52",display:"flex",justifyContent:"space-between",fontSize:10,color:"#7a8aaa",flexShrink:0}};return G.jsxs("div",{style:F.app,children:[G.jsxs("div",{style:F.hdr,children:[G.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[G.jsx("div",{style:{width:32,height:32,background:"linear-gradient(135deg,#00ffaa,#00aa77)",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#0a0a18"},children:"📦"}),G.jsxs("div",{children:[G.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#00ffaa"},children:"CONTAINER LOADING PLANNER"}),G.jsx("input",{value:q,onChange:T=>X(T.target.value),style:{background:"transparent",border:"none",borderBottom:"1px solid #3a4a66",color:"#aab",fontSize:10,outline:"none",width:180,padding:"1px 2px"},placeholder:"ชื่อ Project..."})]})]}),G.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[G.jsx("button",{style:F.btn,onClick:V,title:"Export โปรเจกต์เป็น JSON",children:"💾 Export"}),G.jsxs("label",{style:{...F.btn,cursor:"pointer"},title:"Import โปรเจกต์จาก JSON",children:["📂 Import",G.jsx("input",{ref:U,type:"file",accept:".json,.clp.json",style:{display:"none"},onChange:T=>{T.target.files[0]&&($(T.target.files[0]),T.target.value="")}})]}),G.jsx("button",{style:F.btn,onClick:ne,title:"ดาวน์โหลด PNG (Car Load view)",children:"⬇ PNG"}),G.jsx("button",{style:F.btn,onClick:me,title:"Print / PDF (Car Load view)",children:"🖨 Print"}),G.jsx("button",{style:F.btn,onClick:I,disabled:!t.length,children:"⚡ Auto"})]})]}),G.jsxs("div",{style:F.body,children:[G.jsxs("div",{style:F.side,children:[G.jsxs("div",{style:F.sec,children:[G.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:G.jsxs("div",{onClick:()=>y(!x),style:{...F.lbl,cursor:"pointer",marginBottom:0},children:["📦 Container ",x?"▲":"▼"]})}),G.jsx("div",{style:{display:"flex",justifyContent:"space-between",padding:"2px 0"},children:G.jsx("span",{style:{color:"#888",fontSize:11},children:f.name})}),G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"2px 0"},children:[G.jsx("span",{style:{color:"#888",fontSize:10},children:"L×W×H"}),G.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:10},children:[f.innerLength,"×",f.innerWidth,"×",f.innerHeight]})]}),x&&G.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:5},children:[G.jsx("select",{style:F.sel,onChange:T=>{const b=Em.find(ee=>ee.name===T.target.value);b&&p({...b})},children:Em.map(T=>G.jsx("option",{value:T.name,children:T.name},T.name))}),G.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[["ยาว (mm)","innerLength"],["กว้าง (mm)","innerWidth"],["สูง (mm)","innerHeight"],["Door H (mm)","doorHeight"],["Door W (mm)","doorWidth"],["Max kg","maxPayload"]].map(([T,b])=>G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:T}),G.jsx("input",{style:F.inp,type:"number",value:f[b],onChange:ee=>p(J=>({...J,[b]:Number(ee.target.value),name:"Custom"}))})]},b))})]})]}),G.jsxs("div",{style:F.sec,children:[G.jsx("div",{style:F.lbl,children:"📐 Clearance & Weight"}),G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0"},children:[G.jsx("span",{style:{color:"#888",fontSize:11},children:"ใช้ความยาว"}),G.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11},children:[Math.round(re.lenUsed)," mm (",Math.round(M),"%)"]})]}),G.jsx("div",{style:F.bar,children:G.jsx("div",{style:F.fill(M,"#00ffaa")})}),G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",marginTop:4},children:[G.jsx("span",{style:{color:"#888",fontSize:11},children:"เหลือ"}),G.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11,color:re.lenLeft<500?"#ff6666":"#00ffaa"},children:[Math.round(re.lenLeft)," mm"]})]}),G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",marginTop:6},children:[G.jsx("span",{style:{color:"#888",fontSize:11},children:"น้ำหนักรวม"}),G.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11,color:Q?"#ff4444":"#ddd"},children:[Ie.toLocaleString()," / ",f.maxPayload.toLocaleString()," kg"]})]}),G.jsx("div",{style:F.bar,children:G.jsx("div",{style:F.fill(H,Q?"#ff4444":"#F59E0B")})}),Q&&G.jsxs("div",{style:{color:"#ff4444",fontSize:10,marginTop:3,fontWeight:600},children:["⚠️ เกิน ",(Ie-f.maxPayload).toLocaleString()," kg"]}),de.size>0&&G.jsxs("div",{style:{color:"#ff4444",fontSize:10,marginTop:4,fontWeight:600},children:["⚠️ ชนกัน/เกินขอบ ",de.size," คัน"]})]}),r==="car"?G.jsxs("div",{style:{...F.sec,flex:1,overflow:"auto"},children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[G.jsxs("div",{style:F.lbl,children:["🚗 รถในตู้ (",t.length,")"]}),G.jsx("button",{style:{...F.btn,...F.btnP,padding:"3px 8px"},onClick:()=>a(!o),children:"+ เพิ่มรถ"})]}),o&&G.jsxs("div",{style:{background:"#161638",borderRadius:7,padding:9,marginBottom:8,border:"1px solid #00ffaa33"},children:[G.jsx("select",{style:F.sel,value:l,onChange:T=>u(T.target.value),children:wm.map(T=>G.jsxs("option",{value:T.id,children:[T.name," ",T.id!=="custom"?`(${T.length}×${T.width})`:""]},T.id))}),l==="custom"&&G.jsx("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[["ชื่อ","label","text"],["น้ำหนัก kg","weight","number"],["ยาว mm","length","number"],["กว้าง mm","width","number"],["สูง mm","height","number"]].map(([T,b,ee])=>G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:T}),G.jsx("input",{style:F.inp,type:ee,value:d[b],onChange:J=>h({...d,[b]:ee==="number"?Number(J.target.value):J.target.value})})]},b))}),G.jsx("button",{style:{...F.btn,...F.btnP,width:"100%",marginTop:7},onClick:pe,children:"✓ เพิ่มรถเข้าตู้"})]}),t.map(T=>G.jsxs("div",{style:F.card(T.id===n,de.has(T.id)),onClick:()=>i(T.id===n?null:T.id),children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[G.jsx("div",{style:{width:10,height:10,borderRadius:2,background:T.color}}),G.jsx("span",{style:{fontWeight:600,fontSize:11},children:T.preset})]}),G.jsx("button",{style:{...F.btn,...F.btnD,padding:"1px 5px",fontSize:10},onClick:b=>{b.stopPropagation(),De(T.id)},children:"✕"})]}),G.jsxs("div",{style:{fontSize:10,color:"#777",marginTop:3},children:[T.length,"×",T.width,"×",T.height," mm • ",T.weight," kg",T.rearLifted&&G.jsx("span",{style:F.badge("#F59E0B"),children:"ยกล้อหลัง"}),T.rotated&&G.jsx("span",{style:F.badge("#8B5CF6"),children:"หมุน 90°"})]}),T.id===n&&G.jsxs("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:5},children:[G.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:"X (mm)"}),G.jsx("input",{style:F.inp,type:"number",value:T.x,onChange:b=>ve(T.id,{x:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:"Y (mm)"}),G.jsx("input",{style:F.inp,type:"number",value:T.y,onChange:b=>ve(T.id,{y:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]})]}),G.jsxs("div",{style:{display:"flex",gap:4},children:[G.jsx("button",{style:{...F.btn,flex:1,...T.rearLifted?F.btnA:{},fontSize:10,padding:3},onClick:b=>{b.stopPropagation(),ve(T.id,{rearLifted:!T.rearLifted})},children:"⬆ ยกล้อหลัง"}),G.jsx("button",{style:{...F.btn,flex:1,...T.rotated?F.btnA:{},fontSize:10,padding:3},onClick:b=>{b.stopPropagation(),ve(T.id,{rotated:!T.rotated})},children:"🔄 หมุน 90°"})]}),G.jsx("button",{style:{...F.btn,fontSize:10,padding:3},onClick:b=>{b.stopPropagation(),ve(T.id,{x:Math.round(T.x/50)*50,y:Math.round(T.y/50)*50})},children:"📐 Snap 50mm"}),G.jsxs("div",{style:{borderTop:"1px solid #252540",paddingTop:5},children:[G.jsx("div",{style:{fontSize:9,color:"#00ffaa88",marginBottom:4,fontWeight:600,letterSpacing:1},children:"SIDE ELEV"}),G.jsxs("div",{style:{display:"flex",gap:4,marginBottom:4},children:[G.jsxs("label",{style:{...F.btn,flex:1,textAlign:"center",cursor:"pointer",fontSize:10,padding:"4px 0"},onClick:b=>b.stopPropagation(),children:["🖼 ",T.sideImage?"เปลี่ยนรูป":"Upload รูป",G.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:b=>{b.target.files[0]&&be(T.id,b.target.files[0])},onClick:b=>b.stopPropagation()})]}),G.jsx("button",{style:{...F.btn,fontSize:10,padding:"4px 6px",...T.removeBg?F.btnA:{}},onClick:b=>{b.stopPropagation(),ve(T.id,{removeBg:!T.removeBg})},title:"ลบพื้นหลังสีขาว",children:"✂ BG"}),G.jsx("button",{style:{...F.btn,fontSize:10,padding:"4px 6px",...T.flipX?F.btnA:{}},onClick:b=>{b.stopPropagation(),ve(T.id,{flipX:!T.flipX})},title:"พลิกภาพซ้าย-ขวา",children:"⇄ Flip"})]}),G.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:"Side X"}),G.jsx("input",{style:F.inp,type:"number",value:T.sideX??200,onChange:b=>ve(T.id,{sideX:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:"Floor Y"}),G.jsx("input",{style:F.inp,type:"number",value:T.sideY??0,onChange:b=>ve(T.id,{sideY:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:"องศา°"}),G.jsx("input",{style:F.inp,type:"number",step:"0.5",value:T.sideAngle??0,onChange:b=>ve(T.id,{sideAngle:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]})]}),G.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginTop:5},children:[G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ความยาวรูป (mm)"}),G.jsx("input",{style:F.inp,type:"number",step:"1",value:T.imgRealLength??T.length,onChange:b=>ve(T.id,{imgRealLength:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ความสูงรูป (mm)"}),G.jsx("input",{style:F.inp,type:"number",step:"1",value:T.imgRealHeight??T.height,onChange:b=>ve(T.id,{imgRealHeight:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]})]}),G.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}})]})]})]},T.id)),!t.length&&G.jsx("div",{style:{textAlign:"center",color:"#444",padding:16,fontSize:12},children:'กด "+ เพิ่มรถ" เพื่อเริ่มวางแผน'})]}):G.jsxs("div",{style:{...F.sec,flex:1,overflow:"auto"},children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[G.jsxs("div",{style:F.lbl,children:["📦 สินค้า (",v.length,") • ",Ce.toLocaleString()," kg"]}),G.jsx("button",{style:{...F.btn,...F.btnP,padding:"3px 8px"},onClick:()=>E(!N),children:"+ เพิ่ม"})]}),N&&G.jsxs("div",{style:{background:"#161638",borderRadius:7,padding:9,marginBottom:8,border:"1px solid #00ffaa33"},children:[G.jsx("select",{style:F.sel,value:S,onChange:T=>D(T.target.value),children:Tm.map(T=>G.jsxs("option",{value:T.id,children:[T.name," ",T.id!=="box_custom"?`(${T.length}×${T.width}×${T.height}mm)`:""]},T.id))}),S==="box_custom"&&G.jsx("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[["ชื่อ","label","text"],["ยาว mm","length","number"],["กว้าง mm","width","number"],["สูง mm","height","number"],["น้ำหนัก kg","weight","number"]].map(([T,b,ee])=>G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:T}),G.jsx("input",{style:F.inp,type:ee,value:R[b],onChange:J=>O({...R,[b]:ee==="number"?Number(J.target.value):J.target.value})})]},b))}),G.jsx("button",{style:{...F.btn,...F.btnP,width:"100%",marginTop:7},onClick:we,children:"✓ เพิ่มสินค้า"})]}),v.map(T=>G.jsxs("div",{style:F.card(T.id===C,L.has(T.id)),onClick:()=>A(T.id===C?null:T.id),children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[G.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[G.jsx("div",{style:{width:10,height:10,borderRadius:2,background:T.color}}),G.jsx("span",{style:{fontWeight:600,fontSize:11},children:T.preset})]}),G.jsx("button",{style:{...F.btn,...F.btnD,padding:"1px 5px",fontSize:10},onClick:b=>{b.stopPropagation(),Fe(T.id)},children:"✕"})]}),G.jsxs("div",{style:{fontSize:10,color:"#777",marginTop:3},children:[T.length,"×",T.width,"×",T.height," mm • ",T.weight," kg"]}),T.id===C&&G.jsxs("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:"X (mm)"}),G.jsx("input",{style:F.inp,type:"number",value:T.x,onChange:b=>ye(T.id,{x:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:"Y (mm)"}),G.jsx("input",{style:F.inp,type:"number",value:T.y,onChange:b=>ye(T.id,{y:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]}),G.jsxs("div",{children:[G.jsx("label",{style:{fontSize:9,color:"#777"},children:"Z พื้น (mm)"}),G.jsx("input",{style:F.inp,type:"number",value:T.z,onChange:b=>ye(T.id,{z:Number(b.target.value)}),onClick:b=>b.stopPropagation()})]})]})]},T.id)),!v.length&&G.jsx("div",{style:{textAlign:"center",color:"#444",padding:16,fontSize:12},children:'กด "+ เพิ่ม" เพื่อเพิ่มสินค้า'})]})]}),G.jsxs("div",{style:F.vp,children:[G.jsxs("div",{style:F.tb,children:[G.jsx("span",{style:{fontSize:10,color:"#555",marginRight:3},children:"VIEW:"}),[["car","🚗 Car Load"],["boxtop","📦 Box Top"],["box3d","📦 Box 3D"]].map(([T,b])=>G.jsx("button",{style:{...F.btn,...r===T?F.btnA:{},padding:"3px 9px"},onClick:()=>s(T),children:b},T)),G.jsx("div",{style:{flex:1}}),G.jsx("button",{style:{...F.btn,padding:"3px 8px",opacity:m.length?1:.35},onClick:ke,disabled:!m.length,title:"Ctrl+Z",children:"↩ Undo"}),G.jsx("button",{style:{...F.btn,padding:"3px 8px",opacity:_.length?1:.35},onClick:te,disabled:!_.length,title:"Ctrl+Y",children:"↪ Redo"})]}),G.jsxs("div",{style:F.va,children:[r==="car"&&G.jsx(dT,{ref:j,container:f,vehicles:t,selectedId:n,onSelectVehicle:i,onUpdateVehicle:ve}),r==="boxtop"&&G.jsx(hT,{container:f,boxes:v,selectedId:C,onSelectBox:A,onMoveBox:oe,collisions:L}),r==="box3d"&&G.jsx(mT,{container:f,boxes:v,selectedId:C,onMoveBox:oe,onSelectBox:A})]})]})]}),G.jsxs("div",{style:F.status,children:[G.jsxs("span",{children:[f.name," | ",f.innerLength,"×",f.innerWidth,"×",f.innerHeight," mm"]}),r==="car"?G.jsxs("span",{children:["Vehicles: ",t.length," | ",Ie.toLocaleString()," kg | Length: ",Math.round(M),"%"]}):G.jsxs("span",{children:["Boxes: ",v.length," | ",Ce.toLocaleString()," kg ",Ce>f.maxPayload?`⚠️ +${(Ce-f.maxPayload).toLocaleString()}kg`:""]})]})]})}B0(document.getElementById("root")).render(G.jsx(Ee.StrictMode,{children:G.jsx(gT,{})}));
