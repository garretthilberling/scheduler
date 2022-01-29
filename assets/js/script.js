setInterval(function() {
    $("#currentDay").text(moment().format("dddd, MMM Do YYYY, hh:mm:ss a"));
}, 1000);

var assignments = JSON.parse(localStorage.getItem("assignments")) || [];

var input = $("#input").val();

var timeSlotSection = $("#time-slot");

var times = [];
for (let hour = 8; hour <= 17; hour++) { //specifying the time will start at 8 and end at 5
    times.push(moment({hour}).format("h:mm A")); //pushing times into array in a way that moment can understand.
}
var attrInput = ['input-1', 'input-2', 'input-3', 'input-4','input-5', 'input-6', 'input-7', 'input-8', 'input-9'];
var container = ['cont-1', 'cont-2', 'cont-3', 'cont-4','cont-5', 'cont-6', 'cont-7', 'cont-8','cont-9'];
for (var i = 0; i < times.length; i++) {
    var assmtDiv = $("<div>").addClass("col-1 px-1 bg-info badge text-white").text(times[i]).css({fontSize: 18}).height('36px');
    var assmtInput = $("<input>").addClass(`col-10 form-control ${checkTime()}`).attr("id", attrInput[i]).attr("type", "text");
    var assmtSaveBtn = $("<btn>").addClass('col-1');
    var assmtSaveIcon = $("<i>").css({fontSize: 24}).addClass("fa fa-save btn btn-primary");
    assmtSaveBtn.append(assmtSaveIcon);
    var assmtContainer = $("<div>").addClass("row m-2 p-2").attr("id", container[i]);
    assmtContainer.append(assmtDiv, assmtInput, assmtSaveBtn);
    timeSlotSection.append(assmtContainer);
}


var saveBtns = document.getElementsByClassName('btn');

for (var i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener('click', function(){
       // grab the value from the input area
       var inputVal = $(this).parent().parent().find('input').val();
       var inputId = $(this).parent().parent().find('input').attr('id');
      
       assignments.push({
          inputVal,
          inputId
       })

      localStorage.setItem('assignments', JSON.stringify(assignments));
    })
}

function load () {
    for(var i = 0; i < assignments.length; i++) {
        console.log(`#${assignments[i].inputId}`)
        $(`#${assignments[i].inputId}`).val(assignments[i].inputVal);
    }

}

function checkTime () {
    let currentTime = moment().format("H");
    for (var i = 0; i < times.length; i++) {
        var splitTime = parseInt(times[i].split(":")[0]);
      if (splitTime === currentTime) {
        return "present";
      } else if (splitTime > currentTime) {
        return "future";
      } else if (splitTime < currentTime) {
        return "past";
      }
    }
}


load();
checkTime();