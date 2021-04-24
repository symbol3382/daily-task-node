const express = require("express");
router = express.Router();
const testController = require('../../controllers/testController');

/// test routes
router.get('/test', testController.test);
router.get('/test/database', testController.testDatabase);

module.exports = router;