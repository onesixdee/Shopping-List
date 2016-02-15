$(document).ready(function() {
	$('.add-items').hide();


//Toggle list on click of Produce button
	$('.categories').on('click', '.produce-btn', function() {
		$('.produce-btn').css('background-color', 'black').css('color', 'white');
		$('.add-items').slideToggle();

	});
}); //document ready

	$('.add-items').on('click', function() {
		$('.add-items').after('<li><button>add item</button></li>');

})