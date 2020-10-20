<?php

require "db.php"; 
$data = file_get_contents("php://input");
$consulta_lista_clientes = $pdo->prepare("SELECT * FROM clientes ORDER BY id DESC");
$consulta_lista_clientes->execute();
if ($data !== "") {
    $consulta_lista_clientes = $pdo->prepare("SELECT * FROM clientes WHERE 
                                                id LIKE '%" .$data. "%' OR 
                                                cedula LIKE '%" .$data. "%' OR 
                                                apodos LIKE '%" .$data. "%' OR 
                                                nombres LIKE '%" .$data. "%'");
    $consulta_lista_clientes->execute();
}
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

