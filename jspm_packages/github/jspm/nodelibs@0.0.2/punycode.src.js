"format amd";!function(e){function t(e){throw RangeError(A[e])}function r(e,t){for(var r=e.length;r--;)e[r]=t(e[r]);return e}function n(e,t){return r(e.split(T),t).join(".")}function i(e){for(var t,r,n=[],i=0,o=e.length;o>i;)t=e.charCodeAt(i++),t>=55296&&56319>=t&&o>i?(r=e.charCodeAt(i++),56320==(64512&r)?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),i--)):n.push(t);return n}function o(e){return r(e,function(e){var t="";return e>65535&&(e-=65536,t+=M(e>>>10&1023|55296),e=56320|1023&e),t+=M(e)}).join("")}function s(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:b}function a(e,t){return e+22+75*(26>e)-((0!=t)<<5)}function u(e,t,r){var n=0;for(e=r?U(e/S):e>>1,e+=U(e/t);e>j*_>>1;n+=b)e=U(e/j);return U(n+(j+1)*e/(e+E))}function f(e){var r,n,i,a,f,l,c,h,d,p,g=[],y=e.length,m=0,E=I,S=O;for(n=e.lastIndexOf(L),0>n&&(n=0),i=0;n>i;++i)e.charCodeAt(i)>=128&&t("not-basic"),g.push(e.charCodeAt(i));for(a=n>0?n+1:0;y>a;){for(f=m,l=1,c=b;a>=y&&t("invalid-input"),h=s(e.charCodeAt(a++)),(h>=b||h>U((v-m)/l))&&t("overflow"),m+=h*l,d=S>=c?w:c>=S+_?_:c-S,!(d>h);c+=b)p=b-d,l>U(v/p)&&t("overflow"),l*=p;r=g.length+1,S=u(m-f,r,0==f),U(m/r)>v-E&&t("overflow"),E+=U(m/r),m%=r,g.splice(m++,0,E)}return o(g)}function l(e){var r,n,o,s,f,l,c,h,d,p,g,y,m,E,S,x=[];for(e=i(e),y=e.length,r=I,n=0,f=O,l=0;y>l;++l)g=e[l],128>g&&x.push(M(g));for(o=s=x.length,s&&x.push(L);y>o;){for(c=v,l=0;y>l;++l)g=e[l],g>=r&&c>g&&(c=g);for(m=o+1,c-r>U((v-n)/m)&&t("overflow"),n+=(c-r)*m,r=c,l=0;y>l;++l)if(g=e[l],r>g&&++n>v&&t("overflow"),g==r){for(h=n,d=b;p=f>=d?w:d>=f+_?_:d-f,!(p>h);d+=b)S=h-p,E=b-p,x.push(M(a(p+S%E,0))),h=U(S/E);x.push(M(a(h,0))),f=u(n,m,o==s),n=0,++o}++n,++r}return x.join("")}function c(e){return n(e,function(e){return x.test(e)?f(e.slice(4).toLowerCase()):e})}function h(e){return n(e,function(e){return B.test(e)?"xn--"+l(e):e})}var d="object"==typeof exports&&exports,p="object"==typeof module&&module&&module.exports==d&&module,g="object"==typeof global&&global;(g.global===g||g.window===g)&&(e=g);var y,m,v=2147483647,b=36,w=1,_=26,E=38,S=700,O=72,I=128,L="-",x=/^xn--/,B=/[^ -~]/,T=/\x2E|\u3002|\uFF0E|\uFF61/g,A={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},j=b-w,U=Math.floor,M=String.fromCharCode;if(y={version:"1.2.4",ucs2:{decode:i,encode:o},decode:f,encode:l,toASCII:h,toUnicode:c},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return y});else if(d&&!d.nodeType)if(p)p.exports=y;else for(m in y)y.hasOwnProperty(m)&&(d[m]=y[m]);else e.punycode=y}(this);
//# sourceMappingURL=punycode.src.js.map