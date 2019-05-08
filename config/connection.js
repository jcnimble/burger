// Set up MySQL connection.
var mysql = require("mysql");

/* var connection = mysql.createConnection({
  host: process.env.MySQL_Database_host,
  port: process.env.PORT || 3306,
  user: "root",
  password: process.env.MySQL_Database_Password,
  database: "burgers_db"
}); */

var connection;
if (process.env.JAWSDB_URL) {
   // Database is JawsDB on Heroku
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   // Database is local
   connection = mysql.createConnection({
       port: 3306,
       host: process.env.MySQL_Database_host,
       user: 'root',
       password: process.env.MySQL_Database_Password,
       database: "burgers_db"
   })
};
 
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;