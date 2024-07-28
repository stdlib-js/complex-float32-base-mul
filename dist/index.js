"use strict";var f=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var l=f(function(w,s){
var e=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/complex-float32-ctor/dist'),m=require('@stdlib/complex-float32-real/dist'),o=require('@stdlib/complex-float32-imag/dist');function p(a,r){var i=m(a),v=m(r),t=o(a),u=o(r),n=e(i*v)-e(t*u),q=e(i*u)+e(t*v);return new c(e(n),e(q))}s.exports=p
});var x=l();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
