"format cjs";
// Copyright Joyent, Inc. and other Node contributors.
function inspect(e,t){var r={seen:[],stylize:stylizeNoColor};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),isBoolean(t)?r.showHidden=t:t&&exports._extend(r,t),isUndefined(r.showHidden)&&(r.showHidden=!1),isUndefined(r.depth)&&(r.depth=2),isUndefined(r.colors)&&(r.colors=!1),isUndefined(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=stylizeWithColor),formatValue(r,e,r.depth)}function stylizeWithColor(e,t){var r=inspect.styles[t];return r?"["+inspect.colors[r][0]+"m"+e+"["+inspect.colors[r][1]+"m":e}function stylizeNoColor(e){return e}function arrayToHash(e){var t={};return e.forEach(function(e){t[e]=!0}),t}function formatValue(e,t,r){if(e.customInspect&&t&&isFunction(t.inspect)&&t.inspect!==exports.inspect&&(!t.constructor||t.constructor.prototype!==t)){var n=t.inspect(r,e);return isString(n)||(n=formatValue(e,n,r)),n}var i=formatPrimitive(e,t);if(i)return i;var o=Object.keys(t),s=arrayToHash(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(t)),isError(t)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return formatError(t);if(0===o.length){if(isFunction(t)){var a=t.name?": "+t.name:"";return e.stylize("[Function"+a+"]","special")}if(isRegExp(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(isDate(t))return e.stylize(Date.prototype.toString.call(t),"date");if(isError(t))return formatError(t)}var u="",f=!1,h=["{","}"];if(isArray(t)&&(f=!0,h=["[","]"]),isFunction(t)){var l=t.name?": "+t.name:"";u=" [Function"+l+"]"}if(isRegExp(t)&&(u=" "+RegExp.prototype.toString.call(t)),isDate(t)&&(u=" "+Date.prototype.toUTCString.call(t)),isError(t)&&(u=" "+formatError(t)),0===o.length&&(!f||0==t.length))return h[0]+u+h[1];if(0>r)return isRegExp(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var c;return c=f?formatArray(e,t,r,s,o):o.map(function(n){return formatProperty(e,t,r,s,n,f)}),e.seen.pop(),reduceToSingleString(c,u,h)}function formatPrimitive(e,t){if(isUndefined(t))return e.stylize("undefined","undefined");if(isString(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return isNumber(t)?e.stylize(""+t,"number"):isBoolean(t)?e.stylize(""+t,"boolean"):isNull(t)?e.stylize("null","null"):void 0}function formatError(e){return"["+Error.prototype.toString.call(e)+"]"}function formatArray(e,t,r,n,i){for(var o=[],s=0,a=t.length;a>s;++s)o.push(hasOwnProperty(t,String(s))?formatProperty(e,t,r,n,String(s),!0):"");return i.forEach(function(i){i.match(/^\d+$/)||o.push(formatProperty(e,t,r,n,i,!0))}),o}function formatProperty(e,t,r,n,i,o){var s,a,u;if(u=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},u.get?a=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(a=e.stylize("[Setter]","special")),hasOwnProperty(n,i)||(s="["+i+"]"),a||(e.seen.indexOf(u.value)<0?(a=isNull(r)?formatValue(e,u.value,null):formatValue(e,u.value,r-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n"))):a=e.stylize("[Circular]","special")),isUndefined(s)){if(o&&i.match(/^\d+$/))return a;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function reduceToSingleString(e,t,r){var n=0,i=e.reduce(function(e,t){return n++,t.indexOf("\n")>=0&&n++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function isArray(e){return Array.isArray(e)}function isBoolean(e){return"boolean"==typeof e}function isNull(e){return null===e}function isNullOrUndefined(e){return null==e}function isNumber(e){return"number"==typeof e}function isString(e){return"string"==typeof e}function isSymbol(e){return"symbol"==typeof e}function isUndefined(e){return void 0===e}function isRegExp(e){return isObject(e)&&"[object RegExp]"===objectToString(e)}function isObject(e){return"object"==typeof e&&null!==e}function isDate(e){return isObject(e)&&"[object Date]"===objectToString(e)}function isError(e){return isObject(e)&&("[object Error]"===objectToString(e)||e instanceof Error)}function isFunction(e){return"function"==typeof e}function isPrimitive(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function objectToString(e){return Object.prototype.toString.call(e)}function pad(e){return 10>e?"0"+e.toString(10):e.toString(10)}function timestamp(){var e=new Date,t=[pad(e.getHours()),pad(e.getMinutes()),pad(e.getSeconds())].join(":");return[e.getDate(),months[e.getMonth()],t].join(" ")}function hasOwnProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var formatRegExp=/%[sdj%]/g;exports.format=function(e){if(!isString(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(inspect(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,i=n.length,o=String(e).replace(formatRegExp,function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return e}}),s=n[r];i>r;s=n[++r])o+=isNull(s)||!isObject(s)?" "+s:" "+inspect(s);return o},exports.deprecate=function(e,t){function r(){if(!n){if(process.throwDeprecation)throw new Error(t);process.traceDeprecation?console.trace(t):console.error(t),n=!0}return e.apply(this,arguments)}if(isUndefined(global.process))return function(){return exports.deprecate(e,t).apply(this,arguments)};if(process.noDeprecation===!0)return e;var n=!1;return r};var debugs={},debugEnviron;exports.debuglog=function(e){if(isUndefined(debugEnviron)&&(debugEnviron=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!debugs[e])if(new RegExp("\\b"+e+"\\b","i").test(debugEnviron)){var t=process.pid;debugs[e]=function(){var r=exports.format.apply(exports,arguments);console.error("%s %d: %s",e,t,r)}}else debugs[e]=function(){};return debugs[e]},exports.inspect=inspect,inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},inspect.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},exports.isArray=isArray,exports.isBoolean=isBoolean,exports.isNull=isNull,exports.isNullOrUndefined=isNullOrUndefined,exports.isNumber=isNumber,exports.isString=isString,exports.isSymbol=isSymbol,exports.isUndefined=isUndefined,exports.isRegExp=isRegExp,exports.isObject=isObject,exports.isDate=isDate,exports.isError=isError,exports.isFunction=isFunction,exports.isPrimitive=isPrimitive,exports.isBuffer=require("./support/isBuffer");var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];exports.log=function(){console.log("%s - %s",timestamp(),exports.format.apply(exports,arguments))},exports.inherits=require("npm:inherits@^2.0.1"),exports._extend=function(e,t){if(!t||!isObject(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};