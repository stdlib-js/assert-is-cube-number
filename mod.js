// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,h,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,a,o,u,f,s,l,p,y,g,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,v=void 0,(v=y-p.length)<0?p:p=g?p+m(v):m(v)+p)),u+=n.arg||"",f+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function O(r){var e,t;if("string"!=typeof r)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return j.apply(null,e)}var k=Object.prototype,F=k.toString,T=k.__defineGetter__,V=k.__defineSetter__,N=k.__lookupGetter__,P=k.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||P.call(r,e)?(n=r.__proto__,r.__proto__=k,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function G(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function C(){return W&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;var Z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof Z?Z.toStringTag:"";var X=C()?function(r){var e,t,n,i,a;if(null==r)return L.call(r);t=r[M],a=M,e=null!=(i=r)&&R.call(i,a);try{r[M]=void 0}catch(e){return L.call(r)}return n=L.call(r),e?r[M]=t:delete r[M],n}:function(r){return L.call(r)},Y=Number,z=Y.prototype.toString;var q=C();function B(r){return"object"==typeof r&&(r instanceof Y||(q?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function D(r){return H(r)||B(r)}G(D,"isPrimitive",H),G(D,"isObject",B);var J=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY,Q=Math.floor;function rr(r){return r<J&&r>K&&Q(e=r)===e;var e}function er(r){return H(r)&&rr(r)}function tr(r){return B(r)&&rr(r.valueOf())}function nr(r){return er(r)||tr(r)}G(nr,"isPrimitive",er),G(nr,"isObject",tr);var ir=2147483648,ar=2147483647,or="function"==typeof Uint32Array;var cr="function"==typeof Uint32Array?Uint32Array:null;var ur,fr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(or&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=ur,lr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var yr,gr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),t=e,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var vr=yr,dr="function"==typeof Uint8Array;var hr="function"==typeof Uint8Array?Uint8Array:null;var wr,br="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),t=e,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr=wr,Ar="function"==typeof Uint16Array;var _r="function"==typeof Uint16Array?Uint16Array:null;var Er,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,e,t;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var jr,Sr={uint16:Er,uint8:mr};(jr=new Sr.uint16(1))[0]=4660;var Ir=52===new Sr.uint8(jr.buffer)[0],xr=!0===Ir?1:0,Or=new vr(1),kr=new sr(Or.buffer);function Fr(r){return Or[0]=r,kr[xr]}var Tr,Vr,Nr=!0===Ir?1:0,Pr=new vr(1),$r=new sr(Pr.buffer);!0===Ir?(Tr=1,Vr=0):(Tr=0,Vr=1);var Gr,Hr,Wr={HIGH:Tr,LOW:Vr},Cr=new vr(1),Lr=new sr(Cr.buffer),Rr=Wr.HIGH,Zr=Wr.LOW;function Mr(r,e){return Lr[Rr]=r,Lr[Zr]=e,Cr[0]}!0===Ir?(Gr=1,Hr=0):(Gr=0,Hr=1);var Xr={HIGH:Gr,LOW:Hr},Yr=new vr(1),zr=new sr(Yr.buffer),qr=Xr.HIGH,Br=Xr.LOW;function Dr(r,e,t,n){return Yr[0]=r,e[n]=zr[qr],e[n+t]=zr[Br],e}function Jr(r){return Dr(r,[0,0],1,0)}G(Jr,"assign",Dr);var Kr=4294967295,Qr=3221225472,re=0x40000000000000,ee=2147483648,te=1,ne=715094163,ie=696219795,ae=Fr(22250738585072014e-324),oe=[0,0];function ce(r){var e,t,n,i;return 0===r||function(r){return r!=r}(r)||function(r){return r===J||r===K}(r)?r:(e=((t=Fr(r)>>>0)&ir)>>>0,i=(t&=ar)<ae?Mr(e|(((Fr(i=re*r)&ar)>>>0)/3>>>0)+ie>>>0,0):function(r,e){return Pr[0]=r,$r[Nr]=e>>>0,Pr[0]}(i=0,e|(t/3>>>0)+ne>>>0),i*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=i*i*(i/r)),Jr.assign(i,oe,1,0),oe[1]&ee?(oe[0]+=te,oe[1]&=~ee):oe[1]|=ee,i=Mr(oe[0]&Kr,oe[1]&Qr),i+=i*(n=((n=r/(i*i))-i)/(i+i+n)))}function ue(r){var e;return!!er(r)&&(e=Q(ce(r)+.5))*e*e===r}function fe(r){var e,t;return!!tr(r)&&(t=r.valueOf(),(e=Q(ce(t)+.5))*e*e===t)}function se(r){return ue(r)||fe(r)}G(se,"isPrimitive",ue),G(se,"isObject",fe);export{se as default,fe as isObject,ue as isPrimitive};
//# sourceMappingURL=mod.js.map
