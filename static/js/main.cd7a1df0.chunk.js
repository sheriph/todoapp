(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{155:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(40),c=t.n(l),i=(t(85),t(9)),s=t.n(i),o=t(41),u=t(22),m=t(13),d=t(14),p=t(16),h=t(15),w=(t(38),t(64),t(24)),b=t(79),g=t(75),v=t.n(g),f=function(e){var a=e.item,t=e.index,n=e.updateValue,l=(e.arrayValue,e.showOrHide),c=e.handleChangeUpdate,i=e.handleChangeSubmit,s=e.hideModal;return r.a.createElement("div",null,r.a.createElement("div",{className:l?"w3-modal":""},r.a.createElement("div",{className:"w3-modal-content modalpop w3-card-4 w3-animate-zoom"},r.a.createElement("div",{className:"w3-center"},r.a.createElement("br",null),r.a.createElement("span",{onClick:s,className:"w3-button w3-xlarge w3-hover-red w3-display-topright"},"\xd7")),r.a.createElement("p",{className:"w3-center"},"Update Todo"),r.a.createElement("form",{item:a,index:t,className:"w3-container",onSubmit:i},r.a.createElement("input",{className:"w3-input w3-border",type:"text",name:"todo",value:n,onChange:c}),r.a.createElement("input",{className:"w3-button w3-blue w3-hover-blue-gray fullbutton",type:"submit",value:"Update",name:"submit"})))))},E=function(e){var a=e.value,t=e.handleChange,n=e.handleSubmit;return r.a.createElement("div",{className:"w3-container"},r.a.createElement("form",{className:"w3-container w3-margin-top",onSubmit:n},r.a.createElement("label",null,"Enter to do events"),r.a.createElement("input",{className:"w3-input w3-border w3-light-grey",type:"text",name:"todo",value:a,onChange:t}),r.a.createElement("input",{className:"w3-buton w3-circle w3-black",value:"+",type:"submit",name:"submit"})))},S=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).handleDateChange=function(a){e.setState({startDate:a})},e.handleChange=function(a){var t=a.target.value;e.setState({value:t})},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=t.value,r=t.arrayValue;n&&(e.setState({arrayValue:[].concat(Object(b.a)(r),[n])}),e.setState({value:""}))},e.handleChangeUpdate=function(a){var t=a.target.value;e.setState({updateValue:t})},e.handleChangeSubmit=function(a){a.preventDefault();var t=e.state,n=t.index,r=t.updateValue,l=t.arrayValue;e.state.updateValue&&(l.splice(n,1,r),e.setState({arrayValue:l,updateValue:"",showOrHide:!0}))},e.hideModal=function(a){e.setState({showOrHide:!0})},e.state={value:"",updateValue:"",arrayValue:[],startDate:new Date,showOrHide:!0,index:""},e}return Object(d.a)(t,[{key:"componentWillMount",value:function(){this.setState({arrayValue:JSON.parse(window.localStorage.getItem("todoapp")),startDate:new Date(JSON.parse(window.localStorage.getItem("todoappdate"))||new Date)})}},{key:"render",value:function(){var e=this,a=this.state,t=a.value,n=a.updateValue,l=a.arrayValue,c=a.startDate,i=a.showOrHide;return window.localStorage.setItem("todoapp",JSON.stringify(l)),r.a.createElement("div",{className:"w3-container"},r.a.createElement(E,{value:t,handleSubmit:this.handleSubmit,handleChange:this.handleChange}),l.map((function(a,t,s){return r.a.createElement("div",{key:t,className:"w3-container"},r.a.createElement("div",{className:"w3-card-4 w3-margin-top w3-margin-bottom"},r.a.createElement("div",{className:"w3-container w3-blue"},r.a.createElement("span",{className:"iconright cursor",onClick:function(a){return e.setState({showOrHide:!1,index:t})}},"\u270d"),r.a.createElement("span",{className:"iconright cursor",onClick:function(a){s.splice(t,1),e.setState({arrayValue:s})}},"\u2612")),r.a.createElement("div",{className:"w3-container w3-margin-top w3-margin-bottom"},a),r.a.createElement("div",{className:"w3-container w3-yellow"},r.a.createElement(v.a,{className:"w3-input w3-animate-input w3-yellow cursor",selected:c,onChange:function(a){e.setState({startDate:a}),window.localStorage.setItem("todoappdate",JSON.stringify(a))},showTimeSelect:!0,timeFormat:"HH:mm",injectTimes:[],dateFormat:"@ h:mm aa MMMM d, yyyy",withPortal:!0})),r.a.createElement(f,{hideModal:e.hideModal,handleChangeSubmit:e.handleChangeSubmit,handleChangeUpdate:e.handleChangeUpdate,showOrHide:i,item:a,index:t,updateValue:n,arrayValue:l})))})))}}]),t}(r.a.Component),N=t(23),y=t(37),O=t.n(y),C=(t(148),t(151),function(){var e=Object(u.a)(s.a.mark((function e(a,t){var n,r,l,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return n=k.doc("users/".concat(a.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=a.displayName,l=a.email,c=new Date,e.prev=9,e.next=12,n.set(Object(o.a)({displayName:r,email:l,createdAt:c},t));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log(e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(a,t){return e.apply(this,arguments)}}());O.a.initializeApp({apiKey:"AIzaSyAx0VLU8icNKHkP2LN8t6-dNU8hGcLTVQQ",authDomain:"todoapp-2f7d8.firebaseapp.com",databaseURL:"https://todoapp-2f7d8.firebaseio.com",projectId:"todoapp-2f7d8",storageBucket:"todoapp-2f7d8.appspot.com",messagingSenderId:"355643516000",appId:"1:355643516000:web:8bb557789ef3a5a5c38f05"});var x=O.a.auth(),k=O.a.firestore(),U=new O.a.auth.GoogleAuthProvider;U.setCustomParameters({prompt:"select_account"});var j=function(e){var a=e.currentUser,t=e.currentUserReset;return r.a.createElement("div",{className:"w3-bar w3-border w3-green w3-xlarge"},r.a.createElement(N.b,{to:"/home",className:"w3-bar-item w3-button"},"HOME"),r.a.createElement(N.b,{to:"/home",className:"w3-bar-item w3-button"},"HOME"),a?r.a.createElement(N.b,{onClick:function(e){t(),x.signOut()},to:"/signin",className:"w3-bar-item w3-button"},"SIGN OUT"):r.a.createElement(N.b,{to:"/signin",className:"w3-bar-item w3-button"},"SIGN IN"),a?r.a.createElement("div",{className:"bigspan w3-right"},"Welcome ",a.displayName):"")},I=t(30),V=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).handleSignInChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(I.a)({},n,r))},e.handleSignInSubmit=function(){var a=Object(u.a)(s.a.mark((function a(t){var n,r,l;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n=e.state,r=n.email,l=n.password,a.prev=2,a.next=5,x.signInWithEmailAndPassword(r,l);case 5:e.setState({email:"",password:""}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),console.log("SignIn -> handleSignInSubmit -> err",a.t0);case 11:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}(),e.handleSignInSubmitWithGoogle=function(e){e.preventDefault(),x.signInWithPopup(U)},e.state={email:"",password:""},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return r.a.createElement("div",{className:"w3-container"},r.a.createElement("div",{className:"w3-container w3-teal"},r.a.createElement("h2",null,"Sign In with your email and password")),r.a.createElement("form",{className:"w3-container"},r.a.createElement("label",{className:"w3-text-teal"},r.a.createElement("b",null,"Email")),r.a.createElement("input",{className:"w3-input w3-border w3-light-grey",type:"email",name:"email",value:a,onChange:this.handleSignInChange}),r.a.createElement("label",{className:"w3-text-teal"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{className:"w3-input w3-border w3-light-grey",type:"password",value:t,name:"password",onChange:this.handleSignInChange}),r.a.createElement("button",{className:"w3-btn w3-blue-grey w3-margin-top",onClick:this.handleSignInSubmit},"Login"),r.a.createElement("button",{className:"w3-btn w3-blue w3-margin-top w3-margin-left",onClick:this.handleSignInSubmitWithGoogle},"Sign in with GOOGLE")))}}]),t}(r.a.Component),D=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).handleSignUpChange=function(a){var t=a.target,n=t.value,r=t.name;e.setState(Object(I.a)({},r,n))},e.handleSignUpSubmit=function(){var a=Object(u.a)(s.a.mark((function a(t){var n,r,l,c,i,o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n=e.state,r=n.email,l=n.password,c=n.displayName,a.prev=2,a.next=5,x.createUserWithEmailAndPassword(r,l);case 5:return i=a.sent,o=i.user,a.next=9,C(o,{displayName:c});case 9:e.setState({email:"",password:"",dispayName:""}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(2),console.log("SignUp -> handleSignUpSubmit -> err",a.t0);case 15:case"end":return a.stop()}}),a,null,[[2,12]])})));return function(e){return a.apply(this,arguments)}}(),e.state={email:"",password:"",displayName:""},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.displayName;return r.a.createElement("div",null,r.a.createElement("div",{className:"w3-container w3-teal"},r.a.createElement("h2",null,"Sign Up")),r.a.createElement("form",{className:"w3-container",onClick:this.handleSignUpSubmit},r.a.createElement("label",{className:"w3-text-teal"},r.a.createElement("b",null,"Email")),r.a.createElement("input",{className:"w3-input w3-border w3-light-grey",type:"email",name:"email",value:a,onChange:this.handleSignUpChange}),r.a.createElement("label",{className:"w3-text-teal"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{className:"w3-input w3-border w3-light-grey",type:"password",value:t,name:"password",onChange:this.handleSignUpChange}),r.a.createElement("label",{className:"w3-text-teal"},r.a.createElement("b",null,"Full Name")),r.a.createElement("input",{className:"w3-input w3-border w3-light-grey",type:"text",name:"displayName",value:n,onChange:this.handleSignUpChange}),r.a.createElement("button",{className:"w3-btn w3-blue-grey"},"Sign Up")))}}]),t}(r.a.Component),M=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"w3-container"},r.a.createElement(V,null),r.a.createElement("hr",null),r.a.createElement(D,null))}}]),t}(r.a.Component),A=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).unsubscribeFromAuth=null,e.currentUserReset=function(){e.setState({currentUser:null})},e.state={currentUser:null},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=x.onAuthStateChanged(function(){var a=Object(u.a)(s.a.mark((function a(t){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C(t);case 2:if(n=a.sent){a.next=5;break}return a.abrupt("return");case 5:try{n.onSnapshot((function(a){e.setState({currentUser:Object(o.a)({id:a.id},a.data())},(function(){return console.log(e.state.currentUser)}))}))}catch(r){console.log("App -> componentDidMount -> err",r)}case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return r.a.createElement("div",{className:"w3-container"},r.a.createElement(j,{currentUserReset:this.currentUserReset,currentUser:this.state.currentUser}),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/home",component:S}),r.a.createElement(w.a,{exact:!0,path:"/home",component:S}),r.a.createElement(w.a,{exact:!0,path:"/signin",component:M})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.a,null,r.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,a,t){},80:function(e,a,t){e.exports=t(155)},85:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.cd7a1df0.chunk.js.map