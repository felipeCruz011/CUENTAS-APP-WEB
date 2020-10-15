<?php include("db.php") ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB ADMINISTRATIVA MIJUGADA.CO</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link href="https://fonts.googleapis.com/css2?family=Sen&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
</head>
<body>

    <div class="container-all">
        <!------------------------------------ MENU ------------------------------------>

        <nav class="menu"> <!-- Bloque -->
            <div class="menu__container">
                <h1 class="menu__titulo">Transferencias "MIJUGADA.CO"</h1>
                <div class="menu__links-desktop">
                    <li class="menu__li-desktop">
                        <a href="#" class="menu__enlaces activo enlace-inicio">Inicio</a>
                    </li>
                    <li class="menu__li-desktop">
                        <a href="#" class="menu__enlaces menu__li-desktop--width enlace-lista-clientes">Lista de Clientes</a>
                    </li>
                    <li class="menu__li-desktop">
                        <a href="#" class="menu__enlaces menu__li-desktop--min-width enlace-entrada-bases">Bases</a>
                    </li>
                    <li class="menu__li-desktop">
                        <a href="#" class="menu__enlaces menu__li-desktop--no-width enlace-transferencias">Transferencias</a>
                    </li>
                </div>
                <i class="menu__btn-responsive fas fa-bars" onclick="abrirMenu()"></i>
            </div>
            <div class="menu__dropdown"> 
                <li class="menu__li-movil">
                    <a href="#" class="menu__enlaces activo enlace-inicio">Inicio</a>
                </li>
                <li class="menu__li-movil">
                    <a href="#" class="menu__enlaces enlace-lista-clientes">Lista de Clientes</a>
                </li>
                <li class="menu__li-movil">
                    <a href="#" class="menu__enlaces enlace-entrada-bases">Bases</a>
                </li>
                <li class="menu__li-movil">
                    <a href="#" class="menu__enlaces enlace-transferencias">Transferencias</a>
                </li>
            </div>
        </nav>

        <div class="body-container">
            <!------------------------------------ PCS ------------------------------------>
            <section class="pcs">
                <div class="pcs__container">
                    <div class="pcs__pc-container">
                        <span class="pcs__pc">PC</span>
                    </div>
                    <span class="pcs__numero">1</span>
                    <div class="pcs__img-container">
                        <img src="/img/computador.png" alt="" class="pcs__img">
                    </div>
                    <div class="pcs__info">
                        <div class="pcs__item">
                            <span class="pcs__text">Hora:</span>
                            <input type="text" class="pcs__input" id="pc-hora" value="8:00 am" readonly="readonly">
                        </div>
                        <div class="pcs__item">
                            <span class="pcs__text">Cedula:</span>
                            <input type="text" class="pcs__input" id="pc-cedula" value="1075275242" readonly="readonly">
                        </div>
                        <div class="pcs__item">
                            <span class="pcs__text">Nombres:</span>
                            <input type="text" class="pcs__input" id="pc-item" value="Felipe Cruz" readonly="readonly">
                        </div>
                        <div class="pcs__item">
                            <span class="pcs__text">Recargado:</span>
                            <input type="text" class="pcs__input" id="pc-recargado" value="$10.000" readonly="readonly">
                        </div>
                        <div class="pcs__btn-container">
                            <button class="pcs__btn btn-pagar">Pagar</button>
                            <button class="pcs__btn btn-transferencias-realizadas">Transferencias Realizadas</button>
                        </div>
                    </div>
                </div>
            </section>
            <!------------------------------------ Seccion de Operaciones ------------------------------------>
            <section class="operations"><!-- Bloque -->
                <div class="operations__background">
                    <img class="operations__img-background"src="/img/modelo-futboll.jpg" alt="modelo-futboll">
                    <img class="operations__img-logo"src="/img/logo-mijugada.png" alt="logo">
                </div>
                <i class="fas fa-eye eye-icon"></i>
                <div class="operations__container">
                    <h2 class="operations__titulo">Centro de Operaciones</h2>
                    <div class="operations__item">
                        <label class="operations__description">Base:</label>
                        <input type="text" class="operations__input" id="base" readonly="readonly" disabled="disabled" placeholder="Base de Trabajo">
                    </div>
                    <div class="operations__item">
                        <label class="operations__description">Venta:</label>
                        <input type="text" class="operations__input" id="venta" readonly="readonly" disabled="disabled" placeholder="Venta total de Pagina">
                    </div>
                    <div class="operations__item">
                        <label class="operations__description">Productos:</label>
                        <input type="text" class="operations__input" id="venta-productos" readonly="readonly" disabled="disabled" placeholder="Venta de Productos en el Dia">
                    </div>
                    <div class="operations__item">
                        <label class="operations__description">Retiros:</label>
                        <input type="text" class="operations__input" id="retiros" readonly="readonly" disabled="disabled" placeholder="Retiros realizados">
                    </div>
                    <div class="operations__item">
                        <label class="operations__description">Gastos:</label>
                        <input type="text" class="operations__input" id="gastos" readonly="readonly" disabled="disabled" placeholder="Gastos operacionales">
                    </div>
                    <div class="operations__item">
                        <label class="operations__description">Debe Entregar:</label>
                        <input type="text" class="operations__input" id="efectivo-entregar" readonly="readonly" disabled="disabled" placeholder="Efectivo a entregar">
                    </div>
                    <div class="operations__item">
                        <label class="operations__description">Descuadre:</label>
                        <input type="text" class="operations__input" id="descuadre" readonly="readonly" disabled="disabled" placeholder="Dinero a reponer">
                    </div>
                </div>
            </section>
            
            <!------------------------------------ Ultimas Transacciones ------------------------------------>
            <section class="last-transactions"> <!-- Bloque -->
                <div class="hacer-transaccion__container">
                    <div class="hacer-transaccion__titulo-container">
                        <h2 class="hacer-transaccion__titulo">Hacer Recargas</h2>
                        <i class="hacer-transaccion__btn-icon fas fa-plus"></i>
                        <i class="hacer-transaccion__btn-icon-cerrar fas fa-plus oculto"></i>
                    </div>
                </div>

                <div class="last-transactions__container">
                    <div class="last-transactions__title-container">
                        <h2 class="last-transactions__h2">Ultimas Transacciones</h2>
                            <!-- Buscador -->
                        <div class="last-transactions__buscar-container">
                            <div class="last-transactions__buscar">
                                <input type="text" class="last-transactions__input-buscar" placeholder="Buscar">
                                <div class="last-transactions__btn-container">
                                    <i class="last-transactions__btn-lupa fas fa-search-dollar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="last-transactions__type">
                        <label  class="last-transactions__header">ID</label>                    
                        <label  class="last-transactions__header">Fecha</label>                    
                        <label  class="last-transactions__header">Hora</label>                    
                        <label  class="last-transactions__header">Cedula</label>                    
                        <label  class="last-transactions__header">Nombres</label>                    
                        <label  class="last-transactions__header">Recargado</label>                                     
                    </div>
                    <div class="last-transactions__item">
                        <span  class="last-transactions__value">1</span>
                        <span  class="last-transactions__value">25-09-2020</span>
                        <span  class="last-transactions__value">8:00 am </span>
                        <span  class="last-transactions__value">1075275242</span>
                        <span  class="last-transactions__value">Felipe Cruz</span>
                        <span  class="last-transactions__value valor-recarga">10000</span>
                    </div>
                    <div class="last-transactions__item">
                        <span  class="last-transactions__value">2</span>
                        <span  class="last-transactions__value">25-09-2020</span>
                        <span  class="last-transactions__value">8:00 am </span>
                        <span  class="last-transactions__value">1075275242</span>
                        <span  class="last-transactions__value">Felipe Cruz</span>
                        <span  class="last-transactions__value valor-recarga">10000</span>
                    </div>
                </div>
            </section>          
            <!------------------------------------ COMPUTERS ------------------------------------>
            <section class="computadores">
                <div class="computadores__container">   
                    <div class="computadores__icon-container">
                        <i class="fas fa-laptop computadores__icon" data-id="1" id="pc-1"></i>
                    </div>
                    <div class="computadores__icon-container">
                        <i class="fas fa-laptop computadores__icon" data-id="2" id="pc-2"></i>
                    </div>
                    <div class="computadores__icon-container">
                        <i class="fas fa-laptop computadores__icon" data-id="3" id="pc-3"></i>
                    </div>
                    <div class="computadores__icon-container">
                        <i class="fas fa-laptop computadores__icon" data-id="4" id="pc-4"></i>
                    </div>
                </div>
            </section>
        </div>

        <div class="chat">
            <i class="chat__icon far fa-comment"></i>
            <span class="chat__text">Chat</span>
        </div>

         <!------------------------------------ ATAJOS ------------------------------------>

        <section class="atajos">
            <div class="atajos__container">
                <i class="atajos__icons fas fa-home home-icon activo-i"></i>
                <i class="atajos__icons fas fa-users users-icon"></i>
                <i class="atajos__icons fas fa-dollar-sign entrada-bases-icon"></i>
                <i class="atajos__icons fas fa-random transferencias-icon"></i>
            </div>
        </section>

    </div>
    <script src="js/app.js"></script>
</body>
</html>


<img src="" alt="">