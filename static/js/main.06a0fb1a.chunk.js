(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/chief.jpg?raw=true",clicked:!1},{id:2,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/dustin.jpg?raw=true",clicked:!1},{id:3,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/eleven.jpg?raw=true",clicked:!1},{id:4,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/jonathan.jpg?raw=true",clicked:!1},{id:5,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/joyce.jpg?raw=true",clicked:!1},{id:6,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/lucas.jpg?raw=true",clicked:!1},{id:7,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/max.jpg?raw=true",clicked:!1},{id:8,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/mike.jpg?raw=true",clicked:!1},{id:9,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/nancy.jpg?raw=true",clicked:!1},{id:10,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/robin.jpg?raw=true",clicked:!1},{id:11,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/steve.jpg?raw=true",clicked:!1},{id:12,image:"https://github.com/birnapwnsu/clickyGame/blob/master/my-app/public/images/will.jpg?raw=true",clicked:!1}]},,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(2),r=a.n(n),l=(a(15),a(3)),o=a(4),s=a(7),m=a(5),u=a(8),p=(a(16),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.setClicked(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),d=(a(17),function(e){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("h1",{className:"brand"},e.title),c.a.createElement("h1",null,"Score: ",e.score," | Top Score: ",e.topscore," "))}),g=(a(18),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),b=(a(19),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),h=function(e){return c.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},w=function(e){return c.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return c.a.createElement("div",{className:t},e.children)},f=a(6),y=(a(20),0),v=0,E="Click away, but don't click the same character twice!",j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={friends:f,count:y,topscore:v,rightwrong:E},a.setClicked=function(e){var t=a.state.friends,i=t.filter(function(t){return t.id===e});if(i[0].clicked){y=0,E="GG! You've already clicked this, you lose! :(";for(var c=0;c<t.length;c++)t[c].clicked=!1;a.setState({rightwrong:E}),a.setState({count:y}),a.setState({friends:t})}else if(y<11)i[0].clicked=!0,E="You pwn! You haven't clicked any twice, keep going! :)",++y>v&&(v=y,a.setState({topscore:v})),t.sort(function(e,t){return.5-Math.random()}),a.setState({friends:t}),a.setState({count:y}),a.setState({rightwrong:E});else{i[0].clicked=!0,y=0,E="You think you're hot stuff? Bet you can't do it again! ._.",v=12,a.setState({topscore:v});for(var n=0;n<t.length;n++)t[n].clicked=!1;t.sort(function(e,t){return.5-Math.random()}),a.setState({friends:t}),a.setState({count:y}),a.setState({rightwrong:E})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(d,{title:"ST Memory Game",score:this.state.count,topscore:this.state.topscore}),c.a.createElement(b,null,c.a.createElement("span",null,this.state.rightwrong)),c.a.createElement(h,null,c.a.createElement(w,null,this.state.friends.map(function(t){return c.a.createElement(k,{size:"md-3 sm-4"},c.a.createElement(p,{key:t.id,setClicked:e.setClicked,id:t.id,image:t.image}))}))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.06a0fb1a.chunk.js.map