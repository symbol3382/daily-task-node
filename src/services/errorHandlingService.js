const Sequelize = require("sequelize");

exports.returnProperErrorMessage = (e, res) => {
    if (e instanceof Sequelize.ValidationError) {
        let errors = {};
        e.errors.forEach(element => {
            errors[element.path] = element.message
        });
        return res.status(422).json({ 
            errors    
        });
    }
    return res.status(500).json({
        message: "Internal Server Error",
        trace: e
    })
}