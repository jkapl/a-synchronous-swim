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
  if (req.method === 'GET') {
      if (req.url = '/') {
      console.log(req.url);
      res.writeHead(200, headers);
      var command = messageQueue.dequeue();
      if (command) {
        res.end(command);
      } else {
        res.end();
      }
    }
    next();
  }

  if ((req.method === 'GET') && (req.url === './background.jpg')) {
    res.writeHead(200, headers);
    res.write(req.url);
    res.end()
    next();
  }




  // var directions = ['up', 'down', 'left', 'right']
  // var randomizer = directions[Math.round(Math.random() * 3)]
  // res.writeHead(200, headers);
  // // res.write('get request')
  // res.write(req.url);
  // res.end();
  // next(); // invoke next() at the end of a request to help with testing!
};
