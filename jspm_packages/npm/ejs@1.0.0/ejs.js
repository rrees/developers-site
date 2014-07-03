"format cjs";ejs=function(){function require(e){if("fs"==e)return{};if("path"==e)return{};var n=require.resolve(e),r=require.modules[n];if(!r)throw new Error('failed to require "'+e+'"');return r.exports||(r.exports={},r.call(r.exports,r,r.exports,require.relative(n))),r.exports}return require.modules={},require.resolve=function(e){var n=e,r=e+".js",t=e+"/index.js";return require.modules[r]&&r||require.modules[t]&&t||n},require.register=function(e,n){require.modules[e]=n},require.relative=function(e){return function(n){if("."!=n.substr(0,1))return require(n);var r=e.split("/"),t=n.split("/");r.pop();for(var i=0;i<t.length;i++){var o=t[i];".."==o?r.pop():"."!=o&&r.push(o)}return require(r.join("/"))}},require.register("ejs.js",function(e,n,require){function r(e){return e.substr(1).split("|").reduce(function(e,n){var r=n.split(":"),t=r.shift(),i=r.join(":")||"";return i&&(i=", "+i),"filters."+t+"("+e+i+")"})}function t(e,n,r,t){var i=n.split("\n"),o=Math.max(t-3,0),u=Math.min(i.length,t+3),s=i.slice(o,u).map(function(e,n){var r=n+o+1;return(r==t?" >> ":"    ")+r+"| "+e}).join("\n");throw e.path=r,e.message=(r||"ejs")+":"+t+"\n"+s+"\n\n"+e.message,e}function i(e,n){var r=c(s(n),e),t=a(e);return t||(r+=".ejs"),r}var o=require("./utils"),u=require("github:jspm/nodelibs@0.0.2/path"),s=u.dirname,a=u.extname,c=u.join,l=require("github:jspm/nodelibs@0.0.2/fs"),f=l.readFileSync,p=n.filters=require("./filters"),g={};n.clearCache=function(){g={}};var m=(n.parse=function(e,t){var t=t||{},o=t.open||n.open||"<%",u=t.close||n.close||"%>",s=t.filename,a=t.compileDebug!==!1,c="";c+="var buf = [];",!1!==t._with&&(c+="\nwith (locals || {}) { (function(){ "),c+="\n buf.push('";for(var l=1,p=!1,g=0,m=e.length;m>g;++g){var h=e[g];if(e.slice(g,o.length+g)==o){g+=o.length;var d,v,b=(a?"__stack.lineno=":"")+l;switch(e[g]){case"=":d="', escape(("+b+", ",v=")), '",++g;break;case"-":d="', ("+b+", ",v="), '",++g;break;default:d="');"+b+";",v="; buf.push('"}var j=e.indexOf(u,g);if(0>j)throw new Error('Could not find matching close tag "'+u+'".');var _=e.substring(g,j),w=g,x=null,y=0;if("-"==_[_.length-1]&&(_=_.substring(0,_.length-2),p=!0),0==_.trim().indexOf("include")){var S=_.trim().slice(7).trim();if(!s)throw new Error("filename option is required for includes");var N=i(S,s);x=f(N,"utf8"),x=n.parse(x,{filename:N,_with:!1,open:o,close:u,compileDebug:a}),c+="' + (function(){"+x+"})() + '",_=""}for(;~(y=_.indexOf("\n",y));)y++,l++;":"==_.substr(0,1)&&(_=r(_)),_&&(_.lastIndexOf("//")>_.lastIndexOf("\n")&&(_+="\n"),c+=d,c+=_,c+=v),g+=j-w+u.length-1}else"\\"==h?c+="\\\\":"'"==h?c+="\\'":"\r"==h||("\n"==h?p?p=!1:(c+="\\n",l++):c+=h)}return c+=!1!==t._with?"'); })();\n} \nreturn buf.join('');":"');\nreturn buf.join('');"},n.compile=function(e,r){r=r||{};var i=r.escape||o.escape,u=JSON.stringify(e),s=r.compileDebug!==!1,a=r.client,c=r.filename?JSON.stringify(r.filename):"undefined";e=s?["var __stack = { lineno: 1, input: "+u+", filename: "+c+" };",t.toString(),"try {",n.parse(e,r),"} catch (err) {","  rethrow(err, __stack.input, __stack.filename, __stack.lineno);","}"].join("\n"):n.parse(e,r),r.debug&&console.log(e),a&&(e="escape = escape || "+i.toString()+";\n"+e);try{var l=new Function("locals, filters, escape, rethrow",e)}catch(f){throw"SyntaxError"==f.name&&(f.message+=r.filename?" in "+c:" while compiling ejs"),f}return a?l:function(e){return l.call(this,e,p,i,t)}});n.render=function(e,n){var r,n=n||{};if(n.cache){if(!n.filename)throw new Error('"cache" option requires "filename".');r=g[n.filename]||(g[n.filename]=m(e,n))}else r=m(e,n);return n.__proto__=n.locals,r.call(n.scope,n)},n.renderFile=function(e,r,t){var i=e+":string";"function"==typeof r&&(t=r,r={}),r.filename=e;var o;try{o=r.cache?g[i]||(g[i]=f(e,"utf8")):f(e,"utf8")}catch(u){return void t(u)}t(null,n.render(o,r))},n.__express=n.renderFile,require.extensions?require.extensions[".ejs"]=function(e,n){n=n||e.filename;var r={filename:n,client:!0},t=l.readFileSync(n).toString(),i=m(t,r);e._compile("module.exports = "+i.toString()+";",n)}:require.registerExtension&&require.registerExtension(".ejs",function(e){return m(e,{})})}),require.register("filters.js",function(e,n){n.first=function(e){return e[0]},n.last=function(e){return e[e.length-1]},n.capitalize=function(e){return e=String(e),e[0].toUpperCase()+e.substr(1,e.length)},n.downcase=function(e){return String(e).toLowerCase()},n.upcase=function(e){return String(e).toUpperCase()},n.sort=function(e){return Object.create(e).sort()},n.sort_by=function(e,n){return Object.create(e).sort(function(e,r){return e=e[n],r=r[n],e>r?1:r>e?-1:0})},n.size=n.length=function(e){return e.length},n.plus=function(e,n){return Number(e)+Number(n)},n.minus=function(e,n){return Number(e)-Number(n)},n.times=function(e,n){return Number(e)*Number(n)},n.divided_by=function(e,n){return Number(e)/Number(n)},n.join=function(e,n){return e.join(n||", ")},n.truncate=function(e,n,r){return e=String(e),e.length>n&&(e=e.slice(0,n),r&&(e+=r)),e},n.truncate_words=function(e,n){var e=String(e),r=e.split(/ +/);return r.slice(0,n).join(" ")},n.replace=function(e,n,r){return String(e).replace(n,r||"")},n.prepend=function(e,n){return Array.isArray(e)?[n].concat(e):n+e},n.append=function(e,n){return Array.isArray(e)?e.concat(n):e+n},n.map=function(e,n){return e.map(function(e){return e[n]})},n.reverse=function(e){return Array.isArray(e)?e.reverse():String(e).split("").reverse().join("")},n.get=function(e,n){return e[n]},n.json=function(e){return JSON.stringify(e)}}),require.register("utils.js",function(e,n){n.escape=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")}}),require("ejs")}();
//# sourceMappingURL=ejs.js.map