const ToDoModel=require('../models/ToDoModel')

module.exports.getToDo=async(req,res)=>{
    const toDo=await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo=async(req,res)=>{
    const {text,time}=req.body
    ToDoModel
    .create({text,time})
    .then((data)=>{
        console.log('Added Successfully...')
        console.log(data)
        res.send(data)
    })
}

module.exports.updateToDo=async(req,res)=>{
    const {_id,text,time}=req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text,time})
    .then(()=>res.send("Updated Successfully..."))
    .catch((err)=>console.log(err))
}

module.exports.deleteToDo=async(req,res)=>{
    const {_id}=req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("UDeleted Successfully..."))
    .catch((err)=>console.log(err))
}