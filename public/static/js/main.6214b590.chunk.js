(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){e.exports=a(68)},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(35),c=a.n(r),s=a(1),i=a(2),o=a(3),m=a(5),u=a(4),p=a(21),d=a.n(p).a.create({baseURL:"https://trainingclub.herokuapp.com",withCredentials:!0});function h(e){if(e.response)throw console.log(e.response&&e.response.data),e;throw e}var v=function(e){return d.post("/api/auth/signup",e).then((function(e){return e.data})).catch(h)},f=function(e){return console.log(e),d.post("/api/auth/signin",e).then((function(e){return e.data})).catch(h)},E=function(){return d.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(h)},g=function(){return d.get("/api/auth/logout").then((function(e){return e.data})).catch(h)},y=function(){return d.get("/api/events").then((function(e){return e.data})).catch(h)},b=function(){return d.get("/api/events/mine").then((function(e){return e.data})).catch(h)},N=function(e){return console.log(e),d.get("/api/events/".concat(e)).then((function(e){return e.data})).catch(h)},C=function(e){return d.get("/api/messages/by-event/".concat(e)).then((function(e){return e.data})).catch(h)},O=function(){return d.get("/api/messages/mine").then((function(e){return e.data})).catch(h)},j=function(e,t){return d.post("/api/messages/by-event/".concat(e),t).then((function(e){return e.data})).catch(h)},x=function(e){return d.post("/api/events",e).then((function(e){return e.data})).catch(h)},k=function(e){return d.delete("/api/events/".concat(e)).then((function(e){return e.data})).catch(h)},I=function(e,t){return d.patch("/api/events/".concat(e),t).then((function(e){return e.data})).catch(h)},S=l.a.createContext(),w=S,F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return l.a.createElement(S.Provider,{value:e},this.props.children)}}]),a}(n.Component),L=a(6),A=function(e){return function(t){return l.a.createElement(S.Consumer,null,(function(a){return l.a.createElement(e,Object.assign({},t,{context:a}))}))}},D=(a(60),A((function(e){var t=e.context;return l.a.createElement("nav",{className:"NavMain"},l.a.createElement(s.c,{exact:!0,to:"/"},l.a.createElement("h3",{className:"logo"},"App name")),l.a.createElement("ul",{className:"nav-list"},t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(s.c,{to:"/profile"},t.user&&t.user.email)),l.a.createElement("li",null,l.a.createElement("p",{onClick:function(){g().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))}},"Logout"))),!t.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(s.c,{to:"/signin"},"Log in")),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/signup"},"Create account")))))})),a(17),A((function(e){var t=e.context;return l.a.createElement("nav",{className:"NavTop"},t.isLoggedIn&&l.a.createElement(s.c,{exact:!0,to:"/events",className:"link"},l.a.createElement("i",{className:"fas fa-home"})),!t.isLoggedIn&&l.a.createElement("h1",null,"Catch me if you train"))}))),M=(a(20),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement("div",{className:"auth"},l.a.createElement("button",null,l.a.createElement(s.c,{to:"/signup"},"Sign up")),l.a.createElement("button",null,l.a.createElement(s.c,{to:"/signin"},"Sign in"))))}}]),a}(l.a.Component)),P=a(11),U=(a(66),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(P.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),f(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/events")})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.context.user?l.a.createElement(L.a,{to:"/events"}):l.a.createElement("section",null,l.a.createElement(s.c,{exact:!0,to:"/",className:"NavTop"},l.a.createElement("i",{className:"fas fa-home"})),l.a.createElement("form",{className:"form",onChange:this.handleChange,onSubmit:this.handleSubmit},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",name:"email",autoFocus:!0})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",name:"password",required:!0})),l.a.createElement("button",null,"Submit")))}}]),a}(n.Component));U.contextType=S;var _=Object(L.g)(U),T=function(e){return l.a.createElement(_,null)},R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={username:"",email:"",password:"",profileImg:"/Profil.PNG"},e.handleChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(P.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),v(e.state).then((function(t){e.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.context.user?l.a.createElement(L.a,{to:"/events"}):l.a.createElement("section",null,l.a.createElement(s.c,{exact:!0,to:"/",className:"NavTop"},l.a.createElement("i",{className:"fas fa-home"})),l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.username,type:"text",id:"username",name:"username",autoFocus:!0})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:this.handleChange,value:this.state.password,type:"password",id:"password",name:"password"})),l.a.createElement("div",{className:"field upload"},l.a.createElement("label",{className:"label",htmlFor:"profileImg"},"Upload a profile picture ",l.a.createElement("span",null,"-------"),l.a.createElement("i",{className:"icon fas fa-cloud-upload-alt"})),l.a.createElement("input",{className:"hidden",type:"file",id:"profileImg",name:"profileImg",ref:this.imageRef})),l.a.createElement("button",null,"Submit"),l.a.createElement("br",null),l.a.createElement("p",null,"Already have an account ?",l.a.createElement(s.b,{className:"signin",to:"/signin"}," ","Sign in"))))}}]),a}(n.Component);R.contextType=S;var Y=Object(L.g)(R),B=function(e){return l.a.createElement(Y,null)},W=a(37),J=A((function(e){var t=e.component,a=e.context,n=Object(W.a)(e,["component","context"]);return a.isLoading?null:a.isLoggedIn?l.a.createElement(L.b,Object.assign({},n,{render:function(e){return l.a.createElement(t,e)}})):l.a.createElement(L.a,{to:"/signin"})})),V=function(e){return l.a.createElement("nav",{className:"NavBottom"},l.a.createElement(s.c,{exact:!0,to:"/created/coming-events",className:"link"},l.a.createElement("i",{className:"fas fa-user-circle",style:{color:"/created/coming-events"===e.path?"#ffa41b":"#0c084c"}})),l.a.createElement(s.c,{exact:!0,to:"/events/create",className:"link"},l.a.createElement("i",{className:"fas fa-plus-circle",style:{color:"/events/create"===e.path?"#ffa41b":"#0c084c"}})),l.a.createElement(s.c,{exact:!0,to:"/messages/my-messages",className:"link"},l.a.createElement("i",{className:"fas fa-comments",style:{color:"/messages/my-messages"===e.path?"#ffa41b":"#0c084c"}})),l.a.createElement(s.c,{exact:!0,to:"/more",className:"link"},l.a.createElement("i",{className:"fas fa-bars",style:{color:"/more"===e.path?"#ffa41b":"#0c084c"}})))},q=(a(15),A((function(e){e.context;return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement("div",{className:"middle"},l.a.createElement("div",{className:"btn profile"},l.a.createElement(s.c,{exact:!0,to:"/myprofile/created-events"}," ",l.a.createElement("button",{className:"link profile"},"Created events")," "),l.a.createElement(s.c,{exact:!0,to:"/myprofile/joined-events"}," ",l.a.createElement("button",{className:"link profile"},"Joined events")," "))),l.a.createElement(V,{path:(void 0).props.history.location.pathname}))}))),z=function(e){return l.a.createElement("div",{className:"card multiple",key:e.event._id},l.a.createElement(s.b,{className:"cardEvent",to:"/events/".concat(e.event._id)},l.a.createElement("div",{className:"eventTop"},l.a.createElement("div",{className:"eventImg"},l.a.createElement("img",{className:"event image",src:e.event.eventImg,alt:e.event.sport})),l.a.createElement("div",{className:"eventInfo"},l.a.createElement("strong",null,e.event.sport," - ",e.event.city," "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,e.event.date," @ ",e.event.time),e.event.delay<8&&l.a.createElement("p",null,"In only ",e.event.delay," days !"),l.a.createElement("p",null,"Level: ",e.event.level))),l.a.createElement("div",null,l.a.createElement("p",null,e.event.description)),l.a.createElement("div",{className:"eventAbout"},e.event.owner&&l.a.createElement("p",{className:"owner"},"Created by ",e.event.owner.username," ",l.a.createElement("span",null,"-----"),l.a.createElement("img",{id:"profileImg",src:e.event.owner.profileImg,alt:e.event.owner.username})," "))))},G=a(12),H=a.n(G),K=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("select",{name:"level",onChange:this.props.handleFilterLevel},l.a.createElement("option",{value:""},"Level"),l.a.createElement("option",{value:"Beginner"},"Beginner"),l.a.createElement("option",{value:"Intermediate"},"Intermediate"),l.a.createElement("option",{value:"Advanced"},"Advanced")))}}]),a}(n.Component),Q=a(18);function X(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}var Z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={allEvents:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){e.setState({allEvents:t})}))}},{key:"render",value:function(){var e=this.props.filter;return console.log("Capitalize",X(e)),l.a.createElement("div",null,l.a.createElement("select",{name:e,onChange:this.props.handleFilter},l.a.createElement("option",{value:""},X(e)),Object(Q.a)(new Set(this.state.allEvents.map((function(t){return t[e]})))).sort((function(e,t){return e.localeCompare(t)})).map((function(e){return l.a.createElement("option",{value:e},e)}))))}}]),a}(n.Component),$=H()(),ee=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={allEvents:[],filteredEvents:[],level:"",sport:"",city:""},e.handleChange=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value)),e.filterAll()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){t=t.map((function(e){var t=H()(e.date,"YYYY-MM-DD");return t.isValid()&&(e.delay=t.diff($,"d")),e})),e.setState({allEvents:t,filteredEvents:t})}))}},{key:"filterAll",value:function(){var e=this;return this.state.allEvents.filter((function(t){return""===e.state.level||e.state.level===t.level})).filter((function(t){return""===e.state.sport||e.state.sport===t.sport})).filter((function(t){return""===e.state.city||e.state.city===t.city}))}},{key:"render",value:function(){var e,t=this.filterAll().filter((function(e){return e.delay>=0&&!e.isComplete})).length;return l.a.createElement("div",null,l.a.createElement("div",{className:"NavSearch"},l.a.createElement(Z,{className:"filter",filter:"city",handleFilter:this.handleChange}),l.a.createElement(Z,{className:"filter",filter:"sport",handleFilter:this.handleChange}),l.a.createElement(K,{className:"filter",filter:"Level",handleFilterLevel:this.handleChange})),l.a.createElement("div",{className:"invisible"},"Oups you found me"),l.a.createElement("strong",{className:"number events"},0===(e=t)?"Sorry...No event yet":1===e?"Only 1 event found":"".concat(e," events found")),this.filterAll().filter((function(e){return e.delay>=0&&!e.isComplete})).sort((function(e,t){return e.delay-t.delay})).map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(z,{event:e}))})),l.a.createElement(V,{path:this.props.history.location.pathname}),l.a.createElement("div",{className:"invisible"},"Oups you found me"))}}]),a}(n.Component),te=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={event:null},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log(t),N(t).then((function(t){e.setState({event:t})}))}},{key:"render",value:function(){return this.state.event?(console.log("one event",this.state.event),l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement("div",{className:"invisible"},"Oups you found me"),l.a.createElement("div",{className:"middle card one"},l.a.createElement("strong",{className:"center"},this.state.event.sport),l.a.createElement("hr",null),l.a.createElement("strong",{className:"owner"},"Created by ",this.state.event.owner.username," ",l.a.createElement("span",null,"-----"),l.a.createElement("img",{id:"profileImg",src:this.state.event.owner.profileImg,alt:this.state.event.owner.username})),l.a.createElement("p",null,l.a.createElement("strong",null,"Where: "),this.state.event.city," - ",this.state.event.meetingPoint),l.a.createElement("p",null,l.a.createElement("strong",null,"When: "),this.state.event.date," - ",this.state.event.time),l.a.createElement("p",null,l.a.createElement("strong",null,"Level: "),this.state.event.level),l.a.createElement("img",{className:"event image",src:this.state.event.eventImg,alt:this.state.event.sport}),l.a.createElement("p",null,this.state.event.description),l.a.createElement("button",{className:"interested"},l.a.createElement(s.c,{to:"/messages/by-event/".concat(this.state.event._id)},"I'm interested"))),l.a.createElement(V,null))):l.a.createElement("div",null,l.a.createElement(D,null),"Event is loading...")}}]),a}(n.Component),ae=H()().format("YYYY-MM-DD"),ne=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={date:ae,sport:"",city:"",country:"",meetingPoint:"",time:"09:00",description:"",isComplete:"false",level:""},e.imageRef=l.a.createRef(),e.handleChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(P.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;for(var n in e.state)a.append(n,e.state[n]);e.imageRef.current.files[0]&&a.append("eventImg",e.imageRef.current.files[0]),x(a).then((function(t){e.props.history.push("/events"),e.setState({date:ae,sport:"",city:"",country:"",meetingPoint:"",time:"09:00",description:"",isComplete:"false",level:""}),console.log("form create props",e.props)})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return console.log("today",String(ae)),l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement("div",{className:"body"},l.a.createElement("form",{ref:this.formRef,className:"formcreate",onSubmit:this.handleSubmit,encType:"multipart/form-data"},l.a.createElement("h3",null,"Create your event"),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"sport"}," ","Sport"),l.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,value:this.state.sport,placeholder:"Tennis, Running, Boxing...",name:"sport",id:"sport"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"Country"}," ","Country"),l.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,value:this.state.country,name:"country",id:"country"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"city"},"City"),l.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,value:this.state.city,name:"city",id:"city"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"meetingPoint"},"Meeting Point"),l.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,value:this.state.meetingPoint,placeholder:"Metro station, park...",name:"meetingPoint",id:"meetingPoint"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"date"},"When"),l.a.createElement("input",{className:"input",type:"date",onChange:this.handleChange,value:this.state.date,name:"date",id:"date",min:ae})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"time"},"Time"),l.a.createElement("input",{className:"input",type:"time",step:"1800",onChange:this.handleChange,value:this.state.time,name:"time",id:"time"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"level",style:{marginBottom:"0"}},l.a.createElement("select",{value:this.state.value,onChange:this.handleChange,name:"level",id:"level"},l.a.createElement("option",{value:""},"Select a level"),l.a.createElement("option",{value:"Beginner"},"Beginner"),l.a.createElement("option",{value:"Intermediate"},"Intermediate"),l.a.createElement("option",{value:"Advanced"},"Advanced")))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"description"},"Describe your event:"),l.a.createElement("textarea",{maxLength:"100",rows:"3",value:this.state.value,onChange:this.handleChange,name:"description",id:"description",placeholder:"Few words about this event...(100 characters max)"})),l.a.createElement("div",{className:"field upload"},l.a.createElement("label",{className:"label",htmlFor:"eventImg"},"Add an image for your event ",l.a.createElement("span",null,"----"),l.a.createElement("i",{className:"icon fas fa-cloud-upload-alt"})),l.a.createElement("input",{style:{visibility:"hidden"},type:"file",id:"eventImg",name:"eventImg",ref:this.imageRef})),l.a.createElement("button",null,"Create"))),l.a.createElement(V,{path:this.props.history.location.pathname}))}}]),a}(n.Component),le=Object(L.g)(ne),re=H()(),ce=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={date:"",sport:"",city:"",country:"",meetingPoint:"",time:"",description:"",isComplete:"false",level:""},e.imageRef=l.a.createRef(),e.handleChange=function(t){var a="checkbox"===t.target.type?t.target.checked:t.target.value,n=t.target.name;e.setState(Object(P.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;for(var n in e.state)a.append(n,e.state[n]);e.imageRef.current.files[0]&&a.append("eventImg",e.imageRef.current.files[0]);var l=e.props.match.params.id;I(l,a).then((function(t){console.log(t),e.props.history.push("/created/coming-events")})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;N(t).then((function(t){var a=t;e.setState({sport:a.sport,date:a.date,city:a.city,country:a.country,meetingPoint:a.meetingPoint,time:a.time,description:a.description,isComplete:a.isComplete,level:a.level})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement("div",{className:"body"},l.a.createElement("form",{className:"formcreate",style:{display:"flex",flexDirection:"column"},onSubmit:this.handleSubmit,encType:"multipart/form-data"},l.a.createElement("h3",null,"Update your event"),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"sport"},"Sport"),l.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,value:this.state.sport,name:"sport",id:"sport"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"Country"},"Country"),l.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,value:this.state.country,name:"country",id:"country"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"city"},"City"),l.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,value:this.state.city,name:"city",id:"city"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"meetingPoint"},"Meeting Point"),l.a.createElement("input",{className:"input",type:"text",onChange:this.handleChange,value:this.state.meetingPoint,name:"meetingPoint",id:"meetingPoint"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"date"},"When"),l.a.createElement("input",{className:"input",type:"date",onChange:this.handleChange,value:this.state.date,placeholder:"When ?",name:"date",id:"date",min:re})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"time"},"Time"),l.a.createElement("input",{className:"input",type:"time",step:"1800",onChange:this.handleChange,value:this.state.time,name:"time",id:"time"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"level"},"Choose your level:",l.a.createElement("select",{value:this.state.value,onChange:this.handleChange,name:"level",id:"level"},l.a.createElement("option",{value:"Beginner"},"Beginner"),l.a.createElement("option",{value:"Intermediate"},"Intermediate"),l.a.createElement("option",{value:"Advanced"},"Advanced")))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"description"},"Describe your event:",l.a.createElement("textarea",{maxLength:"100",rows:"3",value:this.state.description,onChange:this.handleChange,name:"description",id:"description"}))),l.a.createElement("div",{className:"field upload"},l.a.createElement("label",{className:"label",htmlFor:"eventImg"},"Add an image for your event ",l.a.createElement("span",null,"----"),l.a.createElement("i",{className:"icon fas fa-cloud-upload-alt"})),l.a.createElement("input",{style:{display:"none"},type:"file",id:"eventImg",name:"eventImg",ref:this.imageRef})),l.a.createElement("div",{className:"field full"},l.a.createElement("label",{className:"label full"},"Event full ?",l.a.createElement("input",{className:"input full",name:"isComplete",type:"checkbox",checked:this.state.isComplete,onChange:this.handleChange}))),l.a.createElement("button",null,"Update"))),l.a.createElement(V,{path:this.props.history.location.pathname}))}}]),a}(n.Component),se=H()(),ie=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={allEvents:[]},e.handleToggle=function(t,a){console.log(t),I(t,{isComplete:!a}).then((function(t){console.log("api",t);var a=e.state.allEvents.map((function(e){return e._id===t._id?t:e}));e.setState({allEvents:a}),console.log("in toggle",a)})).catch((function(e){console.log(e)}))},e.handleDelete=function(t){k(t).then((function(a){e.setState({allEvents:e.state.allEvents.filter((function(e){return e._id!==t}))})})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){t=t.map((function(e){var t=H()(e.date,"YYYY-MM-DD");return t.isValid()&&(e.delay=t.diff(se,"d")),e})),e.setState({allEvents:t})}))}},{key:"render",value:function(){var e=this;return console.log("render",this.state.allEvents),l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement("div",{className:"invisibleBig"},l.a.createElement("div",{className:"btn profile"},l.a.createElement(s.c,{exact:!0,to:"/created/coming-events"}," ",l.a.createElement("button",{style:{backgroundColor:"/created/coming-events"===this.props.history.location.pathname?"#ffa41b":"#white"},className:"link profile"},"Coming events")," "),l.a.createElement(s.c,{exact:!0,to:"/created/past-events"}," ",l.a.createElement("button",{style:{backgroundColor:"/created/past-events"===this.props.history.location.pathname?"#ffa41b":"#white"},className:"link profile"},"Past events")," "))),l.a.createElement("div",{className:"middle"},"/created/coming-events"===this.props.history.location.pathname&&this.state.allEvents.filter((function(e){return e.delay>=0})).sort((function(e,t){return e.delay-t.delay})).map((function(t){return l.a.createElement("div",{className:"card multiple create",key:t._id},l.a.createElement("div",{className:"cardEvent create"},l.a.createElement(s.b,{to:"/events/".concat(t._id)},l.a.createElement("div",{className:"eventTop"},l.a.createElement("div",{className:"eventImg create"},l.a.createElement("img",{className:"event image",src:t.eventImg,alt:t.sport})),l.a.createElement("div",{className:"eventInfo create"},l.a.createElement("p",null,l.a.createElement("strong",null,t.sport," - ",t.city," ")),l.a.createElement("br",null),l.a.createElement("p",null,t.date," @ ",t.time," D-",t.delay),l.a.createElement("p",null,"Level: ",t.level),l.a.createElement("p",null,"Author: ",t.owner.username)))),l.a.createElement("p",null,t.description),l.a.createElement("div",{className:"eventManage"},l.a.createElement("div",{className:"manage event"},l.a.createElement(s.c,{exact:!0,to:"/update/".concat(t._id),className:"link"},l.a.createElement("i",{className:"fas fa-edit"})),l.a.createElement("i",{className:"fas fa-trash",onClick:function(){return e.handleDelete(t._id)}}),t.isComplete?l.a.createElement("i",{className:"fas fa-toggle-on",name:"isComplete",value:t.isComplete,onClick:function(){return e.handleToggle(t._id,t.isComplete)}}):l.a.createElement("i",{className:"fas fa-toggle-off",name:"isComplete",value:t.isComplete,onClick:function(){return e.handleToggle(t._id,t.isComplete)}})))))})),"/created/past-events"===this.props.history.location.pathname&&this.state.allEvents.filter((function(e){return e.delay<0})).sort((function(e,t){return e.delay-t.delay})).map((function(t){return l.a.createElement("div",{className:"card multiple create",key:t._id},l.a.createElement("div",{className:"cardEvent create"},l.a.createElement(s.b,{to:"/events/".concat(t._id)},l.a.createElement("div",{className:"eventTop"},l.a.createElement("div",{className:"eventImg create"},l.a.createElement("img",{className:"event image",src:t.eventImg,alt:t.sport})),l.a.createElement("div",{className:"eventInfo create"},l.a.createElement("p",null,l.a.createElement("strong",null,t.sport," - ",t.city," ")),l.a.createElement("br",null),l.a.createElement("p",null,t.date," @ ",t.time," D-",t.delay),l.a.createElement("p",null,"Level: ",t.level)))),l.a.createElement("p",null,t.description),l.a.createElement("div",{className:"eventManage"},l.a.createElement("div",{className:"manage event"},l.a.createElement(s.c,{exact:!0,to:"/update/".concat(t._id),className:"link"},l.a.createElement("i",{className:"fas fa-edit"})),l.a.createElement("i",{className:"fas fa-trash",onClick:function(){return e.handleDelete(t._id)}}),t.isComplete&&l.a.createElement("i",{className:"fas fa-toggle-on",name:"isComplete",value:t.isComplete,onClick:function(){return e.handleToggle(t._id,t.isComplete)}}),!t.isComplete&&l.a.createElement("i",{className:"fas fa-toggle-off",name:"isComplete",value:t.isComplete,onClick:function(){return e.handleToggle(t._id,t.isComplete)}})))))}))),l.a.createElement("div",{className:"invisible"},"Oups you found me"),l.a.createElement(V,{path:this.props.history.location.pathname}))}}]),a}(n.Component);function oe(e){var t=e.handlePopUp;return l.a.createElement("div",{className:"popup",onClick:t},l.a.createElement("p",null,"Awesome feature for sure !",l.a.createElement("br",null)," It's coming soon !"))}ie.contextType=w;var me=A(function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={display:!1},e.handlePopUp=function(){e.setState({display:!e.state.display})},e.handleLogout=function(){g().then((function(){e.props.context.removeUser(),e.props.history.push("/")})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(D,null)," ",l.a.createElement("div",{className:"Extras"},!this.state.display&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.handlePopUp},"Stat"),l.a.createElement("button",{onClick:this.handlePopUp},"Chrono"),l.a.createElement("button",{onClick:this.handlePopUp},"Update profile"),l.a.createElement("button",{onClick:this.handleLogout},"Logout")),this.state.display&&l.a.createElement(oe,{handlePopUp:this.handlePopUp})),l.a.createElement(V,{path:this.props.history.location.pathname}))}}]),a}(n.Component)),ue=(a(34),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={messages:null,message:"",event:null},e.formRef=l.a.createRef(),e.handleChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(P.a)({},n,a)),console.log(e.state)},e.handleSubmit=function(t){t.preventDefault();var a=e.props.match.params.id;console.log("Add message Id",a),j(a,{message:e.state.message}).then((function(t){e.formRef.current.reset(),e.getMessages()})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;N(this.props.match.params.id).then((function(t){e.setState({event:t})})),this.getMessages()}},{key:"getMessages",value:function(){var e=this,t=this.props.match.params.id;C(t).then((function(t){e.setState({messages:t})}))}},{key:"render",value:function(){return this.state.event?l.a.createElement("div",null,l.a.createElement(V,null),l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"chat"},l.a.createElement("strong",null,this.state.event.sport," - ",this.state.event.city," -",this.state.event.date),this.state.messages&&0===this.state.messages.length&&l.a.createElement("div",null,"Start the conversation"),this.state.messages&&this.state.messages.length>0&&l.a.createElement("div",{style:{overflow:"scroll",height:"60vh"}},this.state.messages.map((function(e){return l.a.createElement("div",{key:e._id},l.a.createElement("div",{className:"message"},l.a.createElement("br",null),l.a.createElement("div",{className:"author message"},l.a.createElement("img",{id:"profileImg",src:e.author.profileImg,alt:e.author.username}),l.a.createElement("strong",null,e.author.username),", on"," ",String(e.createdAt).slice(0,10)," :"),l.a.createElement("div",null,e.message)))})))),l.a.createElement("div",{className:"messages"},l.a.createElement("form",{ref:this.formRef,id:"form-message",onSubmit:this.handleSubmit},l.a.createElement("input",{maxLength:"100",value:this.state.message,onChange:this.handleChange,name:"message",placeholder:"Your message..."}),l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-paper-plane"}))))),l.a.createElement(D,null)):l.a.createElement("div",null,"Loading...")}}]),a}(n.Component)),pe=H()().format("YYYY-MM-DD"),de=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={myMessages:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({myMessages:t})}))}},{key:"render",value:function(){var e=this;if(!this.state.myMessages)return l.a.createElement("div",null,"Loading...");console.log("my messages",this.state.myMessages);var t=Object(Q.a)(new Set(this.state.myMessages.map((function(e){return e.event._id})))),a=t.map((function(t){var a=e.state.myMessages.filter((function(e){return e.event._id===t}));return{event:a[0].event,messages:a}}));console.log("EVENTS FORMATED",a);return console.log(t),console.log(pe),l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement("div",{className:"body"},a.map((function(e){return l.a.createElement("div",{className:"all conv",key:e.event._id},e.messages.map((function(e){return l.a.createElement(s.c,{exact:!0,to:"/messages/by-event/".concat(e.event._id),className:"event conv",key:e._id},l.a.createElement("img",{id:"profileImg",src:e.author.profileImg,alt:e.author.username}),l.a.createElement("div",{className:"conv message"},l.a.createElement("strong",null,e.author.username),l.a.createElement("p",null,e.message),l.a.createElement("p",null,e.event.sport," - ",e.event.date.slice(2))),l.a.createElement("div",{className:"conv date"},l.a.createElement("p",null,e.createdAt.slice(2,10))))})))}))),l.a.createElement(V,{path:this.props.history.location.pathname}))}}]),a}(n.Component);var he=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(L.d,null,l.a.createElement(L.b,{exact:!0,path:"/",component:M}),l.a.createElement(L.b,{exact:!0,path:"/signin",component:T}),l.a.createElement(L.b,{exact:!0,path:"/signup",component:B}),l.a.createElement(L.b,{exact:!0,path:"/events",component:ee}),l.a.createElement(L.b,{exact:!0,path:"/events/create",component:le}),l.a.createElement(L.b,{exact:!0,path:"/events/:id",component:te}),l.a.createElement(L.b,{exact:!0,path:"/messages/by-event/:id",component:ue}),l.a.createElement(L.b,{exact:!0,path:"/messages/my-messages",component:de}),l.a.createElement(L.b,{exact:!0,path:"/created/coming-events",component:ie}),l.a.createElement(L.b,{exact:!0,path:"/created/past-events",component:ie}),l.a.createElement(L.b,{exact:!0,path:"/update/:id",component:ce}),l.a.createElement(L.b,{exact:!0,path:"/more",component:me}),l.a.createElement(J,{exact:!0,path:"/profile",component:q})))};a(67);c.a.render(l.a.createElement(s.a,null,l.a.createElement(F,null,l.a.createElement(he,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6214b590.chunk.js.map