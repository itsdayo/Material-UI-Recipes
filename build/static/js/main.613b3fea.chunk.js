(this["webpackJsonpfe-skill-test-recipe-api"]=this["webpackJsonpfe-skill-test-recipe-api"]||[]).push([[0],{29:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),i=n.n(c),a=n(32),l=n(21),r=n(4),o=n(3),j=n(23),b=n(7),d=n(10),m=n(11),u=(n(29),n(25)),O=n.n(u),p=n(2),x=n(96),h=n(17),f=n.n(h);function g(){var e=Object(d.a)(['\n  position: "absolute";\n  margin-left: 400px;\n']);return g=function(){return e},e}function v(){var e=Object(d.a)(['\n  position: "absolute";\n  left: 4px;\n  top: 4px;\n']);return v=function(){return e},e}var y=m.a.button(v()),N=m.a.button(g());var T=function(e){Object(r.f)();var t=Object(c.useState)([]),n=Object(b.a)(t,2),i=n[0],a=n[1],l=Object(c.useState)(!1),d=Object(b.a)(l,2),m=d[0],u=d[1],h=Object(c.useState)([]),g=Object(b.a)(h,2),v=g[0],T=g[1],E=Object(c.useState)({}),k=Object(b.a)(E,2),S=k[0],I=k[1],L=Object(c.useState)({}),w=Object(b.a)(L,2),W=w[0],A=w[1];function R(){u(!1)}return Object(c.useEffect)((function(){f.a.get("http://localhost:3001/recipes").then((function(e){a(e.data)})).catch((function(e){console.log(e)})),T(e.location.state.foodItem.ingredients)}),[]),Object(s.jsxs)("div",{children:[Object(s.jsxs)(O.a,{isOpen:m,onRequestClose:R,contentLabel:"Example Modal",style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},ariaHideApp:!1,children:[Object(s.jsx)(y,{className:"btn btn-secondary",onClick:R,children:"X"}),Object(s.jsxs)("div",{className:"ingredient-form",children:[Object(s.jsx)("h4",{children:"Ingredient"}),Object(s.jsx)(p.c,{enableReinitialize:!0,initialValues:{amount:S.amount,measurement:S.measurement,name:S.name},onSubmit:function(e){e.uuid=Object(x.a)();for(var t=W,n=W.ingredients,s=0;s<=n.length-1;s++)if(n[s].uuid===S.uuid){n[s]=e;break}t.ingredients=n,console.log(t.uuid),f.a.put("http://localhost:3001/recipes/".concat(t.uuid),t).then((function(){return u(!1)}))},render:function(e){return Object(s.jsxs)(p.b,{children:[Object(s.jsxs)("div",{style:{position:"absolute",float:"left"},children:[Object(s.jsx)("label",{className:"form-label",children:"Amount"}),Object(s.jsx)(p.a,{name:"amount",type:"number",step:.1,placeholder:"How much?",className:"text-input"})]}),Object(s.jsxs)("div",{style:{marginLeft:250},children:[Object(s.jsx)("label",{className:"form-label",children:"Measurement"}),Object(s.jsx)(p.a,{name:"measurement",className:"text-input-ingredients",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({placeholder:"Ex. teaspoon"},t),{},{type:"text",className:"text-input"}))})}})]}),Object(s.jsxs)("div",{style:{postion:"absolute",marginTop:15},children:[Object(s.jsx)("label",{className:"form-label",children:"Name"}),Object(s.jsx)(p.a,{name:"name",type:"text",className:"text-input",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{placeholder:"Enter ingredient name",type:"text",className:"text-input"}))})}})]}),Object(s.jsx)(N,{className:"btn btn-primary",type:"submit",children:"Submit Ingredient"})]})}})]})]}),Object(s.jsxs)("div",{className:"ingredients-container",children:[Object(s.jsx)("h1",{className:"ingredients-header",children:"Ingredients "}),Object(s.jsxs)("div",{style:{marginTop:15},children:[Object(s.jsx)("ul",{children:v.map((function(t,n){return Object(s.jsxs)("li",{style:{marginTop:15},children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Name:"}),t.name," ",Object(s.jsx)("span",{style:{fontWeight:"bold",marginLeft:5},children:"Measurement:"}),t.measurement," ",Object(s.jsx)("span",{style:{fontWeight:"bold",marginLeft:5},children:"Amount:"}),t.amount,Object(s.jsx)("button",{onClick:function(){return n=e.location.state.foodItem,s=t,u(!0),console.log(s),I(s),void A(n);var n,s},style:{marginLeft:5},children:"Edit"})]},n)}))}),Object(s.jsx)("div",{style:{marginLeft:30,paddingBottom:30},children:Object(s.jsx)(p.c,{enableReinitialize:!0,initialValues:{},onSubmit:function(t){var n=t;n.uuid=Object(x.a)(),console.log(n);var s=i,c={};console.log(e);for(var a=0;a<=s.length-1;a++)s[a].uuid===e.location.state.foodItem.uuid&&(s[a].ingredients.push(n),c=s[a]);console.log(c),console.log(s),f.a.put("http://localhost:3001/recipes/".concat(e.location.state.foodItem.uuid),c).then().catch((function(e){console.log(e)})),T((function(){return Object(j.a)(c.ingredients)}))},children:function(e){return Object(s.jsxs)(p.b,{children:[Object(s.jsxs)("div",{style:{position:"absolute",float:"left"},children:[Object(s.jsx)("label",{className:"form-label",children:"Amount"}),Object(s.jsx)(p.a,{name:"amount",type:"number",step:.1,placeholder:"How much?",className:"text-input"})]}),Object(s.jsxs)("div",{style:{marginLeft:250},children:[Object(s.jsx)("label",{className:"form-label",children:"Measurement"}),Object(s.jsx)(p.a,{name:"measurement",className:"text-input-ingredients",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({placeholder:"Ex. teaspoon"},t),{},{type:"text",className:"text-input"}))})}})]}),Object(s.jsxs)("div",{style:{float:"left",postion:"absolute",marginTop:15},children:[Object(s.jsx)("label",{className:"form-label",children:"Name"}),Object(s.jsx)(p.a,{name:"name",type:"text",className:"text-input",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{placeholder:"Enter ingredient name",type:"text",className:"text-input"}))})}})]}),Object(s.jsx)("button",{type:"submit",style:{marginTop:15,marginLeft:20},className:"btn btn-warning",children:"Add Ingredient"})]})}})})]})]})]})};function E(){var e=Object(d.a)(['\n  position: "absolute";\n  margin-left: 250px;\n\n  background-color: gold;\n']);return E=function(){return e},e}function k(){var e=Object(d.a)(['\n  position: "absolute";\n  left: 4px;\n  top: 4px;\n']);return k=function(){return e},e}var S=m.a.button(k()),I=m.a.button(E());var L=function(e){var t=Object(r.f)(),n=Object(c.useState)([]),i=Object(b.a)(n,2),a=i[0],l=i[1],j=Object(c.useState)([]),d=Object(b.a)(j,2),m=(d[0],d[1]),u=Object(c.useState)(!1),x=Object(b.a)(u,2),h=x[0],g=x[1],v=Object(c.useState)({}),y=Object(b.a)(v,2),N=y[0],T=y[1],E=Object(c.useState)([]),k=Object(b.a)(E,2);function L(){g(!1)}function w(){}return k[0],k[1],Object(c.useEffect)((function(){f.a.get("http://localhost:3001/recipes").then((function(e){l(e.data),console.log(e.data)})).catch((function(e){console.log(e)})),f.a.get("http://localhost:3001/specials").then((function(e){m(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsxs)(O.a,{isOpen:h,onRequestClose:L,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},ariaHideApp:!1,children:[Object(s.jsx)(S,{className:"btn btn-secondary",onClick:L,children:"X"}),Object(s.jsx)("h2",{children:"Edit the food item"}),Object(s.jsx)(p.c,{enableReinitialize:!0,initialValues:{title:N.title,description:N.description,servings:N.servings,prepTime:N.prepTime,cookTime:N.cookTime},render:function(e){return Object(s.jsxs)(p.b,{children:[Object(s.jsxs)("div",{style:{float:"left"},children:[Object(s.jsx)("label",{className:"form-label",children:"Name"}),Object(s.jsx)(p.a,{name:"title",type:"text",className:"text-input",placeholder:"Enter a name",style:{position:"absolute"}}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{style:{position:"absolute",marginLeft:270,marginTop:-2},children:[Object(s.jsx)("label",{className:"form-label",children:"Description"}),Object(s.jsx)(p.a,{name:"description",type:"text",placeholder:"Enter a description",className:"text-input"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"servings",style:{position:"absolute",marginTop:19},children:[Object(s.jsx)("label",{className:"form-label",children:"Servings"}),Object(s.jsx)(p.a,{name:"servings",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{type:"number",className:"number-input"}))})}})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{style:{position:"absolute",float:"right",marginLeft:160},children:[Object(s.jsx)("label",{className:"form-label",children:"Prep Time (in mins)"}),Object(s.jsx)(p.a,{name:"prepTime",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{type:"number",className:"number-input"}))})}})]}),Object(s.jsxs)("div",{style:{marginLeft:370,marginTop:-1},children:[Object(s.jsx)("label",{className:"form-label",children:"Cook time (in mins)"}),Object(s.jsx)(p.a,{name:"cookTime",type:"number",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{type:"number",className:"number-input"}))})}})]})]}),Object(s.jsx)(I,{type:"submit",children:"Add Instruction"})]})}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Ingredients"}),Object(s.jsx)(p.c,{enableReinitialize:!0,initialValues:{},onSubmit:function(){},render:function(e){return Object(s.jsxs)(p.b,{children:[Object(s.jsxs)("div",{style:{position:"absolute",float:"left"},children:[Object(s.jsx)("label",{className:"form-label",children:"Amount"}),Object(s.jsx)(p.a,{name:"amount",type:"text",placeholder:"How much? Ex. 1 cup",className:"text-input"})]}),Object(s.jsxs)("div",{style:{marginLeft:250},children:[Object(s.jsx)("label",{className:"form-label",children:"Measurement"}),Object(s.jsx)(p.a,{name:"measurement",className:"text-input-ingredients",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({placeholder:"Ex. teaspoon"},t),{},{type:"text",className:"text-input"}))})}})]}),Object(s.jsxs)("div",{style:{postion:"absolute",marginTop:15},children:[Object(s.jsx)("label",{className:"form-label",children:"Name"}),Object(s.jsx)(p.a,{name:"name",type:"text",className:"text-input",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{placeholder:"Enter ingredient name",type:"text",className:"text-input"}))})}})]}),Object(s.jsx)("button",{type:"submit",children:"Add Ingredient"})]})}})]})]}),a.map((function(e,n){return Object(s.jsxs)("div",{className:"food-card",children:[Object(s.jsxs)("div",{className:"food-card-content",children:[void 0!=e.images?Object(s.jsx)("img",{className:"food-list-image",src:e.images.small,alt:"Sorry something went wrong",height:100,width:150}):Object(s.jsx)("img",{className:"food-list-image",src:"https://images.squarespace-cdn.com/content/v1/55ece940e4b048d1ed401c11/1450136257542-4DATU4KRB70MDENGJXJX/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/X%3A++The+Unknown",height:100,width:150}),Object(s.jsxs)("div",{className:"food-list-description",children:[Object(s.jsxs)("div",{className:"food-card-text",children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Name:"})," ",e.title," "]}),Object(s.jsxs)("div",{className:"food-card-text",children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Description:"})," ",e.description]}),Object(s.jsxs)("div",{className:"food-card-text",children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Serving:"})," ",e.servings,Object(s.jsx)("span",{style:{fontWeight:"bold",marginLeft:5},children:"Prep Time:"}),Object(s.jsxs)("span",{style:{marginLeft:2},children:[" ",e.prepTime," "]}),Object(s.jsx)("span",{style:{fontWeight:"bold",marginLeft:5},children:"Cook time:"})," ",e.cookTime]}),Object(s.jsxs)("div",{className:"food-card-text",children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Posted on:"})," ",e.postDate]}),Object(s.jsxs)("div",{className:"food-card-text",children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Edited on:"}),Object(s.jsx)("span",{style:{marginLeft:3},children:e.editDate})]})]})]}),Object(s.jsxs)("div",{className:"food-card-buttons",children:[Object(s.jsxs)("button",{style:{},className:"btn btn-success",onClick:function(){return function(e){g(!0),T(e),console.log(e)}(e)},children:["Edit"," "]}),Object(s.jsx)("button",{style:{marginLeft:10},className:" btn btn-warning",onClick:w,children:"View Directions"}),Object(s.jsxs)("button",{style:{marginLeft:10,position:"absolute",float:"left"},className:"btn btn-dark",onClick:function(){return function(e){t.push({pathname:"/ingredients",state:{foodItem:e}})}(e)},children:[" ","View Ingredients"]})]})]},n)}))]})};function w(){var e=Object(d.a)(["\n  margin-top: 20px;\n"]);return w=function(){return e},e}function W(){var e=Object(d.a)(['\n  position: "absolute";\n  margin-left: 400px;\n']);return W=function(){return e},e}function A(){var e=Object(d.a)(['\n  position: "absolute";\n  margin-left: 400px;\n']);return A=function(){return e},e}function R(){var e=Object(d.a)(['\n  position: "absolute";\n  margin-left: 430px;\n  margin-top: 40px;\n']);return R=function(){return e},e}var C=m.a.button(R()),D=m.a.button(A()),V=m.a.button(W()),J=m.a.div(w());var z=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),l=Object(b.a)(a,2),d=l[0],m=l[1],u=Object(r.f)();return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(p.c,{enableReinitialize:!0,initialValues:{},onSubmit:function(e){var t=e;t.ingredients=n,t.directions=d,f.a.post("http://localhost:3001/recipes",t).then((function(e){u.push("/")})).catch((function(e){console.log(e)}))},render:function(e){return Object(s.jsxs)(p.b,{id:"foodForm",children:[Object(s.jsxs)("div",{style:{float:"left"},children:[Object(s.jsx)("label",{className:"form-label",children:"Name"}),Object(s.jsx)(p.a,{name:"title",type:"text",className:"text-input",placeholder:"Enter a name",style:{position:"absolute"}}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{style:{position:"absolute",marginLeft:270,marginTop:-2},children:[Object(s.jsx)("label",{className:"form-label",children:"Description"}),Object(s.jsx)(p.a,{name:"description",type:"text",placeholder:"Enter a description",className:"text-input"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"servings",style:{position:"absolute",marginTop:19},children:[Object(s.jsx)("label",{className:"form-label",children:"Servings"}),Object(s.jsx)(p.a,{name:"servings",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{type:"number",className:"number-input"}))})}})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{style:{position:"absolute",marginLeft:270},children:[Object(s.jsx)("label",{className:"form-label",children:"Prep Time (in mins)"}),Object(s.jsx)(p.a,{name:"prepTime",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{type:"number",className:"number-input"}))})}})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{style:{marginTop:15},children:[Object(s.jsx)("label",{className:"form-label",children:"Cook time (in mins)"}),Object(s.jsx)(p.a,{name:"cookTime",type:"number",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{type:"number",className:"number-input"}))})}})]})]})]})}})}),Object(s.jsx)(J,{children:Object(s.jsx)("hr",{})}),Object(s.jsxs)("div",{className:"ingredient-form",children:[Object(s.jsx)("h4",{children:"Ingredients"}),Object(s.jsx)(p.c,{enableReinitialize:!0,initialValues:{},onSubmit:function(e){var t=n;e.uuid=Object(x.a)(),t.push(e),i((function(){return Object(j.a)(t)})),console.log(n)},render:function(e){return Object(s.jsxs)(p.b,{children:[Object(s.jsxs)("div",{style:{position:"absolute",float:"left"},children:[Object(s.jsx)("label",{className:"form-label",children:"Amount"}),Object(s.jsx)(p.a,{name:"amount",type:"number",step:.1,placeholder:"How much?",className:"text-input"})]}),Object(s.jsxs)("div",{style:{marginLeft:250},children:[Object(s.jsx)("label",{className:"form-label",children:"Measurement"}),Object(s.jsx)(p.a,{name:"measurement",className:"text-input-ingredients",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({placeholder:"Ex. teaspoon"},t),{},{type:"text",className:"text-input"}))})}})]}),Object(s.jsxs)("div",{style:{postion:"absolute",marginTop:15},children:[Object(s.jsx)("label",{className:"form-label",children:"Name"}),Object(s.jsx)(p.a,{name:"name",type:"text",className:"text-input",children:function(e){var t=e.field;e.form,e.meta;return Object(s.jsx)("span",{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),{},{placeholder:"Enter ingredient name",type:"text",className:"text-input"}))})}})]}),Object(s.jsx)(D,{className:"btn btn-secondary ",type:"submit",children:"Submit Ingredient"})]})}}),Object(s.jsx)("ul",{children:n.map((function(e,t){return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Name:"})," ",e.name," ",Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Measurement:"})," ",e.measurement," ",Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Amount:"})," ",e.amount," "]},t)}))})]}),Object(s.jsx)(J,{children:Object(s.jsx)("hr",{})}),Object(s.jsxs)("div",{className:"directions-form",children:[Object(s.jsx)("h4",{children:"Directions"}),Object(s.jsx)(p.c,{enableReinitialize:!0,initialValues:{},onSubmit:function(e){var t=d;"true"===e.option&&(e.option="Yes"),"false"===e.option&&(e.option="No"),t.push(e),m((function(){return Object(j.a)(t)}))},render:function(e){return Object(s.jsxs)(p.b,{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{style:{bottom:5},className:"form-label",children:"Instruction"}),Object(s.jsx)(p.a,{name:"instruction",type:"text",rows:"3",maxLength:"1000",placeholder:"Enter an instruction",component:"textarea",className:"textarea"})]}),Object(s.jsxs)("div",{style:{marginTop:15},children:[Object(s.jsx)("label",{className:"form-label",children:"Optional"}),Object(s.jsxs)(p.a,{name:"option",component:"select",children:[Object(s.jsx)("option",{value:"",children:"---Select if it is Optional ---"}),Object(s.jsx)("option",{value:"true",children:"Yes"}),Object(s.jsx)("option",{value:"false",children:"No"})]})]}),Object(s.jsx)(V,{className:"btn btn-secondary",type:"submit",children:"Add Instruction"})]})}}),Object(s.jsx)("ul",{children:d.map((function(e,t){return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Instruction"})," ",e.instruction," ",Object(s.jsx)("span",{style:{fontWeight:"bold"},children:"Optional"})," ",e.option," "]})}))}),Object(s.jsx)(J,{children:Object(s.jsx)("hr",{})})]}),Object(s.jsxs)(C,{className:"btn btn-primary",form:"foodForm",type:"submit",children:["Add Food"," "]})]})};function M(){var e=Object(d.a)(["\n  margin-top: 10px;\n  margin-left: 5px;\n"]);return M=function(){return e},e}var B=m.a.button(M());var U=function(){return Object(s.jsxs)(i.a.Fragment,{children:[Object(s.jsx)(B,{className:"btn btn-info",children:"View the specials "}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{style:{marginTop:5},children:[Object(s.jsx)("div",{className:"food-list",children:Object(s.jsx)("div",{className:"food-list-content",children:Object(s.jsx)(L,{})})}),Object(s.jsx)("div",{className:"food-form",children:Object(s.jsx)("div",{className:"food-form-content",children:Object(s.jsx)(z,{})})})]})]})},X=function(){return Object(s.jsx)(l.a,{children:Object(s.jsxs)(r.c,{children:[Object(s.jsx)(r.a,{exact:!0,path:"/",component:U}),Object(s.jsx)(r.a,{path:"/ingredients",component:T})]})})};Object(a.render)(Object(s.jsx)(X,{}),document.querySelector("#root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.613b3fea.chunk.js.map