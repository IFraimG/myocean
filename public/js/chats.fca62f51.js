(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chats"],{"144a":function(t,a,e){},"1e25":function(t,a,e){"use strict";var r=e("23e7"),n=e("58a8").end,i=e("c8d2"),s=i("trimEnd"),c=s?function(){return n(this)}:"".trimEnd;r({target:"String",proto:!0,forced:s},{trimEnd:c,trimRight:c})},"20f6":function(t,a,e){},"2fa4":function(t,a,e){"use strict";e("20f6");var r=e("80d2");a["a"]=Object(r["h"])("spacer","div","v-spacer")},"43b2":function(t,a,e){},"680b":function(t,a,e){t.exports=e.p+"img/covid.f87ea035.png"},"8be6":function(t,a,e){"use strict";var r=e("9bf6"),n=e.n(r);n.a},"9bf6":function(t,a,e){},a5e4:function(t,a,e){"use strict";var r=e("43b2"),n=e.n(r);n.a},bdb8:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[t.err?t._t("error",[r("div",{staticClass:"auth__error d-flex flex-row align-center"},[r("div",[r("h2",[t._v("Вы не можете просматривать данную страницу ( 401 )")]),r("p",[t._v(" Для просмотра вы должны "),r("router-link",{staticClass:"auth__error__link",attrs:{to:"/"}},[t._v(" зарегистрироваться ")])],1)]),r("v-img",{attrs:{"max-width":"256",height:"256",src:e("680b")}})],1)]):t.loading?t._t("loading",[r("Loader")]):t._t("default",[t._v("profit")])],2)},n=[],i=(e("96cf"),e("1da1")),s=e("555f"),c=e("bc3a"),o=e.n(c),l={name:"NotAuth",components:{Loader:s["a"]},data:function(){return{err:!1,loading:!0}},beforeCreate:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.get("/api/auth/test",{headers:{Authorization:localStorage.getItem("jwt")}});case 3:t.loading=!1,a.next=10;break;case 6:a.prev=6,a.t0=a["catch"](0),t.err=!0,t.loading=!1;case 10:case"end":return a.stop()}}),a,null,[[0,6]])})))()}},d=l,u=(e("8be6"),e("2877")),f=e("6544"),_=e.n(f),m=e("adda"),h=Object(u["a"])(d,r,n,!1,null,"2a82bc1c",null);a["a"]=h.exports;_()(h,{VImg:m["a"]})},c98b:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("NotAuth",{scopedSlots:t._u([{key:"error",fn:function(){},proxy:!0},{key:"loading",fn:function(){},proxy:!0},{key:"default",fn:function(){return[e("div",{staticClass:"chat__wrapper d-flex flex-row",on:{click:function(a){t.isModal=!1}}},[e("div",{staticStyle:{"margin-top":"80px","margin-left":"20px"}},[e("Panel")],1),e("v-card",{staticClass:"chat"},[e("div",{staticClass:"d-flex align-center"},[e("v-card-title",{staticClass:"chat__title"},[t._v("Мои чаты")]),e("v-spacer"),e("v-btn",{staticStyle:{"margin-right":"20px",color:"#fff"},attrs:{color:"myPurple"},on:{click:function(a){a.stopPropagation(),t.isModal=!0}}},[t._v(" Создать чат ")])],1),t.chats!=[]?e("div",t._l(t.chats,(function(a,r){return e("div",{key:r,staticClass:"chat__info d-flex justify-space-between",on:{click:function(e){return t.$router.push({name:"Chat",params:{id:a.chatId}})}}},[e("div",{staticClass:"d-flex flex-row align-center"},[a.img?e("div",{staticClass:"chat__info__image"},[t._v(" "+t._s(a.img)+" ")]):e("div",{staticClass:"chat__info__image"}),e("div",{staticClass:"chat__info__name"},[e("v-card-subtitle",{staticClass:"chat__info__title"},[t._v(" "+t._s(a.title)+" ")]),e("v-card-text",{staticClass:"chat__info__text"},[t._v(t._s(a.lastMsg))])],1)]),e("v-card-subtitle",{staticClass:"chat__info__right"},[t._v(t._s(a.dateMsg))])],1)})),0):e("div",{staticClass:"chat__info__undefined"},[e("h2",[t._v("Вы не состоите не в одном чате.")])])]),e("ChatCreate",{attrs:{isModal:t.isModal},on:{isModalFalse:t.isModalFalse}})],1)]},proxy:!0}])})],1)},n=[],i=(e("96cf"),e("1da1")),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-dialog",{attrs:{"max-width":"700",persistent:""},model:{value:t.isModal,callback:function(a){t.isModal=a},expression:"isModal"}},[e("v-card",[e("v-toolbar",{attrs:{color:"myPurple"}},[e("h2",{staticStyle:{color:"#fff"}},[t._v("Создать чат")]),e("v-spacer"),e("v-icon",{staticStyle:{cursor:"pointer"},attrs:{size:"32"},on:{click:function(a){return t.$emit("isModalFalse",!1)}}},[t._v(" cancel ")])],1),e("div",{staticClass:"chat__modal__middle d-flex flex-column align-center"},[e("v-card-title",[t._v(" Выберите человека, с которым вы хотите по общаться ")]),e("v-text-field",{staticClass:"chat__modal__input",attrs:{solo:"",label:"Искать"},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.dataSend(a)}},model:{value:t.fullName,callback:function(a){t.fullName=a},expression:"fullName"}}),t.friends?e("div",t._l(t.friends,(function(a,r){return e("div",{key:r,staticClass:"chat__modal__item"},[e("div",{staticClass:"d-flex flex-row"},[a.additionally.img?e("v-img",{staticClass:"chat__modal__img",attrs:{src:"/"+a.additionally.img}}):e("div",{staticClass:"chat__modal__img"}),e("div",{staticClass:"d-flex flex-column"},[e("router-link",{staticClass:"chat__modal__link",attrs:{to:{name:"Account",params:{id:a.id}}}},[t._v(" "+t._s(a.firstname)+" "+t._s(a.lastname)+" ")]),e("v-btn",{staticClass:"chat__modal__btn",attrs:{color:"myPurple"},on:{click:function(e){return t.chatCreate(a)}}},[t._v(" Написать ")])],1)],1)])})),0):t._e()],1)],1)],1)],1)},c=[],o=(e("ac1f"),e("1276"),e("1e25"),e("eee7"),e("bc3a")),l=e.n(o),d={name:"ChatCreate",data:function(){return{friends:"",user:"",fullName:"",firstname:"",lastname:""}},props:{isModal:Boolean},created:function(){this.user=JSON.parse(localStorage.getItem("user"))},methods:{dataSend:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.firstname=t.fullName.trimLeft().trimRight().split(" ")[0],t.lastname=t.fullName.trimLeft().trimRight().split(" ")[1],a.next=4,l.a.post("/api/users/get_friends/",{firstname:t.firstname,lastname:t.lastname});case 4:e=a.sent,t.friends=e.data;case 6:case"end":return a.stop()}}),a)})))()},chatCreate:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/api/chat/chat-create",{userId:t.id,myId:a.user.id});case 2:r=e.sent,a.$router.push({name:"Chat",params:{id:r.data.chatId}});case 4:case"end":return e.stop()}}),e)})))()}}},u=d,f=(e("a5e4"),e("2877")),_=e("6544"),m=e.n(_),h=e("8336"),v=e("b0af"),p=e("99d9"),g=e("169a"),x=e("132d"),C=e("adda"),b=e("2fa4"),k=e("8654"),w=e("71d9"),y=Object(f["a"])(u,s,c,!1,null,"0dc752e2",null),S=y.exports;m()(y,{VBtn:h["a"],VCard:v["a"],VCardTitle:p["d"],VDialog:g["a"],VIcon:x["a"],VImg:C["a"],VSpacer:b["a"],VTextField:k["a"],VToolbar:w["a"]});var M=e("9c97"),V=e("bdb8"),O=(e("144a"),{name:"Chats",metaInfo:{title:"MyOcean - Мои чаты"},components:{ChatCreate:S,Panel:M["a"],NotAuth:V["a"]},data:function(){return{dataDB:"",text:"",isModal:!1,chats:[]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.dataDB=JSON.parse(localStorage.getItem("user")),a.next=3,l.a.get("/api/chat/get-chats/"+t.dataDB.id);case 3:e=a.sent,t.chats=e.data;case 5:case"end":return a.stop()}}),a)})))()},sockets:{connect:function(){console.log("конэктэд")}},methods:{isModalFalse:function(t){this.isModal=t}}}),I=O,N=Object(f["a"])(I,r,n,!1,null,null,null);a["default"]=N.exports;m()(N,{VBtn:h["a"],VCard:v["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VSpacer:b["a"]})},eee7:function(t,a,e){"use strict";var r=e("23e7"),n=e("58a8").start,i=e("c8d2"),s=i("trimStart"),c=s?function(){return n(this)}:"".trimStart;r({target:"String",proto:!0,forced:s},{trimStart:c,trimLeft:c})}}]);
//# sourceMappingURL=chats.fca62f51.js.map