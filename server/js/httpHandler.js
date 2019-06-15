const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // if (req.method === 'GET') {
  //   res.write('up', 'utf8')
  // }
  // if (req.method === 'OPTIONS') {
  //   console.log('options request')
  // }
  var directions = ['up', 'down', 'left', 'right']
  var randomizer = directions[Math.round(Math.random() * 3)]
  res.writeHead(200, headers);
  // res.write('get request')
  res.write(randomizer);
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
