<?php  
require "../db.php"; 

$fecha = file_get_contents("php://input");
$consulta_transferencias = $pdo->prepare("SELECT * FROM pendientes ORDER BY id DESC");
if ($fecha !== "") {
    $consulta_transferencias = $pdo->prepare("SELECT * FROM pendientes WHERE fecha LIKE '%" .$fecha. "%' ORDER BY id DESC");
    $consulta_transferencias->execute();
}
$resultado = $consulta_transferencias->fetchAll(PDO::FETCH_ASSOC);
foreach ($resultado as $data) {
    echo 
    '   
    <div class="last-transactions__item-pendientes">
        <span  class="last-transactions__pendiente-value">'.$data['id'].'</span>
        <span  class="last-transactions__pendiente-value">'.$data['pc'].'</span>
        <span  class="last-transactions__pendiente-value">'.$data['fecha'].'</span>
        <span  class="last-transactions__pendiente-value">'.$data['cedula'].'</span>
        <span  class="last-transactions__pendiente-value">'.$data['nombres'].'</span>
        <span  class="last-transactions__pendiente-value valor-recarga">'.$data['recargado'].'</span>
    </div>
    ';
}
?>