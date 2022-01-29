var currentDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").append(currentDate);

var currentTime = moment().format("h:mm:ss A");
$("#currentTime").append("<span>").text(currentTime);


var assignments = JSON.parse(localStorage.getItem("assignments")) || [];

var input = $("#input").val();

var timeSlotSection = $("#time-slot");

var times = [];
for (let hour = 8; hour <= 17; hour++) { //specifying the time will start at 8 and end at 5
    times.push(moment({hour}).format("h:mm A")); //pushing times into array in a way that moment can understand.
}
var attrInput = ['input-1', 'input-2', 'input-3', 'input-4','input-5', 'input-6', 'input-7', 'input-8', 'input-9'];
for (var i = 0; i < times.length; i++) {
    var assmtDiv = $("<div>").addClass("col-1 px-1 bg-info badge text-white justify-content-*-around align-content-*-around").text(times[i]).css({fontSize: 18}).height('36px');
    var assmtInput = $("<input>").addClass("col-10 form-control").attr("id", (attrInput[i])).attr("type", "text");
    var assmtSaveBtn = $("<btn>").addClass('col-1');
    var assmtSaveIcon = $("<i>").css({fontSize: 18}).addClass("fa fa-save btn btn-primary");
    assmtSaveBtn.append(assmtSaveIcon);
    var assmtContainer = $("<div>").addClass("row m-2 p-2");
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
    for (var i = 0; i < times.length; i++) {
      $(assmtInput[i]).parent.removeClass("bg-danger bg-warning");
      if (times[i] <= currentTime) {
        $(this).parent.addClass("bg-danger");
      } else if (times[i] >= currentTime + 2) {
        $(this).parent.addClass("bg-warning");
      }
    }
}


load();
checkTime();