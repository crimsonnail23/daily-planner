var currentDate = moment().format('MM/DD/YYYY');
$("#currentDay").text(currentDate);

//variables to create forms.
var form9=$('<form></form>').attr('id', 'time-box-9');
var form10=$('<form></form>').attr('id', 'time-box-10');
var form11=$('<form></form>').attr('id', 'time-box-11');
var form12=$('<form></form>').attr('id', 'time-box-12');
var form13=$('<form></form>').attr('id', 'time-box-13');
var form14=$('<form></form>').attr('id', 'time-box-14');
var form15=$('<form></form>').attr('id', 'time-box-15');
var form16=$('<form></form>').attr('id', 'time-box-16');
var form17=$('<form></form>').attr('id', 'time-box-17');


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

//appends divs, textareas, and buttons to respective forms.
form9.appendTo('.container');
hour9.appendTo('#time-box-9');
textArea9.appendTo('#time-box-9');
button9.appendTo('#time-box-9');
form10.appendTo('.container');
hour10.appendTo('#time-box-10');
textArea10.appendTo('#time-box-10');
button10.appendTo('#time-box-10');
form11.appendTo('.container');
hour11.appendTo('#time-box-11');
textArea11.appendTo('#time-box-11');
button11.appendTo('#time-box-11');
form12.appendTo('.container');
hour12.appendTo('#time-box-12');
textArea12.appendTo('#time-box-12');
button12.appendTo('#time-box-12');
form13.appendTo('.container');
hour13.appendTo('#time-box-13');
textArea13.appendTo('#time-box-13');
button13.appendTo('#time-box-13');
form14.appendTo('.container');
hour14.appendTo('#time-box-14');
textArea14.appendTo('#time-box-14');
button14.appendTo('#time-box-14');
form15.appendTo('.container');
hour15.appendTo('#time-box-15');
textArea15.appendTo('#time-box-15');
button15.appendTo('#time-box-15');
form16.appendTo('.container');
hour16.appendTo('#time-box-16');
textArea16.appendTo('#time-box-16');
button16.appendTo('#time-box-16');
form17.appendTo('.container');
hour17.appendTo('#time-box-17');
textArea17.appendTo('#time-box-17');
button17.appendTo('#time-box-17');

// on load, check localStorage and post to textarea.

//on click, save to localStorage.
$("button-9").click(function(event){
    event.preventDefault();
    console.log('stuff');
})