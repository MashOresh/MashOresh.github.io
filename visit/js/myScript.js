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

    // Анимация заголовков
    new WOW().init();

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

    // Маска телефона
    $("#user_phone").mask("+7(999) 999-9999");

    // Проверка заполнения полей в заявке
    $('.price-form').submit(function (event) {
        if ($("#user_phone").val() == "") {
            event.preventDefault();
            $('#user_phone').focus();
            $("#user_phone").css("border", "2px solid red");
        };
        if ($("#user_name").val() == "") {
            event.preventDefault();
            $('#user_name').focus();
            $("#user_name").css("border", "2px solid red");
        };
        if ($("#modalTypeSite").val()[1]) {
            event.preventDefault();
            $('#modalDesign').focus();
            $("#modalDesign").css("border", "2px solid red");
        };
        if ($("#modalDesign").val()[1]) {
            event.preventDefault();
            $('#modalDesign').focus();
            $("#modalDesign").css("border", "2px solid red");
        };
        if ($("#modalAdapt").val()[1]) {
            event.preventDefault();
            $('#modalAdapt').focus();
            $("#modalAdapt").css("border", "2px solid red");
        };
    });

    // Возвращение на сайт после заявки
    $('.price-form').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize(),
        }).done(function () {
            $(this).find("input").val('');
            alert("Заявка отправлена!");
            $('.price-form').trigger('reset');
        });
        return false;
    });

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
    $('.image-popup').magnificPopup({
        type: 'image',
        zoom: {
            enabled: true,
            duration: 300
        }
    });

    // Обратная связь
    $('.contact-form').submit(function (event) {
        if ($("#userName_fb").val() == "") {
            event.preventDefault();
            $('#userName_fb').focus();
            $("#userName_fb").css("border", "2px solid red");
        };
        if ($("#userEmail_fb").val() == "") {
            event.preventDefault();
            $('#userEmail_fb').focus();
            $("#userEmail_fb").css("border", "2px solid red");
        };
        if ($("#userMsg_fb").val() == "") {
            event.preventDefault();
            $('#userMsg_fb').focus();
            $("#userMsg_fb").css("border", "2px solid red");
        };
    });
    
    // Возвращение на сайт после обратной связи
    $('.contact-form').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/feedback.php",
            data: $(this).serialize(),
        }).done(function () {
            $(this).find("input").val('');
            alert("Заявка отправлена!");
            $('feedback-form').trigger('reset');
        });
        return false;
    });

    // Отложенная загрузка карты
    let ok = false;
    window.addEventListener('scroll', function () {
        if (ok === false) {
            ok = true;
            setTimeout(() => {
                let script = document.createElement('script');
                script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ade6ada6f165e57483ea33b211d189bbae4606ac2338d7ebc45e7b7cfb50b80fe&amp;width=100%25&amp;height=366&amp;lang=ru_RU&amp;scroll=false";
                document.getElementById('yamap').replaceWith(script);
            }, 4000)
        }
    });
});
