"format cjs";
// Copyright Joyent, Inc. and other Node contributors.
function PassThrough(e){return this instanceof PassThrough?void Transform.call(this,e):new PassThrough(e)}module.exports=PassThrough;var Transform=require('./transform'),inherits=require("npm:inherits@^2.0.1");inherits(PassThrough,Transform),PassThrough.prototype._transform=function(e,t,r){r(null,e)};