(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{84:function(t,e,n){"use strict";n.r(e);var o=n(10),c=n(0),i=n.n(c),r=n(30),u=n.n(r),a=n(129),l=n(130),d=n(31),s=n(9),f=n(123),j=function(t){var e=t.onAppend,n=Object(c.useRef)(null);return Object(o.jsx)(f.a,{inputRef:n,inputProps:{onKeyDown:function(t){"Enter"===t.key&&null!==n.current&&""!==n.current.value&&(e&&e(n.current.value),n.current.value="")}},label:"What needs to be done?",fullWidth:!0,type:"text",id:"new-todo-input"})},O=n(28),b=n(125);var p=Object(O.b)({id:"todo-list",initial:"loaded",context:{list:[],filter:"all"},states:{loaded:{on:{APPEND_TODO:{actions:[Object(O.a)({list:function(t,e){return t.list.concat((n=e.content,{id:Object(b.a)(),content:n,isCompleted:!1}));var n}})]},TOGGLE_TODO:{actions:[Object(O.a)({list:function(t,e){return t.list.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{isCompleted:!t.isCompleted}):t}))}})]},UPDATE_TODO:{actions:[Object(O.a)({list:function(t,e){return t.list.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{content:e.content}):t}))}})]},REMOVE_TODO:{actions:[Object(O.a)({list:function(t,e){return t.list.filter((function(t){var n=t.id;return e.id!==n}))}})]},CLEAR_COMPLETED:{actions:[Object(O.a)({list:function(t){return t.list.filter((function(t){return!t.isCompleted}))}})]},SET_FILTER:{actions:[Object(O.a)({filter:function(t,e){return e.filter}})]}}}}}),T=Object(O.c)(p),h=function(t){return function(e){if("all"===t)return!0;if("completed"===t)return e.isCompleted;if("active"===t)return!e.isCompleted;throw new Error("invalid todo filter")}};var v=n(127),x=n(121),E=n(122),C=n(124),g=n(128),m=function(t){var e=t.todo,n=t.handleUpdate,i=Object(c.useState)((function(){return!1})),r=Object(s.a)(i,2),u=r[0],a=r[1],l=Object(c.useState)((function(){return e.content})),f=Object(s.a)(l,2),j=f[0],O=f[1];return Object(o.jsx)(o.Fragment,{children:u?Object(o.jsx)("input",{value:j,onChange:function(t){return O(t.target.value)},onKeyDown:function(t){"Escape"===t.key?a(!1):"Enter"===t.key&&(n(Object(d.a)(Object(d.a)({},e),{},{content:j})),a(!1))}}):Object(o.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.content})})};function y(){var t=function(){Object(c.useEffect)((function(){return T.start(),T.subscribe((function(t){t.changed&&o(t.context.list.filter(h(t.context.filter)))})),function(){T.stop()}}),[]);var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1],i=T.send;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";return T.state.context.list.filter(h(t))}return{todoList:n,getTodoById:function(t){return T.state.context.list.find((function(e){return e.id===t}))},appendTodo:function(t){i({type:"APPEND_TODO",content:t})},toggleTodo:function(t){i({type:"TOGGLE_TODO",id:t})},clearCompleted:function(){i({type:"CLEAR_COMPLETED"})},getTodoListByFilter:r,updateTodo:function(t){i({type:"UPDATE_TODO",id:t.id,content:t.content})},getActiveTodoCount:function(){return r("active").length},removeTodo:function(t){i({type:"REMOVE_TODO",id:t})},setFilter:function(t){i({type:"SET_FILTER",filter:t})},filters:["all","active","completed"]}}(),e=t.todoList,n=t.setFilter,i=t.filters,r=t.toggleTodo,u=t.appendTodo,a=t.getActiveTodoCount,l=t.clearCompleted,d=t.removeTodo,f=t.updateTodo;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{onAppend:function(t){return u(t)}}),Object(o.jsx)(v.a,{}),Object(o.jsx)(x.a,{children:e.map((function(t){return Object(o.jsxs)(E.a,{children:[Object(o.jsx)(C.a,{checked:t.isCompleted,onChange:function(){return r(t.id)}}),Object(o.jsx)(m,{todo:t,handleUpdate:f}),Object(o.jsx)(g.a,{onClick:function(){return d(t.id)},children:" x "})]},t.id)}))}),i.map((function(t){return Object(o.jsx)(g.a,{onClick:function(){return n(t)},children:t},t)})),Object(o.jsxs)("p",{children:[" ",a()+" active todo(s)."," "]}),Object(o.jsx)(g.a,{onClick:function(){return l()},children:"Clear"})]})}function D(){return Object(o.jsxs)(a.a,{children:[Object(o.jsx)(l.a,{align:"center",display:"block",variant:"h1",children:"todo"}),Object(o.jsx)(y,{}),Object(o.jsx)(l.a,{align:"center",display:"block",variant:"body2",children:"\xa9 2021"})]})}var L=n(126),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))};u.a.render(Object(o.jsxs)(i.a.StrictMode,{children:[Object(o.jsx)(L.a,{}),Object(o.jsx)(D,{})]}),document.getElementById("root")),k()}},[[84,1,2]]]);
//# sourceMappingURL=main.cf927116.chunk.js.map