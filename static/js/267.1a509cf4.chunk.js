"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[267],{9267:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,o,i,a,c,s,d,l,u,x=r(2791),p=r(4420),f=r(4270),h=r(3553),m=function(n){return n.contact.contacts.items},b=function(n){return n.contact.contacts.isLoading},g=(0,h.P1)(m,(function(n){return n.contact.contacts.filter}),(function(n,e){return e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n})),j=r(7907),v=r(168),Z=r(225),w=Z.Z.div(t||(t=(0,v.Z)(["\n  max-width: 450px;\n  margin: 50px auto;\n  /* padding: 20px; */\n  /* text-align: center; */\n  border-radius: 6px;\n    background-color: #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n\n  & h1, h2 {\n    text-align: center;\n    color: #333;\n    /* font-size: 24px; */\n    margin-bottom: 20px;\n  }\n\n & header {\n  border-radius: 4px;\n\n  }\n  "]))),y=r(4942),k=r(1413),C=r(9439),F=Z.Z.form(o||(o=(0,v.Z)(["\n  margin-bottom: 20px;\n  text-align: center;  \n"]))),z=Z.Z.label(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 10px;\n  color: #555;\n  line-height: 2em;\n\n  input {\n    box-sizing: border-box;\n    width: 100%;\n    padding: 8px;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    &:hover\n     {\n      box-shadow: 0px 0px 2px 2px #449cf4;\n      // border:none;\n    }\n  }\n"]))),q=Z.Z.button(a||(a=(0,v.Z)(["\n  padding: 8px 16px;\n  font-size: 16px;\n  border-color: #ccc;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #449cf4;\n    border-color: #449cf4;\n    color: white;\n  }\n"]))),I=r(3329),_=function(){var n=(0,x.useState)({name:"",number:""}),e=(0,C.Z)(n,2),r=e[0],t=e[1],o=(0,p.I0)(),i=(0,p.v9)(m),a=(0,p.v9)(b),c=function(n){var e=n.target,r=e.name,o=e.value;t((function(n){return(0,k.Z)((0,k.Z)({},n),{},(0,y.Z)({},r,o))}))};return(0,I.jsxs)(F,{onSubmit:function(n){n.preventDefault();var e=(0,k.Z)({},r);if(i.length>0&&i.find((function(n){return n.name===r.name})))return alert("".concat(r.name," is already in contacts list"));o((0,j.uK)((0,k.Z)({},e))),t({name:"",number:""})},children:[(0,I.jsxs)(z,{children:["Name",(0,I.jsx)("input",{type:"text",name:"name",value:r.name,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){c(n)}})]}),(0,I.jsxs)(z,{children:["Tel",(0,I.jsx)("input",{type:"tel",name:"number",value:r.number,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(n){c(n)}})]}),(0,I.jsx)(q,{type:"submit",children:a?"Loading...":"Add contact"})]})},A=r(7262),L=(0,r(1792).oM)({name:"filter",initialState:{filter:""},reducers:{filterValue:function(n,e){var r=e.payload;n.filter=r}}}),P=L.actions.filterValue,S=(L.reducer,function(){var n=(0,p.I0)();return(0,I.jsx)(A.Z,{id:"standard-basic",label:"Filter",variant:"standard",name:"filter",onChange:function(e){n(P(e.target.value))}})}),K=r(3721),M=Z.Z.ol(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  padding: 0;\n"]))),N=Z.Z.li(s||(s=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n  align-items: center;\n  &:hover {\n    background-color: #449cf43d;\n  }\n"]))),V=Z.Z.button(d||(d=(0,v.Z)(["\n  /* position: absolute;\n  top: 0;\n  right: 0; */\n\n  margin-left: 40px;\n  border-color: #ccc;\n  border-radius: 4px;\n  font-size: 22px;\n  cursor: pointer;\n  &:hover {\n    background-color: #449cf4;\n    border-color: #449cf4;\n    color: white;\n  }\n"]))),B=Z.Z.div(l||(l=(0,v.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  gap: 15;\n  justify-content: space-between;\n  align-items: center;\n"]))),D=(Z.Z.button(u||(u=(0,v.Z)(["\n  &:hover,\n  &:focus {\n    background-color: #449cf4;\n    border-color: #449cf4;\n    color: white;\n  }\n"]))),function(n){var e=n.currentContact,r=e.id,t=e.name,o=e.number,i=(0,p.I0)();return(0,I.jsxs)(B,{children:[(0,I.jsxs)("p",{children:[(0,I.jsx)("span",{children:t}),": ",(0,I.jsx)("span",{children:o})]}),(0,I.jsx)("div",{children:(0,I.jsx)(V,{onClick:function(){return i((0,j.GK)(r))},children:(0,I.jsx)(K.j0F,{})})})]})}),E=function(){var n=(0,p.v9)(g);if(n.length)return(0,I.jsx)(I.Fragment,{children:(null===n||void 0===n?void 0:n.length)&&(0,I.jsx)(M,{children:n&&n.map((function(n){return(0,I.jsx)(N,{children:(0,I.jsx)(D,{currentContact:n})},n.id)}))})})};function G(){var n=(0,p.I0)(),e=(0,p.v9)(b);return(0,x.useEffect)((function(){n((0,j.yF)())}),[n]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f.q,{children:(0,I.jsx)("title",{children:"Your contacts"})}),(0,I.jsxs)(w,{children:[(0,I.jsx)("h1",{children:"Phone book"}),(0,I.jsx)(_,{}),(0,I.jsx)(S,{}),(0,I.jsx)("div",{children:e&&"Request in progress..."}),(0,I.jsx)(E,{})]})]})}}}]);
//# sourceMappingURL=267.1a509cf4.chunk.js.map