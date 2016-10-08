var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controllers msg get');
      console.log('Req url:', req.url, 'Req body:', req.body);
      models.messages.get(req.url, function (data) {
        data.on('data', function(data) {
          var results = data;
        });
        res.writeHead(200, null);
        res.end(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('controllers msg post');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users msg get');
    },
    post: function (req, res) {
      console.log('users msg post');
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