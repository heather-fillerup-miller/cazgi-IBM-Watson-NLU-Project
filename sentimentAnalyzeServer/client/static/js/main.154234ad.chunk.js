(this.webpackJsonpsentimentanalyzeclient=this.webpackJsonpsentimentanalyzeclient||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),i=n(9),r=n.n(i),a=(n(15),n(7)),o=n.n(a),u=n(10),l=n(2),b=n(3),j=n(5),d=n(4),m=(n(8),n(17),n(0)),O=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("table",{className:"table table-bordered",children:Object(m.jsx)("tbody",{children:Object.entries(this.props.emotions).map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t[0]}),Object(m.jsx)("td",{children:t[1]})]})}))})})})}}]),n}(c.a.Component),p=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={innercomp:Object(m.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderOutput=function(e){var n=1,s="url";"text"===e&&(s="text",n=4),t.setState({innercomp:Object(m.jsx)("textarea",{rows:n,cols:"50",id:"textinput"}),mode:s,sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".",n=t.state.mode;e=e+"/"+n+"/sentiment?"+n+"="+document.getElementById("textinput").value,fetch(e).then((function(e){console.log(e),e.json().then((function(e){console.log(e),t.setState({sentimentOutput:e.label});var n=e.label,s="white";switch(n){case"positive":s="green";break;case"negative":s="red";break;default:s="#FF7F50"}n=Object(m.jsx)("div",{style:{color:s,fontSize:20},children:n}),t.setState({sentimentOutput:n})}))}))},t.sendForEmotionAnalysis=Object(u.a)(o.a.mark((function e(){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({sentiment:!1}),n=".",s=t.state.mode,n=n+"/"+s+"/emotion?"+s+"="+document.getElementById("textinput").value,e.t0=t,e.t1=m.jsx,e.t2=O,e.next=9,fetch(n);case 9:return e.next=11,e.sent.json();case 11:e.t3=e.sent,e.t4={emotions:e.t3},e.t5=(0,e.t1)(e.t2,e.t4),e.t6={sentimentOutput:e.t5},e.t0.setState.call(e.t0,e.t6);case 16:case"end":return e.stop()}}),e)}))),t}return Object(b.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("button",{className:"btn btn-info",onClick:function(){t.renderOutput("text")},children:"Text"}),Object(m.jsx)("button",{className:"btn btn-dark",onClick:function(){t.renderOutput("url")},children:"URL"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),this.state.innercomp,Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(m.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(m.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(c.a.Component),h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),s(t),c(t),i(t),r(t)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),h()},8:function(t,e,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.154234ad.chunk.js.map