$((function(){$(window).scroll((function(){$(this).scrollTop()>1?$(".navigation").addClass("sticky"):$(".navigation").removeClass("sticky")}));const t=$(".stock");if(t){var i=$(".navigation__list"),o=i.outerHeight();window.addEventListener("orientationchange",(function(){o=i.outerHeight()}),!1),$(window).on("scroll",(function(){const n=$(this).scrollTop();t.each((function(){const t=$(this).offset().top-o-5,s=t+$(this).outerHeight();n>=t&&n<=s&&(i.find("a").removeClass("active"),i.find('a[href="#'+$(this).attr("id")+'"]').addClass("active"))}))})),i.find("a").on("click",(function(){const t=$(this).attr("href");return $("html, body").animate({scrollTop:$(t).offset().top-o},487),!1}))}}));