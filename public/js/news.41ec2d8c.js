(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"051b":function(t,e,a){},"4f0c":function(t,e,a){"use strict";var n=a("051b"),r=a.n(n);r.a},"6d53":function(t,e,a){"use strict";var n=a("a0a6"),r=a.n(n);r.a},a0a6:function(t,e,a){},a2f9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NotAuth",{scopedSlots:t._u([{key:"error",fn:function(){},proxy:!0},{key:"loading",fn:function(){},proxy:!0},{key:"default",fn:function(){return[n("div",{staticClass:"news__wrapper d-flex"},[n("div",{staticStyle:{"margin-left":"20px"}},[n("Panel")],1),n("div",{staticClass:"d-flex flex-column"},[t.dataDB?n("v-toolbar",{staticClass:"news__top"},[n("h2",[t._v("Моя лента")])]):n("v-card",[n("v-card-title",{staticClass:"display-1"},[t._v(" Добавьте друзей, чтобы просматривать их посты. ")])],1),n("NewsFriend",{attrs:{user:t.user}}),n("PostNews",{attrs:{dataDB:t.user},on:{isData:t.isData}})],1),n("div",{staticClass:"news__nav"},[n("h2",[t._v("Здесь что-то будет")]),n("v-img",{attrs:{"max-width":"200","max-height":"200",src:a("f6de")}})],1)])]},proxy:!0}])})],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.dataPosts.length>0?a("div",t._l(t.dataPosts,(function(e,n){return a("div",{key:n},[a("v-lazy",{attrs:{options:{threshold:.5},transition:"fade-transition","min-height":"200"},model:{value:t.isView,callback:function(e){t.isView=e},expression:"isView"}},[a("v-card",{staticClass:"account__post",on:{"~mousemove":function(a){return t.postView(e)}}},[a("div",{staticClass:"account__post__top d-flex flex-row justify-space-between align-center"},[a("div",{staticClass:"d-flex flex-row align-center"},[t.isImg&&e.author.additionally.img?a("v-img",{staticClass:"account__post__image",attrs:{src:"/"+e.author.additionally.img}}):a("div",{staticClass:"account__post__image"}),a("router-link",{staticStyle:{"font-size":"24px","text-decoration":"none","margin-left":"20px","margin-right":"20px"},attrs:{to:{name:"Account",params:{id:e.author.id}}}},[t._v(" "+t._s(e.author.firstname)+" "+t._s(e.author.lastname)+" ")]),e.category?a("v-chip",{staticClass:"ma-2",staticStyle:{cursor:"pointer",color:"#fff !important"},attrs:{color:"myPurple"}},[t._v(" "+t._s(e.category)+" ")]):t._e(),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[a("v-chip",t._g({staticClass:"account__post__level",attrs:{color:"myPurple"}},r),[t._v(" "+t._s(e.author.level)+" level ")])]}}],null,!0)},[a("span",[t._v(t._s(e.author.rank))])])],1),a("h3",{staticClass:"account__post__date"},[t._v(t._s(e.date))]),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-icon",t._g({attrs:{color:"purple accent-4",dark:""}},n),[t._v("menu")])]}}],null,!0)},[a("v-list",[e.authorId==t.myUser.id?a("v-list-item",{staticClass:"account__post__edit",on:{click:function(a){return t.postRemove(e)}}},[a("v-icon",[t._v("cancel")]),a("v-list-item-title",{staticStyle:{"margin-left":"10px"}},[t._v("Удалить")])],1):t._e(),0!=t.myUser.bookmarks.includes(e.id)||t.isBookmark?a("v-list-item",{staticClass:"account__post__edit",on:{click:function(a){return t.postDelete(e)}}},[a("v-icon",[t._v("bookmark")]),a("v-list-item-title",{staticStyle:{"margin-left":"10px"}},[t._v(" Удалить из закладок ")])],1):a("v-list-item",{staticClass:"account__post__edit",on:{click:function(a){return t.postSave(e)}}},[a("v-icon",[t._v("bookmark_border")]),a("v-list-item-title",{staticStyle:{"margin-left":"10px"}},[t._v(" Сохранить в закладки ")])],1)],1)],1)],1),a("div",{staticClass:"account__post__text",domProps:{innerHTML:t._s(e.text)}}),e.images?a("div",{staticClass:"account__post__images"},t._l(e.images,(function(e,n){return a("div",{key:n},[a("v-img",{staticStyle:{"margin-bottom":"20px"},attrs:{"max-height":"400","max-width":"630",src:"/"+e},on:{mousemove:function(a){t.isImage=e.source},mouseout:function(e){t.isImage=!1}}},[t.isImage==e.source?a("v-btn",{staticStyle:{border:"2px solid #fff"},attrs:{dark:""},on:{mousemove:function(a){t.isImage=e.source},click:function(a){return t.imageAdd(e)}}},[a("v-icon",[t._v("mdi-plus")])],1):t._e()],1)],1)})),0):t._e(),a("div",{staticClass:"account__post__bottom d-flex flex-row"},[a("div",{staticClass:"account__post__stats account__post__likes d-flex flex-row",on:{click:function(a){return t.addLike(e)}}},[a("v-icon",[t._v("favorite")]),e.countLikes?a("h3",[t._v(t._s(e.countLikes))]):a("h3",[t._v("0")])],1),a("div",{staticClass:"account__post__stats account__post__comments d-flex flex-row"},[a("v-icon",[t._v("comment")]),e.countComments?a("h3",[t._v(t._s(e.countComments))]):t._e(),a("h3",[t._v("0")])],1),a("div",{staticClass:"account__post__stats account__post__views d-flex flex-row",attrs:{title:e.views+" Просмотров"}},[a("v-icon",[t._v("visibility")]),a("h3",[t._v(t._s(e.views))])],1)]),a("AccountComments",{attrs:{postId:e,isUser:e.authorId==t.myUser.id}})],1)],1)],1)})),0):t._e()])},i=[],c=(a("96cf"),a("1da1")),o=a("2c4d"),u=a("bc3a"),l=a.n(u),d=(a("cb7e"),{name:"PostNews",components:{AccountComments:o["a"]},data:function(){return{myUser:"",dataPosts:"",isDelete:!1,dataLike:"",loading:!0,isView:!1,rank:"",nameData:"",isBookmark:!1,isImg:!1,isImage:!1}},props:{dataDB:Object},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.myUser=JSON.parse(localStorage.getItem("user")),t.$socket.client.emit("getPostsNews",t.myUser.friends);case 2:case"end":return e.stop()}}),e)})))()},sockets:{getPostsNews:function(t){this.loading=!1,this.dataPosts=t.reverse(),this.isImg=!0,this.$emit("isData",t)}},methods:{postView:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.put("/api/posts/post_view",{id:t._id,viewsId:e.dataDB.id});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),console.log(a.t0.message);case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()},postRemove:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.delete("/api/posts/remove_post/"+t.id);case 3:l.a.delete("/api/comments/remove_comments/"+t._id),l.a.delete("/api/likes/remove_likes/"+t._id),e.isDelete=!0,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},addLike:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.put("/api/likes/add_like/"+e.dataDB.id,t);case 3:return n=a.sent,e.dataLike=n.data,a.next=7,l.a.put("/api/posts/count_like",{count:e.dataLike,post:t});case 7:r=a.sent,t.countLikes+=parseInt(r.data),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),console.log(a.t0.message);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},postSave:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.put("/api/users/post_save",{postId:t.id,myId:e.myUser.id});case 3:n=a.sent,localStorage.setItem("user",JSON.stringify(n.data)),e.isBookmark=!0,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},postDelete:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.delete("/api/users/post_delete/"+t.id+"/"+e.myUser.id);case 3:n=a.sent,localStorage.setItem("user",JSON.stringify(n.data)),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},imageAdd:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l.a.put("/api/users/add_image",{img:t,user:e.myUser.id});case 2:n=a.sent,localStorage.setItem("user",JSON.stringify(n.data));case 4:case"end":return a.stop()}}),a)})))()}}}),p=d,m=a("2877"),f=a("6544"),v=a.n(f),_=a("8336"),g=a("b0af"),h=a("cc20"),w=a("132d"),y=a("adda"),b=a("b687"),k=a("8860"),x=a("da13"),C=a("5d23"),j=a("e449"),O=a("3a2f"),S=Object(m["a"])(p,s,i,!1,null,null,null),I=S.exports;v()(S,{VBtn:_["a"],VCard:g["a"],VChip:h["a"],VIcon:w["a"],VImg:y["a"],VLazy:b["a"],VList:k["a"],VListItem:x["a"],VListItemTitle:C["b"],VMenu:j["a"],VTooltip:O["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"news__users__reg",attrs:{"max-width":"400"}},[a("v-card-title",[t._v("Зарегистрировались недавно")])],1),t.firstUsers!=[]?a("v-container",{staticClass:"news__users"},[a("v-row",{attrs:{cols:"4",sm:"2"}},t._l(t.firstUsers,(function(e,n){return a("v-col",{key:n},[e.id!=t.myAccount.id?a("v-card",{staticClass:"news__users__item"},[e.additionally.img?a("v-img",{staticClass:"news__users__logo",attrs:{src:"/"+e.additionally.img}}):a("div",{staticClass:"news__users__logo"}),a("router-link",{staticClass:"news__users__link",attrs:{to:{name:"Account",params:{id:e.id}}}},[a("v-card-title",[t._v(t._s(e.firstname)+" "+t._s(e.lastname))])],1),a("v-chip",{staticStyle:{cursor:"pointer"},attrs:{color:"myPurple","text-color":"white"}},[t._v(" "+t._s(e.level)+" "+t._s(e.rank)+" ")]),a("v-btn",{staticClass:"news__users__btn",attrs:{color:"success"},on:{click:function(a){return t.chatCreate(e)}}},[t._v(" Написать сообщение ")]),t.myAccount.friends.includes(e.id)?a("v-btn",{staticClass:"news__users__btn",attrs:{color:"error"},on:{click:function(a){return t.friendDelete(e)}}},[t._v(" Удалить из друзей ")]):t._e(),t.myAccount.subscrise.includes(e.id)||e.subscrise.includes(t.myAccount.id)?t._e():a("v-btn",{staticClass:"news__users__btn",attrs:{color:"myPurple"},on:{click:function(a){return t.friendInvite(e)}}},[t._v(" Добавить в друзья ")]),e.subscrise.includes(t.myAccount.id)?a("v-btn",{staticClass:"news__users__btn",attrs:{color:"myPurple"},on:{click:function(a){return t.subDelete(e)}}},[t._v(" Отменить заявку в друзья ")]):t._e()],1):t._e()],1)})),1)],1):t._e()],1)},R=[],P={name:"NewsFriend",data:function(){return{firstUsers:[],fullUsers:[],myAccount:""}},props:{user:Object},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.myAccount=t.user,e.next=3,l.a.get("/api/users/getNewUsers/"+t.user.id);case 3:a=e.sent,t.firstUsers=a.data.firstUsers,t.fullUsers=a.data.fullUsers;case 6:case"end":return e.stop()}}),e)})))()},methods:{chatCreate:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l.a.post("/api/chat/chat-create",{userId:t.id,myId:e.user.id});case 2:n=a.sent,e.$router.push({name:"Chat",params:{id:n.data.chatId}});case 4:case"end":return a.stop()}}),a)})))()},friendInvite:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l.a.put("/api/users/friend_add/"+t.id+"/"+e.myAccount.id);case 2:case"end":return a.stop()}}),a)})))()},friendDelete:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l.a.delete("/api/users/friend_remove/"+t.id+"/"+e.myAccount.id);case 2:case"end":return a.stop()}}),a)})))()},subDelete:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l.a.delete("/api/users/friend_cancel/"+t.id+"/"+e.myAccount.id);case 2:case"end":return a.stop()}}),a)})))()}}},D=P,A=(a("6d53"),a("99d9")),U=a("62ad"),N=(a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a"),a("2b0e"));function B(t){return N["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,r=a.data,s=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var i=r.attrs;if(i){r.attrs={};var c=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(r.staticClass+=" ".concat(c.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,s)}})}var L=a("d9f7"),J=B("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,r=e.data,s=e.children,i=r.attrs;return i&&(r.attrs={},a=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(L["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),s)}}),T=(a("4160"),a("caad"),a("13d5"),a("4ec9"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0"),a("ade3")),$=a("5530"),E=a("80d2"),M=["sm","md","lg","xl"],z=["start","end","center"];function F(t,e){return M.reduce((function(a,n){return a[t+Object(E["x"])(n)]=e(),a}),{})}var G=function(t){return[].concat(z,["baseline","stretch"]).includes(t)},W=F("align",(function(){return{type:String,default:null,validator:G}})),H=function(t){return[].concat(z,["space-between","space-around"]).includes(t)},q=F("justify",(function(){return{type:String,default:null,validator:H}})),K=function(t){return[].concat(z,["space-between","space-around","stretch"]).includes(t)},Q=F("alignContent",(function(){return{type:String,default:null,validator:K}})),X={align:Object.keys(W),justify:Object.keys(q),alignContent:Object.keys(Q)},Y={align:"align",justify:"justify",alignContent:"align-content"};function Z(t,e,a){var n=Y[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var tt=new Map,et=N["a"].extend({name:"v-row",functional:!0,props:Object($["a"])(Object($["a"])(Object($["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:G}},W),{},{justify:{type:String,default:null,validator:H}},q),{},{alignContent:{type:String,default:null,validator:K}},Q),render:function(t,e){var a=e.props,n=e.data,r=e.children,s="";for(var i in a)s+=String(a[i]);var c=tt.get(s);return c||function(){var t,e;for(e in c=[],X)X[e].forEach((function(t){var n=a[t],r=Z(e,t,n);r&&c.push(r)}));c.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(T["a"])(t,"align-".concat(a.align),a.align),Object(T["a"])(t,"justify-".concat(a.justify),a.justify),Object(T["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),tt.set(s,c)}(),t(a.tag,Object(L["a"])(n,{staticClass:"row",class:c}),r)}}),at=Object(m["a"])(D,V,R,!1,null,"738c1e10",null),nt=at.exports;v()(at,{VBtn:_["a"],VCard:g["a"],VCardTitle:A["d"],VChip:h["a"],VCol:U["a"],VContainer:J,VImg:y["a"],VRow:et});var rt=a("bdb8"),st=a("9c97"),it={name:"News",metaInfo:{title:"MyOcean - Моя лента"},components:{PostNews:I,NewsFriend:nt,NotAuth:rt["a"],Panel:st["a"]},data:function(){return{user:"",dataDB:""}},created:function(){this.user=JSON.parse(localStorage.getItem("user"))},sockets:{},methods:{isData:function(t){t.length>0?this.dataDB=!0:this.dataDB=!1}}},ct=it,ot=(a("4f0c"),a("71d9")),ut=Object(m["a"])(ct,n,r,!1,null,"44fa1ba2",null);e["default"]=ut.exports;v()(ut,{VCard:g["a"],VCardTitle:A["d"],VImg:y["a"],VToolbar:ot["a"]})}}]);
//# sourceMappingURL=news.41ec2d8c.js.map