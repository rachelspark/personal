import{_ as x}from"../chunks/preload-helper.a4192956.js";import{s as z,o as C}from"../chunks/scheduler.09d52c7e.js";import{S as D,i as H,q as E,g as h,m as P,s as q,r as S,h as y,j as $,n as A,f as v,c as j,u as L,k,a as U,z as m,v as M,o as O,t as T,b as V,d as I,w as R,p as B}from"../chunks/index.a7910576.js";const F=(i,t)=>{const a=i[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((o,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function G({params:i}){const t=await F(Object.assign({"../driving-user-activation-at-warp.md":()=>x(()=>import("../chunks/driving-user-activation-at-warp.e41d8f14.js"),["../chunks/driving-user-activation-at-warp.e41d8f14.js","../chunks/scheduler.09d52c7e.js","../chunks/index.a7910576.js"],import.meta.url)}),`../${i.slug}.md`),{title:a,date:o}=t.metadata;return{content:t.default,title:a,date:o}}const X=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));function J(i){let t,a,o=i[0].title+"",n,c,l,f=i[0].date+"",d,g,e,u;var _=i[0].content;function b(s,r){return{}}return _&&(e=E(_,b())),{c(){t=h("article"),a=h("h1"),n=P(o),c=q(),l=h("p"),d=P(f),g=q(),e&&S(e.$$.fragment),this.h()},l(s){t=y(s,"ARTICLE",{class:!0});var r=$(t);a=y(r,"H1",{class:!0});var p=$(a);n=A(p,o),p.forEach(v),c=j(r),l=y(r,"P",{class:!0});var w=$(l);d=A(w,f),w.forEach(v),g=j(r),e&&L(e.$$.fragment,r),r.forEach(v),this.h()},h(){k(a,"class","py-3 svelte-dkukks"),k(l,"class","text-gray-500 mb-10 svelte-dkukks"),k(t,"class","layout-md svelte-dkukks")},m(s,r){U(s,t,r),m(t,a),m(a,n),m(t,c),m(t,l),m(l,d),m(t,g),e&&M(e,t,null),u=!0},p(s,[r]){if((!u||r&1)&&o!==(o=s[0].title+"")&&O(n,o),(!u||r&1)&&f!==(f=s[0].date+"")&&O(d,f),r&1&&_!==(_=s[0].content)){if(e){B();const p=e;T(p.$$.fragment,1,0,()=>{R(p,1)}),V()}_?(e=E(_,b()),S(e.$$.fragment),I(e.$$.fragment,1),M(e,t,null)):e=null}},i(s){u||(e&&I(e.$$.fragment,s),u=!0)},o(s){e&&T(e.$$.fragment,s),u=!1},d(s){s&&v(t),e&&R(e)}}}function K(i,t,a){C(()=>{const n=document.querySelector("article"),c=n==null?void 0:n.querySelectorAll("a");c==null||c.forEach(l=>{l.setAttribute("target","_blank"),l.setAttribute("rel","noopener noreferrer")})});let{data:o}=t;return i.$$set=n=>{"data"in n&&a(0,o=n.data)},[o]}class Y extends D{constructor(t){super(),H(this,t,K,J,z,{data:0})}}export{Y as component,X as universal};