function k(){}const Y=t=>t;function q(t,e){for(const n in e)t[n]=e[n];return t}function Z(t,e,n,i,r){t.__svelte_meta={loc:{file:e,line:n,column:i,char:r}}}function H(t){return t()}function $(){return Object.create(null)}function P(t){t.forEach(H)}function B(t){return typeof t=="function"}function tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function et(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function nt(t){return Object.keys(t).length===0}function it(t,e){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${e}' is not a store with a 'subscribe' method`)}function L(t,...e){if(t==null){for(const i of e)i(void 0);return k}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function rt(t,e,n){t.$$.on_destroy.push(L(e,n))}function ct(t,e,n,i){if(t){const r=A(t,e,n,i);return t[0](r)}}function A(t,e,n,i){return t[1]&&i?q(n.ctx.slice(),t[1](i(e))):n.ctx}function lt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function st(t,e,n,i,r,o){if(r){const c=A(e,n,i,o);t.p(c,r)}}function ot(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ut(t){return t&&B(t.destroy)?t.destroy:k}function at(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let p=!1;function ft(){p=!0}function _t(){p=!1}function M(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:M(1,r,T=>e[n[T]].claim_order,u))-1;i[l]=n[a]+1;const w=a+1;n[w]=l,r=Math.max(w,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function R(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function dt(t){const e=C("style");return e.textContent="/* empty */",I(F(t),e),e.sheet}function I(t,e){return R(t.head||t,e),e.sheet}function z(t,e){if(p){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){p&&!n?z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function mt(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function U(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function yt(){return v(" ")}function bt(){return v("")}function gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function xt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return t.dataset.svelteH}function Et(t){return Array.from(t.childNodes)}function W(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,r=!1){W(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function S(t,e,n,i){return D(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Nt(t,e,n){return S(t,e,n,C)}function kt(t,e,n){return S(t,e,n,U)}function G(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function At(t){return G(t," ")}function Ct(t,e){t.value=e??""}function Dt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function jt(t){const e=t.querySelector(":checked");return e&&e.__value}function Tt(t,e,n){t.classList.toggle(e,!!n)}function J(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function qt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}let m;function b(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Ht(t){y().$$.on_mount.push(t)}function Pt(t){y().$$.after_update.push(t)}function Bt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=J(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Lt(t,e){return y().$$.context.set(t,e),e}const d=[],E=[];let _=[];const N=[],j=Promise.resolve();let x=!1;function K(){x||(x=!0,j.then(V))}function Mt(){return K(),j}function Q(t){_.push(t)}const g=new Set;let f=0;function V(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,b(e),X(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;N.length;)N.pop()();x=!1,g.clear(),b(t)}function X(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function Ot(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{Ot as $,xt as A,ut as B,at as C,Q as D,q as E,qt as F,pt as G,Pt as H,Ht as I,Lt as J,Mt as K,E as L,Dt as M,Y as N,Bt as O,jt as P,St as Q,F as R,mt as S,dt as T,J as U,$ as V,V as W,m as X,b as Y,nt as Z,H as _,yt as a,d as a0,K as a1,ft as a2,_t as a3,z as a4,ht as a5,gt as a6,vt as a7,Nt as b,rt as c,Et as d,C as e,G as f,At as g,Z as h,bt as i,wt as j,U as k,kt as l,et as m,k as n,ct as o,ot as p,lt as q,L as r,tt as s,v as t,st as u,it as v,P as w,B as x,Tt as y,Ct as z};
