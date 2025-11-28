const User=require("../model/userSchema");

const getSingleUser=async(req, res)=>{
    return res.json({
        success:"true",
        message:"single User"
    })
}

module.exports={getSingleUser}
