<?php include("db.php") ?>

<?php include("includes/header.php") ?>

    <div class="container-all">
        <!------------------------------------ MENU ------------------------------------>
        <?php include("includes/menu.php") ?>
       

        <div class="body-container">
            <!------------------------------------ PCS ------------------------------------>
            <?php include("includes/computadores.php") ?>

            <!------------------------------------ Seccion de Operaciones ------------------------------------>
            <?php include("includes/operaciones.php") ?>
            
            <!------------------------------------ Ultimas Transacciones ------------------------------------>
            <?php include("includes/last_transactions.php") ?>

            <!------------------------------------ COMPUTERS ICONS------------------------------------>
            <?php include("includes/icons_pc.php") ?>
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

<?php include("includes/footer.php") ?>