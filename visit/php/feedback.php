<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$feedback = new PHPMailer;
$feedback->CharSet = 'utf-8';

$name1 = $_POST['userName_fb'];
$email1 = $_POST['userEmail_fb'];
$msg1 =  htmlspecialchars($_POST['userMsg_fb']);

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$feedback->isSMTP();                                      // Set mailer to use SMTP
$feedback->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$feedback->SMTPAuth = true;                               // Enable SMTP authentication
$feedback->Username = 'mashoresh@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$feedback->Password = 'zKegaVxe4cm5wrdqQyUN'; // Ваш пароль от почты с которой будут отправляться письма
$feedback->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$feedback->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$feedback->setFrom('mashoresh@mail.ru'); // от кого будет уходить письмо?
$feedback->addAddress('m.oreshkina99@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$feedback->isHTML(true);                                  // Set email format to HTML

$feedback->Subject = 'Заявка с тестового сайта';
$feedback->Body    = '' .$name1 . ' оставил заявку.' .'<br>Обратная связь: ' .$email1 .'<br>Комментарий к заказу: ' .$msg1;
$feedback->AltBody = '';

if(!$feedback->send()) {
    return false;
} else {
    return true;
}
?>
