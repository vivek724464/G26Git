const express=require("express");
const router=express.Router();

router.get("/getBlogs", (req, res)=>{
    res.json({
        success:true,
        message:"blogs"
    })
})

module.exports=router;