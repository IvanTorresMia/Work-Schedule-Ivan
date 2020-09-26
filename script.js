$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));


  var timeValue = $(".description");
 
  var currentTime = moment().format("H");

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

  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).siblings("textarea")[0];
    var task = timeBlock.value;
    var hour = timeBlock.getAttribute("value");
    localStorage.setItem(hour, task);
  });

  for (i = 9; i < 18; i++) {
    var task = localStorage.getItem(i.toString());
    //jqeury
   var value = $("[value="+i.toString()+"]");
   
   if (task === null) {
       value.text("")
   } else {
       value.text(task);
   }


  }

});
