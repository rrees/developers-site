"format cjs";exports.first=function(e){return e[0]},exports.last=function(e){return e[e.length-1]},exports.capitalize=function(e){return e=String(e),e[0].toUpperCase()+e.substr(1,e.length)},exports.downcase=function(e){return String(e).toLowerCase()},exports.upcase=function(e){return String(e).toUpperCase()},exports.sort=function(e){return Object.create(e).sort()},exports.sort_by=function(e,r){return Object.create(e).sort(function(e,n){return e=e[r],n=n[r],e>n?1:n>e?-1:0})},exports.size=exports.length=function(e){return e.length},exports.plus=function(e,r){return Number(e)+Number(r)},exports.minus=function(e,r){return Number(e)-Number(r)},exports.times=function(e,r){return Number(e)*Number(r)},exports.divided_by=function(e,r){return Number(e)/Number(r)},exports.join=function(e,r){return e.join(r||", ")},exports.truncate=function(e,r,n){return e=String(e),e.length>r&&(e=e.slice(0,r),n&&(e+=n)),e},exports.truncate_words=function(e,r){var e=String(e),n=e.split(/ +/);return n.slice(0,r).join(" ")},exports.replace=function(e,r,n){return String(e).replace(r,n||"")},exports.prepend=function(e,r){return Array.isArray(e)?[r].concat(e):r+e},exports.append=function(e,r){return Array.isArray(e)?e.concat(r):e+r},exports.map=function(e,r){return e.map(function(e){return e[r]})},exports.reverse=function(e){return Array.isArray(e)?e.reverse():String(e).split("").reverse().join("")},exports.get=function(e,r){return e[r]},exports.json=function(e){return JSON.stringify(e)};
//# sourceMappingURL=filters.js.map