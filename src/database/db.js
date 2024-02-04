
const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

async function connect() {
    if (global.connection && global.connection.state !== "disconnected")
        return global.connection;

    const connection = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    });
    global.connection = connection;
    return connection;
}

module.exports = { connect };
