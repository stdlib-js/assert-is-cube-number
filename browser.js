// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,m,"$1e"),n=s.call(n,h,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function S(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+S(n):S(n)+r}var _=String.fromCharCode,j=isNaN,E=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,e,n,o,a,f,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(u(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,j(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,i;for(e=[],i=0,n=O.exec(r);n;)(t=r.slice(i,O.lastIndex-n[0].length)).length&&e.push(t),e.push(I(n)),i=O.lastIndex,n=O.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function k(r){return"string"==typeof r}function F(r){var t,e;if(!k(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return U.apply(null,t)}var N=Object.prototype,V=N.toString,P=N.__defineGetter__,$=N.__defineSetter__,G=N.__lookupGetter__,C=N.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(G.call(r,t)||C.call(r,t)?(n=r.__proto__,r.__proto__=N,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,t,e.get),a&&$&&$.call(r,t,e.set),r};function W(r,t,e){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function L(r){return"number"==typeof r}function R(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Z=R();function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=M()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[B],t=z(r,B);try{r[B]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[B]=e:delete r[B],n}:function(r){return X.call(r)},J=Number,K=J.prototype.toString,Q=M();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function tr(r){return L(r)||rr(r)}W(tr,"isPrimitive",L),W(tr,"isObject",rr);var er=Number.POSITIVE_INFINITY,nr=Number.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return r<er&&r>nr&&ir(t=r)===t;var t}function ar(r){return L(r)&&or(r)}function cr(r){return rr(r)&&or(r.valueOf())}function ur(r){return ar(r)||cr(r)}W(ur,"isPrimitive",ar),W(ur,"isObject",cr);var fr,lr=2147483647,pr=R(),sr=Object.prototype.toString,yr="function"==typeof Symbol?Symbol:void 0,gr="function"==typeof yr?yr.toStringTag:"",dr=pr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return sr.call(r);e=r[gr],t=z(r,gr);try{r[gr]=void 0}catch(t){return sr.call(r)}return n=sr.call(r),t?r[gr]=e:delete r[gr],n}:function(r){return sr.call(r)},br="function"==typeof Uint32Array,vr="function"==typeof Uint32Array?Uint32Array:null,hr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,t,e;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(br&&e instanceof Uint32Array||"[object Uint32Array]"===dr(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var mr,wr=fr,Sr=R(),Ar=Object.prototype.toString,_r="function"==typeof Symbol?Symbol:void 0,jr="function"==typeof _r?_r.toStringTag:"",Er=Sr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Ar.call(r);e=r[jr],t=z(r,jr);try{r[jr]=void 0}catch(t){return Ar.call(r)}return n=Ar.call(r),t?r[jr]=e:delete r[jr],n}:function(r){return Ar.call(r)},Tr="function"==typeof Float64Array,Ur="function"==typeof Float64Array?Float64Array:null,Or="function"==typeof Float64Array?Float64Array:void 0;mr=function(){var r,t,e;if("function"!=typeof Ur)return!1;try{t=new Ur([1,3.14,-3.14,NaN]),e=t,r=(Tr&&e instanceof Float64Array||"[object Float64Array]"===Er(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var Ir,xr=mr,kr=R(),Fr=Object.prototype.toString,Nr="function"==typeof Symbol?Symbol:void 0,Vr="function"==typeof Nr?Nr.toStringTag:"",Pr=kr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Fr.call(r);e=r[Vr],t=z(r,Vr);try{r[Vr]=void 0}catch(t){return Fr.call(r)}return n=Fr.call(r),t?r[Vr]=e:delete r[Vr],n}:function(r){return Fr.call(r)},$r="function"==typeof Uint8Array,Gr="function"==typeof Uint8Array?Uint8Array:null,Cr="function"==typeof Uint8Array?Uint8Array:void 0;Ir=function(){var r,t,e;if("function"!=typeof Gr)return!1;try{t=new Gr(t=[1,3.14,-3.14,256,257]),e=t,r=($r&&e instanceof Uint8Array||"[object Uint8Array]"===Pr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Hr,Wr=Ir,Lr=R(),Rr=Object.prototype.toString,Zr="function"==typeof Symbol?Symbol:void 0,Mr="function"==typeof Zr?Zr.toStringTag:"",Xr=Lr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Rr.call(r);e=r[Mr],t=z(r,Mr);try{r[Mr]=void 0}catch(t){return Rr.call(r)}return n=Rr.call(r),t?r[Mr]=e:delete r[Mr],n}:function(r){return Rr.call(r)},Yr="function"==typeof Uint16Array,zr="function"==typeof Uint16Array?Uint16Array:null,qr="function"==typeof Uint16Array?Uint16Array:void 0;Hr=function(){var r,t,e;if("function"!=typeof zr)return!1;try{t=new zr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Yr&&e instanceof Uint16Array||"[object Uint16Array]"===Xr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var Br,Dr={uint16:Hr,uint8:Wr};(Br=new Dr.uint16(1))[0]=4660;var Jr=52===new Dr.uint8(Br.buffer)[0],Kr=!0===Jr?1:0,Qr=new xr(1),rt=new wr(Qr.buffer);function tt(r){return Qr[0]=r,rt[Kr]}var et,nt,it=!0===Jr?1:0,ot=new xr(1),at=new wr(ot.buffer);!0===Jr?(et=1,nt=0):(et=0,nt=1);var ct,ut,ft={HIGH:et,LOW:nt},lt=new xr(1),pt=new wr(lt.buffer),st=ft.HIGH,yt=ft.LOW;function gt(r,t){return pt[st]=r,pt[yt]=t,lt[0]}!0===Jr?(ct=1,ut=0):(ct=0,ut=1);var dt={HIGH:ct,LOW:ut},bt=new xr(1),vt=new wr(bt.buffer),ht=dt.HIGH,mt=dt.LOW;function wt(r,t,e,n){return bt[0]=r,t[n]=vt[ht],t[n+e]=vt[mt],t}function St(r){return wt(r,[0,0],1,0)}W(St,"assign",wt);var At=2147483648,_t=tt(22250738585072014e-324),jt=[0,0];function Et(r){var t,e,n,i;return 0===r||function(r){return r!=r}(r)||function(r){return r===er||r===nr}(r)?r:(t=(2147483648&(e=tt(r)>>>0))>>>0,i=(e&=lr)<_t?gt(t|696219795+(((tt(i=0x40000000000000*r)&lr)>>>0)/3>>>0)>>>0,0):function(r,t){return ot[0]=r,at[it]=t>>>0,ot[0]}(i=0,t|715094163+(e/3>>>0)>>>0),i*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=i*i*(i/r)),St.assign(i,jt,1,0),jt[1]&At?(jt[0]+=1,jt[1]&=~At):jt[1]|=At,i=gt(4294967295&jt[0],3221225472&jt[1]),i+=i*(n=((n=r/(i*i))-i)/(i+i+n)))}function Tt(r){var t;return!!ar(r)&&(t=ir(Et(r)+.5))*t*t===r}function Ut(r){var t,e;return!!cr(r)&&(e=r.valueOf(),(t=ir(Et(e)+.5))*t*t===e)}function Ot(r){return Tt(r)||Ut(r)}return W(Ot,"isPrimitive",Tt),W(Ot,"isObject",Ut),Ot},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isCubeNumber=t();
//# sourceMappingURL=browser.js.map
