// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // this hides the "saved!" text until the save button is clicked.
  $("#save-text").addClass('hide')

  // this function gets the div ID of the save button that was clicked. Then it grabs any user input
  // that was entered and saves it to local storage.
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
      // removes the hide class from the "saved!" text.
      $("#save-text").removeClass('hide')

    }
  })

  // gets the current hour in 24-hour foramt.
  var currentHour24 = dayjs().format("H")
  console.log(currentHour24)

  // gets the current hour in 12-hour format
  var currentHour12 = dayjs().format('h')
  console.log(currentHour12)

  // gets the div of the current hour and sets the class to "present"
  var hourDiv = document.getElementById(currentHour12)
  console.log(hourDiv)

  hourDiv.classList.add("present")

  // for hours 1-6, this code gets the div Id of these hours, and then adds 12 to that number/id to convert it to
  // 24-hour time. Then, it compares this variable with the current hour, to see if it is
  // greater than or less than the current hour to apply the correct class.
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

  // for hours 9-12, this code gets the div Id of these hours, then it compares this variable with the current hour, to see if it is
  // greater than or less than the current hour to apply the correct class.
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

  // this for loop is getting the saved user data out of localstorage to display
  // on the screen. It is getting all of the localstorage keys and values from the user,
  // then checking to see if the key is a number, and if it is between 0 and 13. If it is,
  // then it will retrieve its value and create the text content for the screen.
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

  // this uses dayjs to get the current date and time.
  var now = dayjs()
  var currentDate = now.format("MMMM D, dddd, YYYY" + " hh:mm")
  console.log(currentDate)

  // This is grabbing the header element and displaying the current time.
  $("#currentDay").text(currentDate)
});
