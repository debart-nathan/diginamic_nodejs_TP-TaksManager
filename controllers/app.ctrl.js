
const {resolve} = require("path");

exports.homeCtrl=(req,res)=>{
  res.sendFile(resolve('public',"home.html"))
}

exports.userTasksListCtrl=(req,res)=>{
  res.sendFile(resolve('public','html','userTasksList.html'));
}

exports.userTaskCreatorCtrl=(req,res)=>{
  res.sendFile(resolve('public','html','userTaskCreator.html'));
}

exports.userTaskDetailsCtrl=(req,res)=>{
  res.sendFile(resolve('public','html',"userTaskDetails.html"));
}


