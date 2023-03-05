"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[724],{9724:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var t,o,i,a,c,s,d,u,l,p,b,x=r(2791),h=r(9434),f=r(4270),m=r(1555),g=function(n){var e=n.contacts,r=n.filter;if(!r)return e.contacts;var t=r.toLowerCase();return e.contacts.filter((function(n){return n.name.toLowerCase().includes(t)}))},Z=function(n){return n.contacts.isLoading},v=r(168),j=r(4934),k=j.Z.ul(t||(t=(0,v.Z)(["\n  list-style: none;\n  padding: 10px 0;\n  margin: 10px 0;\n  border-radius: 8px;\n  border: 4px solid #9cb0b3;\n"]))),z=j.Z.li(o||(o=(0,v.Z)(["\n  position: relative;\n  padding: 14px;\n"]))),w=j.Z.span(i||(i=(0,v.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  padding: 8px;\n  background-color: white;\n  border-radius: 5px;\n  border: 1px solid #9cb0b3;\n"]))),y=j.Z.button(a||(a=(0,v.Z)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  font-weight: 700;\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid #9cb0b3;\n  cursor: pointer;\n  color: black;\n  background-color: white;\n  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    background-color: #9cb0b3;\n    color: white;\n  }\n"]))),C=r(3329),A=function(){var n=(0,h.v9)(g),e=(0,h.I0)();return(0,C.jsx)(k,{children:n.map((function(n){var r=n.id,t=n.name,o=n.number;return(0,C.jsxs)(z,{children:[(0,C.jsxs)(w,{children:[t,":"]}),(0,C.jsx)(w,{children:o}),(0,C.jsx)(y,{type:"button",onClick:function(){return function(n){return e((0,m.GK)(n))}(r)},children:"Delete"})]},r)}))})},F=r(9439),_=j.Z.form(c||(c=(0,v.Z)(["\n  padding: 10px;\n  border-radius: 8px;\n  border: 4px solid #9cb0b3;\n"]))),I=j.Z.label(s||(s=(0,v.Z)(["\n  font-weight: 700;\n  font-size: 20px;\n  color: black;\n"]))),q=j.Z.input(d||(d=(0,v.Z)(["\n  font-size: 20px;\n  padding: 8px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  border: 1px solid #9cb0b3;\n  outline-color: #9cb0b3;\n"]))),S=j.Z.button(u||(u=(0,v.Z)(["\n  font-weight: 700;\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid #9cb0b3;\n  outline-color: #9cb0b3;\n  cursor: pointer;\n  color: black;\n  background-color: white;\n  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    background-color: #9cb0b3;\n    color: white;\n  }\n"]))),M=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",r=crypto.getRandomValues(new Uint8Array(n));n--;){var t=63&r[n];e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return e},N=function(){var n=(0,x.useState)(""),e=(0,F.Z)(n,2),r=e[0],t=e[1],o=(0,x.useState)(""),i=(0,F.Z)(o,2),a=i[0],c=i[1],s=(0,h.I0)(),d=(0,x.useMemo)((function(){return M()}),[]),u=(0,x.useMemo)((function(){return M()}),[]);return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(_,{onSubmit:function(n){n.preventDefault(),s((0,m.uK)({name:r,number:a})),t(""),c("")},children:[(0,C.jsx)(I,{htmlFor:d,children:"Name"}),(0,C.jsx)("div",{children:(0,C.jsx)(q,{type:"text",name:"name",id:d,value:r,onChange:function(n){return t(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,C.jsx)(I,{htmlFor:u,children:"Number"}),(0,C.jsx)("div",{children:(0,C.jsx)(q,{type:"tel",name:"number",id:u,value:a,onChange:function(n){c(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,C.jsx)(S,{type:"submit",children:"Add contact"})]})})},L=r(1634),B=function(n){return n.filter},D=j.Z.form(l||(l=(0,v.Z)(["\n  padding: 10px;\n  border-radius: 8px;\n  border: 4px solid #9cb0b3;\n"]))),J=j.Z.label(p||(p=(0,v.Z)(["\n  font-weight: 700;\n  font-size: 20px;\n  color: black;\n"]))),K=j.Z.input(b||(b=(0,v.Z)(["\n  font-size: 20px;\n  padding: 8px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  border: 1px solid #9cb0b3;\n  outline-color: #9cb0b3;\n"]))),R=function(){var n=(0,h.v9)(B),e=(0,h.I0)();return(0,C.jsxs)(D,{children:[(0,C.jsx)(J,{htmlFor:"filterId",children:"Find contacts by name"}),(0,C.jsx)("div",{children:(0,C.jsx)(K,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,L.T)(n.target.value))},id:"filterId",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})})]})};function U(){var n=(0,h.I0)(),e=(0,h.v9)(Z);return(0,x.useEffect)((function(){n((0,m.yF)())}),[n]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(f.q,{children:(0,C.jsx)("title",{children:"Your tasks"})}),(0,C.jsx)(N,{}),(0,C.jsx)(R,{}),(0,C.jsx)("div",{children:e&&"Request in progress..."}),(0,C.jsx)(A,{})]})}}}]);
//# sourceMappingURL=724.8aed6e3c.chunk.js.map