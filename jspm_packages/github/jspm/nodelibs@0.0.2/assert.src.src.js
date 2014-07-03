"format cjs";
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
function replacer(e,t){return util.isUndefined(t)?""+t:!util.isNumber(t)||!isNaN(t)&&isFinite(t)?util.isFunction(t)||util.isRegExp(t)?t.toString():t:t.toString()}function truncate(e,t){return util.isString(e)?e.length<t?e:e.slice(0,t):e}function getMessage(e){return truncate(JSON.stringify(e.actual,replacer),128)+" "+e.operator+" "+truncate(JSON.stringify(e.expected,replacer),128)}function fail(e,t,r,n,i){throw new assert.AssertionError({message:r,actual:e,expected:t,operator:n,stackStartFunction:i})}function ok(e,t){e||fail(e,!0,t,"==",assert.ok)}function _deepEqual(e,t){if(e===t)return!0;if(util.isBuffer(e)&&util.isBuffer(t)){if(e.length!=t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return util.isDate(e)&&util.isDate(t)?e.getTime()===t.getTime():util.isRegExp(e)&&util.isRegExp(t)?e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase:util.isObject(e)||util.isObject(t)?objEquiv(e,t):e==t}function isArguments(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function objEquiv(e,t){if(util.isNullOrUndefined(e)||util.isNullOrUndefined(t))return!1;if(e.prototype!==t.prototype)return!1;if(isArguments(e))return isArguments(t)?(e=pSlice.call(e),t=pSlice.call(t),_deepEqual(e,t)):!1;try{var r,n,i=objectKeys(e),s=objectKeys(t)}catch(o){return!1}if(i.length!=s.length)return!1;for(i.sort(),s.sort(),n=i.length-1;n>=0;n--)if(i[n]!=s[n])return!1;for(n=i.length-1;n>=0;n--)if(r=i[n],!_deepEqual(e[r],t[r]))return!1;return!0}function expectedException(e,t){return e&&t?"[object RegExp]"==Object.prototype.toString.call(t)?t.test(e):e instanceof t?!0:t.call({},e)===!0?!0:!1:!1}function _throws(e,t,r,n){var i;util.isString(r)&&(n=r,r=null);try{t()}catch(s){i=s}if(n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),e&&!i&&fail(i,r,"Missing expected exception"+n),!e&&expectedException(i,r)&&fail(i,r,"Got unwanted exception"+n),e&&i&&r&&!expectedException(i,r)||!e&&i)throw i}var util=require("./util"),pSlice=Array.prototype.slice,hasOwn=Object.prototype.hasOwnProperty,assert=module.exports=ok;assert.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=getMessage(this),this.generatedMessage=!0);var t=e.stackStartFunction||fail;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var r=new Error;if(r.stack){var n=r.stack,i=t.name,s=n.indexOf("\n"+i);if(s>=0){var o=n.indexOf("\n",s+1);n=n.substring(o+1)}this.stack=n}}},util.inherits(assert.AssertionError,Error),assert.fail=fail,assert.ok=ok,assert.equal=function(e,t,r){e!=t&&fail(e,t,r,"==",assert.equal)},assert.notEqual=function(e,t,r){e==t&&fail(e,t,r,"!=",assert.notEqual)},assert.deepEqual=function(e,t,r){_deepEqual(e,t)||fail(e,t,r,"deepEqual",assert.deepEqual)},assert.notDeepEqual=function(e,t,r){_deepEqual(e,t)&&fail(e,t,r,"notDeepEqual",assert.notDeepEqual)},assert.strictEqual=function(e,t,r){e!==t&&fail(e,t,r,"===",assert.strictEqual)},assert.notStrictEqual=function(e,t,r){e===t&&fail(e,t,r,"!==",assert.notStrictEqual)},assert.throws=function(){_throws.apply(this,[!0].concat(pSlice.call(arguments)))},assert.doesNotThrow=function(){_throws.apply(this,[!1].concat(pSlice.call(arguments)))},assert.ifError=function(e){if(e)throw e};var objectKeys=Object.keys||function(e){var t=[];for(var r in e)hasOwn.call(e,r)&&t.push(r);return t};