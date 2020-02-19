/*global console, $ */

$(function () {
	
	'use strict';
	
	// Navbar Link
	
	$('.navbar .lista li a').hover(function () {
		
		$(this).animate({
			
			borderBottom: '1px solid #ef4259'
			
		}, 500);
		
	});
	
	
	
	// Scroll top
	
	$('.header .navbar .lista a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top
			
		}, 1000);
		
	});
	
	$('.copyright .icon').click(function (event) {
		
		event.preventDefault();

		$('html, body').animate({

			scrollTop: 0

		}, 1000);
		
	});
	
	
	$(window).scroll(function () {
		
		
		if ($(window).scrollTop() >= 200) {
			
			$('.copyright .icon').fadeIn(500);
			
		} else {
			
			$('.copyright .icon').fadeOut(500);
			
		}
		
	});
	
	
	//  plaseholder in the form
	
	var spasAtt = '';
	
	$('.form input[placeholder]').focus(function () {
		
		spasAtt = $(this).attr('placeholder');
		
		
		$(this).attr('placeholder', '');
		
	}).blur(function () {
		
		$(this).attr('placeholder', spasAtt);
		
	});
	
	
});
