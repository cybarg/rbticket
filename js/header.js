jQuery(document).ready(function ($) {
    if ($.isFunction($.fn.sticky)) {
        // Sticky Nav
        $(".js-tabs-navigation").sticky({
            topSpacing: 0
        });

    }

    // Header color change and hide

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop(),

            header = $('.js-header__panel'),
            headerBlue = header.hasClass('header__panel--blue'),
            headerHidden = header.hasClass('header__panel--hidden');

        if ($('.js-tabs-navigation').length) {
            //hide header when tab nav reaches it
            var navtOffset = $('.js-tabs-navigation').offset().top,
                distanceFromTop = (navtOffset - scrollTop);
            if (distanceFromTop <= 60) {


                if (!headerHidden) {
                    header.addClass('header__panel--hidden');
                }


            } else {
                if (headerHidden) {
                    header.removeClass('header__panel--hidden');
                }
            }
        }

        if (scrollTop >= 200) {
            if (!headerBlue) {
                header.addClass('header__panel--blue')
            }
        } else {
            if (headerBlue) {
                header.removeClass('header__panel--blue');
            }
        }




    });



});