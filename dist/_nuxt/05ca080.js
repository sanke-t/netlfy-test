(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{261:function(t,e,n){var r=n(262),c={space:"tibw78pukl8e",accessToken:"2tdY3johvTjJRCtOfikS4-Pu_qT4HLLK4KO4R5bfRqA"};t.exports={createClient:function(){return r.createClient(c)}}},291:function(t,e){},293:function(t,e){},311:function(t,e,n){"use strict";n.r(e);var r=n(9),c=(n(12),n(33),n(41),n(261)),o=Object(c.createClient)(),l={asyncData:function(t){var e=t.env;return Promise.all([o.getEntries({"sys.id":e.CTF_PERSON_ID}),o.getEntries({content_type:e.CTF_BLOG_POST_TYPE_ID,order:"-sys.createdAt"})]).then((function(t){var e=Object(r.a)(t,2),n=e[0],c=e[1];return{person:n.items[0],posts:c.items}})).catch(console.error)}},f=n(45),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.posts,(function(e){return n("li",[t._v("\n      "+t._s(e.fields.title)+"\n    ")])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);