// Variables
const arregloClasesSecciones = ['clientes', 'bases', 'pcs', 'transferencias'];
const enlaces = document.querySelectorAll('.menu__enlaces'),
      enlaceHome = document.querySelectorAll('.enlace-inicio'),
      enlaceListaClientes = document.querySelectorAll('.enlace-lista-clientes'),
      enlaceEntradaBases = document.querySelectorAll('.enlace-entrada-bases'),
      enlaceTransferencias = document.querySelectorAll('.enlace-transferencias'),
      atajosIcons = document.querySelectorAll('.atajos__icons'),
      atajoHomeIcon = document.querySelector('.home-icon'),
      atajoClientes = document.querySelector('.users-icon'),
      atajoEntradaBases = document.querySelector('.entrada-bases-icon'),
      atajoTransferencias = document.querySelector('.transferencias-icon'),
      hacerTransaccionContainer = document.querySelector('.hacer-transaccion__container'), 
      transactionContainer = document.querySelector('.last-transactions__container'),
      transferenciasRecargado = document.querySelectorAll('.valor-recarga'),
      transationsItems = document.querySelectorAll('.last-transactions__item'),
      transationsValues = document.querySelectorAll('.last-transactions__value'),
      pcs = document.querySelector('.pcs'),
      computadores = document.querySelectorAll('.computadores__icon'),
      eyeIcon = document.querySelector('.eye-icon'),
      divBackgroundOperations = document.querySelector('.operations__background'),
      logo = document.querySelector('.operations__img-logo'),
      imgBackground = document.querySelector('.operations__img-background');

// Creacion de la ventana dinamica para cada seccion
let divDynamic = document.createElement('div');
divDynamic.className = 'ventana-dinamica';
// Creacion de Ventana de Opciones de las ultimas transacciones
let opcionesUltimasTransacciones = document.createElement('div');
opcionesUltimasTransacciones.classList.add('rehacer__container');


// EventListeners Multiples
    // Listeners para ir a Home 
enlaceHome.forEach((enlace) => {
    enlace.addEventListener('click', irHome);
});
    // Listeners para abrir la seccion del Listado de Clientes
enlaceListaClientes.forEach((enlace) => {
    enlace.addEventListener('click', irListadoClientes);
});
    // Listeners para abrir la seccion de Entrada de Bases
enlaceEntradaBases.forEach((enlace) => {
    enlace.addEventListener('click', irEntradaBases);
});
    // Listeners para ir a la seccion de Transferencias totales
enlaceTransferencias.forEach((enlace) => {
    enlace.addEventListener('click', irTransferencias);
});
    // Listeners para aparecer y ocultar cada pc con sus respectivas transacciones al ponerse encima del icono y dejarlo
computadores.forEach((pc) => {
    pc.addEventListener('mouseover', mostrarPc);
    pc.addEventListener('mouseout', ocultarPc);
});

// EventListeners Individuales
atajoHomeIcon.addEventListener('click', irHomeIcon);
atajoClientes.addEventListener('click', irListadoClientesIcon);
atajoEntradaBases.addEventListener('click', irEntradaBasesIcon);
atajoTransferencias.addEventListener('click', irTransferenciasIcon);
    // Listener para abrir la interfaz para hacer las recargas 
hacerTransaccionContainer.addEventListener('click', desplegarHacerTransaccion);
    //listener para seleccionar la fila a modificar o rehacer 
transactionContainer.addEventListener('click', seleccionarFilaUltimasTransacciones);
    //listener para mostrar la informacion general de las operaciones
eyeIcon.addEventListener('mouseenter', ocultarLogoBackground);
eyeIcon.addEventListener('mouseleave', aparecerBackground);
divBackgroundOperations.addEventListener('mouseenter', ocultarLogo);
divBackgroundOperations.addEventListener('mouseleave', aparecerLogo);

// Funciones

// ************************* Enlaces del Menu Movil y de Escritorio *************************// 
    // Funcion para ir a Home 
function irHome() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // Añadimos la clase activa de Home en los enlaces y atajos
    añadirClaseActivoEnlaces(enlaceHome, 'activo');
    añadirClaseActivoEnlaces(atajoHomeIcon, 'activo-i');
    // Cerrar la Seccion activa
    animarCerradoSeccion();
}

        // Funcion Auxiliar de irHome
        function eliminarClaseActivaEnlances(enlaces, clase) {
            enlaces.forEach((enlace) => {
                enlace.classList.remove(clase);
            });
        }

        // Funcion Axiliar de irHome
        function añadirClaseActivoEnlaces(enlaces, clase) {
            try {
                enlaces.forEach((enlace) => {
                    enlace.classList.add(clase);
                }); 
            }catch(error) {
                enlaces.classList.add(clase);
            }
        }

        // Funcion Auxiliar de irHome
        function animarCerradoSeccion() {
            let ventanaDinamica = document.querySelector('.ventana-dinamica');
            if (ventanaDinamica !== null) {
                setTimeout(() => {
                    if (ventanaDinamica !== null) {
                        ventanaDinamica.classList.add('cerrar-ventana-animacion');
                        setTimeout(() => {
                            ventanaDinamica.classList.remove('cerrar-ventana-animacion');
                        }, 250);
                        setTimeout(() => {
                            ventanaDinamica.remove();
                        }, 250);
                    }
                }, 200);
            }
        }

    // Funcion para ir al Listado de Clientes
