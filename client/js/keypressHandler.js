
// $('body').on('keydown', (event) => {
//   var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
//   if (arrowPress) {
//     var direction = arrowPress[1];
//     SwimTeam.move(direction.toLowerCase());
//   }
// });

// console.log('Client is running in the browser!');
const serverUrl = 'http://127.0.0.1:3000';

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    // SwimTeam.move(direction.toLowerCase());
  }
  $.get(serverUrl + '/' + direction, (data) => {
    data = data.slice(1);
    // data = JSON.stringify(data)
    console.log(data)
    SwimTeam.move(data.toLowerCase())
    console.log('client is logged into the server!')
  });
});