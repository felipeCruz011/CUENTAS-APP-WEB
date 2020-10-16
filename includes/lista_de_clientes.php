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
                <?php
                    include("db.php");
                    $query = "SELECT * FROM clientes";
                    $result_clientes = mysqli_query($conexion, $query);
                    while($row = mysqli_fetch_array($result_clientes)) { ?>   
                    <span  class="clientes__value"><?php echo $row['cedula'] ?></span>
                <?php } ?>
                <span  class="clientes__value">Cruz</span>
                <span  class="clientes__value">Felipe Cruz</span>
            </div>
                            
                       
 
            <div class="clientes__item">
                <span  class="clientes__value">1</span>
                <span  class="clientes__value">1075275242</span>
                <span  class="clientes__value">Cruz</span>
                <span  class="clientes__value">Felipe Cruz</span>
            </div>
</section>