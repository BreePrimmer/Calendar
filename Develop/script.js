// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // this function gets the div ID of the save button that was clicked.
  $(".saveBtn").click(function() {
    var divId = $(this).parent().attr('id')
    console.log(divId)

    var textBlock = $(this).parent()
    console.log(textBlock)

    var textBlockId = textBlock.attr('id')
    console.log(textBlockId)

    var userText = textBlock.children(".description")

    if (textBlockId == divId) {
      var enteredText = userText.val()
      console.log(enteredText)
  
      localStorage.setItem(divId, enteredText)
    }
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentHour24 = dayjs().format("H")
  console.log(currentHour24)

  var currentHour12 = dayjs().format('h')
  console.log(currentHour12)



  var hourDiv = document.getElementById(currentHour12)
  console.log(hourDiv)
  
  hourDiv.classList.add("present")


  for (var i = 1; i < 6; i++) {
    var hourDivId = document.getElementById(i)
    console.log(hourDivId)
    divHour = hourDivId.getAttribute('id')
    console.log(divHour)
    Number(divHour) + 12

    if (divHour > currentHour24) {
      hourDivId.classList.add("future")
    } else if (divHour < currentHour24) {
      hourDivId.classList.add('past')
    }
  }

  for (var i = 9; i < 13; i++) {
    var hourDivId = document.getElementById(i)
    console.log(hourDivId)
    divHour = hourDivId.getAttribute('id')
    console.log(divHour)
    if (divHour < currentHour24) {
      hourDivId.classList.add('past')
    } else if (divHour > currentHour24) {
      hourDivId.classList.add('future')
    }
}


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  for (var i = 0; i < localStorage.length; i++) {
    var userInputId = localStorage.key(i)
    if (!isNaN(userInputId) && userInputId > 0 && userInputId < 13) {
    console.log(userInputId)

    var userValue = localStorage.getItem(userInputId)
    console.log(userValue)

    var saveDestination = document.getElementById(userInputId)
    var saveChild = saveDestination.children[1]
    saveChild.textContent = userValue
    } 
  }

  // TODO: Add code to display the current date in the header of the page.
    // this uses dayjs to get the current date and time.
    var now = dayjs()
    var currentDate = now.format("MMMM D, dddd, YYYY" + " hh:mm")
    console.log(currentDate)

  $("#currentDay").text(currentDate)
});
