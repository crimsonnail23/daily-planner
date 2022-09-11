var currentDate = moment().format('MM/DD/YYYY');

function addCurrentDay(){

    $("#currentDay").text(currentDate);
};

addCurrentDay();
