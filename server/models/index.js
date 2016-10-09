var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'SELECT * FROM messages;';
      db.query(queryStr, function(err, content) {
        if (err) { 
          console.log (err);
        } else {
          callback (content);
        }
      });
       
    }, 
    post: function (req, res) {
     
    
    },
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
    },
    post: function (req, res) {
      
    }
  }
};

