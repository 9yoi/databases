CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE messages (
  id integer(11) PRIMARY KEY AUTO_INCREMENT,
  Message varchar(255),
  Userid integer(11),
  Roomid varchar(255)
);

CREATE TABLE users (
  id integer(11) PRIMARY KEY AUTO_INCREMENT,
  Username varchar(255)
);

CREATE TABLE rooms (
  id integer(11) PRIMARY KEY AUTO_INCREMENT,
  Room varchar(255)
);

INSERT INTO messages (Message, Userid, Roomid) VALUES ('Hi everyone', '2', '1');
INSERT INTO messages (Message, Userid, Roomid) VALUES ('Heyyy', '2', '2');
INSERT INTO messages (Message, Userid, Roomid) VALUES ('Whazzup', '1', '1');
INSERT INTO messages (Message, Userid, Roomid) VALUES ('HR48', '2', '1');
INSERT INTO messages (Message, Userid, Roomid) VALUES ('Bush Did Harambe', '1', '2');

INSERT INTO users (Username) VALUES ('Carlos');
INSERT INTO users (Username) VALUES ('MJ');

INSERT INTO rooms (Room) VALUES ('Lobby');
INSERT INTO rooms (Room) VALUES ('Random');


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