function irListadoClientes() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // Añadimos la clase activa del Listado de Clientes en los enlaces y atajos
    añadirClaseActivoEnlaces(enlaceListaClientes, 'activo');
    añadirClaseActivoEnlaces(atajoClientes, 'activo-i');
    // Crear contenido de la Seccion
    crearContenidoSeccionListadoClientes();
    // Abrir la seccion 
    abrirSecciones();
}

        // Funcion Auxiliar de irListadoClientes
        function crearContenidoSeccionListadoClientes() {
                divDynamic.innerHTML = `
                <section class="clientes">
                    <h1 class="clientes__titulo stroke-blue">Lista de Clientes</h1>
                    <div class="clientes__container overflow">
                        <div class="clientes__opciones">
                            <div class="clientes__opciones-container">
                                <i class="fas fa-user-plus clientes__icon-opciones agregar-clientes-icon"></i>
                            </div>
                            <!-- Buscador -->
                            <div class="clientes__buscar-container">
                                <div class="clientes__buscar">
                                    <input type="text" class="clientes__input-buscar" placeholder="Buscar">
                                    <div class="clientes__btn-container">
                                        <i class="clientes__btn-lupa fas fa-search"></i>
                                    </div>
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
                        
            `;
            
        }

        //Funcion Auxiliar de irListadoClientes 
        async function abrirSecciones() {
            await limipiarClases();
            await transicionAnimacion();
            await animarAperturaSeccion();
            await agregarAlDom();
        }

                function limipiarClases() {
                    return new Promise((resolve, reject) => {
                        let ventanaDinamica = document.querySelector('.ventana-dinamica');
                        if (ventanaDinamica !== null) {
                            ventanaDinamica.className = 'ventana-dinamica';
                        }
                        resolve(true);
                    });
                }

                //Funcion Auxiliar de irListadoClientes
                function transicionAnimacion() {
                    return new Promise((resolve, reject) => {
                         let ventanaDinamica = document.querySelector('.ventana-dinamica');
                         if (document.querySelector('.ventana-dinamica') !== null) {
                            setTimeout(() => {
                                ventanaDinamica.classList.add('transicion-ventanas');
                                setTimeout(() => {
                                    ventanaDinamica.classList.remove('transicion-ventanas');
                                }, 250);
                            }, 100);
                         }
                         resolve(true);
                    });
                 }

                

                // Funcion Auxiliar de irListadoClientes
                function animarAperturaSeccion() {
                    return new Promise((resolve, reject) => {
                        if (document.querySelector('.ventana-dinamica') == null) {
                            divDynamic.classList.add('abrir-ventana-animacion');
                        }
                        resolve(true);
                    });
                }
                
                // Funcion Auxiliar de irListadoClientes
                function agregarAlDom() {
                    return new Promise((resolve, reject) => {
                        if (document.querySelector('.ventana-dinamica') == null) {
                            document.querySelector('.container-all').appendChild(divDynamic);
                        }
                        setTimeout(() => {
                            if (document.querySelector('.clientes__container') !== null) {
                                document.querySelector('.clientes__container').addEventListener('click', seleccionarFilasListadoClientes);
                            }
                            resolve(true);
                        }, 200);
                    });
                }

                        function seleccionarFilasListadoClientes(e) {
                            let filaItem = document.querySelectorAll('.clientes__item');
                            let filaLetra = document.querySelectorAll('.clientes__value');
                            let contenedorDatosClientes = document.querySelector('.clientes__herramientas');
                            let cliente = e.target;
                            eliminarClaseFilaActiva(filaItem, filaLetra, contenedorDatosClientes);
                            if (cliente.classList.contains('clientes__item')) {
                                console.log('entro directo')
                                seleccionarFila(cliente);
                                abrirOpcionesClientes();
                            }

                            if (cliente.parentElement.classList.contains('clientes__item')) {
                                console.log('entro hijo')
                                seleccionarFila(cliente.parentElement);
                                abrirOpcionesClientes();
                            }

                        }

                                async function abrirOpcionesClientes() {
                                    await crearContenidoOpcionesListaClientes();
                                    await eventListenersOpcionesListaClientes();
                                }

                                        function crearContenidoOpcionesListaClientes() {
                                            return new Promise((resolve, reject) => {
                                                let herramientasListaClientes = document.createElement('div');
                                                herramientasListaClientes.classList.add('clientes__herramientas');
                                                herramientasListaClientes.innerHTML = `
                                                    <i class="clientes__icons--atras fas fa-times-circle" id="ir-clientes"></i>
                                                    <div class="clientes__icons-container">
                                                        <i class="clientes__icons fas fa-user-edit" id="editar-cliente"></i>
                                                        <i class="clientes__icons fas fa-user-plus" id="nuevo-cliente"></i>
                                                        <i class="clientes__icons fas fa-trash-alt" id="eliminar-cliente"></i>
                                                    </div>
                                                `;
                                                document.querySelector('.clientes__container').classList.remove('overflow');
                                                document.querySelector('.clientes__container').appendChild(herramientasListaClientes);
                                                setTimeout(() => {
                                                    resolve(true);
                                                }, 100);
                                            });
                                        }

                                        function eventListenersOpcionesListaClientes() {
                                            return new Promise((resolve, reject) => {
                                                document.getElementById('ir-clientes').addEventListener('click', cerrarHerramientasListadoClientes)
                                                document.getElementById('editar-cliente').addEventListener('click', editarCliente);
                                                document.getElementById('nuevo-cliente').addEventListener('click', crearNuevoCliente);
                                                document.getElementById('eliminar-cliente').addEventListener('click', eliminarCliente);
                                                setTimeout(() => {
                                                    resolve(true);
                                                }, 100);
                                            });
                                        }

                                                function cerrarHerramientasListadoClientes() {
                                                    document.querySelector('.clientes__herramientas').classList.add('cerrar'); 
                                                    setTimeout(() => {
                                                        document.querySelector('.clientes__herramientas').remove();
                                                        document.querySelector('.clientes__container').classList.add('overflow');
                                                    }, 500);      
                                                }

                                                async function editarCliente() {
                                                    await crearContenidoEditListadoClientes();
                                                    await eventListenersEditListadoClientes(); 
                                                }

                                                        function crearContenidoEditListadoClientes() {
                                                            return new Promise((resolve, reject) => {
                                                                let iconos = document.querySelector('.clientes__icons-container');
                                                                iconos.classList.add('cerrar');
                                                                setTimeout(() => {
                                                                    iconos.classList.remove('cerrar');
                                                                    iconos.innerHTML = `
                                                                        <div class="clientes__edit-container">
                                                                            <h1 class="clientes__edit-titulo stroke-black">Editar Datos</h1>
                                                                            <div class="clientes__type-edit">
                                                                                <label  class="clientes__header-edit">ID</label>                    
                                                                                <label  class="clientes__header-edit">Cedula</label>                    
                                                                                <label  class="clientes__header-edit">Apodo</label>                    
                                                                                <label  class="clientes__header-edit">Nombre</label>                                                       
                                                                            </div>
                                                                            <div class="clientes__item-edit">
                                                                                <input type="text" class="clientes__input-value-edit" value="1">
                                                                                <input type="text" class="clientes__input-value-edit" value="1075275242">
                                                                                <input type="text" class="clientes__input-value-edit" value="Cruz">
                                                                                <input type="text" class="clientes__input-value-edit" value="Felipe Cruz">
                                                                            </div>
                                                                            <div class="div-btn">
                                                                                <input type="submit" class="btn-confirmar-edit-cliente" value="Confirmar" id="confirmar-edit-cliente">
                                                                                <input type="submit" class="btn-cancelar-edit-cliente" value="Cancelar" id="cancelar-edit-cliente">
                                                                            </div>
                                                                        </div>
                                                                    `;
                                                                    document.querySelector('.clientes__edit-container').classList.add(('animacion-ventana-dinamica'));
                                                                    resolve(true);
                                                                }, 500);
                                                            });
                                                        }

                                                        function eventListenersEditListadoClientes() {
                                                            return new Promise((resolve, reject) => {
                                                                document.getElementById('confirmar-edit-cliente').addEventListener('click', confirmarCambioCliente);
                                                                document.getElementById('cancelar-edit-cliente').addEventListener('click', cerrarHerramientasListadoClientes);
                                                                resolve(true);
                                                            });
                                                        }

                                                                function confirmarCambioCliente() {
                                                                    cerrarHerramientasListadoClientes();
                                                                }

                                                                

                                                function crearNuevoCliente() {
                                                    let iconos = document.querySelector('.clientes__icons-container');
                                                    iconos.classList.add('cerrar');
                                                    setTimeout(() => {
                                                        iconos.classList.remove('cerrar');
                                                        iconos.innerHTML = `
                                                            <form action="save_task.php" method="POST" class="clientes__edit-container">
                                                                <h1 class="clientes__edit-titulo stroke-black">Nuevo Cliente</h1>
                                                                <div class="clientes__type-edit">
                                                                    <label  class="clientes__header-edit">ID</label>                    
                                                                    <label  class="clientes__header-edit">Cedula</label>                    
                                                                    <label  class="clientes__header-edit">Apodo</label>                    
                                                                    <label  class="clientes__header-edit">Nombre</label>                                                       
                                                                </div>
                                                                <div class="clientes__item-edit">
                                                                    <input type="text" class="clientes__input-value-edit" value="2">
                                                                    <input type="text" class="clientes__input-value-edit" placeholder="Cedula" name="cedula">
                                                                    <input type="text" class="clientes__input-value-edit" placeholder="Apodo" name="apodos">
                                                                    <input type="text" class="clientes__input-value-edit" placeholder="Nombres" name="nombres">
                                                                </div>
                                                                <div class="div-btn">
                                                                    <input type="submit" class="btn-confirmar-edit" value="Confirmar" id="confirmar-crear-cliente" name="save_task">
                                                                    <input type="submit" class="btn-cancelar-edit" value="Cancelar" id="cancelar-crear-cliente">
                                                                </div>
                                                            </form>
                                                        `;
                                                        document.querySelector('.clientes__edit-container').classList.add(('animacion-ventana-dinamica'));
                                                        document.getElementById('confirmar-crear-cliente').addEventListener('click', confirmarCrearNuevoCliente);
                                                        document.getElementById('cancelar-crear-cliente').addEventListener('click', cerrarHerramientasListadoClientes);
                                                    }, 500);
                                    
                                                }

                                                        function confirmarCrearNuevoCliente() {
                                                            cerrarHerramientasListadoClientes();
                                                        }

                                                function eliminarCliente() {
                                                    cerrarHerramientasListadoClientes();
                                                }
               

                

    // Funcion para ir a la seccion de Entrada de Bases
