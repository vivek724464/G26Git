const express=require("express");
const router=express.Router();
const {getSingleUser}=require("../controller/userController");

router.get("/getUsers", (req, res)=>{
    res.json({
        success:true,
        message:"users"
    })
})

router.get("/getSingleUser",getSingleUser);

module.exports=router;