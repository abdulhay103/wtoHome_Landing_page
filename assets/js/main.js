(function ($) {
    "use strict";

    //    Preloader  ======================
    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });

    //======= scrollTop

    //  slicknav ====================

    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });

// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});



})(jQuery);
