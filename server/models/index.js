var db = require('../db');
var connectionExists = false;
var newConnection;

module.exports = {
  messages: {
    get: function (content, callback) {
      console.log('Models messages get:', content);
      newConnection = db.dbConnection();
      connectionExists = true;
      var newQuery = 'select * from messages';
      newConnection.query(newQuery, {}, function(error, response) {
        console.log('Models messages get new query!');
        if (error) {
          console.log('Error in MODELS!');
          return;
        }
        callback(JSON.stringify(response));
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      console.log('Models messages post req:', req, 'res:', res);
      var message = req.message;
      if (connectionExists === false ) {
        newConnection = db.dbConnection();
        connectionExists = true;
      }
      var newQuery = 'INSERT INTO messages (Message, Userid, Roomid) VALUES ("In mercy\'s name, three days is all I need.", "1", "1")';
      newConnection.query(newQuery, {}, function(error, result) {
        if (error) {
          console.log('Error in MODELS!');
          return;
        } 
        // pass results of query into controllers
        console.log('result of user msg post', result);
      });
    } // a function which can be used to insert a message into the database

  },

  users: {
    // Ditto as above.
    get: function (content, callback) {
      console.log('Models users get:', content);
    },
    post: function (req, res) {
      console.log('Models users post req.body:', req.body, 'res:', res);
      var username = req.username;
      newConnection = db.dbConnection();
      connectionExists = true;
      var newQuery = 'INSERT INTO users (Username) VALUES ("Valjean")';
      newConnection.query(newQuery, {}, function(error, result) {
        if (error) {
          console.log('Error in MODELS!');
          return;
        } 
        console.log('result of posting user', result);
        module.exports.messages.post(req.body, function() {
          req.end();
        });
      });
    }
  }
};

