(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},107:function(e,a,t){},191:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),i=t.n(o),c=(t(100),t(8)),l=t(6),s=t(10),d=t(9),m=t(11),h=t(86),u=t.n(h),g=t(65),p=t.n(g),f=(t(107),t(88)),v=t(93),E=t(66),w=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).state={result:"No result",isOpened:!0,facingMode:"environment"},t.qrReader=r.a.createRef(),t.handleScan=function(e){e&&t.setState({result:e})},t.handleError=function(e){console.error(e)},t.handleClick=function(){t.setState({isOpened:!t.state.isOpened})},t.handleChange=function(e){t.setState({facingMode:e.target.value})},t.openImageDialog=function(){t.qrReader.current.openImageDialog()},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid"},this.state.isOpened&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"qr"},r.a.createElement(u.a,{ref:this.qrReader,facingMode:this.state.facingMode,delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}})),r.a.createElement("div",{className:"flex"},r.a.createElement(f.a,{style:{marginTop:10,marginBottom:20,display:"block"}},r.a.createElement(v.a,{value:this.state.facingMode,style:{width:180},onChange:this.handleChange,inputProps:{name:"age",id:"age-simple"}},r.a.createElement(E.a,{value:"environment"},"Rear camera"),r.a.createElement(E.a,{value:"user"},"Front-facing camera"))),r.a.createElement(p.a,{color:"secondary",size:"small",variant:"contained",onClick:this.openImageDialog},"Download image"))),this.state.isOpened&&r.a.createElement("p",{className:"result"},this.state.result),r.a.createElement(p.a,{color:"primary",size:"large",style:{position:"fixed",bottom:30},variant:"contained",onClick:this.handleClick},this.state.isOpened?"Close scanner":"Scan"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,a,t){e.exports=t(191)}},[[95,1,2]]]);
//# sourceMappingURL=main.152a1ae0.chunk.js.map