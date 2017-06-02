$(document).ready(function () {
"use strict";

  // When a button is clicked
  $("button").click(function () {
    // and has a class of btn
    if ($(this).hasClass("btn")) {
      // toggle class btn to class btn-clicked which will change the style of the button
      $(this).toggleClass("btn-clicked");
      // then slide toggle to either display the user input with class add-item if hidden (or hide if displayed)
      $(this).siblings().slideToggle();
    }
  });

// When enter key is pressed on the input field with class add items, trigger the event(e)
  $(".add-item").keypress(function (e) {
    // a variable that holds the user's input
    var listItem = $(this).val();
    // if the keypress is strictly equal to the enter key
    if (e.which === 13) {
      // and if there is a user input (listItem)
      if (listItem) {
        // append the listItem to the input field (the parent)
        $(this).parent().append("<li class='list-item btn-content'>" + "<span>" + listItem + "</span><input type='checkbox'></input></li>");
        // then clear out the input field
        $(this).val("");
        // and remove the class emptyField-error if it was previously triggered due to the empty value of listItem
        $(this).removeClass("emptyField-error");
      } else {
        // otherewise, if the length of the value is equal to 0, add class emptyField-error to this listItem, which adds a red border
        $(this).addClass("emptyField-error");
      }
    }
  });

// When there is a change to a checkbox in the unordered list with an id of categories
 $("#categories").on("change", "input:checkbox", function () {
  // a variable called item that finds the closest list with a span tag holding the listItem
   var item = $(this).closest("li").find("span");
   // and if a checkbox is checked
   if ($(this).is(":checked")) {
     //add the class item-found-checked to the closest list item
     $(item).addClass("item-found-checked");
     //append a button with the class delete
     $(this).closest(".list-item").append("<button class='delete'>delete</button>");
     // and remove the checkbox
     $(this).closest("input:checkbox").remove();
     //also remove the class emptyField-error from the class add-item if previously triggered due to an empty value
     $(".add-item").removeClass("emptyField-error");
   }
 });


 // When you click the button with the class of delete
 $("#categories").on("click", ".delete", function () {
   // remove this parent (user input)
   $(this).parent().remove();
   // remove class emptyField-error from the class add-item if it was previously triggered due to an empty value
   $(".add-item").removeClass("emptyField-error");
 });


 // When the close all button is clicked
 $(".close").click(function () {
  // the list with the class btn-content will slideup to hide all of the list
   $("li").find(".btn-content").slideUp();
   // remove class btn-clicked from the buttons to display the original css style of buttons with class btn
   $(".btn").removeClass("btn-clicked");
   // remove class emptyField-error from the class add-item if it was previously triggered due to an empty value
   $(".add-item").removeClass("emptyField-error");
 });


 // When the reset button is clicked
 $(".reset").click(function () {
   // remove all of the li's with class list-item
   $(".list-item").remove();
   // slide up all of the input field with the class add-item
   $(".add-item").slideUp();
   //  remove the class btn-clicked from the buttons to display the original css style of the button with class btn
   $(".btn").removeClass("btn-clicked");
   // remove class emptyField-error from the class add-item if it was previously triggered due to an empty value
   $(".add-item").removeClass("emptyField-error");
 });

});







