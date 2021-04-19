$(function() {
    $('.product-tabs__top-item').on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });





    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true
    });


    $('.shop-content__filter-btn').on('click', function() {
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    });

    $('.button-list').on('click', function() {
        $('.product-item').addClass('product-item--list')
    });
    $('.button-gred').on('click', function() {
        $('.product-item').removeClass('product-item--list')
    });

    $('.select-styler, .product-one__num').styler({});

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });


    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplayspeed: 2000,
    });
    $('.blog-page__slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns = "http://www.w3.org/2000/svg"xmlns: xlink = "http://www.w3.org/1999/xlink"width = "7pt"height = "14pt"viewBox = "0 0 7 14"version = "1.1" ><g id = "surface1"><path style = "stroke:none;fill-rule:nonzero; fill:#000;fill-opacity:1;"d = "M 0.867188 6.535156 L 4.585938 2.816406 C 4.84375 2.558594 5.257812 2.558594 5.511719 2.816406 L 6.128906 3.433594 C 6.386719 3.691406 6.386719 4.105469 6.128906 4.359375 L 3.496094 7 L 6.132812 9.636719 C 6.390625 9.894531 6.390625 10.308594 6.132812 10.5625 L 5.515625 11.183594 C 5.257812 11.441406 4.84375 11.441406 4.589844 11.183594 L 0.871094 7.464844 C 0.609375 7.207031 0.609375 6.792969 0.867188 6.535156 Z M 0.867188 6.535156 " / ></g></svg></button > ',
        nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7pt" height="14pt" viewBox="0 0 7 14" version="1.1"><g id="surface1"><path style="stroke:none; fill-rule:nonzero;fill:#000; fill-opacity:1;" d="M 6.132812 7.464844 L 2.414062 11.183594 C 2.15625 11.441406 1.742188 11.441406 1.488281 11.183594 L 0.871094 10.566406 C 0.613281 10.308594 0.613281 9.894531 0.871094 9.640625 L 3.503906 7.003906 L 0.871094 4.367188 C 0.613281 4.109375 0.613281 3.695312 0.871094 3.441406 L 1.484375 2.816406 C 1.742188 2.558594 2.15625 2.558594 2.410156 2.816406 L 6.128906 6.535156 C 6.390625 6.792969 6.390625 7.207031 6.132812 7.464844 Z M 6.132812 7.464844 "/></g></svg></button>',
        infinite: false,
    });
    $(function() {

        $(".star").rateYo({
            starWidth: "17px",
            normalFill: "#ccccce",
            ratedFill: "#ffc35b",
            readOnly: "true",
            starSvg: '<?xml version="1.0" encoding="UTF-8"?><svg xmlns = "http://www.w3.org/2000/svg"xmlns: xlink = "http://www.w3.org/1999/xlink"width = "16pt"height = "15pt"viewBox = "0 0 16 15"version = "1.1" ><g id = "surface1" ><path style = " stroke:none;fill-rule:nonzero;fill-opacity:1;"d = "M 7.203125 0.523438 L 5.390625 4.398438 L 1.332031 5.023438 C 0.601562 5.136719 0.3125 6.082031 0.839844 6.625 L 3.773438 9.640625 L 3.082031 13.90625 C 2.957031 14.675781 3.726562 15.25 4.371094 14.890625 L 8 12.878906 L 11.628906 14.890625 C 12.273438 15.25 13.042969 14.675781 12.917969 13.90625 L 12.226562 9.640625 L 15.160156 6.625 C 15.6875 6.082031 15.398438 5.136719 14.667969 5.023438 L 10.609375 4.398438 L 8.796875 0.523438 C 8.472656 -0.171875 7.53125 -0.179688 7.203125 0.523438 Z M 7.203125 0.523438"/></g></svg>',
        });

    });

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.querySelector('.promo__clock');
        const daysSpan = clock.querySelector('.promo__days');
        const hoursSpan = clock.querySelector('.promo__hours');
        const minutesSpan = clock.querySelector('.promo__minutes');
        const secondsSpan = clock.querySelector('.promo__seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $('.promo__clock').attr('data-time');
    initializeClock('promo__clock', deadline);
});