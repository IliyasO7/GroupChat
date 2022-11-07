
const Chat = require('../models/chatting')

const User = require('../models/user');

exports.getMessages = async(req,res,next)=>{
  let msgId = req.query.msg;

  try{
    const data = await req.user.getChats();

    console.log(data.length);

    let index = data.findIndex(chat => chat.id == msgId)

    let messagestosend = data.slice(index+1);




    let username = await req.user.username;

    console.log(username.split(' ')[0])
    res.status(200).json({messagestosend, username})

  }
  catch(error){
    res.status(500).json(error);
  }

}

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
  
  
  
  
  