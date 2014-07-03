"format cjs";
process.EventEmitter||(process.EventEmitter=function(){});var EventEmitter=exports.EventEmitter=process.EventEmitter,isArray="function"==typeof Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},defaultMaxListeners=10;EventEmitter.prototype.setMaxListeners=function(e){this._events||(this._events={}),this._events.maxListeners=e},EventEmitter.prototype.emit=function(e){if("error"===e&&(!this._events||!this._events.error||isArray(this._events.error)&&!this._events.error.length))throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");if(!this._events)return!1;var t=this._events[e];if(!t)return!1;if("function"==typeof t){switch(arguments.length){case 1:t.call(this);break;case 2:t.call(this,arguments[1]);break;case 3:t.call(this,arguments[1],arguments[2]);break;default:var E=Array.prototype.slice.call(arguments,1);t.apply(this,E)}return!0}if(isArray(t)){for(var E=Array.prototype.slice.call(arguments,1),S=t.slice(),_=0,s=S.length;s>_;_++)S[_].apply(this,E);return!0}return!1},EventEmitter.prototype.addListener=function(e,t){if("function"!=typeof t)throw new Error("addListener only takes instances of Function");if(this._events||(this._events={}),this.emit("newListener",e,t),this._events[e])if(isArray(this._events[e])){if(!this._events[e].warned){var E;E=void 0!==this._events.maxListeners?this._events.maxListeners:defaultMaxListeners,E&&E>0&&this._events[e].length>E&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),console.trace())}this._events[e].push(t)}else this._events[e]=[this._events[e],t];else this._events[e]=t;return this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(e,t){var E=this;return E.on(e,function S(){E.removeListener(e,S),t.apply(this,arguments)}),this},EventEmitter.prototype.removeListener=function(e,t){if("function"!=typeof t)throw new Error("removeListener only takes instances of Function");if(!this._events||!this._events[e])return this;var E=this._events[e];if(isArray(E)){var S=E.indexOf(t);if(0>S)return this;E.splice(S,1),0==E.length&&delete this._events[e]}else this._events[e]===t&&delete this._events[e];return this},EventEmitter.prototype.removeAllListeners=function(e){return e&&this._events&&this._events[e]&&(this._events[e]=null),this},EventEmitter.prototype.listeners=function(e){return this._events||(this._events={}),this._events[e]||(this._events[e]=[]),isArray(this._events[e])||(this._events[e]=[this._events[e]]),this._events[e]};