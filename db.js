
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "da_m1_35",
    host: "localhost",
    database: "students",
    password: "12345",
    port: "5432"
})

module.exports = pool;