const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

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


module.exports = {
    sequelize,
};