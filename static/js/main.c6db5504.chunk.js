(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__UTYiV",Label:"BuildControl__Label__35lca",Less:"BuildControl__Less__1307R",More:"BuildControl__More__11ddV",BuildControls:"BuildControl__BuildControls__2kVsd"}},13:function(e,t,a){e.exports={BreadBottom:"BurgerIngredients__BreadBottom__38SV6",BreadTop:"BurgerIngredients__BreadTop__3kiQU",Seeds1:"BurgerIngredients__Seeds1__26yLL",Seeds2:"BurgerIngredients__Seeds2__3-VSz",Meat:"BurgerIngredients__Meat__1HwEd",Cheese:"BurgerIngredients__Cheese__oYtpJ",Salad:"BurgerIngredients__Salad__1ShXC",Bacon:"BurgerIngredients__Bacon__1Arl9"}},26:function(e,t,a){e.exports={App:"index__App__25spO","App-logo":"index__App-logo__13boJ","App-logo-spin":"index__App-logo-spin__3YoN-","App-header":"index__App-header__3vAv1","App-link":"index__App-link__l-R5D",overlay:"index__overlay__2rmPK"}},39:function(e,t,a){e.exports={Burger:"Burger__Burger__eMX-P"}},45:function(e,t,a){e.exports=a(91)},50:function(e,t,a){e.exports={App:"App_App__16ZpL","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv","App-header":"App_App-header__xLkWl","App-link":"App_App-link__3FsH9",overlay:"App_overlay__1bKt8"}},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),i=a(26),s=a.n(i),c=a(5),d=a.n(c),m=(a(50),a(22)),u=a(11),p=a(44),g=function(e){var t=e.component,a=Object(p.a)(e,["component"]);return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return localStorage.getItem("email")?r.a.createElement(t,e):r.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},_=a(23),h=a(15),b=a(16),E=a(18),f=a(17),v=a(19),y=a(94),B=a(95),k=a(35),S=a(4),A=a.n(S),C=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(E.a)(this,Object(f.a)(t).call(this))).handleChange=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.state={password:"",email:"",loading:!1},e}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t={password:this.state.password,email:this.state.email},a=this.state.loading;return r.a.createElement("div",null,a?r.a.createElement("div",null,r.a.createElement(k.SemipolarLoading,null),r.a.createElement("div",{className:A()(s.a.overlay)})):"",r.a.createElement(y.a,{md:{span:4,offset:4},style:{height:"100vh"}},r.a.createElement("div",{style:{height:"100vh",display:"flex",alignItems:"center"}},r.a.createElement(B.a,{className:A()(d.a["mx-auto"],d.a["my-auto"],d.a.shadow,d.a["p-3"],d.a["mb-5"],d.a["bg-white"],d.a.rounded),style:{minWidth:"18rem",height:"auto",padding:"30px",display:"flex",justifyContent:"center"}},r.a.createElement("form",{id:"formlg",onSubmit:function(a){e.setState({loading:!0},function(){}),a.preventDefault(),fetch("https://reqres.in/api/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(t){return console.log({sts:t}),400===t.status?(e.setState({loading:!1}),e.props.history.push("/login")):200===t.status?(e.setState({loading:!1}),localStorage.setItem("email",e.state.email),e.props.history.push("/home"),alert(t.status)):(e.props.history.push("/login"),alert("network occured error")),t.json()}).then(function(e){null!=e.token&&localStorage.setItem("token",e.token)})}},r.a.createElement("h3",null,"Sign In"),r.a.createElement("div",{className:A()(d.a["form-group"])},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{onChange:this.handleChange,name:"email",type:"email",className:A()(d.a["form-control"]),placeholder:"Enter email"})),r.a.createElement("div",{className:A()(d.a["form-group"])},r.a.createElement("label",null,"Password"),r.a.createElement("input",{onChange:this.handleChange,name:"password",type:"password",className:A()(d.a["form-control"]),placeholder:"Enter password"})),r.a.createElement("div",{className:A()(d.a["form-group"])},r.a.createElement("div",{className:A()(d.a["custom-control"],d.a["custom-checkbox"])},r.a.createElement("input",{type:"checkbox",className:A()(d.a["custom-control-input"]),id:"customCheck1"}),r.a.createElement("label",{className:A()(d.a["custom-control-label"]),htmlFor:"customCheck1"},"Remember me"))),r.a.createElement("button",{type:"submit",className:A()(d.a.btn,d.a["btn-primary"],d.a["btn-block"])},"Submit"))))))}}]),t}(n.Component),j=a(20),O=a(40),w=a(41),N=a(13),x=a.n(N),I=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:x.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:x.a.BreadTop});break;case"salad":e=r.a.createElement("div",{className:x.a.Salad});break;case"cheese":e=r.a.createElement("div",{className:x.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:x.a.Bacon});break;case"meat":e=r.a.createElement("div",{className:x.a.Meat})}return e}}]),t}(n.Component),L=a(39),M=a.n(L),P=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(w.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(I,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return r.a.createElement("div",{className:M.a.Burger},r.a.createElement(I,{type:"bread-top"}),t,r.a.createElement(I,{type:"bread-bottom"}))},H=a(12),T=a.n(H),J=function(e){return r.a.createElement("div",{className:T.a.BuildControl},r.a.createElement("div",{className:T.a.Label},e.label),r.a.createElement("button",{onClick:e.removed,className:T.a.Less,disabled:e.disabled},"Less"),r.a.createElement("button",{onClick:e.added,className:T.a.More},"More"))},R=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],V=function(e){return r.a.createElement("div",{className:T.a.BuildControls},R.map(function(t){return r.a.createElement(J,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}))},F={salad:.5,cheese:.4,meat:1.3,bacon:.7},W=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(j.a)({},a.state.ingredients);n[e]=t;var r=F[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n})},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(j.a)({},a.state.ingredients);r[e]=n;var l=F[e],o=a.state.totalPrice-l;a.setState({totalPrice:o,ingredients:r})}},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=Object(j.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{ingredients:this.state.ingredients}),r.a.createElement(V,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e}))}}]),t}(n.Component),Y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"toolbar, sidedrawer, backdrop"),r.a.createElement("main",null,e.childern,r.a.createElement(W,null)))};function D(e){var t=Object(n.useState)({loggedStatus:"Belum Login"}),a=Object(O.a)(t,2),l=a[0],o=a[1];Object(n.useEffect)(function(){null!=localStorage.getItem("email")&&o(Object(j.a)({},l,{loggedStatus:"Sudah login"}))},{});return r.a.createElement("div",null,r.a.createElement("p",null,"Status :"),r.a.createElement("br",null),r.a.createElement("h3",null,l.loggedStatus),r.a.createElement("br",null),r.a.createElement(Y,null,r.a.createElement(W,null),r.a.createElement(P,null)),r.a.createElement("h1",null,"Logout"),r.a.createElement("button",{type:"submit",onClick:function(){alert("logout"),localStorage.clear(),window.location.href="/home"}},"Submit"))}var K=function(){return r.a.createElement(m.a,null,r.a.createElement(u.b,{path:"/(login|)",component:C}),r.a.createElement(g,{path:"/home",component:D}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.c6db5504.chunk.js.map