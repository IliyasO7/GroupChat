
const Chat = require('../models/chatting')

const User = require('../models/user');

exports.postMessage = async(req,res,next)=>{
    const{message} = req.body;
  
    try{
      if(!message){
        return res.status(400).json({message:'nothing entered'})
      }
      else{
        const data = await req.user.createChat({message})
  
        res.status(200).json({data, messages: 'successfully added message'})
  
      }
    
    
  
    }
  
    catch(error){
      res.status(500).json(error);
    }
  
  }
  
  
  
  
  