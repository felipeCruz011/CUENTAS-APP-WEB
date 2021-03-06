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
var cedulaRecarga = "";

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
    pc.addEventListener('click', mostrarPc);
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
    //listener para mostrar la informacion general de las operaciones logo y background
eyeIcon.addEventListener('mouseenter', ocultarLogoBackground);
eyeIcon.addEventListener('mouseleave', aparecerBackground);
divBackgroundOperations.addEventListener('mouseenter', ocultarLogo);
divBackgroundOperations.addEventListener('mouseleave', aparecerLogo);
document.addEventListener('DOMContentLoaded', verificarAgregadoNuevoCliente);
    //listener para buscar entre las ultimas transacciones 
idBuscarLastTransaccion.addEventListener('keyup', verificarPalabraBusquedaLastTransaccion);
    // Listener para verificar si la pagina tiene foco
window.addEventListener('focus', verificarRecargaExitosa);
    // Listener para abrir las pesta??as ultimas transferencias y pagos pendientes
idTitulo1.addEventListener('click', abrirTabTitulo1);
idTitulo2.addEventListener('click', abrirTabTitulo2);
    // Listener para el body para cerrar la interfaz de los pcs
document.body.addEventListener('click', cerrarPcs);
    // Listener para evitar que se cierre la interfaz de pcs cuando se da click en ella
pcs.addEventListener('click', evitarCerradoInterfazPcs);



// Funciones

// ************************* Enlaces del Menu Movil y de Escritorio *************************// 
    // Funcion para ir a Home 
