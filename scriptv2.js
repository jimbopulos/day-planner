// // Display time at top of page
// $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm a"))

// // timeblocks will display color depending on time from monitor.js
// $('.description').each(function () {
//     // declare var, moment data
//     var currentHour = moment().hours();
//     console.log(currentHour);
//     // declare var and convert to usable integer
//     var blockHour = parseInt($(this).attr('id'));
//     // if statement to change block color based on hour of day
//     if (blockHour < currentHour) {
//         $(this).addClass('past');
//     } else if (blockHour === currentHour) {
//         $(this).addClass('present');
//         $(this).removeClass('past');
//     } else {
//         $(this).addClass('future');
//         $(this).removeClass('past');
//         $(this).removeClass('present');
//     }
// });

// var userInput = [
//     {
//     textArea: "",
//     },
//     {
//     textArea: "",
//     },
//     {
//     textArea: "",
//     },
//     {
//     textArea: "",
//     },
//     {
//     textArea: "",
//     },
//     {
//     textArea: "",
//     },
//     {
//     textArea: "",
//     },
//     {
//     textArea: "",
//     },
//     {
//     textArea: "",
//     }
// ];

// function init() {
//     if (localStorage.getItem('Task')) {
//         userInput = JSON.parse(localStorage.getItem('Task'))
//     }
// }

// init();
// $('button').on('click', function () {
//     var buttonIndex = $(this).attr('data-hour');
//     console.log(buttonIndex);
//     var saveText = $('#'+buttonIndex).val();
//     console.log(saveText);
//     userInput[buttonIndex].textArea = saveText;
//     console.log(userInput[buttonIndex].textArea = saveText);
//     localStorage.setItem('Task', JSON.stringify(userInput));
// });


