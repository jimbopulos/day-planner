// Display time at top of page
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm a"))

var timeBlocks = [
  {
    hour: '9AM',
    appt: 'inputAppt.value.trim()'
  },
  {
    hour: '10AM',
    appt: ""
  },
  {
    hour: '11AM',
    appt: ""
  },
  {
    hour: '12PM',
    appt: ""
  },
  {
    hour: '1PM',
    appt: ""
  },
  {
    hour: '2PM',
    appt: ""
  },
  {
    hour: '3PM',
    appt: ""
  },
  {
    hour: '4PM',
    appt: ""
  },
  {
    hour: '5PM',
    appt: ""
  },
];

console.log(timeBlocks);

// save button will store event in local storage
// event listener for save button
$('button').on('click', function () {
    // set input
    localStorage.setItem('timeBlock', JSON.stringify(timeBlocks));
    // get input
    var getEvent = JSON.parse(localStorage.getItem('timeBlock'));
    // textArea.val().localStorage.getItem('event');
});

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

