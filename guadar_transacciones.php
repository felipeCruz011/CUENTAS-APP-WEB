<?php 

if  (isset($_POST)) {
        $cedula = $_POST['cedula'];  
        $nombres = $_POST['nombres']; 
        $recargado = $_POST['recargado'];  
        require("db.php");
        if($cedula != "") {
            $query = $pdo->prepare("INSERT INTO transacciones (cedula, nombres, recargado) VALUES (:ced, :nom, :rec)");
            $query->bindParam(":ced", $cedula); 
            $query->bindParam(":nom", $nombres); 
            $query->bindParam(":rec", $recargado); 
            $query->execute();
            $pdo = null;
            echo "ok";
        }
}
?>