"format cjs";
/*global define:false require:false */
module.exports=function(){var e=require("./events"),t={};return t.create=function(){var t=new e.EventEmitter;return t.run=function(e){try{e()}catch(t){this.emit("error",t)}return this},t.dispose=function(){return this.removeAllListeners(),this},t},t}.call(this);