<?php  
require "../db.php"; 
$clientes__value = '"clientes__value"';
$clientes__item = '"clientes__item"';

$consulta_lista_clientes = $pdo->prepare("SELECT * FROM clientes ORDER BY id DESC");
$consulta_lista_clientes->execute();
$resultado = $consulta_lista_clientes->fetchAll(PDO::FETCH_ASSOC);
foreach ($resultado as $data) {
    echo "<div class=".$clientes__item.">
              <span  class=".$clientes__value.">".$data['id']."</span>
              <span  class=".$clientes__value.">".$data['cedula']."</span>
              <span  class=".$clientes__value.">".$data['apodos']."</span>
              <span  class=".$clientes__value.">".$data['nombres']."</span>
         </div>";
}
?>


                                        