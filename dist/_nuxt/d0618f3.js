(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{250:function(e,t,n){var content=n(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("63949840",content,!0,{sourceMap:!1})},254:function(e,t,n){"use strict";n(250)},255:function(e,t,n){var o=n(68)(!1);o.push([e.i,".person-name:link,.person-name:visited{width:50%;display:inline-block;font-size:2em;text-decoration:none;color:#373f49}.top-nav{width:50%;text-align:right}.menu,.menu li,.top-nav{display:inline-block}.menu li{margin-left:1em}.menu a:link,.menu a:visited{color:#373f49;text-decoration:none}",""]),e.exports=o},267:function(e,t,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(69).default)("1b7833da",content,!0,{sourceMap:!1})},270:function(e,t,n){"use strict";n.r(t);n(254);var o=n(47),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"top-nav",attrs:{role:"navigation"}},[n("ul",{staticClass:"menu"},e._l(this.$router.options.routes,(function(t){return/\/.*?\/.*/.test(t.path)?e._e():n("li",[n("nuxt-link",{attrs:{to:{name:t.name}}},[e._v(e._s(t.name.charAt(0).toUpperCase()+t.name.slice(1)))])],1)})),0)])}),[],!1,null,null,null);t.default=component.exports},271:function(e,t,n){var o=n(272),l={space:"4mg09tkshbre",accessToken:"0Q8PZKmRrnIhviNDmDV57dDI8zgdVnhAdoPZ5537uQE"};e.exports={createClient:function(){return o.createClient(l)}}},301:function(e,t){},303:function(e,t){},317:function(e,t,n){"use strict";n(267)},318:function(e,t,n){var o=n(68)(!1);o.push([e.i,".home.header{position:relative;overflow:hidden;max-height:870px;height:870px}.header-menu{display:flex;position:relative;margin-top:5px;align-items:center}.header-menu-item{margin-left:51px;margin-top:30px;font-family:Barlow;font-size:16px;font-weight:400;font-stretch:normal;font-style:normal;color:#262626;line-height:1.13;letter-spacing:.18px;align-items:center;flex-basis:max-content}.sign-up-field{width:313px;margin:10px 0 16px;border-radius:6px;border:1px solid #b1b8c9}.sign-up-box{width:393px;height:388px;border-radius:16px;background-color:#fff;position:absolute;display:inline-flex;flex-direction:column;margin-top:220px;margin-left:420px;padding:39px 40px 40px;align-items:center}.sign-up-box-text{height:18px;font-size:22px;font-weight:600;line-height:.82;letter-spacing:.25px;color:#262626;margin:0 1px 16px 0}.sign-up-box-sub-text,.sign-up-box-text{width:312px;font-family:Barlow;font-stretch:normal;font-style:normal;position:relative}.sign-up-box-sub-text{height:40px;font-size:16px;font-weight:500;line-height:1.25;letter-spacing:.18px;color:#70737a;margin:16px 1px 25px 0}.landing-page-text{position:relative;padding-left:100px;padding-top:261px;display:inline-block}.hero-text{width:692px;font-family:Barlow Bold;font-size:50px;font-weight:700;line-height:normal;letter-spacing:.5px;margin:0 0 18px;height:120px}.hero-sub-text,.hero-text{font-stretch:normal;font-style:normal;color:#fff}.hero-sub-text{width:676px;height:38px;font-family:Barlow;font-size:28px;font-weight:400;line-height:1.36;letter-spacing:.32px}.logo{max-width:220px;margin-left:100px;max-height:40px;height:40px;margin-top:20px}.backgroundImage,.maskImage{position:absolute;pointer-events:none;min-height:100%;min-width:100%}.maskImage{background-image:linear-gradient(181deg,transparent 88%,rgba(0,0,0,.9) 0)}.sign-in-btn{position:relative;width:313px;height:46px;margin:14px 0 10px;padding:15px 98px 15px 99px;border-radius:8px;background-color:#fccfac;font-size:16px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1;letter-spacing:.5px;color:#fff}.hero-image-container{width:1240px;height:667px;padding:70px 50px 70px 75px;border-radius:10px;background-color:#fff;margin:-150px 100px 0 300px;position:relative}.hero-images-title{width:758px;height:44px;margin:0 191px 47px 162px;font-family:Barlow;font-size:32px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:.32px;text-align:center;color:#2a2828}",""]),e.exports=o},345:function(e,t,n){"use strict";n.r(t);var o=n(9),l=(n(13),n(37),n(43),n(271)),r=n(270),d=Object(l.createClient)(),c={asyncData:function(e){var t=e.env;return Promise.all([d.getEntries({content_type:t.CTF_BLOG_POST_TYPE_ID,order:"-sys.createdAt"})]).then((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return console.log(JSON.stringify(n.items[0])),{header:n.items[0],posts:[],fullName:"",mobile:""}})).catch(console.error)},components:{Navigation:r.default}},x=(n(317),n(47)),f=n(319),h=n.n(f),m=n(344),component=Object(x.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",{staticClass:"home header"},[n("div",{staticClass:"backgroundImage"},[n("img",{attrs:{src:e.header.fields.backgroundImage.fields.file.url}})]),e._v(" "),n("div",{staticClass:"maskImage"},[n("img",{attrs:{src:e.header.fields.maskImage.fields.file.url}})]),e._v(" "),n("div",{staticClass:"header-menu"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:e.header.fields.logo.fields.file.url}})]),e._v(" "),e._l(e.header.fields.headerMenu,(function(t){return n("div",{staticClass:"header-menu-item"},[e._v("\n        "+e._s(t)+"\n      ")])}))],2),e._v(" "),n("div",{staticClass:"landing-page-text"},[n("div",{staticClass:"hero-text"},[e._v("\n        "+e._s(e.header.fields.staticText.heroText)+"\n      ")]),e._v(" "),n("div",{staticClass:"hero-sub-text"},[e._v("\n        "+e._s(e.header.fields.staticText.heroSubText)+"\n      ")])]),e._v(" "),n("div",{staticClass:"sign-up-box"},[n("div",{staticClass:"sign-up-box-text"},[e._v("\n        "+e._s(e.header.fields.staticText.loginBoxText)+"\n      ")]),e._v(" "),n("div",{staticClass:"sign-up-box-sub-text"},[e._v("\n        "+e._s(e.header.fields.staticText.loginBoxSubText)+"\n      ")]),e._v(" "),n("div",{staticClass:"sign-up-field"},[n("v-text-field",{attrs:{solo:"",label:e.header.fields.staticText.namePlaceHolder,"hide-details":"true","prepend-inner-icon":"mdi-map-marker"},model:{value:e.fullName,callback:function(t){e.fullName=t},expression:"fullName"}})],1),e._v(" "),n("div",{staticClass:"sign-up-field"},[n("v-text-field",{attrs:{solo:"",label:e.header.fields.staticText.mobilePlaceHolder,"hide-details":"true","prepend-inner-icon":"mdi-map-marker"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),e._v(" "),n("div",{staticClass:"sign-in-btn"},[e._v("\n        "+e._s(e.header.fields.staticText.signUpBtnTxt)+"\n      ")])])]),e._v(" "),n("div",{staticClass:"hero-image-container"},[n("div",{staticClass:"hero-images-title"},[e._v("\n      "+e._s(e.header.fields.staticText.heroImagesTitle)+"\n    ")])])])}),[],!1,null,null,null);t.default=component.exports;h()(component,{VTextField:m.a})}}]);