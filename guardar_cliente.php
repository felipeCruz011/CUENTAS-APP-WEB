<?php

if  (isset($_POST['guardar_cliente'])) {
    $cedula = $_POST['cedula'];  
    $apodos = $_POST['apodos'];  
    $nombres = $_POST['nombres'];  
    require("db.php");
    if($cedula != "") {
        $query = $pdo->prepare("INSERT INTO clientes (cedula, apodos, nombres) VALUES (:ced, :apo, :nom)");
        $query->bindParam(":ced", $cedula); 
        $query->bindParam(":apo", $apodos); 
        $query->bindParam(":nom", $nombres); 
        $query->execute();
        $pdo = null;
        echo "ok";
    
        $_SESSION['message'] = 'Cliente guardado con Exito';
        $_SESSION['message_type'] = 'success';
    
        header("location: index.php");
    } else {
        header("location: index.php");
    }
}

?>