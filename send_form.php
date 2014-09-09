<?php

if(isset($_POST['email'])){
	$email_to = 'jamestylerpatton@gmail.com';
	$email_subject = 'Contact From Portfolio';

	function died($error){
		echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
	}

	if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }

    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $company = $_POST['company']; // not required
    $phone = $_POST['phone']; // not required
    $message = $_POST['message']; // required


    //Lets worry about validation later and maybe with Angular
    //$error_message = "";
    //$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Company: ".clean_string($company)."\n";
    $email_message .= "Phone: ".clean_string($phone)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";

    $headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);  

?>

Thanks!

<?php
}
?>