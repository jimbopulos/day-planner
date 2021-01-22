// Display time at top of page
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm a"))

// var timeBlocks = [
//   {
//     hour: '9AM',
//     appt: ""
//   },
//   {
//     hour: '10AM',
//     appt: ""
//   },
//   {
//     hour: '11AM',
//     appt: ""
//   },
//   {
//     hour: '12PM',
//     appt: ""
//   },
//   {
//     hour: '1PM',
//     appt: ""
//   },
//   {
//     hour: '2PM',
//     appt: ""
//   },
//   {
//     hour: '3PM',
//     appt: ""
//   },
//   {
//     hour: '4PM',
//     appt: ""
//   },
//   {
//     hour: '5PM',
//     appt: ""
//   },
// ];


$('.description').each(function () {
    // declare var, moment data
    var currentHour = moment().hours();
    console.log(currentHour);
    // declare var and convert to usable integer
    var blockHour = parseInt($(this).attr('id'));
    // if statement to change block color based on hour of day
    if (blockHour < currentHour) {
        $(this).addClass('past');
    } else if (blockHour === currentHour) {
        $(this).addClass('present');
        $(this).removeClass('past');
    } else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
    }
});

// save button will store event in local storage
// event listener for save button
$('button').on('click', function () {
    // create var hour. set attribute datahour to selected item
    var hour = $(this).attr('data-hour');
    // create var for input and set as value of hour
    var input = $('#'+hour).val();
    console.log(hour);
    console.log(input);
    // set input
    // create object for hours, input
    var temp = {
        hour: hour,
        input: input
        }
    // get input, allow to fill empty array
    var getEvent = JSON.parse(localStorage.getItem('timeBlock')) || [];
    // push temp output into array
    getEvent.push(temp)
    // set item as JSON string
    localStorage.setItem('timeBlock', JSON.stringify(getEvent));
    // textArea.val().localStorage.getItem('event');
});

    // localStorage.setItem('timeBlock', JSON.stringify(timeBlocks));

// var that will call parse function
var getEvent = JSON.parse(localStorage.getItem('timeBlock')) || [];
$('#13').val();

// function saveLastGrade() {
//     // Save related form data as an object
//     var studentGrade = {
//       student: student.value,
//       grade: grade.value,
//       comment: comment.value.trim()
//     };
//     // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//     localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//   }

//   function saveEvent() {
//     // Save even input data as an object
//     localStorage.setItem('timeBlock', JSON.stringify(timeBlocks));
//   }

// place in local storage

// timeblock linked to time displayed
// timeblock changes color based on current time
  // past? 
  // current?
  // future?

