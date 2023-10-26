


    const arr_one = { text: 'Комфортная квартира, спальные места очень удобные, все новое и чистое. Абсолютно всем знакомым рекомендую ваш сервис!', imagine: '/img/review all/04.png', name: "Валерий, г. Москва", data: "3 сентября 2018" };
    const arr_second = { text: 'От всей души рекомендую! Ваш клиент с 2009 года.', imagine: '/img/review all/07.png', name: "Олег, г. Самара", data: "27 августа 2018" };
    const arr_tree = { text: 'Вежливость и внимательность сотрудников, отличные условия проживания, оперативность. Всё прекрасно! Спасибо! Снимала квартиру на канале Грибоедова, недалеко от Казанского собора. Квартира просто космическая! Высокие потолки, современный ремонт, красивая мебель в скандинаском стиле, много цветов. И волшебный вид из окна! Буду рекомендовать вас всем знакомым!', imagine: '/img/review all/05.png', name: "Ирина, г. Новокузнецк", data: "11 августа 2018" };
    const arr_four = { text: 'Отличные апартменты. Замечательное обслуживание, вы просто супер! Постоянно останавливаюсь только здесь.', imagine: '/img/review all/06.png', name: "Ольга, г. Ростов", data: "19 июля 2018" };
    const list_one = [arr_one, arr_second, arr_tree, arr_four];



function review_one(){
    
    

    let randomNumber_one = Math.floor(Math.random() * 4);

    const randomReview_one = list_one[randomNumber_one];

    // Вставляем значения в DOM
    const textElement_one = document.querySelector("#text");
    const imgElement_one = document.querySelector("#avatar img");
    const nameElemen_one = document.querySelector("#name");
    const dataElement_one = document.querySelector("#data");

    textElement_one.textContent = randomReview_one.text;
    imgElement_one.src = randomReview_one.imagine;
    nameElement_one.textContent = randomReview_one.name;
    dataElement_one.textContent = randomReview_one.data;
}

const point_one = document.querySelector(".point_one");
point_one.addEventListener("click", review_one);






function review_second(){
    

    let randomNumber_second = Math.floor(Math.random() * 4);

    const randomReview_second = list_one[randomNumber_second];

    // Вставляем значения в DOM
    const textElement_second = document.querySelector(".text_second");
    const imgElement_second = document.querySelector(".avatar_second img");
    const nameElement_second = document.querySelector(".name_second");
    const dataElement_second = document.querySelector(".data_second");

    textElement_second.textContent = randomReview_second.text;
    imgElement_second.src = randomReview_second.imagine;
    nameElement_second.textContent = randomReview_second.name;
    dataElement_second.textContent = randomReview_second.data;
}
 
const point_second = document.querySelector(".point_second");
point_second.addEventListener("click", review_second);






