import{a as d,ai as _,B as f,b as o,o as x,e as z,A as S,u as a,m as I}from"./entry.4d13e90a.js";/* empty css                    */const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;const n=l;_(s=>({"85f54cb8":a(m)}));const e=f();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const p=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(x(),z("span",{style:S({width:a(c),height:a(c)})},null,4))}}),g=I(y,[["__scopeId","data-v-a58be67d"]]);export{g as default};
