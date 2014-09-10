<div class="window-contain">
	<div class="windowhead hidden-phone">
		<a href="#!" class="exit"></a>
		<h2>Contact</h2>
	</div>
	
	<div class="window contact">
	
		<h3>Want to hire me?</h3>
		<div class="row">
			<div class="col10 offset1">

			<!--
			https://docs.angularjs.org/guide/forms
			http://scotch.io/tutorials/javascript/angularjs-form-validation
			http://www.ng-newsletter.com/posts/validations.html
			http://www.chaosm.net/blog/2014/05/21/angularjs-contact-form-with-bootstrap-and-phpmailer/
			http://www.freecontactform.com/email_form.php
			-->

			

				<!-- <form id="contactForm" name="contactform" ng-submit="processForm()" novalidate> -->
				<form ng-submit="submit(contactform)" name="contactform" method="POST" action="" role="form">
					<div class="form-item" ng-class="{ 'has-error' : contactform.name.$invalid && !contactform.name.$pristine }">
						<div class="item-left">
							<label for="name">Name</label>
							<input type="text" ng-model="formData.inputName" id="inputName" name="inputName" placeholder="Name*" minlength="5" maxlength="30" autocomplete="off" required />
							<!--<small ng-show="contactform.name.$invalid && !contactform.name.$pristine">This name is not valid</small>-->
						</div>
					</div>
					<div class="form-item" ng-class="{ 'has-error' : contactform.email.$invalid && !contactform.email.$pristine }">
						<div class="item-right">
							<label for="email">Email</label>
							<input type="email" ng-model="formData.inputEmail" id="inputEmail" name="inputEmail" placeholder="Email*" minlength="5" maxlength="35" autocomplete="off" required />
							<!--<small ng-show="contactform.email.$invalid && !contactform.email.$pristine">This email is not valid</small>-->
						</div>
					</div>
					<div class="form-item">
						<div class="item-left">
							<label for="company">Company</label>
							<input type="text" ng-model="formData.inputCompany" id="inputCompany" name="inputCompany" placeholder="Company" minlength="2" maxlength="35" autocomplete="off" />
						</div>
					</div>
					<div class="form-item">
						<div class="item-right">
							<label for="phone">Phone</label>
							<input type="text" ng-model="formData.inputPhone" id="inputPhone" name="inputPhone" placeholder="Phone Number" minlength="2" maxlength="20" autocomplete="off" />
						</div>
					</div>
					<div class="form-item message" ng-class="{ 'has-error' : contactform.message.$invalid && !contactform.message.$pristine }">
						<label for="message">Message</label>
						<textarea name="inputMessage" id="inputMessage" placeholder="Message*" ng-model="formData.inputMessage" ng-minlength="5" required></textarea>
						
					</div>
					<div class="submit">
						<button type="submit" ng-disabled="submitButtonDisabled">Submit</button>
					</div>

					<p ng-class="result" style="padding: 15px; margin: 0;">{{ resultMessage }}</p>

				</form>
			</div>
		</div>
		<div class="row contact-side">
			<div class="col5 offset1">
				<h4>Connect with me on:</h4>
				<div class="icons">
					<a class="social-icons" href="https://www.facebook.com/james.t.patton">
						<img src="images/social-facebook-outline.png" onmouseover="this.src='images/social-facebook.png'" onmouseout="this.src='images/social-facebook-outline.png'" />
					</a>
					<a class="social-icons" href="https://www.linkedin.com/profile/view?id=303249450&trk=nav_responsive_tab_profile_pic">
						<img src="images/social-linkedin-outline.png" onmouseover="this.src='images/social-linkedin.png'" onmouseout="this.src='images/social-linkedin-outline.png'" />
					</a>
					<a class="social-icons" href="https://github.com/jtpatton">
						<img src="images/social-github-outline.png" onmouseover="this.src='images/social-github.png'" onmouseout="this.src='images/social-github-outline.png'" />
					</a>
				</div>
			</div>
			<div class="col5">
				<h4>Contact Details</h4>
				Phone: (626)733-6030
				<br> Email: jamestylerpatton@gmail.com
			</div>
		</div>
	
	</div>
</div>