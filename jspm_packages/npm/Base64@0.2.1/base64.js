"format cjs";!function(){function e(e){this.message=e}var t="undefined"!=typeof exports?exports:this,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.prototype=new Error,e.prototype.name="InvalidCharacterError",t.btoa||(t.btoa=function(t){for(var n,i,o=0,s=r,a="";t.charAt(0|o)||(s="=",o%1);a+=s.charAt(63&n>>8-o%1*8)){if(i=t.charCodeAt(o+=.75),i>255)throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|i}return a}),t.atob||(t.atob=function(t){if(t=t.replace(/=+$/,""),t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,i,o=0,s=0,a="";i=t.charAt(s++);~i&&(n=o%4?64*n+i:i,o++%4)?a+=String.fromCharCode(255&n>>(-2*o&6)):0)i=r.indexOf(i);return a})}();
//# sourceMappingURL=base64.js.map