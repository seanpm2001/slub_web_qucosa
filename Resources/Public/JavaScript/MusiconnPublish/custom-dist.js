$((function(){$(".main-navigation-toggle").on("click",(function(){$("body.open-main-navigation")[0]?($("body").removeClass("open-main-navigation"),$(".main-navigation, .main-navigation-toggle").attr("aria-expanded","false")):($("body").addClass("open-main-navigation"),$(".main-navigation, .main-navigation-toggle").attr("aria-expanded","true"))})),$("button.submenu-toggle").on("click",(function(){return $(this).closest("li").hasClass("submenu-open")?$(this).attr("aria-expanded","false").closest("li").removeClass("submenu-open").find(".submenu-container").attr("aria-expanded","false"):($("nav.main-navigation").attr("aria-expanded","true"),$(this).attr("aria-expanded","true").closest("li").addClass("submenu-open").find("> .submenu-container").attr("aria-expanded","true")),!1})),Modernizr.pointerevents||Modernizr.touchevents||$("ul.main-menu > li.has-submenu").on("mouseenter focusin",(function(){$(this).addClass("submenu-open").find("> .submenu-container").attr("aria-expanded","true")})).on("mouseleave focusout",(function(){$(this).removeClass("submenu-open").find("> .submenu-container").attr("aria-expanded","false")})),$(window).resize((function(){$(window).width()>1024?$("nav.main-navigation").removeAttr("aria-haspopup aria-expanded"):$("nav.main-navigation").attr({"aria-haspopup":"true","aria-expanded":"false"})})),$(".accordion-item h2 button").on("click",(function(){$(this).attr("aria-expanded",$(this).parents(".accordion-item").hasClass("accordion-open")?"false":"true").parents(".accordion-item").toggleClass("accordion-open")}))}));