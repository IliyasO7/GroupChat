const path = require('path');

const express = require('express');

const groupController = require('../controllers/groupController')
const usergroupcontroller = require('../controllers/usergroupcontroller');

const middlewareAuthentication = require('../middleware/auth');

const router = express.Router();


router.get('/getgroups',middlewareAuthentication.authentication,groupController.getGroups)

router.post('/createGroup', middlewareAuthentication.authentication, groupController.createGroup);

router.get('/fetchusers/:groupId',middlewareAuthentication.authentication, usergroupcontroller.fetchUsers)

router.post('/addUser',middlewareAuthentication.authentication, usergroupcontroller.addUser)

router.post('/makeAdmin', middlewareAuthentication.authentication, usergroupcontroller.makeAdmin)

router.get('/isAdmin/:groupId', middlewareAuthentication.authentication, usergroupcontroller.isAdmin)

router.post('/removeAdmin', middlewareAuthentication.authentication, usergroupcontroller.removeAdmin)

router.post('/removeUser',middlewareAuthentication.authentication, usergroupcontroller.removeUser)




module.exports = router;
