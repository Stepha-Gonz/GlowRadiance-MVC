<?php

function debuguear($variable) : string{
    echo "<pre>";
    var_dump($variable);
    echo "<pre>";
    exit;
}


function san($html) : string {
    $san=htmlspecialchars($html);
    return $san;
}


//revisar que el suaurio este autenticado

function isAuth(): void{
    if(!isset($_SESSION['login'])){
        header('Location: /');
    }
}
function isAdmin():void{
    if(!isset($_SESSION['admin'])){
        header('Location: /');
    }
}

function esUltimo(string $actual, string $proximo):bool{
    if($actual !== $proximo){
        return true;
    }else {
        return false;
    }


}