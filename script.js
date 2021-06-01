// adding moment variables 
var currentDate = moment().format("dddd") + " " + moment().format("Do MMM YYYY");
//adding the variable for each hour
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");
var sixPm = $("#6pm");
var sevenPm = $("#7pm");


var hour = moment().hours();
var userInput;
var hourSpan;


// this allows the date to be up to date on the header when you open the page 
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
});

//this function allows the page to function based on the hour and save the users input when logged

function initPage() {
    console.log("current Hour" + hour);
    var init8 = JSON.parse(localStorage.getItem("08:00 am"));
    eightAm.val(init8);

    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    eightAm.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"));
    eightAm.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 am"));
    eightAm.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
    eightAm.val(init12);

    var init1 = JSON.parse(localStorage.getItem("01:00 pm"));
    eightAm.val(init1);

    var init2 = JSON.parse(localStorage.getItem("02:00 pm"));
    eightAm.val(init2);

    var init3 = JSON.parse(localStorage.getItem("03:00 pm"));
    eightAm.val(init3);

    var init4 = JSON.parse(localStorage.getItem("04:00 pm"));
    eightAm.val(init4);    
    
    var init5 = JSON.parse(localStorage.getItem("05:00 pm"));
    eightAm.val(init5);

    var init6 = JSON.parse(localStorage.getItem("06:00 pm"));
    eightAm.val(init6);

    var init7 = JSON.parse(localStorage.getItem("07:00 pm"));
    eightAm.val(init7);

}