function irEntradaBases() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // Añadimos la clase activa a la Entrada de bases en los enlaces y atajos
    añadirClaseActivoEnlaces(enlaceEntradaBases, 'activo');
    añadirClaseActivoEnlaces(atajoEntradaBases, 'activo-i');
    // Crear contenido de la Seccion
    crearContenidoSeccionEntradaBases();
    // Abrir la seccion 
    abrirSecciones();
    eventListenerConfirmarGuardarBase();
    
}

        // Funcion Auxiliar de irEntradaBases
        function crearContenidoSeccionEntradaBases() {
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

        function eventListenerConfirmarGuardarBase() {
            setTimeout(() => {
                document.querySelector('.bases__guardar-icon').addEventListener('click', aparecerConfirmarGuardar);
            }, 100);
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
                            animarCerradoSeccion();
                        }
                        
                        // Funcion para cerrar Bases
                        function cerrarBases() {
                            animarCerradoSeccion();
                        }

                

    // Funcion para ir a la seccion de Computadores
function irComputadores() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // Añadimos la clase activa de la seccion de Coputadores en los enlaces y atajos
    añadirClaseActivoEnlaces(enlaceComputadores, 'activo');
    añadirClaseActivoEnlaces(atajoComputadores, 'activo-i');
    // Crear contenido de la Seccion
    crearContenidoSeccionComputadores();
    // Abrir la seccion 
    abrirSecciones();
}

        // Funcion Auxiliar de irEntradaBases
        function crearContenidoSeccionComputadores() {
            divDynamic.innerHTML = `
            
            `;            
        }

    // Funcion para ir a la seccion de las transferencias generales
