(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{873:function(e,t,a){"use strict";var n=a(4),l=a(0),r=a.n(l),i=a(1),c=a.n(i),s=a(230),o={children:c.a.node},u=function(e){return r.a.createElement(s.a,Object(n.a)({group:!0},e))};u.propTypes=o,t.a=u},998:function(e,t,a){"use strict";a.r(t);var n=a(20),l=a(21),r=a(23),i=a(22),c=a(24),s=a(0),o=a.n(s),u=a(224),d=a(227),h=a(163),m=a(223),p=a(64),g=a(65),E=a(63),f=a(85),k=a(62),v=a(74),b=a(30),y=a(121),O=a(75),x=a(86),I=a(124),j=a(125),D=a(122),N=a(123),S=a(162),T=a(873),w=a(387),A=a(388),C=a(27),P=a(66),B=a(13),F=(a(3),a(84)),M=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={blockInfo:null,danger:!1,transPage:1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"toggleDanger",value:function(){var e=this;this.state.danger||setTimeout(function(){e.loadTransactionInfo(e.props.tid)}.bind(this),1e3),this.setState({danger:!this.state.danger})}},{key:"loadTransactionInfo",value:function(e){var t=this;Object(C.loadTransactionInfo)(e,function(e,a){e&&a.exist&&t.setState({tInfo:a.t})}.bind(this))}},{key:"rederBlockInfoDialog",value:function(){if(!this.state.tInfo)return null;var e=this.state.tInfo,t=new Date;t.setTime(e.time);var a=t.toLocaleString();return o.a.createElement(j.a,{isOpen:this.state.danger,toggle:this.toggleDanger.bind(this),className:"modal-info "+this.props.className},o.a.createElement(D.a,{toggle:this.toggleDanger.bind(this)},"\u4ea4\u6613\u660e\u7ec6"),o.a.createElement(N.a,null,o.a.createElement("p",null,o.a.createElement(F.a,{type:e.type,id:e.id})),o.a.createElement("p",null,"\u53d1\u8d77\u65b9:",o.a.createElement(P.a,{rsId:e.from})),o.a.createElement("p",null,"\u63a5\u6536\u65b9:",o.a.createElement(P.a,{rsId:e.to})),o.a.createElement("p",null,"\u91d1\u989d",e.amount," \u79ef\u5206"),o.a.createElement("p",null,"\u624b\u7eed\u8d39",e.fee," \u79ef\u5206"),o.a.createElement("p",null,"\u9ad8\u5ea6:",e.height),o.a.createElement("p",null,"\u65f6\u95f4:",a)),o.a.createElement(S.a,null,o.a.createElement(b.a,{color:"danger",onClick:this.toggleDanger.bind(this)},"OK")))}},{key:"render",value:function(){var e="bd-"+this.props.tid;return o.a.createElement("span",null,o.a.createElement("span",{className:"alert-primary  fade show",id:e,onClick:this.toggleDanger.bind(this)},this.props.tid),this.rederBlockInfoDialog())}}]),t}(s.Component),z=(a(229),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={dropdownOpen:!1,page:1,channelName:"\u9009\u62e9\u6536\u6b3e\u6e20\u9053",list:[],channel:-1,exchange:null,action:!1,working:!1},a.filterOptions=["\u652f\u4ed8\u5b9d\u8d26\u53f7","\u5fae\u4fe1\u8d26\u53f7","\u94f6\u884c\u5361\u8d26\u53f7"],a.fee="1",a.deadline="5",a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(B.loadLocalAccount)();e&&e.secret&&(this.secret=e.secret,this.account=e)}},{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"loadAll",value:function(){var e=this,t=Object(B.sign)(this.account.secret,this.account.pk),a={page:this.state.page,pk:this.account.pk,rsId:this.account.aid,token:t};Object(C.doExchange)(a,"0","5",0,function(t,a){t&&a&&a.ok&&e.setState({list:a.list})})}},{key:"filterExchange",value:function(e){var t=this,a=Object(B.sign)(this.account.secret,this.account.pk),n={pk:this.account.pk,rsId:this.account.aid,token:a};e||(e=this.state.amount),Object(C.doExchange)(n,e,"3",this.state.channel,function(e,a){e&&a&&a.ok&&t.setState({list:a.list})})}},{key:"updateExchangeStatus",value:function(e){var t=Object(B.sign)(this.account.secret,this.account.pk),a={pk:this.account.pk,rsId:this.account.rsId,token:t,id:this.state.exchange.eid,status:2,tid:e};Object(C.doExchange)(a,"0","4","0",function(e,t){e&&t&&t.ok?console.log(t):console.log("err")})}},{key:"doTransfer",value:function(){var e=this,t=this.account.pk,a={action:"transaction",type:"transfer",amount:""+this.state.exchange.amount,fee:this.fee,dealine:this.deadline,pk:t,recipientPk:this.state.exchange.pk,recipientId:this.state.exchange.id};this.setState({working:!0}),Object(C.doBShopTransaction)(this.secret,a,function(t,a){t&&a.ok?(e.setState({dialogMsg:"success(\u6210\u529f),\u7b49\u5f85\u673a\u5668\u4eba\u9a8c\u8bc1",tranferOk:!0}),e.updateExchangeStatus(a.transactionId)):e.setState({dialogMsg:"err(\u5931\u8d25)"})}.bind(this))}},{key:"upateFilterValue",value:function(e){if(e&&e.target){var t=e.target.value;if(this.setState({amount:t}),t.length>2){var a=t.indexOf(".");if(a>0)t.substr(a+1).length>0&&this.filterExchange(t)}}}},{key:"prePage",value:function(){this.state.page--,this.loadAll()}},{key:"nextPage",value:function(){this.state.page++,this.loadAll()}},{key:"setFilter",value:function(e){this.setState({channel:e,channelName:this.filterOptions[e]})}},{key:"renderFilterOptions",value:function(){var e=this;return this.filterOptions.map(function(t,a){return o.a.createElement(I.a,{onClick:function(t){e.setFilter(a)}},t)})}},{key:"toggleActionDialog",value:function(){this.setState({action:!this.state.action,dialogMsg:"",tranferOk:!1})}},{key:"renderActionDialog",value:function(){return this.state.exchange?o.a.createElement(j.a,{isOpen:this.state.action,toggle:this.toggleActionDialog.bind(this),className:"modal-info "+this.props.className},o.a.createElement(D.a,{toggle:this.toggleActionDialog.bind(this)},"\u6536\u5230\u4ed8\u6b3e\u540e\u7ed9\u8d26\u6237\u5145\u503c"),o.a.createElement(N.a,null,o.a.createElement("div",null,"\u7533\u8bf7\u8d26\u53f7\uff1a",o.a.createElement(P.a,{rsId:this.state.exchange.id})),o.a.createElement(y.a,{color:"danger"},o.a.createElement("small",null,"\u5fc5\u987b\u786e\u8ba4\u6536\u5230\u8d26\u6237\u4ed8\u6b3e\uff08\u5fae\u4fe1\u3001\u652f\u4ed8\u5b9d\u3001\u94f6\u884c\u5361\uff09\u540e\u518d\u7ed9\u8d26\u53f7\u5145\u503c")),o.a.createElement(O.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(E.a,{className:"input-prepend"},o.a.createElement(f.a,{addonType:"prepend"},o.a.createElement(k.a,null,"\u8d26\u6237\u516c\u94a5):")),o.a.createElement(v.a,{id:"appendedPrependedInput",size:"16",type:"text",value:this.state.exchange.pk})))),o.a.createElement(O.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(E.a,{className:"input-prepend"},o.a.createElement(f.a,{addonType:"prepend"},o.a.createElement(k.a,null,"\u6570\u91cf:")),o.a.createElement(v.a,{id:"appendedPrependedInput",size:"16",type:"text",value:this.state.exchange.amount})),o.a.createElement(f.a,{addonType:"append"},o.a.createElement(k.a,null,"\u5e01")))),o.a.createElement(O.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(E.a,{className:"input-prepend"},o.a.createElement(f.a,{addonType:"prepend"},o.a.createElement(k.a,null,"\u673a\u5668\u4eba\u8d39:")),o.a.createElement(v.a,{id:"appendedPrependedInput",size:"16",type:"text",onChange:this.updateFee.bind(this),placeholder:"\u673a\u5668\u4eba\u8d39\uff0c\u6700\u5c110.1\u4e2a"}),o.a.createElement(f.a,{addonType:"append"},o.a.createElement(k.a,null,"\u5e01"))))),o.a.createElement(O.a,null,o.a.createElement("div",{className:"controls"},o.a.createElement(E.a,{className:"input-prepend"},o.a.createElement(f.a,{addonType:"prepend"},o.a.createElement(k.a,null,"\u6709\u6548\u671f:")),o.a.createElement(v.a,{id:"appendedPrependedInput",size:"16",onChange:this.updateDeadline.bind(this),type:"text",placeholder:"\u4ea4\u6613\u6709\u6548\u671f\uff0c\u9ed8\u8ba45\u5206\u949f"}),o.a.createElement(f.a,{addonType:"append"},o.a.createElement(k.a,null,"\u5206\u949f"))))),this.renderdialogMsg()),o.a.createElement(S.a,null,o.a.createElement(b.a,{color:"danger",onClick:this.toggleActionDialog.bind(this)},"\u53d6\u6d88"),this.renderPayBtn())):null}},{key:"renderPayBtn",value:function(){return this.state.tranferOk||this.state.working?null:o.a.createElement(b.a,{color:"danger",onClick:this.doTransfer.bind(this)},"\u7ed9\u8d26\u6237\u5145\u503c")}},{key:"renderdialogMsg",value:function(){return this.state.dialogMsg?o.a.createElement(x.a,null,this.state.dialogMsg):null}},{key:"updateFee",value:function(e){if(e&&e.target){var t=e.target.value;t&&t.length>0&&(this.fee=t)}}},{key:"updateDeadline",value:function(e){if(e&&e.target){var t=e.target.value;this.deadline=t}}},{key:"renderExchangelist",value:function(){var e=this,t=this.state.list;return t?t.map(function(t){var a=new Date;a.setTime(t.time);var n=a.toLocaleString();a.setTime(t.update);var l=a.toLocaleString(),r=0===t.op?"\u5145\u503c":"\u63d0\u73b0";return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(P.a,{rsId:t.id})),o.a.createElement("td",null,r),o.a.createElement("td",null,t.amount," BTB"),o.a.createElement("td",null,t.random," \u79ef\u5206"),o.a.createElement("td",null,t.channel),o.a.createElement("td",null,t.ip),o.a.createElement("td",null,n),o.a.createElement("td",null,o.a.createElement(M,{tid:t.tid})),o.a.createElement("td",null,l),o.a.createElement("td",null,Object(C.getExchangeStatus)(t.status)),o.a.createElement("td",null,t.note),e.renderActionButtons(t))}):null}},{key:"renderActionButtons",value:function(e){var t=this;return 0===e.op&&e.status<2?o.a.createElement("td",null,o.a.createElement(b.a,{size:"sm",onClick:function(a){t.setState({exchange:e}),0===e.op&&t.toggleActionDialog()}.bind(this)},"\u53d1\u5e01")):o.a.createElement("td",null)}},{key:"render",value:function(){var e=this;return o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement(b.a,{color:"primary",onClick:function(t){return e.loadAll()}},o.a.createElement("i",{className:"fa fa-search"}),"\u663e\u793a\u5168\u90e8"),o.a.createElement(E.a,null,o.a.createElement(T.a,{isOpen:this.state.dropdownOpen,toggle:function(){e.toggle()}},o.a.createElement(w.a,{caret:!0},this.state.channelName),o.a.createElement(A.a,null,this.renderFilterOptions())),o.a.createElement(v.a,{placeholder:"\u8f93\u5165\u5df2\u6536\u6b3e\u91d1\u989d\uff0c\u7cbe\u786e\u5230\u5c0f\u6570\u70b9\u4e24\u4f4d\u641c\u7d22",onChange:this.upateFilterValue.bind(this)}),o.a.createElement(b.a,{color:"primary",onClick:function(t){return e.filterExchange()}},o.a.createElement("i",{className:"fa fa-search"}),"\xa0")),o.a.createElement(h.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ID"),o.a.createElement("th",null,"\u8bf7\u6c42\u7c7b\u578b"),o.a.createElement("th",null,"Amount(\u91d1\u989d"),o.a.createElement("th",null,"\u968f\u673a\u91d1\u989d(\u91d1\u989d"),o.a.createElement("th",null,"Channel(\u6e20\u9053"),o.a.createElement("th",null,"Ip\u5730\u5740"),o.a.createElement("th",null,"Time(\u7533\u8bf7\u65f6\u95f4"),o.a.createElement("th",null,"\u4ea4\u6613id"),o.a.createElement("th",null,"Update(\u66f4\u65b0\u65f6\u95f4"),o.a.createElement("th",null,"Status(\u6700\u65b0\u72b6\u6001"),o.a.createElement("th",null,"Note(\u5907\u6ce8"),o.a.createElement("th",null,"Action(\u64cd\u4f5c"))),o.a.createElement("tbody",null,this.renderExchangelist(),this.renderActionDialog())),o.a.createElement("nav",null,o.a.createElement(m.a,null,o.a.createElement(p.a,null,o.a.createElement(g.a,{previous:!0,tag:"button",onClick:function(t){e.prePage()}},"Prev(\u4e0a\u4e00\u9875")),o.a.createElement(p.a,{active:!0},o.a.createElement(g.a,{tag:"button"},this.state.page)),o.a.createElement(p.a,null,o.a.createElement(g.a,{next:!0,tag:"button",onClick:function(t){e.nextPage()}},"Next(\u4e0b\u4e00\u9875")))),o.a.createElement(y.a,{color:"danger"},o.a.createElement("small",null,"\u8d26\u6237\u91d1\u989d\u5927\u4e8e10000\u7684\u8d26\u6237\u624d\u6709\u6743\u9650\u67e5\u770b\u7cfb\u7edf\u5145\u503c\u5217\u8868."))))}}]),t}(s.Component));t.default=z}}]);
//# sourceMappingURL=15.008cc106.chunk.js.map