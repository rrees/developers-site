"format cjs";"use strict";var qs=require("../"),qsTestCases=[["foo=918854443121279438895193","foo=918854443121279438895193",{foo:"918854443121279438895193"}],["foo=bar","foo=bar",{foo:"bar"}],["foo=bar&foo=quux","foo=bar&foo=quux",{foo:["bar","quux"]}],["foo=1&bar=2","foo=1&bar=2",{foo:"1",bar:"2"}],["my+weird+field=q1%212%22%27w%245%267%2Fz8%29%3F","my%20weird%20field=q1!2%22'w%245%267%2Fz8)%3F",{"my weird field":"q1!2\"'w$5&7/z8)?"}],["foo%3Dbaz=bar","foo%3Dbaz=bar",{"foo=baz":"bar"}],["foo=baz=bar","foo=baz%3Dbar",{foo:"baz=bar"}],["str=foo&arr=1&arr=2&arr=3&somenull=&undef=","str=foo&arr=1&arr=2&arr=3&somenull=&undef=",{str:"foo",arr:["1","2","3"],somenull:"",undef:""}],[" foo = bar ","%20foo%20=%20bar%20",{" foo ":" bar "}],["foo=%EF%BF%BD","foo=%EF%BF%BD",{foo:"\ufffd"}],["hasOwnProperty=x&toString=foo&valueOf=bar&__defineGetter__=baz","hasOwnProperty=x&toString=foo&valueOf=bar&__defineGetter__=baz",{hasOwnProperty:"x",toString:"foo",valueOf:"bar",__defineGetter__:"baz"}],["foo&bar=baz","foo=&bar=baz",{foo:"",bar:"baz"}]],qsColonTestCases=[["foo:bar","foo:bar",{foo:"bar"}],["foo:bar;foo:quux","foo:bar;foo:quux",{foo:["bar","quux"]}],["foo:1&bar:2;baz:quux","foo:1%26bar%3A2;baz:quux",{foo:"1&bar:2",baz:"quux"}],["foo%3Abaz:bar","foo%3Abaz:bar",{"foo:baz":"bar"}],["foo:baz:bar","foo:baz%3Abar",{foo:"baz:bar"}]],extendedFunction=function(){};extendedFunction.prototype={a:"b"};var qsWeirdObjects=[[{regexp:/./g},"regexp=",{regexp:""}],[{regexp:new RegExp(".","g")},"regexp=",{regexp:""}],[{fn:function(){}},"fn=",{fn:""}],[{fn:new Function("")},"fn=",{fn:""}],[{math:Math},"math=",{math:""}],[{e:extendedFunction},"e=",{e:""}],[{d:new Date},"d=",{d:""}],[{d:Date},"d=",{d:""}],[{f:new Boolean(!1),t:new Boolean(!0)},"f=&t=",{f:"",t:""}],[{f:!1,t:!0},"f=false&t=true",{f:"false",t:"true"}],[{n:null},"n=",{n:""}],[{nan:0/0},"nan=",{nan:""}],[{inf:1/0},"inf=",{inf:""}]],qsNoMungeTestCases=[["",{}],["foo=bar&foo=baz",{foo:["bar","baz"]}],["blah=burp",{blah:"burp"}],["gragh=1&gragh=3&goo=2",{gragh:["1","3"],goo:"2"}],["frappucino=muffin&goat%5B%5D=scone&pond=moose",{frappucino:"muffin","goat[]":"scone",pond:"moose"}],["trololol=yes&lololo=no",{trololol:"yes",lololo:"no"}]];exports["test basic"]=function(e){e.strictEqual("918854443121279438895193",qs.parse("id=918854443121279438895193").id,"prase id=918854443121279438895193")},exports["test that the canonical qs is parsed properly"]=function(e){qsTestCases.forEach(function(t){e.deepEqual(t[2],qs.parse(t[0]),"parse "+t[0])})},exports["test that the colon test cases can do the same"]=function(e){qsColonTestCases.forEach(function(t){e.deepEqual(t[2],qs.parse(t[0],";",":"),"parse "+t[0]+" -> ; :")})},exports["test the weird objects, that they get parsed properly"]=function(e){qsWeirdObjects.forEach(function(t){e.deepEqual(t[2],qs.parse(t[1]),"parse "+t[1])})},exports["test non munge test cases"]=function(e){qsNoMungeTestCases.forEach(function(t){e.deepEqual(t[0],qs.stringify(t[1],"&","=",!1),"stringify "+JSON.stringify(t[1])+" -> & =")})},exports["test the nested qs-in-qs case"]=function(e){var t=qs.parse("a=b&q=x%3Dy%26y%3Dz");t.q=qs.parse(t.q),e.deepEqual(t,{a:"b",q:{x:"y",y:"z"}},"parse a=b&q=x%3Dy%26y%3Dz")},exports["test nested in colon"]=function(e){var t=qs.parse("a:b;q:x%3Ay%3By%3Az",";",":");t.q=qs.parse(t.q,";",":"),e.deepEqual(t,{a:"b",q:{x:"y",y:"z"}},"parse a:b;q:x%3Ay%3By%3Az -> ; :")},exports["test stringifying"]=function(e){qsTestCases.forEach(function(t){e.equal(t[1],qs.stringify(t[2]),"stringify "+JSON.stringify(t[2]))}),qsColonTestCases.forEach(function(t){e.equal(t[1],qs.stringify(t[2],";",":"),"stringify "+JSON.stringify(t[2])+" -> ; :")}),qsWeirdObjects.forEach(function(t){e.equal(t[1],qs.stringify(t[0]),"stringify "+JSON.stringify(t[0]))})},exports["test stringifying nested"]=function(e){var t=qs.stringify({a:"b",q:qs.stringify({x:"y",y:"z"})});e.equal(t,"a=b&q=x%3Dy%26y%3Dz",JSON.stringify({a:"b","qs.stringify -> q":{x:"y",y:"z"}}));var r=!1;try{qs.parse(void 0)}catch(n){r=!0}e.ok(!r,"does not throws on undefined")},exports["test nested in colon"]=function(e){var t=qs.stringify({a:"b",q:qs.stringify({x:"y",y:"z"},";",":")},";",":");e.equal(t,"a:b;q:x%3Ay%3By%3Az","stringify "+JSON.stringify({a:"b","qs.stringify -> q":{x:"y",y:"z"}})+" -> ; : "),e.deepEqual({},qs.parse(),"parse undefined")};
//# sourceMappingURL=index.src.js.map