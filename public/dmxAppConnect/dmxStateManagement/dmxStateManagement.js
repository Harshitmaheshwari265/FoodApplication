/*!
 DMXzone State Management
 Version: 1.1.0
 (c) 2020 DMXzone.com
 @build 2020-12-03 15:50:13
 */
dmx.Component("query-manager",{initialData:{data:{}},attributes:{},methods:{set:function(t,e){this.setQueryParam(t,e)},remove:function(t){this.setQueryParam(t)},removeAll:function(){this.setQueryParam()}},render:function(t){this.update()},update:function(){this.set("data",this.parseQuery(window.location.search))},setQueryParam:function(t,e){var o=!1;null==e?null==t?(this.data.data={},o=!0):this.data.data[t]&&(delete this.data.data[t],o=!0):this.data.data[t]!=e&&(this.data.data[t]=e,o=!0),o&&(window.history.pushState(null,null,window.location.pathname+this.buildQuery(this.data.data)),dmx.requestUpdate())},buildQuery:function(o){var t=Object.keys(o);return t.length?"?"+t.reduce(function(t,e){return t&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(o[e])},""):""},parseQuery:function(t){return(t=t.replace(/^\?/,"")).split("&").reduce(function(t,e){var o=e.replace(/\+/g," ").split("=");return o[0]&&(t[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||"")),t},{})}}),dmx.Component("cookie-manager",{initialData:{data:{}},attributes:{},methods:{set:function(t,e,o){this.setCookie(t,e,o)},remove:function(t,e){(e=e||{}).expires="1970-01-01T00:00:00Z",this.setCookie(t,"",e)},removeAll:function(e){(e=e||{}).expires="1970-01-01T00:00:00Z",Object.keys(this.data.data).forEach(function(t){this.setCookie(t,"",e)})}},render:function(t){this.cookie="",this.update()},update:function(){this.cookie!=document.cookie&&(this.cookie=document.cookie,this.set("data",this.cookie.split(/;\s*/).reduce(function(t,e){var o=e.indexOf("=");return t[decodeURIComponent(e.substr(0,o))]=decodeURIComponent(e.substr(o+1)),t},{})))},setCookie:function(t,e,o){if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;(o=o||{}).path=o.path||"/";var a=(t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape))+"="+(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent));o.expires&&("number"==typeof o.expires&&(o.expires=Date.now()+864e5*o.expires),a+="; expires="+new Date(o.expires).toUTCString()),o.domain&&(a+="; domain="+o.domain),o.path&&(a+="; path="+o.path),o.secure&&(a+="; secure"),document.cookie=a,dmx.requestUpdate()}}),dmx.Component("local-manager",{initialData:{data:{}},attributes:{},methods:{set:function(t,e){var o=JSON.stringify(e);null!=o?window.localStorage.setItem("dmxState-"+t,o):window.localStorage.removeItem("dmxState-"+t),this.getData()},remove:function(t){window.localStorage.removeItem("dmxState-"+t),this.getData()},removeAll:function(){Object.keys(window.localStorage).forEach(function(t){t.startsWith("dmxState-")&&window.localStorage.removeItem(t)}),this.getData()}},render:function(t){this.getData()},getData:function(){this.set("data",Object.keys(window.localStorage).reduce(function(t,e){if(e.startsWith("dmxState-"))try{t[e.substr(9)]=JSON.parse(window.localStorage.getItem(e))}catch(t){console.warn("Error parsing JSON: "+window.localStorage.getItem(e))}return t},{}))}}),dmx.Component("session-manager",{initialData:{data:{}},attributes:{},methods:{set:function(t,e){var o=JSON.stringify(e);null!=o?window.sessionStorage.setItem("dmxState-"+t,o):window.sessionStorage.removeItem("dmxState-"+t),this.getData()},remove:function(t){window.sessionStorage.removeItem("dmxState-"+t),this.getData()},removeAll:function(){Object.keys(window.sessionStorage).forEach(function(t){t.startsWith("dmxState-")&&window.sessionStorage.removeItem(t)}),this.getData()}},render:function(t){this.getData()},getData:function(){this.set("data",Object.keys(window.sessionStorage).reduce(function(t,e){if(e.startsWith("dmxState-"))try{t[e.substr(9)]=JSON.parse(window.sessionStorage.getItem(e))}catch(t){console.warn("Error parsing JSON: "+window.sessionStorage.getItem(e))}return t},{}))}});
//# sourceMappingURL=../maps/dmxStateManagement.js.map
