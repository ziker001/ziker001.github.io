(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{989:function(e,t,a){"use strict";a.r(t);var n=a(20),l=a(21),i=a(23),r=a(22),c=a(24),d=a(0),s=a.n(d),u=a(228),o=a.n(u),p=(a(391),a(75)),h=a(86),m=a(63),E=a(74),g=a(85),v=a(62),f=a(30),y=a(948),b=a(13),k=(b.shareNews,b.calcAccountId),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={content:"Edit your content here. \u5728\u6b64\u7f16\u8f91\u8981\u53d1\u5e03\u7684\u5185\u5bb9."},a.modules={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],[{align:[]},"direction"],["bold","italic","underline","strike","blockquote","code-block"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],clipboard:{matchVisual:!1}},a.fee=1,a.deadline=5,a.price=1,a.tags="",a.title="",a.secret="",a.location="",a.author="",a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"updateTitle",value:function(e){e&&e.target&&(this.title=e.target.value)}},{key:"updateTags",value:function(e){e&&e.target&&(this.tags=e.target.value)}},{key:"updatePrice",value:function(e){e&&e.target&&(this.price=e.target.value)}},{key:"updateFee",value:function(e){e&&e.target&&(this.fee=e.target.value)}},{key:"updateDeadline",value:function(e){e&&e.target&&(this.deadline=e.target.value)}},{key:"publishNews",value:function(){var e=new y;e.file("ggvnews.html",this.content),e.file("title",this.title),e.file("tags",this.tags),e.file("price",this.price),e.file("location",this.location),e.file("author",this.author),e.file("time",(new Date).toLocaleTimeString()),e.generateAsync({type:"blob"}).then(function(e){})}},{key:"updateSecret",value:function(e){e&&e.target&&(this.secret=e.target.value,this.author=k(this.secret))}},{key:"handleChange",value:function(e){this.setState({content:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(p.a,null,s.a.createElement(h.a,{htmlFor:"appendedInputButtons"},"\u771e\u5ba2\u8d26\u6237\u5bc6\u7801):"),s.a.createElement("div",{className:"controls"},s.a.createElement(m.a,null,s.a.createElement(E.a,{id:"appendedInputButtons",size:"16",type:"text",onChange:this.updateSecret.bind(this),placeholder:"account secret \u8f93\u5165\u8d26\u6237\u5bc6\u7801\u767c\u4f48\u8d44\u8baf"})))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"controls"},s.a.createElement(m.a,null,s.a.createElement(g.a,{addonType:"prepend"},s.a.createElement(v.a,null,"\u8d44\u8baf\u6807\u9898):")),s.a.createElement(E.a,{id:"appendedInputButtons",size:"16",type:"text",onChange:this.updateTitle.bind(this)})))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"controls"},s.a.createElement(m.a,null,s.a.createElement(g.a,{addonType:"prepend"},s.a.createElement(v.a,null,"\u5173\u952e\u5b57:")),s.a.createElement(E.a,{id:"appendedInputButtons",size:"16",type:"text",onChange:this.updateTags.bind(this)})))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"controls"},s.a.createElement(m.a,{className:"input-prepend"},s.a.createElement(g.a,{addonType:"prepend"},s.a.createElement(v.a,null,"\u4ef7\u683c:")),s.a.createElement(E.a,{id:"appendedPrependedInput3",size:"16",type:"text",onChange:this.updatePrice.bind(this),placeholder:" \u8d44\u8baf\u4ef7\u683c,\u9ed8\u8ba4 1 \u79ef\u5206"}),s.a.createElement(g.a,{addonType:"append"},s.a.createElement(v.a,null,"\u79ef\u5206"))))),s.a.createElement(p.a,null,s.a.createElement("div",{className:"controls"},s.a.createElement(m.a,{className:"input-prepend"},s.a.createElement(g.a,{addonType:"prepend"},s.a.createElement(v.a,null,"\u673a\u5668\u4eba\u8d39:")),s.a.createElement(E.a,{id:"appendedPrependedInput",size:"16",type:"text",onChange:this.updateFee.bind(this),placeholder:"\u673a\u5668\u4eba\u624b\u7eed\u8d39,\u6700\u5c110.1\u79ef\u5206"}),s.a.createElement(g.a,{addonType:"append"},s.a.createElement(v.a,null,"\u79ef\u5206"))))),this.renderDeadline(),s.a.createElement(p.a,null,s.a.createElement(h.a,{htmlFor:"appendedInputButtons"},"\u6b63\u6587:"),s.a.createElement(o.a,{value:this.state.content,modules:this.modules,onChange:this.handleChange.bind(this)})),s.a.createElement(f.a,{type:"submit",color:"primary",onClick:function(t){return e.publishNews()}},"\u53d1\u5e03\u5185\u5bb9"))}},{key:"renderDeadline",value:function(){return null}}]),t}(d.Component);t.default=w}}]);
//# sourceMappingURL=24.d285729c.chunk.js.map