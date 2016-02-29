
$(document).ready(function () {
$('.add-item').hide()
	// When a button with class btn is clicked, the class btn-clicked will be toggled to change the css of the button as well as display or hide the text input for the class add-item 
		$('button').click(function () {
	    	if ($(this).hasClass('btn')) {
	      			$(this).toggleClass('btn-clicked')
	      			$(this).siblings().slideToggle()
	    	}
	  	})
  	// When you hit enter on a class of add items it triggers an event as E. Then we check that it matches up to keycode 13 for enter. If the length of the value is equal to 0, the class error will be added changing the border color to red. Otherwise,  we append to the object of THIS parent with the value and then blank it out for the next input you will type. The class error will be removed if triggered from previous function
	 	$('.add-item').keypress(function (e) {
	 		if (e.which == 13) {
	 		  	if ($(this).val().length == 0) {
	 		  		$(this).addClass('error')
	 			}
	 			else  {
	      			$(this).parent().append('<li class="list-item btn-content">' + '<span>' + $(this).val() + '</span><input type="checkbox"></input></li>')
	      			$(this).val('')
	      			$(this).removeClass('error')
	    		}
	  		}
		})
	 //When the input checkbox is checked, we will add the class item-found-checked to the closest list item and append a button with the class delete. In addition, once the checkbox is checked, it will be removed and replaced with the delete button. If the add-item has class of error, this will be removed.
		$('#categories').on('change', 'input:checkbox',function () {
			var item = $(this).closest('li').find('span')
			if($(this).is(':checked')) {
				item.addClass('item-found-checked')
				$(this).closest('.list-item').append('<button class="delete">delete</button>')
				$(this).closest('input:checkbox').remove()
				$('.add-item').removeClass('error')
			}
		})
	// When you click the button with the class of delete, THIS parent will be removed. If the add-item has class of error, this will be removed.
		$('#categories').on('click','.delete', function(){
			$(this).parent().remove()
			$('.add-item').removeClass('error')
		})
	// When the close all button is clicked, the list with the class btn-content will slideup and btn-clicked class will be removed from the buttons to display the original css style of class btn. If the add-item has class of error, this will be removed.
		$('.close').click(function () {
			$('li').find('.btn-content').slideUp()
			$('.btn').removeClass('btn-clicked')
			$('.add-item').removeClass('error')
		})
	// When the reset button is clicked, all of the list items will be removed, the text input with class add-item will slideup and the btn-clicked class will be removed from the buttons to display the original css style of class btn. If the add-item has class of error, this will be removed.
	  	$('.reset').click(function () {
	  		$('.list-item').remove()
	  		$('.add-item').slideUp() 
	  		$('.btn').removeClass('btn-clicked')
	  		$('.add-item').removeClass('error')
	  	})
})





		