function irHome() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // A??adimos la clase activa de Home en los enlaces y atajos
    a??adirClaseActivoEnlaces(enlaceHome, 'activo');
    a??adirClaseActivoEnlaces(atajoHomeIcon, 'activo-i');
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
        function a??adirClaseActivoEnlaces(enlaces, clase) {
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
    // A??adimos la clase activa del Listado de Clientes en los enlaces y atajos
    a??adirClaseActivoEnlaces(enlaceListaClientes, 'activo');
    a??adirClaseActivoEnlaces(atajoClientes, 'activo-i');
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
                <div class="clientes__container">
                    <div class="clientes__opciones">
                        <div class="clientes__opciones-container">
                            <i class="fas fa-user-plus clientes__icon-opciones agregar-clientes-icon"></i>
                        </div>
                        <!-- Buscador -->
                        <div class="clientes__buscar-container">
                            <form action="" method="post" class="clientes__buscar">
                                <input type="text" class="clientes__input-buscar" id="inputBuscarListaClientes" name="buscar_lista_clientes" placeholder="Buscar">
                                <div class="clientes__btn-container">
                                    <i class="clientes__btn-lupa fas fa-search"></i>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="clientes__type">
                        <label  class="clientes__header">ID</label>                    
                        <label  class="clientes__header">CEDULA</label>                    
                        <label  class="clientes__header">APODO</label>                    
                        <label  class="clientes__header">NOMBRES</label>                                                     
                    </div>
    
            </section>
            `;
        }

        //Funcion Auxiliar de irListadoClientes 
        async function abrirSecciones() {
            await limipiarClases();
            await transicionAnimacion();
            await animarAperturaSeccion();
            await agregarAlDom();
            // Verificar si se esta abriendo la seccion del Listado de Clientes
            if (document.querySelector('.clientes__container') !== null) {
                eventListenerBusquedaListaClientes();
            }
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
                            // Verificar si estoy en la seccion del Listado de Clientes
                            if (document.querySelector('.clientes__container') !== null) {
                                listarClientesBaseDatos();
                            }
                            if (document.querySelector('.clientes__container') !== null) {
                                document.querySelector('.clientes__container').addEventListener('click', seleccionarFilasListadoClientes);
                            }
                            resolve(true);
                        }, 200);
                    });
                }

                        function eventListenerBusquedaListaClientes() {
                            setTimeout(() => {
                                console.log(inputBuscarListaClientes)
                                inputBuscarListaClientes.addEventListener('keyup', verificarPalabraBusquedaListaClientes);
                            }, 200);
                        }

                                function verificarPalabraBusquedaListaClientes() {
                                    let valorBusqueda = this.value;
                                    console.log(valorBusqueda)
                                    if (valorBusqueda !== "") {
                                        busquedaPalabraBaseDatosListaClientes(valorBusqueda);
                                    } else {
                                        busquedaPalabraBaseDatosListaClientes();
                                    }
                                }

                                function busquedaPalabraBaseDatosListaClientes(valorBusqueda) {
                                    fetch("buscar_lista_clientes.php", {
                                        method: "POST",
                                        body: valorBusqueda
                                    }).then(response => response.text()).then(response => {
                                        document.querySelector('.clientes__container-base-datos').innerHTML = response;
                                    })
                                }

                        function listarClientesBaseDatos() {
                            fetch("includes/listar_lista_de_clientes.php", {
                                method: "POST"
                            }).then(response => response.text()).then(response => {
                                let divContenedorResponse = document.createElement('div');
                                divContenedorResponse.className = 'clientes__container-base-datos';
                                divContenedorResponse.innerHTML = response;
                                document.querySelector('.clientes__container').appendChild(divContenedorResponse);
                            })
                        }

                        function seleccionarFilasListadoClientes(e) {
                            document.querySelector('.clientes__opciones-container').addEventListener('click', crearNuevoCliente);
                            let filaItem = document.querySelectorAll('.clientes__item');
                            let filaLetra = document.querySelectorAll('.clientes__value');
                            let contenedorDatosClientes = document.querySelector('.clientes__herramientas');
                            let cliente = e.target;
                            let filaActivaClass = 'fila-activa';
                            eliminarClaseFilaActiva(filaItem, filaLetra, contenedorDatosClientes, filaActivaClass);
                            if (cliente.classList.contains('clientes__item')) {
                                console.log('entro directo')
                                seleccionarFila(cliente, filaActivaClass);
                                abrirOpcionesClientes();
                            }
                            if (cliente.parentElement.classList.contains('clientes__item')) {
                                console.log('entro hijo')
                                seleccionarFila(cliente.parentElement, filaActivaClass);
                                abrirOpcionesClientes();
                            }

                        }

                                function crearNuevoCliente() {
                                    let crearNuevoCliente = document.createElement('div');
                                    crearNuevoCliente.classList.add('clientes__herramientas');
                                    setTimeout(() => {
                                        crearNuevoCliente.innerHTML = `
                                            <form action="guardar_cliente.php" method="POST" class="clientes__edit-container">
                                                <h1 class="clientes__edit-titulo stroke-black">Nuevo Cliente</h1>
                                                <div class="clientes__type-edit">
                                                    <label  class="clientes__header-edit">ID</label>                    
                                                    <label  class="clientes__header-edit">Cedula</label>                    
                                                    <label  class="clientes__header-edit">Apodo</label>                    
                                                    <label  class="clientes__header-edit">Nombre</label>                                                       
                                                </div>
                                                <div class="clientes__item-edit">
                                                    <input type="text" class="clientes__input-value-edit" value="2">
                                                    <input type="text" class="clientes__input-value-edit" id="cedulaCrearClienteInput" placeholder="Cedula" name="cedula">
                                                    <input type="text" class="clientes__input-value-edit" id="apodosCrearClienteInput" placeholder="Apodo" name="apodos">
                                                    <input type="text" class="clientes__input-value-edit" id="nombresCrearClienteInput" placeholder="Nombres" name="nombres">
                                                </div>
                                                <div class="div-btn">
                                                    <input type="submit" class="btn-confirmar-edit" value="Confirmar" id="confirmar-crear-cliente" name="guardar_cliente">
                                                    <input type="button" class="btn-cancelar-edit" value="Cancelar" id="cancelar-crear-cliente" name="cancelar">
                                                </div>
                                            </form>
                                        `;
                                        document.querySelector('.clientes__container').appendChild(crearNuevoCliente);
                                        setTimeout(() => {
                                            document.querySelector('.clientes__edit-container').classList.add(('animacion-ventana-dinamica'));
                                            document.getElementById('confirmar-crear-cliente').addEventListener('click', confirmarCrearNuevoCliente);
                                            document.getElementById('cancelar-crear-cliente').addEventListener('click', cerrarHerramientasListadoClientes);
                                        }, 10);
                                    }, 10);
                    
                                }

                                        function confirmarCrearNuevoCliente() {
                                            registrarNuevoCliente();
                                            cerrarHerramientasListadoClientes();
                                        }

                                                function registrarNuevoCliente(e) {
                                                    let cedula = document.getElementById('cedulaCrearClienteInput');
                                                    let apodos = document.getElementById('apodosCrearClienteInput');
                                                    let nombres = document.getElementById('nombresCrearClienteInput');
                                                    if (cedula.value !== "" && apodos.value !== "" && nombres.value !== "") {
                                                        fetch('guardar_cliente.php', {
                                                            method: "POST",
                                                            body: new formData(frm)
                                                        }).then(response => response.text()).then(response => {
                                                            if (response == "ok") {
                                                                console.log('Cliente agregado');
                                                            }
                                                        })
                                                    } else {
                                                        alert('Llene todos los datos');
                                                        e.preventDefalut();
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
                                                        <i class="clientes__icons fas fa-trash-alt" id="eliminar-cliente"></i>
                                                    </div>
                                                `;
                                                
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
                                                                        <form action="editar_cliente.php" method="post" id="frm" class="clientes__edit-container">
                                                                            <h1 class="clientes__edit-titulo stroke-black">Editar Datos</h1>
                                                                            <div class="clientes__type-edit">
                                                                                <label  class="clientes__header-edit">ID</label>                    
                                                                                <label  class="clientes__header-edit">Cedula</label>                    
                                                                                <label  class="clientes__header-edit">Apodo</label>                    
                                                                                <label  class="clientes__header-edit">Nombre</label>                                                       
                                                                            </div>
                                                                            <div class="clientes__item-edit">
                                                                                <input type="text" class="clientes__input-value-edit" id="idClienteEdit" name="id" value="">
                                                                                <input type="text" class="clientes__input-value-edit" id="cedulaClienteEdit" name="cedula" value="">
                                                                                <input type="text" class="clientes__input-value-edit" id="apodosClienteEdit" name="apodos" value="">
                                                                                <input type="text" class="clientes__input-value-edit" id="nombresClienteEdit" name="nombres" value="">
                                                                            </div>
                                                                            <div class="div-btn">
                                                                                <input type="submit" class="btn-confirmar-edit-cliente" value="Editar" name="editar_cliente" id="confirmar-edit-cliente">
                                                                                <input type="button" class="btn-cancelar-edit-cliente" value="Cancelar" id="cancelar-edit-cliente">
                                                                            </div>
                                                                        </form>
                                                                    `;
                                                                    document.querySelector('.clientes__edit-container').classList.add(('animacion-ventana-dinamica'));
                                                                    setTimeout(() => {
                                                                        listarClienteEditar();
                                                                    }, 100);
                                                                    resolve(true);
                                                                }, 500);
                                                            });
                                                        }

                                                                function listarClienteEditar() {
                                                                    idClienteEdit.value = document.querySelector('.fila-activa').children[0].textContent;
                                                                    cedulaClienteEdit.value = document.querySelector('.fila-activa').children[1].textContent;
                                                                    apodosClienteEdit.value = document.querySelector('.fila-activa').children[2].textContent;
                                                                    nombresClienteEdit.value = document.querySelector('.fila-activa').children[3].textContent;
                                                                }

                                                        function eventListenersEditListadoClientes() {
                                                            return new Promise((resolve, reject) => {
                                                                document.getElementById('confirmar-edit-cliente').addEventListener('click', confirmarCambioCliente);
                                                                document.getElementById('cancelar-edit-cliente').addEventListener('click', cerrarHerramientasListadoClientes);
                                                                resolve(true);
                                                            });
                                                        }

                                                                function confirmarCambioCliente() {
                                                                    registrarCambiosEditCliente();
                                                                    cerrarHerramientasListadoClientes();
                                                                }

                                                                        function registrarCambiosEditCliente() {
                                                                            let cedula = document.getElementById('cedulaClienteEdit');
                                                                            let apodos = document.getElementById('apodosClienteEdit');
                                                                            let nombres = document.getElementById('nombresClienteEdit');
                                                                            if (cedula.value !== "" && apodos.value !== "" && nombres.value !== "") {
                                                                                fetch('editar_cliente.php', {
                                                                                    method: "POST",
                                                                                    body: new formData(frm)
                                                                                }).then(response => response.text()).then(response => {
                                                                                    if (response == "ok") {
                                                                                        console.log('Cliente editado');
                                                                                    }
                                                                                })
                                                                            } else {
                                                                                alert('Llene todos los datos');
                                                                                e.preventDefalut();
                                                                            }
                                                                        }

                                                function eliminarCliente() {
                                                    eliminarClienteMysql();
                                                    cerrarHerramientasListadoClientes();
                                                }

                                                        function eliminarClienteMysql() {
                                                            posicionarMensaje();
                                                            Swal.fire({
                                                                title: 'Esta seguro de eliminar este Cliente?',
                                                                icon: 'warning',
                                                                showCancelButton: true,
                                                                confirmButtonColor: '#3085d6',
                                                                cancelButtonColor: '#d33',
                                                                confirmButtonText: 'Si!',
                                                                cancelButtonText: 'NO'
                                                            }).then((result) => {
                                                                let id_cliente = document.querySelector('.fila-activa').children[0].textContent; 
                                                                if (result.isConfirmed) {
                                                                    fetch("eliminar_cliente.php", {
                                                                        method: "POST",
                                                                        body: id_cliente
                                                                    }).then(response => response.text()).then(response => {
                                                                        console.log(response)
                                                                        if (response == "ok") {
                                                                            console.log(response)
                                                                            Swal.fire({
                                                                                icon: 'success',
                                                                                title: 'Cliente Eliminado',
                                                                                showConfirmButton: false,
                                                                                timer: 1500
                                                                            })
                                                                            posicionarMensaje();
                                                                            irListadoClientes();
                                                                        } 
                                                                    })
                                                                }
                                                            })
                                                        }

                                                                function posicionarMensaje() {
                                                                    setTimeout(() => {
                                                                        document.querySelector('.swal2-container').setAttribute('style', 'overflow-y: auto; position: absolute; z-index: 9999');
                                                                    }, 200);
                                                                }
               

                

    // Funcion para ir a la seccion de Entrada de Bases
function irEntradaBases() {
    // Eliminar la clase Activa de los enlaces y atajos
    eliminarClaseActivaEnlances(enlaces, 'activo');
    eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
    // A??adimos la clase activa a la Entrada de bases en los enlaces y atajos
    a??adirClaseActivoEnlaces(enlaceEntradaBases, 'activo');
    a??adirClaseActivoEnlaces(atajoEntradaBases, 'activo-i');
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
                            <h3 class="bases__btn-mensaje">A??adir esta Base?</h3>
                            <button class="bases__btn-aceptar">Aceptar</button>
                            <button class="bases__btn-cancelar">Cancelar</button>
                        </div>

                        <div class="bases__guardar">
                            <h2 class="bases__guardar-text">Desea a??adirlo a la Base?</h2>
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
    // A??adimos la clase activa de la seccion de Coputadores en los enlaces y atajos
    a??adirClaseActivoEnlaces(enlaceComputadores, 'activo');
    a??adirClaseActivoEnlaces(atajoComputadores, 'activo-i');
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
    // A??adimos la clase activa de la seccion de transferencias generales en los enlaces y atajos
    a??adirClaseActivoEnlaces(enlaceTransferencias, 'activo');
    a??adirClaseActivoEnlaces(atajoTransferencias, 'activo-i');
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
                        <label  class="listado-transferencias__header">Cedula</label>                    
                        <label  class="listado-transferencias__header">Nombres</label>                    
                        <label  class="listado-transferencias__header">Recargado</label>                                                           
                    </div>
                    <div class="listado-transferencias__item">
                        <span  class="listado-transferencias__value">1</span>
                        <span  class="listado-transferencias__value">30-09-2020 4:49 pm</span>
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
    // A??adimos la clase activa de Home en los enlaces y atajos
    a??adirClaseActivoEnlaces(enlaceHome, 'activo');
    a??adirClaseActivoEnlaces(atajoHomeIcon, 'activo-i');
    // Cerrar la Seccion activa
    animarCerradoSeccion(divDynamic);
}

    // Funcion para ir al Listado de Cientes desde los atajos
    function irListadoClientesIcon() {
        // Eliminar la clase Activa de los enlaces y atajos
        eliminarClaseActivaEnlances(enlaces, 'activo');
        eliminarClaseActivaEnlances(atajosIcons, 'activo-i');
        // A??adimos la clase activa del Listado de Clientes en los enlaces y atajos
        a??adirClaseActivoEnlaces(enlaceListaClientes, 'activo');
        a??adirClaseActivoEnlaces(atajoClientes, 'activo-i');
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
    // A??adimos la clase activa a la Entrada de bases en los enlaces y atajos
    a??adirClaseActivoEnlaces(enlaceEntradaBases, 'activo');
    a??adirClaseActivoEnlaces(atajoEntradaBases, 'activo-i');
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
    // A??adimos la clase activa de la seccion de Coputadores en los enlaces y atajos
    a??adirClaseActivoEnlaces(enlaceComputadores, 'activo');
    a??adirClaseActivoEnlaces(atajoComputadores, 'activo-i');
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
    // A??adimos la clase activa de la seccion de transferencias generales en los enlaces y atajos
    a??adirClaseActivoEnlaces(enlaceTransferencias, 'activo');
    a??adirClaseActivoEnlaces(atajoTransferencias, 'activo-i');
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
            eventListenerParaBuscarClienteRecargas();
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
                                <div class="last-transactions__buscar-cliente" id="idBuscarClienteBloque">
                                    <div class="last-transactions__buscar-cliente-primer-paso">
                                        <form action="" method="post" class="last-transactions__form-valor-recarga">
                                            <input type="text" class="last-transactions__input-valor-recarga" name="valor_recarga" id="inputValorRecarga" placeholder="$ Valor de la Recarga">  
                                        </form>
                                        <!-- Buscador -->
                                        <div class="last-transactions__buscar-cliente-container">
                                            <form action="" method="post" class="last-transactions__buscar-cliente">
                                                <input type="text" class="last-transactions__input-buscar-cliente" id="buscarClienteRecargas" placeholder="Busqueda de Cliente" name="buscar_cliente">
                                                <div class="last-transactions__btn-container-cliente">
                                                    <i class="last-transactions__btn-lupa-cliente fas fa-search-dollar"></i>
                                                </div>
                                            </div>
                                        </div>
                                    
            
                                        <div class="last-transactions__resultado-busqueda-clientes" id="contenedorClientesResultados">
                                            <div class="last-transactions__resultado-busqueda-clientes-header">
                                                <label  class="clientes__header-edit">ID</label>                    
                                                <label  class="clientes__header-edit">Cedula</label>                                     
                                                <label  class="clientes__header-edit">Nombre</label>                                                       
                                            </div>

                                            <div class="last-transactions__resultado-busqueda-clientes-item-container" id="recargasResultadoBusquedaClientes">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>                                   
                            `;
                            document.querySelector('.last-transactions').appendChild(containerBusquedaClientePrimerPaso);
                            setTimeout(() => {
                                containerBusquedaClientePrimerPaso.setAttribute('style', 'position: relative; opacity: 1; transform: translate(0px); left: 0;');
                            }, 100);
                        }, 1000);
                        resolve(true);
                    });
                }   

                function eventListenerParaBuscarClienteRecargas() {
                        setTimeout(() => {
                            listarClientesRecargas();
                            buscarClienteRecargas.addEventListener('keyup', verificarPalabraBusquedaRecargas);
                            buscarClienteRecargas.addEventListener('dblclick', borrarContenidoBusqueda);
                            inputValorRecarga.addEventListener('dblclick', borrarContenidoBusqueda);
                            inputValorRecarga.addEventListener('click', tecladoNumerico);
                            buscarClienteRecargas.addEventListener('click', cerrarTecladoNumerico);
                            recargasResultadoBusquedaClientes.addEventListener('click', seleccionarFilasClientesRecargas);
                        }, 1000);
                }

                        function listarClientesRecargas() {
                            fetch("includes/listar_clientes_recargas.php", {
                                method: "POST"
                            }).then(response => response.text()).then(response => {
                                document.querySelector('.last-transactions__resultado-busqueda-clientes-item-container').innerHTML = response;
                            })
                        }

                        function verificarPalabraBusquedaRecargas() {
                            let valorBusqueda = this.value;
                          
                            if (valorBusqueda !== "") {
                                busquedaPalabraBaseDatosClientesRecargas(valorBusqueda);
                            } else {
                                busquedaPalabraBaseDatosClientesRecargas();
                            }
                            
                        }

                                function busquedaPalabraBaseDatosClientesRecargas(valorBusqueda) {
                                    fetch("buscar_cliente.php", {
                                        method: "POST",
                                        body: valorBusqueda
                                    }).then(response => response.text()).then(response => {
                                        document.querySelector('.last-transactions__resultado-busqueda-clientes-item-container').innerHTML = response; 
                                    })
                                }

                        function borrarContenidoBusqueda() {
                            this.value = '';
                        }

                        function tecladoNumerico() {
                            idPcsBloque.innerHTML = `
                                <div class="tecnumerico" id="idTecNumericoBloque">
                                    <h1>Teclado Numerico</h1>
                                    <div class="tecnumerico__container"> 
                                        <div class="tecnumerico__item"><span>9</span></div>
                                        <div class="tecnumerico__item"><span>8</span></div>
                                        <div class="tecnumerico__item"><span>7</span></div>
                                        <div class="tecnumerico__item"><span>6</span></div>
                                        <div class="tecnumerico__item"><span>5</span></div>
                                        <div class="tecnumerico__item"><span>4</span></div>
                                        <div class="tecnumerico__item"><span>3</span></div>
                                        <div class="tecnumerico__item"><span>2</span></div>
                                        <div class="tecnumerico__item"><span>1</span></div>
                                        <div class="tecnumerico__item ocultar-numero">0</div>
                                        <div class="tecnumerico__item"><span>0</span></div>
                                    </div>
                                </div>
                            `;
                            pcs.style.left = '0';
                            setTimeout(() => {
                                document.querySelectorAll('.tecnumerico__item').forEach((num) => {
                                    num.addEventListener('click', asignarValorRecargaTecNumerico);
                                });
                            }, 100);
                        }

                                function asignarValorRecargaTecNumerico() {
                                    inputValorRecarga.value = `${inputValorRecarga.value}${this.textContent}`;
                                }

                        function cerrarTecladoNumerico() {
                            if (document.getElementById('idTecNumericoBloque') !== null) {
                                pcs.removeAttribute('style');
                                colocarPcsHtml();
                            }
                        }

                                function colocarPcsHtml() {
                                    setTimeout(() => {
                                        idPcsBloque.innerHTML = `                            
                                            <div class="pcs__container" >
                                                <div class="pcs__numero-container">
                                                    <span class="pcs__numero">1</span>
                                                </div>
                                                <div class="pcs__img-container">
                                                    <img src="./img/computador.png" alt="" class="pcs__img">
                                                </div>
                                                <div class="pcs__info">
                                                    <div class="pcs__item">
                                                        <span class="pcs__text">Hora:</span>
                                                        <input type="text" class="pcs__input" id="idPcHora" value="8:00 am" readonly="readonly">
                                                    </div>
                                                    <div class="pcs__item">
                                                        <span class="pcs__text">Cedula:</span>
                                                        <input type="text" class="pcs__input" id="idPcCedula" value="1075275242" readonly="readonly">
                                                    </div>
                                                    <div class="pcs__item">
                                                        <span class="pcs__text">Nombres:</span>
                                                        <input type="text" class="pcs__input" id="idPcNombres" value="Felipe Cruz" readonly="readonly">
                                                    </div>
                                                    <div class="pcs__item">
                                                        <span class="pcs__text">Recargado:</span>
                                                        <input type="text" class="pcs__input" id="idPcRecargado" value="$10.000" readonly="readonly">
                                                    </div>
                                                    <div class="pcs__btn-container">
                                                        <button class="pcs__btn btn-pagar" id="idPcPagar">Pagar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        `;

                                    }, 300);
                                }

                        function seleccionarFilasClientesRecargas(e) {
                            let filaItem = clientesItem;
                            let filaLetra = document.querySelectorAll('.clientes__value');
                            let contenedorDatosClientes = contenedorClientesResultados;
                            let cliente = e.target;
                            let filaActivaClass = 'fila-activa';
                            eliminarClaseFilaActiva(filaItem, filaLetra, contenedorDatosClientes, filaActivaClass);
                            if (cliente.classList.contains('last-transactions__resultado-busqueda-clientes-item')) {
                                seleccionarFila(cliente, filaActivaClass);
                                cedulaRecarga = cliente.children[1].textContent;
                                setTimeout(() => {
                                    copiarCedulaPortapapeles();
                                    crearContenidoTipoRecarga();
                                }, 500);
                            }
                            if (cliente.parentElement.classList.contains('last-transactions__resultado-busqueda-clientes-item')) {
                                seleccionarFila(cliente.parentElement, filaActivaClass);
                                cedulaRecarga = cliente.parentElement.children[1].textContent;
                                setTimeout(() => {
                                    copiarCedulaPortapapeles();
                                    crearContenidoTipoRecarga();
                                }, 500);
                            }

                        }

                                function copiarCedulaPortapapeles() {
                                    valorCpiar = document.querySelector('.fila-activa').children[1].textContent;
                                    let inputCopiar = document.createElement('input');
                                    inputCopiar.setAttribute('value', valorCpiar);
                                    inputCopiar.setAttribute('style', 'opacity: 0');
                                    document.body.appendChild(inputCopiar);                                  
                                    inputCopiar.select(); 
                                    document.execCommand("copy");
                                    document.body.removeChild(inputCopiar);
                                }

                                function crearContenidoTipoRecarga() {
                                    crearContenidoHtmlTipoRecarga();
                                    animarAperturaTipoRecarga();
                                }

                                        function crearContenidoHtmlTipoRecarga() {
                                            let contenedorTipoRecarga = document.createElement('div');
                                            contenedorTipoRecarga.className = 'pendientes';
                                            contenedorTipoRecarga.id = 'idPendientes';
                                            contenedorTipoRecarga.innerHTML = `
                                                <div class="pendientes__container" id="idPendientesContainer"> 
                                                    <div class="pendientes__titulo">
                                                        <h1 class="pendientes__titulo-h1" id="idTituloPendientesIcons">Tipo de Transaccion</h1>
                                                    </div>
                                                    <div class="pendientes__tipo-container">
                                                        <i class="fas fa-hand-holding-usd pendientes__icon" id="idRealizarIcon"></i>
                                                        <i class="fas fa-file-export pendientes__icon" id="idPendienteIcon"></i>
                                                    </div>

                                                </div>
                                            `;
                                            document.querySelector('.last-transactions__resultado-busqueda-clientes').appendChild(contenedorTipoRecarga);                
                                        }

                                        function animarAperturaTipoRecarga() {
                                            setTimeout(() => {
                                                document.querySelector('.pendientes').setAttribute('style', 'opacity: 0; transition: all .5s ease');
                                                setTimeout(() => {
                                                    document.querySelector('.pendientes').setAttribute('style', 'opacity: 1; transition: all .5s ease');
                                                }, 60);
                                            }, 50);
                                            
                                            // Listener para cambiar el nombre del tipo de transaccion
                                            idRealizarIcon.addEventListener('mouseover', cambiarNombreIconPendientes);
                                            idRealizarIcon.addEventListener('mouseleave', regresarNombreIconPendientes);
                                            idPendienteIcon.addEventListener('mouseover', cambiarNombreIconPendientes);
                                            idPendienteIcon.addEventListener('mouseleave', regresarNombreIconPendientes);
                                            // Listeners para Ejecutar el tipo de recargas
                                            idRealizarIcon.addEventListener('click', hacerRecargaInmediata);
                                            idPendienteIcon.addEventListener('click', hacerRecargaPendiente);
                                        }

                                                // Funcion para cambiar el nombre de los iconos para hacer recargas pendientes
                                                function cambiarNombreIconPendientes() {
                                                    if (this.id == 'idRealizarIcon') {
                                                        idTituloPendientesIcons.textContent = 'Recarga Inmediata';
                                                    }
                                                    if (this.id == 'idPendienteIcon') {
                                                        idTituloPendientesIcons.textContent = 'Recarga Pendiente';
                                                    }
                                                }

                                                function regresarNombreIconPendientes() {
                                                    idTituloPendientesIcons.textContent = 'Tipo de Transaccion';
                                                }

                                                function hacerRecargaInmediata() {
                                                    if (inputValorRecarga.value !== ''){
                                                        abrirPaginaHacerRecarga();
                                                        guardarTransaccionBaseDatos();
                                                        setTimeout(() => {
                                                            regresarLastTransactions();
                                                        }, 500);
                                                    }
                                                }

                                                        function abrirPaginaHacerRecarga() {
                                                            setTimeout(() => {
                                                                console.log(cedulaRecarga)
                                                                inputValorRecargaValue = inputValorRecarga.value;
                                                                window.location.href = `https://aliados.wplay.co/actions/deposits#${cedulaRecarga}#${inputValorRecargaValue}`;
                                                            }, 500);
                                                        }

                                                        function guardarTransaccionBaseDatos() {
                                                            let cedulaMysql = document.querySelector('.fila-activa').children[1].textContent;
                                                            let nombresMysql = document.querySelector('.fila-activa').children[2].textContent;
                                                            let recargaMysql = inputValorRecarga.value;
                                                            let dataTransaccion = new FormData();
                                                            dataTransaccion.append('cedula', cedulaMysql);
                                                            dataTransaccion.append('nombres', nombresMysql);
                                                            dataTransaccion.append('recargado', recargaMysql);
                                                            
                                                            fetch('guardar_transacciones.php', {
                                                                method: "POST",
                                                                body: dataTransaccion
                                                            }).then(response => response.text()).then(response => {
                                                                if (response == "ok") {
                                                                    console.log(response);
                                                                    console.log('transaccion Agregada');
                                                                }
                                                            }) 
                                                        }



                                                function hacerRecargaPendiente() {
                                                    animarSeleccionarOrigen(); 
                                                    letreroAyudaPendiente();
                                                }

                                                        function animarSeleccionarOrigen() {
                                                            idPcIconsContainer.setAttribute('style', 'transition: all 1s ease');
                                                            setTimeout(() => {
                                                                idPcIconsContainer.setAttribute('style', 'transition: all 1s ease; background: #000; border: 4px solid #fff');
                                                            }, 20);
                                                        }

                                                        function letreroAyudaPendiente() {
                                                            idPendientesContainer.setAttribute('style', 'transition: all .5s ease');
                                                            setTimeout(() => {
                                                                idPendientesContainer.setAttribute('style', 'transition: all .5s ease; opacity: 0');
                                                            }, 20);
                                                            setTimeout(() => {
                                                                idPendientesContainer.setAttribute('style', 'transition: all .5s ease; opacity: 1');
                                                                idPendientesContainer.innerHTML = `
                                                                    <h1 class="pendientes__titulo-ayuda" id="idTituloAyudaVerificacionPendiente">
                                                                        Seleccione el Origen de la Recarga
                                                                    </h1>
                                                                `;
                                                            }, 500);
                                                        }



                                

                                


                        

          
