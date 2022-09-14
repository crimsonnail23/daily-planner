//following codeblock will add current date to index.html
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
var hour13=$('<div> 1:00 </div>');
var hour14=$('<div> 2:00</div>');
var hour15=$('<div> 3:00 </div>');
var hour16=$('<div> 4:00 </div>');
var hour17=$('<div> 5:00 </div>');

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
var button10=$('<button>save</button>').addClass("saveBtn").attr({ id:"button-10", type: "submit"});
var button11=$('<button>save</button>').addClass("saveBtn").attr({ id:"button-11", type: "submit"});
var button12=$('<button>save</button>').addClass("saveBtn").attr({ id:"button-12", type: "submit"});
var button13=$('<button>save</button>').addClass("saveBtn").attr({ id:"button-13", type: "submit"});
var button14=$('<button>save</button>').addClass("saveBtn").attr({ id:"button-14", type: "submit"});
var button15=$('<button>save</button>').addClass("saveBtn").attr({ id:"button-15", type: "submit"});
var button16=$('<button>save</button>').addClass("saveBtn").attr({ id:"button-16", type: "submit"});
var button17=$('<button>save</button>').addClass("saveBtn").attr({ id:"button-17", type: "submit"});

//appends forms to the container, and then appends hour div, textareas, and buttons to the form.
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

// on page load, check localStorage and post to textarea.
$().ready(function(){
   getTask=localStorage.getItem("9th_hour");
   $('#9-hour').val(getTask)

   getTask=localStorage.getItem("10th_hour");
   $('#10-hour').val(getTask)

   getTask=localStorage.getItem("11th_hour");
   $('#11-hour').val(getTask)

   getTask=localStorage.getItem("12th_hour");
   $('#12-hour').val(getTask)

   getTask=localStorage.getItem("13th_hour");
   $('#13-hour').val(getTask)

   getTask=localStorage.getItem("14th_hour");
   $('#14-hour').val(getTask)

   getTask=localStorage.getItem("15th_hour");
   $('#15-hour').val(getTask)

   getTask=localStorage.getItem("16th_hour");
   $('#16-hour').val(getTask)

   getTask=localStorage.getItem("17th_hour");
   $('#17-hour').val(getTask)
})

//on click, save to localStorage. each textarea will be saved to it own's localstorage.
$("#button-9").click(function(event){
   event.preventDefault();
    dailyTask = $('#9-hour').val();
    localStorage.setItem("9th_hour", dailyTask);
});

$("#button-10").click(function(event){
    event.preventDefault();
     dailyTask = $('#10-hour').val();
     localStorage.setItem("10th_hour", dailyTask);
 });

 $("#button-11").click(function(event){
    event.preventDefault();
     dailyTask = $('#11-hour').val();
     localStorage.setItem("11th_hour", dailyTask);
 });

 $("#button-12").click(function(event){
    event.preventDefault();
     dailyTask = $('#12-hour').val();
     localStorage.setItem("12th_hour", dailyTask);
 });

 $("#button-13").click(function(event){
    event.preventDefault();
     dailyTask = $('#13-hour').val();
     localStorage.setItem("13th_hour", dailyTask);
 });

 $("#button-14").click(function(event){
    event.preventDefault();
     dailyTask = $('#14-hour').val();
     localStorage.setItem("14th_hour", dailyTask);
 });

 $("#button-15").click(function(event){
    event.preventDefault();
     dailyTask = $('#15-hour').val();
     localStorage.setItem("15th_hour", dailyTask);
 });

 $("#button-16").click(function(event){
    event.preventDefault();
     dailyTask = $('#16-hour').val();
     localStorage.setItem("16th_hour", dailyTask);
 });

 $("#button-17").click(function(event){
    event.preventDefault();
     dailyTask = $('#17-hour').val();
     localStorage.setItem("17th_hour", dailyTask);
 });

