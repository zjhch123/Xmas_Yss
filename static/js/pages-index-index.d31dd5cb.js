(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"08c3":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content",attrs:{"disable-scroll":!0}},[t.show1?n("v-uni-view",{staticClass:"xuanze"},[n("v-uni-picker",{attrs:{value:t.index,range:t.JobList,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerJob.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[n("v-uni-button",{staticStyle:{width:"80%","margin-top":"10px","margin-bottom":"10px"},attrs:{type:"primary"}},[t._v("点这里选择你喜欢的圣诞帽款式哦")]),t._v("🎄 "+t._s(t.hatname))],1)],1)],1):t._e(),t.show1?n("v-uni-view",{staticClass:"userinfo"},[n("v-uni-view",{staticClass:"user-show"},[n("v-uni-image",{staticClass:"user-avatar",attrs:{src:t.avatarHd}}),n("v-uni-view",{staticClass:"user-hat",style:t.hatStyleStr,on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"hat",style:t.hatImgStyleStr,attrs:{id:"hat",src:t.haturl}}),n("v-uni-view",{staticClass:"rotate",style:t.rotateStyleStr,attrs:{id:"rotate"}},[n("v-uni-image",{staticClass:"rotate-icon",attrs:{id:"rotate",src:"/static/img/old.png"}})],1)],1)],1)],1):t._e(),t.show1?n("v-uni-view",{staticClass:"user-buttons"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fanzhuan.apply(void 0,arguments)}}},[t._v("镜像翻转")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.drawC.apply(void 0,arguments)}}},[t._v("生成头像")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fanhuishouye.apply(void 0,arguments)}}},[t._v("返回首页")])],1):t._e(),t.show1?n("p",{staticStyle:{"text-align":"center","margin-top":"5%","font-size":"15px"}},[t._v("❤️tips:按住右下角的圣诞老人进行缩放和旋转哦")]):t._e(),t.show1?t._e():n("p",{staticStyle:{"text-align":"center","padding-top":"50%"}},[t._v("🎄HEllO 来帮你的头像p上圣诞帽吧")]),t.show1?t._e():n("v-uni-view",{staticClass:"user-buttons2"},[n("v-uni-button",{staticClass:"solids",attrs:{"open-type":"getUserInfo"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadAvatar.apply(void 0,arguments)}}},[t._v("上传图片")])],1),n("v-uni-view",{staticClass:"user-buttons3"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.listen.apply(void 0,arguments)}}},[t._v("来点音乐")]),n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stop.apply(void 0,arguments)}}},[t._v("不好听不用了")])],1),n("v-uni-view",{staticClass:"canvas-modal",class:{show:t.showCanvas}},[n("v-uni-canvas",{staticClass:"canvas-avatar",attrs:{id:"avatarCanvas","canvas-id":"avatarCanvas"}}),n("v-uni-view",{staticClass:"user-buttons"},[n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fanhui.apply(void 0,arguments)}}},[t._v("返回")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveAvatar.apply(void 0,arguments)}}},[t._v("保存到相册")])],1),n("p",{staticStyle:{"text-align":"center","margin-top":"10%"}},[t._v("🎄圣诞节快乐")]),n("p",{staticStyle:{"text-align":"center","margin-top":"10%"}},[t._v("🎄クリスマスおめでとうございます")]),n("p",{staticStyle:{"text-align":"center","margin-top":"10%"}},[t._v("🎄Merry Chrismas")]),n("p",{staticStyle:{"text-align":"right","margin-top":"10%","margin-right":"30px","font-size":"10px"}},[t._v("from Sissy🥰")]),n("p",{staticStyle:{"text-align":"right","margin-top":"1%","margin-right":"30px","font-size":"10px"}},[t._v("12/2020")])],1)],1)},a=[]},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function c(t){r(o,i,a,c,s,"next",t)}function s(t){r(o,i,a,c,s,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"2f62":function(t,e,n){"use strict";n.r(e),function(t,r){
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function i(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,"Store",(function(){return m})),n.d(e,"createNamespacedHelpers",(function(){return G})),n.d(e,"install",(function(){return T})),n.d(e,"mapActions",(function(){return H})),n.d(e,"mapGetters",(function(){return A})),n.d(e,"mapMutations",(function(){return P})),n.d(e,"mapState",(function(){return $}));var a="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},o=a.__VUE_DEVTOOLS_GLOBAL_HOOK__;function c(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function s(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function l(t,e){return function(){return t(e)}}var f=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(t,e){this._children[t]=e},f.prototype.removeChild=function(t){delete this._children[t]},f.prototype.getChild=function(t){return this._children[t]},f.prototype.hasChild=function(t){return t in this._children},f.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},f.prototype.forEachChild=function(t){s(this._children,t)},f.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},f.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},f.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(f.prototype,p);var d=function(t){this.register([],t,!1)};function v(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;v(t.concat(r),e.getChild(r),n.modules[r])}}d.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},d.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},d.prototype.update=function(t){v([],this.root,t)},d.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new f(e,n);if(0===t.length)this.root=i;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],i)}e.modules&&s(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},d.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)},d.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return e.hasChild(n)};var g;var m=function(t){var e=this;void 0===t&&(t={}),!g&&"undefined"!==typeof window&&window.Vue&&T(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new d(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var i=this,a=this,o=a.dispatch,s=a.commit;this.dispatch=function(t,e){return o.call(i,t,e)},this.commit=function(t,e,n){return s.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;x(this,u,[],this._modules.root),_(this,u),n.forEach((function(t){return t(e)}));var h=void 0!==t.devtools?t.devtools:g.config.devtools;h&&c(this)},y={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function w(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;x(t,n,[],t._modules.root,!0),_(t,n,e)}function _(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,a={};s(i,(function(e,n){a[n]=l(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=g.config.silent;g.config.silent=!0,t._vm=new g({data:{$$state:e},computed:a}),g.config.silent=o,t.strict&&j(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),g.nextTick((function(){return r.$destroy()})))}function x(t,e,n,r,i){var a=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!a&&!i){var c=M(e,n.slice(0,-1)),s=n[n.length-1];t._withCommit((function(){g.set(c,s,r.state)}))}var u=r.context=k(t,o,n);r.forEachMutation((function(e,n){var r=o+n;E(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;L(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;S(t,r,e,u)})),r.forEachChild((function(r,a){x(t,e,n.concat(a),r,i)}))}function k(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var a=O(n,r,i),o=a.payload,c=a.options,s=a.type;return c&&c.root||(s=e+s),t.dispatch(s,o)},commit:r?t.commit:function(n,r,i){var a=O(n,r,i),o=a.payload,c=a.options,s=a.type;c&&c.root||(s=e+s),t.commit(s,o,c)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return C(t,e)}},state:{get:function(){return M(t.state,n)}}}),i}function C(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var a=i.slice(r);Object.defineProperty(n,a,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function E(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function L(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function S(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function j(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function M(t,e){return e.reduce((function(t,e){return t[e]}),t)}function O(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function T(t){g&&t===g||(g=t,i(g))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},m.prototype.commit=function(t,e,n){var r=this,i=O(t,e,n),a=i.type,o=i.payload,c=(i.options,{type:a,payload:o}),s=this._mutations[a];s&&(this._withCommit((function(){s.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})))},m.prototype.dispatch=function(t,e){var n=this,r=O(t,e),i=r.type,a=r.payload,o={type:i,payload:a},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var s=c.length>1?Promise.all(c.map((function(t){return t(a)}))):c[0](a);return new Promise((function(t,e){s.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},m.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},m.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},m.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},m.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},m.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),x(this,this.state,t,this._modules.get(t),n.preserveState),_(this,this.state)},m.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=M(e.state,t.slice(0,-1));g.delete(n,t[t.length-1])})),w(this)},m.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},m.prototype.hotUpdate=function(t){this._modules.update(t),w(this,!0)},m.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(m.prototype,y);var $=U((function(t,e){var n={};return I(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=N(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),P=U((function(t,e){var n={};return I(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var a=N(this.$store,"mapMutations",t);if(!a)return;r=a.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),A=U((function(t,e){var n={};return I(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||N(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),H=U((function(t,e){var n={};return I(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var a=N(this.$store,"mapActions",t);if(!a)return;r=a.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),G=function(t){return{mapState:$.bind(null,t),mapGetters:A.bind(null,t),mapMutations:P.bind(null,t),mapActions:H.bind(null,t)}};function I(t){return R(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function R(t){return Array.isArray(t)||u(t)}function U(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function N(t,e,n){var r=t._modulesNamespaceMap[n];return r}var W={Store:m,install:T,version:"3.4.0",mapState:$,mapMutations:P,mapGetters:A,mapActions:H,createNamespacedHelpers:G};e["default"]=W}.call(this,n("c8ba"),n("5a52")["default"])},"31da":function(t,e,n){var r=n("ff5a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("37aea4aa",r,!0,{sourceMap:!1,shadowMode:!1})},4722:function(t,e,n){"use strict";n.r(e);var r=n("8633"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"7a26":function(t,e,n){"use strict";var r=n("31da"),i=n.n(r);i.a},8633:function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("99af"),n("a15b"),n("ace4"),n("d3b7"),n("e25e"),n("ac1f"),n("3ca3"),n("1276"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("ddb0"),n("2b3d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),a=(n("2f62"),{data:function(){return{JobList:[{id:0,name:"经典圣诞帽",src:"/static/img/hat.png"},{id:1,name:"经典圣诞帽的对称版",src:"/static/img/hat1.png"},{id:2,name:"冲天款圣诞帽",src:"/static/img/hat2.png"},{id:3,name:"沧桑版圣诞帽",src:"/static/img/hat3.png"},{id:4,name:"绿色的..假如你喜欢",src:"/static/img/hatgreen.png"},{id:5,name:"不喜欢帽子？带个鹿角吧",src:"/static/img/beer.png"},{id:6,name:"不喜欢带？搞个花环吧 过节呢～",src:"/static/img/flower.png"}],index:0,haturl:"/static/img/hat.png",hatname:"经典圣诞帽",text:"",showCanvas:!1,imgUrl:"",show1:!1,canvasTempFilePath:"",defaultHatWidth:100,defaultHatHeight:100,hatTop:140,hatLeft:140,rotateTop:0,rotateLeft:0,currentHatTop:"",currentHatLeft:"",currentRotateTop:"",currentRotateLeft:"",touchTarget:"",currentPos:{x:"",y:""},beforeAngel:45,hatScale:1,hatRotate:0,rotatey:"0",innerAudioContext:null,flag:!1}},computed:{avatarHd:function(){if(this.imgUrl)return this.imgUrl},hatHalfWidth:function(){return this.defaultHatWidth/2},hatRadius:function(){return Math.sqrt(2*this.hatHalfWidth*this.hatHalfWidth)},hatStyleStr:function(){return"transform:translate(".concat(this.hatLeft,"px,").concat(this.hatTop,"px)")},hatImgStyleStr:function(){return"transform:scale(".concat(this.hatScale,") rotate(").concat(this.hatRotate,"deg) rotateY(").concat(this.rotatey,")")},rotateStyleStr:function(){return"transform:translate(".concat(this.rotateLeft,"px,").concat(this.rotateTop,"px)")}},onLoad:function(){},methods:{PickerJob:function(e){t.log(e),this.index=e.detail.value,this.haturl=this.JobList[parseInt(e.detail.value)].src,this.hatname=this.JobList[parseInt(e.detail.value)].name,this.rotatey="0"},onGetUserInfo:function(t){this.rotatey="0"},getHdUrl:function(e){t.log(e);var n=e.split("/");return n[n.length-1]=0,n=n.join("/"),n},fanhuishouye:function(){this.show1=!1,this.imgUrl=""},handleTouchStart:function(t){this.currentHatTop=this.hatTop,this.currentHatLeft=this.hatLeft,this.currentRotateLeft=this.rotateLeft,this.currentRotateTop=this.rotateTop,this.touchTarget=t.target.id,this.currentPos={x:t.touches[0].clientX,y:t.touches[0].clientY}},handleTouchMove:function(e){if(e.preventDefault(),this.touchTarget){var n={x:e.touches[0].clientX,y:e.touches[0].clientY},r=n.x-this.currentPos.x,i=n.y-this.currentPos.y;if("hat"===this.touchTarget)this.hatLeft=this.hatLeft+r,this.hatTop=this.hatTop+i;else if("rotate"===this.touchTarget){this.rotateLeft=this.rotateLeft+r,this.rotateTop=this.rotateTop+i;var a=this.rotateLeft+this.hatHalfWidth,o=this.rotateTop+this.hatHalfWidth;t.log(a,o);var c=Math.sqrt(a*a+o*o);this.hatScale=c/this.hatRadius;var s=Math.atan2(o,a)/Math.PI*180;this.hatRotate=s-this.beforeAngel+this.hatRotate,this.beforeAngel=s}this.currentPos=n}},handleTouchEnd:function(t){this.touchTarget=""},listen:function(){this.innerAudioContext=uni.createInnerAudioContext(),this.innerAudioContext.autoplay=!0,this.innerAudioContext.loop=!0,this.innerAudioContext.src="http://mp3.9ku.com/mp3/543/542392.mp3",this.innerAudioContext.onPlay((function(){t.log("开始播放")})),this.innerAudioContext.onError((function(e){t.log(e.errMsg),t.log(e.errCode)}))},stop:function(){this.innerAudioContext.stop()},fanzhuan:function(){"180deg"==this.rotatey?this.rotatey="0":this.rotatey="180deg"},uploadAvatar:function(){var e=this;uni.showLoading({title:"上传中"}),uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(n){uni.hideLoading();var r=n.tempFilePaths[0];e.imgUrl=r,t.log(e.imgUrl),e.show1=!0,e.rotatey="0"},fail:function(e){uni.hideLoading(),t.error(e)}})},drawC:function(){0==this.flag&&(this.flag=!0,this.drawCanvas(),t.log(1)),this.drawCanvas(),t.log(2)},drawCanvas:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.log(123),e.showCanvas=!0,uni.showLoading({title:"正在生成图片"}),n.next=5,e.getImagePath();case 5:r=n.sent,t.log(r),i=uni.getSystemInfoSync().windowWidth,t.log(i),a=uni.createCanvasContext("avatarCanvas"),o=2*e.hatHalfWidth*e.hatScale,a.clearRect(0,0,i,i),a.drawImage(r,0,0,i,i),a.translate(e.hatLeft+e.hatHalfWidth,e.hatTop+e.hatHalfWidth),a.rotate(e.hatRotate*Math.PI/180),"180deg"==e.rotatey&&(t.log(100),a.scale(-1,1)),a.drawImage(e.haturl,-o/2,-o/2,o,o),a.draw(),uni.hideLoading();case 19:case"end":return n.stop()}}),n)})))()},test:function(){var e=this;uni.getImageInfo({src:this.avatarHd,success:function(n){t.log(e.avatarHd),t.log(n.path)}})},getImagePath:function(){var e=this;return new Promise((function(n,r){e.imgUrl&&n(e.imgUrl),uni.getImageInfo({src:e.avatarHd,success:function(r){t.log(e.avatarHd),t.log(r.path),n(r.path)}})}))},fanhui:function(){this.showCanvas=!1},saveAvatar:function(){var t=this;uni.canvasToTempFilePath({x:0,y:0,width:uni.getSystemInfoSync().windowWidth,height:uni.getSystemInfoSync().windowWidth,canvasId:"avatarCanvas",success:function(e){var n=t.base64ToBlob(e.tempFilePath),r=(URL.createObjectURL(n),document.createElement("a"));r.href=URL.createObjectURL(n),r.download="圣诞头像.png";var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(i)}})},base64ToBlob:function(t){for(var e=t.split(";base64,"),n=e[0].split(":")[1],r=window.atob(e[1]),i=r.length,a=new Uint8Array(i),o=0;o<i;++o)a[o]=r.charCodeAt(o);return new Blob([a],{type:n})}}});e.default=a}).call(this,n("5a52")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,h=e.regeneratorRuntime;if(h)u&&(t.exports=h);else{h=e.regeneratorRuntime=u?t.exports:{},h.wrap=w;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},g={};g[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m($([])));y&&y!==r&&i.call(y,o)&&(g=y);var b=C.prototype=x.prototype=Object.create(g);k.prototype=b.constructor=C,C.constructor=k,C[s]=k.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},h.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[c]=function(){return this},h.AsyncIterator=L,h.async=function(t,e,n,r){var i=new L(w(t,e,n,r));return h.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(b),b[s]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},h.values=$,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,a=Object.create(i.prototype),o=new T(r||[]);return a._invoke=S(t,n,o),a}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function k(){}function C(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(n,r,a,o){var c=_(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,o)}))}o(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function S(t,e,n){var r=l;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return P()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var c=j(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=_(t,e,n);if("normal"===s.type){if(r=n.done?d:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=_(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},bcf8:function(t,e,n){"use strict";n.r(e);var r=n("08c3"),i=n("4722");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("7a26");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"acbcfbc2",null,!1,r["a"],o);e["default"]=s.exports},ff5a:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-acbcfbc2]{background-color:#fff}.user-show[data-v-acbcfbc2]{display:block;text-align:center;position:relative}.xuanze[data-v-acbcfbc2]{padding-top:20px;padding-bottom:20px;font-size:20px}.xuanze .picker[data-v-acbcfbc2]{text-align:center}.user-avatar[data-v-acbcfbc2]{display:block;width:100vw;height:100vw;background-repeat:no-repeat}.user-hat[data-v-acbcfbc2]{position:absolute;top:0;left:0;height:104px;width:104px}.user-hat .hat[data-v-acbcfbc2]{width:100px;height:100px}.user-hat .rotate[data-v-acbcfbc2]{width:40px;height:40px;padding:5px;position:absolute;right:-15px;bottom:-15px;background-color:#fff;-webkit-border-radius:50%;border-radius:50%}.user-hat .rotate .rotate-icon[data-v-acbcfbc2]{width:40px;height:40px}.user-nick[data-v-acbcfbc2]{display:block;text-align:center}.user-buttons[data-v-acbcfbc2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:20px}.user-buttons uni-button[data-v-acbcfbc2]{display:block;margin:0 8px;width:auto}.user-buttons2[data-v-acbcfbc2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:20px;margin-top:50%}.user-buttons2 uni-button[data-v-acbcfbc2]{display:block;margin:0 8px;width:auto}.user-buttons3[data-v-acbcfbc2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:20px;margin-bottom:10%}.user-buttons3 uni-button[data-v-acbcfbc2]{display:block;margin:0 8px;width:auto}.canvas-modal[data-v-acbcfbc2]{width:100%;height:100%;position:absolute;display:none;top:0;left:0;background-color:#fff}.canvas-modal.show[data-v-acbcfbc2]{display:block}.canvas-avatar[data-v-acbcfbc2]{width:100vw;height:100vw;margin:0 auto;-webkit-border-radius:4px;border-radius:4px}.center-point[data-v-acbcfbc2]{position:absolute;top:50%;left:50%;width:6px;height:6px;background-color:red;margin-left:-3px;margin-top:-3px}',""]),t.exports=e}}]);