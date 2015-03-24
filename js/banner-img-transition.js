/* Javascript timing tutorial: http://www.w3schools.com/js/js_timing.asp */
/* Javascript Banner Transition Attempt */
var bannerTransition = setInterval(function() {imgAttribute()}, 5000);
var bannerTransition = setInterval(function() {this()}, 5000);
var numberRandomiser;
var imgNumber = numberRandomiser;

function imgAttribute() {
	var numberRandomiser = Math.floor((Math.random() * 4) + 1);
	var imgSource = "img/banner" + imgNumber + ".jpg";
	document.getElementById("bannerImg").src = imgSource;
	document.getElementById("bannerImg").alt = "This image is called " + imgSource;
}

/* jQuery Banner Transition Attempt */
/* Source: Brad Christie: http://stackoverflow.com/questions/4857338/how-to-add-fading-or-image-transition-effect-using-jquery. Accessed: 6 March 2015; */
var img = 0;
var imgEnum = [1,2,3,4];
$('img').attr('src',imgEnum[0]);

$('#bannerImg').fadeOut('slow',function(){
	$(this).attr('src', imgSource).fadeIn('slow');
});