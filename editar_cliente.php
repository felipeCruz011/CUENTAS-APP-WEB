<?php

if  (isset($_POST['editar_cliente'])) {
    $id = $_POST['id'];  
    $cedula = $_POST['cedula'];  
    $apodos = $_POST['apodos'];  
    $nombres = $_POST['nombres'];  
    require("db.php");
    if($cedula != "") {
        $query = $pdo->prepare("UPDATE clientes SET cedula = :ced, apodos = :apo, nombres = :nom WHERE id = :id");
        $query->bindParam(":id", $id); 
        $query->bindParam(":ced", $cedula); 
        $query->bindParam(":apo", $apodos); 
        $query->bindParam(":nom", $nombres); 
        $query->execute();
        $pdo = null;
        echo "ok";
    
        $_SESSION['messageEdit'] = 'Cliente Editado con Exito';
    
        header("location: index.php");
    } else {
        header("location: index.php");
    }
}

?>