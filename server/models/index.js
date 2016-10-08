var db = require('../db');

module.exports = {
  messages: {
    get: function (content, callback) {
      var newConnection = db.createConnection();
      var newQuery = 'select * from messages';
      newConnection.query(newQuery, {}, function(error, response) {
        if (error) {
          console.log('Error in MODELS!');
          return;
        }
        callback(JSON.stringify(response));
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

