$('body').on('click', '.navigation a[href*="#"]', function(e) {
	// e.preventDefault();
	var fixed_offset = 30;

	$('html,body').stop().animate({
			scrollTop: $(this.hash).offset().top - fixed_offset
	}, 300);
});