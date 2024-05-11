<?php

namespace Model;

use Model\ActiveRecord;

class Usuario extends ActiveRecord{
    protected static $tabla='usuarios';
    protected static $columnasDB=['id','nombre','apellido','email','password','telefono','admin','confirmado','token'];

    public $id;
    public $nombre;
    public $apellido;
    public $email;
    public $password;
    public $telefono;
    public $admin;
    public $confirmado;
    public $token;



    public function __construct($args=[]){
        $this->id=$args['id'] ?? null;
        $this->nombre=$args['nombre'] ?? '';
        $this->apellido=$args['apellido'] ?? '';
        $this->email=$args['email'] ?? '';
        $this->password=$args['password'] ?? '';
        $this->telefono=$args['telefono'] ?? '';
        $this->admin=$args['admin'] ?? 0;
        $this->confirmado=$args['confirmado'] ?? 0;
        $this->token=$args['token'] ?? '';
    }

    public function validarNuevaCuenta(){
        if(!$this->nombre || !$this->apellido){
            self::$alertas['error'][]='El nombre y apellido son obligatorios';
        }
        if(!$this->telefono || !$this->email){
            self::$alertas['error'][]="El E-mail y telefono son obligatorios";
        }
        if(!$this->password){
            self::$alertas['error'][]="La contraseña es obligatoria";
        }
        if(strlen($this->telefono)<10 && $this->telefono){
            self::$alertas['error'][]="El teléfono debe ser válido";
        }
        if(strlen($this->password)<8 && $this->password){
            self::$alertas['error'][]="La contraseña debe contener al menos 8 caracteres";
        }
        return self::$alertas;
        
    }


    public function existeUsuario(){
        $query=" SELECT * FROM " . self::$tabla . " WHERE email= '" . $this->email. "' LIMIT 1";
        $resultado= self::$db->query($query);
        
        if($resultado->num_rows){
            self::$alertas['error'][]="El usuario ya esta registrado";
        }
        return $resultado;
    }
    public function validarEmail(){
        if(!$this->email){
            self::$alertas['error'][]='El email es obligatorio';

        }
        return self::$alertas;
    }
    public function validarPassword(){
        if(!$this->password){
            self::$alertas['error'][]="La contraseña no puede estar vacía";
        }
        if(strlen($this->password)<8){
            self::$alertas['error'][]="La contraseña debe tener almenos 8 carácteres";
        }

        return self::$alertas;
    }

    public function hashPassword(){
        $this->password= password_hash($this->password, PASSWORD_BCRYPT);
        
    }

    public function crearToken(){
        $this->token=uniqid();
    }

    public function validarLogin(){
        if(!$this->email){
            self::$alertas['error'][]="El Email es obligatorio";
        }
        if(!$this->password){
            self::$alertas['error'][]="la contraseña es obligatoria";
        }

        return self::$alertas;
    }

   public function comprobarPasswordAndVerificado($password) {
        $resultado = password_verify($password, $this->password);
        
        if(!$resultado || !$this->confirmado) {
            self::$alertas['error'][] = 'Password Incorrecto o tu cuenta no ha sido confirmada';
        } else {
            return true;
        }
    }
    
}