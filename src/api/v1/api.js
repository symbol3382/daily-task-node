const express = require("express");
const testController = require('../../controllers/testController');
const userController = require('../../controllers/userController');
const configMulter = require("../../config/multer.config");
var multer  = require('multer')

var upload = multer({ dest: configMulter.uploadPath })

router = express.Router();

/// test routes
router.get('/test', testController.test);
router.get('/test/database', testController.testDatabase);

router.post('/user',upload.single('avatar'), userController.create);

module.exports = router;