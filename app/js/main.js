$(function () {
    $('.top-slider__inner').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 2000,
        customPaging: function (slider, i) {
            let thumb = $(slider.$slides[i]).data();
            return `<a class="dot">${i + 1}</a>`;
        }
    })
})


