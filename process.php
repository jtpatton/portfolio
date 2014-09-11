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

	

// send email ==================================================================


	if(isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputMessage'])){
		
		$admin_email = "jamestylerpatton@gmail.com";
		$subject = "Contact Form";
		
		$name = $_POST['inputName'];
		$email = $_POST['inputEmail'];
		$company = $_POST['inputCompany'];
		$phone = $_POST['inputPhone'];
		$comment = $_POST['inputMessage'];
		
		function clean_string($string) {
	      $bad = array("content-type","bcc:","to:","cc:","href");	 
	      return str_replace($bad,"",$string);
	    }
		
		$whole_message .= "Name: ". clean_string($name) . "\n";
		$whole_message .= "Email: ". clean_string($email) . "\n";
		$whole_message .= "Company: ". clean_string($company) . "\n";
		$whole_message .= "Phone: ". clean_string($phone) . "\n";
		$whole_message .= "Message: ".clean_string($comment) . "\n";
		
		$headers = 'From: '.$email."\r\n".
		'Reply-To: '.$email."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		
		mail($admin_email, $subject, $whole_message, $headers);
		
	}else{
		$data['message'] = 'There are errors';
	}

	
	
	// return all our data to an AJAX call
	echo json_encode($data);