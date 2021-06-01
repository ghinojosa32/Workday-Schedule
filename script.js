// adding moment variables 
var currentDate =  moment().format("MMM Do YY");
var currentHour = moment().format("h:mm:ss a");
//adding the variable for each hour
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");


var hour = moment().hours();
var userInput;
var hourSpan;


// this allows the date to be up to date on the header when you open the page 
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('MMM Do YY') + ' ' 
                         .substring(0,3).toUpperCase());
});

//this function allows the page to function based on the hour and save the users input when logged

function initPage() {
    console.log("current Hour" + hour);
    var init8 = JSON.parse(localStorage.getItem("08:00 am"));
    eightAm.val(init8);

    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"));
    tenAm.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 am"));
    elevenAm.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelvePm.val(init12);

    var init1 = JSON.parse(localStorage.getItem("01:00 pm"));
    onePm.val(init1);

    var init2 = JSON.parse(localStorage.getItem("02:00 pm"));
    twoPm.val(init2);

    var init3 = JSON.parse(localStorage.getItem("03:00 pm"));
    threePm.val(init3);

    var init4 = JSON.parse(localStorage.getItem("04:00 pm"));
    fourPm.val(init4);    
    
    var init5 = JSON.parse(localStorage.getItem("05:00 pm"));
    fivePm.val(init5);

    var init6 = JSON.parse(localStorage.getItem("06:00 pm"));
    sixPm.val(init6);

    var init7 = JSON.parse(localStorage.getItem("07:00 pm"));
    sevenPm.val(init7);
}

// this function sets the bckground color based on the hour if its past, present, future

function background () {

    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        if (hour < timeTest) {
            $(this).addClass("future");
        } else if (hour > timeTest) {
            $(this).addClass("past");
        }else {
            $(this).addClass("present");
        }
    });
}
$(document).ready(function(){
    initPage()
    background()
    
//this function lets the save action on the row save the user input into the local storage
$(".saveButton").on("click", function(){

    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);

    localStorage.setItem(hourSpan, JSON.stringify(userInput));
})

});


