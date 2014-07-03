"format cjs";const test=require("tap").test,zlibA=require("../../zlib"),zlibB=require(".."),crypto=require("crypto");test("zlibA.deflate -> zlibB.inflate",function(e){const t=crypto.randomBytes(1024);zlibA.deflate(t,function(r,n){zlibB.inflate(n,function(r,n){e.same(n,t,"should match"),e.end()})})}),test("zlibB.deflate -> zlibA.inflate",function(e){const t=crypto.randomBytes(1024);zlibB.deflate(t,function(r,n){zlibA.inflate(n,function(r,n){e.same(n,t,"should match"),e.end()})})}),test("zlibB.deflate -> zlibA.inflate (string)",function(e){const t="ohaihihihihihihihihihihihihihihihi";zlibB.deflate(t,function(r,n){zlibA.inflate(n,function(r,n){e.same(n.toString(),t,"should match"),e.end()})})}),test("zlibA.gzip -> zlibB.gunzip",function(e){const t=crypto.randomBytes(1024);zlibA.gzip(t,function(r,n){zlibB.gunzip(n,function(r,n){e.same(n,t,"should match"),e.end()})})}),test("zlibB.gzip -> zlibA.gunzip",function(e){const t=crypto.randomBytes(1024);zlibB.gzip(t,function(r,n){zlibA.gunzip(n,function(r,n){e.same(n,t,"should match"),e.end()})})}),test("zlibB.gzip -> zlibA.gunzip",function(e){const t="lololololoollolololoololololololololololololololololololololol";zlibB.gzip(t,function(r,n){zlibA.gunzip(n,function(r,n){e.same(n.toString(),t,"should match"),e.end()})})});
//# sourceMappingURL=zlib.test.src.js.map