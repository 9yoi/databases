var mysql = require('mysql');
var express = require ('express');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var app = express();
var dbConnection = mysql.createConnection({
  // host: 'localhost',
  user: 'root',
  password: 'sqll',
  database: 'chat'
});

exports.dbConnection = function() {
  return dbConnection;
};