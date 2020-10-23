<?php

require "db.php"; 
$data = file_get_contents("php://input");
$consulta_transacciones = $pdo->prepare("SELECT * FROM transacciones ORDER BY id DESC");
$consulta_transacciones->execute();
if ($data !== "") {
    $consulta_transacciones = $pdo->prepare("SELECT * FROM transacciones WHERE 
                                                id LIKE '%" .$data. "%' OR 
                                                fecha LIKE '%" .$data. "%' OR 
                                                cedula LIKE '%" .$data. "%' OR 
                                                nombres LIKE '%" .$data. "%' OR 
                                                recargado LIKE '%" .$data. "%'");
    $consulta_transacciones->execute();
}
$resultado = $consulta_transacciones->fetchAll(PDO::FETCH_ASSOC);
foreach ($resultado as $data) {
    echo 
    '   
    <div class="last-transactions__item">
        <span  class="last-transactions__value">'.$data['id'].'</span>
        <span  class="last-transactions__value">'.$data['fecha'].'</span>
        <span  class="last-transactions__value">'.$data['cedula'].'</span>
        <span  class="last-transactions__value">'.$data['nombres'].'</span>
        <span  class="last-transactions__value valor-recarga">'.$data['recargado'].'</span>
    </div>
    ';
}
?>
