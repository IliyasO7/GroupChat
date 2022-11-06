const Sequelize = require('sequelize');


//require('dotenv').config()



const sequelize = new Sequelize('groupchatapp','root','Iliyastechs@ngli10', {

    dialect: 'mysql',
    host: 'localhost'
    });



    //connecting sequelize to db create connection pool

   
module.exports = sequelize;