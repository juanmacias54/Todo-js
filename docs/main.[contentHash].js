(()=>{function a(d){if(c[d])return c[d].exports;var e=c[d]={exports:{}};return b[d](e,e.exports,a),e.exports}var b={606:(a,b,c)=>{"use strict";function d(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function e(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function f(d,a,b){return a&&e(d.prototype,a),b&&e(d,b),d}function g(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=h(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,f=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{f||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function h(d,e){if(d){if("string"==typeof d)return i(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?i(d,e):void 0}}function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function j(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function k(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function l(d,a,b){return a&&k(d.prototype,a),b&&k(d,b),d}function m(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=n(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,f=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{f||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function n(d,e){if(d){if("string"==typeof d)return o(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?o(d,e):void 0}}function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}c.d(b,{k:()=>x});c(279);var p=function(){function h(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";d(this,h),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return f(h,null,[{key:"fromJson",value:function(a){var b=a.id,c=a.tarea,d=a.completado,e=a.creado,f=new h(c);return f.id=b,f.completado=d,f.creado=e,f}}]),h}();var q=function(){function b(){j(this,b),this.todos=[],this.recuperarLocalStorage()}return l(b,[{key:"nuevoTodo",value:function(b){this.todos.push(b),this.guardarLocalStorage()}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter(function(b){return!b.completado}),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(c){this.todos=this.todos.filter(function(a){return a.id!=c}),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var a,b=g(this.todos);try{for(b.s();!(a=b.n()).done;){var c=a.value;if(c.id==e){c.completado=!c.completado,this.guardarLocalStorage();break}}}catch(c){b.e(c)}finally{b.f()}}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.todos))}},{key:"recuperarLocalStorage",value:function(){this.todos=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],this.todos=this.todos.map(function(b){return p.fromJson(b)})}}]),b}();var r=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),t=document.querySelector(".clear-completed"),u=document.querySelector(".filters"),v=document.querySelectorAll(".filtro"),w=function(d){var a="<li   data-id=\"".concat(d.id,"\">\n                <div class=\"view\">\n                    <input class=\"toggle\" type=\"checkbox\" ").concat(d.completo&&"checked",">\n                    <label>").concat(d.tarea,"</label>\n                    <button class=\"destroy\"></button>\n                </div>\n                <input class=\"edit\" value=\"Create a TodoMVC template\">\n        </li>"),b=document.createElement("div");return b.innerHTML=a,r.append(b.firstElementChild),b.firstElementChild};s.addEventListener("keyup",function(c){if("Enter"===c.code&&0<s.value.length){var a=new p(s.value);x.nuevoTodo(a),w(a),s.value=""}}),r.addEventListener("click",function(d){var a=d.target.parentElement.parentElement,b=a.getAttribute("data-id");"input"===d.target.localName?(a.classList.toggle("completed"),x.marcarCompletado(b)):"button"===d.target.localName&&(x.eliminarTodo(b),r.removeChild(a))}),t.addEventListener("click",function(){x.eliminarCompletados();for(var c,a=r.children.length-1;0<=a;a--)c=r.children[a],c.classList.contains("completed")&&r.removeChild(c)}),u.addEventListener("click",function(g){var a=g.target.text;if(a){v.forEach(function(b){return b.classList.remove("selected")}),g.target.classList.add("selected");var b,c=m(r.children);try{for(c.s();!(b=c.n()).done;){var d=b.value;d.classList.remove("hidden");var e=d.classList.contains("completed");"Pendientes"===a?e&&d.classList.add("hidden"):"Completados"===a?e||d.classList.add("hidden"):void 0}}catch(b){c.e(b)}finally{c.f()}}});var x=new q;x.todos.forEach(w)},279:()=>{}},c={};(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})(),a(606)})();