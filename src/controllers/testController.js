
exports.test = (req, res, next) => {
    return res.send('hello');
}

exports.testDatabase = (req, res, next) => {
    return res.json({message: "Database task executed successfully"});
}