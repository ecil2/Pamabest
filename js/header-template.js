document.getElementById("outerHeader").write (

	'
				<header id="innerHeader">
					<img class="header-logo" src="img/headerLogo.png" alt="Pamabest Logo" height="1175" width="2332">
					<div class="account form-containers">
						<form action="login.php" method="POST">
							<label for="login-user">Login</label>
							<input type="text" id="login-user" placeholder="Username" required>
							<!-- This Password field will be hidden until the user field is active. Use CSS to hide -->
							<input type="password" id="login-pass" placeholder="Password" autocomplete="off" required>
							<input type="submit" value="" class="genericon genericon-next">
						</form>
						<!-- The below form will send a variable to the server (using PHP) and load the full sign up page where the server will return the variable entered before... Well, thats what WOULD happen... -->
						<form action="quick-sign-up.php" method="POST">
							<label for="sign-up-user">Sign Up</label>
							<input type="text" id="sign-up-user" placeholder="Username" required>
							<input type="submit" value="S">
						</form>
					</div>
					<div class="search form-containers">
						<form action="search.php" method="GET">
							<!-- Icon to be set for the :before pseudo of the label element -->
							<label for="search" class="genericon genericon-search"></label>
							<input type="search" id="search" placeholder="John Doe">
						</form>
					</div>
					<nav>
						<ul>
							<li><a href="Paris-homepage.html">Paris</a></li>
							<li><a href="Madrid-homepage.html">Madrid</a></li>
							<li><a href="Berlin-homepage.html">Berlin</a></li>
							<li><a href="Stockholm-homepage.html">Stockholm</a></li>
							<li><a href="Tickets.html">Tickets</a></li>
							<li><a href="Contact.html">Contact</a></li>
						</ul>
					</nav>
				</header>'

)