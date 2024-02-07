
const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

async function connect() {
    if (global.connection && global.connection.state !== "disconnected")
        return global.connection;

    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "terceqsedis",
        database: "db_sidequest",
       
        });
    global.connection = connection;     
    return connection;
}

module.exports = { connect };

