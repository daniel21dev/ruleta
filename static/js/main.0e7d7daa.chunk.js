(this.webpackJsonpruleta=this.webpackJsonpruleta||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),i=n.n(a),s=(n(12),n(7)),r=n(3),o=n(0),l=Object(c.createContext)(),j=function(e){var t=e.children,n=Object(c.useState)([]),a=Object(r.a)(n,2),i=a[0],s=a[1];return Object(o.jsx)(l.Provider,{value:{imagenes:i,setImagenes:s},children:t})},u=function(){var e=Object(c.useContext)(l),t=e.imagenes,n=e.setImagenes;return Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"file",id:"newImage",onChange:function(e){if(!e.target.files[0].type.includes("image")||!e.target.files[0].type)return null;var c=URL.createObjectURL(e.target.files[0]);n([].concat(Object(s.a)(t),[c]))}})})},b=function(e){var t=e.imagen,n=e.index,c=e.itemWidth,a=(e.angleUnit,e.coors);e.selected;return a[n]?Object(o.jsx)("div",{className:"item",style:{left:"".concat(a[n].sx-c/2,"px"),top:"".concat(a[n].sy-c/2,"px"),width:"".concat(c,"px"),height:"".concat(c,"px")},children:Object(o.jsx)("img",{src:t,alt:"imagen"})}):null};function g(e,t,n,c,a){for(var i=2*Math.PI/c,s=[],r=0;r<2*Math.PI;r+=i){var o=e+Math.cos(r)*n,l=t+Math.sin(r)*n;s.push({sx:o,sy:l})}a(s)}var d=function(){var e=Object(c.useContext)(l).imagenes,t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(225),j=Object(r.a)(s,2),u=j[0],d=j[1],h=e.length>0?e.length:1,f=h>4?250*Math.PI/h:196,O=360/h;Object(c.useEffect)((function(){g(250,250,250,h,i)}),[]),Object(c.useEffect)((function(){g(250,250,250,h,i)}),[e]);return Object(o.jsxs)("div",{className:"ruleta",children:[e.map((function(e,t){return Object(o.jsx)(b,{imagen:e,index:t,coors:a,itemWidth:f,angleUnit:O},t)})),Object(o.jsx)("button",{className:"".concat(u?"gradiente-calor":"gradiente-agua"),onClick:function(){d(O*(Math.random()*(h-1)+1)*10)},children:"Girar"}),Object(o.jsx)("img",{src:"/flecha.png",alt:"flecha",style:{transform:"rotate(".concat(u,"deg)")},className:"flecha"})]})};var h=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsx)("div",{className:"container gradiente-mora glowing",children:Object(o.jsx)(d,{})})]})};i.a.render(Object(o.jsx)(j,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0e7d7daa.chunk.js.map