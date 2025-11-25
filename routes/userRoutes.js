const express=require("express");
const router=express.Router();

router.get("/getUsers", (req, res)=>{
    res.json({
        success:true,
        message:"users"
    })
})

module.exports=router;