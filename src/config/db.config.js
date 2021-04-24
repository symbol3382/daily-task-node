const drivers = {
    mysql: {
        HOST: process.env.DR_DB_HOST || 'localhost',
        USER: process.env.DR_DB_USERNAME || 'root',
        PASSWORD: process.env.DR_DB_PASSWORD || '',
        DB: process.env.DR_DB_NAME || 'dr',
        dialect: "mysql",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        }
    }
}

module.exports = {
    db: drivers.mysql
}