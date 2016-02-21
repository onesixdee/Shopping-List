
	
$(document).ready(function() {
	$('.add-item').hide();


	
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

 

//slide toggle add item
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


// add items with checkbox
	$('.add-item').keypress(function(e) {
		if(e.which == 13) {
			$('.item-entered').append('<li><input type=\"checkbox\">' + $(this).val() + '</input></li>');
		}
	});

}); //document ready end




// slide toggle for item entered

// remove all text in input / clear






