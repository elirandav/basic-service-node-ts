var express = require('express');
var router = express.Router();
import * as controller from '../modules/user/UserController'
router.get('/users', controller.getUsers)
router.post('/users', controller.createUser)

module.exports = router;