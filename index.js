// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,a){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(t,n)||f.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=a.value,t.__proto__=c):t[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,a.get),p&&i&&i.call(t,n,a.set),t};function c(t,n,r){a(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,v=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",m=p()?function(t){var n,r,e,o,i;if(null==t)return b.call(t);r=t[s],i=s,n=null!=(o=t)&&v.call(o,i);try{t[s]=void 0}catch(n){return b.call(t)}return e=b.call(t),n?t[s]=r:delete t[s],e}:function(t){return b.call(t)},d=Number,w=d.prototype.toString,A=p();function _(t){return"object"==typeof t&&(t instanceof d||(A?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function j(t){return l(t)||_(t)}c(j,"isPrimitive",l),c(j,"isObject",_);var U=Number.POSITIVE_INFINITY,h=d.NEGATIVE_INFINITY,g=Math.floor;function O(t){return t<U&&t>h&&g(n=t)===n;var n}function I(t){return l(t)&&O(t)}function S(t){return _(t)&&O(t.valueOf())}function N(t){return I(t)||S(t)}c(N,"isPrimitive",I),c(N,"isObject",S);var E,F=2147483647,T="function"==typeof Uint32Array,P="function"==typeof Uint32Array?Uint32Array:null,H="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var t,n,r;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(T&&r instanceof Uint32Array||"[object Uint32Array]"===m(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?H:function(){throw new Error("not implemented")};var G,x=E,L="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,W="function"==typeof Float64Array?Float64Array:void 0;G=function(){var t,n,r;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),r=n,t=(L&&r instanceof Float64Array||"[object Float64Array]"===m(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?W:function(){throw new Error("not implemented")};var k,C=G,Y="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,q="function"==typeof Uint8Array?Uint8Array:void 0;k=function(){var t,n,r;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),r=n,t=(Y&&r instanceof Uint8Array||"[object Uint8Array]"===m(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?q:function(){throw new Error("not implemented")};var z,B=k,D="function"==typeof Uint16Array,J="function"==typeof Uint16Array?Uint16Array:null,K="function"==typeof Uint16Array?Uint16Array:void 0;z=function(){var t,n,r;if("function"!=typeof J)return!1;try{n=new J(n=[1,3.14,-3.14,65536,65537]),r=n,t=(D&&r instanceof Uint16Array||"[object Uint16Array]"===m(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?K:function(){throw new Error("not implemented")};var Q,R={uint16:z,uint8:B};(Q=new R.uint16(1))[0]=4660;var X=52===new R.uint8(Q.buffer)[0],Z=!0===X?1:0,$=new C(1),tt=new x($.buffer);function nt(t){return $[0]=t,tt[Z]}var rt,et,ot=!0===X?1:0,it=new C(1),ut=new x(it.buffer);!0===X?(rt=1,et=0):(rt=0,et=1);var ft,at,ct={HIGH:rt,LOW:et},lt=new C(1),yt=new x(lt.buffer),pt=ct.HIGH,bt=ct.LOW;function vt(t,n){return yt[pt]=t,yt[bt]=n,lt[0]}!0===X?(ft=1,at=0):(ft=0,at=1);var st={HIGH:ft,LOW:at},mt=new C(1),dt=new x(mt.buffer),wt=st.HIGH,At=st.LOW;function _t(t,n,r,e){return mt[0]=t,n[e]=dt[wt],n[e+r]=dt[At],n}function jt(t){return _t(t,[0,0],1,0)}c(jt,"assign",_t);var Ut=2147483648,ht=nt(22250738585072014e-324),gt=[0,0];function Ot(t){var n,r,e,o;return 0===t||function(t){return t!=t}(t)||function(t){return t===U||t===h}(t)?t:(n=(2147483648&(r=nt(t)>>>0))>>>0,o=(r&=F)<ht?vt(n|696219795+(((nt(o=0x40000000000000*t)&F)>>>0)/3>>>0)>>>0,0):function(t,n){return it[0]=t,ut[ot]=n>>>0,it[0]}(o=0,n|715094163+(r/3>>>0)>>>0),o*=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)}(e=o*o*(o/t)),jt.assign(o,gt,1,0),gt[1]&Ut?(gt[0]+=1,gt[1]&=~Ut):gt[1]|=Ut,o=vt(4294967295&gt[0],3221225472&gt[1]),o+=o*(e=((e=t/(o*o))-o)/(o+o+e)))}function It(t){var n;return!!I(t)&&(n=g(Ot(t)+.5))*n*n===t}function St(t){var n,r;return!!S(t)&&(r=t.valueOf(),(n=g(Ot(r)+.5))*n*n===r)}function Nt(t){return It(t)||St(t)}return c(Nt,"isPrimitive",It),c(Nt,"isObject",St),Nt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).isCubeNumber=n();
//# sourceMappingURL=index.js.map
