(function ($) {

    $('#homeslider').owlCarousel({
        loop: true,
        items: 1,
        rtl: true,
        margin: 10,
        nav: true,
    });

    // add class//

    $(document).ready(function () {
        $(".settings-tray .button-right").click(function () {
            $("body").toggleClass("chatsidebarmobile");
        });
    });

    //add class//

    jQuery(document).ready(function ($) {
        jQuery(".logo span").click(function ($) {
            jQuery(".sidebar").addClass("sidebaropen");
        });
        jQuery(".sidebar-cross").click(function ($) {
            jQuery(".sidebar").removeClass("sidebaropen");
        });

    });

    $('#category_slider,#category_slider-product,#category_slider-two,#category_slider-three,#category_slider-four').owlCarousel({
        loop: true,
        items: 6,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            414: {
                items: 2,
                nav: true,
            },
            576: {
                items: 3,
                nav: true,
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });


    $('#product-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        slideSpeed: 2000,
        autoplay: true,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });


    $('#related-product').owlCarousel({
        loop: true,
        items: 6,
        dots: false,
        margin: 20,
        nav: true,
        thumbImage: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            414: {
                items: 2,
                nav: true,
            },
            576: {
                items: 2,
                nav: true,
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });


}(jQuery));
