(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),i=n(4),l=n(6),m=n(5),u=n(7),h=(n(14),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.id,"?set=set2")}),r.a.createElement("h2",{key:e.id},e.name),r.a.createElement("p",null,e.email))}),d=(n(15),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{id:e.id,name:e.name,email:e.email})})))}),f=(n(16),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={monsters:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"MONSTERS ROLODEX"),r.a.createElement("input",{type:"search",placeholder:"Search monsters",onChange:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement(d,{monsters:o}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8d98f614.chunk.js.map