//check if 9th hour is in the past, present, or future
//following are variables for each hour that will then be compared to the current time. 
//and if true,then it will change the class of text area.
var currentHour = moment().hour();
var currentTime = moment({h:currentHour})
console.log(currentTime);
var time_9 = moment({h:9});
var time_10= moment({h:10});
var time_11=moment({h:11});
var time_12=moment({h:12});
var time_13=moment({h:13});
var time_14=moment({h:14});
var time_15=moment({h:15});
var time_16=moment({h:16});
var time_17=moment({h:17});

//check if '9:00' is in the past, and if it is, then update textarea class with appropriate color.
//and if not, then check if '9:00' is present and update textarea class.
//and if not, then if '9:00' is in the future, and update textarea class.
function checkTime_9(){
    console.log(time_9);
    $('#9-hour').removeClass();
    if(time_9.isBefore(currentTime)===true){
        $('#9-hour').attr('class','past')
    } else if(time_9.isSame(currentTime)===true){
  
        $('#9-hour').attr('class','present')
    } else if (time_9.isAfter(currentTime)===true){
        $('#9-hour').attr('class', 'future')
    };
};

function checkTime_10(){
    $('#10-hour').removeClass();
    if(time_10.isBefore(currentTime)===true){
        $('#10-hour').attr('class','past')
    } else if(time_10.isSame(currentTime)===true){
        $('#10-hour').attr('class','present')
    } else if (time_10.isAfter(currentTime)===true){
        $('#10-hour').attr('class', 'future')
    };
};

function checkTime_11(){
    $('#11-hour').removeClass();
    if(time_9.isBefore(currentTime)===true){
        $('#11-hour').attr('class','past')
    } else if(time_11.isSame(currentTime)===true){
        $('#11-hour').attr('class','present')
    } else if (time_11.isAfter(currentTime)===true){
        $('#11-hour').attr('class', 'future')
    };
};

function checkTime_12(){
    $('#12-hour').removeClass();
    if(time_12.isBefore(currentTime)===true){
        $('#12-hour').attr('class','past')
    } else if(time_12.isSame(currentTime)===true){
        $('#12-hour').attr('class','present')
    } else if (time_12.isAfter(currentTime)===true){
        $('#12-hour').attr('class', 'future')
    };
};

function checkTime_13(){
    $('#13-hour').removeClass();
    if(time_13.isBefore(currentTime)===true){
        $('#13-hour').attr('class','past')
    } else if(time_13.isSame(currentTime)===true){
        $('#13-hour').attr('class','present')
    } else if (time_13.isAfter(currentTime)===true){
        $('#13-hour').attr('class', 'future')
    };
};

function checkTime_14(){
    $('#14-hour').removeClass();
    if(time_14.isBefore(currentTime)===true){
        $('#14-hour').attr('class','past')
    } else if(time_14.isSame(currentTime)===true){
        $('#14-hour').attr('class','present')
    } else if (time_14.isAfter(currentTime)===true){
        $('#14-hour').attr('class', 'future')
    };
};

function checkTime_15(){
    $('#15-hour').removeClass();
    if(time_15.isBefore(currentTime)===true){
        $('#15-hour').attr('class','past')
    } else if(time_15.isSame(currentTime)===true){
        $('#15-hour').attr('class','present')
    } else if (time_15.isAfter(currentTime)===true){
        $('#15-hour').attr('class', 'future')
    };
};

function checkTime_16(){
    $('#16-hour').removeClass();
    if(time_16.isBefore(currentTime)===true){
        $('#16-hour').attr('class','past')
    } else if(time_16.isSame(currentTime)===true){
        $('#16-hour').attr('class','present')
    } else if (time_16.isAfter(currentTime)===true){
        $('#16-hour').attr('class', 'future')
    };
};

function checkTime_17(){
    $('#17-hour').removeClass();
    if(time_17.isBefore(currentTime)===true){
        $('#17-hour').attr('class','past')
    } else if(time_17.isSame(currentTime)===true){
        $('#17-hour').attr('class','present')
    } else if (time_17.isAfter(currentTime)===true){
        $('#17-hour').attr('class', 'future')
    };
};


checkTime_9();
checkTime_10();
checkTime_11();
checkTime_12();
checkTime_13();
checkTime_14();
checkTime_15();
checkTime_16();
checkTime_17();




