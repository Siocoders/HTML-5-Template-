(function ($) {
    "use strict";

    /*--------------------------------------
        Mean Menu Active
    ----------------------------------------*/
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.tro-mobile-menu',
        meanScreenWidth: 1200,
    });

    /*--------------------------------------
        Isotop Active
    ----------------------------------------*/
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.portfolio-filter').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.portfolio-filter').on('click', 'li', function () {
       $(this).addClass('active').siblings().removeClass('active');
    });
    /*--------------------------------------
        Counter Active
    ----------------------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


})(jQuery);	