(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chat"],{"04dc":function(t,e,a){var s=function(t){"use strict";function e(t,e,a,s){return t/=s/2,1>t?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)}function a(t,e){for(var a in e){var s=void 0===t[a]&&"function"!=typeof a;s&&(t[a]=e[a])}return t}function s(t){for(var e=0;t;)e+=t.offsetTop||0,t=t.offsetParent;return y&&(e-=y),e}function i(t){w||(w=t);var a=t-w,s=e(a,b,C-b,g);window.scrollTo(0,s),g>a?v=requestAnimationFrame(i):o()}function n(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function r(){w=null,b=null,D=!1}function c(){k&&(C=s(k))}function o(){r(),_&&(_.pause(),_.currentTime=0),m&&m.play(),f&&f()}function l(){D&&(cancelAnimationFrame(v),r(),_&&(_.pause(),_.currentTime=0),c(),window.scrollTo(0,C))}function u(t){t.addEventListener?t.addEventListener("click",E.elevate,!1):t.attachEvent("onclick",(function(){c(),document.documentElement.scrollTop=C,document.body.scrollTop=C,window.scroll(0,C)}))}function d(t){p=document.body;var e={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null};t=a(t,e),t.element&&u(t.element),n()&&(t.duration&&(x=!0,g=t.duration),t.targetElement&&(k=t.targetElement),t.verticalPadding&&(y=t.verticalPadding),window.addEventListener("blur",l,!1),t.mainAudio&&(_=new Audio(t.mainAudio),_.setAttribute("preload",t.preloadAudio),_.setAttribute("loop",t.loopAudio)),t.endAudio&&(m=new Audio(t.endAudio),m.setAttribute("preload","true")),t.endCallback&&(f=t.endCallback),t.startCallback&&(h=t.startCallback))}var h,_,m,f,p=null,v=null,g=null,x=!1,w=null,b=null,C=0,k=null,y=null,D=!1,E=this;this.elevate=function(){D||(D=!0,b=document.documentElement.scrollTop||p.scrollTop,c(),x||(g=1.5*Math.abs(C-b)),requestAnimationFrame(i),_&&_.play(),h&&h())},d(t)};t.exports&&(t.exports=s)},1681:function(t,e,a){},"1e25":function(t,e,a){"use strict";var s=a("23e7"),i=a("58a8").end,n=a("c8d2"),r=n("trimEnd"),c=r?function(){return i(this)}:"".trimEnd;s({target:"String",proto:!0,forced:r},{trimEnd:c,trimRight:c})},"20f6":function(t,e,a){},"293a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NotAuth",{scopedSlots:t._u([{key:"error",fn:function(){},proxy:!0},{key:"loading",fn:function(){},proxy:!0},{key:"default",fn:function(){return[a("div",{staticClass:"chat__wrapper d-flex flex-row"},[a("div",{staticStyle:{"margin-left":"20px","margin-top":"80px"}},[a("Panel")],1),a("v-card",{staticClass:"chat",staticStyle:{"margin-top":"80px"}},[a("ChatUsers",{attrs:{isOpen:t.isOpen,chatData:t.chatData},on:{dataEdit:t.dataEdit,isModalFalse:t.isModalFalse}}),a("v-btn",{staticClass:"chat__btn",attrs:{large:"",color:"success"},on:{click:function(e){return t.elevator.elevate()}}},[a("v-icon",[t._v("vertical_align_top")])],1),a("v-toolbar",{staticClass:"chat__top"},[a("v-card-title",[t._v(t._s(t.chatData.title))]),a("v-card-subtitle",{staticClass:"chat__users",on:{click:function(e){t.isOpen=!0}}},[t._v(" "+t._s(t.chatData.users.length)+" Участников ")]),a("v-spacer"),a("v-icon",{staticStyle:{cursor:"pointer"},attrs:{size:"32"},on:{click:t.openSettings}},[t._v(" settings ")])],1),t._l(t.messageList,(function(e,s){return a("div",{key:s,staticClass:"chat__middle"},[e.authorId==t.user.id?a("div",{staticClass:"chat__my-msg d-flex flex-row"},[e.author.additionally.img?a("v-img",{staticClass:"chat__middle__logo",staticStyle:{"margin-right":"20px"},attrs:{src:"/"+e.author.additionally.img}}):a("div",{staticClass:"chat__middle__logo",staticStyle:{"margin-right":"20px"}}),a("div",[a("h4",[t._v(t._s(e.author.firstname)+" "+t._s(e.author.lastname))]),a("p",{staticClass:"chat__from-me"},[t._v(t._s(e.text))])]),a("v-icon",{staticClass:"chat__middle__icon",on:{click:function(a){return t.msgRemove(e)}}},[t._v(" cancel ")])],1):t._e(),e.authorId!=t.user.id?a("div",{staticClass:"chat__notmy-msg d-flex flex-row"},[a("div",[a("h4",[t._v(t._s(e.author.firstname)+" "+t._s(e.author.lastname))]),a("p",{staticClass:"chat__from-them"},[t._v(t._s(e.text))])]),e.author.additionally.img?a("v-img",{staticClass:"chat__middle__logo",staticStyle:{"margin-right":"20px"},attrs:{src:"/"+e.author.additionally.img}}):a("div",{staticClass:"chat__middle__logo",staticStyle:{"margin-left":"20px"}})],1):t._e()])})),a("div",{staticClass:"chat__bottom d-flex justify-center",attrs:{id:"chatBottom"}},[a("v-textarea",{staticClass:"chat__bottom__input",attrs:{solo:"","auto-grow":"",rows:"1",label:"Введите ваше сообщение..."},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("v-btn",{staticClass:"chat__bottom__btn",attrs:{large:"",color:"myPurple"},on:{click:t.sendMessage}},[t._v(" Отправить ")])],1)],2),a("v-card",{staticClass:"chat__settings chat__settings__close",attrs:{id:"settings"}},[a("div",{staticClass:"d-flex flex-row align-center justify-space-between"},[a("v-card-title",[t._v("Настройки чата")]),a("v-icon",{staticStyle:{"margin-right":"20px",cursor:"pointer"},on:{click:t.settingsClose}},[t._v(" cancel ")])],1),a("div",{staticClass:"chat__settings__form d-flex flex-column align-center"},[a("p",{staticClass:"chat__settings__title"},[t._v("Название")]),t.isEditTitle?a("v-text-field",{staticClass:"chat__settings__input",attrs:{solo:"",placeholder:"Введите название чата"},model:{value:t.chatTitle,callback:function(e){t.chatTitle=e},expression:"chatTitle"}}):a("h3",{staticClass:"chat__settings__name",on:{click:function(e){t.isEditTitle=!0}}},[t._v(" "+t._s(t.chatData.title)+" ")]),a("p",{staticClass:"chat__settings__title"},[t._v("Описание")]),!t.isEditDesc&&t.chatData.description?a("h3",{staticClass:"chat__settings__description",on:{click:function(e){t.isEditDesc=!0}}},[t._v(" "+t._s(t.chatData.description)+" ")]):t._e(),t.isEditDesc||!t.chatData.description?a("v-textarea",{staticClass:"chat__settings__input",attrs:{solo:"","auto-grow":"",rows:"1",placeholder:"Введите описание чата"},model:{value:t.chatDescription,callback:function(e){t.chatDescription=e},expression:"chatDescription"}}):t._e(),a("v-btn",{staticStyle:{color:"#fff","margin-top":"30px","margin-bottom":"20px"},attrs:{color:"myPurple",large:""},on:{click:t.dataSave}},[t._v(" Сохранить ")]),a("v-btn",{attrs:{color:"error"},on:{click:t.chatLeave}},[t._v("Покинуть чат")])],1)])],1)]},proxy:!0}])})],1)},i=[],n=(a("a4d3"),a("e01a"),a("96cf"),a("1da1")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{attrs:{persistent:"","max-width":"700"},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[a("v-card",{staticClass:"chat__users"},[a("div",{staticClass:"d-flex flex-row justify-space-between"},[a("v-card-title",{staticClass:"chat__users__title"},[t._v("Пользователи")]),a("v-icon",{attrs:{size:"32"},on:{click:function(e){t.$emit("isModalFalse",!1),t.isAdd=!1}}},[t._v(" cancel ")])],1),t._l(t.users,(function(e,s){return a("div",{key:s},[a("div",{staticClass:"chat__users__item d-flex flex-row"},[e.additionally.img?a("v-img",{staticClass:"chat__users__logo",attrs:{src:"/"+e.additionally.img}}):a("div",{staticClass:"chat__users__logo"}),a("div",{staticClass:"chat__users__name"},[a("router-link",{staticClass:"chat__users__link",attrs:{to:{name:"Account",params:{id:e.id}}}},[t._v(" "+t._s(e.firstname)+" "+t._s(e.lastname)+" ")])],1)],1)])})),a("div",[a("v-btn",{staticClass:"chat__users__btn",attrs:{color:"success"},on:{click:function(e){t.isAdd=!0}}},[t._v(" Добавить пользователя ")]),t.isAdd?a("v-btn",{staticClass:"chat__users__btn",attrs:{color:"error"},on:{click:function(e){t.isAdd=!1}}},[a("v-icon",[t._v("cancel")])],1):t._e()],1),t.isAdd?a("div",{staticClass:"chat__users__edit"},[a("v-text-field",{staticClass:"chat__users__input",attrs:{solo:"",placeholder:"Введите название пользоватедя"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.fullname,callback:function(e){t.fullname=e},expression:"fullname"}}),t.dataList!=[]?a("div",t._l(t.dataList,(function(e,s){return a("div",{key:s},[1!=t.chatData.users.includes(e.id)?a("div",{staticClass:"d-flex flex-row align-center",staticStyle:{"margin-left":"20px","margin-top":"30px"}},[e.additionally.img?a("v-img",{staticClass:"chat__users__logo",attrs:{src:"/"+t.user.additionally.img}}):a("div",{staticClass:"chat__users__logo"}),a("div",{staticClass:"d-flex flex-column"},[a("router-link",{staticClass:"chat__users__link",staticStyle:{"font-size":"24px","margin-left":"20px"},attrs:{to:{name:"Account",params:{id:e.id}}}},[t._v(" "+t._s(e.firstname)+" "+t._s(e.lastname)+" ")]),a("v-btn",{staticClass:"chat__users__button",staticStyle:{color:"#fff"},attrs:{color:"myPurple"},on:{click:function(a){return t.userAdd(e)}}},[t._v(" Добавить в чат ")])],1)],1):t._e()])})),0):t._e()],1):t._e()],2)],1)],1)},c=[],o=(a("ac1f"),a("1276"),a("1e25"),a("eee7"),a("bc3a")),l=a.n(o),u={name:"ChatUsers",data:function(){return{users:[],isAdd:!1,fullname:"",firstname:"",lastname:"",dataList:[]}},props:{chatData:Object,isOpen:Boolean},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/users/find_friends/"+t.chatData.users);case 2:a=e.sent,t.users=a.data;case 4:case"end":return e.stop()}}),e)})))()},methods:{search:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.firstname=t.fullname.trimStart().split(" ")[0],t.lastname=t.fullname.trimEnd().split(" ")[1],e.next=4,l.a.post("/api/users/get_friends",{firstname:t.firstname,lastname:t.lastname});case 4:a=e.sent,t.dataList=a.data;case 6:case"end":return e.stop()}}),e)})))()},userAdd:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l.a.put("/api/chat/add-user",{chatId:e.chatData.chatId,user:t.id});case 2:e.$emit("isModalFalse",!1);case 3:case"end":return a.stop()}}),a)})))()}}},d=u,h=(a("e959"),a("2877")),_=a("6544"),m=a.n(_),f=a("8336"),p=a("b0af"),v=a("99d9"),g=a("169a"),x=a("132d"),w=a("adda"),b=a("8654"),C=Object(h["a"])(d,r,c,!1,null,"045519ad",null),k=C.exports;m()(C,{VBtn:f["a"],VCard:p["a"],VCardTitle:v["d"],VDialog:g["a"],VIcon:x["a"],VImg:w["a"],VTextField:b["a"]});var y=a("bdb8"),D=a("9c97"),E=a("04dc"),A=a.n(E),I=a("c1df"),S=a.n(I),T=(a("b9e8"),{name:"Chat",metaInfo:{title:"MyOcean - ЧАТ"},components:{ChatUsers:k,NotAuth:y["a"],Panel:D["a"]},data:function(){return{user:"",isOpen:!1,chatData:"",messageList:[],message:"",isDelete:!1,isSettings:!1,elevator:"",users:[],isEditTitle:!1,isEditDesc:!1,chatTitle:"",chatDescription:""}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.user=JSON.parse(localStorage.getItem("user")),e.next=3,l.a.get("/api/chat/get_chat/"+t.$route.params.id+"/"+t.user.id);case 3:a=e.sent,t.chatData=a.data,t.$socket.client.emit("getMessages",t.$route.params.id),t.elevator=new A.a({targetElement:document.getElementById("chatBottom"),element:document.querySelector(".chat__btn"),duration:2e3}),t.chatTitle=t.chatData.title,t.chatDescription=t.chatData.description;case 9:case"end":return e.stop()}}),e)})))()},sockets:{connect:function(){console.log("юзер конэктэд")},getMessages:function(t){this.messageList=t},messageAdd:function(t){this.messageList=t}},methods:{sendMessage:function(){this.$socket.client.emit("sendMessages",{data:{text:this.message,authorId:this.user.id,chatId:this.$route.params.id,msgDate:S()().format("lll"),id:Math.floor(99999999999999*Math.random())},chatId:this.$route.params.id}),this.message=""},msgRemove:function(t){this.$socket.client.emit("deleteMessage",{msg:t.id,chatId:t.chatId})},isModalFalse:function(t){this.isOpen=t},openSettings:function(){this.isSettings=!0;var t=document.getElementById("settings");t.classList.remove("chat__settings__close")},settingsClose:function(){this.isSettings=!1,this.chatTitle="",this.chatDescription="",this.isEditTitle=!1,this.isEditDesc=!1;var t=document.getElementById("settings");t.classList.add("chat__settings__close")},dataSave:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("/api/chat/data-save",{chatId:t.chatData.chatId,title:t.chatTitle,description:t.chatDescription});case 2:t.isEditTitle=!1,t.isEditDesc=!1,a=document.getElementById("settings"),a.classList.add("chat__settings__close");case 6:case"end":return e.stop()}}),e)})))()},chatLeave:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.delete("/api/chat/user-delete/"+t.user.id+"/"+t.chatData.chatId);case 2:t.$router.push({name:"Chats"});case 3:case"end":return e.stop()}}),e)})))()},dataEdit:function(t){this.chatData=t}}}),O=T,R=a("2fa4"),L=a("a844"),V=a("71d9"),j=Object(h["a"])(O,s,i,!1,null,null,null);e["default"]=j.exports;m()(j,{VBtn:f["a"],VCard:p["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VIcon:x["a"],VImg:w["a"],VSpacer:R["a"],VTextField:b["a"],VTextarea:L["a"],VToolbar:V["a"]})},"2fa4":function(t,e,a){"use strict";a("20f6");var s=a("80d2");e["a"]=Object(s["h"])("spacer","div","v-spacer")},"680b":function(t,e,a){t.exports=a.p+"img/covid.f87ea035.png"},"70a6":function(t,e,a){},"8be6":function(t,e,a){"use strict";var s=a("9bf6"),i=a.n(s);i.a},"9bf6":function(t,e,a){},a844:function(t,e,a){"use strict";a("a9e3");var s=a("5530"),i=(a("1681"),a("8654")),n=a("58df"),r=Object(n["a"])(i["a"]);e["a"]=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b9e8:function(t,e,a){},bdb8:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.err?t._t("error",[s("div",{staticClass:"auth__error d-flex flex-row align-center"},[s("div",[s("h2",[t._v("Вы не можете просматривать данную страницу ( 401 )")]),s("p",[t._v(" Для просмотра вы должны "),s("router-link",{staticClass:"auth__error__link",attrs:{to:"/"}},[t._v(" зарегистрироваться ")])],1)]),s("v-img",{attrs:{"max-width":"256",height:"256",src:a("680b")}})],1)]):t.loading?t._t("loading",[s("Loader")]):t._t("default",[t._v("profit")])],2)},i=[],n=(a("96cf"),a("1da1")),r=a("555f"),c=a("bc3a"),o=a.n(c),l={name:"NotAuth",components:{Loader:r["a"]},data:function(){return{err:!1,loading:!0}},beforeCreate:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/api/auth/test",{headers:{Authorization:localStorage.getItem("jwt")}});case 3:t.loading=!1,e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](0),t.err=!0,t.loading=!1;case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},u=l,d=(a("8be6"),a("2877")),h=a("6544"),_=a.n(h),m=a("adda"),f=Object(d["a"])(u,s,i,!1,null,"2a82bc1c",null);e["a"]=f.exports;_()(f,{VImg:m["a"]})},e959:function(t,e,a){"use strict";var s=a("70a6"),i=a.n(s);i.a},eee7:function(t,e,a){"use strict";var s=a("23e7"),i=a("58a8").start,n=a("c8d2"),r=n("trimStart"),c=r?function(){return i(this)}:"".trimStart;s({target:"String",proto:!0,forced:r},{trimStart:c,trimLeft:c})}}]);
//# sourceMappingURL=chat.8a5d8d97.js.map