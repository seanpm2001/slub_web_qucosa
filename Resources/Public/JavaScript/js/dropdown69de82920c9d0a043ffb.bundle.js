(self.webpackChunkqsa=self.webpackChunkqsa||[]).push([[493],{741:function(o,n,t){"use strict";function s(o,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(o,s.key,s)}}t.r(n);var e=function(){function o(){!function(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),this.init()}var n,t;return n=o,(t=[{key:"init",value:function(){this.openDropdown(),this.closeDropdowns()}},{key:"openDropdown",value:function(){document.querySelectorAll(".qsa_dropdown__button-language").forEach((function(o){o.addEventListener("click",(function(o){o.target.classList.toggle("qsa_dropdown__button-language--show")}))}))}},{key:"closeDropdowns",value:function(){window.onclick=function(o){if(!o.target.matches(".qsa_dropdown__button")){var n=document.querySelectorAll(".qsa_dropdown__button");document.querySelectorAll(".qsa_dropdown__items").forEach((function(o){o.classList.contains("qsa_dropdown__items--show")&&o.classList.remove("qsa_dropdown__items--show")})),n.forEach((function(o){(o.classList.contains("qsa_dropdown__button--show")||o.classList.contains("qsa_dropdown__button-language--show")||o.classList.contains("qsa_dropdown__button--active"))&&(o.classList.remove("qsa_dropdown__button--show"),o.classList.remove("qsa_dropdown__button--active"),o.classList.remove("qsa_dropdown__button-language--show"))}))}}}}])&&s(n.prototype,t),o}();n.default=new e}}]);