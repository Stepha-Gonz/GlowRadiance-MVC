<?php 

require_once __DIR__ . '/../includes/app.php';

use MVC\Router;
use Controllers\APIController;
use Controllers\CitaController;
use Controllers\AdminController;
use Controllers\LoginController;
use Controllers\ServicioController;

$router = new Router();

//.LOGIN
//*iniciar sesion
$router->get('/',[LoginController::Class,'login']);
$router->post('/',[LoginController::Class,'login']);
$router->get('/logout',[LoginController::Class,'logout']);

//*recuperar Password

$router->get('/olvide',[LoginController::Class, 'olvide']);
$router->post('/olvide',[LoginController::Class, 'olvide']);
$router->get('/recuperar',[LoginController::Class, 'recuperar']);
$router->post('/recuperar',[LoginController::Class, 'recuperar']);

//*crear cuenta
$router->get('/crear-cuenta',[LoginController::Class, 'crear']);
$router->post('/crear-cuenta',[LoginController::Class, 'crear']);


//*Confirmar Cuenta

$router->get('/confirmar-cuenta',[LoginController::Class, 'confirmar']);
$router->get('/mensaje',[LoginController::Class, 'mensaje']);

//.AREA PRIVADA


$router->get('/cita',[CitaController::Class,'index']);
$router->get('/admin',[AdminController::Class,'index']);



//. API de citas

$router->get('/api/servicios',[APIController::class,'index']);
$router->post('/api/citas',[APIController::class,'guardar']);
$router->post('/api/eliminar',[APIController::class,'eliminar']);


//. CRUD Servicios

$router->get('/servicios', [ServicioController::class,'index']);
$router->get('/servicios/crear', [ServicioController::class,'crear']);
$router->post('/servicios/crear', [ServicioController::class,'crear']);
$router->get('/servicios/actualizar', [ServicioController::class,'actualizar']);
$router->post('/servicios/actualizar', [ServicioController::class,'actualizar']);
$router->post('/servicios/eliminar', [ServicioController::class,'eliminar']);
//, Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();