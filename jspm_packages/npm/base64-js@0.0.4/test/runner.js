"format cjs";!function(){"use strict";var e,t=require("../lib/b64"),r=["a","aa","aaa","hi","hi!","hi!!","sup","sup?","sup?!"];e=r.some(function(e){var r,n,i;return r=t.fromByteArray(Array.prototype.map.call(e,function(e){return e.charCodeAt(0)})),n=t.toByteArray(r),i=n.map(function(e){return String.fromCharCode(e)}).join(""),e!==i?(console.log("Fail:",e),console.log("Base64:",r),!0):void 0}),console.log(e?"Test failed":"All tests passed!")}();
//# sourceMappingURL=runner.js.map