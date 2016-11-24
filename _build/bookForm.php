<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$myemail = 'cielitolindo@mediplaza.info';
$bccmail = 'creativo@686studio.com';

$check = $_POST['_check_in']; //
$out = $_POST['_check_out']; //
$party = $_POST['_party'];
$room = $_POST['_room'];
$name = $_POST['_name']; //
$email = $_POST['_email']; //
$phone = $_POST['_phone']; //
$origin = $_POST['_origin'];
$utm = $_POST['field_utm'];
$fieldHidden = isset($_POST['fk']) ? $_POST['fk'] : null;

if($check && $out && $party && $room && $name && $email && $phone)
{
	$to = $myemail; 
	$email_subject = "$origin";
	$email_body = "You have received a new booking from Cielito Lindo".
	" Here are the details:\n
	Name: $name \n
	Email: $email \n
	Phone: $phone \n
	Check in: $check \n
	Check out: $out \n
	Party: $party \n
	Room: $room \n
	UTM: $utm";
	
	$headers = "From: $name <$email>\n";
	$headers .= "Reply-To: $email\n";
	$headers .= "Bcc: " . $bccmail;
	if(!$fieldHidden)
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: /thanks/');
} 
?>