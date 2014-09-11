<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	if (empty($_POST['inputName']))
		$errors['inputName'] = 'Name is required.';

	if (empty($_POST['inputEmail']))
		$errors['inputEmail'] = 'Email is required.';

	if (empty($_POST['inputMessage']))
		$errors['inputMessage'] = 'Message is required.';

// return a response ===========================================================

	// response if there are errors
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		// if there are no errors, return a message
		$data['success'] = true;
		$data['message'] = 'Your message has been sent!';
	}

	// return all our data to an AJAX call
	echo json_encode($data);

// send email ==================================================================

	if(isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputMessage'])){
		$email_to = "jamestylerpatton@gmail.com";
		$email_subject = "Suck a D!"

		$send_name = $_POST['inputName'];
		$email_from = $_POST['inputEmail'];
		$company = $_POST['inputCompany'];
		$phone = $_POST['inputPhone'];
		$message = $_POST['inputMessage'];

		$email_message .= "Name: ".clean_string($send_name)."\n";
	    $email_message .= "Email From: ".clean_string($email_from)."\n";
	    $email_message .= "Company: ".clean_string($company)."\n";
	    $email_message .= "Phone: ".clean_string($phone)."\n";
	    $email_message .= "Message: ".clean_string($message)."\n";

	    $headers = 'From: '.$email_from."\r\n".
		'Reply-To: '.$email_from."\r\n" .
		'X-Mailer: PHP/' . phpversion();	
			 
		@mail($email_to, $email_subject, $email_message, $headers); 

	}