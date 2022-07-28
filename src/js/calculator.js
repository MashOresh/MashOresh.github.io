let typeSite = [],
    typeDesign = [],
    typeAdaptivity = []; 

let totalPrice = 0,  /* Переменные для итоговой цены и сроков */
    numDays = 0;

let arrSite = ["Сайт-визитка", "Корпоративный сайт", "Интернет-магазин"];
let arrDesign = ["Шаблонный", "Уникальный", "WOW-дизайн"];
let arrAdaptivity = ["ПК", "Мобильный", "ПК+Мобильная"];

let calculator = {
    price: [
        [100, 200, 500],
        [150, 250, 550],
        [200, 300, 600],
    ],
    days: [
        [2, 4, 6],
        [3, 5, 7],
        [4, 6, 8],
    ],

    count(site, design, adaptivity) {
        totalPrice = site[0] + design[0] + adaptivity[0];
        numDays = site[1] + design[1] + adaptivity[1];
        alert("Стоимость: " + totalPrice + " Срок: " + numDays + " дней");
    },
}

function getAnswer() {
    /* Получаем тип сайта */
    typeSite[0] =  prompt("Выберите тип сайта", "Сайт-визитка, Корпоративный сайт или Интернет-магазин");
    if (typeSite[0].toLowerCase() === arrSite[0].toLowerCase()) {
        typeSite[0] = calculator.price[0][0];
        typeSite[1] = calculator.days[0][0];

    } else if (typeSite[0].toLowerCase() == arrSite[1].toLowerCase()) {
        typeSite[0] = calculator.price[0][1];
        typeSite[1] = calculator.days[0][1];

    } else if (typeSite[0].toLowerCase() == arrSite[2].toLowerCase()) {
        typeSite[0] = calculator.price[0][2];
        typeSite[1] = calculator.days[0][2];

    } else {
        alert("Вы ввели что-то не то!");
        getAnswer();
        return;
    }

    /* Получаем тип дизайна */
    typeDesign[0] = prompt("Выберите тип дизайна", "Шаблонный, Уникальный или WOW-дизайн");
    if (typeDesign[0].toLowerCase() == arrDesign[0].toLowerCase()) {
        typeDesign[0] = calculator.price[1][0];
        typeDesign[1] = calculator.days[1][0];

    } else if (typeDesign[0].toLowerCase() == arrDesign[1].toLowerCase()) {
        typeDesign[0] = calculator.price[1][1];
        typeDesign[1] = calculator.days[1][1];

    } else if (typeDesign[0].toLowerCase() == arrDesign[2].toLowerCase()) {
        typeDesign[0] = calculator.price[1][2];
        typeDesign[1] = calculator.days[1][2];
        
    } else {
        alert("Вы ввели что-то не то!");
        getAnswer();
        return;
    }

    /* Получаем тип адаптивности */
    typeAdaptivity[0] = prompt("Выберите тип адаптивности", "ПК, Мобильная версия или ПК+Мобильная");
    if (typeAdaptivity[0].toLowerCase() == arrAdaptivity[0].toLowerCase()) {
        typeAdaptivity[0] = calculator.price[2][0];
        typeAdaptivity[1] = calculator.days[2][0];

    } else if (typeAdaptivity[0].toLowerCase() == arrAdaptivity[1].toLowerCase()) {
        typeAdaptivity[0] = calculator.price[2][1];
        typeAdaptivity[1] = calculator.days[2][1];

    } else if (typeAdaptivity[0].toLowerCase() == arrAdaptivity[2].toLowerCase()) {
        typeAdaptivity[0] = calculator.price[2][2];
        typeAdaptivity[1] = calculator.days[2][2];
        
    } else {
        alert("Вы ввели что-то не то!");
        getAnswer();
        return;
    }

    calculator.count(typeSite, typeDesign, typeAdaptivity);
}

getAnswer();
