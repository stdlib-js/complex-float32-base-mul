"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=o(function(H,w){
var n=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/complex-float32-ctor/dist'),F=require('@stdlib/complex-float32-real/dist'),T=require('@stdlib/complex-float32-imag/dist');function k(e,r){var a=F(e),i=F(r),v=T(e),t=T(r),s=n(a*i)-n(v*t),q=n(a*t)+n(v*i);return new j(n(s),n(q))}w.exports=k
});var R=o(function(I,C){
var u=require('@stdlib/number-float64-base-to-float32/dist');function A(e,r,a,i,v,t,s){return v[s]=u(e*a)-u(r*i),v[s+t]=u(e*i)+u(r*a),v}C.exports=A
});var f=o(function(J,b){
var l=require('@stdlib/number-float64-base-to-float32/dist');function B(e,r,a,i,v,t,s,q,d){var m=e[a],p=e[a+r],x=i[t],g=i[t+v];return s[d]=l(m*x)-l(p*g),s[d+q]=l(m*g)+l(p*x),s}b.exports=B
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=y(),D=R(),E=f();h(c,"assign",D);h(c,"strided",E);module.exports=c;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