// Funcion para buscar las ultimas transacciones
function verificarPalabraBusquedaLastTransaccion() {
    setTimeout(() => {
        let valorBusqueda = this.value;
        console.log(valorBusqueda)
        if (valorBusqueda !== "") {
            busquedaPalabraBaseDatosLastTransaccion(valorBusqueda);
        } else {
            busquedaPalabraBaseDatosLastTransaccion();
        }
    }, 100);
}

        function busquedaPalabraBaseDatosLastTransaccion(valorBusqueda) {
            fetch("buscar_transacciones.php", {
                method: "POST",
                body: valorBusqueda
            }).then(response => response.text()).then(response => {
                document.querySelector('.last-transactions__base-datos-items-container').innerHTML = response;
            })
        }
                


// Funcion para seleccionar filas de las ultimas transferencias
function seleccionarFilaUltimasTransacciones(e) {
    let transationsItems = document.querySelectorAll('.last-transactions__item');
    let transationsValues = document.querySelectorAll('.last-transactions__value');
    let contenedorDatos = document.querySelector('.rehacer__container');
    let filaActivaClass = 'fila-activa';
    eliminarClaseFilaActiva(transationsItems, transationsValues, contenedorDatos, filaActivaClass);
    let transaccion = e.target;
    if (transaccion.classList.contains('last-transactions__item')) {
        seleccionarFila(transaccion, filaActivaClass);
        abrirUltimasTransacciones();
    }
    if (transaccion.parentElement.classList.contains('last-transactions__item')) {
        seleccionarFila(transaccion.parentElement, filaActivaClass);
        abrirUltimasTransacciones();
    }
}

        function eliminarClaseFilaActiva(items, values, contenedorDinamico, filaActivaClass) {
            if (contenedorDinamico == null) {
                items.forEach((element) => {
                    element.classList.remove(filaActivaClass);
                });
                values.forEach((value) => {
                    value.classList.remove('fila-activa-color');
                });
            }
        }

        function seleccionarFila(fila, clase) {
            fila.classList.add(clase);
            document.querySelectorAll(`.${clase} span`).forEach((item) => {
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
                        <i class="rehacer__icons--atras fas fa-times-circle" id="idIrUltimasTransacciones"></i>    
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
                    document.querySelector('.eliminar-rehacer').addEventListener('click', eliminarLastTransaccion);
                    idIrUltimasTransacciones.addEventListener('click', cerrarOpcionesUltimasTransacciones);
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
                                                    <label  class="rehacer__header">Cedula</label>                    
                                                    <label  class="rehacer__header">Nombres</label>                    
                                                    <label  class="rehacer__header">Recargado</label>                                     
                                                </div>
                                                <div class="rehacer__item">
                                                    <input type="text" class="rehacer__input-value" id="idUltimasTransacciones" value="">
                                                    <input type="text" class="rehacer__input-value" id="idFechaUltimasTransacciones" value="">
                                                    <input type="text" class="rehacer__input-value" id="idCedulaUltimasTransacciones" value="">
                                                    <input type="text" class="rehacer__input-value" id="idNombresUltimasTransacciones" value="">
                                                    <input type="text" class="rehacer__input-value valor-recarga-edit" id="idRecargadoUltimasTransacciones" value="">
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
                                        // Colocando Datos en los campos a editar
                                        colocarDatosEditarSeleccionado();
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

                                        function colocarDatosEditarSeleccionado() {
                                            filaActiva = document.querySelector('.fila-activa');
                                            idUltimasTransacciones.value = filaActiva.children[0].textContent;
                                            idFechaUltimasTransacciones.value = filaActiva.children[1].textContent;
                                            idCedulaUltimasTransacciones.value = filaActiva.children[2].textContent;
                                            idNombresUltimasTransacciones.value = filaActiva.children[3].textContent;
                                            idRecargadoUltimasTransacciones.value = filaActiva.children[4].textContent;
                                        }

                                function funcionalidadBotonesEdit() {
                                    return new Promise((reject, resolve) => {
                                        document.querySelector('.btn-confirmar-edit').addEventListener('click', confirmarCambiosEdit);
                                        document.querySelector('.btn-cancelar-edit').addEventListener('click', cerrarOpcionesUltimasTransacciones);
                                    });
                                    
                                }

                                        function confirmarCambiosEdit() {
                                            let fechaEditMysql = idFechaUltimasTransacciones.value;
                                            let cedulaEditMysql = idCedulaUltimasTransacciones.value;
                                            let nombresEditMysql = idNombresUltimasTransacciones.value;
                                            let recargadoEditMysql = idRecargadoUltimasTransacciones.value;
                                            console.log(idUltimasTransacciones.value)
                                            let dataLastTransaccion = new FormData();
                                            dataLastTransaccion.append('id', idUltimasTransacciones.value);
                                            dataLastTransaccion.append('fecha', fechaEditMysql);
                                            dataLastTransaccion.append('cedula', cedulaEditMysql);
                                            dataLastTransaccion.append('nombres', nombresEditMysql);
                                            dataLastTransaccion.append('recargado', recargadoEditMysql);
                                            if (fechaEditMysql !== "" && cedulaEditMysql !== "" && nombresEditMysql !== "" && recargadoEditMysql !== "") {
                                                fetch('editar_transacciones.php', {
                                                    method: "POST",
                                                    body: dataLastTransaccion
                                                }).then(response => response.text()).then(response => {
                                                    console.log(response)
                                                    if (response == "ok") {
                                                        Swal.fire({
                                                            icon: 'success',
                                                            title: 'Transaccion Editada Con Exito',
                                                            showConfirmButton: false,
                                                            timer: 1900
                                                        })
                                                        posicionarMensaje();
                                                        cerrarOpcionesUltimasTransacciones();
                                                    }
                                                })
                                            } else {
                                                alert('Llene todos los datos');
                                                e.preventDefalut();
                                            }
                                            setTimeout(() => {
                                                window.location.reload();
                                            }, 2000);
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

                                

                        function eliminarLastTransaccion() {
                            posicionarMensaje();
                            Swal.fire({
                                title: 'Esta seguro de Eliminar esta Transaccion?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Si!',
                                cancelButtonText: 'NO'
                            }).then((result) => {
                                let id_transaccion = document.querySelector('.fila-activa').children[0].textContent; 
                                if (result.isConfirmed) {
                                    fetch("eliminar_transaccion.php", {
                                        method: "POST",
                                        body: id_transaccion
                                    }).then(response => response.text()).then(response => {
                                        console.log(response)
                                        if (response == "ok") {
                                            console.log(response)
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Transaccion Eliminada Correctamente',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                            posicionarMensaje();
                                            cerrarOpcionesUltimasTransacciones();
                                            setTimeout(() => {
                                                window.location.reload();
                                            }, 1500);
                                        } 
                                    })
                                }
                            })
                        }



        



// ************************************************** PCS **************************************************//

function mostrarPc(e) {
    if (pcs.style.left == '') {
        // Aparecer la secccion de pc
        colocarDatosPc(e.target);
        pcs.style.left = '0';
        comprobarPcAbiertoVariable = true;
        // mostrar la informacion de ese pc
    }
    ocultarPc();
    setTimeout(() => {
        // Aparecer la secccion de pc
        colocarDatosPc(e.target); 
        pcs.style.left = '0';
        comprobarPcAbiertoVariable = true;
        // mostrar la informacion de ese pc
    }, 500);
    verificarRealizacionRecargaPendiente();
}

        function verificarRealizacionRecargaPendiente() {
            if (document.getElementById('idTituloAyudaVerificacionPendiente') !== null) {
                // Hora
                let hoy = new Date();
                let hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
                idPcHora.value = hora;

                // Cedula 
                idPcCedula.value = document.querySelector('.fila-activa').children[1].textContent;
                // Nombres 
                idPcNombres.value = document.querySelector('.fila-activa').children[2].textContent;
                // Recargado 
                idPcRecargado.value = inputValorRecarga.value;
                // Ocultar boton de pagar 
                idPcPagar.setAttribute('style', 'opacity: 0');
                // Cambiar el letrero para agregar un eventListener para confirmar la recarga pendiente
                confirmarRecargaPendiente();
            }
        }

                function confirmarRecargaPendiente() {
                    idTituloAyudaVerificacionPendiente.setAttribute('style', 'opacity: 1; transition: all .5s ease');
                    idTituloAyudaVerificacionPendiente.setAttribute('style', 'opacity: 0; transition: all .5s ease');
                    setTimeout(() => {
                        idTituloAyudaVerificacionPendiente.setAttribute('style', 'opacity: 1; transition: all .5s ease');
                        idTituloAyudaVerificacionPendiente.innerHTML = `
                            <div class="pendientes__titulo-confirmar-container">
                                <i class="fas fa-check pendientes__h1-icono-confirmar" id="idIconoConfirmarPendiente"></i>
                                <span class="pendientes__h1-icono-confirmar" id="idTextoTituloConfirmarPendiente">Confirmar Recarga Pendiente</span>
                            </div>
                        `
                        hacerRecargaPendienteMysql();
                    }, 500);
                    idPendientesContainer.setAttribute('style', 'cursor: pointer');
                    setTimeout(() => {
                        idPendientesContainer.onmouseover = () => {
                            idIconoConfirmarPendiente.setAttribute('style', 'color: #46A049');
                            idTextoTituloConfirmarPendiente.setAttribute('style', 'color: #46A049');
                            contenedorClientesResultados.setAttribute('style', 'opacity: 1; transition: all .5s ease; border: 3px solid #46A049');
                        };
                        idPendientesContainer.onmouseleave = () => {
                            idIconoConfirmarPendiente.removeAttribute('style');
                            idTextoTituloConfirmarPendiente.removeAttribute('style');
                            contenedorClientesResultados.removeAttribute('style');
                        }
                    }, 500);
                }

                        function hacerRecargaPendienteMysql() {
                            idPendientesContainer.onclick =  () => { 
                                comprobarPcAbiertoVariable = false;
                                transicionProcesandoPendiente();
                                guardarBaseDatosRecargaPendiente();
                            }
                        }

                                function transicionProcesandoPendiente() {
                                    idTextoTituloConfirmarPendiente.setAttribute('style', 'opacity: 1; transition: all .5s ease');
                                    idTextoTituloConfirmarPendiente.setAttribute('style', 'opacity: 0; transition: all .5s ease');
                                    setTimeout(() => {
                                        idTextoTituloConfirmarPendiente.textContent = 'Procesando...'
                                        idTextoTituloConfirmarPendiente.setAttribute('style', 'opacity: 1; transition: all .5s ease');
                                        setTimeout(() => {
                                            abrirPaginaHacerRecarga();
                                        }, 1500);
                                    }, 500);
                                }

                                function guardarBaseDatosRecargaPendiente() {
                                    let pcSeleccionado = document.querySelector('.computador__seleccionado').children[0].textContent;
                                    let cedulaMysql = idPcCedula.value;
                                    let nombresMysql = idPcNombres.value;
                                    let recargaMysql = inputValorRecarga.value;
                                    let dataTransaccion = new FormData();
                                    dataTransaccion.append('cedula', cedulaMysql);
                                    dataTransaccion.append('nombres', nombresMysql);
                                    dataTransaccion.append('recargado', recargaMysql);
                                    dataTransaccion.append('pc', pcSeleccionado);                    
                                    fetch('guardar_pendientes.php', {
                                        method: "POST",
                                        body: dataTransaccion
                                    }).then(response => response.text()).then(response => {
                                        if (response == "ok") {
                                            console.log(response);
                                            console.log('transaccion Agregada');
                                        }
                                    }) 
                                }

// Funcion Auxiliar de mostrarPC
function colocarDatosPc(pc) {
    // Remover pc activo
    document.querySelectorAll('.computadores__icon').forEach((iconPc) => {
        iconPc.classList.remove('computador__seleccionado');
    });
    // Agregar la Clase Activo 
    setTimeout(() => {
        if (pc.classList.contains('computadores__icon')) {
            pc.classList.add('computador__seleccionado');
        }
        if (pc.classList.contains('computadores__icon-text')) {
            pc.parentElement.classList.add('computador__seleccionado');
        }
    }, 5);


    let numeroPc;
    if (pc.classList.contains('computadores__icon')) {
        numeroPc = pc.getAttribute('data-id');
       
        if(numeroPc == 'Cajero') {
            document.querySelector('.pcs__numero').style.fontSize = '60px';
        } else {
            document.querySelector('.pcs__numero').removeAttribute('style');
        }
       
        document.querySelector('.pcs__numero').textContent = numeroPc;
    }

    if (pc.classList.contains('computadores__icon-text')) {
        numeroPc = pc.parentElement.getAttribute('data-id');
        
        if(numeroPc == 'Cajero') {
            document.querySelector('.pcs__numero').style.fontSize = '60px';
        } else {
            document.querySelector('.pcs__numero').removeAttribute('style');
        }

        document.querySelector('.pcs__numero').textContent = numeroPc;
    }

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


function verificarAgregadoNuevoCliente() {
    if (document.getElementById('seAgregoCliente') !== null) {
        irListadoClientes();
        setTimeout(() => {
            crearContenidoMensajeClienteNuevo()
        }, 200);
    }

    if (document.getElementById('seEditoUnCliente') !== null) {
        irListadoClientes();
        setTimeout(() => {
            crearContenidoMensajeClienteEditado()
        }, 200);
    }

    listarTransferenciasRecargadas();
    listarPendientes();
}

        function crearContenidoMensajeClienteNuevo() {
            Swal.fire({
                icon: 'success',
                title: 'Cliente A??adido con Exito',
                showConfirmButton: false,
                timer: 1500
            })
            posicionarMensaje();
        }

        function crearContenidoMensajeClienteEditado() {
            Swal.fire({
                icon: 'success',
                title: 'Cliente Editado Con Exito',
                showConfirmButton: false,
                timer: 1500
            })
            posicionarMensaje();

        }


        function listarTransferenciasRecargadas() {
               // Fecha Actual
            let currentDate = new Date();
            let currentDay = currentDate.getDate();
            let monthNumber = currentDate.getMonth();
            monthNumber = monthNumber + 1;
            let currentYear = currentDate.getFullYear();
            if (currentDay < 10) {
                currentDay = `0${currentDay}`;
            }
            if (monthNumber < 10) {
                monthNumber = `0${monthNumber}`;
            }
            let fecha = `${currentYear}-${monthNumber}-${currentDay}`;
            console.log(fecha);
            fetch("includes/listar_transacciones.php", {
                method: "POST",
                body: fecha
            }).then(response => response.text()).then(response => {
                document.querySelector('.last-transactions__base-datos-items-container').innerHTML = response;
            })
        }

        function listarPendientes() {
            // Fecha Actual
            let currentDate = new Date();
            let currentDay = currentDate.getDate();
            let monthNumber = currentDate.getMonth();
            monthNumber = monthNumber + 1;
            let currentYear = currentDate.getFullYear();
            if (monthNumber < 10) {
                monthNumber = `0${monthNumber}`;
            }
            if (currentDay < 10) {
                currentDay = `0${currentDay}`;
            }
            console.log(monthNumber);
            let fecha = `${currentYear}-${monthNumber}-${currentDay}`;

            fetch("includes/listar_pendientes.php", {
                method: "POST",
                body: fecha
              }).then(response => response.text()).then(response => {
                document.querySelector('.last-transactions__base-datos-items-pendientes-container').innerHTML = response;
            })
        }


// Funcion para verificar si se realizo la recarga exitosamente
function verificarRecargaExitosa() {
    let urlActual = window.location.href;
    let urlRecargaExitosa = 'https://localhost/CUENTAS%20APP%20WEB/#recargado';
    if(urlRecargaExitosa == urlActual) {
        Swal.fire({
            icon: 'success',
            title: 'Recarga Exitosa',
            showConfirmButton: false,
            timer: 3000
        })
        posicionarMensaje();
        setTimeout(() => {
            window.history.go(-2)
        }, 2100);
    }
}


// Funcion para abrir los tabs de ultimas transacciones y pagos pendientes
function abrirTabTitulo1() {
    if(!this.classList.contains('h2-active')) {
        this.classList.add('h2-active');
        idTitulo2.classList.remove('h2-active');
        idTitulo2.style.opacity = '.6';
        idTitulo1.removeAttribute('style');
        setTimeout(() => {
            aparecerTabTitulo(idTabsContainerTitulo1)
        }, 500);
        ocultarTabTitulo(idTabsContainerTitulo2);
    }
}


// Funcion para abrir los tabs de ultimas transacciones y pagos pendientes
function abrirTabTitulo2() {
    if(!this.classList.contains('h2-active')) {
        this.classList.add('h2-active');
        idTitulo1.classList.remove('h2-active');
        idTitulo1.style.opacity = '.6';
        idTitulo2.removeAttribute('style');
        setTimeout(() => {
            aparecerTabTitulo(idTabsContainerTitulo2);    
        }, 500);
        ocultarTabTitulo(idTabsContainerTitulo1);
        document.querySelector('.last-transactions__base-datos-items-pendientes-container').addEventListener('click', seleccionarFilaPendientes);
    }
}

        function aparecerTabTitulo(tab) {
            tab.setAttribute('style', 'opacity: 0; display: initial; transition: all .5s ease');
            setTimeout(() => {
                tab.setAttribute('style', 'opacity: 1; display: initial; transition: all .5s ease');
            }, 100);
            tab.setAttribute('style', 'opacity: 1; display: initial; transform: translate(100px); transition: all .5s ease');
        }

        function ocultarTabTitulo(tab) {
            tab.setAttribute('style', 'opacity: 0; display: initial; transform: translate(100px); transition: all .5s ease');
            setTimeout(() => {
                tab.setAttribute('style', 'opacity: 0; transform: translate(100px); display: none; transition: all .5s ease');
            }, 500);
        }

        function seleccionarFilaPendientes(e) {
            document.querySelector('.last-transactions__item-pendientes').addEventListener('click', abrirPc);
            let filaItem = document.querySelectorAll('.last-transactions__item-pendientes');
            let filaLetra = document.querySelectorAll('.last-transactions__pendiente-value');
            let transaccionPendiente = e.target;
            let filaActivaClass = 'fila-activa-pendiente';
            eliminarClaseFilaActivaPendientes(filaItem, filaLetra, filaActivaClass);
            if (transaccionPendiente.classList.contains('last-transactions__item-pendientes')) {
                console.log('entro directo')
                seleccionarFila(transaccionPendiente, filaActivaClass);
                abrirPc();
            }
            if (transaccionPendiente.parentElement.classList.contains('last-transactions__item-pendientes')) {
                console.log('entro hijo')
                seleccionarFila(transaccionPendiente.parentElement, filaActivaClass);
                abrirPc();
            }
        }

                function abrirPc() {
                    console.log('abre')
                    mostrarPcDesdePendientes();
                }

                        function mostrarPcDesdePendientes() {
                            let targetPcCajero = false;
                            target = document.querySelector('.fila-activa-pendiente').children[1].textContent;
                            if (target == 'C') {
                                target = 'Cajero';
                                targetPcCajero = true;
                            }

                            if (targetPcCajero == true) {
                                document.querySelector('.pcs__numero').setAttribute('style', 'font-size: 60px');
                                targetPcCajero = false;
                            } else {
                                document.querySelector('.pcs__numero').removeAttribute('style');
                            }

                            if (pcs.style.left == '') {
                                // Aparecer la secccion de pc
                                pcs.style.left = '0';
                                comprobarPcAbiertoVariable = true;
                                // mostrar la informacion de ese pc
                                document.querySelector('.pcs__numero').textContent = target;
                            }
                            ocultarPc();
                            setTimeout(() => {
                                // Aparecer la secccion de pc
                                pcs.style.left = '0';
                                comprobarPcAbiertoVariable = true;
                                // mostrar la informacion de ese pc
                                document.querySelector('.pcs__numero').textContent = target;
                            }, 500);
                            cargarDatosTransaccionPendientePc();
                        }

                                function cargarDatosTransaccionPendientePc() {
                                    let datosTrasaccionPendiente = document.querySelector('.fila-activa-pendiente');
                                    idPcHora.value = datosTrasaccionPendiente.children[2].textContent;
                                    idPcCedula.value = datosTrasaccionPendiente.children[3].textContent;
                                    idPcNombres.value = datosTrasaccionPendiente.children[4].textContent;
                                    let sumaRecargasPendientes = 0;
                                    // Hallar el valor del total recargado por el usuario
                                    document.querySelectorAll('.last-transactions__item-pendientes').forEach((transaccionPendiente) => {
                                        sumaRecargasPendientes = sumaRecargasPendientes + Number(transaccionPendiente.children[5].textContent); 
                                    });
                                    
                                    idPcRecargado.value = sumaRecargasPendientes;
                                  
                                }

                function eliminarClaseFilaActivaPendientes(items, values, filaActivaClass) {
                    console.log(items)
                    items.forEach((element) => {
                        element.classList.remove(`${filaActivaClass}`);
                    });
                    values.forEach((value) => {
                        value.classList.remove('fila-activa-color');
                    });
                }

var comprobarPcAbiertoVariable = false;
// Funcion para cerrar los pcs cuando se de click por fuera de la Interfaz
function cerrarPcs(e) {
    console.log(comprobarPcAbiertoVariable)
    if (comprobarPcAbiertoVariable === true) {
        ocultarPc();
        document.querySelectorAll('.computadores__icon').forEach((pc) => {
            pc.classList.remove('computador__seleccionado');
        });
        comprobarPcAbiertoVariable = false
    }   
}

// Funcion para evitar el cerrado de pcs cuando se da click en la interfaz PCS
function evitarCerradoInterfazPcs() {
    comprobarPcAbiertoVariable = false;
    setTimeout(() => {
        comprobarPcAbiertoVariable = true;
    }, 100);

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
        a??adirClaseActivaFila(transaccion);
        ultimasTransacciones();
    }

    if(transaccion.classList.contains('last-transactions__item')) {
        a??adirClaseActivaFila(transaccion.children[0]);
        ultimasTransacciones();
    }
}
        // Funcion auxiliar para a??adir la clase de fila activa
        function a??adirClaseActivaFila(item) {
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
                            <h3 class="bases__btn-mensaje">A??adir esta Base?</h3>
                            <button class="bases__btn-aceptar">Aceptar</button>
                            <button class="bases__btn-cancelar">Cancelar</button>
                        </div>

                        <div class="bases__guardar">
                            <h2 class="bases__guardar-text">Desea a??adirlo a la Base?</h2>
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

    // A??adir el contenido con animacion
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
                    a??adirClaseActivaFila(cliente);
                    abrirHerramientasClientes();
                }
                    
                if(cliente.classList.contains('clientes__item')) {
                    a??adirClaseActivaFila(cliente.children[0]);
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