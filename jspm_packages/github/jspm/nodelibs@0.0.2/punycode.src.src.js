"format amd";
/*! http://mths.be/punycode v1.2.4 by @mathias */
!function(t){function e(t){throw RangeError(g[t])}function r(t,e){for(var r=t.length;r--;)t[r]=e(t[r]);return t}function n(t,e){return r(t.split(G),e).join(".")}function o(t){for(var e,r,n=[],o=0,s=t.length;s>o;)e=t.charCodeAt(o++),e>=55296&&56319>=e&&s>o?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function s(t){return r(t,function(t){var e="";return t>65535&&(t-=65536,e+=x(t>>>10&1023|55296),t=56320|1023&t),e+=x(t)}).join("")}function i(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:I}function E(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function a(t,e,r){var n=0;for(t=r?U(t/P):t>>1,t+=U(t/e);t>y*N>>1;n+=I)t=U(t/y);return U(n+(y+1)*t/(t+T))}function S(t){var r,n,o,E,S,u,_,p,l,f,O=[],c=t.length,h=0,T=A,P=R;for(n=t.lastIndexOf(d),0>n&&(n=0),o=0;n>o;++o)t.charCodeAt(o)>=128&&e("not-basic"),O.push(t.charCodeAt(o));for(E=n>0?n+1:0;c>E;){for(S=h,u=1,_=I;E>=c&&e("invalid-input"),p=i(t.charCodeAt(E++)),(p>=I||p>U((v-h)/u))&&e("overflow"),h+=p*u,l=P>=_?L:_>=P+N?N:_-P,!(l>p);_+=I)f=I-l,u>U(v/f)&&e("overflow"),u*=f;r=O.length+1,P=a(h-S,r,0==S),U(h/r)>v-T&&e("overflow"),T+=U(h/r),h%=r,O.splice(h++,0,T)}return s(O)}function u(t){var r,n,s,i,S,u,_,p,l,f,O,c,h,T,P,m=[];for(t=o(t),c=t.length,r=A,n=0,S=R,u=0;c>u;++u)O=t[u],128>O&&m.push(x(O));for(s=i=m.length,i&&m.push(d);c>s;){for(_=v,u=0;c>u;++u)O=t[u],O>=r&&_>O&&(_=O);for(h=s+1,_-r>U((v-n)/h)&&e("overflow"),n+=(_-r)*h,r=_,u=0;c>u;++u)if(O=t[u],r>O&&++n>v&&e("overflow"),O==r){for(p=n,l=I;f=S>=l?L:l>=S+N?N:l-S,!(f>p);l+=I)P=p-f,T=I-f,m.push(x(E(f+P%T,0))),p=U(P/T);m.push(x(E(p,0))),S=a(n,h,s==i),n=0,++s}++n,++r}return m.join("")}function _(t){return n(t,function(t){return m.test(t)?S(t.slice(4).toLowerCase()):t})}function p(t){return n(t,function(t){return C.test(t)?"xn--"+u(t):t})}var l="object"==typeof exports&&exports,f="object"==typeof module&&module&&module.exports==l&&module,O="object"==typeof global&&global;(O.global===O||O.window===O)&&(t=O);var c,h,v=2147483647,I=36,L=1,N=26,T=38,P=700,R=72,A=128,d="-",m=/^xn--/,C=/[^ -~]/,G=/\x2E|\u3002|\uFF0E|\uFF61/g,g={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},y=I-L,U=Math.floor,x=String.fromCharCode;if(c={version:"1.2.4",ucs2:{decode:o,encode:s},decode:S,encode:u,toASCII:p,toUnicode:_},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return c});else if(l&&!l.nodeType)if(f)f.exports=c;else for(h in c)c.hasOwnProperty(h)&&(l[h]=c[h]);else t.punycode=c}(this);