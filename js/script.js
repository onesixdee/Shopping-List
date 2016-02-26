
$(document).ready(function () {

	// click category buttons and toggle input for add items
		$('button').click(function () {
	    	if ($(this).hasClass('btn')) {
	      			$(this).toggleClass('btn-clicked')
	      			$(this).siblings().slideToggle()
	    	}
	  	})


  	// use enter to add items
	 	$('.add-item').keypress(function (e) {
	    	if (e.which == 13) {
	      		$(this).parent().append('<li class="item-entered btn-content">' + '<span>' + $(this).val() + '</span><input type="checkbox"></input></li>')
	      		$(this).val('')
	    	}
		})


	 //check items off list
		$('#categories').on('change', 'input:checkbox',function () {
			var item = $(this).closest('li').find('span')
			if($(this).is(':checked')) {
				item.addClass('item-found')
				$(this).closest('.item-entered').append('<button class="delete">delete</button>')
				$(this).closest('input:checkbox').remove()
			}
			else {
				item.removeClass('item-found')
			}
		})

	// delete items
		$('#categories').on('click','.delete', function(){
			$(this).parent().remove()
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





		










