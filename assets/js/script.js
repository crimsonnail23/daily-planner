var currentDate = moment().format('MM/DD/YYYY');
$("#currentDay").text(currentDate);

var hour9=$('<div> 09:00</div>');
var hour10=$('<div> 10:00</div');
var hour11=$('<div> 11:00</div');
var hour12=$('<div> 12:00</div>');
var hour13=$('<div> 13:00 </div>');
var hour14=$('<div> 14:00</div>');
var hour15=$('<div> 15:00 </div>');
var hour16=$('<div> 16:00 </div>');
var hour17=$('<div> 17:00</div>');


function task(){
    $('<p></p>')
    .addClass("insideInfo")
    .text("stuff")
}

hour9.text(task());
hour10.text(task());
hour11.text(task());
hour12.text(task());
hour13.text(task());
hour14.text(task());
hour15.text(task());
hour16.text(task());
hour17.text(task());

hour9.appendTo('.container');
hour10.appendTo('.container');
hour11.appendTo('.container');
hour12.appendTo('.container');
hour13.appendTo('.container');
hour14.appendTo('.container');
hour15.appendTo('.container');
hour16.appendTo('.container');
hour17.appendTo('.container');