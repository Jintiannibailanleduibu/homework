"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[131],{4732:function(e,a,t){var n=t(2180),o=t(1515),l=t(2954),s=t(7484),c=t.n(s),r=t(5893);function i(e){var a=(0,l.useRouter)(),t=a.params,n=t||{},s=n.commercialRateBase,i=n.years,p=n.forwardMethod,h=n.commercialValue,u=n.paymentMethod,m=n.forwardAt,f=n.startAt,v=n.forwardValue,j=n.tqMethod;function y(){var e=1e4*h,a=s/1200,t=12*i,n=c()(m).diff(f,"month")+1,o=e*a*Math.pow(1+a,t)/(Math.pow(1+a,t)-1),l=o*t,r=l-e,x=e*Math.pow(1+a,n)-o*(Math.pow(1+a,n)-1)/a,d=e-x,p=o*n,u=p-d,v=x*(1+a),j=l-p-v;return{preLoan:o,totalMoney:l,leftLoan:x,payTimes:n,payLoan:d,principals:e,interest:r,payInterest:u,saveInterest:j,totalPayAhead:v,payTotal:p}}function M(){var e=1e4*h,a=s/1200,t=12*i,n=c()(m).diff(f,"month")+1,o=e/t,l=o+e*a,r=o*a,x=(t+1)*e*a/2,d=e+x,p=o*n,u=e-p,v=(e*n-o*(n-1)*n/2)*a,j=p+v,y=(e-p)*(1+a),M=d-j-y;return{firstMonth:l,decreaseMonth:r,totalMoney:d,prePrincipal:o,leftLoan:u,payTimes:n,payLoan:p,principals:e,interest:x,payInterest:v,saveInterest:M,totalPayAhead:y,payTotal:j}}function F(){var e=1e4*h,a=s/1200,t=12*i,n=c()(m).diff(f,"month")+1,o=1e4*v,l=e*a*Math.pow(1+a,t)/(Math.pow(1+a,t)-1),r=l*t,x=r-e,d=e*Math.pow(1+a,n)-l*(Math.pow(1+a,n)-1)/a;console.log("leftLoanBefore==> ",d);var p=c()(m).diff(f,"day")+1,u=d*s/36e3*p,j=o-u,y=d-j,M=e-d,F=l*n,w=F-M,P=j,T=Math.floor(Math.log(l/(l-y*a))/Math.log(1+a)),L=y*a*Math.pow(1+a,T)/(Math.pow(1+a,T)-1),I=L*T,g=I-y,A=r-P-I-F;return{totalMoney:r,leftTotalMoney:I,leftLoan:y,payTimes:n,payLoan:M,principals:e,interest:x,payInterest:w,saveInterest:A,totalPayAhead:z,payTotal:F,leftInterest:g,aheadPrincipal:j,lx:u,aheadPrincipalTotal:o,aheadTotalMoney:P,leftMonth:T,preLoan:l,newPreLoan:L}}function w(){var e=1e4*h,a=s/1200,t=12*i,n=c()(m).diff(f,"month")+1,o=1e4*v,l=e/t,r=l+e*a,x=l*a,d=(t+1)*e*a/2,p=e+d,u=l*n,j=(e*n-l*(n-1)*n/2)*a,y=u+j,M=c()(m).diff(f,"day")+1,F=(e-u)*s/36e3*M,w=o-F,P=w,T=e-w-u,L=Math.floor(T/l),I=T/L,g=I+T*a,A=I*a,N=(L+1)*T*a/2,b=T+N,B=p-y-P-b;return{newPrePrincipal:I,newFirstMonth:g,newDecreaseMonth:A,prePrincipal:l,firstMonth:r,decreaseMonth:x,totalMoney:p,leftTotalMoney:b,leftLoan:T,payTimes:n,payLoan:u,principals:e,interest:d,payInterest:j,saveInterest:B,totalPayAhead:z,payTotal:y,leftInterest:N,aheadPrincipal:w,lx:F,aheadPrincipalTotal:o,aheadTotalMoney:P,leftMonth:L,preLoan:G,newPreLoan:S}}function P(){var e=1e4*h,a=s/1200,t=12*i,n=c()(m).diff(f,"month")+1,o=1e4*v,l=t-n,r=e*a*Math.pow(1+a,t)/(Math.pow(1+a,t)-1),x=r*t,d=x-e,p=e*Math.pow(1+a,n)-r*(Math.pow(1+a,n)-1)/a,u=c()(m).diff(f,"day")+1,j=p*s/36e3*u,y=o-j,M=p-y,F=e-p,w=r*n,P=w-F,T=y,L=M*a*Math.pow(1+a,t-n-1)/(Math.pow(1+a,t-n-1)-1),I=L*(t-n),g=I-M;return{totalMoney:x,leftTotalMoney:I,leftLoan:M,payTimes:n,payLoan:F,principals:e,interest:d,payInterest:P,saveInterest:C,totalPayAhead:z,payTotal:w,leftInterest:g,aheadPrincipal:y,lx:j,aheadPrincipalTotal:o,aheadTotalMoney:T,leftMonth:l,preLoan:r,newPreLoan:L}}function T(){var e=1e4*h,a=s/1200,t=12*i,n=c()(m).diff(f,"month")+1,o=1e4*v,l=e/t,r=l+e*a,x=l*a,d=(t+1)*e*a/2,p=e+d,u=l*n,j=(e*n-l*(n-1)*n/2)*a,y=u+j,M=c()(m).diff(f,"day")+1,F=(e-u)*s/36e3*M,w=o-F,P=w,T=t-n,L=e-w-u,I=L/T,g=I+L*a,A=I*a,N=(T+1)*L*a/2,b=L+N;return{newPrePrincipal:I,newFirstMonth:g,newDecreaseMonth:A,prePrincipal:l,firstMonth:r,decreaseMonth:x,totalMoney:p,leftTotalMoney:b,leftLoan:L,payTimes:n,payLoan:u,principals:e,interest:d,payInterest:j,saveInterest:C,totalPayAhead:z,payTotal:y,leftInterest:N,aheadPrincipal:w,lx:F,aheadPrincipalTotal:o,aheadTotalMoney:P,leftMonth:T,preLoan:G,newPreLoan:S}}console.log("params ==> ",t);var L="eci"===u,I="qxbb"===j,g="all"===p;console.log("forwardMethod==> ",g);var A=L?g?y():I?P():F():g?M():I?T():w(),G=A.preLoan,N=A.firstMonth,b=A.decreaseMonth,B=A.prePrincipal,k=A.totalMoney,q=A.leftLoan,D=A.payTimes,J=A.payLoan,O=(A.leftTotalMoney,A.principals),R=A.interest,V=A.payInterest,C=A.saveInterest,z=A.totalPayAhead,E=A.payTotal,H=A.lx,K=A.aheadPrincipalTotal,Q=(A.leftInterest,A.aheadTotalMoney),S=(A.leftMonth,A.newPreLoan);function U(e){return(0,r.jsxs)(o.G7,{className:"title",children:[e,(0,r.jsx)(o.G7,{className:"line"})]})}return g?(0,r.jsxs)(o.G7,{className:"page",children:[(0,r.jsxs)(x,{children:[U("\u539f\u8d37\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u539f\u8d37\u6b3e\u603b\u989d",value:"".concat(O.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u5229\u606f\u603b\u989d",value:"".concat(R.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u8fd8\u6b3e\u603b\u989d",value:"".concat(k.toFixed(2),"\u5143")}),L&&(0,r.jsx)(d,{name:"\u539f\u6708\u4f9b\u603b\u989d",value:"".concat(G.toFixed(2),"\u5143")}),!L&&(0,r.jsx)(d,{name:"\u539f\u6bcf\u6708\u672c\u91d1",value:"".concat(B.toFixed(2),"\u5143")}),!L&&(0,r.jsx)(d,{name:"\u539f\u9996\u6708\u8fd8\u6b3e\u603b\u989d",value:"".concat(N.toFixed(2),"\u5143")}),!L&&(0,r.jsx)(d,{name:"\u539f\u6bcf\u6708\u4f9b\u9012\u51cf",value:"".concat(b.toFixed(2),"\u5143")})]}),(0,r.jsxs)(x,{children:[U("\u5df2\u8fd8\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u672c\u91d1",value:"".concat(J.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u5229\u606f",value:"".concat(V.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u603b\u989d",value:"".concat(E.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u671f\u6570",value:"".concat(D,"\u671f")})]}),!g&&(0,r.jsxs)(x,{children:[U("\u63d0\u524d\u8fd8\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u5269\u4f59\u8fd8\u6b3e\u672c\u91d1",value:"".concat(q.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u4e00\u6b21\u6027\u8fd8\u6b3e\u603b\u989d",value:"".concat(z.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u8282\u7701\u5229\u606f",value:"".concat(C.toFixed(2),"\u5143")})]}),!g&&(0,r.jsxs)(x,{children:[U("\u63d0\u524d\u8fd8\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u63d0\u524d\u8fd8\u6b3e\u603b\u989d",value:"".concat(K.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u63d0\u524d\u8fd8\u6b3e\u672c\u91d1",value:"".concat(Q.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u63d0\u524d\u8fd8\u6b3e\u5229\u606f",value:"".concat(H.toFixed(2),"\u5143")})]}),g&&(0,r.jsxs)(x,{children:[U("\u5269\u4f59\u8fd8\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u5269\u4f59\u8fd8\u6b3e\u672c\u91d1",value:"".concat(q.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u4e00\u6b21\u6027\u8fd8\u6b3e\u603b\u989d",value:"".concat(z.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u8282\u7701\u5229\u606f",value:"".concat(C.toFixed(2),"\u5143")})]})]}):L?(0,r.jsxs)(o.G7,{className:"page",children:[(0,r.jsxs)(x,{children:[U("\u539f\u8d37\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u539f\u8d37\u6b3e\u603b\u989d",value:"".concat(O.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u5229\u606f\u603b\u989d",value:"".concat(R.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u8fd8\u6b3e\u603b\u989d",value:"".concat(k.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u6708\u4f9b\u603b\u989d",value:"".concat(G.toFixed(2),"\u5143")})]}),(0,r.jsxs)(x,{children:[U("\u5df2\u8fd8\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u672c\u91d1",value:"".concat(J.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u5229\u606f",value:"".concat(V.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u603b\u989d",value:"".concat(E.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u671f\u6570",value:"".concat(D,"\u671f")})]}),(0,r.jsxs)(x,{children:[U("\u63d0\u524d\u8fd8\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u5269\u4f59\u8fd8\u6b3e\u672c\u91d1",value:"".concat(q.toFixed(2),"\u5143")})]}),(0,r.jsxs)(x,{children:[U("\u5269\u4f59\u8fd8\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u5269\u4f59\u8fd8\u6b3e\u672c\u91d1",value:"".concat(q.toFixed(2),"\u5143")})]})]}):(0,r.jsxs)(o.G7,{className:"page",children:[(0,r.jsxs)(x,{children:[U("\u539f\u8d37\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u539f\u8d37\u6b3e\u603b\u989d",value:"".concat(O.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u5229\u606f\u603b\u989d",value:"".concat(R.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u8fd8\u6b3e\u603b\u989d",value:"".concat(k.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u6bcf\u6708\u672c\u91d1",value:"".concat(B.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u9996\u6708\u8fd8\u6b3e\u603b\u989d",value:"".concat(N.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u539f\u6bcf\u6708\u4f9b\u9012\u51cf",value:"".concat(b.toFixed(2),"\u5143")})]}),(0,r.jsxs)(x,{children:[U("\u5df2\u8fd8\u6b3e\u4fe1\u606f"),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u672c\u91d1",value:"".concat(J.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u5229\u606f",value:"".concat(V.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u603b\u989d",value:"".concat(E.toFixed(2),"\u5143")}),(0,r.jsx)(d,{name:"\u5df2\u8fd8\u671f\u6570",value:"".concat(D,"\u671f")})]})]})}function x(e){var a=e.children;return(0,r.jsx)(o.G7,{className:"group",children:a})}function d(e){var a=e.name,t=e.value;return(0,r.jsxs)(o.G7,{className:"item",children:[(0,r.jsx)(o.G7,{className:"name",children:a}),(0,r.jsx)(o.G7,{className:"value",children:t})]})}var p={navigationBarTitleText:"\u8ba1\u7b97\u7ed3\u679c"};Page((0,n.createPageConfig)(i,"pages/calculator/result2/index",{root:{cn:[]}},p||{}))}},function(e){var a=function(a){return e(e.s=a)};e.O(0,[107,216],(function(){return a(4732)}));e.O()}]);