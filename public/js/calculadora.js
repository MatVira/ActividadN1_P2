class CalculadoraBasica extends HTMLElement {
    constructor() {

        //Llama al constructor de HTMLElement
        super();

        //Creamos el shadow DOM
        this.attachShadow({ mode: 'open' });

        //Seccion para agregar HTML y BOOTSTRAP
        this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="./public/lib/bootstrap-5.3.6-dist/css/bootstrap.min.css">

        <div class="container p-3 border border-success rounded  mt-5 shadow-lg ">

         <div class="container my-5 ">

        <div class="row justify-content-center">

        <div class="col-lg-10">

            <div class="card shadow border-0">

            <div class="card-header text-white text-center py-3" style="background-color: #006064;">
                <h2 class="mb-0">Calculadora Básica</h2>
                <p class="mb-0">Actividad N.1 del segundo parcial</p>
            </div>

            <div class="card-body p-4 bg-light border border-primary ">

                <div class="row g-4 ">

                    <!-- Lado izquierdo ingreso de numeros -->
                    <div class="col-md-6 card border-primary border-2 px-2">

                        <h5 class="text-primary ">Ingreso de Números</h5>

                        <div class="mb-3">

                            <label for="numero1" class="form-label">Primer número</label>
                            <input type="number" class="form-control" id="numero1" placeholder="0">

                        </div>

                        <div>
                            <label for="numero2" class="form-label">Segundo número</label>
                            <input type="number" class="form-control" id="numero2" placeholder="0">
                        </div>

                    </div>

                    <!-- Lado derecho, operacion, resultado -->
                    <div class="col-md-6 card border-success border-2 px-2">

                        <h5 class="text-success">Operación</h5>

                        <div class="mb-3">
                            <label for="operacion" class="form-label">Selecciona la operación</label>

                            <select class="form-select" id="operacion">
                                <option value="" disabled selected>Seleccione una operación</option>
                                <option value="suma">Sumar</option>
                                <option value="resta">Restat</option>
                                <option value="multiplicacion">Multiplicar</option>
                                <option value="division">Divisir</option>
                            </select>

                            </div>

                                <div class="mb-3">
                                <button class="btn btn-success w-100" id="calcularBtn">Calcular</button>
                                </div>

                                <div class="alert alert-success mb-0" id="resultado">
                                El resultado es:

                            </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        `;

    }

    //Creamos el metodo llamadado connectedCallback
    connectedCallback(){
        
        //Capturamos los elemento HTML
        this.numero1 = this.shadowRoot.querySelector('#numero1');
        this.numero2 = this.shadowRoot.querySelector('#numero2');
        this.operacion = this.shadowRoot.querySelector('#operacion');
        this.calcularBtn = this.shadowRoot.querySelector('#calcularBtn');
        this.resultado = this.shadowRoot.querySelector('#resultado'); 


        //creamos el evento click para el boton
        this.calcularBtn.addEventListener('click', () => {
            
            const val1 = parseFloat(this.numero1.value);
            const val2 = parseFloat(this.numero2.value);
            const tipo = this.operacion.value;

            //validación de numeros
            if (isNaN(val1) || isNaN(val2)) {
                this.resultado.textContent = 'Ingresa solo números.';
                return;
            }

            //Lógica de la caluladora
            let total;
            switch (tipo) { case 'suma':
                total = val1 + val2;
                break;
                case 'resta':  total = val1 - val2;
                break;
                case 'multiplicacion': total = val1 * val2;
                break;
                case 'division': total = val1 / val2;
                break;
            }
            
            //Se muestra el resultado
            this.resultado.textContent = "El resultado es: " + total;

            //Controlador de división por cero
            if (tipo === 'division' && val2 === 0) {
                this.resultado.textContent = 'División por cero no valida';
                return;
            }

        })
    }
}

customElements.define('calculadora-basica', CalculadoraBasica);
