import{s as it,v as lt,c as ct,e as m,t as O,a as B,b as p,d as x,f as D,g as F,j as ot,h as f,B as ut,n as st}from"../chunks/scheduler.zz3ul0UI.js";import{S as dt,i as mt,d as nt,v as pt,a as w,e as h,b as ft,c as s,s as X,p as ht}from"../chunks/index._-4GGrLL.js";import{p as G}from"../chunks/stores.Txw1MrOu.js";import{p as bt,i as vt,a as _t}from"../chunks/entry.nCyaWWn9.js";function gt(e){const t=JSON.parse(e);return t.data&&(t.data=bt(t.data)),t}function U(e){return HTMLElement.prototype.cloneNode.call(e)}function rt(e,t=()=>{}){if(U(e).method!=="post")throw new Error('use:enhance can only be used on <form> fields with method="POST"');const l=async({action:o,result:d,reset:n=!0,invalidateAll:u=!0})=>{d.type==="success"&&(n&&HTMLFormElement.prototype.reset.call(e),u&&await vt()),(location.origin+location.pathname===o.origin+o.pathname||d.type==="redirect"||d.type==="error")&&_t(d)};async function v(o){if((o.submitter?.hasAttribute("formmethod")?o.submitter.formMethod:U(e).method)!=="post")return;o.preventDefault();const n=new URL(o.submitter?.hasAttribute("formaction")?o.submitter.formAction:U(e).action),u=new FormData(e);if(U(e).enctype!=="multipart/form-data"){for(const r of u.values())if(r instanceof File)throw new Error('Your form contains <input type="file"> fields, but is missing the necessary `enctype="multipart/form-data"` attribute. This will lead to inconsistent behavior between enhanced and native forms. For more details, see https://github.com/sveltejs/kit/issues/9819.')}const a=o.submitter?.getAttribute("name");a&&u.append(a,o.submitter?.getAttribute("value")??"");const T=new AbortController;let A=!1;const k=await t({action:n,cancel:()=>A=!0,controller:T,formData:u,formElement:e,submitter:o.submitter})??l;if(A)return;let c;try{const r=await fetch(n,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:u,signal:T.signal});c=gt(await r.text()),c.type==="error"&&(c.status=r.status)}catch(r){if(r?.name==="AbortError")return;c={type:"error",error:r}}k({action:n,formData:u,formElement:e,update:r=>l({action:n,result:c,reset:r?.reset,invalidateAll:r?.invalidateAll}),result:c})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",v),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",v)}}}const b="C:/Users/amine/Desktop/Learning/svelte/link-tree/src/routes/[username]/bio/+page.svelte";function K(e){let t,l,v,o,d=e[0].bio+"",n,u,a,T,A=e[1].status+"",L,k,c,r=(e[1].form?.problem??"")+"",M,q,_,y,P,C,Q="Your bio",I,E,N,Y,S,W="Update Bio",z,Z;const $={c:function(){t=m("main"),l=m("p"),v=O("Current Bio: "),o=m("span"),n=O(d),u=B(),a=m("p"),T=O("Status Code: "),L=O(A),k=B(),c=m("p"),M=O(r),q=B(),_=m("form"),y=m("div"),P=m("label"),C=m("span"),C.textContent=Q,I=B(),E=m("textarea"),Y=B(),S=m("button"),S.textContent=W,this.h()},l:function(g){t=p(g,"MAIN",{class:!0});var i=x(t);l=p(i,"P",{});var J=x(l);v=D(J,"Current Bio: "),o=p(J,"SPAN",{class:!0});var tt=x(o);n=D(tt,d),tt.forEach(w),J.forEach(w),u=F(i),a=p(i,"P",{});var V=x(a);T=D(V,"Status Code: "),L=D(V,A),V.forEach(w),k=F(i),c=p(i,"P",{class:!0});var et=x(c);M=D(et,r),et.forEach(w),q=F(i),_=p(i,"FORM",{method:!0});var R=x(_);y=p(R,"DIV",{class:!0});var H=x(y);P=p(H,"LABEL",{for:!0,class:!0});var at=x(P);C=p(at,"SPAN",{class:!0,"data-svelte-h":!0}),ot(C)!=="svelte-270kv4"&&(C.textContent=Q),at.forEach(w),I=F(H),E=p(H,"TEXTAREA",{name:!0,class:!0}),x(E).forEach(w),H.forEach(w),Y=F(R),S=p(R,"BUTTON",{class:!0,"data-svelte-h":!0}),ot(S)!=="svelte-tqnit3"&&(S.textContent=W),R.forEach(w),i.forEach(w),this.h()},h:function(){h(o,"class","text-info"),f(o,b,9,18,196),f(l,b,9,2,180),f(a,b,11,2,247),h(c,"class","text-error"),f(c,b,12,2,285),h(C,"class","label-text"),f(C,b,17,8,457),h(P,"for","bio"),h(P,"class","label"),f(P,b,16,6,416),h(E,"name","bio"),h(E,"class","textarea textarea-bordered textarea-accent"),E.value=N=e[0].bio,f(E,b,19,6,521),h(y,"class","form-control"),f(y,b,15,4,382),h(S,"class","btn btn-primary my-5"),f(S,b,25,4,664),h(_,"method","POST"),f(_,b,14,2,344),h(t,"class","max-w-lg prose text-center mx-auto my-6"),f(t,b,8,0,122)},m:function(g,i){ft(g,t,i),s(t,l),s(l,v),s(l,o),s(o,n),s(t,u),s(t,a),s(a,T),s(a,L),s(t,k),s(t,c),s(c,M),s(t,q),s(t,_),s(_,y),s(y,P),s(P,C),s(y,I),s(y,E),s(_,Y),s(_,S),z||(Z=ut(rt.call(null,_)),z=!0)},p:function(g,[i]){i&1&&d!==(d=g[0].bio+"")&&X(n,d),i&2&&A!==(A=g[1].status+"")&&X(L,A),i&2&&r!==(r=(g[1].form?.problem??"")+"")&&X(M,r),i&1&&N!==(N=g[0].bio)&&ht(E,"value",N)},i:st,o:st,d:function(g){g&&w(t),z=!1,Z()}};return nt("SvelteRegisterBlock",{block:$,id:K.name,type:"component",source:"",ctx:e}),$}function wt(e,t,l){let v;lt(G,"page"),ct(e,G,a=>l(1,v=a));let{$$slots:o={},$$scope:d}=t;pt("Page",o,[]);let{data:n}=t;e.$$.on_mount.push(function(){n===void 0&&!("data"in t||e.$$.bound[e.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const u=["data"];return Object.keys(t).forEach(a=>{!~u.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Page> was created with unknown prop '${a}'`)}),e.$$set=a=>{"data"in a&&l(0,n=a.data)},e.$capture_state=()=>({page:G,enhance:rt,data:n,$page:v}),e.$inject_state=a=>{"data"in a&&l(0,n=a.data)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[n,v]}class Pt extends dt{constructor(t){super(t),mt(this,t,wt,K,it,{data:0}),nt("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:K.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Pt as component};
