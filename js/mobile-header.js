function showMenu() {
	var nav = document.getElementById("nav");
	var showButton = document.getElementById("show-menu");
	var hideButton = document.getElementById("hide-menu");
	nav.style.transition = "all 0.5s";
	nav.style.opacity = "1.0";
	nav.style.height = "auto";
	$("span#show-menu").hide(0, function() {
		$("span#hide-menu").show();
	});
};
function hideMenu() {
	nav.style.transition = "all 0.5s";
	nav.style.opacity = "0.0";
	nav.style.height = "0";
	$("span#hide-menu").hide(0, function() {
		$("span#show-menu").show();
	});
};
function showLogin() {
	var login = document.getElementById("login-casing");
	login.style.transition = "all 0.5s";
	login.style.opacity = "1.0";
	login.style.height = "auto";
	$("span#show-login").hide(0, function() {
		$("span#hide-login").show();
	});
};
function hideLogin() {
	var login = document.getElementById("login-casing");
	login.style.transition = "all 0.5s";
	login.style.opacity = "0.0";
	login.style.height = "0";
	$("span#hide-login").hide(0, function() {
		$("span#show-login").show();
	});
};
function showSignUp() {
	var signUp = document.getElementById("sign-up");
	signUp.style.transition = "all 0.5s";
	signUp.style.opacity = "1.0";
	signUp.style.height = "auto";
	$("span#show-sign-up").hide(0, function() {
		$("span#hide-sign-up").show();
	});
};
function hideSignUp() {
	var signUp = document.getElementById("sign-up");
	signUp.style.transition = "all 0.5s";
	signUp.style.opacity = "0.0";
	signUp.style.height = "0";
	$("span#hide-sign-up").hide(0, function() {
		$("span#show-sign-up").show();
	});
};