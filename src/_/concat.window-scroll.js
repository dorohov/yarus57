var topPos=$(document).scrollTop(),snb=$(".navbar-site.index");snb.hasClass("scroll-sidebar")?topPos<500&&snb.removeClass("scroll-sidebar"):topPos>500&&snb.addClass("scroll-sidebar"),snb.hasClass("opacity")?topPos<200&&snb.removeClass("opacity"):topPos>200&&snb.addClass("opacity"),snb.hasClass("fixed")?topPos<400&&snb.removeClass("fixed"):topPos>400&&snb.addClass("fixed");