function irTransferencias() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // Añadimos la clase activa de la seccion de transferencias generales en los enlaces y atajos
    añadirClaseActivoEnlaces(enlaceTransferencias, 'activo');
    añadirClaseActivoEnlaces(atajoTransferencias, 'activo-i');
    // Crear contenido de la Seccion
    crearContenidoSeccionTransferencias();
    // Abrir la seccion 
    abrirSecciones();
}

        // Funcion Auxiliar de irEntradaBases
        function crearContenidoSeccionTransferencias() {
            divDynamic.innerHTML = `
                
            <section class="listado-transferencias">
                <h1 class="listado-transferencias__titulo stroke-blue">Listado de Transferencias</h1>
                <div class="listado-transferencias__container overflow">

                    <div class="listado-transferencias__opciones">
                        <div class="listado-transferencias__opciones-container">
                            <div class="listado-transferencias__fecha-container">
                                <span class="listado-transferencias__fecha-text">Fecha de Inicio:</span>
                                <div class="listado-transferencias__input-container">
                                    <input type="text" class="listado-transferencias__input-fecha" placeholder="dd-mm-yyyy">
                                    <i class="far fa-calendar-alt listado-transferencias__fecha-icon"></i>
                                </div>
                            </div>
                            <div class="listado-transferencias__fecha-container">
                                <span class="listado-transferencias__fecha-text">Fecha Final</span>
                                <div class="listado-transferencias__input-container">
                                    <input type="text" class="listado-transferencias__input-fecha" placeholder="dd-mm-yyyy">
                                    <i class="far fa-calendar-alt listado-transferencias__fecha-icon"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div class="listado-transferencias__total-container">
                            <span class="listado-transferencias__total-text">Transacciones en Pantalla</span>
                            <input type="text" class="listado-transferencias__input-total" placeholder="100" value="10">
                        </div>

                        <div class="listado-transferencias__filtrar-container">
                            <button class="listado-transferencias__filtrar-btn">
                                <span class="listado-transferencias__filtar-text">Filtrar</span>
                                <i class="fas fa-filter listado-transferencias__filtrar-icon"></i>
                            </button>
                        </div>

                        <!-- Buscador -->
                        <div class="listado-transferencias__buscar-container">
                            <div class="listado-transferencias__buscar">
                                <input type="text" class="listado-transferencias__input-buscar" placeholder="Buscar">
                                <div class="listado-transferencias__btn-container">
                                    <i class="listado-transferencias__btn-lupa fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="listado-transferencias__type">
                        <label  class="listado-transferencias__header">ID</label>                    
                        <label  class="listado-transferencias__header">Fecha</label>                    
                        <label  class="listado-transferencias__header">Hora</label>                    
                        <label  class="listado-transferencias__header">Cedula</label>                    
                        <label  class="listado-transferencias__header">Nombres</label>                    
                        <label  class="listado-transferencias__header">Recargado</label>                                                           
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020</span>
                        <span  class="listado-transferencias__value">4:49 pm</span>
                        <span  class="listado-transferencias__value">1075275242 Cruz</span>
                        <span  class="listado-transferencias__value">Felipe Cruz</span>
                        <span  class="listado-transferencias__value">$ 10.000</span>
                    </div>
                    
                </div>
            </section> 

            `;               
        }

