(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gallery"],{"0416":function(t,e,a){},"0d77":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NotAuth",{scopedSlots:t._u([{key:"error",fn:function(){},proxy:!0},{key:"loading",fn:function(){},proxy:!0},{key:"default",fn:function(){return[a("div",{staticClass:"d-flex flex-row"},[a("div",{staticStyle:{"margin-top":"100px","margin-left":"20px"}},[a("Panel")],1),a("div",{staticClass:"gallery"},[a("GalleryAlbum"),a("GalleryList",{attrs:{isUser:t.isUser}})],1)])]},proxy:!0}])})],1)},i=[],r=(a("96cf"),a("1da1")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",{staticClass:"gallery__list"},[s("div",{staticClass:"gallery__list__top d-flex flex-row align-center justify-space-between"},[t.galleryList?s("v-card-title",[t._v(" Мои фотографии ("+t._s(t.galleryList.length)+") ")]):s("v-card-title",[t._v("Мои фотографии (0)")]),t.$store.state.isUser?s("v-btn",{staticStyle:{"margin-right":"30px",color:"#fff"},attrs:{color:"myPurple"}},[t.$store.state.isUser?s("label",{attrs:{for:"upload"}},[t._v(" Добавить фотографию "),t.$store.state.isUser?s("input",{staticClass:"hide",attrs:{id:"upload",type:"file"},on:{input:t.imageSave}}):t._e()]):t._e()]):t._e()],1),t.galleryList?s("div",{staticClass:"d-flex justify-center flex-row flex-wrap gallery__list__middle"},t._l(t.galleryList,(function(e,a){return s("div",{key:a},[s("GalleryImage",{attrs:{isEdit:t.isEdit,isEditRed:t.isEditRed,isMaxLength:t.isMaxLength,gallery:e},on:{isEditData:t.isEditData,isEditRedData:t.isEditRedData,isMaxLengthData:t.isMaxLengthData}})],1)})),0):t._e(),t.galleryList.length?t._e():s("div",{staticClass:"d-flex flex-row justify-center align-center"},[t.isUser?s("h2",{staticClass:"display-1"},[t._v("Вы еще не загрузили ни одного изображения")]):s("h2",{staticClass:"display-1"},[t._v(" Данный пользователь еще не загрузил ни одного изображения ")]),s("v-img",{attrs:{"max-width":"300",src:a("f6de")}})],1)]),s("v-snackbar",{attrs:{timeout:2e3},model:{value:t.isImage,callback:function(e){t.isImage=e},expression:"isImage"}},[s("span",[t._v("Изображение загружено. Для просмотра обновите страницу")]),s("v-btn",{staticStyle:{color:"#fff"},attrs:{color:"myPurple"},on:{click:function(e){t.isImage=!1}}},[t._v("Закрыть")])],1),s("v-snackbar",{attrs:{timeout:2e3},model:{value:t.isMaxLength,callback:function(e){t.isMaxLength=e},expression:"isMaxLength"}},[s("span",[t._v("Описание не должно превышать 270 символов")]),s("v-btn",{staticStyle:{color:"#fff"},attrs:{color:"myPurple"},on:{click:function(e){t.isMaxLength=!1}}},[t._v(" Закрыть ")])],1)],1)},l=[],o=(a("b0c0"),a("ec0d")),c=a("bc3a"),u=a.n(c),d=(a("2efb"),{name:"GalleryList",components:{GalleryImage:o["a"]},data:function(){return{isImage:!1,isEdit:!1,isEditRed:!1,galleryList:[],isMaxLength:""}},props:{isUser:Boolean},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/api/users/get_gallery/"+t.$route.params.id);case 3:a=e.sent,t.galleryList=a.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{imageSave:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.target.files[0],i=new FormData,i.set("img",s,s.name),a.next=5,u.a.put("/api/users/image_save/"+e.$route.params.id,i,{headers:{"Content-Type":"multipart/form-data"}});case 5:r=a.sent,localStorage.setItem("user",JSON.stringify(r.data)),e.isImage=!0;case 8:case"end":return a.stop()}}),a)})))()},isEditData:function(t){this.isEdit=t},isEditRedData:function(t){this.isEditRed=t},isMaxLengthData:function(t){this.isMaxLength=t}}}),m=d,f=a("2877"),v=a("6544"),h=a.n(v),p=a("8336"),g=a("b0af"),b=a("99d9"),_=a("adda"),y=a("2db4"),x=Object(f["a"])(m,n,l,!1,null,null,null),w=x.exports;h()(x,{VBtn:p["a"],VCard:g["a"],VCardTitle:b["d"],VImg:_["a"],VSnackbar:y["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("GalleryAlbumModal",{attrs:{isModal:t.isModal},on:{isModalFalse:t.isModalFalse}}),a("v-card",{staticClass:"gallery__album"},[a("div",{staticClass:"gallery__album__top d-flex flex-row align-center justify-space-between"},[t.$store.state.isUser?a("v-card-title",[t._v(" Мои альбомы ("+t._s(t.albums.length)+") ")]):a("v-card-title",[t._v("Альбомы ("+t._s(t.albums.length)+")")]),t.$store.state.isUser?a("v-btn",{staticStyle:{"margin-right":"30px",color:"#fff"},attrs:{color:"myPurple"},on:{click:function(e){e.stopPropagation(),t.isModal=!0}}},[t._v(" Создать альбом ")]):t._e()],1),t.albums!=[]?a("div",{staticClass:"gallery__album__list d-flex flex-wrap flex-row justify-center"},t._l(t.albums,(function(e,s){return a("div",{key:s},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Album",params:{id:t.$route.params.id,album:e.id}}}},[e.images[0]?a("v-img",{staticClass:"gallery__album__item",attrs:{width:"300",height:"165",src:"/"+e.images[0]}},[a("h2",[t._v(t._s(e.title))])]):t._e()],1)],1)})),0):t._e()])],1)},M=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{staticClass:"gallery__modal",attrs:{persistent:"","max-width":"800"},model:{value:t.isModal,callback:function(e){t.isModal=e},expression:"isModal"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Создать альбом")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("isModalFalse",!1)}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("div",{staticClass:"gallery__modal__form d-flex flex-column align-center"},[a("v-text-field",{staticClass:"gallery__modal__name",attrs:{solo:"",label:"Введите название вашего альбома"},model:{value:t.gallery.name,callback:function(e){t.$set(t.gallery,"name",e)},expression:"gallery.name"}}),a("v-textarea",{staticClass:"gallery__modal__description",attrs:{solo:"",label:"Введите описание вашего альбома","auto-grow":""},model:{value:t.gallery.description,callback:function(e){t.$set(t.gallery,"description",e)},expression:"gallery.description"}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.$emit("isModalFalse",!1)}}},[t._v("Отмена")]),a("v-btn",{attrs:{color:"success"},on:{click:t.dataSend}},[t._v("Создать")])],1)],1)],1)],1)},$=[],I={name:"GalleryAlbumModal",props:{isModal:Boolean},data:function(){return{gallery:{name:"",description:""}}},methods:{dataSend:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.getItem("user")),e.next=3,u.a.put("/api/users/album_create/"+a.id,t.gallery);case 3:s=e.sent,localStorage.setItem("user",JSON.stringify(s.data)),t.$router.push({name:"Album",params:{id:t.$route.params.id,album:s.data.albums[0].id}}),t.$emit("isModalFalse",!1);case 7:case"end":return e.stop()}}),e)})))()}}},L=I,S=(a("369d"),a("169a")),O=a("ce7e"),j=a("132d"),R=a("2fa4"),V=a("8654"),T=a("a844"),G=a("71d9"),E=a("2a7f"),A=Object(f["a"])(L,C,$,!1,null,"f36e9338",null),D=A.exports;h()(A,{VBtn:p["a"],VCard:g["a"],VCardActions:b["a"],VDialog:S["a"],VDivider:O["a"],VIcon:j["a"],VSpacer:R["a"],VTextField:V["a"],VTextarea:T["a"],VToolbar:G["a"],VToolbarTitle:E["a"]});var N={name:"GalleryAlbum",components:{GalleryAlbumModal:D},data:function(){return{isModal:!1,albums:[]}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/users/get_albums/"+t.$route.params.id);case 2:a=e.sent,t.albums=a.data;case 4:case"end":return e.stop()}}),e)})))()},methods:{isModalFalse:function(t){this.isModal=t}}},U=N,F=(a("673c"),Object(f["a"])(U,k,M,!1,null,"2d468236",null)),H=F.exports;h()(F,{VBtn:p["a"],VCard:g["a"],VCardTitle:b["d"],VImg:_["a"]});var B=a("bdb8"),P=a("9c97"),z={name:"Gallery",metaInfo:{title:"MyOcean - Моя галерея"},components:{GalleryList:w,GalleryAlbum:H,NotAuth:B["a"],Panel:P["a"]},data:function(){return{user:"",isUser:!1}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.user=JSON.parse(localStorage.getItem("user")),t.user.id==t.$route.params.id&&(t.isUser=!0),t.$store.commit("isUserTrue",t.isUser);case 3:case"end":return e.stop()}}),e)})))()}},J=z,K=(a("d378"),Object(f["a"])(J,s,i,!1,null,"56c53f28",null));e["default"]=K.exports},"0dbe":function(t,e,a){},1681:function(t,e,a){},"2a7f":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("71d9"),i=a("80d2"),r=Object(i["h"])("v-toolbar__title"),n=Object(i["h"])("v-toolbar__items");s["a"]},"2db4":function(t,e,a){"use strict";a("a9e3"),a("ca71");var s=a("a9ad"),i=a("f2e7"),r=a("fe6c"),n=a("58df"),l=a("d9bd");e["a"]=Object(n["a"])(s["a"],i["a"],Object(r["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(l["d"])("auto-height",this)},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper",attrs:{role:"alert"}}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"369d":function(t,e,a){"use strict";var s=a("0dbe"),i=a.n(s);i.a},"673c":function(t,e,a){"use strict";var s=a("ed2d"),i=a.n(s);i.a},a844:function(t,e,a){"use strict";a("a9e3");var s=a("5530"),i=(a("1681"),a("8654")),r=a("58df"),n=Object(r["a"])(i["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},ca71:function(t,e,a){},d378:function(t,e,a){"use strict";var s=a("0416"),i=a.n(s);i.a},ed2d:function(t,e,a){}}]);
//# sourceMappingURL=gallery.3b407f99.js.map