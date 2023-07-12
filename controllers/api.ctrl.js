const {resolve} = require("path");
const db = require("../db/db.json")
const {writeFileSync} = require("fs")

exports.getUsersCtrl= (req,res)=>{
    res.send(db.users);
}
