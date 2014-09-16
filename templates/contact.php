<div class="window-contain">
	<div class="windowhead hidden-phone">
		<a href="#!" class="exit"></a>
		<h2>Contact</h2>
	</div>
	
	<div class="window contact">
	
		<h3>Send me a message</h3>
		<div class="row">
			<div class="col10 offset1">

				<div id="form_submit_message" ng-show="message">{{ message }}</div>

				<form name="contactform" ng-submit="processForm()" novalidate>
					
					<div class="form-item" ng-class="{ 'has-error' : errorName }">
						<div class="item-left">
							<label for="inputName">Name</label>
							<input type="text" ng-model="formData.inputName" name="inputName" placeholder="Name*" ng-minlength="3" maxlength="30" autocomplete="off" required />
							<small ng-show="errorName">{{ errorName }}</small>
						</div>
					</div>
					<div class="form-item" ng-class="{ 'has-error' : errorEmail }">
						<div class="item-right">
							<label for="inputEmail">Email</label>
							<input type="email" ng-model="formData.inputEmail" name="inputEmail" placeholder="Email*" ng-minlength="5" maxlength="35" autocomplete="off" required />
							<small ng-show="errorEmail">{{ errorEmail }}</small>
						</div>
					</div>
					<div class="form-item">
						<div class="item-left">
							<label for="inputCompany">Company</label>
							<input type="text" ng-model="formData.inputCompany" name="inputCompany" placeholder="Company" autocomplete="off" />
						</div>
					</div>
					<div class="form-item" ng-class="{ 'has-error' : errorPhone }">
						<div class="item-right">
							<label for="inputPhone">Phone</label>
							<input type="text" ng-model="formData.inputPhone" name="inputPhone" placeholder="Phone Number" autocomplete="off" />
							<small ng-show="errorPhone">{{ errorPhone }}</small>
						</div>
					</div>
					<div class="form-item message" ng-class="{ 'has-error' : errorMessage }">
						<label for="inputMessage">Message</label>
						<textarea name="inputMessage" id="inputMessage" placeholder="Message*" ng-model="formData.inputMessage" required></textarea>
						<small ng-show="errorMessage">{{ errorMessage }}</small>
					</div>
					<div class="submit">
						<button type="submit">Submit</button>
					</div>

				</form>
			</div>
		</div>
		<div class="row contact-side">
			<div class="col5 offset1">
				<h4>Connect with me on:</h4>
				<div class="icons">
					<a class="social-icons facebook" href="https://www.facebook.com/james.t.patton">
						<img src="images/social-facebook-outline.png" alt="Facebook" />
					</a>
					<a class="social-icons linkedin" href="https://www.linkedin.com/profile/view?id=303249450&trk=nav_responsive_tab_profile_pic">
						<img src="images/social-linkedin-outline.png" alt="LinkedIn" />
					</a>
					<a class="social-icons github" href="https://github.com/jtpatton">
						<img src="images/social-github-outline.png" alt="Github" />
					</a>
				</div>
			</div>
			<div class="col5">
				<h4>Or email me...</h4>
				<a class="social-icons email" href="mailto:jamestylerpatton@gmail.com">
					<div class="email-img-contain">
					<img src="images/ios7-email-outline.png" alt="Email" />
					</div>
					jamestylerpatton@gmail.com
				</a>
			</div>
		</div>
	
	</div>
</div>