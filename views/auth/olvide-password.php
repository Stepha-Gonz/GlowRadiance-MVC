<h1 class="nombre-pagina">Recuperar contraseña</h1>
<p class="descripcion-pagina">Ingresa tus datos para crear una contraseña nueva</p>

<?php 
include_once __DIR__ . '/../templates/alertas.php';
?>

<form action="/olvide" method="POST" class="formulario">
    <div class="campo">
        <label for="email" >Email</label>
        <input type="email" id="email" placeholder="Ingresa tu email" name="email">
    </div>
    
    <input type="submit" value="Recuperar Contraseña" class="boton">
</form>
<div class="acciones">
    <a href="/">¿Ya tienes una cuenta? Inicia Sesión </a>
    <a href="/crear-cuenta">¿Aún no tienes cuenta? Crear una</a>
</div>