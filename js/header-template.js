document.write (

	'
				<header id="innerHeader">
					<form action="login.php" method="POST">
						<label for="login-user">Login</label>
						<input type="text" id="login-user" placeholder="Username" required>
						<!-- This Password field will be hidden until the user field is active. Use CSS to hide -->
						<input type="password" id="login-pass" placeholder="Password" autocomplete="off" required>
					</form>
					<!-- The below form will send a variable to the server (using PHP) and load the full sign up page where the server will return the variable entered before... Well, thats what WOULD happen... -->
					<form action="quick-sign-up.php" method="POST">
						<label for="sign-up-user">Sign Up</label>
						<input type="text" id="sign-up-user" placeholder="Username" required>
					</form>
					<nav>
						<ul>
							<li>Hi</li>
							<li>Madrid</li>
							<li>Berlin</li>
							<li>Hi</li>
						</ul>
					</nav>
				</header>'

)