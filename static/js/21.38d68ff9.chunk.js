(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{997:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(21),s=a(23),l=a(22),i=a(24),u=a(0),c=a.n(u),o=a(224),p=a(227),h=a(74),d=a(30),m=a(75),v=(a(27),a(13)),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={data:"",url:"https://www.btbresource.com:19099/bshop",response:"res"},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"updateSecret",value:function(e){if(e&&e.target){var t=e.target.value;this.setState({data:t})}}},{key:"updateUrl",value:function(e){if(e&&e.target){var t=e.target.value;this.setState({url:t})}}},{key:"doSend",value:function(){var e=this,t=this.state.url;try{var a=JSON.parse(this.state.data);Object(v.postSafe)(t,a,function(t,a){console.log(t+":"+a);var n=t+":"+a;e.setState({response:n})})}catch(r){var n=r.toString();this.setState({response:n})}}},{key:"render",value:function(){var e=this;return c.a.createElement(o.a,null,c.a.createElement(p.a,null,c.a.createElement(m.a,null,c.a.createElement(h.a,{type:"text",name:"textarea-input",id:"textar",placeholder:this.state.url,onChange:this.updateUrl.bind(this)})),c.a.createElement(m.a,null,c.a.createElement(h.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"5",placeholder:"data",onChange:this.updateSecret.bind(this)})),c.a.createElement(m.a,null,c.a.createElement(h.a,{type:"textarea",name:"textarea-input",id:"textarea-input",rows:"5",value:this.state.response})),c.a.createElement(m.a,null,c.a.createElement(d.a,{color:"danger",onClick:function(){e.doSend()},size:"sm"},"/bshop"))))}}]),t}(u.Component);t.default=b}}]);
//# sourceMappingURL=21.38d68ff9.chunk.js.map