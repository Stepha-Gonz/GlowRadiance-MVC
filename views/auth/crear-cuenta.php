<h1 class="nombre-pagina">Crear una cuenta</h1>
<p class="descripcion-pagina">Inserta tus datos para crear una cuenta</p>
<?php include_once __DIR__ . '/../templates/alertas.php'; ?>
<form action="/crear-cuenta" method="POST" class="formulario">
    <div class="campo">
        <label for="nombre" >Nombre</label>
        <input type="text" id="nombre" placeholder="Ingresa tu nombre" name="nombre" value="<?php echo san($usuario->nombre); ?>">
    </div>
    <div class="campo">
        <label for="apellido" >Apellido</label>
        <input type="text" id="apellido" placeholder="Ingresa tu apellido" name="apellido" value="<?php echo san($usuario->apellido); ?>">
    </div>
    <div class="campo">
        <label for="telefono" >Teléfono</label>
        <input type="number" id="telefono" placeholder="Ingresa tu telefono" name="telefono" value="<?php echo san($usuario->telefono); ?>">
    </div>
    <div class="campo">
        <label for="email" >E-mail</label>
        <input type="email" id="email" placeholder="Ingresa tu email" name="email" value="<?php echo san($usuario->email); ?>">
    </div>
    <div class="campo">
        <label for="password" >Password</label>
        <input type="password" id="password" placeholder="Ingresa tu contraseña" name="password">
    </div>
    <input type="submit" value="Crear Cuenta" class="boton">
</form>
<div class="acciones">
    <a href="/">¿Ya tienes una cuenta? Inicia Sesión </a>
    <a href="/olvide">¿Olvidaste tu contraseña? </a>
</div>