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

    // var divId = event.currentTarget.getAttribute('id')
    // console.log(divId)

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

    // var textBlock = $(this).parent().children(".description")
    // console.log(textBlock)
  })

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // this code creates an array of all of the ids of the hour divs.
  // we get all of the divs with the queryselector, and then for each div, we 
  // get the id attribute and push it to the empty array.

  // "How to get an array of attribute value from elements in a jQuery object" from stack overflow
  // https://stackoverflow.com/questions/9647968/how-to-get-an-array-of-attribute-value-from-elements-in-a-jquery-object
  var hourIds = [];
  $('.time-block').each(function () {
    hourIds.push($(this).attr('id'))
  })

  console.log(hourIds)

  var hourDivs = $(".time-block")

  hourDivsArray = jQuery.makeArray(hourDivs)
  console.log(hourDivsArray)

  console.log(hourDivsArray[8])



  // this uses dayjs to get the current hour.
  var currentHour = dayjs().format('h')
  console.log(currentHour)

  function colors() {
    for (var i = 0; i < hourIds.length; i++) {

      // if hour id is the same as current hour, then set css to "present"
      console.log(hourIds[i])
      if (hourIds[i] == currentHour) {
        console.log("true")
        hourDivsArray[currentHour].classList.add("present")
      
      // if hour id is less than the current hour, then sett css to "past"
      }  else if (hourIds[i] < currentHour) {
         console.log("past")
         hourDivsArray[8].classList.add('past')
      }
      //   
      
      // if hour id is greater than the current hour, then set css to "future"
      // } else if (hourIds[i] >= currentHour) {
      //   console.log("future")
      //   for (var i = 0; i < 5; i++) {
      //     hourDivsArray[].classList.add("future")
      //   }
      //   return
      // }
    }
  }

  colors()

  function changeColor() {

  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  for (var i = 9; i < 13; i++) {
    var morningHours = localStorage.getItem(i)
    console.log(morningHours)
  }

  for (var i = 0; i < localStorage.length; i++) {
    var morningId = localStorage.key(i)
    console.log(morningId)
    if (!isNaN(morningId))
    console.log(morningId)
  }

  for (var i = 1; i < 6; i++) {
    var afternoonHours = localStorage.getItem(i)
    console.log(afternoonHours)
  }

  var savedTextBlock = $(".description")
  console.log(savedTextBlock)
  //
  // TODO: Add code to display the current date in the header of the page.
    // this uses dayjs to get the current date and time.
    var now = dayjs()
    var currentDate = now.format("MMMM D, dddd, YYYY" + " hh:mm")
    console.log(currentDate)

  $("#currentDay").text(currentDate)
});
