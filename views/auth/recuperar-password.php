<h1 class="nombre-pagina">Recupera tu contraseña</h1>
<p class="descripcion-pagina">Ingresa tu nueva contraseña a continuación</p>
<?php 
include_once __DIR__ . "/../templates/alertas.php";
?>

<?php 
if($error) return ;
?>
<form method="POST" class="formulario">
    <div class="campo">
        <label for="password" >Contraseña</label>
        <input type="password" id="password" placeholder="Ingresa tu nueva contraseña" name="password" >
    </div>
    
    <input type="submit" value="Restablecer Contraseña" class="boton">

</form>

<div class="acciones">
    <a href="/">¿Ya tienes una cuenta? Inicia Sesión </a>
    <a href="/crear-cuenta">¿Aún no tienes cuenta? Crear una</a>
</div>