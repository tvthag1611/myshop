(this.webpackJsonpmyshop=this.webpackJsonpmyshop||[]).push([[0],{24:function(e,a,t){e.exports=t(41)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(11),l=t.n(r),m=(t(29),t(30),t(31),t(5)),o=t(4),s=Object(m.b)((function(e){return{cart:e.products.cart}}),null)((function(e){var a=e.cart;return n.a.createElement("div",{className:"header"},n.a.createElement(o.b,{exact:"true",to:"/",className:"link-logo"},"tvthagSHOP"),n.a.createElement("div",{className:"hidden-bar"},n.a.createElement(o.c,{to:"/phone",className:"nav-link"},"\u0110i\u1ec7n tho\u1ea1i"),n.a.createElement(o.c,{to:"/book",className:"nav-link"},"S\xe1ch"),n.a.createElement(o.c,{to:"/laptop",className:"nav-link"},"Laptop")),n.a.createElement("div",{className:"dropdown responsive-bar"},n.a.createElement("button",{className:"btn btn-secondary",type:"button",id:"triggerId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fas fa-bars"})),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"triggerId"},n.a.createElement(o.b,{to:"/phone",className:"dropdown-item"},"\u0110i\u1ec7n tho\u1ea1i"),n.a.createElement(o.b,{to:"/book",className:"dropdown-item"},"S\xe1ch"),n.a.createElement(o.b,{to:"/laptop",className:"dropdown-item"},"Laptop"))),n.a.createElement("div",{className:"header__cart"},n.a.createElement(o.b,{to:"/cart"},n.a.createElement("i",{className:"fas fa-shopping-cart"})),n.a.createElement("div",{className:"cart__count"},a.length)),n.a.createElement("div",{className:"header__profile"}))})),i=t(14),u=t(8),d=(t(37),Object(m.b)((function(e){return{cart:e.products.cart}}),(function(e,a){return{deleteProduct:function(a){e(function(e){return{type:"DELETE_PRODUCT",id:e}}(a))}}}))((function(e){var a=e.cart,t=e.deleteProduct,r=Object(c.useState)([]),l=Object(u.a)(r,2),m=l[0],o=l[1];Object(c.useEffect)((function(){a.forEach((function(e){void 0===m.find((function(a){return a.cart===e}))&&m.push({mount:1,isChoose:!0,cart:e})})),m.forEach((function(e,t){void 0===a.find((function(a){return a===e.cart}))&&m.splice(t,1)})),o(Object(i.a)(m))}),[a]);var s=0;return m.forEach((function(e){e.isChoose&&(s+=e.mount*e.cart.price)})),n.a.createElement("div",{className:"item container"},n.a.createElement("h1",null,"Gi\u1ecf h\xe0ng c\u1ee7a b\u1ea1n:"),m.length>0?m.map((function(e){return n.a.createElement("div",{className:"item__product",key:e.cart.id},n.a.createElement("input",{type:"checkbox",className:"choose__item",checked:e.isChoose,onChange:function(a){o(m.map((function(t){return t.cart.id===e.cart.id?(t.isChoose=a.target.checked,t):t})))}}),n.a.createElement("img",{src:e.cart.src,alt:e.cart.name,className:"img_item"}),n.a.createElement("div",{className:"info__item"},n.a.createElement("h3",null,e.cart.name),n.a.createElement("strong",{className:"price__item"},e.cart.price,"\u20ab")),n.a.createElement("div",{className:"number__item"},n.a.createElement("button",{className:"btn btn-secondary add__item",onClick:function(){o(m.map((function(a){return a.cart.id===e.cart.id?(a.mount>0&&(a.mount-=1),a):a})))}},"-"),n.a.createElement("div",{className:"amount__item"},e.mount),n.a.createElement("button",{className:"btn btn-secondary add__item",onClick:function(){o(m.map((function(a){return a.cart.id===e.cart.id?(a.mount+=1,a):a})))}},"+")),n.a.createElement("i",{className:"fa fa-trash delete_item","aria-hidden":"true",onClick:function(){t(e.cart.id)}}))})):"",0===m.length?"Gi\u1ecf h\xe0ng c\u1ee7a b\u1ea1n \u0111ang tr\u1ed1ng":"",n.a.createElement("br",null),0!==m.length?n.a.createElement("div",null,n.a.createElement("h4",null,"T\u1ed5ng gi\xe1:"),n.a.createElement("strong",{className:"price__item"},s,"\u20ab"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("button",{type:"button",name:"",id:"",className:"btn btn-primary"},"Thanh to\xe1n")):"")}))),p=t(1);t(38);function h(){var e=Object(c.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)(!1),m=Object(u.a)(l,2),o=m[0],s=m[1],i=Object(c.useState)(!1),d=Object(u.a)(i,2),p=d[0],h=d[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"brand__phone",onClick:function(){r(!t)}},"\u0110i\u1ec7n tho\u1ea1i"),n.a.createElement("div",{className:t?"":"brand__none"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Iphone(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Samsung(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Xiaomi(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Oppo(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Realme(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Bphone(0)"))),n.a.createElement("div",{className:"brand__phone",onClick:function(){s(!o)}},"S\xe1ch"),n.a.createElement("div",{className:o?"":"brand__none"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"S\xe1ch chuy\xean ng\xe0nh(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"S\xe1ch ph\xe1t tri\u1ec3n b\u1ea3n th\xe2n(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Ti\u1ec3u thuy\u1ebft(0)"))),n.a.createElement("div",{className:"brand__phone",onClick:function(){h(!p)}},"Laptop"),n.a.createElement("div",{className:p?"":"brand__none"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Dell(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Asus(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Macbook(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"Thinkpad(0)")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"",id:"",value:"checkedValue"}),"HP(0)"))))}t(39);function b(){return n.a.createElement("div",{className:"product__header"},n.a.createElement("input",{type:"text",className:"form-control product_search",name:"search",placeholder:"Search"}),n.a.createElement("div",{className:"dropdown open"},n.a.createElement("button",{className:"btn dropdown-toggle",type:"button",id:"triggerId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"S\u1eafp x\u1ebfp theo"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"triggerId"},n.a.createElement("button",{className:"dropdown-item"},"T\u1eeb th\u1ea5p \u0111\u1ebfn cao"),n.a.createElement("button",{className:"dropdown-item"},"T\u1eeb cao \u0111\u1ebfn th\u1ea5p"),n.a.createElement("button",{className:"dropdown-item"},"Ph\u1ed5 bi\u1ebfn"))))}t(40);var E=Object(m.b)((function(e){return{products:e.products.products}}),(function(e,a){return{addCart:function(a){e(function(e){return{type:"ADD_CART",cart:e}}(a))}}}))((function(e){var a=e.products,t=e.addCart;return n.a.createElement("div",{className:"product"},a.map((function(e){return n.a.createElement("div",{className:"product__item",key:e.id},n.a.createElement("img",{src:e.src,alt:e.name,className:"img_product"}),n.a.createElement("h4",{className:"name_product"},e.name),n.a.createElement("p",{className:"price_product"},e.price,"\u20ab"),n.a.createElement("button",{type:"button",name:"",id:"",className:"btn btn-primary btn-product",onClick:function(){return t(e)}},"Th\xeam v\xe0o gi\u1ecf h\xe0ng"))})))}));function f(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-2 content__left"},n.a.createElement(h,null)),n.a.createElement("div",{className:"col-10 content__right"},n.a.createElement(b,null),n.a.createElement(E,null)))}var k=function(){return n.a.createElement(o.a,null,n.a.createElement(s,null),n.a.createElement("div",{className:"row content-app"},n.a.createElement(p.a,{path:"/cart",component:d}),n.a.createElement(p.a,{path:"/",exact:!0,component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(7),v=t(20),g={products:[{id:1,src:"https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-chi-tiet-1-400x460.png",name:"Samsung Galaxy Note 10 Lite",price:1149e4},{id:2,src:"https://clickbuy.com.vn/uploads/2019/03/iPhone-7-jetback.png",name:"Iphone 7 Lock 32Gb c\u0169",price:319e4},{id:3,src:"https://clickbuy.com.vn/uploads/2019/03/apple-iphone-xr-vang-600x600.png",name:"Iphone XR 64Gb qu\u1ed1c t\u1ebf c\u0169",price:1069e4},{id:4,src:"https://didongthongminh.vn/upload_images/2019/01/SAMSUNG-GALAXY-S10-WHITE.png",name:"Samsung Galaxy S10",price:829e4},{id:5,src:"https://phuongtung.vn/pt/images/detailed/10/oppo-a1k-400x460.png",name:"Oppo A1K",price:269e4},{id:6,src:"https://cdn.tgdd.vn/Products/Images/42/216172/oppo-reno3-pro-den-400x460-400x460.png",name:"Oppo Reno3 Pro",price:1399e4}],cart:[]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CART":return Object(v.a)({},e,{cart:[].concat(Object(i.a)(e.cart),[a.cart])});case"DELETE_PRODUCT":var t=e.cart.filter((function(e){return e.id!==a.id}));return Object(v.a)({},e,{cart:t});default:return e}},y=Object(N.b)({products:_}),x=Object(N.c)(y);l.a.render(n.a.createElement(m.a,{store:x},n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.cb0d5223.chunk.js.map