(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{83:function(e,t,n){"use strict";n.r(t);var o=n(10),c=n(0),r=n.n(c),i=n(29),a=n.n(i),u=n(128),d=n(129),l=n(30),s=n(9),p=n(122),j=function(e){var t=e.onAppend,n=Object(c.useRef)(null);return Object(o.jsx)(p.a,{inputRef:n,inputProps:{onKeyDown:function(e){"Enter"===e.key&&null!==n.current&&""!==n.current.value&&(t&&t(n.current.value),n.current.value="")}},label:"What needs to be done?",fullWidth:!0,type:"text",id:"new-todo-input"})},f=n(18),b=n(124),O="appendTodo",h="toggleTodo",v="clearCompleted",y="updateTodo",g="removeTodo";function m(e,t){switch(t.type){case O:return[].concat(Object(f.a)(e),[t.payload]);case h:return e.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{isCompleted:!e.isCompleted}):e}));case v:return e.filter((function(e){return!e.isCompleted}));case y:return e.map((function(e){return e.id===t.payload.id?Object(l.a)(Object(l.a)({},e),{},{content:t.payload.content,isCompleted:t.payload.isCompleted}):e}));case g:return e.filter((function(e){return e.id!==t.payload}));default:throw new Error("invalid todo action type")}}var C=function(e){return function(t){if("all"===e)return!0;if("completed"===e)return t.isCompleted;if("active"===e)return!t.isCompleted;throw new Error("invalid todo filter")}};var x=n(126),T=n(120),k=n(121),w=n(123),F=n(127),E=function(e){var t=e.todo,n=e.handleUpdate,r=Object(c.useState)((function(){return!1})),i=Object(s.a)(r,2),a=i[0],u=i[1],d=Object(c.useState)((function(){return t.content})),p=Object(s.a)(d,2),j=p[0],f=p[1];return Object(o.jsx)(o.Fragment,{children:a?Object(o.jsx)("input",{value:j,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){"Escape"===e.key?u(!1):"Enter"===e.key&&(n(Object(l.a)(Object(l.a)({},t),{},{content:j})),u(!1))}}):Object(o.jsx)("span",{onDoubleClick:function(){u(!0)},children:t.content})})};function B(){var e=Object(c.useState)((function(){return"all"})),t=Object(s.a)(e,2),n=t[0],r=t[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=Object(c.useReducer)(t,e),o=Object(s.a)(n,2),r=o[0],i=o[1];function a(e){i({type:O,payload:{id:Object(b.a)(),content:e,isCompleted:!1}})}function u(e){i({type:y,payload:e})}function d(e){i({type:h,payload:e})}function l(){i({type:v})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";return r.filter(C(e))}function j(e){return r.find((function(t){return t.id===e}))}function f(){return p("active").length}function x(e){i({type:g,payload:e})}return{todoList:r,getTodoById:j,appendTodo:a,toggleTodo:d,clearCompleted:l,getTodoListByFilter:p,updateTodo:Object(c.useCallback)((function(e){return u(e)}),[]),getActiveTodoCount:f,removeTodo:x,filters:["all","active","completed"]}}(),a=i.filters,u=i.toggleTodo,d=i.appendTodo,l=i.getTodoListByFilter,p=i.getActiveTodoCount,f=i.clearCompleted,B=i.removeTodo,L=i.updateTodo;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{onAppend:function(e){return d(e)}}),Object(o.jsx)(x.a,{}),Object(o.jsx)(T.a,{children:l(n).map((function(e){return Object(o.jsxs)(k.a,{children:[Object(o.jsx)(w.a,{checked:e.isCompleted,onChange:function(){return u(e.id)}}),Object(o.jsx)(E,{todo:e,handleUpdate:L}),Object(o.jsx)(F.a,{onClick:function(){return B(e.id)},children:" x "})]},e.id)}))}),a.map((function(e){return Object(o.jsx)(F.a,{onClick:function(){return r(e)},children:e},e)})),Object(o.jsxs)("p",{children:[" ",p()+" active todo(s)."," "]}),Object(o.jsx)(F.a,{onClick:function(){return f()},children:"Clear"})]})}function L(){return Object(o.jsxs)(u.a,{children:[Object(o.jsx)(d.a,{align:"center",display:"block",variant:"h1",children:"todo"}),Object(o.jsx)(B,{}),Object(o.jsx)(d.a,{align:"center",display:"block",variant:"body2",children:"\xa9 2021"})]})}var S=n(125),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))};a.a.render(Object(o.jsxs)(r.a.StrictMode,{children:[Object(o.jsx)(S.a,{}),Object(o.jsx)(L,{})]}),document.getElementById("root")),A()}},[[83,1,2]]]);
//# sourceMappingURL=main.d6b47eae.chunk.js.map