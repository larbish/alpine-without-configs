import{a as _,D as l,L as b,o as a,e as s,F as v,r as x,f as u,t as g,H as k,x as y,v as I,p as T,k as S,a1 as C,m as $}from"./entry.4d13e90a.js";/* empty css                       */const w=t=>(T("data-v-11acbdc3"),t=t(),S(),t),B={class:"tabs-header"},H=["onClick"],L=w(()=>u("span",{class:"tab"},null,-1)),N=[L],U=_({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,n=l(),r=l(),i=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{p("update:activeTabIndex",c),C(()=>i(e.target))};return b(n,e=>{e&&setTimeout(()=>{i(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",B,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,x(t.tabs,({label:d},o)=>(a(),s("button",{key:`${o}${d}`,class:y([t.activeTabIndex===o?"active":"not-active"]),onClick:m=>f(m,o)},I(d),11,H))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},N,512)],512)):g("",!0),k(e.$slots,"footer",{},void 0,!0)]))}}),F=$(U,[["__scopeId","data-v-11acbdc3"]]);export{F as default};
