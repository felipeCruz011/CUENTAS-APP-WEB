<section class="last-transactions"> <!-- Bloque -->

    <?php if (isset($_SESSION['message'])) { ?>
        <div id="seAgregoCliente"></div>
    <?php session_unset(); } ?>

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