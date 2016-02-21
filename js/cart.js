
	
$(document).ready(function() {

	$('.add-item').hide();
	$('.item-entered').hide();


	
// CSS for buttons when clicked/unclicked
	$('button').click(function() {
		if($(this).hasClass('btn-unclicked')) { 
			$(this).removeClass('btn-unclicked').addClass('btn-clicked');
		}
		else if ($(this).hasClass('btn-clicked')) {
	    	$(this).removeClass('btn-clicked').addClass('btn-unclicked');
	    }
		else {
			$(this).addClass('btn-clicked');
		}
	});

 











//slidetoggle of Add Items
	$('.produce-btn').click(function() {
		$('#add-produce-item').slideToggle();
	});

	$('.frozen-btn').click(function() {
			$('#add-frozen-item').slideToggle();
	});
	$('.meat-btn').click(function() {
			$('#add-meat-item').slideToggle();
	});
	$('.dairy-btn').click(function() {
			$('#add-dairy-item').slideToggle();
	});
	$('.pantry-btn').click(function() {
			$('#add-pantry-item').slideToggle();
	});


// value of input and checkbox displayed
	$('#add-produce-item').keypress(function(event) {
		if(event.which == 13) {
			var newItem = $(this).val();
			$('.item-entered').show();
			$('p').text(newItem);
		}
	});

}); //document ready end



   

// slide toggle for item entered

// remove all text in input / clear






