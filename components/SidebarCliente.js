/*
const pages = ["homeCliente", "perfil", "chats", "favoritos", "historico", "pagamentos", "config"];

class SidebarCliente extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
        this.highlightCurrentPage();
    }

    render() {
        
        this.shadowRoot.innerHTML = `
            <style>
            .content-midia {
                margin-top: 6vw;
                display: flex;
                justify-content: flex-end;
            }
            
            .connected-bar {
                display: none;
                width: 0.5vw;
                height: 0.5vw;
                border-radius: 50%;
                background-color: var(--verde);
            }
            
            .sidebarCliente {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                height: 76vh;
                margin-left: 14px;
                width: 18vw;
                margin-top: 7.5vw;
                position: fixed;
                font-size: 1vw;
            }
            
            .options {
                display: flex;
                flex-direction: column;
                gap: 0.5vw;
            }
             .options a, .config a{
                text-decoration: none;
                color: black;
            }
            
            .option {
                display: flex;
                flex-direction: row;
                gap: 0.8vw;
                align-items: center;
                cursor:pointer;
                width: fit-content;
                
            }
            .option i,{
                font-size: 1.2vw;
            }
            </style>


        
            <div class="sidebarCliente">
    
                <div class="options">
                    ${this.createOption("fa-solid fa-house", "Início", "homeCliente.html")}
                    ${this.createOption("fa-regular fa-user", "Perfil", "perfil.html")}
                    ${this.createOption("fa-regular fa-comments", "Chats", "chats.html")}
                    ${this.createOption("fa-regular fa-star", "Favoritos", "favoritos.html")}
                    ${this.createOption("fa-solid fa-clock-rotate-left", "Histórico", "historico.html")}
                    ${this.createOption("fa-solid fa-hand-holding-dollar", "Pagamentos", "pagamentos.html")}
                </div>
                <div class="config">
                    ${this.createOption("fa-gear", "Configurações", "config.html")}
                </div>
            </div>
        `;
    }
    

    createOption(iconClass, text, href) {
        return `
            <a href="${href}" class="option">
                <div class="connected-bar"></div>
                <i class="${iconClass}"></i>
                <p>${text}</p>
            </a>
        `;
    }
    

    highlightCurrentPage() {
        const currentPage = window.location.href;
        const options = this.shadowRoot.querySelectorAll('.option');

        options.forEach((option, index) => {
            const pageName = pages[index];
            if (currentPage.indexOf(pageName) !== -1) {
                option.querySelector('p').style.cssText = "color: #3cbc8c; font-weight: bold;";
                option.querySelector('i').style.color = "#3cbc8c";
                option.querySelector('.connected-bar').style.display = "flex";
            }
        });
    }
}

customElements.define('sidebar-cliente', SidebarCliente);

class SidebarCliente extends HTMLElement {

    constructor() {
        super();
        this.shadowRoot.innerHTML =
            document.addEventListener("DOMContentLoaded", function () {
               
                var styleElement = document.createElement("style");
                styleElement.innerHTML = `
                .sidebarCliente {
                    
                }
            `;

                var sidebarElement = document.createElement("nav");
                sidebarElement.className = "sidebarCliente";

                var optionsElement = document.createElement("div");
                optionsElement.className = "options";

                var houseElement = document.createElement("a");
                houseElement.href = "homeCliente.html"
                houseElement.className = "option";
                houseElement.innerHTML = `
                    <div class="connected-bar" ></div>
                    <i class="fa-solid fa-house"></i>
                    <p>Início</p>
                `;
                optionsElement.appendChild(houseElement);


                var perfilElement = document.createElement("a");
                perfilElement.href = "perfil.html";
                perfilElement.className = "option";
                perfilElement.innerHTML = `
                <div class="connected-bar" ></div>
                <i class="fa-regular fa-user"></i>
                <p>Perfil</p>
                `;
                optionsElement.appendChild(perfilElement);

                var chatElement = document.createElement("a");
                chatElement.href = "chats.html";
                chatElement.className = "option";
                chatElement.innerHTML = `
                <div class="connected-bar" ></div>
                <i class="fa-regular fa-comments"></i>
                <p>Chats</p>
                `;
                optionsElement.appendChild(chatElement);

                var favoritosElement = document.createElement("a");
                favoritosElement.href = "favoritos.html";
                favoritosElement.className = "option";
                favoritosElement.innerHTML = `
                <div class="connected-bar" ></div>
                <i class="fa-regular fa-star"></i>
                <p>Favoritos</p>
                `;
                optionsElement.appendChild(favoritosElement);

                var historicoElement = document.createElement("a");
                historicoElement.href = "historico.html";
                historicoElement.className = "option";
                historicoElement.innerHTML = `
                <div class="connected-bar" ></div>
                <i class="fa-solid fa-clock-rotate-left"></i>
                <p>Histórico</p>
                `;
                optionsElement.appendChild(historicoElement);

                var pagamentosElement = document.createElement("a");
                pagamentosElement.href = "pagamentos.html";
                pagamentosElement.className = "option";
                pagamentosElement.innerHTML = `
                <div class="connected-bar" ></div>
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                <p>Pagamentos</p>
                `;
                optionsElement.appendChild(pagamentosElement);

                var configElement = document.createElement("a");
                configElement.href = "config.html";
                configElement.className = "option";
                configElement.innerHTML = `
                <div class="connected-bar" ></div>
                <i class="fa-solid fa-gear"></i>
                <p>Configurações</p>
                `;
                optionsElement.appendChild(configElement);




                sidebarElement.appendChild(optionsElement);
                sidebarElement.appendChild(configElement);
                document.head.appendChild(styleElement);
                document.body.appendChild(sidebarElement);

                
                
            });

    }

}

customElements.define('sidebar-cliente', SidebarCliente);*/
class SidebarCliente extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .sidebarCliente {
                    /* Add your sidebar styles here */
                }
            </style>
            <nav class="sidebarCliente">
                <div class="options">
                    <a href="homeCliente.html" class="option">
                        <div class="connected-bar"></div>
                        <i class="fa-solid fa-house"></i>
                        <p>Início</p>
                    </a>
                    <!-- Add other menu items similarly -->
                </div>
            </nav>
        `;

        // Highlight the current page
        var currentPage = window.location.href;
        const pages = ["homeCliente", "perfil", "chats", "favoritos", "historico", "pagamentos", "config"];

        for (let i = 0; i < pages.length; i++) {
            if (currentPage.includes(pages[i])) {
                const optionSelector = `.option:nth-child(${i + 1})`;
                this.shadowRoot.querySelector(`${optionSelector} p`).style.cssText = "color: #3cbc8c; font-weight: bold;";
                this.shadowRoot.querySelector(`${optionSelector} i`).style.color = "#3cbc8c";
                this.shadowRoot.querySelector(`${optionSelector} .connected-bar`).style.display = "flex";
                break;
            }
        }
    }
}

customElements.define('sidebar-cliente', SidebarCliente);
