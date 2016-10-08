var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controllers msg get');
      console.log('Req url:', req.url, 'Req body:', req.body);
      models.messages.get(req.body, function (data) {
        // data.on('data', function(data) {
        //   var results = data;
        // });
        // res.writeHead(200, null);
        res.end(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('controllers msg post');
      models.messages.post(req.body, function() {
        req.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('controllers user get');
    },
    post: function (req, res) {
      console.log('controllers users msg post', 'req.body ', req.body);
      models.users.post(req.body, function() {
        req.end();
      });
    }
  }
};

// app.get('/messages', function (req, res) {
//   connection.query('SELECT * from messages', function (err, rows, fields) {
//     connection.end();
//       if(!err) {
//         console.log('The solution is: ', rows);
//       } else {
//         console.log('error');
//       }
//   });
// });

// module.exports = {
//   messages: {
//     get: function (req, res) {}, // a function which handles a get request for all messages
//     post: function (req, res) {} // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {},
//     post: function (req, res) {}
//   }
// };