$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

  // Hool for the text area

  // create a hook for for the value of the time
  var timeValue = $(".description");
  //console.log(timeValue);

  // Hook for the current time
  var currentTime = moment().format("H");
  //console.log(currentTime);

  // if (moment(timeValue).isBefore(currentTime)) {

  // }

  for (i = 0; i < timeValue.length; i++) {
    var hour = timeValue[i].getAttribute("value");
    if (hour === currentTime) {
      timeValue[i].classList.add("present");
    } 
    if (hour < currentTime) {
        timeValue[i].classList.add("past");
    } 
    if(hour > currentTime) {
        timeValue[i].classList.add("future");
    }

  }

  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).siblings("textarea")[0];
    var task = timeBlock.value;
    var hour = timeBlock.getAttribute("value");
    // console.log(hour);
    // console.log(task);
    localStorage.setItem(hour, task);
  });

  for (i = 9; i < 18; i++) {
    var task = localStorage.getItem(i.toString());
    // console.log(task);
    //jqeury
    $("[value="+i.toString()+"]");
    if (task === null) {
    }
  }

});

//javascript
console.log(document.querySelector(("[value='9']")));
