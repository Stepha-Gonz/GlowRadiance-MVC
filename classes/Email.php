<?php
namespace Classes;

use PHPMailer\PHPMailer\PHPMailer;

class Email{
    public $email;
    public $nombre;
    public $token;

    public function __construct($email, $nombre, $token){
        $this->email=$email;
        $this->nombre=$nombre;
        $this->token=$token;
    }

    public function enviarConfirmacion(){
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = $_ENV['EMAIL_HOST'];
        $mail->SMTPAuth = true;
        $mail->Port = $_ENV['EMAIL_PORT'];
        $mail->Username = $_ENV['EMAIL_USER'];
        $mail->Password = $_ENV['EMAIL_PASS'];

        $mail->setFrom('appsalon@salon.com');
        $mail->addAddress('appsalon@salon.net', 'Appsalon.com');     //Add a recipient
        $mail->Subject = 'Confirma Tu cuenta';
        $mail->isHTML(true);
        $mail->CharSet='UTF-8';
        $contenido="<html>";
        $contenido.="<p><strong>Hola ". $this->nombre ."</strong> Has Creado tu cuenta en App Salon, confirmala presionando el siguiente enlace</p>"  ;
        $contenido.="<p>Presiona aqui: <a href='" . $_ENV['APP_URL'] . "/confirmar-cuenta?token=" . $this->token . " '>Confirma Tu cuenta</a> </p>";
        $contenido.= "<p>Si tu no realizaste el proceso de crear la cuenta en App Salon puedes ignorar este mensaje</p>";
        $contenido.="</html>";

        $mail->Body=$contenido;
        $mail->send();
    }

    public function enviarInstrucciones(){
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = $_ENV['EMAIL_HOST'];
        $mail->SMTPAuth = true;
        $mail->Port = $_ENV['EMAIL_PORT'];
        $mail->Username = $_ENV['EMAIL_USER'];
        $mail->Password = $_ENV['EMAIL_PASS'];

        $mail->setFrom('appsalon@salon.com');
        $mail->addAddress('appsalon@salon.net', 'Appsalon.com');     //Add a recipient
        $mail->Subject = 'Restablece tu contraseña';
        $mail->isHTML(true);
        $mail->CharSet='UTF-8';
        $contenido="<html>";
        $contenido.="<p><strong>Hola ". $this->nombre ."</strong> Has solicitado restablecer tu contraseña. Restablecela presionando el siguiente enlace </p>"  ;
        $contenido.="<p>Presiona aqui: <a href='" . $_ENV['APP_URL'] . "/recuperar?token=" . $this->token . " '>Restablece tu contraseña </a> </p>";
        $contenido.= "<p>Si tu no pediste restablecer tu contraseña en App Salon puedes ignorar este mensaje</p>";
        $contenido.="</html>";

        $mail->Body=$contenido;
        $mail->send();
    }

}