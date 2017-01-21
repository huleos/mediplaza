<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$myemail = 'cielitolindo@mediplaza.info';
$bccmail = '';

$name = $_POST['_name']; 
$email_address = $_POST['_email'];
$phone = $_POST['_phone'];
$message = $_POST['_message'];
$origin = $_POST['_origin'];
$utm = $_POST['field_utm'];
$fieldHidden = isset($_POST['fk']) ? $_POST['fk'] : null;

if($name && $email_address && $message)
{
	$to = $myemail; 
	$email_subject = "$origin";
	$email_body = "You have received a new message of MediPlaza".
	" Here are the details:\n
	Name: $name \n
	Email: $email_address \n
	Phone: $phone \n
	Message: \n $message \n
	UTM: $utm";
	
	$headers = "From: $name <$email_address>\n";
	$headers .= "Reply-To: $email_address\n";
	$headers .= "Bcc: " . $bccmail;
	if(!$fieldHidden)
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: /thanks/');
} 
?>