$(function() {
	$(window).scrollTop(0);
	
	$(".toggle-mnu").click(function() {
		if (($(window).width()) < 810) {
			$(this).toggleClass("on");
			$(".menu").slideToggle();
		};
		return false;
	});
	  
	$('.menu a').on("click", function() {
		if (($(window).width()) < 810) {
			$('.toggle-mnu').toggleClass('on');
			$(".menu").slideToggle();
		};
	});

	$(".menu").on("click", "a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.latest-works .' + get_id);

		$('.work').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#all').click(function() {
		$('.work').show(500);
	});
});