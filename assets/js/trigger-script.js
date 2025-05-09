
$(".dark").on('click', function (e) {
	$(".body").addClass("is__dark")
	$(".light").removeClass("is_active")
	$(".dark").addClass("is_active")
	document.getElementById("logo_js").src = "assets/img/logos/Logo_white.html";
	document.getElementById("logo_js_f").src = "assets/img/logos/Logo_white.html";

});
$(".light").on('click', function (e) {
	$(".body").removeClass("is__dark")
	$(".light").addClass("is_active")
	$(".dark").removeClass("is_active")
	document.getElementById("logo_js").src = "assets/img/logos/Logo.html";
	document.getElementById("logo_js_f").src = "assets/img/logos/Logo.html";
});

// Scroll Animation
(function () {

	gsap.registerPlugin(ScrollTrigger);
	gsap.to(".creators_anim1", {
		x: 500,
		duration: 3,
		scrollTrigger: {
			trigger: ".dribbble_svg",
			scrub: true
		}
	});

	gsap.to(".creators_anim2", {
		x: -500,
		duration: 3,
		scrollTrigger: {
			trigger: ".dribbble_svg",
			scrub: true
		}
	});
	gsap.to(".creators_anim3", {
		x: 500,
		duration: 3,
		scrollTrigger: {
			trigger: ".dribbble_svg",
			scrub: true
		}
	});


}());
