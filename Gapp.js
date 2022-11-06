const path = require('path');
//const fs =require('fs');
const bcrypt = require('bcrypt');

//const dotenv = require('dotenv')





const express = require('express'); //importing express module
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database'); //pool that allows use to use connection to db

const User = require('./models/user');


const Forgotpassword = require('./models/forgotPassword');



const cors = require('cors');

//const accessLogStream = fs.createWriteStream('access.log', {flag: 'a'})


const app = express();  // using func of express to handling things for us or showing a way 
//dotenv.config();



app.use(cors());



const userRoutes = require('./routes/users');
const ForgotRoutes = require('./routes/password');

app.use(express.json())//instead of body parson json

//app.use(bodyParser.urlencoded({ extended:false })); //registers a middleware and does body parsing for us. and has a next funciton.///plugging into middlewares.

//app.use(express.static(path.join(__dirname,'public')));




app.use('/user',userRoutes);

app.use('/pass',ForgotRoutes );



User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User);


/*
app.use((req,res)=>{
    res.sendFile(path.join( __dirname, `public/${req.url}`))
})*/


//app.use(errorController.get404);




sequelize.sync().then(result =>{
    console.log('Server started at 7000');
    app.listen(process.env.PORT || 7000); 
}).catch(err=>{
    console.log(err);
});                                                            
