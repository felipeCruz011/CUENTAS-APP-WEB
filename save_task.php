<?php

include("db.php");

if  (isset($_POST['save_task'])) {
    $cedula = $_POST['cedula'];  
    $apodos = $_POST['apodos'];  
    $nombres = $_POST['nombres'];  
    
    $query = "INSERT INTO clientes(cedula, apodos, nombres) VALUES ('$cedula', '$apodos', '$nombres')";

    $result = mysqli_query($conexion, $query);

    if (!$result) {
        die("Query Failed");
    }

    $_SESSION['message'] = 'Cliente guardado con Exito';
    $_SESSION['message_type'] = 'success';

    header("location: index.php");
}

?>