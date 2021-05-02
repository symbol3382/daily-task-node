const User = require("../models/user.model");
const modelConstants = require("../constants/modelConstants");
const errorHandlingService = require("../services/errorHandlingService");

exports.create = async (req, res, next) => {
    try {
        
        console.log("in controller");
        return res.json({
            req: req.body,
            reqFile: req.file
        })
        let result = null;

        const dataToInsert = {
            firstName: "Gourav",
            lastName: "Verma",
            userRole: modelConstants.User.userRole.admin,
            email: "symbol2.286@gmail.com",
        }
        console.log("data to insert: ", dataToInsert);

        result = User.build(dataToInsert);

        await result.save();

        return res.status(200).json({
            ...dataToInsert,
            result,
            dataToInsert
        });
    } catch (e) {
        return errorHandlingService.returnProperErrorMessage(e, res);
    }
}