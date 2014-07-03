"format cjs";!function(e,r){"use strict";describe("MD5 Hex-encoding",function(){it("should create a hex-encoded MD5 hash of an ASCII value",function(){e(r("value")).to.be("2063c1608d6e0baf80249c42e2be5804")}),it("should create a hex-encoded MD5 hash of an UTF-8 value",function(){e(r("\u65e5\u672c")).to.be("4dbed2e657457884e67137d3514119b3")})}),describe("HMAC-MD5 Hex-encoding",function(){it("should create a hex-encoded HMAC-MD5 hash of an ASCII value and key",function(){e(r("value","key")).to.be("01433efd5f16327ea4b31144572c67f6")}),it("should create a hex-encoded HMAC-MD5 hash of an UTF-8 value and key",function(){e(r("\u65e5\u672c","\u65e5\u672c")).to.be("c78b8c7357926981cc04740bd3e9d015")})}),describe("MD5 raw encoding",function(){it("should create a raw MD5 hash of an ASCII value",function(){e(r("value",null,!0)).to.be(" c\xc1`\x8dn\xaf\x80$\x9cB\xe2\xbeX")}),it("should create a raw MD5 hash of an UTF-8 value",function(){e(r("\u65e5\u672c",null,!0)).to.be("M\xbe\xd2\xe6WEx\x84\xe6q7\xd3QA\xb3")})}),describe("HMAC-MD5 raw encoding",function(){it("should create a raw HMAC-MD5 hash of an ASCII value and key",function(){e(r("value","key",!0)).to.be("C>\xfd_2~\xa4\xb3DW,g\xf6")}),it("should create a raw HMAC-MD5 hash of an UTF-8 value and key",function(){e(r("\u65e5\u672c","\u65e5\u672c",!0)).to.be("\xc7\x8b\x8csW\x92i\x81\xcct\xd3\xe9\xd0")})})}(this.expect||require("expect.js"),this.md5||require("../js/md5").md5);
//# sourceMappingURL=test.js.map