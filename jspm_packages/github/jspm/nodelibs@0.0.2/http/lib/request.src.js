"format cjs";var Stream=require("../../stream"),Response=require("./response"),Base64=require("npm:Base64@^0.2.0"),inherits=require("npm:inherits@^2.0.1"),Request=module.exports=function(e,t){var r=this;r.writable=!0,r.xhr=e,r.body=[],r.uri=(t.scheme||"http")+"://"+t.host+(t.port?":"+t.port:"")+(t.path||"/");try{e.withCredentials=!0}catch(n){}if(e.open(t.method||"GET",r.uri,!0),t.headers)for(var i=objectKeys(t.headers),s=0;s<i.length;s++){var o=i[s];if(r.isSafeRequestHeader(o)){var a=t.headers[o];if(isArray(a))for(var u=0;u<a.length;u++)e.setRequestHeader(o,a[u]);else e.setRequestHeader(o,a)}}t.auth&&this.setHeader("Authorization","Basic "+Base64.btoa(t.auth));var f=new Response;f.on("close",function(){r.emit("close")}),f.on("ready",function(){r.emit("response",f)}),e.onreadystatechange=function(){f.handle(e)}};inherits(Request,Stream),Request.prototype.setHeader=function(e,t){if(isArray(t))for(var r=0;r<t.length;r++)this.xhr.setRequestHeader(e,t[r]);else this.xhr.setRequestHeader(e,t)},Request.prototype.write=function(e){this.body.push(e)},Request.prototype.destroy=function(){this.xhr.abort(),this.emit("close")},Request.prototype.end=function(e){if(void 0!==e&&this.body.push(e),0===this.body.length)this.xhr.send("");else if("string"==typeof this.body[0])this.xhr.send(this.body.join(""));else if(isArray(this.body[0])){for(var t=[],r=0;r<this.body.length;r++)t.push.apply(t,this.body[r]);this.xhr.send(t)}else if(/Array/.test(Object.prototype.toString.call(this.body[0]))){for(var n=0,r=0;r<this.body.length;r++)n+=this.body[r].length;for(var t=new this.body[0].constructor(n),i=0,r=0;r<this.body.length;r++)for(var s=this.body[r],o=0;o<s.length;o++)t[i++]=s[o];this.xhr.send(t)}else{for(var t="",r=0;r<this.body.length;r++)t+=this.body[r].toString();this.xhr.send(t)}},Request.unsafeHeaders=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"],Request.prototype.isSafeRequestHeader=function(e){return e?-1===indexOf(Request.unsafeHeaders,e.toLowerCase()):!1};var objectKeys=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t},isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0;r<e.length;r++)if(e[r]===t)return r;return-1};
//# sourceMappingURL=request.src.js.map