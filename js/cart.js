
	
$(document).ready(function() {

	$('.add-item').hide();
	$('.item-entered').hide();


// button CSS style change when clicked
	function buttonStyle() {
	    var button = $('.produce-btn');
	    if (button.hasClass('btn-clicked')) {
	        button.removeClass('btn-clicked').addClass('btn-unclicked');
	    }
	    else if (button.hasClass('btn-unclicked')) {
	        button.removeClass('btn-unclicked').addClass('btn-clicked');
	    }
	      else {
	        button.addClass('btn-unclicked');
	    }
	};

	 $('.produce-btn').click(function() {
        buttonStyle();
    });


// slidetoggle of Add Items
	$('.produce-btn').click(function() {
		$('#add-produce-item').slideToggle();
	});

	$('.bakery-btn').click(function() {
			// $(this).removeClass('btn-unclicked');
			// $(this).addClass('btn-clicked');
			$('#add-bakery-item').slideToggle();
	});
	$('.meat-btn').click(function() {
			// $(this).removeClass('btn-unclicked');
			// $(this).addClass('btn-clicked');
			$('#add-meat-item').slideToggle();
	});
	$('.dairy-btn').click(function() {
			// $(this).removeClass('btn-unclicked');
			// $(this).addClass('btn-clicked');
			$('#add-dairy-item').slideToggle();
	});
	$('.pantry-btn').click(function() {
			// $(this).removeClass('btn-unclicked');
			// $(this).addClass('btn-clicked');
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



   




// change css back to white background and black text when button is closed

// slide toggle for item entered

// remove all text in input / clear

// value in item entered inside <p> needs to be inside of <input> (float left?)



