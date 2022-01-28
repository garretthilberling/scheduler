var currentDate = moment().toDate();
$("#currentDay").append(currentDate);

var timeSlotSection = $("#time-slot");

var times = ['8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']
for (var i = 0; i < times.length; i++) {
    var assmtDiv = $("<div>").addClass("col-1").text(times[i]).css({fontSize: 22});
    var assmtInput = $("<input>").addClass("col-10 form-control").attr("id", "input").attr("type", "text").attr("placeholder","assignment");
    var assmtSaveBtn = $("<btn>").addClass('col-1').attr("id", "savebtn")
    var assmtSaveIcon = $("<i>").css({fontSize: 18}).addClass("fa fa-save btn btn-primary");
    assmtSaveBtn.append(assmtSaveIcon);
    var assmtContainer = $("<div>").addClass("row m-2 p-2");
    assmtContainer.append(assmtDiv, assmtInput, assmtSaveBtn);
    timeSlotSection.append(assmtContainer);
}


var assignments = {};





// var loadAssignments = function() {
//     assignments = JSON.parse(localStorage.getItem("assignments"));

//     if (!assignments) {
//         assignments ={
//             hour8: [], hour9: [], hour10: [], hour11: [], hour12: [], hour1: [], hour2: [], hour3: [], hour4: [], hour5: []
//         };
//     }
    // for (let i = 0; i < assignments.length; i++) {
    //     assignments.push(input);
    // }
// }

// $("#savebtn").on("click", save);

// var save = function (e) {
//     assignments.push(input);

    // localStorage.setItem("assignments", JSON.stringify(assignments));
    // console.log(assignments);
// }


// loadAssignments();