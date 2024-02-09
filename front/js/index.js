
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}



document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


const tela = new IntersectionObserver((entradas) => {
    entradas.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

const imagens = document.querySelectorAll('.hidden')
imagens.forEach((element) => tela.observe(element))

const tela1 = new IntersectionObserver((entradas1) => {
    entradas1.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show1")
        }
        else {
            entry.target.classList.remove('show1')
        }
    })
})


const itens = document.querySelectorAll('.hidden1')
itens.forEach((element) => tela1.observe(element))




function showCarrossel(carrosselNumber) {
    console.log(`showCarrossel chamada com carrosselNumber: ${carrosselNumber}`);

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`carrossel${i}`).style.display = 'none';
        document.getElementById(`carrossel-btn${i}`).style.borderLeft = 'solid 3px #757575';
        document.getElementById(`carrossel-palavra${i}`).style.color = 'black';
    }

    document.getElementById(`carrossel${carrosselNumber}`).style.display = 'block';
    document.getElementById(`carrossel-btn${carrosselNumber}`).style.borderLeft = 'solid 3px #3cbc8c';
    document.getElementById(`carrossel-palavra${carrosselNumber}`).style.color = 'var(--verde)';
}


{
    var currentPage = window.location.href;
    const pages = ["homeCliente", "perfil", "chats", "favoritos", "historico", "pagamentos", "config"]

    for (let i = 0; i < pages.length; i++) {
        if (currentPage.indexOf(pages[i]) !== -1) {
            const optionSelector = `.option:nth-child(${i + 1})`;
            document.querySelector(`${optionSelector} p`).style.cssText = "color: #3cbc8c; font-weight: bold;";
            document.querySelector(`${optionSelector} i`).style.color = "#3cbc8c";
            document.querySelector(`${optionSelector} .connected-bar`).style.display = "flex";

            break;
        }
    }
}




{
    let paragrafo = document.querySelector(".desc");
    let botaoVerMais = document.querySelector(".vma-vme");

    function verMaisEMenos() {
        if (paragrafo.classList.contains('expandido')) {
            paragrafo.classList.remove('expandido');
            botaoVerMais.textContent = 'ver mais';
        } else {
            paragrafo.classList.add('expandido');
            botaoVerMais.textContent = 'ver menos';
        }
    }
}

document.getElementById('cpfInput').addEventListener('input', (event) => {
    let input = event.target;
    let inputValue = input.value.replace(/\D/g, '').substring(0, 11);
    let formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    input.value = formattedValue;
});