// ************************************************** Atajos **************************************************//

// Funcion para ir a Home desde los atajos
function irHomeIcon() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // Añadimos la clase activa de Home en los enlaces y atajos
    añadirClaseActivoEnlaces(enlaceHome, 'activo');
    añadirClaseActivoEnlaces(atajoHomeIcon, 'activo-i');
    // Cerrar la Seccion activa
    animarCerradoSeccion(divDynamic);
}

    // Funcion para ir al Listado de Cientes desde los atajos
    function irListadoClientesIcon() {
        // Eliminar la clase Activa de los enlaces y atajos
        eliminarClaseActivaEnlances(enlaces, 'activo');
        eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
        // Añadimos la clase activa del Listado de Clientes en los enlaces y atajos
        añadirClaseActivoEnlaces(enlaceListaClientes, 'activo');
        añadirClaseActivoEnlaces(atajoClientes, 'activo-i');
        // Crear contenido de la Seccion
        crearContenidoSeccionListadoClientes();
        // Abrir la seccion 
        abrirSecciones();
}

// Funcion para ir a la Entrada de Bases desde los atajos
function irEntradaBasesIcon() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // Añadimos la clase activa a la Entrada de bases en los enlaces y atajos
    añadirClaseActivoEnlaces(enlaceEntradaBases, 'activo');
    añadirClaseActivoEnlaces(atajoEntradaBases, 'activo-i');
    // Crear contenido de la Seccion
    crearContenidoSeccionEntradaBases();
    // Abrir la seccion 
    abrirSecciones();
    // Aparecer letrero de guardar la base
    eventListenerConfirmarGuardarBase();
}

// Funcion para ir a la seccion de Computadores desde los atajos
function irComputadoresIcon() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // Añadimos la clase activa de la seccion de Coputadores en los enlaces y atajos
    añadirClaseActivoEnlaces(enlaceComputadores, 'activo');
    añadirClaseActivoEnlaces(atajoComputadores, 'activo-i');
    // Crear contenido de la Seccion
    crearContenidoSeccionComputadores();
    // Abrir la seccion 
    abrirSecciones();
}

// Funcion para ir a las transferencias generales desde los atajos
function irTransferenciasIcon() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // Añadimos la clase activa de la seccion de transferencias generales en los enlaces y atajos
    añadirClaseActivoEnlaces(enlaceTransferencias, 'activo');
    añadirClaseActivoEnlaces(atajoTransferencias, 'activo-i');
    // Crear contenido de la Seccion
    crearContenidoSeccionTransferencias();
    // Abrir la seccion 
    abrirSecciones();
}


