// Note: this file is present on all pages; page specfic functionalities are 
// added to script tags at the bottom of each page so the Back End developers can decide easier
// how they prefer to structure them

jQuery(document).ready(function ($) {

    // Sticky Nav
    $(".js-tabs-navigation").sticky({
        topSpacing: 0
    });

    // Header color change and hide

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop(),
            navtOffset = $('.js-tabs-navigation').offset().top,
            distanceFromTop = (navtOffset - scrollTop),
            header = $('.js-header__panel'),
            headerBlue = header.hasClass('header__panel--blue'),
            headerHidden = header.hasClass('header__panel--hidden');

        if (scrollTop >= 200) {
            if (!headerBlue) {
                header.addClass('header__panel--blue')
            }
        } else {
            if (headerBlue) {
                header.removeClass('header__panel--blue');
            }
        }

        ///
        if (distanceFromTop <= 60) {

            if (!headerHidden) {
                header.addClass('header__panel--hidden');
            }


        } else {
            if (headerHidden) {
                header.removeClass('header__panel--hidden');
            }
        }

    });


    //Footer Lang switch
    // function to format select2 lang switch
    function formatLangSwitch(selectedItem) {
        var $formattedItem = $(
            '<span class="footer__lang-switch-text">' + selectedItem.text + '</span><span class="dropdown__open-button dropdown__open-button--narrow"></span>'
        );
        return $formattedItem;
    };



    $('.js-lang-switch').select2({
        minimumResultsForSearch: Infinity,
        templateResult: formatLangSwitch,
        templateSelection: formatLangSwitch,
        theme: "dark"
    });



});