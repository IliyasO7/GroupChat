
const express = require('express');

const router = express.Router();


const chatController = require('../controllers/chatController')
const middlewareAuthentication = require('../middleware/auth');




router.post('/allMsg/:groupId',middlewareAuthentication.authentication, chatController.postMessage)

router.get('/getMsg/:groupId', middlewareAuthentication.authentication, chatController.getMessages)

module.exports = router;