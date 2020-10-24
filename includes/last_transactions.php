<section class="last-transactions"> <!-- Bloque -->

    <?php if (isset($_SESSION['message'])) { ?>
        <div id="seAgregoCliente"></div>
    <?php session_unset(); } ?>
    
    <?php if (isset($_SESSION['messageEdit'])) { ?>
        <div id="seEditoUnCliente"></div>
    <?php session_unset(); } ?>

    <div class="hacer-transaccion__container">
        <div class="hacer-transaccion__titulo-container">
            <h2 class="hacer-transaccion__titulo">Hacer Recargas</h2>
            <i class="hacer-transaccion__btn-icon fas fa-plus"></i>
            <i class="hacer-transaccion__btn-icon-cerrar fas fa-plus oculto"></i>
        </div>
    </div>

    <div class="last-transactions__container" id="contenedorUltimasTransacciones">
        <div class="last-transactions__title-container">
            <h2 class="last-transactions__h2 titulo1 h2-active" id="idTitulo1">Ultimas Transacciones</h2>
            <h2 class="last-transactions__h2 titulo2" id="idTitulo2">Pagos Pendientes</h2>
                <!-- Buscador -->
            <div class="last-transactions__buscar-container">
                <div class="last-transactions__buscar">
                    <input type="text" class="last-transactions__input-buscar" id="idBuscarLastTransaccion" placeholder="Buscar">
                    <div class="last-transactions__btn-container">
                        <i class="last-transactions__btn-lupa fas fa-search-dollar"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="last-transactions__tabs-titulo1-container" id="idTabsContainerTitulo1">
            <div class="last-transactions__type">
                <label  class="last-transactions__header">ID</label>                    
                <label  class="last-transactions__header">Fecha y Hora</label>                                   
                <label  class="last-transactions__header">Cedula</label>                    
                <label  class="last-transactions__header">Nombres</label>                    
                <label  class="last-transactions__header">Recargado</label>                                     
            </div>

            <div class="last-transactions__base-datos-items-container">
            </div>
        </div>

        <div class="last-transactions__tabs-titulo2-container" id="idTabsContainerTitulo2">
            <div class="last-transactions__type_pendiente">
                <label  class="last-transactions__header">ID</label>                    
                <label  class="last-transactions__header">PC</label>                    
                <label  class="last-transactions__header">Fecha y Hora</label>                                   
                <label  class="last-transactions__header">Cedula</label>                    
                <label  class="last-transactions__header">Nombres</label>                    
                <label  class="last-transactions__header">Recargado</label>                                     
            </div>

            <div class="last-transactions__base-datos-items-pendientes-container">
            </div>
        </div>
        
    </div>
</section>          


