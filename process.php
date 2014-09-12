<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	
	$phoneRegex = "/^(\d[\s-]?)?[\(\[\s-]{0,2}?\d{3}[\)\]\s-]{0,2}?\d{3}[\s-]?\d{4}$/i";
	$nameRegex = "/^[a-zA-Z ]*$/";

	if (empty($_POST['inputName']) || !preg_match($nameRegex, ($_POST['inputName'])))
		$errors['inputName'] = 'Name is required.';

	if (empty($_POST['inputEmail']) || !filter_var(($_POST['inputEmail']), FILTER_VALIDATE_EMAIL))
		$errors['inputEmail'] = 'Valid email is required.';

	if (!empty($_POST['inputPhone']) && !preg_match($phoneRegex, ($_POST['inputPhone'])))
		$errors['inputPhone'] = 'Not a valid phone number.';

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

	

// send email ==================================================================


	if(isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputMessage'])){
		
		$admin_email = "jamestylerpatton@gmail.com";
		$subject = "Contact Form";
		
		$name = htmlspecialchars($_POST['inputName']);
		$email = htmlspecialchars($_POST['inputEmail']);
		$company = htmlspecialchars($_POST['inputCompany']);
		$phone = htmlspecialchars($_POST['inputPhone']);
		$comment = htmlspecialchars($_POST['inputMessage']);
		
		function clean_string($string) {
	      $bad = array("content-type","bcc:","to:","cc:","href");	 
	      return str_replace($bad,"",$string);
	    }
		
		$whole_message .= "Name: ". clean_string($name) . "\n";
		$whole_message .= "Email: ". clean_string($email) . "\n";
		$whole_message .= "Company: ". clean_string($company) . "\n";
		$whole_message .= "Phone: ". clean_string($phone) . "\n";
		$whole_message .= "Message: \n".clean_string($comment) . "\n";
		
		$headers = 'From: '.$email."\r\n".
		'Reply-To: '.$email."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		
		mail($admin_email, $subject, $whole_message, $headers);
		
	}else{
		$data['message'] = 'There are errors';
	}

	
	
	// return all our data to an AJAX call
	echo json_encode($data);