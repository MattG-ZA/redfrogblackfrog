(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(24)},,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(7),s=t.n(n),l=(t(14),t(1)),i=t(2),d=t(4),o=t(3),h=t(5),u=(t(16),t(18),t(20),function(e){var a=e.showFace?"card suit".concat(e.suit):"card back";return"deckCard"===e.suit&&(a+=" centre"),a}),C=function(e,a){var t={};return t.transform=function(e,a){var t="none";if("circleCards"===a.type){var r=360/(a.total-1),c="deckCard"===e.suit?0:15;t="rotate(".concat(e.index*r,"deg) translate(").concat(c,"em) rotate(").concat(360-e.index*r,"deg)")}else if("playerCards"===a.type){var n=Math.floor(a.total/2),s=35/n;a.total/2%1===0&&e.index>=n&&(e.index+=1),t="rotate(".concat(e.index*s-35,"deg)")}return t}(e,a),e.highlight&&(t.zoom=1.1,t.zIndex=1e3,t.boxShadow="4px 4px 8px rgba(0,0,0,0.3)"),t},p=function(e){var a=e.card,t=e.totalCards,r=e.selectCard,n=e.highlightCard;return a.type=t.type,c.a.createElement("span",{onClick:function(){r(a),n(a)},style:C(a,t),className:u(a)},c.a.createElement("span",null,a.showFace&&c.a.createElement("p",null,a.display)))},f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(o.a)(a).call(this,e))).highlightCard=function(e){e.showFace&&(t.props.playerHand.forEach(function(e){e.highlight=!1}),e.highlight=!0,t.setState({highlightCard:e}))},t.state={highlightCard:{}},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.playerHand,r=a.player,n=a.selectCard;return c.a.createElement("div",{className:"player-card-wrapper "+r},t.map(function(a,r){return a.index=r,c.a.createElement(p,{key:r,card:a,totalCards:{total:t.length,type:"playerCards"},selectCard:n,highlightCard:e.highlightCard})}))}}]),a}(c.a.Component),y=(t(22),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(o.a)(a).call(this,e))).addCard=function(){var e=t.state.circleCards;e.push({value:10,suit:"hearts",display:10,showFace:!0,index:e.length}),t.setState({circleCards:e})},t.removeCard=function(){var e=t.state.circleCards;e.splice(e.length-1,1),t.setState({circleCards:e})},t.highlightCard=function(e){console.log("Highlight CIRCLE card")},t.state={circleCards:e.circleCards},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.selectCard;return c.a.createElement("div",{className:"centre-container"},c.a.createElement("button",{style:{display:"block"},onClick:this.addCard},"Add"),c.a.createElement("button",{style:{display:"block"},onClick:this.removeCard},"Remove"),c.a.createElement("div",{className:"circle-container"},this.state.circleCards.map(function(t,r){return t.index=r,c.a.createElement(p,{key:r,card:t,totalCards:{total:e.state.circleCards.length,type:"circleCards"},selectCard:a,highlightCard:e.highlightCard})})))}}]),a}(c.a.Component)),g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(o.a)(a).call(this,e))).selectCard=function(e){if("playerCards"===e.type?t.selectCards.playerCard=e:"circleCards"===e.type&&(t.selectCards.circleCard=e),t.selectCards.playerCard&&t.selectCards.circleCard&&t.selectCards.playerCard.value+t.selectCards.circleCard.value===10){var a=t.state.circleCards,r=t.state.playerHands;a.splice(t.selectCards.circleCard.index,1),r.first.splice(t.selectCards.playerCard.index,1),console.log("--------"),console.log("this.selectCards.playerCard",t.selectCards.playerCard),console.log("this.selectCards.playerCard.index",t.selectCards.playerCard.index),console.log("--------"),t.setState({circleCards:a,playerHands:r}),t.selectCards={playerCard:{},circleCard:{}}}},t.state={shuffledDeck:e.shuffledDeck,circleCards:e.circleCards,playerHands:e.playerHands},t.selectCards={playerCard:{},circleCard:{}},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("span",{className:"playing-area"},c.a.createElement(f,{playerHand:this.state.playerHands.second,player:"player-two",selectCard:this.selectCard}),c.a.createElement(y,{circleCards:this.state.circleCards,selectCard:this.selectCard}),c.a.createElement(f,{playerHand:this.state.playerHands.first,player:"player-one",selectCard:this.selectCard}))}}]),a}(c.a.Component),v=function(e){var a="";switch(e){case 1:a="A";break;case 11:a="J";break;case 12:a="Q";break;case 13:a="K";break;default:a=e}return a},m=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=function(e){for(var a=[],t=52;t>0;t--){var r=Math.floor(Math.random()*t),c=e[r];a.push(c),e.splice(r,1)}return a}(function(){for(var e=["clubs","diamonds","hearts","spades"],a=[],t=0;t<4;t++)for(var r=1;r<14;r++)a.push({value:r,suit:e[t],display:v(r),showFace:!0,highlight:!1});return a}()),a=function(e){var a=[];return a.push({value:0,suit:"deckCard",display:0,showFace:!1,index:0}),a=a.concat(e.splice(e.length-12,e.length))}(e),t=function(e){for(var a={first:[],second:[]},t=e.length,r=t-1;r>t-21;r--)r%2===0?(e[r].showFace=!1,a.second.push(e[r])):a.first.push(e[r]),e.splice(r,1);return a}(e);return c.a.createElement(g,{shuffledDeck:e,circleCards:a,playerHands:t})}}]),a}(r.Component);s.a.render(c.a.createElement(m,null),document.getElementById("root"))}],[[8,2,1]]]);
//# sourceMappingURL=main.8b65c049.chunk.js.map