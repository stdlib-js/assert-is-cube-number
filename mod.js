// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,u=n.__lookupSetter__;var f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,l,y,v;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(a.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,f.get),v&&i&&i.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return y&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=v()?function(t){var r,n,e,o,i;if(null==t)return p.call(t);n=t[m],i=m,r=null!=(o=t)&&b.call(o,i);try{t[m]=void 0}catch(r){return p.call(t)}return e=p.call(t),r?t[m]=n:delete t[m],e}:function(t){return p.call(t)},A=Number,s=A.prototype.toString;var _=v();function d(t){return"object"==typeof t&&(t instanceof A||(_?function(t){try{return s.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function j(t){return l(t)||d(t)}c(j,"isPrimitive",l),c(j,"isObject",d);var U=Number.POSITIVE_INFINITY,h=A.NEGATIVE_INFINITY,O=Math.floor;function g(t){return t<U&&t>h&&O(r=t)===r;var r}function I(t){return l(t)&&g(t)}function S(t){return d(t)&&g(t.valueOf())}function E(t){return I(t)||S(t)}c(E,"isPrimitive",I),c(E,"isObject",S);var F="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var P,H="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var t,r,n;if("function"!=typeof N)return!1;try{r=new N(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(F&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?H:function(){throw new Error("not implemented")};var T=P,G="function"==typeof Float64Array;var L="function"==typeof Float64Array?Float64Array:null;var V,W="function"==typeof Float64Array?Float64Array:void 0;V=function(){var t,r,n;if("function"!=typeof L)return!1;try{r=new L([1,3.14,-3.14,NaN]),n=r,t=(G&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?W:function(){throw new Error("not implemented")};var x=V,k="function"==typeof Uint8Array;var Y="function"==typeof Uint8Array?Uint8Array:null;var C,M="function"==typeof Uint8Array?Uint8Array:void 0;C=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,256,257]),n=r,t=(k&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?M:function(){throw new Error("not implemented")};var q=C,z="function"==typeof Uint16Array;var B="function"==typeof Uint16Array?Uint16Array:null;var D,J="function"==typeof Uint16Array?Uint16Array:void 0;D=function(){var t,r,n;if("function"!=typeof B)return!1;try{r=new B(r=[1,3.14,-3.14,65536,65537]),n=r,t=(z&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?J:function(){throw new Error("not implemented")};var K,Q={uint16:D,uint8:q};(K=new Q.uint16(1))[0]=4660;var R=52===new Q.uint8(K.buffer)[0],X=!0===R?1:0,Z=new x(1),$=new T(Z.buffer);function tt(t){return Z[0]=t,$[X]}var rt,nt,et=!0===R?1:0,ot=new x(1),it=new T(ot.buffer);!0===R?(rt=1,nt=0):(rt=0,nt=1);var at,ut,ft={HIGH:rt,LOW:nt},ct=new x(1),lt=new T(ct.buffer),yt=ft.HIGH,vt=ft.LOW;function pt(t,r){return lt[yt]=t,lt[vt]=r,ct[0]}!0===R?(at=1,ut=0):(at=0,ut=1);var bt={HIGH:at,LOW:ut},mt=new x(1),wt=new T(mt.buffer),At=bt.HIGH,st=bt.LOW;function _t(t,r){return mt[0]=r,t[0]=wt[At],t[1]=wt[st],t}var dt=tt(22250738585072014e-324),jt=[0,0];function Ut(t){var r,n,e,o;return 0===t||function(t){return t!=t}(t)||function(t){return t===U||t===h}(t)?t:(r=(2147483648&(n=tt(t)>>>0))>>>0,o=(n&=2147483647)<dt?pt(r|696219795+(((2147483647&tt(o=0x40000000000000*t))>>>0)/3>>>0)>>>0,0):function(t,r){return ot[0]=t,it[et]=r>>>0,ot[0]}(o=0,r|715094163+(n/3>>>0)>>>0),o*=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)}(e=o*o*(o/t)),function(t,r){1===arguments.length?_t([0,0],t):_t(t,r)}(jt,o),2147483648&jt[1]?(jt[0]+=1,jt[1]&=2147483647):jt[1]|=2147483648,o=pt(4294967295&jt[0],3221225472&jt[1]),o+=o*(e=((e=t/(o*o))-o)/(o+o+e)))}function ht(t){var r;return!!I(t)&&(r=O(Ut(t)+.5))*r*r===t}function Ot(t){var r,n;return!!S(t)&&(n=t.valueOf(),(r=O(Ut(n)+.5))*r*r===n)}function gt(t){return ht(t)||Ot(t)}c(gt,"isPrimitive",ht),c(gt,"isObject",Ot);export{gt as default,Ot as isObject,ht as isPrimitive};
//# sourceMappingURL=mod.js.map