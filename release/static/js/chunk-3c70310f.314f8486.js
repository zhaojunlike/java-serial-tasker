(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c70310f"],{"0fe6":function(t,e,r){"use strict";var n=r("7e33"),i=r.n(n);i.a},"1af6":function(t,e,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"20fd":function(t,e,r){"use strict";var n=r("d9f6"),i=r("aebd");t.exports=function(t,e,r){e in t?n.f(t,e,i(0,r)):t[e]=r}},"549b":function(t,e,r){"use strict";var n=r("d864"),i=r("63b6"),a=r("241e"),s=r("b0dc"),o=r("3702"),c=r("b447"),u=r("20fd"),f=r("7cd6");i(i.S+i.F*!r("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,i,l,m=a(t),p="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,d=void 0!==g,v=0,b=f(m);if(d&&(g=n(g,h>2?arguments[2]:void 0,2)),void 0==b||p==Array&&o(b))for(e=c(m.length),r=new p(e);e>v;v++)u(r,v,d?g(m[v],v):m[v]);else for(l=b.call(m),r=new p;!(i=l.next()).done;v++)u(r,v,d?s(l,g,[i.value,v],!0):i.value);return r.length=v,r}})},"54a1":function(t,e,r){r("6c1c"),r("1654"),t.exports=r("95d5")},"65eb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"game container-fluid"},[r("h1",{staticClass:"page-title text-center"},[t._v(t._s(t.game.title)+" "+t._s(t.title)+" "+t._s(t.counter))]),r("p",{staticClass:"mb-2 text-center"},[r("router-link",{attrs:{to:"/"}},[t._v("返回首页")])],1),t.counter>=3?r("p",{staticClass:"tip text-center"},[t._v("[ "+t._s(t.game.title)+" ] 跳关PLC与服务器的连接已掉线，请检查线路或重启服务器。")]):t._e(),r("div",{staticClass:"buttons"},[r("i-button",{attrs:{type:"error"},on:{click:t.reset}},[t._v("一键复位")]),r("i-button",{attrs:{type:"warning"},on:{click:t.setReady}},[t._v("一键准备")]),r("i-button",{attrs:{type:"success"},on:{click:t.setStart}},[t._v("一键开始")]),r("i-button",{attrs:{type:"success"},on:{click:t.testLine}},[t._v("测试线路")]),r("i-button",{attrs:{type:"primary"},on:{click:t.refresh}},[t._v("立即同步")]),r("i-button",{attrs:{type:"info",size:"small"},on:{click:t.levelControl}},[t._v("关卡状态")]),r("i-button",{attrs:{type:"info",size:"small"},on:{click:t.outputControl}},[t._v("输出控制")]),r("i-button",{attrs:{type:"info",size:"small"},on:{click:t.inputStatus}},[t._v("输入状态")])],1),r("div",{staticClass:"room-container mt-5"},[r("router-view")],1)])},i=[],a=(r("ac6a"),r("75fc")),s=(r("96cf"),r("3b8d")),o=r("7424"),c={name:"game",data:function(){return{levels:[],isConnected:!1,rooms:[],game:{title:"加载中..."},timer:0,timerNotice:0,loading:!1,gameId:0,counter:0}},methods:{reset:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==confirm("确认进行一键复位操作？")){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,o["a"].post("/game/"+this.gameId+"/reset");case 4:t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setReady:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==confirm("确认进行一键准备操作？")){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,o["a"].post("/game/"+this.gameId+"/ready");case 4:t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setStart:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==confirm("确认进行一键开始操作？")){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,o["a"].post("/game/"+this.gameId+"/start");case 4:t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),testLine:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==confirm("确认进行测试线路操作？")){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,o["a"].post("/game/"+this.gameId+"/test");case 4:t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getGame:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.counter++,t.next=3,o["a"].get("/game/"+this.gameId);case 3:e=t.sent,e.ok||this.$Message.error("服务器发送失败"),r=e.data.data,this.counter=0,this.rooms=Object(a["a"])(r.rooms),this.$store.commit("SET_ROOMS",this.rooms);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),refresh:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getGame();case 2:this.$Message.success("数据同步成功");case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),change:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,r){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].post("/game/".concat(this.gameId,"/set"),{room:e.id,level:r.value});case 2:n=t.sent,n.ok||this.$Message.error("服务器发送失败"),i="切换房间：".concat(e.title," 到关卡: ").concat(r.title," 中...."),this.$Notice.info({title:"切换关卡",desc:i});case 6:case"end":return t.stop()}},t,this)}));function e(e,r){return t.apply(this,arguments)}return e}(),getNotices:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].get("/game/message");case 2:if(e=t.sent,e.ok){t.next=5;break}return t.abrupt("return",this.$Message.error("服务器获取失败"));case 5:r=e.data.data,r.forEach(function(t){"error"===t.theme?n.$Notice.error({title:"服务器通知",desc:t.message}):"primary"===t.theme&&n.$Notice.info({title:"服务器通知",desc:t.message})});case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),outputControl:function(){this.$router.push("/game/".concat(this.gameId,"/control"))},inputStatus:function(){this.$router.push("/game/".concat(this.gameId,"/status"))},levelControl:function(){this.$router.push("/game/".concat(this.gameId,"/main"))}},computed:{title:function(){return this.$store.state.title}},beforeDestroy:function(){this.timerNotice&&clearInterval(this.timerNotice),this.timer&&clearInterval(this.timer)},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,this.game.id=e,this.gameId=e,this.isConnected=!0,this.timer=setInterval(Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.getGame();case 2:case"end":return t.stop()}},t,this)})),1e3),this.timerNotice=setInterval(Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.getNotices();case 2:case"end":return t.stop()}},t,this)})),1500),t.next=8,this.getGame();case 8:return t.next=10,this.getNotices();case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},u=c,f=(r("0fe6"),r("2877")),l=Object(f["a"])(u,n,i,!1,null,"e703a7de",null);l.options.__file="game.vue";e["default"]=l.exports},"75fc":function(t,e,r){"use strict";var n=r("a745"),i=r.n(n);function a(t){if(i()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var s=r("774e"),o=r.n(s),c=r("c8bb"),u=r.n(c);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(t){return a(t)||f(t)||l()}r.d(e,"a",function(){return m})},"774e":function(t,e,r){t.exports=r("d2d5")},"7e33":function(t,e,r){},"95d5":function(t,e,r){var n=r("40c3"),i=r("5168")("iterator"),a=r("481b");t.exports=r("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||a.hasOwnProperty(n(e))}},a745:function(t,e,r){t.exports=r("f410")},ac6a:function(t,e,r){for(var n=r("cadf"),i=r("0d58"),a=r("2aba"),s=r("7726"),o=r("32e9"),c=r("84f2"),u=r("2b4c"),f=u("iterator"),l=u("toStringTag"),m=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(p),g=0;g<h.length;g++){var d,v=h[g],b=p[v],w=s[v],y=w&&w.prototype;if(y&&(y[f]||o(y,f,m),y[l]||o(y,l,v),c[v]=m,b))for(d in n)y[d]||a(y,d,n[d],!0)}},c8bb:function(t,e,r){t.exports=r("54a1")},d2d5:function(t,e,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-3c70310f.314f8486.js.map