const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
console.log({
    databaseName: dbConfig.db.DB, userName: dbConfig.db.USER,password: dbConfig.db.PASSWORD
}, {
    host: dbConfig.db.HOST,
    dialect: dbConfig.db.dialect,
    pool: {
        max: dbConfig.db.pool.max,
        min: dbConfig.db.pool.min,
        acquire: dbConfig.db.pool.acquire,
        idle: dbConfig.db.pool.idle,
    },
})
const sequelize = new Sequelize(dbConfig.db.DB, dbConfig.db.USER, dbConfig.db.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.db.dialect,
    pool: {
        max: dbConfig.db.pool.max,
        min: dbConfig.db.pool.min,
        accuire: dbConfig.db.pool.accuire,
        idle: dbConfig.db.pool.idle,
    },
});


const db = {
    sequelize,
    Sequelize,
}

db.users = require("./user.model")(sequelize, Sequelize);   

module.exports = db;