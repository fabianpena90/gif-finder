(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(7),c=n.n(a),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>0&&(e((function(t){return[c].concat(Object(s.a)(t))})),o("")),!c&&alert("Please type something!")},children:Object(u.jsx)("input",{onChange:function(t){o(t.target.value)},type:"text",value:c})})},j=n(10),d=n(6),p=n.n(d),f=n(8),l=function(){var t=Object(f.a)(p.a.mark((function t(e){var n,r,a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=31Pn49ZazOvSXIHPXhaxxztBmmMAQBh3&q=$".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){l(t).then((function(t){return c({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,c=n.loading;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e}),c&&Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(b,Object(j.a)({},t),t.id)}))})]})},O=(n(17),function(){var t=Object(r.useState)([""]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GiftExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategories:a}),n.map((function(t){return Object(u.jsx)(h,{category:t},Math.floor(100*Math.random()))}))]})});c.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.42b73081.chunk.js.map