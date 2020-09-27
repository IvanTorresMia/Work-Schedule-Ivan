

// This writes the current day, month and year to the currentDay Id.
$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

// These are tags that I will be using to compare times and add classes.
  var timeValue = $(".description");
  var currentTime = moment().format("H");

// This code uses a for loop to run through all of the time blocks, taking the description class to reach the value of it
// Then it compares times and depending on the time it will add classes already written in style.css
  for (i = 0; i < timeValue.length; i++) {
    var hour = timeValue[i].getAttribute("value");
    if (hour == currentTime) {
      timeValue[i].classList.add("present");
    } else if (hour < currentTime) {
        timeValue[i].classList.add("past");
    } else {
        timeValue[i].classList.add("future");
    }

  }


// This ode was the funnest/hardest for me. I reached the text area's value by using .siblings
// Then I set all the values of text area to the local storage. 
  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).siblings("textarea")[0];
    var task = timeBlock.value;
    var hour = timeBlock.getAttribute("value");
    localStorage.setItem(hour, task);
  });

//   This for loop reaches every key in the local storage by using index and incrementing 
//  then once retrieving it, I add the value of it to the text areas, if it returns null then it returns an empty string. 
  for (i = 9; i < 18; i++) {
    var task = localStorage.getItem(i.toString());
   var value = $("[value="+i.toString()+"]");
   
   if (task === null) {
       value.text("")
   } else {
       value.text(task);
   }


  }

});
