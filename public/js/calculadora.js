class CalculadoraBasica extends HTMLElement {
    constructor() {

        //Llama al constructor de HTMLElement
        super();

        //Creamos el shadow DOM
        this.attachShadow({ mode: 'open' });

        //Seccion para agregar HTML y BOOTSTRAP
        this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="./public/lib/bootstrap-5.3.6-dist/css/bootstrap.min.css">

        <div class="container p-3 border border-success rounded ">

         <div class="container my-5">

        <div class="row justify-content-center">

        <div class="col-lg-10">

            <div class="card shadow border-0">

            <div class="card-header bg-primary text-white text-center py-3">

                <h2 class="mb-0">Calculadora Básica</h2>
                <p class="mb-0">Actividad N.1 del segundo parcial</p>

            </div>

            <div class="card-body p-4">

                <div class="row g-4">

                    <!-- Lado izquierdo ingreso de numeros -->
                    <div class="col-md-6">

                        <h5 class="text-primary">Ingreso de Números</h5>

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
                    <div class="col-md-6">

                        <h5 class="text-success">Operación</h5>

                        <div class="mb-3">
                            <label for="operacion" class="form-label">Selecciona la operación</label>

                            <select class="form-select" id="operacion">
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
        
        //llamamos a los elementos de DOM

    }
}


customElements.define('calculadora-basica', CalculadoraBasica);