// Funcion para hacer recargas
function desplegarHacerTransaccion(e) {
    let elemento = e.target;
    if (elemento.classList.contains('hacer-transaccion__container')) {
        abrirHacerTransaccion();
    }
    if (elemento.parentElement.classList.contains('hacer-transaccion__container')) {
        abrirHacerTransaccion();
    }   
    if (elemento.parentElement.parentElement.classList.contains('hacer-transaccion__container')) {
        abrirHacerTransaccion();
    }
}

        async function abrirHacerTransaccion() {
            await cambiarIconoMasMenos();
            await animacionOcultarContenidoAnterior();
            await crearContenidoHacerTranccion();
            await agregarContenidoHacerTransaccion();
            await animacionAparecerBuscarClienteHacerTransaccion();
        }

                function cambiarIconoMasMenos() {
                    return new Promise((resolve, reject) => {
                        let iconoHacerRecarga = document.querySelector('.hacer-transaccion__btn-icon');
                        let iconoMenos = document.createElement('i');
                        iconoMenos.className = 'hacer-transaccion__btn-icon fas fa-minus activo-i';
                        let iconoMas = document.createElement('i');
                        iconoMas.className = 'hacer-transaccion__btn-icon fas fa-plus activo-i';
                        if(iconoHacerRecarga.classList.contains('fa-plus')) {
                            document.querySelector('.hacer-transaccion__titulo-container').replaceChild(iconoMenos, iconoHacerRecarga);
                            resolve(true)
                        } else {
                            document.querySelector('.hacer-transaccion__titulo-container').replaceChild(iconoMas, iconoHacerRecarga);
                            regresarLastTransactions();
                            reject(false)
                            setTimeout(() => {
                          
                            }, 1000);
                        }
                    });
                }

                        function regresarLastTransactions() {
                            let containerBusquedaClientePrimerPaso = document.querySelector('.last-transactions__primer-paso-container');
                            if (containerBusquedaClientePrimerPaso !== null) {
                                containerBusquedaClientePrimerPaso.setAttribute('style', 'opacity: 0; left: 0;');
                            }
                            setTimeout(() => {
                                for (let i = 0; i < 1000; i++) {
                                    let contenedor = document.querySelector('.last-transactions__primer-paso-container')
                                    if (contenedor !== null){
                                        contenedor.remove();
                                    } else {
                                        i = 1001;
                                       
                                    }
                                }
                            }, 1000);
                            setTimeout(() => {
                                transactionContainer.setAttribute('style', 'position: aboslute; transform: translate(100px); opacity: 0;');
                            }, 1000);
                            setTimeout(() => {
                                transactionContainer.setAttribute('style', 'position:relative; left: 0; transform: translate(0px); opacity: 1');
                            }, 1100);
                        }

                function animacionOcultarContenidoAnterior() {
                    return new Promise((resolve, reject) => {
                        transactionContainer.classList.add('ocultar-contenido');
                        setTimeout(() => {
                            transactionContainer.style.display = 'none'; 
                            transactionContainer.classList.remove('ocultar-contenido');
                        }, 1000);
                        resolve(true);
                    });
                }

                function crearContenidoHacerTranccion() {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            let containerBusquedaClientePrimerPaso = document.createElement('div');
                            containerBusquedaClientePrimerPaso.classList.add('last-transactions__primer-paso-container');
                            containerBusquedaClientePrimerPaso.innerHTML = `
                                <div class="last-transactions__buscar-cliente">
                                    <div class="last-transactions__buscar-cliente-primer-paso">
                                        <span class="last-transactions__buscar-cliente-text">Busqueda de Cliente:</span>
                                        <!-- Buscador -->
                                        <div class="last-transactions__buscar-cliente-container">
                                            <div class="last-transactions__buscar-cliente">
                                                <input type="text" class="last-transactions__input-buscar-cliente" placeholder="Busqueda de Cliente">
                                                <div class="last-transactions__btn-container-cliente">
                                                    <i class="last-transactions__btn-lupa-cliente fas fa-search-dollar"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="last-transactions__resultado-busqueda-clientes">
                                        <span class="last-transactions__sin-resutaldos">No hay resultados para esta Busqueda..</span>
                                    </div>
                                </div>                                   
                            `;
                            document.querySelector('.last-transactions').appendChild(containerBusquedaClientePrimerPaso);
                            setTimeout(() => {
                                containerBusquedaClientePrimerPaso.setAttribute('style', 'position: relative; opacity: 1; transform: translate(0px); left: 0;');
                            }, 100);

                            resolve(true);
                        }, 1000);
                        
                        resolve(true);
                    });
                }   

                function agregarContenidoHacerTransaccion() {
                    return new Promise((resolve, reject) => {
                       
                        resolve(true);
                    });
                }

                function animacionAparecerBuscarClienteHacerTransaccion() {
                    return new Promise((resolve, reject) => {
                       
                        resolve(true);
                    });
                }


