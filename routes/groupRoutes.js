const path = require('path');

const express = require('express');

const groupController = require('../controllers/groupController')
const usergroupcontroller = require('../controllers/usergroupcontroller');

const middlewareAuthentication = require('../middleware/auth');

const router = express.Router();


router.get('/getgroups',middlewareAuthentication.authentication,groupController.getGroups)

router.post('/createGroup', middlewareAuthentication.authentication, groupController.createGroup);

router.get('/fetchusers/:groupId',middlewareAuthentication.authentication, usergroupcontroller.fetchUsers)

module.exports = router;
