
// Criação do elemento script
var script = document.createElement('script');

// Define o atributo src com a URL da CDN
script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';

// Adiciona o elemento script ao final do corpo do documento
document.body.appendChild(script);

// Após o carregamento do script, você pode realizar a inicialização do Swiper
script.onload = function () {
    // Aqui você pode usar o Swiper, por exemplo:
    var swiper1 = new Swiper("#carrossel1", {
        slidesPerView: 3.5,
        spaceBetween: 30,
        rewind: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper2 = new Swiper("#carrossel2", {
        slidesPerView: 3.5,
        spaceBetween: 30,
        rewind: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper3 = new Swiper("#carrossel3", {
        slidesPerView: 3.5,
        spaceBetween: 30,
        rewind: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper4 = new Swiper("#carrossel4", {
        slidesPerView: 3.5,
        spaceBetween: 30,
        rewind: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper5 = new Swiper("#carrossel5", {
        slidesPerView: 3.5,
        spaceBetween: 30,
        rewind: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}
