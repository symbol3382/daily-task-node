const User = require("../models/user.model");
const modelConstants = require("../constants/modelConstants");

exports.create = (req, res, next) => {

    let result = null;

    const dataToInsert = {
        firstName: "Gourav",
        lastName: "Verma",
        userRole: modelConstants.User.userRole.admin,
    }
    console.log("data to insert: ", dataToInsert);
    result = User.build(dataToInsert);

    result.save();
    
    return res.status(200).json({
        firstName: "Gourav",
        lastName: "Verma",
        email:"symbol2.286@gmail.com",
        userRole: "admin",
        result,
        dataToInsert
    });
}