var currentDay = document.querySelector("#currentDay");
var hour = document.querySelector("#hour");
var workDay = document.querySelector("#workDay");


$(document).ready(function() {
// sets the date and current time
workDay= moment().format("dddd, MMMM Do YYYY");
console.log(workDay)
// appends it to parent of currentDay
$("#currentDay").append(workDay);
// chnages it to hours not hours and seconds
hour = parseInt(moment().format("HH"));
console.log(hour)

$("textarea").each(function () {
    console.log("setting colors");
    var timeBlock = parseInt($(this).attr("id"));
    console.log("timeBlock=" + timeBlock);
    if (timeBlock < hour) {
      $(this).addClass("past");
    } else if (timeBlock === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
});

  $("button").on("click", function() {
      event.preventDefault();
      localStorage.setItem($(this).attr("id"), $("textarea#" + $(this).attr("id")).val());   
});
    $("textarea").each(function () {
        $(this).append(localStorage.getItem($(this).attr("id")));
    });



  
