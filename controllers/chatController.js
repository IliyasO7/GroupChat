
const Chat = require('../models/chatting')

const User = require('../models/user');

exports.getMessages = async(req,res,next)=>{
  let msgId = req.query.msg;
  let groupId = req.params.groupId;

  try{
   // const data = await req.user.getChats();

   const data =await Chat.findAll({where:{groupId}});


    console.log(data.length);

    let index = data.findIndex(chat => chat.id == msgId)

    let messagestosend = data.slice(index+1);
    //const name = req.user.username;

    let arr = [];

    for(let i = 0 ; i<messagestosend.length ; i++){

        const user = await User.findByPk(messagestosend[i].userId);
       
        

        const details = {
            id :messagestosend[i].id ,
            groupId:messagestosend[i].groupId,
            name:user.username,
            message:messagestosend[i].message,
            createdAt:messagestosend[i].createdAt
        }
       

        arr.push(details)
    }

    res.status(200).json({arr})




    //let username = await req.user.username;

    //console.log(username.split(' ')[0])
    //res.status(200).json({messagestosend, username})

  }
  catch(error){
    res.status(500).json(error);
  }

}

exports.postMessage = async(req,res,next)=>{
    const{message} = req.body;
    const groupId = req.params.groupId;
  
    try{
      if(!message || !groupId){
        return res.status(400).json({message:'nothing entered'})
      }
      else{
        const data = await req.user.createChat({message, groupId})
        
        const name =req.user.username

        const arr = []

        const details = {
          id: data.id,
          groupId: data.groupId,
          name:req.user.username,
          message: data.message,
          createdAt: data.createdAt
        }

        arr.push(details);



        res.status(200).json({arr, messages: 'successfully added message'})
  
      }
    
    
  
    }
  
    catch(error){
      res.status(500).json(error);
    }
  
  }
  
  
  
  
  