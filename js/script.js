
	$(document).ready(function () {

	  // when a button clicked has a class of btn, toggleClass changes the class to btn-clicked and the siblings of btn (.add-item) is displayed
	  $('button').click(function () {
	    if ($(this).hasClass('btn')) {
	      $(this).toggleClass('btn-clicked')
	      $(this).siblings().slideToggle()
	    }
	  })

  	// when the enter key is pressed on .add-items, the appended message displays the checkbox and the input valuefrom .add-items
	  $('.add-item').keypress(function (e) {
	    if (e.which == 13) {
	      $(this).parent().append('<li class="item-entered btn-content">' + '<span>' + $(this).val() + '</span>' + '<input type="checkbox" class="checkbox"></input></li>')
	      $(this).val('')
	    }
  	})


	 //close button to hide all contents inside button
	$('.close').click(function () {
		$('li').find('.btn-content').slideUp()
		$('.btn').removeClass('btn-clicked')
	})

	  // reset
	  $('.reset').click(function () {
	  	$('.item-entered').remove()
	  	$('.add-item').slideUp() 
	  	$('.btn').removeClass('btn-clicked')
	  })
})





		
	