// Funcion para seleccionar filas de las ultimas transferencias
function seleccionarFilaUltimasTransacciones(e) {
    let contenedorDatos = document.querySelector('.last-transactions__container')
    eliminarClaseFilaActiva(transationsItems, transationsValues, contenedorDatos);
    let transaccion = e.target;
    if (transaccion.classList.contains('last-transactions__item')) {
        seleccionarFila(transaccion);
        abrirUltimasTransacciones();
    }
    if (transaccion.parentElement.classList.contains('last-transactions__item')) {
        seleccionarFila(transaccion.parentElement);
        abrirUltimasTransacciones();
    }
}

        function eliminarClaseFilaActiva(items, values, contenedorDinamico) {
            if (contenedorDinamico == null) {
                items.forEach((element) => {
                    element.classList.remove('fila-activa');
                });
                values.forEach((value) => {
                    value.classList.remove('fila-activa-color');
                });
            }
        }

        function seleccionarFila(fila) {
            fila.classList.add('fila-activa');
            document.querySelectorAll('.fila-activa span').forEach((item) => {
                item.classList.add('fila-activa-color');
            });
        }

        // Funcion para ejecutar la ventana dinamica y poder modificar eliminar o re hacer una transaccion al mismo usuario
        function abrirUltimasTransacciones() {
            contenidoRehacerTransaccion();
            animarVentanaOpcionesUltimasTransacciones();
            document.querySelector('.last-transactions__container').appendChild(opcionesUltimasTransacciones);
            setTimeout(() => {
                opcionesAgregarEventListeners();
            }, 200);
        }

                function contenidoRehacerTransaccion() {
                    opcionesUltimasTransacciones.innerHTML = `
                                
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
                
                    `;
                }

                function animarVentanaOpcionesUltimasTransacciones() {
                    if (document.querySelector('.rehacer__container') == null) {
                        opcionesUltimasTransacciones.classList.add('abrir-ventana-animacion');
                        setTimeout(() => {
                            opcionesUltimasTransacciones.classList.remove('abrir-ventana-animacion');
                        }, 500);
                    }
                }


                function opcionesAgregarEventListeners() {
                    document.querySelector('.edit-rehacer').addEventListener('click', editarUltimaTransaccion);
                    document.querySelector('.rehacer').addEventListener('click', rehacerTransaccion);
                    document.querySelector('.eliminar-rehacer').addEventListener('click', eliminarUltimaTransaccion);
                }

                        async function editarUltimaTransaccion() {
                            await ocultarIconosOpcionesUltimasTransacciones();
                            await crearContenidoEdit();
                            await agregarAnimarEdit();
                            await funcionalidadBotonesEdit();
                        }

                                function ocultarIconosOpcionesUltimasTransacciones() {
                                    return new Promise((resolve, reject) => {
                                        // Titulo Modificar 
                                        document.querySelector('.rehacer__titulo').style.opacity = '0';
                                        //ocultar Iconos Transacciones
                                        document.querySelectorAll('.rehacer__icons').forEach((icon) => {
                                            icon.classList.add('rehacer__icons--opacity');
                                        });
                                        setTimeout(() => {
                                            document.querySelector('.rehacer__icons-container').style.display = 'none';
                                            resolve(true);
                                        }, 500);
                                    });
                                }

                                function crearContenidoEdit() {
                                    return new Promise((resolve, reject) => {
                                        let divEdit = document.createElement('div');       
                                        divEdit.classList.add('div-edit');
                                        divEdit.innerHTML = `
                                                <div class="rehacer__type">
                                                    <label  class="rehacer__header">ID</label>                    
                                                    <label  class="rehacer__header">Fecha</label>                    
                                                    <label  class="rehacer__header">Hora</label>                    
                                                    <label  class="rehacer__header">Cedula</label>                    
                                                    <label  class="rehacer__header">Nombres</label>                    
                                                    <label  class="rehacer__header">Recargado</label>                                     
                                                </div>
                                                <div class="rehacer__item">
                                                    <input type="text" class="rehacer__input-value" value="1">
                                                    <input type="text" class="rehacer__input-value" value="25/09/2020">
                                                    <input type="text" class="rehacer__input-value" value="8:00 am">
                                                    <input type="text" class="rehacer__input-value" value="1075275242">
                                                    <input type="text" class="rehacer__input-value" value="Felipe Cruz">
                                                    <input type="text" class="rehacer__input-value valor-recarga-edit" value="10000">
                                                </div>
                                                <div class="div-btn"> 
                                                    <input type="submit" class="btn-confirmar-edit" value="Confirmar">
                                                    <input type="submit" class="btn-cancelar-edit" value="Cancelar">
                                                </div>
                                                       
                                        `;
                                        setTimeout(() => {
                                            document.querySelector('.rehacer__container').appendChild(divEdit);
                                            resolve(true);
                                        }, 100);
                                    });
                                }

                                function agregarAnimarEdit() {
                                    return new Promise((resolve, reject) => {
                                        // Titulo Modificar 
                                        document.querySelector('.rehacer__titulo').removeAttribute('style');
                                        // Contenido Edit
                                        document.querySelector('.div-edit').classList.add('abrir-ventana-animacion');
                                        setTimeout(() => {
                                            document.querySelector('.div-edit').classList.remove('abrir-ventana-animacion');
                                            document.querySelector('.div-edit').style.opacity = '1';
                                            resolve(true);
                                        }, 500);
                                    });
                                }

                                function funcionalidadBotonesEdit() {
                                    return new Promise((reject, resolve) => {
                                        document.querySelector('.btn-confirmar-edit').addEventListener('click', confirmarCambiosEdit);
                                        document.querySelector('.btn-cancelar-edit').addEventListener('click', cerrarOpcionesUltimasTransacciones);
                                    });
                                    
                                }

                                        async function confirmarCambiosEdit() {
                                            
                                            await cerrarOpcionesUltimasTransacciones();
                                        }

                                        function cerrarOpcionesUltimasTransacciones() {
                                            return new Promise((resolve, reject) => {
                                                let ventanaOpcionesUltimasTransacciones = document.querySelector('.rehacer__container');
                                                ventanaOpcionesUltimasTransacciones.classList.add('cerrar-ventana-animacion');
                                                setTimeout(() => {
                                                    ventanaOpcionesUltimasTransacciones.classList.remove('cerrar-ventana-animacion');
                                                    ventanaOpcionesUltimasTransacciones.remove();
                                                    resolve(true);
                                                }, 500);
                                            }); 
                                        }

                        async function rehacerTransaccion() {
                            await aparecerGifCargando();
                            await cerrarOpcionesUltimasTransacciones();
                        }

                                function aparecerGifCargando() {
                                    new Promise((resolve, reject) => {
                                        resolve(true);
                                    });
                                }

                                

                        async function eliminarUltimaTransaccion() {
                            await cerrarOpcionesUltimasTransacciones();
                        }



        



