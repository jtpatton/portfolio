<div class="window-contain">
	<div class="windowhead hidden-phone">
		<a href="#!" class="exit"></a>
		<h2>Contact</h2>
	</div>
	
	<div class="window contact">
	
		<h3>Want to hire me?</h3>
		<div class="row">
			<div class="col8">

			<!--
			https://docs.angularjs.org/guide/forms
			http://scotch.io/tutorials/javascript/angularjs-form-validation
			http://www.ng-newsletter.com/posts/validations.html
			http://www.chaosm.net/blog/2014/05/21/angularjs-contact-form-with-bootstrap-and-phpmailer/
			http://www.freecontactform.com/email_form.php
			-->

				<form name="contactform" method="post" action="send_form.php">
					<div class="form-item">
						<div class="item-left">
							<label for="name">Name</label>
							<input type="text" name="name" autocomplete="off" placeholder="Name*" />
						</div>
					</div>
					<div class="form-item">
						<div class="item-right">
							<label for="email">Email</label>
							<input type="text" name="email" autocomplete="off" placeholder="Email*" />
						</div>
					</div>
					<div class="form-item">
						<div class="item-left">
							<label for="company">Company</label>
							<input type="text" name="company" placeholder="Company" />
						</div>
					</div>
					<div class="form-item">
						<div class="item-right">
							<label for="phone">Phone</label>
							<input type="text" name="phone" placeholder="Phone" />
						</div>
					</div>
					<div class="form-item message">
						<label for="message">Message</label>
						<textarea name="message" placeholder="Message*"></textarea>
					</div>
					<div class="submit">
						<input type="submit" value="submit">
					</div>
				</form>
			</div>
			<div class="col3 offset1">
				<div class="contact-side">
					<h4>connect with me on:</h4>
					<div class="icons">
						<a class="social-icons" href="https://www.facebook.com/james.t.patton"><img src="images/social-facebook-outline.png" onmouseover="this.src='images/social-facebook.png'" onmouseout="this.src='images/social-facebook-outline.png'" /></a>
						<a class="social-icons" href="https://www.linkedin.com/profile/view?id=303249450&trk=nav_responsive_tab_profile_pic"><img src="images/social-linkedin-outline.png" onmouseover="this.src='images/social-linkedin.png'" onmouseout="this.src='images/social-linkedin-outline.png'" /></a>
						<a class="social-icons" href="https://github.com/jtpatton"><img src="images/social-github-outline.png" onmouseover="this.src='images/social-github.png'" onmouseout="this.src='images/social-github-outline.png'" /></a>
					</div>

					<h4>...or call me</h4>
					(626)733-6030
				</div>
			</div>
		</div>
	
	</div>
</div>