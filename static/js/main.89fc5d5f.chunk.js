(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n,s=c(7),a=c.n(s),r=c(6),l=c(15),i=c(5),o=c(12),d=c(13),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(n||(n={}));var f=function(e){return{type:"filter/SET_STATUS",payload:e}},m=function(e){return{type:"filter/SET_QUERY",payload:e}},O={status:n.All,query:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"filter/SET_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});default:return e}},p=function(e){return{type:"todos/SET",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},y=Object(i.combineReducers)({currentTodo:h,filter:x,todos:v}),N=Object(i.createStore)(y,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),g=c(0),T=(c(23),c(24),c(14)),S=c.n(T),E=r.b,k=r.c,w=c(1),C=function(){var e=E(),t=k((function(e){return e.todos})),c=k((function(e){return e.currentTodo})),s=k((function(e){return e.filter})),a=s.status,r=s.query,l=Object(g.useMemo)((function(){return function(e,t,c){var s=function(e){return e.toLowerCase().includes(c.toLowerCase())};switch(t){case n.Active:return e.filter((function(e){return!e.completed&&s(e.title)}));case n.Completed:return e.filter((function(e){return e.completed&&s(e.title)}));default:return e.filter((function(e){return s(e.title)}))}}(t,a,r)}),[t,a,r]);return Object(w.jsx)(w.Fragment,{children:0===l.length?Object(w.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(w.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("th",{children:"Title"}),Object(w.jsx)("th",{children:" "})]})}),t.length>0&&Object(w.jsx)("tbody",{children:l.map((function(t){return Object(w.jsxs)("tr",{"data-cy":"todo",className:S()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===t.id}),children:[Object(w.jsx)("td",{className:"is-vcentered",children:t.id}),Object(w.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(w.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("td",{className:"is-vcentered is-expanded",children:Object(w.jsx)("p",{className:t.completed?"has-text-success":"has-text-danger",children:t.title})}),Object(w.jsx)("td",{className:"has-text-right is-vcentered",children:Object(w.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(u(t))},children:Object(w.jsx)("span",{className:"icon",children:(null===c||void 0===c?void 0:c.id)===t.id?Object(w.jsx)("i",{className:"far fa-eye-slash"}):Object(w.jsx)("i",{className:"far fa-eye"})})})})]},t.id)}))})]})})},A=function(){var e=E(),t=k((function(e){return e.filter})),c=t.status,s=t.query,a=function(t){return e(m(t))};return Object(w.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(w.jsx)("p",{className:"control",children:Object(w.jsx)("span",{className:"select",children:Object(w.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(t){return c=t.target.value,e(f(c));var c},children:[Object(w.jsx)("option",{value:n.All,children:"All"}),Object(w.jsx)("option",{value:n.Active,children:"Active"}),Object(w.jsx)("option",{value:n.Completed,children:"Completed"})]})})}),Object(w.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(w.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(w.jsx)("span",{className:"icon is-left",children:Object(w.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(w.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(w.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},_=c(3),R=(c(26),function(){return Object(w.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(w.jsx)("div",{className:"Loader__content"})})});function q(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var I=function(){var e=Object(g.useState)(null),t=Object(_.a)(e,2),c=t[0],n=t[1],s=E(),a=k((function(e){return e.currentTodo}));return Object(g.useEffect)((function(){var e;null!==a&&void 0!==a&&a.userId&&(e=a.userId,q("/users/".concat(e))).then(n)}),[]),Object(w.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(w.jsx)("div",{className:"modal-background"}),c?Object(w.jsxs)("div",{className:"modal-card",children:[Object(w.jsxs)("header",{className:"modal-card-head",children:[Object(w.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===a||void 0===a?void 0:a.id)}),Object(w.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s(j())}})]}),Object(w.jsxs)("div",{className:"modal-card-body",children:[Object(w.jsx)("p",{className:"block","data-cy":"modal-title",children:null===a||void 0===a?void 0:a.title}),Object(w.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==a&&void 0!==a&&a.completed?Object(w.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(w.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(w.jsx)("a",{href:"mailto:Sincere@april.biz",children:c.name})]})]})]}):Object(w.jsx)(R,{})]})},L=function(){var e=E(),t=k((function(e){return e.currentTodo})),c=k((function(e){return e.todos})),n=function(t){return e(p(t))};return Object(g.useEffect)((function(){q("/todos").then(n)}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"section",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("h1",{className:"title",children:"Todos:"}),Object(w.jsx)("div",{className:"block",children:Object(w.jsx)(A,{})}),Object(w.jsx)("div",{className:"block",children:c.length?Object(w.jsx)(C,{}):Object(w.jsx)(R,{})})]})})}),t&&Object(w.jsx)(I,{})]})},M=function(){return Object(w.jsx)(r.a,{store:N,children:Object(w.jsx)(l.a,{children:Object(w.jsx)(L,{})})})};a.a.render(Object(w.jsx)(M,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.89fc5d5f.chunk.js.map