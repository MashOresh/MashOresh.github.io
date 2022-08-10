$(document).ready(function () {
    // Подсветка меню при скролле
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $('.section').each((i, el) => {
            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });
    });

    // Отключение прелоадера
    $(".preloader").css("display", "none");

    // Калькулятор стоимости
    function calculate() {
        let price = parseInt($('#type option:selected').val()) + parseInt($('#design option:selected').val()) + parseInt($('#adapt option:selected').val());
        let days = parseInt($('#type option:selected').attr('days')) + parseInt($('#design option:selected').attr('days')) + parseInt($('#adapt option:selected').attr('days'));
        $('.days_digit').text(days);
        $('.price_digit').text(price);
    };
    $("select").on("change", function () {
        calculate();
    });
    calculate();

    // "Бегущие" цифры
    const time = 3000;
    let flag = true;

    $(window).scroll(function () {
        $('#counter').each(function () {
            let scrollDistance = $(window).scrollTop();
            let poz = $(this).offset().top;
            if (poz - 750 < scrollDistance) {
                if (flag) {
                    $('.number').addClass('go');
                    $('.number').each((j, el) => {
                        let i = 0;
                        let num = $(el).attr('data-num');
                        let numStep = time / num;
                        let interval = setInterval(function () {
                            if (i <= num) {
                                $(el).html(i);
                                i = i + 5;
                            } else {
                                flag = false;
                                clearInterval(interval);
                            }
                        }, 50);
                    });
                }
            }
        });
    });

    // Модальное (рекламное) окно
    let flag1 = true;
    if (flag1) {
        flag1 = false;
        setTimeout(function () {
            modalwin = document.getElementById('myModal');
            modalwin.style.display = "block";
            document.getElementById("btn-close").addEventListener("click", function () {
                modalwin.style.display = "none";
            });
        }, 15000);
    };

    // Картинки в модальном окне
    $(function () {
        $('.image-popup').magnificPopup({
            type: 'image'
        });
    });

    // Отложенная загрузка
    document.addEventListener("DOMContentLoaded", function () {
        var lazyloadImages;

        if ("IntersectionObserver" in window) {
            lazyloadImages = document.querySelectorAll(".lazy");
            var imageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        image.src = image.dataset.src;
                        image.classList.remove("lazy");
                        imageObserver.unobserve(image);
                    }
                });
            });

            lazyloadImages.forEach(function (image) {
                imageObserver.observe(image);
            });
        } else {
            var lazyloadThrottleTimeout;
            lazyloadImages = document.querySelectorAll(".lazy");

            function lazyload() {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }

                lazyloadThrottleTimeout = setTimeout(function () {
                    var scrollTop = window.pageYOffset;
                    lazyloadImages.forEach(function (img) {
                        if (img.offsetTop < (window.innerHeight + scrollTop)) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                        }
                    });
                    if (lazyloadImages.length == 0) {
                        document.removeEventListener("scroll", lazyload);
                        window.removeEventListener("resize", lazyload);
                        window.removeEventListener("orientationChange", lazyload);
                    }
                }, 20);
            }

            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);
        }
    });

    // Заявка
    if ($('#exampleModal').hasClass('show')) {
        let type = $('#type option:selected');
        let design = $('#design option:selected');
        let adaptive = $('#adapt option:selected');
        console.log(type);
    };

});
