(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n.n(s),a=n(2),o=n.n(a),r=n(3),l=n(4),c=n(6),u=n(5),d=(n(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={visibleGoods:[],isStartButtonVisible:!0},t.makeListVisibleHandler=function(){t.setState((function(t){return{visibleGoods:[].concat(d),isStartButtonVisible:!1}}))},t.reverseListHandler=function(){t.setState((function(t){return{visibleGoods:t.visibleGoods.reverse()}}))},t.sortAlphabeticallyHandler=function(){t.setState((function(t){return{visibleGoods:t.visibleGoods.sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLengthHandler=function(){t.setState((function(t){return{visibleGoods:t.visibleGoods.sort((function(t,e){return t.length-e.length}))}}))},t.resetListHandler=function(){t.setState((function(t){return{visibleGoods:[].concat(d)}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Goods"),i.a.createElement("ul",null,this.state.visibleGoods.map((function(t){return i.a.createElement("li",{key:"good",className:"list__item"},t)}))),i.a.createElement("button",{type:"button",className:this.state.isStartButtonVisible||"hidden",onClick:this.makeListVisibleHandler},"Start"),i.a.createElement("button",{type:"button",className:!this.state.isStartButtonVisible||"hidden",onClick:this.reverseListHandler},"Reverse"),i.a.createElement("button",{type:"button",className:!this.state.isStartButtonVisible||"hidden",onClick:this.sortAlphabeticallyHandler},"Sort alphabetically"),i.a.createElement("button",{type:"button",className:!this.state.isStartButtonVisible||"hidden",onClick:this.sortByLengthHandler},"Sort by length"),i.a.createElement("button",{type:"button",className:!this.state.isStartButtonVisible||"hidden",onClick:this.resetListHandler},"Reset"))}}]),n}(i.a.Component);o.a.render(i.a.createElement(b,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.31d1e5db.chunk.js.map