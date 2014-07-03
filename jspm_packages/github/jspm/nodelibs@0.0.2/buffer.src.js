"format cjs";function Buffer(e,r,t){if(!(this instanceof Buffer))return new Buffer(e,r,t);var n=typeof e;if("base64"===r&&"string"===n)for(e=stringtrim(e);e.length%4!==0;)e+="=";var i;if("number"===n)i=coerce(e);else if("string"===n)i=Buffer.byteLength(e,r);else{if("object"!==n)throw new Error("First argument needs to be a number, array or string.");i=coerce(e.length)}var s;Buffer._useTypedArrays?s=augment(new Uint8Array(i)):(s=this,s.length=i,s._isBuffer=!0);var o;if(Buffer._useTypedArrays&&"function"==typeof Uint8Array&&e instanceof Uint8Array)s._set(e);else if(isArrayish(e))for(o=0;i>o;o++)s[o]=Buffer.isBuffer(e)?e.readUInt8(o):e[o];else if("string"===n)s.write(e,0,r);else if("number"===n&&!Buffer._useTypedArrays&&!t)for(o=0;i>o;o++)s[o]=0;return s}function _hexWrite(e,r,t,n){t=Number(t)||0;var i=e.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;var s=r.length;assert(s%2===0,"Invalid hex string"),n>s/2&&(n=s/2);for(var o=0;n>o;o++){var u=parseInt(r.substr(2*o,2),16);assert(!isNaN(u),"Invalid hex string"),e[t+o]=u}return Buffer._charsWritten=2*o,o}function _utf8Write(e,r,t,n){var i=Buffer._charsWritten=blitBuffer(utf8ToBytes(r),e,t,n);return i}function _asciiWrite(e,r,t,n){var i=Buffer._charsWritten=blitBuffer(asciiToBytes(r),e,t,n);return i}function _binaryWrite(e,r,t,n){return _asciiWrite(e,r,t,n)}function _base64Write(e,r,t,n){var i=Buffer._charsWritten=blitBuffer(base64ToBytes(r),e,t,n);return i}function _base64Slice(e,r,t){return base64.fromByteArray(0===r&&t===e.length?e:e.slice(r,t))}function _utf8Slice(e,r,t){var n="",i="";t=Math.min(e.length,t);for(var s=r;t>s;s++)e[s]<=127?(n+=decodeUtf8Char(i)+String.fromCharCode(e[s]),i=""):i+="%"+e[s].toString(16);return n+decodeUtf8Char(i)}function _asciiSlice(e,r,t){var n="";t=Math.min(e.length,t);for(var i=r;t>i;i++)n+=String.fromCharCode(e[i]);return n}function _binarySlice(e,r,t){return _asciiSlice(e,r,t)}function _hexSlice(e,r,t){var n=e.length;(!r||0>r)&&(r=0),(!t||0>t||t>n)&&(t=n);for(var i="",s=r;t>s;s++)i+=toHex(e[s]);return i}function _readUInt16(e,r,t,n){n||(assert("boolean"==typeof t,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(r>=i)){var s;return t?(s=e[r],i>r+1&&(s|=e[r+1]<<8)):(s=e[r]<<8,i>r+1&&(s|=e[r+1])),s}}function _readUInt32(e,r,t,n){n||(assert("boolean"==typeof t,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(r>=i)){var s;return t?(i>r+2&&(s=e[r+2]<<16),i>r+1&&(s|=e[r+1]<<8),s|=e[r],i>r+3&&(s+=e[r+3]<<24>>>0)):(i>r+1&&(s=e[r+1]<<16),i>r+2&&(s|=e[r+2]<<8),i>r+3&&(s|=e[r+3]),s+=e[r]<<24>>>0),s}}function _readInt16(e,r,t,n){n||(assert("boolean"==typeof t,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(r>=i)){var s=_readUInt16(e,r,t,!0),o=32768&s;return o?-1*(65535-s+1):s}}function _readInt32(e,r,t,n){n||(assert("boolean"==typeof t,"missing or invalid endian"),assert(void 0!==r&&null!==r,"missing offset"),assert(r+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(r>=i)){var s=_readUInt32(e,r,t,!0),o=2147483648&s;return o?-1*(4294967295-s+1):s}}function _readFloat(e,r,t,n){return n||(assert("boolean"==typeof t,"missing or invalid endian"),assert(r+3<e.length,"Trying to read beyond buffer length")),ieee754.read(e,r,t,23,4)}function _readDouble(e,r,t,n){return n||(assert("boolean"==typeof t,"missing or invalid endian"),assert(r+7<e.length,"Trying to read beyond buffer length")),ieee754.read(e,r,t,52,8)}function _writeUInt16(e,r,t,n,i){i||(assert(void 0!==r&&null!==r,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+1<e.length,"trying to write beyond buffer length"),verifuint(r,65535));var s=e.length;if(!(t>=s))for(var o=0,u=Math.min(s-t,2);u>o;o++)e[t+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function _writeUInt32(e,r,t,n,i){i||(assert(void 0!==r&&null!==r,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+3<e.length,"trying to write beyond buffer length"),verifuint(r,4294967295));var s=e.length;if(!(t>=s))for(var o=0,u=Math.min(s-t,4);u>o;o++)e[t+o]=r>>>8*(n?o:3-o)&255}function _writeInt16(e,r,t,n,i){i||(assert(void 0!==r&&null!==r,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+1<e.length,"Trying to write beyond buffer length"),verifsint(r,32767,-32768));var s=e.length;t>=s||(r>=0?_writeUInt16(e,r,t,n,i):_writeUInt16(e,65535+r+1,t,n,i))}function _writeInt32(e,r,t,n,i){i||(assert(void 0!==r&&null!==r,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+3<e.length,"Trying to write beyond buffer length"),verifsint(r,2147483647,-2147483648));var s=e.length;t>=s||(r>=0?_writeUInt32(e,r,t,n,i):_writeUInt32(e,4294967295+r+1,t,n,i))}function _writeFloat(e,r,t,n,i){i||(assert(void 0!==r&&null!==r,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+3<e.length,"Trying to write beyond buffer length"),verifIEEE754(r,3.4028234663852886e38,-3.4028234663852886e38));var s=e.length;t>=s||ieee754.write(e,r,t,n,23,4)}function _writeDouble(e,r,t,n,i){i||(assert(void 0!==r&&null!==r,"missing value"),assert("boolean"==typeof n,"missing or invalid endian"),assert(void 0!==t&&null!==t,"missing offset"),assert(t+7<e.length,"Trying to write beyond buffer length"),verifIEEE754(r,1.7976931348623157e308,-1.7976931348623157e308));var s=e.length;t>=s||ieee754.write(e,r,t,n,52,8)}function stringtrim(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function augment(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=BP.get,e.set=BP.set,e.write=BP.write,e.toString=BP.toString,e.toLocaleString=BP.toString,e.toJSON=BP.toJSON,e.copy=BP.copy,e.slice=BP.slice,e.readUInt8=BP.readUInt8,e.readUInt16LE=BP.readUInt16LE,e.readUInt16BE=BP.readUInt16BE,e.readUInt32LE=BP.readUInt32LE,e.readUInt32BE=BP.readUInt32BE,e.readInt8=BP.readInt8,e.readInt16LE=BP.readInt16LE,e.readInt16BE=BP.readInt16BE,e.readInt32LE=BP.readInt32LE,e.readInt32BE=BP.readInt32BE,e.readFloatLE=BP.readFloatLE,e.readFloatBE=BP.readFloatBE,e.readDoubleLE=BP.readDoubleLE,e.readDoubleBE=BP.readDoubleBE,e.writeUInt8=BP.writeUInt8,e.writeUInt16LE=BP.writeUInt16LE,e.writeUInt16BE=BP.writeUInt16BE,e.writeUInt32LE=BP.writeUInt32LE,e.writeUInt32BE=BP.writeUInt32BE,e.writeInt8=BP.writeInt8,e.writeInt16LE=BP.writeInt16LE,e.writeInt16BE=BP.writeInt16BE,e.writeInt32LE=BP.writeInt32LE,e.writeInt32BE=BP.writeInt32BE,e.writeFloatLE=BP.writeFloatLE,e.writeFloatBE=BP.writeFloatBE,e.writeDoubleLE=BP.writeDoubleLE,e.writeDoubleBE=BP.writeDoubleBE,e.fill=BP.fill,e.inspect=BP.inspect,e.toArrayBuffer=BP.toArrayBuffer,e}function clamp(e,r,t){return"number"!=typeof e?t:(e=~~e,e>=r?r:e>=0?e:(e+=r,e>=0?e:0))}function coerce(e){return e=~~Math.ceil(+e),0>e?0:e}function isArray(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function isArrayish(e){return isArray(e)||Buffer.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function toHex(e){return 16>e?"0"+e.toString(16):e.toString(16)}function utf8ToBytes(e){for(var r=[],t=0;t<e.length;t++){var n=e.charCodeAt(t);if(127>=n)r.push(e.charCodeAt(t));else{var i=t;n>=55296&&57343>=n&&t++;for(var s=encodeURIComponent(e.slice(i,t+1)).substr(1).split("%"),o=0;o<s.length;o++)r.push(parseInt(s[o],16))}}return r}function asciiToBytes(e){for(var r=[],t=0;t<e.length;t++)r.push(255&e.charCodeAt(t));return r}function base64ToBytes(e){return base64.toByteArray(e)}function blitBuffer(e,r,t,n){for(var i=0;n>i&&!(i+t>=r.length||i>=e.length);i++)r[i+t]=e[i];return i}function decodeUtf8Char(e){try{return decodeURIComponent(e)}catch(r){return String.fromCharCode(65533)}}function verifuint(e,r){assert("number"==typeof e,"cannot write a non-number as a number"),assert(e>=0,"specified a negative value for writing an unsigned value"),assert(r>=e,"value is larger than maximum value for type"),assert(Math.floor(e)===e,"value has a fractional component")}function verifsint(e,r,t){assert("number"==typeof e,"cannot write a non-number as a number"),assert(r>=e,"value larger than maximum allowed value"),assert(e>=t,"value smaller than minimum allowed value"),assert(Math.floor(e)===e,"value has a fractional component")}function verifIEEE754(e,r,t){assert("number"==typeof e,"cannot write a non-number as a number"),assert(r>=e,"value larger than maximum allowed value"),assert(e>=t,"value smaller than minimum allowed value")}function assert(e,r){if(!e)throw new Error(r||"Failed assertion")}var base64=require("npm:base64-js@^0.0.4"),ieee754=require("npm:ieee754@^1.1.1");exports.Buffer=Buffer,exports.SlowBuffer=Buffer,exports.INSPECT_MAX_BYTES=50,Buffer.poolSize=8192,Buffer._useTypedArrays=function(){if("undefined"==typeof Uint8Array||"undefined"==typeof ArrayBuffer)return!1;try{var e=new Uint8Array(0);return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray}catch(r){return!1}}(),Buffer.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},Buffer.byteLength=function(e,r){var t;switch(e+="",r||"utf8"){case"hex":t=e.length/2;break;case"utf8":case"utf-8":t=utf8ToBytes(e).length;break;case"ascii":case"binary":case"raw":t=e.length;break;case"base64":t=base64ToBytes(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":t=2*e.length;break;default:throw new Error("Unknown encoding")}return t},Buffer.concat=function(e,r){if(assert(isArray(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new Buffer(0);if(1===e.length)return e[0];var t;if("number"!=typeof r)for(r=0,t=0;t<e.length;t++)r+=e[t].length;var n=new Buffer(r),i=0;for(t=0;t<e.length;t++){var s=e[t];s.copy(n,i),i+=s.length}return n},Buffer.prototype.write=function(e,r,t,n){if(isFinite(r))isFinite(t)||(n=t,t=void 0);else{var i=n;n=r,r=t,t=i}r=Number(r)||0;var s=this.length-r;switch(t?(t=Number(t),t>s&&(t=s)):t=s,n=String(n||"utf8").toLowerCase()){case"hex":return _hexWrite(this,e,r,t);case"utf8":case"utf-8":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _utf8Write(this,e,r,t);case"ascii":return _asciiWrite(this,e,r,t);case"binary":return _binaryWrite(this,e,r,t);case"base64":return _base64Write(this,e,r,t);default:throw new Error("Unknown encoding")}},Buffer.prototype.toString=function(e,r,t){var n=this;if(e=String(e||"utf8").toLowerCase(),r=Number(r)||0,t=void 0!==t?Number(t):t=n.length,t===r)return"";switch(e){case"hex":return _hexSlice(n,r,t);case"utf8":case"utf-8":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _utf8Slice(n,r,t);case"ascii":return _asciiSlice(n,r,t);case"binary":return _binarySlice(n,r,t);case"base64":return _base64Slice(n,r,t);default:throw new Error("Unknown encoding")}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.copy=function(e,r,t,n){var i=this;if(t||(t=0),n||0===n||(n=this.length),r||(r=0),n!==t&&0!==e.length&&0!==i.length){assert(n>=t,"sourceEnd < sourceStart"),assert(r>=0&&r<e.length,"targetStart out of bounds"),assert(t>=0&&t<i.length,"sourceStart out of bounds"),assert(n>=0&&n<=i.length,"sourceEnd out of bounds"),n>this.length&&(n=this.length),e.length-r<n-t&&(n=e.length-r+t);for(var s=0;n-t>s;s++)e[s+r]=this[s+t]}},Buffer.prototype.slice=function(e,r){var t=this.length;if(e=clamp(e,t,0),r=clamp(r,t,t),Buffer._useTypedArrays)return augment(this.subarray(e,r));for(var n=r-e,i=new Buffer(n,void 0,!0),s=0;n>s;s++)i[s]=this[s+e];return i},Buffer.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},Buffer.prototype.set=function(e,r){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,r)},Buffer.prototype.readUInt8=function(e,r){return r||(assert(void 0!==e&&null!==e,"missing offset"),assert(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},Buffer.prototype.readUInt16LE=function(e,r){return _readUInt16(this,e,!0,r)},Buffer.prototype.readUInt16BE=function(e,r){return _readUInt16(this,e,!1,r)},Buffer.prototype.readUInt32LE=function(e,r){return _readUInt32(this,e,!0,r)},Buffer.prototype.readUInt32BE=function(e,r){return _readUInt32(this,e,!1,r)},Buffer.prototype.readInt8=function(e,r){if(r||(assert(void 0!==e&&null!==e,"missing offset"),assert(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var t=128&this[e];return t?-1*(255-this[e]+1):this[e]}},Buffer.prototype.readInt16LE=function(e,r){return _readInt16(this,e,!0,r)},Buffer.prototype.readInt16BE=function(e,r){return _readInt16(this,e,!1,r)},Buffer.prototype.readInt32LE=function(e,r){return _readInt32(this,e,!0,r)},Buffer.prototype.readInt32BE=function(e,r){return _readInt32(this,e,!1,r)},Buffer.prototype.readFloatLE=function(e,r){return _readFloat(this,e,!0,r)},Buffer.prototype.readFloatBE=function(e,r){return _readFloat(this,e,!1,r)},Buffer.prototype.readDoubleLE=function(e,r){return _readDouble(this,e,!0,r)},Buffer.prototype.readDoubleBE=function(e,r){return _readDouble(this,e,!1,r)},Buffer.prototype.writeUInt8=function(e,r,t){t||(assert(void 0!==e&&null!==e,"missing value"),assert(void 0!==r&&null!==r,"missing offset"),assert(r<this.length,"trying to write beyond buffer length"),verifuint(e,255)),r>=this.length||(this[r]=e)},Buffer.prototype.writeUInt16LE=function(e,r,t){_writeUInt16(this,e,r,!0,t)},Buffer.prototype.writeUInt16BE=function(e,r,t){_writeUInt16(this,e,r,!1,t)},Buffer.prototype.writeUInt32LE=function(e,r,t){_writeUInt32(this,e,r,!0,t)},Buffer.prototype.writeUInt32BE=function(e,r,t){_writeUInt32(this,e,r,!1,t)},Buffer.prototype.writeInt8=function(e,r,t){t||(assert(void 0!==e&&null!==e,"missing value"),assert(void 0!==r&&null!==r,"missing offset"),assert(r<this.length,"Trying to write beyond buffer length"),verifsint(e,127,-128)),r>=this.length||(e>=0?this.writeUInt8(e,r,t):this.writeUInt8(255+e+1,r,t))},Buffer.prototype.writeInt16LE=function(e,r,t){_writeInt16(this,e,r,!0,t)},Buffer.prototype.writeInt16BE=function(e,r,t){_writeInt16(this,e,r,!1,t)},Buffer.prototype.writeInt32LE=function(e,r,t){_writeInt32(this,e,r,!0,t)},Buffer.prototype.writeInt32BE=function(e,r,t){_writeInt32(this,e,r,!1,t)},Buffer.prototype.writeFloatLE=function(e,r,t){_writeFloat(this,e,r,!0,t)},Buffer.prototype.writeFloatBE=function(e,r,t){_writeFloat(this,e,r,!1,t)},Buffer.prototype.writeDoubleLE=function(e,r,t){_writeDouble(this,e,r,!0,t)},Buffer.prototype.writeDoubleBE=function(e,r,t){_writeDouble(this,e,r,!1,t)},Buffer.prototype.fill=function(e,r,t){if(e||(e=0),r||(r=0),t||(t=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),assert("number"==typeof e&&!isNaN(e),"value is not a number"),assert(t>=r,"end < start"),t!==r&&0!==this.length){assert(r>=0&&r<this.length,"start out of bounds"),assert(t>=0&&t<=this.length,"end out of bounds");for(var n=r;t>n;n++)this[n]=e}},Buffer.prototype.inspect=function(){for(var e=[],r=this.length,t=0;r>t;t++)if(e[t]=toHex(this[t]),t===exports.INSPECT_MAX_BYTES){e[t+1]="...";break}return"<Buffer "+e.join(" ")+">"},Buffer.prototype.toArrayBuffer=function(){if("function"==typeof Uint8Array){if(Buffer._useTypedArrays)return new Buffer(this).buffer;for(var e=new Uint8Array(this.length),r=0,t=e.length;t>r;r+=1)e[r]=this[r];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var BP=Buffer.prototype;
//# sourceMappingURL=buffer.src.js.map