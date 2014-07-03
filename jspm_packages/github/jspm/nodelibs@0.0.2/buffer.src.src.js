"format cjs";
function Buffer(e,t,r){if(!(this instanceof Buffer))return new Buffer(e,t,r);var n=typeof e;if("base64"===t&&"string"===n)for(e=stringtrim(e);e.length%4!==0;)e+="=";var i;if("number"===n)i=coerce(e);else if("string"===n)i=Buffer.byteLength(e,t);else{if("object"!==n)throw new Error("First argument needs to be a number, array or string.");i=coerce(e.length)}var o;Buffer._useTypedArrays?o=augment(new Uint8Array(i)):(o=this,o.length=i,o._isBuffer=!0);var s;if(Buffer._useTypedArrays&&"function"==typeof Uint8Array&&e instanceof Uint8Array)o._set(e);else if(isArrayish(e))for(s=0;i>s;s++)o[s]=Buffer.isBuffer(e)?e.readUInt8(s):e[s];else if("string"===n)o.write(e,0,t);else if("number"===n&&!Buffer._useTypedArrays&&!r)for(s=0;i>s;s++)o[s]=0;return o}function _hexWrite(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var o=t.length;assert(o%2===0,"Invalid hex string"),n>o/2&&(n=o/2);for(var s=0;n>s;s++){var a=parseInt(t.substr(2*s,2),16);assert(!isNaN(a),"Invalid hex string"),e[r+s]=a}return Buffer._charsWritten=2*s,s}function _utf8Write(e,t,r,n){var i=Buffer._charsWritten=blitBuffer(utf8ToBytes(t),e,r,n);return i}function _asciiWrite(e,t,r,n){var i=Buffer._charsWritten=blitBuffer(asciiToBytes(t),e,r,n);return i}function _binaryWrite(e,t,r,n){return _asciiWrite(e,t,r,n)}function _base64Write(e,t,r,n){var i=Buffer._charsWritten=blitBuffer(base64ToBytes(t),e,r,n);return i}function _base64Slice(e,t,r){return base64.fromByteArray(0===t&&r===e.length?e:e.slice(t,r))}function _utf8Slice(e,t,r){var n="",i="";r=Math.min(e.length,r);for(var o=t;r>o;o++)e[o]<=127?(n+=decodeUtf8Char(i)+String.fromCharCode(e[o]),i=""):i+="%"+e[o].toString(16);return n+decodeUtf8Char(i)}function _asciiSlice(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;r>i;i++)n+=String.fromCharCode(e[i]);return n}function _binarySlice(e,t,r){return _asciiSlice(e,t,r)}function _hexSlice(e,t,r){var n=e.length;(!t||0>t)&&(t=0),(!r||0>r||r>n)&&(r=n);for(var i="",o=t;r>o;o++)i+=toHex(e[o]);return i}function _readUInt16(e,t,r,n){n||(assert("boolean"==typeof r,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o;return r?(o=e[t],i>t+1&&(o|=e[t+1]<<8)):(o=e[t]<<8,i>t+1&&(o|=e[t+1])),o}}function _readUInt32(e,t,r,n){n||(assert("boolean"==typeof r,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o;return r?(i>t+2&&(o=e[t+2]<<16),i>t+1&&(o|=e[t+1]<<8),o|=e[t],i>t+3&&(o+=e[t+3]<<24>>>0)):(i>t+1&&(o=e[t+1]<<16),i>t+2&&(o|=e[t+2]<<8),i>t+3&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}}function _readInt16(e,t,r,n){n||(assert("boolean"==typeof r,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o=_readUInt16(e,t,r,!0),s=32768&o;return s?-1*(65535-o+1):o}}function _readInt32(e,t,r,n){n||(assert("boolean"==typeof r,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o=_readUInt32(e,t,r,!0),s=2147483648&o;return s?-1*(4294967295-o+1):o}}function _readFloat(e,t,r,n){return n||(assert("boolean"==typeof r,"missing or invalid endian"),assert(t+3<e.length,"Trying to read beyond buffer length")),ieee754.read(e,t,r,23,4)}function _readDouble(e,t,r,n){return n||(assert("boolean"==typeof r,"missing or invalid endian"),assert(t+7<e.length,"Trying to read beyond buffer length")),ieee754.read(e,t,r,52,8)}function _writeUInt16(e,t,r,n,i){i||(assert(void 0!==t&&null!==t,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+1<e.length,"trying to write beyond buffer length"),verifuint(t,65535));var o=e.length;if(!(r>=o))for(var s=0,a=Math.min(o-r,2);a>s;s++)e[r+s]=(t&255<<8*(n?s:1-s))>>>8*(n?s:1-s)}function _writeUInt32(e,t,r,n,i){i||(assert(void 0!==t&&null!==t,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+3<e.length,"trying to write beyond buffer length"),verifuint(t,4294967295));var o=e.length;if(!(r>=o))for(var s=0,a=Math.min(o-r,4);a>s;s++)e[r+s]=t>>>8*(n?s:3-s)&255}function _writeInt16(e,t,r,n,i){i||(assert(void 0!==t&&null!==t,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+1<e.length,"Trying to write beyond buffer length"),verifsint(t,32767,-32768));var o=e.length;r>=o||(t>=0?_writeUInt16(e,t,r,n,i):_writeUInt16(e,65535+t+1,r,n,i))}function _writeInt32(e,t,r,n,i){i||(assert(void 0!==t&&null!==t,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+3<e.length,"Trying to write beyond buffer length"),verifsint(t,2147483647,-2147483648));var o=e.length;r>=o||(t>=0?_writeUInt32(e,t,r,n,i):_writeUInt32(e,4294967295+t+1,r,n,i))}function _writeFloat(e,t,r,n,i){i||(assert(void 0!==t&&null!==t,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+3<e.length,"Trying to write beyond buffer length"),verifIEEE754(t,3.4028234663852886e38,-3.4028234663852886e38));var o=e.length;r>=o||ieee754.write(e,t,r,n,23,4)}function _writeDouble(e,t,r,n,i){i||(assert(void 0!==t&&null!==t,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+7<e.length,"Trying to write beyond buffer length"),verifIEEE754(t,1.7976931348623157e308,-1.7976931348623157e308));var o=e.length;r>=o||ieee754.write(e,t,r,n,52,8)}function stringtrim(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function augment(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=BP.get,e.set=BP.set,e.write=BP.write,e.toString=BP.toString,e.toLocaleString=BP.toString,e.toJSON=BP.toJSON,e.copy=BP.copy,e.slice=BP.slice,e.readUInt8=BP.readUInt8,e.readUInt16LE=BP.readUInt16LE,e.readUInt16BE=BP.readUInt16BE,e.readUInt32LE=BP.readUInt32LE,e.readUInt32BE=BP.readUInt32BE,e.readInt8=BP.readInt8,e.readInt16LE=BP.readInt16LE,e.readInt16BE=BP.readInt16BE,e.readInt32LE=BP.readInt32LE,e.readInt32BE=BP.readInt32BE,e.readFloatLE=BP.readFloatLE,e.readFloatBE=BP.readFloatBE,e.readDoubleLE=BP.readDoubleLE,e.readDoubleBE=BP.readDoubleBE,e.writeUInt8=BP.writeUInt8,e.writeUInt16LE=BP.writeUInt16LE,e.writeUInt16BE=BP.writeUInt16BE,e.writeUInt32LE=BP.writeUInt32LE,e.writeUInt32BE=BP.writeUInt32BE,e.writeInt8=BP.writeInt8,e.writeInt16LE=BP.writeInt16LE,e.writeInt16BE=BP.writeInt16BE,e.writeInt32LE=BP.writeInt32LE,e.writeInt32BE=BP.writeInt32BE,e.writeFloatLE=BP.writeFloatLE,e.writeFloatBE=BP.writeFloatBE,e.writeDoubleLE=BP.writeDoubleLE,e.writeDoubleBE=BP.writeDoubleBE,e.fill=BP.fill,e.inspect=BP.inspect,e.toArrayBuffer=BP.toArrayBuffer,e}function clamp(e,t,r){return"number"!=typeof e?r:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function coerce(e){return e=~~Math.ceil(+e),0>e?0:e}function isArray(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function isArrayish(e){return isArray(e)||Buffer.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function toHex(e){return 16>e?"0"+e.toString(16):e.toString(16)}function utf8ToBytes(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(127>=n)t.push(e.charCodeAt(r));else{var i=r;n>=55296&&57343>=n&&r++;for(var o=encodeURIComponent(e.slice(i,r+1)).substr(1).split("%"),s=0;s<o.length;s++)t.push(parseInt(o[s],16))}}return t}function asciiToBytes(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}function base64ToBytes(e){return base64.toByteArray(e)}function blitBuffer(e,t,r,n){for(var i=0;n>i&&!(i+r>=t.length||i>=e.length);i++)t[i+r]=e[i];return i}function decodeUtf8Char(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function verifuint(e,t){assert("number"==typeof e,"cannot write a non-number as a number"),assert(e>=0,"specified a negative value for writing an unsigned value"),assert(t>=e,"value is larger than maximum value for type"),assert(Math.floor(e)===e,"value has a fractional component")}function verifsint(e,t,r){assert("number"==typeof e,"cannot write a non-number as a number"),assert(t>=e,"value larger than maximum allowed value"),assert(e>=r,"value smaller than minimum allowed value"),assert(Math.floor(e)===e,"value has a fractional component")}function verifIEEE754(e,t,r){assert("number"==typeof e,"cannot write a non-number as a number"),assert(t>=e,"value larger than maximum allowed value"),assert(e>=r,"value smaller than minimum allowed value")}function assert(e,t){if(!e)throw new Error(t||"Failed assertion")}var base64=require("npm:base64-js@^0.0.4"),ieee754=require("npm:ieee754@^1.1.1");exports.Buffer=Buffer,exports.SlowBuffer=Buffer,exports.INSPECT_MAX_BYTES=50,Buffer.poolSize=8192,Buffer._useTypedArrays=function(){if("undefined"==typeof Uint8Array||"undefined"==typeof ArrayBuffer)return!1;try{var e=new Uint8Array(0);return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray}catch(t){return!1}}(),Buffer.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},Buffer.byteLength=function(e,t){var r;switch(e+="",t||"utf8"){case"hex":r=e.length/2;break;case"utf8":case"utf-8":r=utf8ToBytes(e).length;break;case"ascii":case"binary":case"raw":r=e.length;break;case"base64":r=base64ToBytes(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*e.length;break;default:throw new Error("Unknown encoding")}return r},Buffer.concat=function(e,t){if(assert(isArray(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new Buffer(0);if(1===e.length)return e[0];var r;if("number"!=typeof t)for(t=0,r=0;r<e.length;r++)t+=e[r].length;var n=new Buffer(t),i=0;for(r=0;r<e.length;r++){var o=e[r];o.copy(n,i),i+=o.length}return n},Buffer.prototype.write=function(e,t,r,n){if(isFinite(t))isFinite(r)||(n=r,r=void 0);else{var i=n;n=t,t=r,r=i}t=Number(t)||0;var o=this.length-t;switch(r?(r=Number(r),r>o&&(r=o)):r=o,n=String(n||"utf8").toLowerCase()){case"hex":return _hexWrite(this,e,t,r);case"utf8":case"utf-8":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _utf8Write(this,e,t,r);case"ascii":return _asciiWrite(this,e,t,r);case"binary":return _binaryWrite(this,e,t,r);case"base64":return _base64Write(this,e,t,r);default:throw new Error("Unknown encoding")}},Buffer.prototype.toString=function(e,t,r){var n=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,r=void 0!==r?Number(r):r=n.length,r===t)return"";switch(e){case"hex":return _hexSlice(n,t,r);case"utf8":case"utf-8":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _utf8Slice(n,t,r);case"ascii":return _asciiSlice(n,t,r);case"binary":return _binarySlice(n,t,r);case"base64":return _base64Slice(n,t,r);default:throw new Error("Unknown encoding")}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.copy=function(e,t,r,n){var i=this;if(r||(r=0),n||0===n||(n=this.length),t||(t=0),n!==r&&0!==e.length&&0!==i.length){assert(n>=r,"sourceEnd < sourceStart"),assert(t>=0&&t<e.length,"targetStart out of bounds"),assert(r>=0&&r<i.length,"sourceStart out of bounds"),assert(n>=0&&n<=i.length,"sourceEnd out of bounds"),n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);for(var o=0;n-r>o;o++)e[o+t]=this[o+r]}},Buffer.prototype.slice=function(e,t){var r=this.length;if(e=clamp(e,r,0),t=clamp(t,r,r),Buffer._useTypedArrays)return augment(this.subarray(e,t));for(var n=t-e,i=new Buffer(n,void 0,!0),o=0;n>o;o++)i[o]=this[o+e];return i},Buffer.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},Buffer.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},Buffer.prototype.readUInt8=function(e,t){return t||(assert(void 0!==e&&null!==e,"missing offset"),assert(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},Buffer.prototype.readUInt16LE=function(e,t){return _readUInt16(this,e,!0,t)},Buffer.prototype.readUInt16BE=function(e,t){return _readUInt16(this,e,!1,t)},Buffer.prototype.readUInt32LE=function(e,t){return _readUInt32(this,e,!0,t)},Buffer.prototype.readUInt32BE=function(e,t){return _readUInt32(this,e,!1,t)},Buffer.prototype.readInt8=function(e,t){if(t||(assert(void 0!==e&&null!==e,"missing offset"),assert(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var r=128&this[e];return r?-1*(255-this[e]+1):this[e]}},Buffer.prototype.readInt16LE=function(e,t){return _readInt16(this,e,!0,t)},Buffer.prototype.readInt16BE=function(e,t){return _readInt16(this,e,!1,t)},Buffer.prototype.readInt32LE=function(e,t){return _readInt32(this,e,!0,t)},Buffer.prototype.readInt32BE=function(e,t){return _readInt32(this,e,!1,t)},Buffer.prototype.readFloatLE=function(e,t){return _readFloat(this,e,!0,t)},Buffer.prototype.readFloatBE=function(e,t){return _readFloat(this,e,!1,t)},Buffer.prototype.readDoubleLE=function(e,t){return _readDouble(this,e,!0,t)},Buffer.prototype.readDoubleBE=function(e,t){return _readDouble(this,e,!1,t)},Buffer.prototype.writeUInt8=function(e,t,r){r||(assert(void 0!==e&&null!==e,"missing value"),assert(void 0!==t&&null!==t,"missing offset"),assert(t<this.length,"trying to write beyond buffer length"),verifuint(e,255)),t>=this.length||(this[t]=e)},Buffer.prototype.writeUInt16LE=function(e,t,r){_writeUInt16(this,e,t,!0,r)},Buffer.prototype.writeUInt16BE=function(e,t,r){_writeUInt16(this,e,t,!1,r)},Buffer.prototype.writeUInt32LE=function(e,t,r){_writeUInt32(this,e,t,!0,r)},Buffer.prototype.writeUInt32BE=function(e,t,r){_writeUInt32(this,e,t,!1,r)},Buffer.prototype.writeInt8=function(e,t,r){r||(assert(void 0!==e&&null!==e,"missing value"),assert(void 0!==t&&null!==t,"missing offset"),assert(t<this.length,"Trying to write beyond buffer length"),verifsint(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,r):this.writeUInt8(255+e+1,t,r))},Buffer.prototype.writeInt16LE=function(e,t,r){_writeInt16(this,e,t,!0,r)},Buffer.prototype.writeInt16BE=function(e,t,r){_writeInt16(this,e,t,!1,r)},Buffer.prototype.writeInt32LE=function(e,t,r){_writeInt32(this,e,t,!0,r)},Buffer.prototype.writeInt32BE=function(e,t,r){_writeInt32(this,e,t,!1,r)},Buffer.prototype.writeFloatLE=function(e,t,r){_writeFloat(this,e,t,!0,r)},Buffer.prototype.writeFloatBE=function(e,t,r){_writeFloat(this,e,t,!1,r)},Buffer.prototype.writeDoubleLE=function(e,t,r){_writeDouble(this,e,t,!0,r)},Buffer.prototype.writeDoubleBE=function(e,t,r){_writeDouble(this,e,t,!1,r)},Buffer.prototype.fill=function(e,t,r){if(e||(e=0),t||(t=0),r||(r=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),assert("number"==typeof e&&!isNaN(e),"value is not a number"),assert(r>=t,"end < start"),r!==t&&0!==this.length){assert(t>=0&&t<this.length,"start out of bounds"),assert(r>=0&&r<=this.length,"end out of bounds");for(var n=t;r>n;n++)this[n]=e}},Buffer.prototype.inspect=function(){for(var e=[],t=this.length,r=0;t>r;r++)if(e[r]=toHex(this[r]),r===exports.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},Buffer.prototype.toArrayBuffer=function(){if("function"==typeof Uint8Array){if(Buffer._useTypedArrays)return new Buffer(this).buffer;for(var e=new Uint8Array(this.length),t=0,r=e.length;r>t;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var BP=Buffer.prototype;