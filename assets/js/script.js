var currentDate = moment().format('MM/DD/YYYY');
$("#currentDay").text(currentDate);

//variables to add text areas for each div.
var textArea9=$('<textarea/>');
var textArea10=$('<textarea/>');
var textArea11=$('<textarea/>');
var textArea12=$('<textarea/>');
var textArea13=$('<textarea/>');
var textArea14=$('<textarea/>');
var textArea15=$('<textarea/>');
var textArea16=$('<textarea/>');
var textArea17=$('<textarea/>');


//variables to add divs to timeblock.
var hour9=$('<div> 09:00</div>');
var hour10=$('<div> 10:00</div>');
var hour11=$('<div> 11:00</div>');
var hour12=$('<div> 12:00</div>');
var hour13=$('<div> 13:00 </div>');
var hour14=$('<div> 14:00</div>');
var hour15=$('<div> 15:00 </div>');
var hour16=$('<div> 16:00 </div>');
var hour17=$('<div> 17:00</div>');

//adds save button to textareas.

function checkTime(){

}


hour9.appendTo('.time-box-9');
textArea9.appendTo('.time-box-9');
hour10.appendTo('.time-box-10');
textArea10.appendTo('.time-box-10');
hour11.appendTo('.time-box-11');
textArea11.appendTo('.time-box-11');
hour12.appendTo('.time-box-12');
textArea12.appendTo('.time-box-12');
hour13.appendTo('.time-box-13');
textArea13.appendTo('.time-box-13');
hour14.appendTo('.time-box-14');
textArea14.appendTo('.time-box-14');
hour15.appendTo('.time-box-15');
textArea15.appendTo('.time-box-15');
hour16.appendTo('.time-box-16');
textArea16.appendTo('.time-box-16');
hour17.appendTo('.time-box-17');
textArea17.appendTo('.time-box-17');