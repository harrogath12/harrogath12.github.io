$(function () {

    // Menu opener hamburger
    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    });

    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

   // Анимация

    $(window).scroll(function() {
        $('.merit__item').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("tada");
            }
        });
        $('.background').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
            $('.works__wrapper').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });

    // Всплывающее окно

    // $('.call__btn, .footer__btn').click(function (e) {
    //     e.preventDefault();
    //     $('#exampleModal').arcticmodal();
    // });

    $('.call__btn, .footer__btn, .card__btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal({
        	afterClose: function(data, el) {
        		$('#exampleModal2').arcticmodal();
        	}

    });
    });

        // плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    // Большой слайдер
    
    // $('.testimonials__slider').slick({
    //     dots: true,
    //     infinite: false,
    //     autoplay: true,
    //     prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    //     nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    // });
    });