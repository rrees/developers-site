"format cjs";exports.read=function(e,t,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,f=u>>1,c=-7,l=r?i-1:0,h=r?-1:1,d=e[t+l];for(l+=h,o=d&(1<<-c)-1,d>>=-c,c+=a;c>0;o=256*o+e[t+l],l+=h,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=n;c>0;s=256*s+e[t+l],l+=h,c-=8);if(0===o)o=1-f;else{if(o===u)return s?0/0:1/0*(d?-1:1);s+=Math.pow(2,n),o-=f}return(d?-1:1)*s*Math.pow(2,o-n)},exports.write=function(e,t,r,n,i,o){var s,a,u,f=8*o-i-1,c=(1<<f)-1,l=c>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,p=n?1:-1,g=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||1/0===t?(a=isNaN(t)?1:0,s=c):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),t+=s+l>=1?h/u:h*Math.pow(2,1-l),t*u>=2&&(s++,u/=2),s+l>=c?(a=0,s=c):s+l>=1?(a=(t*u-1)*Math.pow(2,i),s+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,i),s=0));i>=8;e[r+d]=255&a,d+=p,a/=256,i-=8);for(s=s<<i|a,f+=i;f>0;e[r+d]=255&s,d+=p,s/=256,f-=8);e[r+d-p]|=128*g};
//# sourceMappingURL=index.js.map