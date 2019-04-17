(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63484eb8"],{3825:function(t,e,o){},"688a":function(t,e,o){"use strict";var a=o("3825"),s=o.n(a);s.a},bcc0:function(t,e,o){"use strict";o.r(e);var a,s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"order order-wrap"},[o("mt-header",{attrs:{fixed:"",title:"填写订单"}},[o("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[o("mt-button",{attrs:{icon:"back"}})],1)],1),o("div",{staticClass:"order-content"},[o("section",[o("h5",[t._v("收货地址")]),o("mt-field",{attrs:{placeholder:"填写收货地址",type:"textarea",rows:"4"},model:{value:t.orderInfo.address,callback:function(e){t.$set(t.orderInfo,"address",e)},expression:"orderInfo.address"}})],1),o("section",[o("h5",[t._v("收货人电话")]),o("mt-field",{attrs:{placeholder:"填写收货人电话",type:"tel"},model:{value:t.orderInfo.phone,callback:function(e){t.$set(t.orderInfo,"phone",e)},expression:"orderInfo.phone"}})],1),o("section",[o("h5",[t._v("商品列表")]),o("div",{staticClass:"cart-area"},[o("div",{staticClass:"cart-list"},t._l(t.orderInfo.goods,function(e){return t.orderInfo.goods?o("div",{key:e.id,staticClass:"cart-item"},[o("div",{staticClass:"cart-item-box"},[o("div",{staticClass:"item-detail"},[o("div",[o("div",{staticClass:"item-img"},[o("a",[o("img",{attrs:{src:t.getThumb(e)}})])]),o("div",{staticClass:"item-info"},[o("a",{attrs:{href:""}},[o("h3",{staticClass:"title"},[t._v(t._s(e.name))])]),o("div",{staticClass:"pay"},[o("div",{staticClass:"pay-price"},[o("div",{staticClass:"price"},[o("p",{staticClass:"o-t-price"},[o("span",{staticClass:"major"},[t._v(t._s(e.purchasePrice))])])])]),o("div",{staticClass:"edit-quantity"},[o("p",{staticClass:"btn-minus",on:{click:function(o){return o.preventDefault(),t.changeGoodCount(e,"minus")}}},[o("a",{staticClass:"sbtn minus off"},[o("icon",{attrs:{name:"minus"}})],1)]),o("p",{staticClass:"btn-input"},[o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.count,expression:"good.count",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.count},on:{blur:[function(o){return t.changeGoodCount(e,"input")},function(e){return t.$forceUpdate()}],input:function(o){o.target.composing||t.$set(e,"count",t._n(o.target.value))}}})]),o("p",{staticClass:"btn-plus",on:{click:function(o){return o.preventDefault(),t.changeGoodCount(e,"plus")}}},[o("a",{staticClass:"sbtn plus"},[o("icon",{attrs:{name:"plus"}})],1)])])])])])])])]):t._e()}),0)])])]),o("div",{staticClass:"order-footer"},[o("h5",{staticClass:"order-total-price"},[t._v("￥"+t._s(t.orderInfo.amount))]),o("button",{staticClass:"bottom-bar-btn buy",on:{click:function(e){return t.handleSubmitOrder()}}},[t._v("提交订单")])])],1)},r=[],n=o("bd86"),i=(o("7f7f"),o("d225")),c=o("b0b4"),d=o("308d"),u=o("6bb5"),l=o("4e2b"),f=o("9ab4"),b=o("60a3"),p=o("4bb5"),m=o("76a0"),h=o("d257"),v=function(t){function e(){return Object(i["a"])(this,e),Object(d["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"getThumb",value:function(t){if(t&&t.imgs)return t.imgs[0].url}},{key:"changeGoodCount",value:function(t,e){switch(console.log("good: ",t),e){case"minus":t.count-=1;break;case"plus":t.count+=1;break;default:break}this.changeOrderGood(t)}},{key:"handleSubmitOrder",value:function(){if(this.orderInfo.address)if(this.orderInfo.phone)if(Object(h["a"])(this.orderInfo.phone)){var t=this.orderInfo.goods;this.orderInfo.goods=t.map(function(t){return{id:t._id,count:t.count}}),this.orderInfo.amount=t.reduce(function(t,e){return e.originPrice+t},0),this.submitOrder(this.orderInfo).then(function(t){if(201===t.status){var e=t.result,o=e.order,a=e.payurl;o._id;window.location=a}})}else Object(m["Toast"])({message:"手机号格式不正确！"});else Object(m["Toast"])({message:"收货人手机号不能为空！"});else Object(m["Toast"])({message:"收货地址不能为空！"})}}]),e}(b["c"]);f["a"]([Object(p["b"])("orderInfo",{namespace:"order"})],v.prototype,"orderInfo",void 0),f["a"]([Object(p["b"])("currentUser",{namespace:"auth"})],v.prototype,"currentUser",void 0),f["a"]([Object(p["a"])("order/changeOrderGood")],v.prototype,"changeOrderGood",void 0),f["a"]([Object(p["a"])("order/submitOrder")],v.prototype,"submitOrder",void 0),v=f["a"]([Object(b["a"])({components:(a={},Object(n["a"])(a,m["Header"].name,m["Header"]),Object(n["a"])(a,m["Button"].name,m["Button"]),Object(n["a"])(a,m["Field"].name,m["Field"]),a)})],v);var C=v,g=C,O=(o("688a"),o("2877")),j=Object(O["a"])(g,s,r,!1,null,"7a574524",null);e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-63484eb8.3b410a82.js.map