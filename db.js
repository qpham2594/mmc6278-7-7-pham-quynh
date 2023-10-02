const mysql = require("mysql2");

const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const db = require('./db')


const config = process.env.JAWSDB_URL || {
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  database: process.env.npm_package_config_DB_NAME,
};
const db = mysql.createPool(config);


module.exports = db.promise();
