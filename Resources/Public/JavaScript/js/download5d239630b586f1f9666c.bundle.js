(self.webpackChunkqsa=self.webpackChunkqsa||[]).push([[895],{198:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t);var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.show(),this.download()}},{key:"show",value:function(){var e=document.querySelector(".qsa_download-zip"),t=document.querySelector(".qsa_download__trigger"),n=document.querySelector(".qsa_download__list"),o=document.querySelector(".qsa_download__bg-gradient--upper"),a=document.querySelector(".qsa_download__bg-gradient--lower");e.addEventListener("click",(function(){t.classList.toggle("active"),n.classList.toggle("active"),o.classList.toggle("active"),a.classList.toggle("active")}))}},{key:"download",value:function(){document.querySelectorAll(".qsa_download__trigger-link").forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation()}))}))}}])&&o(t.prototype,n),e}();t.default=new a}}]);