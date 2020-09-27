// Variables
const enlaces = document.querySelectorAll('.menu__enlaces'),
      enlaceHome = document.querySelectorAll('.enlace-inicio'),
      enlaceListaClientes = document.querySelectorAll('.enlace-lista-clientes'),
      enlaceEntradaBases = document.querySelectorAll('.enlace-entrada-bases'),
      transferenciasRecargado = document.querySelectorAll('.valor-recarga'),
      transactionContainer = document.querySelector('.last-transactions__container'),
      transationsItems = document.querySelectorAll('.last-transactions__item'),
      transationsValues = document.querySelectorAll('.last-transactions__value'),
      atajoEntradaBases = document.querySelector('.entrada-bases-icon'),
      atajosIcons = document.querySelectorAll('.atajos__icons'),
      atajoHomeIcon = document.querySelector('.home-icon'),
      atajoClientes = document.querySelector('.users-icon');

    let divDynamic = document.createElement('div');
    divDynamic.className = 'ventana-dinamica';
      
// Event Listeners
transactionContainer.addEventListener('click', seleccionarTransaccion);
atajoEntradaBases.addEventListener('click', abrirEntradaBases);
atajoHomeIcon.addEventListener('click', goHome);
atajoClientes.addEventListener('click', goListaClientes);
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
    eliminarClaseFilaActiva(transationsItems, transationsValues);
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
        function añadirClaseActivaFila(item) {
            item.parentElement.classList.add('fila-activa');
            document.querySelectorAll('.fila-activa span').forEach((item) => {
                item.classList.add('fila-activa-color');
            });
        }   
        
        // Funcion auxiliar para eliminar la clase de fila activa y el color de la letra
        function eliminarClaseFilaActiva(items, values) {
            items.forEach((element) => {
                element.classList.remove('fila-activa');
            });
            values.forEach((value) => {
                value.classList.remove('fila-activa-color');
            });
        }

        // Funcion para ejecutar la ventana dinamica y poder modificar eliminar o re hacer una transaccion al mismo usuario
        function ultimasTransacciones() {
            document.querySelector('.container-all').appendChild(divDynamic);
            animacionAparecerVentanaDinamica();
            contenidoRehacerTransaccion();
        }

                // Animacion al Aparecer la ventana dinamica
                function animacionAparecerVentanaDinamica() {
                    divDynamic.classList.add('animacion-ventana-dinamica');
                    setTimeout(() => {
                    divDynamic.classList.remove('animacion-ventana-dinamica');
                    divDynamic.style.opacity = "1";
                    }, 1000);
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
                                                        <label  class="last-transactions__header">Fecha</label>                    
                                                        <label  class="last-transactions__header">Hora</label>                    
                                                        <label  class="last-transactions__header">Cedula</label>                    
                                                        <label  class="last-transactions__header">Nombres</label>                    
                                                        <label  class="last-transactions__header">Recargado</label>                                     
                                                    </div>
                                                    <div class="last-transactions__item">
                                                        <input type="text" class="last-transactions__input-value" value="1">
                                                        <input type="text" class="last-transactions__input-value" value="25/09/2020">
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

// Funcion para ejecutar la entrada de bases
function abrirEntradaBases() {
    removerTodasClasesActivo();
    atajoEntradaBases.classList.add('activo-i');
    enlaceEntradaBases.forEach((enlace) => {
        enlace.classList.add('activo');
    });
    cargarContenidoEntradaBases();
    document.querySelector('.container-all').appendChild(divDynamic);
    animacionAparecerVentanaDinamica();
    setTimeout(() => {
        document.querySelector('.bases__guardar-icon').addEventListener('click', aparecerConfirmarGuardar);
    }, 100);
}

        // Funcion para cargar el contenido de la Entrada de Bases
        function cargarContenidoEntradaBases() {
            divDynamic.innerHTML = `
                <section class="bases">
                    <div class="bases__titulo-container">
                        <h1 class="bases__titulo">Entrada de Bases y Conteo de Efectivo</h1>
                    </div>
                    <div class="bases__container">

                        <div class="bases__primera-columna">
                            <div class="bases__header">
                                <span class="bases__header-title">Billetes</span>
                                <span class="bases__header-title">Cantidad</span>
                                <span class="bases__header-title">Valor</span>
                            </div>
                            <div class="bases__fila">
                                <img src="img/mil-pesos.jpg" alt="Billetes" class="bases__fila-img">
                                <input type="text" class="bases__fila-input" id="milPesos" value="0">
                                <span class="bases__fila-valor" id="milPesosValor">0</span>
                            </div>
                            <div class="bases__fila">
                                <img src="img/dosmil-pesos.jpg" alt="Billetes" class="bases__fila-img">
                                <input type="text" class="bases__fila-input" id="dosMilPesos" value="0">
                                <label class="bases__fila-valor" id="milPesosValor">0</label>
                            </div>
                        </div>
                    
                        <div class="bases__segunda-columna">
                            <div class="bases__header">
                                <label class="bases__header-title">Billetes</label>
                                <label class="bases__header-title">Cantidad</label>
                                <label class="bases__header-title">Valor</label>
                            </div>

                            <div class="bases__fila">
                                <img src="img/cincomil-pesos.jpg" alt="Billetes" class="bases__fila-img">
                                <input type="text" class="bases__fila-input" id="cincoMilPesos" value="0">
                                <label class="bases__fila-valor" id="milPesosValor">0</label>
                            </div>
                            
                            <div class="bases__fila">
                                <img src="img/diezmil-pesos.jpg" alt="Billetes" class="bases__fila-img">
                                <input type="text" class="bases__fila-input" id="diezMilPesos" value="0">
                                <label class="bases__fila-valor" id="milPesosValor">0</label>
                            </div>
                        </div>

                        <div class="bases__tercera-columna">
                            <div class="bases__header">
                                <label class="bases__header-title">Billetes</label>
                                <label class="bases__header-title">Cantidad</label>
                                <label class="bases__header-title">Valor</label>
                            </div>

                            <div class="bases__fila">
                                <img src="img/veintemil-pesos.jpg" alt="Billetes" class="bases__fila-img">
                                <input type="text" class="bases__fila-input" id="veinteMilPesos" value="0">
                                <label class="bases__fila-valor" id="milPesosValor">0</label>
                            </div>

                            <div class="bases__fila">
                                <img src="img/cincuentamil-pesos.jpg" alt="Billetes" class="bases__fila-img">
                                <input type="text" class="bases__fila-input" id="cincuentaMilPesos" value="0">
                                <label class="bases__fila-valor" id="milPesosValor">0</label>
                            </div>    
                        </div>

                        <div class="bases__monedas-container">
                            <div class="bases__header-monedas">
                                <label class="bases__header-title">Monedas</label>
                                <label class="bases__header-title">Cantidad</label>
                            </div>
            
                            <div class="bases__monedas">
                                <img src="img/monedas.png" alt="Billetes" class="bases__fila-monedas-img">
                                <input type="text" class="bases__fila-input" id="monedas" value="0">
                            </div>
                        </div>
                        
                        <div class="bases__btn-container">
                            <h3 class="bases__btn-mensaje">Estas seguro de</h3>
                            <h3 class="bases__btn-mensaje">Añadir esta Base?</h3>
                            <button class="bases__btn-aceptar">Aceptar</button>
                            <button class="bases__btn-cancelar">Cancelar</button>
                        </div>

                        <div class="bases__guardar">
                            <h2 class="bases__guardar-text">Desea añadirlo a la Base?</h2>
                            <i class="bases__guardar-icon fas fa-save"></i>
                        </div>


                        <div class="bases__total">
                            <label class="bases__fila-total">Total:</label>
                            <span class="bases__fila-total-value">$ 1.000.000</span>
                        </div>
                    </div>
                </section>
            `;
        }

        // Funcion para mostrar mensaje de confirmacion antes de guardar
        function aparecerConfirmarGuardar() {
            document.querySelector('.bases__guardar').classList.add('ocultar-guardar');
            document.querySelector('.bases__btn-container').classList.add('btn-aparecer');
            setTimeout(() => {
                document.querySelector('.bases__btn-aceptar').addEventListener('click', guardarBase); 
                document.querySelector('.bases__btn-cancelar').addEventListener('click', cerrarBases); 
            }, 100);
        }

                // Funcion para guardar la base
                function guardarBase() {
                    animacionCerrarDivDinamico();
                }
                
                // Funcion para cerrar Bases
                function cerrarBases() {
                    animacionCerrarDivDinamico();
                }
    

// Funciones para los Atajos
// Funcion para ir a Home desde los atajos
function goHome() {
    let divDynamicSelect = document.querySelector('.ventana-dinamica');
    if (divDynamicSelect != null){
        divDynamicSelect.remove();
    }
    inicioClaseActiva();
}

        // volver a inicio la clase activa
        function inicioClaseActiva() {
            // Eliminando clases activo
            removerTodasClasesActivo();
            enlaceHome.forEach((enlace) => {
                enlace.classList.add('activo');
            });
            
            atajoHomeIcon.classList.add('activo-i');
        }

                //Remover todas las clases de enlaces activos
                function removerTodasClasesActivo() {
                    atajosIcons.forEach((icon) => {
                        icon.classList.remove('activo-i');    
                    });
                    enlaces.forEach((link) => {
                        link.classList.remove('activo');
                    });   
                }

function goListaClientes() {
    removerTodasClasesActivo();
    atajoClientes.classList.add('activo-i');
    enlaceListaClientes.forEach((enlace) => {
        enlace.classList.add('activo');
    });

    // Añadir el contenido con animacion
    document.querySelector('.container-all').appendChild(divDynamic);
    animacionAparecerVentanaDinamica();
    contenidoListaClientes();
    setTimeout(() => {
        document.querySelector('.clientes__container').addEventListener('click', seleccionarFilaClientes);
    }, 100);
}

        // Funcion para crear el contenido de la ventana dinamica de la lista de clientes
        function contenidoListaClientes() {
            divDynamic.innerHTML = `
                <section class="clientes">
                    <h1 class="clientes__titulo stroke-blue">Lista de Clientes</h1>
                    <div class="clientes__container">

                        <!-- Buscador -->
                        <div class="clientes__buscar-container">
                            <div class="clientes__buscar">
                                <input type="text" class="clientes__input-buscar" placeholder="Buscar">
                                <div class="clientes__btn-container">
                                    <i class="clientes__btn-lupa fas fa-search"></i>
                                </div>
                            </div>
                        </div>

                        <div class="clientes__type">
                            <label  class="clientes__header">ID</label>                    
                            <label  class="clientes__header">CEDULA</label>                    
                            <label  class="clientes__header">APODO</label>                    
                            <label  class="clientes__header">NOMBRES</label>                                                     
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                        <div class="clientes__item">
                            <span  class="clientes__value">1</span>
                            <span  class="clientes__value">1075275242</span>
                            <span  class="clientes__value">Cruz</span>
                            <span  class="clientes__value">Felipe Cruz</span>
                        </div>
                    </div>
                </section>
            `;
        }

        // Funcion para seleccionar la fila del cliente 
        function seleccionarFilaClientes(e) {
            let cliente = e.target;

            if (document.querySelector('.clientes__herramientas') == null) {
                const clientesItems = document.querySelectorAll('.clientes__item'),
                    clientesValues = document.querySelectorAll('.clientes__value');
                eliminarClaseFilaActiva(clientesItems, clientesValues);
                if(cliente.classList.contains('clientes__value')) {
                    añadirClaseActivaFila(cliente);
                    abrirHerramientasClientes();
                }
                    
                if(cliente.classList.contains('clientes__item')) {
                    añadirClaseActivaFila(cliente.children[0]);
                    abrirHerramientasClientes();
                }
            }
        }

                function abrirHerramientasClientes() {
                    let divHerramientas = document.createElement('div');
                    divHerramientas.classList.add('clientes__herramientas');
                    divHerramientas.innerHTML = `
                            <i class="clientes__icons--atras fas fa-times-circle" id="ir-clientes"></i>
                            <div class="clientes__icons-container">
                                <i class="clientes__icons fas fa-user-edit" id="editar-cliente"></i>
                                <i class="clientes__icons fas fa-user-plus" id="nuevo-cliente"></i>
                                <i class="clientes__icons fas fa-trash-alt" id="eliminar-cliente"></i>
                            </div>
                    `;
                    document.querySelector('.clientes__container').appendChild(divHerramientas);
                    setTimeout(() => {
                        document.getElementById('ir-clientes').addEventListener('click', cerrarHerramientas)
                        document.getElementById('editar-cliente').addEventListener('click', editarCliente);
                        document.getElementById('nuevo-cliente').addEventListener('click', crearNuevoCliente);
                        document.getElementById('eliminar-cliente').addEventListener('click', eliminarCliente);
                    }, 100);
                }


                        function cerrarHerramientas() {
                            document.querySelector('.clientes__herramientas').classList.add('cerrar'); 
                            setTimeout(() => {
                                document.querySelector('.clientes__herramientas').remove();
                            }, 500);                         
                        }

                        function editarCliente() {
                            let iconos = document.querySelector('.clientes__icons-container');
                            iconos.classList.add('cerrar');
                            setTimeout(() => {
                                iconos.classList.remove('cerrar');
                                iconos.innerHTML = `
                                    <div class="clientes__edit-container">
                                        <h1 class="clientes__edit-titulo stroke-black">Editar Datos</h1>
                                        <div class="clientes__type">
                                            <label  class="clientes__header">ID</label>                    
                                            <label  class="clientes__header">Cedula</label>                    
                                            <label  class="clientes__header">Apodo</label>                    
                                            <label  class="clientes__header">Nombre</label>                                                       
                                        </div>
                                        <div class="clientes__item">
                                            <input type="text" class="clientes__input-value" value="1">
                                            <input type="text" class="clientes__input-value" value="1075275242">
                                            <input type="text" class="clientes__input-value" value="Cruz">
                                            <input type="text" class="clientes__input-value" value="Felipe Cruz">
                                        </div>
                                    </div>
                                `;
                                document.querySelector('.clientes__edit-container').classList.add(('animacion-ventana-dinamica'));
                            }, 500);
                        }

                        function crearNuevoCliente() {
                            let iconos = document.querySelector('.clientes__icons-container');
                            iconos.classList.add('cerrar');
                            setTimeout(() => {
                                iconos.classList.remove('cerrar');
                                iconos.innerHTML = `
                                    <div class="clientes__edit-container">
                                        <h1 class="clientes__edit-titulo stroke-black">Nuevo Cliente</h1>
                                        <div class="clientes__type">
                                            <label  class="clientes__header">ID</label>                    
                                            <label  class="clientes__header">Cedula</label>                    
                                            <label  class="clientes__header">Apodo</label>                    
                                            <label  class="clientes__header">Nombre</label>                                                       
                                        </div>
                                        <div class="clientes__item">
                                            <input type="text" class="clientes__input-value" value="2">
                                            <input type="text" class="clientes__input-value" placeholder="Cedula">
                                            <input type="text" class="clientes__input-value" placeholder="Apodo">
                                            <input type="text" class="clientes__input-value" placeholder="Nombres">
                                        </div>
                                    </div>
                                `;
                                document.querySelector('.clientes__edit-container').classList.add(('animacion-ventana-dinamica'));
                            }, 500);
                        }

                        function eliminarCliente() {
                            cerrarHerramientas();
                        }