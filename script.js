// Display time at top of page
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm a"))

var timeBlocks = [
  {
    hour: '9:00 AM',
    event: ""
  },
  {
    hour: '10:00 AM',
    event: ""
  },
  {
    hour: '11:00 AM',
    event: ""
  },
  {
    hour: '12:00 PM',
    event: ""
  },
  {
    hour: '1:00 PM',
    event: ""
  },
  {
    hour: '2:00 PM',
    event: ""
  },
  {
    hour: '3:00 PM',
    event: ""
  },
  {
    hour: '4:00 PM',
    event: ""
  },
  {
    hour: '5:00 PM',
    event: ""
  },
];

// timeblock linked to time displayed
// timeblock changes color based on current time
  // past? 
  // current?
  // future?

// save button will store event in local storage