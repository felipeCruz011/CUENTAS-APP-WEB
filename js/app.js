// Variables
const transferenciasRecargado = document.querySelectorAll('.valor-recarga'),
      transactionContainer = document.querySelector('.last-transactions__container'),
      transationsItems = document.querySelectorAll('.last-transactions__item'),
      transationsValues = document.querySelectorAll('.last-transactions__value');


    let divDynamic = document.createElement('div');
    divDynamic.className = 'ventana-dinamica';
      
// Event Listeners
transactionContainer.addEventListener('click', seleccionarTransaccion);


// Funciones

// Funcion para formatear el valor de las recargas en las transferencias
transferenciasRecargado.forEach((valor) => {
    formatearNumeros(valor);
});

        function formatearNumeros(valor) {
            let number = Number(valor.textContent);
            valor.textContent = `$ ${new Intl.NumberFormat().format(number)}`;
        }

// Funcion para elegir la transaccion a editar 
function seleccionarTransaccion(e) {
    eliminarClaseFilaActiva();
    let transaccion = e.target;
    if(transaccion.classList.contains('last-transactions__value')) {
        añadirClaseActivaFila(transaccion);
        ultimasTransacciones();
    }

    if(transaccion.classList.contains('last-transactions__item')) {
        añadirClaseActivaFila(transaccion.children[0]);
        ultimasTransacciones();
    }
  
    
}
        // Funcion auxiliar para añadir la clase de fila activa
        function añadirClaseActivaFila(transaccion) {
            transaccion.parentElement.classList.add('fila-activa');
            document.querySelectorAll('.fila-activa span').forEach((item) => {
                item.classList.add('fila-activa-color');
            });
        }   
        
        // Funcion auxiliar para eliminar la clase de fila activa y el color de la letra
        function eliminarClaseFilaActiva() {
            transationsItems.forEach((element) => {
                element.classList.remove('fila-activa');
            });
            transationsValues.forEach((value) => {
                value.classList.remove('fila-activa-color');
            });
        }

        // Funcion para ejecutar la ventana dinamica y poder modificar eliminar o re hacer una transaccion al mismo usuario
        function ultimasTransacciones() {
            document.querySelector('.container-all').appendChild(divDynamic);
            divDynamic.classList.add('animacion-ventana-dinamica');
            setTimeout(() => {
                divDynamic.classList.remove('animacion-ventana-dinamica');
                divDynamic.style.opacity = "1";
            }, 1000);
            contenidoRehacerTransaccion();
        }

                function contenidoRehacerTransaccion() {
                    divDynamic.innerHTML = `
                        <div class="ventana-dinamica">
                            <div class="rehacer__container">
                                <h1 class="rehacer__titulo">
                                    <span class="span-modificar">Modificar |</span>
                                    <span class="span-Rehacer"> Rehacer |</span>
                                    <span class="span-eliminar"> Eliminar Transaccion</span>
                                </h1>
                                <div class="rehacer__icons-container">
                                    <i class="rehacer__icons fas fa-edit edit-rehacer"></i>
                                    <i class="rehacer__icons fas fa-reply-all rehacer"></i>
                                    <i class="rehacer__icons fas fa-trash-alt eliminar-rehacer"></i>
                                </div>
                            </div>
                        </div>
                    
                    `;
                    setTimeout(() => {
                        document.querySelector('.edit-rehacer').addEventListener('click', editarUltimaTransaccion);
                        document.querySelector('.rehacer').addEventListener('click', rehacerTransaccion);
                        document.querySelector('.eliminar-rehacer').addEventListener('click', eliminarUltimaTransaccion);
                    }, 100);
                }

                        // Se Edita la transaccion seleccionadas de las ultimas realizadas
                        function editarUltimaTransaccion() {
                            //ocultar Iconos Transacciones
                            document.querySelectorAll('.rehacer__icons').forEach((icon) => {
                                icon.classList.add('rehacer__icons--opacity');
                            });
                            crearContenidoEdit();
                        }

                                function crearContenidoEdit() {
                                    let divEdit = document.createElement('div');       
                                    divEdit.classList.add('div-edit');
                                    divEdit.innerHTML = `
                                                    <div class="last-transactions__type">
                                                        <label  class="last-transactions__header">ID</label>                    
                                                        <label  class="last-transactions__header">Hora</label>                    
                                                        <label  class="last-transactions__header">Cedula</label>                    
                                                        <label  class="last-transactions__header">Nombres</label>                    
                                                        <label  class="last-transactions__header">Recargado</label>                                     
                                                    </div>
                                                    <div class="last-transactions__item">
                                                        <input type="text" class="last-transactions__input-value" value="1">
                                                        <input type="text" class="last-transactions__input-value" value="8:00 am">
                                                        <input type="text" class="last-transactions__input-value" value="1075275242">
                                                        <input type="text" class="last-transactions__input-value" value="Felipe Cruz">
                                                        <input type="text" class="last-transactions__input-value valor-recarga-edit" value="10000">
                                                    </div>
                                    `;
                                    crearBotonesConfirmacion();
                                    setTimeout(() => {
                                        document.querySelector('.rehacer__container').appendChild(divEdit);
                                    }, 100);
                                }

                                        function crearBotonesConfirmacion() {
                                            let divBtn = document.createElement('div');
                                            divBtn.classList.add('div-btn');
                                            divBtn.innerHTML = ` 
                                                <input type="submit" class="btn-confirmar" value="Confirmar">
                                                <input type="submit" class="btn-cancelar" value="Cancelar">
                                            `;
                                            setTimeout(() => {
                                                document.querySelector('.rehacer__container').appendChild(divBtn);
                                            }, 110);
                                            setTimeout(() => {
                                                document.querySelector('.btn-cancelar').addEventListener('click', () => {
                                                    animacionCerrarDivDinamico();
                                                });
                                                document.querySelector('.btn-confirmar').addEventListener('click', confirmarCambiosTransaccion);
                                            }, 110);
                                        }
                                                
                                                function animacionCerrarDivDinamico() {
                                                    divDynamic.classList.add('animacion-cerrar-ventana-dinamica');
                                                    setTimeout(() => {
                                                        divDynamic.classList.remove('animacion-cerrar-ventana-dinamica');
                                                        divDynamic.style.opacity = "0";
                                                    }, 500);
                                                    setTimeout(() => {
                                                        divDynamic.remove();
                                                    }, 600);
                                                }

                                                function confirmarCambiosTransaccion() {
                                                    animacionCerrarDivDinamico();
                                                }

                        // Se Rehace la transaccion seleccionadas de las ultimas realizadas
                        function rehacerTransaccion() {
                            animacionCerrarDivDinamico();
                        }
                        
                        // Se elimina la transaccion seleccionadas de las ultimas realizadas
                        function eliminarUltimaTransaccion() {
                            animacionCerrarDivDinamico();
                        }

    