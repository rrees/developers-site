"format cjs";function normalizeArray(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function filter(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,splitPath=function(e){return splitPathRe.exec(e).slice(1)};exports.resolve=function(){for(var e="",t=!1,r=arguments.length-1;r>=-1&&!t;r--){var n=r>=0?arguments[r]:process.cwd();if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,t="/"===n.charAt(0))}return e=normalizeArray(filter(e.split("/"),function(e){return!!e}),!t).join("/"),(t?"/":"")+e||"."},exports.normalize=function(e){var t=exports.isAbsolute(e),r="/"===substr(e,-1);return e=normalizeArray(filter(e.split("/"),function(e){return!!e}),!t).join("/"),e||t||(e="."),e&&r&&(e+="/"),(t?"/":"")+e},exports.isAbsolute=function(e){return"/"===e.charAt(0)},exports.join=function(){var e=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(e,function(e){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},exports.relative=function(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=exports.resolve(e).substr(1),t=exports.resolve(t).substr(1);for(var n=r(e.split("/")),i=r(t.split("/")),o=Math.min(n.length,i.length),s=o,a=0;o>a;a++)if(n[a]!==i[a]){s=a;break}for(var u=[],a=s;a<n.length;a++)u.push("..");return u=u.concat(i.slice(s)),u.join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(e){var t=splitPath(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},exports.basename=function(e,t){var r=splitPath(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},exports.extname=function(e){return splitPath(e)[3]};var substr="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return 0>t&&(t=e.length+t),e.substr(t,r)};
//# sourceMappingURL=path.src.js.map