"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=d(function(I,R){
var u=require('@stdlib/number-float64-base-to-float32/dist'),A=require('@stdlib/complex-float32-ctor/dist'),y=require('@stdlib/complex-float32-real/dist'),C=require('@stdlib/complex-float32-imag/dist');function B(e,r){var i=y(e),a=y(r),v=C(e),n=C(r),s=u(i*a)-u(v*n),c=u(i*n)+u(v*a);return new A(u(s),u(c))}R.exports=B
});var h=d(function(J,f){
var t=require('@stdlib/number-float64-base-to-float32/dist');function D(e,r,i,a,v,n,s){return v[s]=t(e*i)-t(r*a),v[s+n]=t(e*a)+t(r*i),v}f.exports=D
});var k=d(function(K,j){
var q=require('@stdlib/number-float64-base-to-float32/dist');function E(e,r,i,a,v,n,s,c,p){var x=e[i],g=e[i+r],l=a[n],w=a[n+v];return s[p]=q(x*l)-q(g*w),s[p+c]=q(x*w)+q(g*l),s}j.exports=E
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=b(),F=h(),G=k();o(m,"assign",F);o(m,"strided",G);module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
