<?php 

if  (isset($_POST)) {
        $id = $_POST['id'];  
        $fecha = $_POST['fecha'];  
        $cedula = $_POST['cedula'];  
        $nombres = $_POST['nombres']; 
        $recargado = $_POST['recargado'];  
        require("db.php");
        if($cedula != "") {
            $query = $pdo->prepare("UPDATE transacciones SET fecha = :fec, cedula = :ced, nombres = :nom, recargado = :rec WHERE id = :id");
            $query->bindParam(":id", $id); 
            $query->bindParam(":fec", $fecha); 
            $query->bindParam(":ced", $cedula); 
            $query->bindParam(":nom", $nombres); 
            $query->bindParam(":rec", $recargado); 
            $query->execute();
            $pdo = null;
            echo "ok";
        }
}

?>