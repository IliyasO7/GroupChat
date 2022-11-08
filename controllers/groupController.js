const Group = require('../models/group');

const User = require('../models/user');

const Usergroups = require('../models/usergroups');


exports.getGroups = async(req,res,next)=>{

    try{
        let groups = await Usergroups.findAll({where:{userId:req.user.id}})
        let data = [];
        for(let i=0;i<groups.length;i++){
            let group = await Group.findByPk(groups[i].groupId);
            data.push(group);
        }
        if(!data){
            res.status(404).json({message:"no data found"})
        }
        res.status(200).json({data , message:"found groups"})

    }

    catch(error){
        res.status(500).json(err)
    }



}


exports.createGroup = async(req,res,next)=>{
    const {grp} = req.body;

    try{
        if(!grp){
            res.status(404).json({message:"no name entered"})
        }
        let data = await req.user.createGroup({name:grp},  {through:{isAdmin:true}});
        res.status(201).json({ message:'successfully created new group'})

    }
    catch(error){
        return res.status(500).json(err)

    }
}