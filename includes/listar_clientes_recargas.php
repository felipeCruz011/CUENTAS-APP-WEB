<?php  
require "../db.php"; 

$consulta_lista_clientes = $pdo->prepare("SELECT * FROM clientes ORDER BY id DESC");
$consulta_lista_clientes->execute();
$resultado = $consulta_lista_clientes->fetchAll(PDO::FETCH_ASSOC);
foreach ($resultado as $data) {
    echo 
    '   
    <div class="last-transactions__resultado-busqueda-clientes-item" id="clientesItem">
        <span  class="clientes__value">'.$data['id'].'</span>
        <span  class="clientes__value">'.$data['cedula'].'</span>
        <span  class="clientes__value">'.$data['nombres'].'</span>
    </div>
    ';
}
?>


                                        