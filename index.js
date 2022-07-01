// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,c=e.__lookupSetter__,a=r,l=function(t,n,r){var a,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||c.call(t,n)?(a=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=a):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,n,r.get),p&&u&&u.call(t,n,r.set),t},y=n()?a:l,p=function(t,n,r){y(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},b=function(t){return"number"==typeof t},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=function(){return s&&"symbol"==typeof Symbol.toStringTag},v=Object.prototype.toString,d=v,w=function(t){return d.call(t)},A=Object.prototype.hasOwnProperty,_=function(t,n){return null!=t&&A.call(t,n)},j="function"==typeof Symbol?Symbol.toStringTag:"",h=_,U=j,O=v,g=w,I=function(t){var n,r,e;if(null==t)return O.call(t);r=t[U],n=h(t,U);try{t[U]=void 0}catch(n){return O.call(t)}return e=O.call(t),n?t[U]=r:delete t[U],e},S=m()?I:g,N=Number,P=N.prototype.toString,E=S,F=N,T=function(t){try{return P.call(t),!0}catch(t){return!1}},H=m(),G=function(t){return"object"==typeof t&&(t instanceof F||(H?T(t):"[object Number]"===E(t)))},x=b,L=G,V=p,W=function(t){return x(t)||L(t)},k=G;V(W,"isPrimitive",b),V(W,"isObject",k);var C=W,Y=Number.POSITIVE_INFINITY,M=N.NEGATIVE_INFINITY,q=Math.floor,z=q,B=Y,D=M,J=function(t){return z(t)===t},K=function(t){return t<B&&t>D&&J(t)},Q=C.isPrimitive,R=K,X=function(t){return Q(t)&&R(t)},Z=C.isObject,$=K,tt=function(t){return Z(t)&&$(t.valueOf())},nt=X,rt=tt,et=p,ot=function(t){return nt(t)||rt(t)},it=tt;et(ot,"isPrimitive",X),et(ot,"isObject",it);var ut,ft=ot,ct=S,at="function"==typeof Uint32Array,lt="function"==typeof Uint32Array?Uint32Array:null,yt=function(t){return at&&t instanceof Uint32Array||"[object Uint32Array]"===ct(t)},pt=lt,bt=function(){var t,n;if("function"!=typeof pt)return!1;try{n=new pt(n=[1,3.14,-3.14,4294967296,4294967297]),t=yt(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},st="function"==typeof Uint32Array?Uint32Array:void 0,mt=function(){throw new Error("not implemented")},vt=bt()?st:mt,dt=S,wt="function"==typeof Float64Array,At="function"==typeof Float64Array?Float64Array:null,_t=function(t){return wt&&t instanceof Float64Array||"[object Float64Array]"===dt(t)},jt=At,ht=function(){var t,n;if("function"!=typeof jt)return!1;try{n=new jt([1,3.14,-3.14,NaN]),t=_t(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},Ut="function"==typeof Float64Array?Float64Array:void 0,Ot=function(){throw new Error("not implemented")},gt=ht()?Ut:Ot,It=S,St="function"==typeof Uint8Array,Nt="function"==typeof Uint8Array?Uint8Array:null,Pt=function(t){return St&&t instanceof Uint8Array||"[object Uint8Array]"===It(t)},Et=Nt,Ft=function(){var t,n;if("function"!=typeof Et)return!1;try{n=new Et(n=[1,3.14,-3.14,256,257]),t=Pt(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},Tt="function"==typeof Uint8Array?Uint8Array:void 0,Ht=function(){throw new Error("not implemented")},Gt=Ft()?Tt:Ht,xt=S,Lt="function"==typeof Uint16Array,Vt="function"==typeof Uint16Array?Uint16Array:null,Wt=function(t){return Lt&&t instanceof Uint16Array||"[object Uint16Array]"===xt(t)},kt=Vt,Ct=function(){var t,n;if("function"!=typeof kt)return!1;try{n=new kt(n=[1,3.14,-3.14,65536,65537]),t=Wt(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},Yt="function"==typeof Uint16Array?Uint16Array:void 0,Mt=function(){throw new Error("not implemented")},qt={uint16:Ct()?Yt:Mt,uint8:Gt};(ut=new qt.uint16(1))[0]=4660;var zt,Bt,Dt=52===new qt.uint8(ut.buffer)[0],Jt=vt,Kt=!0===Dt?1:0,Qt=new gt(1),Rt=new Jt(Qt.buffer),Xt=function(t){return Qt[0]=t,Rt[Kt]},Zt=vt,$t=!0===Dt?1:0,tn=new gt(1),nn=new Zt(tn.buffer),rn=function(t,n){return tn[0]=t,nn[$t]=n>>>0,tn[0]},en=rn,on=Y,un=M,fn=function(t){return t===on||t===un};!0===Dt?(zt=1,Bt=0):(zt=0,Bt=1);var cn,an,ln=vt,yn={HIGH:zt,LOW:Bt},pn=new gt(1),bn=new ln(pn.buffer),sn=yn.HIGH,mn=yn.LOW,vn=function(t,n){return bn[sn]=t,bn[mn]=n,pn[0]},dn=vn;!0===Dt?(cn=1,an=0):(cn=0,an=1);var wn=vt,An={HIGH:cn,LOW:an},_n=new gt(1),jn=new wn(_n.buffer),hn=An.HIGH,Un=An.LOW,On=function(t,n){return _n[0]=n,t[0]=jn[hn],t[1]=jn[Un],t},gn=function(t,n){return 1===arguments.length?On([0,0],t):On(t,n)},In=Xt,Sn=en,Nn=fn,Pn=dn,En=gn,Fn=function(t){return t!=t},Tn=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)},Hn=2147483647,Gn=2147483648,xn=In(22250738585072014e-324),Ln=[0,0],Vn=function(t){var n,r,e,o,i;return 0===t||Fn(t)||Nn(t)?t:(n=(2147483648&(r=In(t)>>>0))>>>0,(r&=Hn)<xn?(e=(In(i=0x40000000000000*t)&Hn)>>>0,i=Pn(n|(e=696219795+(e/3>>>0)>>>0),0)):i=Sn(i=0,n|(e=715094163+(r/3>>>0)>>>0)),i*=Tn(o=i*i*(i/t)),En(Ln,i),Ln[1]&Gn?(Ln[0]+=1,Ln[1]&=~Gn):Ln[1]|=Gn,i=Pn(4294967295&Ln[0],3221225472&Ln[1]),i+=i*(o=((o=t/(i*i))-i)/(i+i+o)))};function Wn(t){var n;return!!ft.isPrimitive(t)&&(n=q(Vn(t)+.5))*n*n===t}function kn(t){var n,r;return!!ft.isObject(t)&&(r=t.valueOf(),(n=q(Vn(r)+.5))*n*n===r)}function Cn(t){return Wn(t)||kn(t)}return p(Cn,"isPrimitive",Wn),p(Cn,"isObject",kn),Cn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).isCubeNumber=n();
//# sourceMappingURL=index.js.map
