(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{103:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(103),a(20)),i=a(31),u=a(23),m=a.n(u),s=a(38),p=a(8),b=a(190),d=a(174),g=a(173),f=a(189),E=a(176),h=a(175),v=a(55),j=a.n(v),O=a(140),y=a(170),C=a(172),S=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},submit:{margin:e.spacing(3,0,2)},form:{width:"100%",marginTop:e.spacing(3)}}})),k=r.a.createContext(),N=Object(y.a)((function(e){return{avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),x=function(){var e=N(),t=S(),a=Object(n.useContext)(k),c=Object(n.useState)(0),l=Object(p.a)(c,2),o=l[0],u=l[1],v=Object(n.useState)(0),y=Object(p.a)(v,2),x=y[0],w=y[1],W=function(){var e=Object(s.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user?user_name=".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return 200===(n=e.sent).nodeStatus?w(!0):401===n.nodeStatus?window.alert("You need to create an account Brah. Create an account or go to another site, Tanks :)"):404===n.nodeStatus&&window.alert("Something is busted on the server try again never :)"),e.abrupt("return");case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return x?r.a.createElement(i.a,{push:!0,to:"/dashboard"}):r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(j.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"User Name",name:"user_name",autoComplete:"use_name",autoFocus:!0,onKeyDown:function(e){"Enter"===e.key&&(W(o),u(""),e.target.value="")},onChange:function(e){u(e.target.value)}}),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(e){W(o),document.getElementById("email").value=""}},"Sign In"),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0},r.a.createElement(E.a,{variant:"body2",onClick:function(){return a.setDisplaySignUp(!0)}},"Don't have an account? Sign Up")))))},w=Object(y.a)((function(e){return{avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),W=function(e){var t=w(),a=S(),c=Object(n.useContext)(k),l=Object(n.useState)(""),o=Object(p.a)(l,2),u=o[0],v=o[1],y=Object(n.useState)(""),N=Object(p.a)(y,2),x=N[0],W=N[1],D=Object(n.useState)(!1),T=Object(p.a)(D,2),U=T[0],I=T[1],P=function(){var e=Object(s.a)(m.a.mark((function e(t){var a,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={userName:t},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)},e.prev=2,e.next=5,fetch("/user",n);case 5:return r=e.sent,e.next=8,r.json();case 8:return 200===(c=e.sent).nodeStatus?I(!0):400===c.nodeStatus?alert("Unable to add account for ".concat(t)):alert("Unknown error...this site is broken:("),e.abrupt("return");case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return U?r.a.createElement(i.a,{push:!0,to:"/dashboard"}):r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(b.a,{className:t.avatar},r.a.createElement(j.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),""!==u?(W(""),alert("Submitting name ".concat(u)),P(u)):W("Cannot leave user name blank")}},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"outlined",required:!0,fullWidth:!0,id:"user_name",label:"User Name",name:"user_name",autoComplete:"user_name",helperText:x,onChange:function(e){return v(e.target.value)}}))),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(h.a,{container:!0,justify:"flex-end"},r.a.createElement(h.a,{item:!0},r.a.createElement(E.a,{variant:"body2",onClick:function(){return c.setDisplaySignUp(!1)}},"Already have an account? Sign in"))))))},D=function(){var e=Object(n.useContext)(k);return r.a.createElement("div",{className:"login-page-container"},e.displaySignUp?r.a.createElement(W,null):r.a.createElement(x,null),r.a.createElement("img",{alt:"Purple Squirrel"}))},T=a(177),U=a(178),I=a(181),P=a(180),R=a(179),_=Object(y.a)({root:{maxWidth:345}});function F(e){var t=_(),a=Object(n.useState)(0),c=Object(p.a)(a,2),l=c[0],o=c[1];return l?r.a.createElement(i.a,{push:!0,to:e.element.redirect}):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(T.a,{className:t.root,style:{backgroundColor:e.element.backgroundColor}},r.a.createElement(U.a,null,r.a.createElement(R.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:e.element.image,title:"Contemplative Reptile"}),r.a.createElement(P.a,null,r.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{color:e.element.buttonColor}},e.element.name))),r.a.createElement(I.a,null,r.a.createElement(d.a,{size:"small",style:{color:e.element.buttonColor},onClick:function(){o(!0)}},"Go to Page"))),r.a.createElement("br",null))}var B=[{name:"Emma",image:"https://avatarfiles.alphacoders.com/213/213116.jpg",backgroundColor:"#D8D8D8",buttonColor:"#660000",redirect:"./"},{name:"Michelle",image:"https://avatarfiles.alphacoders.com/213/213116.jpg",backgroundColor:"#808080",buttonColor:"#cc0000",redirect:"./"},{name:"Mike",image:"https://avatarfiles.alphacoders.com/213/213116.jpg",backgroundColor:"#000000",buttonColor:"#ff0000",redirect:"./"}];function q(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Purple Squirrels"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Login Page"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/recipe"},"Recipe Page")))),r.a.createElement("div",null,B.map((function(e){return r.a.createElement(F,{element:e})}))))}var A=a(44),L=a(184),Y=a(188),G=a(187),J=a(183),M=a(185),V=a(186),z=a(141),K=a(182),$=Object(A.makeStyles)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},submit:{margin:e.spacing(3,0,2)},head:{backgroundColor:"#00bde5",color:"#FFFFFF"}}})),H=Object(A.withStyles)({colorPrimary:{backgroundColor:"#ccf6ff"},barColorPrimary:{backgroundColor:"#00bde5"}})(K.a);function Q(){return(Q=Object(s.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/recipes");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(p.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(""),s=Object(p.a)(m,2),b=(s[0],s[1]),d=$();return Object(n.useEffect)((function(){(function(){return Q.apply(this,arguments)})().then((function(e){c(e.Items),u(!0)})).catch((function(e){b(e.message),u(!0)}))}),[]),i?r.a.createElement(J.a,{component:z.a},r.a.createElement(L.a,{"aria-label":"simple table"},r.a.createElement(M.a,null,r.a.createElement(V.a,null,r.a.createElement(G.a,{className:d.head},"Recipe Id"))),r.a.createElement(Y.a,null,a.map((function(e,t){return r.a.createElement(V.a,{hover:!0,key:t},r.a.createElement(G.a,{component:"th",scope:"row"},e.recipe_id))}))))):r.a.createElement("div",null,r.a.createElement(H,null))},Z=a(36),ee=a(86),te=a.n(ee),ae=Object(y.a)((function(e){return{avatar:{margin:e.spacing(1),backgroundColor:e.palette.success.light}}}));function ne(){var e=ae(),t=S(),a=Object(n.useState)(""),c=Object(p.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(""),m=Object(p.a)(u,2),s=m[0],E=m[1],h=Object(n.useState)(""),v=Object(p.a)(h,2),j=v[0],y=v[1],k=Object(n.useState)(""),N=Object(p.a)(k,2),x=N[0],w=N[1],W=Object(n.useState)(""),D=Object(p.a)(W,2),T=D[0],U=D[1],I=Object(n.useState)([""]),P=Object(p.a)(I,2),R=P[0],_=P[1],F=Object(n.useState)([""]),B=Object(p.a)(F,2),q=B[0],A=B[1],L=Object(n.useState)(""),Y=Object(p.a)(L,2),G=Y[0],J=Y[1],M=Object(n.useState)(!1),V=Object(p.a)(M,2),z=V[0],K=V[1],$=function(){K(!0)};return z?r.a.createElement(i.a,{push:!0,to:"/recipe"}):r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(te.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Create Recipe"),r.a.createElement("form",{className:t.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),alert("Recipe name: ".concat(l,"\nRecipe ID: ").concat(G,"\nRecipe Intro: ").concat(s,"\nCook Time: ").concat(j,"\nPrep Time:").concat(x,"\nServings: ").concat(T,"\nIngredients: ").concat(R,"\nDirections: ").concat(q)),$()}},r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"recipeName",label:"Recipe Name",name:"recipeName",autoComplete:"recipeName",autoFocus:!0,onChange:function(e){return function(e){o(e.target.value),J(e.target.value.toLowerCase().split(" ").join("_"))}(e)}}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",multiline:!0,rows:"4",fullWidth:!0,name:"recipe_intro",label:"Recipe Description",id:"recipe_intro",autoComplete:"recipe_intro",onChange:function(e){return E(e.target.value)}}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"cookTime",label:"Cook Time",id:"cookTime",autoComplete:"cookTime",onChange:function(e){return y(e.target.value)}}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"prepTime",label:"Prep Time",id:"prepTime",autoComplete:"prepTime",onChange:function(e){return w(e.target.value)}}),r.a.createElement(f.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"servings",label:"Servings",id:"servings",autoComplete:"servings",onChange:function(e){return U(e.target.value)}}),R.map((function(e,t){return r.a.createElement(n.Fragment,{key:"".concat(t)},r.a.createElement(f.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"ingredient",label:"Ingredient",id:"ingredient",onChange:function(e){return function(e,t){var a=Object(Z.a)(R);a[e]=t.target.value,_(a)}(t,e)}}),r.a.createElement("div",{className:"form-group col-sm-2"},r.a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(e){var t=Object(Z.a)(R);t.splice(e,1),_(t)}(t)}},"-"),r.a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(){var e=Object(Z.a)(R);e.push(""),_(e)}()}},"+")))})),q.map((function(e,t){return r.a.createElement(n.Fragment,{key:"".concat(t)},r.a.createElement(f.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"direction",label:"Direction",id:"direction",onChange:function(e){return function(e,t){var a=Object(Z.a)(q);a[e]=t.target.value,A(a)}(t,e)}}),r.a.createElement("div",{className:"form-group col-sm-2"},r.a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(e){var t=Object(Z.a)(q);t.splice(e,1),A(t)}(t)}},"-"),r.a.createElement("button",{className:"btn btn-link",type:"button",onClick:function(){return function(){var e=Object(Z.a)(q);e.push(""),A(e)}()}},"+")))})),r.a.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Save Recipe"),r.a.createElement(d.a,{type:"button",fullWidth:!0,className:t.submit,variant:"contained",color:"secondary",href:"./recipe"},"Cancel"))))}var re=Object(A.makeStyles)((function(){return{recipeTitle:{textAlign:"center"}}}));var ce=function(){var e=Object(i.g)(),t=re();return r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"".concat(e.path,"/create")},r.a.createElement(ne,null)),r.a.createElement(i.b,{path:e.path},r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement("h1",{className:t.h1},"Your Recipes"),r.a.createElement(X,null))))},le=(a(135),a(87)),oe=function(e,t){switch(t.type){case"DISPLAY_SIGNUP":return function(e,t){return Object(le.a)({},t,{displaySignUp:e.displaySignUpBoolean})}(t,e);default:return e}},ie=function(e){var t=Object(n.useReducer)(oe,{displaySignUp:!1}),a=Object(p.a)(t,2),c=a[0],l=a[1],o={displaySignUp:c.displaySignUp,setDisplaySignUp:function(e){l({type:"DISPLAY_SIGNUP",displaySignUpBoolean:e})}};return r.a.createElement(k.Provider,{value:o},e.children)},ue=function(){return r.a.createElement(ie,null,r.a.createElement(k.Consumer,null,(function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/recipe"},r.a.createElement(ce,null)),r.a.createElement(i.b,{path:"/dashboard"},r.a.createElement(q,null)),r.a.createElement(i.b,{path:"/"},r.a.createElement(D,null)))))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,a){e.exports=a(136)}},[[98,1,2]]]);
//# sourceMappingURL=main.837cc89c.chunk.js.map