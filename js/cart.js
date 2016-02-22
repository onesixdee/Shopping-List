
	$(document).ready(function () {

	  // when a button clicked has a class of btn, toggleClass changes the class to btn-clicked and the siblings of btn (.add-item) is displayed
	  $('button').click(function () {
	    if ($(this).hasClass('btn')) {
	      $(this).toggleClass('btn-clicked');
	      $(this).siblings().slideToggle();
	    };
	  });

  	// when the enter key is pressed on .add-items, the appended message displays the checkbox and the input valuefrom .add-items
	  $('.add-item').keypress(function (e) {
	    if (e.which == 13) {
	      $(this).parent().parent().append('<li class="item-entered"><input type="checkbox" class="checkbox">' + $(this).val() + '</input></li>');
	      $(this).val('');
	    };
  	});
});

	









