var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'SELECT * FROM messages;';
      db.query(queryStr, function(err, content) {
        callback (err, content);
      });
    },
       
    post: function (params, callback) {
      var queryStr = 'INSERT INTO messages(message, username, roomname) VALUES (?, (select id from users where username = ? limit 1), ?);';
      db.query(queryStr, params, function(err, content) {
        if (err) {
          callback (err, content);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'SELECT * from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },

    post: function (params, callback) {
      var queryStr = 'INSERT INTO users(username) VALUES (?);';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};

