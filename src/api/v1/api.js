const express = require("express");
router = express.Router();
const testController = require('../../controllers/testController');
const userController = require('../../controllers/userController');

/// test routes
router.get('/test', testController.test);
router.get('/test/database', testController.testDatabase);

router.get('/user', userController.create);

module.exports = router;