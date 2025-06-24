class CalculadoraBasica extends HTMLElement {
    constructor() {
        super(); //Llama al constructor de HTMLElement

        //Creamos el shadow DOM
        this.attachShadow({ mode: 'open' });

        //Seccion para agregar el HTML
        this.shadowRoot.innerHTML = `
        
        `;
        
    }
}

// Definimos el nombre del elemento personalizado
customElements.define('calculadora-basica', CalculadoraBasica);