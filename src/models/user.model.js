const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const User = sequelize.define("user", {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING, },
    userRole: { type: DataTypes.STRING, },
    email: { 
        type: DataTypes.STRING, 
        unique: true,
        allowNull:false,
        validate: {
            isEmail: true,
        }
     },
});

module.exports = User;