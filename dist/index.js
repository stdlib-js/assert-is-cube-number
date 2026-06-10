"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(y,a){
var o=require('@stdlib/assert-is-integer/dist').isPrimitive,f=require('@stdlib/math-base-special-cbrt/dist'),m=require('@stdlib/math-base-special-floor/dist');function O(e){var r;return o(e)?(r=m(f(e)+.5),r*r*r===e):!1}a.exports=O
});var u=t(function(R,v){
var x=require('@stdlib/assert-is-integer/dist').isObject,j=require('@stdlib/math-base-special-cbrt/dist'),p=require('@stdlib/math-base-special-floor/dist');function P(e){var r,i;return x(e)?(i=e.valueOf(),r=p(j(i)+.5),r*r*r===i):!1}v.exports=P
});var b=t(function(h,c){
var C=s(),N=u();function g(e){return C(e)||N(e)}c.exports=g
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=b(),l=s(),I=u();q(n,"isPrimitive",l);q(n,"isObject",I);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
