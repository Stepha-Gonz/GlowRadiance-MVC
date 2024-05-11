<?php 

$db=mysqli_connect($_ENV['DB_HOST'],$_ENV['DB_USER'],$_ENV['DB_PASS'],$_ENV['DB_NAME']);

$db->set_charset('utf8');

if(!$db){
    echo "error: No se pudo conectar a la base de datos";
    echo "error de depuracion: " . mysqli_connect_errno;
    echo "error de depuracion: " . mysqli_connect_error;
    exit;
}