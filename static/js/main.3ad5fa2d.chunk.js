(this["webpackJsonppaint-app"]=this["webpackJsonppaint-app"]||[]).push([[0],{31:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),c=n.n(a),i=n(15),s=n.n(i),r=(n(40),n(7)),j=(n(31),n(1)),o=function(e){var t=e.setLineColor,n=e.setLineWidth,a=e.setLineOpacity;return Object(j.jsxs)("div",{className:"Menu",children:[Object(j.jsx)("label",{children:"Brush Color"}),Object(j.jsx)("input",{type:"color",onChange:function(e){t(e.target.value)}}),Object(j.jsx)("label",{children:"Brush Width"}),Object(j.jsx)("input",{type:"range",min:"3",max:"20",onChange:function(e){n(e.target.value)}}),Object(j.jsx)("label",{children:"Brush Opacity"}),Object(j.jsx)("input",{type:"range",min:"1",max:"100",onChange:function(e){a(e.target.value/100)}})]})};var l=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(!1),c=Object(r.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)("black"),u=Object(r.a)(l,2),b=u[0],h=u[1],p=Object(a.useState)(5),O=Object(r.a)(p,2),d=O[0],x=O[1],f=Object(a.useState)(.1),g=Object(r.a)(f,2),v=g[0],m=g[1];return Object(a.useEffect)((function(){var n=e.current.getContext("2d");n.lineCap="round",n.lineJoin="round",n.globalAlpha=v,n.strokeStyle=b,n.lineWidth=d,t.current=n}),[b,v,d]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Paint App"}),Object(j.jsxs)("div",{className:"draw-area",children:[Object(j.jsx)(o,{setLineColor:h,setLineWidth:x,setLineOpacity:m}),Object(j.jsx)("canvas",{onMouseDown:function(e){t.current.beginPath(),t.current.moveTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY),s(!0)},onMouseUp:function(){t.current.closePath(),s(!1)},onMouseMove:function(e){i&&(t.current.lineTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY),t.current.stroke())},ref:e,width:"852px",height:"480px"})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},b=n(34),h=n(3),p=function(){return Object(j.jsx)(a.Fragment,{children:Object(j.jsx)("h1",{children:"Landing Page"})})},O=n(28),d=n(23),x=n(32),f=function(){return Object(j.jsx)(d.a,{bg:"light",variant:"light",expand:"lg",children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(d.a.Brand,{href:"paint-app/",children:"Landing Page"}),Object(j.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(O.a,{className:"me-auto",children:[Object(j.jsx)(O.a.Link,{href:"paint-app/",children:"Home"}),Object(j.jsx)(O.a.Link,{href:"paint-app/paint",children:"Paint and Play"})]})})]})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(f,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",element:Object(j.jsx)(p,{})}),Object(j.jsx)(h.a,{exact:!0,path:"/paint",element:Object(j.jsx)(l,{})})]})]})}),document.getElementById("root")),u()}},[[47,1,2]]]);
//# sourceMappingURL=main.3ad5fa2d.chunk.js.map