users=[];

const getAllUser=(req,res)=>{
    res.status(200).send(users);
}

const createNewUser=(req,res)=>{
    const user= req.body
    users.push(user);
    res.status(201).send({message:"User Addes Successfully"});
}
module.exports={
    getAllUser,
    createNewUser
}