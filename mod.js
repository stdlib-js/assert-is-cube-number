// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var E=String.fromCharCode,U=isNaN,j=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,f,s,l,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,U(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function T(r){var e,t,n;if(!F(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=k(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var V=Object.prototype,N=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,G=V.__lookupGetter__,H=V.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&$&&$.call(r,e,t.set),r};function C(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var q=Z()?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[z]=t:delete r[z],n}:function(r){return M.call(r)},B=Number,D=B.prototype.toString;var J=Z();function K(r){return"object"==typeof r&&(r instanceof B||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Q(r){return L(r)||K(r)}C(Q,"isPrimitive",L),C(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=B.NEGATIVE_INFINITY,tr=Math.floor;function nr(r){return r<rr&&r>er&&tr(e=r)===e;var e}function ir(r){return L(r)&&nr(r)}function ar(r){return K(r)&&nr(r.valueOf())}function or(r){return ir(r)||ar(r)}C(or,"isPrimitive",ir),C(or,"isObject",ar);var cr="function"==typeof Uint32Array;var ur="function"==typeof Uint32Array?Uint32Array:null;var fr,sr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(cr&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr=fr,pr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var gr,vr="function"==typeof Float64Array?Float64Array:void 0;gr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,NaN]),t=e,r=(pr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var dr=gr,hr="function"==typeof Uint8Array;var wr="function"==typeof Uint8Array?Uint8Array:null;var br,mr="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr(e=[1,3.14,-3.14,256,257]),t=e,r=(hr&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Ar=br,_r="function"==typeof Uint16Array;var Er="function"==typeof Uint16Array?Uint16Array:null;var Ur,jr="function"==typeof Uint16Array?Uint16Array:void 0;Ur=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,65536,65537]),t=e,r=(_r&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var Sr,Ir={uint16:Ur,uint8:Ar};(Sr=new Ir.uint16(1))[0]=4660;var xr=52===new Ir.uint8(Sr.buffer)[0],Or=!0===xr?1:0,kr=new dr(1),Fr=new lr(kr.buffer);function Tr(r){return kr[0]=r,Fr[Or]}var Vr,Nr,Pr=!0===xr?1:0,$r=new dr(1),Gr=new lr($r.buffer);!0===xr?(Vr=1,Nr=0):(Vr=0,Nr=1);var Hr,Wr,Cr={HIGH:Vr,LOW:Nr},Lr=new dr(1),Rr=new lr(Lr.buffer),Zr=Cr.HIGH,Mr=Cr.LOW;function Xr(r,e){return Rr[Zr]=r,Rr[Mr]=e,Lr[0]}!0===xr?(Hr=1,Wr=0):(Hr=0,Wr=1);var Yr={HIGH:Hr,LOW:Wr},zr=new dr(1),qr=new lr(zr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e,t,n){return zr[0]=r,e[n]=qr[Br],e[n+t]=qr[Dr],e}function Kr(r){return Jr(r,[0,0],1,0)}C(Kr,"assign",Jr);var Qr=Tr(22250738585072014e-324),re=[0,0];function ee(r){var e,t,n,i;return 0===r||function(r){return r!=r}(r)||function(r){return r===rr||r===er}(r)?r:(e=(2147483648&(t=Tr(r)>>>0))>>>0,i=(t&=2147483647)<Qr?Xr(e|696219795+(((2147483647&Tr(i=0x40000000000000*r))>>>0)/3>>>0)>>>0,0):function(r,e){return $r[0]=r,Gr[Pr]=e>>>0,$r[0]}(i=0,e|715094163+(t/3>>>0)>>>0),i*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=i*i*(i/r)),Kr.assign(i,re,1,0),2147483648&re[1]?(re[0]+=1,re[1]&=2147483647):re[1]|=2147483648,i=Xr(4294967295&re[0],3221225472&re[1]),i+=i*(n=((n=r/(i*i))-i)/(i+i+n)))}function te(r){var e;return!!ir(r)&&(e=tr(ee(r)+.5))*e*e===r}function ne(r){var e,t;return!!ar(r)&&(t=r.valueOf(),(e=tr(ee(t)+.5))*e*e===t)}function ie(r){return te(r)||ne(r)}C(ie,"isPrimitive",te),C(ie,"isObject",ne);export{ie as default,ne as isObject,te as isPrimitive};
//# sourceMappingURL=mod.js.map
