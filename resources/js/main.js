$(document).ready(function(){
	// nav links scroll to
    $('a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('body').removeClass('menu-is-active');
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Mobile Nav Menu Toggle
    $('.menu-toggle').click(function(e){
        e.preventDefault();
        $('body').toggleClass('menu-is-active');
    });

    // sticky nav
    var nav = $('.nav-container');
	var previousScroll = 0;

    $(window).scroll(function () {
    	var currentScroll = $(this).scrollTop();

        if($('menu-is-active').length) {
            //do nothing
        }
    	else if (currentScroll > previousScroll && currentScroll > 10){
    		nav.addClass('hide-nav');
    	}
    	else {
    		nav.removeClass('hide-nav');
    	}
    	previousScroll = currentScroll;
    });

    // Carousel
    if ($('.carousel-container').length) {
        $('.carousel-container').slick({
            fade: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
        });
    }

});