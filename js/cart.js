$(document).ready(function() {
	$('.add-item').hide();
	$('.item-entered').hide();

	$('.produce-btn').click(function() {
		$(this).css({"background-color": "#000", "color": "#fff"});
		$('#add-produce-item').slideToggle();
	});

	$('#add-produce-item').keypress(function(event) {
		if(event.which == 13) {
			$('.item-entered').show();
		}
	});

	$('.bakery-btn').click(function() {
			$(this).css({"background-color": "#000", "color": "#fff"});
			$('#add-bakery-item').slideToggle();
	});
	$('.meat-btn').click(function() {
			$(this).css({"background-color": "#000", "color": "#fff"});
			$('#add-meat-item').slideToggle();
	});
	$('.dairy-btn').click(function() {
			$(this).css({"background-color": "#000", "color": "#fff"});
			$('#add-dairy-item').slideToggle();
	});
	$('.pantry-btn').click(function() {
			$(this).css({"background-color": "#000", "color": "#fff"});
			$('#add-pantry-item').slideToggle();
	});

}); //document ready end


// change css back to white background and black text when button is closed

// return value in input ID beneath this input with a checkbox in .item-entered


// remove all text in input / clear



