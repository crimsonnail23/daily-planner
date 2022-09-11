var currentDate = moment().format('MM/DD/YYYY');
$("#currentDay").text(currentDate);

//variables to add text areas for each div.
var textArea9=$('<textarea/>').attr('id', '9-hour');
var textArea10=$('<textarea/>').attr('id', '10-hour');
var textArea11=$('<textarea/>').attr('id', '11-hour');
var textArea12=$('<textarea/>').attr('id', '12-hour');
var textArea13=$('<textarea/>').attr('id', '13-hour');
var textArea14=$('<textarea/>').attr('id', '14-hour');
var textArea15=$('<textarea/>').attr('id', '15-hour');
var textArea16=$('<textarea/>').attr('id', '16-hour');
var textArea17=$('<textarea/>').attr('id', '17-hour');


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

//adds save button to forms to capture textarea inputs.
var button9=$('<button>save</button>').addClass("saveBtn").attr({ id:"button-9", type: "submit"});
var button10=$('<button>save</button>').addClass("saveBtn");
var button11=$('<button>save</button>').addClass("saveBtn");
var button12=$('<button>save</button>').addClass("saveBtn");
var button13=$('<button>save</button>').addClass("saveBtn");
var button14=$('<button>save</button>').addClass("saveBtn");
var button15=$('<button>save</button>').addClass("saveBtn");
var button16=$('<button>save</button>').addClass("saveBtn");
var button17=$('<button>save</button>').addClass("saveBtn");

// on load, check localStorage and post to textarea.

//on click, save to localStorage.
$("button-9").click(function(event){
    event.preventDefault();
    console.log('stuff');
})

//appends divs, textareas, and buttons to respective forms.
hour9.appendTo('.time-box-9');
textArea9.appendTo('.time-box-9');
button9.appendTo('.time-box-9');
hour10.appendTo('.time-box-10');
textArea10.appendTo('.time-box-10');
button10.appendTo('.time-box-10');
hour11.appendTo('.time-box-11');
textArea11.appendTo('.time-box-11');
button11.appendTo('.time-box-11');
hour12.appendTo('.time-box-12');
textArea12.appendTo('.time-box-12');
button12.appendTo('.time-box-12');
hour13.appendTo('.time-box-13');
textArea13.appendTo('.time-box-13');
button13.appendTo('.time-box-13');
hour14.appendTo('.time-box-14');
textArea14.appendTo('.time-box-14');
button14.appendTo('.time-box-14');
hour15.appendTo('.time-box-15');
textArea15.appendTo('.time-box-15');
button15.appendTo('.time-box-15');
hour16.appendTo('.time-box-16');
textArea16.appendTo('.time-box-16');
button16.appendTo('.time-box-16');
hour17.appendTo('.time-box-17');
textArea17.appendTo('.time-box-17');
button17.appendTo('.time-box-17');