// ************************************************** PCS **************************************************//

function mostrarPc(e) {
    // Aparecer la secccion de pc
    pcs.style.left = '0';
    // mostrar la informacion de ese pc
    colocarDatosPc(e.target);
}

// Funcion Auxiliar de mostrarPC
function colocarDatosPc(pc) {
    let numeroPc;
    numeroPc = pc.getAttribute('data-id');
    document.querySelector('.pcs__numero').textContent = numeroPc;
}

function ocultarPc() {
    pcs.removeAttribute('style');
}

// ***************************************** OPERATIONS BACKGROUND*********************************//


async function ocultarLogoBackground() {
    let claseDesaparecerLogo = 'img-logo-desaparecer';
    let claseOcultarBackground = 'img-background-ocultar-animacion';
    await removerClaseAnimacionLogo();
    await agregarClaseAnimacionLogo(claseDesaparecerLogo);
    // Ocultar la imagen de fondo 
    await removerClaseBackground();
    await agregarClaseBackground(claseOcultarBackground);
}

        function removerClaseBackground() {
            return new Promise((resolve, reject) => {
                imgBackground.className = 'operations__img-background';
                resolve(true);
            });
        }

        function agregarClaseBackground(clase) {
            return new Promise((resolve, reject) => {
                imgBackground.classList.add(clase);
                resolve(true);
            });
        }

async function aparecerBackground() {
    let claseAparecerBackground = 'img-background-aparecer-animacion';
    await removerClaseBackground();
    await agregarClaseBackground(claseAparecerBackground);
}

async function ocultarLogo() {
    let claseDesaparecerLogo = 'img-logo-desaparecer';
    await removerClaseAnimacionLogo();
    await agregarClaseAnimacionLogo(claseDesaparecerLogo);
}


async function aparecerLogo() {
    let claseAparecer = 'img-logo-aparecer';
    await removerClaseAnimacionLogo();
    await agregarClaseAnimacionLogo(claseAparecer);
}

        function removerClaseAnimacionLogo() {
            return new Promise((resolve, reject) => {
                logo.className = 'operations__img-logo';
                resolve(true);
            });
        }

        function agregarClaseAnimacionLogo(clase) {
            return new Promise((resolve, reject) => {
                logo.classList.add(clase);
                resolve(true);
            });
        }
















































































































































/*

    let divDynamic = document.createElement('div');
    divDynamic.className = 'ventana-dinamica';
    let opcionesUltimasTransacciones = document.createElement('div');
    opcionesUltimasTransacciones.classList.add('rehacer__container');
      
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
            document.querySelector('.last-transactions__container').appendChild(opcionesUltimasTransacciones);
            animacionAparecerVentanaDinamica();
            contenidoRehacerTransaccion();
        }

                // Animacion al Aparecer la ventana dinamica
                function animacionAparecerVentanaDinamica() {
                    opcionesUltimasTransacciones.classList.add('animacion-ventana-dinamica');
                    setTimeout(() => {
                        opcionesUltimasTransacciones.classList.remove('animacion-ventana-dinamica');
                        opcionesUltimasTransacciones.style.opacity = "1";
                    }, 1000);
                }

                function contenidoRehacerTransaccion() {
                    opcionesUltimasTransacciones.innerHTML = `
                            
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
                    <div class="clientes__container overflow">

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
                    document.querySelector('.clientes__container').classList.remove('overflow');
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
                                document.querySelector('.clientes__container').classList.add('overflow');
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
                                        <div class="div-btn">
                                            <input type="submit" class="btn-confirmar" value="Confirmar" id="confirmar-edit-cliente">
                                            <input type="submit" class="btn-cancelar" value="Cancelar" id="cancelar-edit-cliente">
                                        </div>
                                    </div>
                                `;
                                document.querySelector('.clientes__edit-container').classList.add(('animacion-ventana-dinamica'));
                                document.getElementById('confirmar-edit-cliente').addEventListener('click', confirmarCambioCliente);
                                document.getElementById('cancelar-edit-cliente').addEventListener('click', cerrarHerramientas);
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
                                        <div class="div-btn">
                                            <input type="submit" class="btn-confirmar" value="Confirmar" id="confirmar-edit-cliente">
                                            <input type="submit" class="btn-cancelar" value="Cancelar" id="cancelar-edit-cliente">
                                        </div>
                                    </div>
                                `;
                                document.querySelector('.clientes__edit-container').classList.add(('animacion-ventana-dinamica'));
                                document.getElementById('confirmar-edit-cliente').addEventListener('click', confirmarCambioCliente);
                                document.getElementById('cancelar-edit-cliente').addEventListener('click', cerrarHerramientas);
                            }, 500);
                        }

                        function eliminarCliente() {
                            cerrarHerramientas();
                        }
                        
                        function confirmarCambioCliente() {
                            cerrarHerramientas();
                        }

                        */