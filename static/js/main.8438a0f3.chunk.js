(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),i=(a(13),a(1)),s=a(2),o=a(4),m=a(3),u=a(5);a(14);function h(e){var t="https://api.adorable.io/avatars/285/".concat(e.avatar,".png");return l.a.createElement("div",{className:e.visible?"card":"card hide"},l.a.createElement("img",{src:t,alt:"profile image"}),l.a.createElement("div",{className:"details"},l.a.createElement("h1",null,"Name: ",e.name),l.a.createElement("h3",null,"City: ",e.city)))}var d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("h1",null,"Card Ids"),l.a.createElement("ul",null,l.a.createElement("li",null,this.props.link1),l.a.createElement("li",null,this.props.link2),l.a.createElement("li",null,this.props.link3),l.a.createElement("li",null,this.props.pages)))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={counter:0,names:["Rob","Ned","John"],showCard:!0},a.btnFunc=function(){a.setState({counter:a.state.counter+1})},a.changeNames=function(){a.setState({names:["Joey","Rachel","Gunther"]})},a.hideCards=function(){a.setState({showCard:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,{link1:"Home",link2:"About",link3:"Contact",pages:3}),l.a.createElement(h,{name:this.state.names[0],city:"Salford",avatar:"madking",visible:this.state.showCard}),l.a.createElement(h,{name:this.state.names[1],city:"Belfast",avatar:"BobMarley",visible:this.state.showCard}),l.a.createElement(h,{name:this.state.names[2],city:"Baghdad",avatar:"diamond",visible:this.state.showCard}),l.a.createElement("h1",null,"My current counter is ",this.state.counter),l.a.createElement("div",null,l.a.createElement("a",{onClick:this.btnFunc,className:"myBtn",href:"#"},"Click Me")),l.a.createElement("div",null,l.a.createElement("a",{onClick:this.changeNames,className:"myBtn",href:"#"},"Change Names")),l.a.createElement("div",null,l.a.createElement("a",{onClick:this.hideCards,className:"myBtn",href:"#"},"Hide Card")))}}]),t}(l.a.Component);c.a.render(l.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8438a0f3.chunk.js.map