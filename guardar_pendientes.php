<?php 

if  (isset($_POST)) {
        $pc = $_POST['pc'];  
        $cedula = $_POST['cedula'];  
        $nombres = $_POST['nombres']; 
        $recargado = $_POST['recargado'];  
        require("db.php");
        if($cedula != "") {
            $query = $pdo->prepare("INSERT INTO pendientes (pc, cedula, nombres, recargado) VALUES (:pc, :ced, :nom, :rec)");
            $query->bindParam(":pc", $pc); 
            $query->bindParam(":ced", $cedula); 
            $query->bindParam(":nom", $nombres); 
            $query->bindParam(":rec", $recargado); 
            $query->execute();
            $pdo = null;
            echo "ok";
        }
}
?>