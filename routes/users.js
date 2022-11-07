const path = require('path');

const express = require('express');

const userController = require('../controllers/users');
const chatController = require('../controllers/chatController')
const middlewareAuthentication = require('../middleware/auth');

const router = express.Router();


router.post('/signup', userController.signup)
router.post('/login',userController.login)

router.post('/allMsg',middlewareAuthentication.authentication, chatController.postMessage)

router.get('/getMsg', middlewareAuthentication.authentication, chatController.getMessages)

module.exports = router;


//router.post('/login',userController.login)
//router.get('/user/signup',userController.signedUsers);
/*
router.get('/user/getUser',authenticateMiddleware.authentication,userController.getUsers);

//router.get('/user/getUser',authenticateMiddleware.authentication,userController.getUsers);

router.post('/user/addUser',authenticateMiddleware.authentication,userController.postAddUser);

router.delete('/user/deleteUser/:userId',authenticateMiddleware.authentication,userController.deleteUser);





router.post('/getExpenses/:pageNo',userAuthentication.authentication ,expenseController.getExpenses);

router.post('/addExpense',userAuthentication.authentication,expenseController.addExpenses);

router.delete('/deleteExpense/:userId',userAuthentication.authentication,expenseController.deleteExpenses);
*/











