const express=require("express");
const mongoose=require("mongoose");
const userRouter=require("./routes/userRoutes");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("api/user", userRouter);
app.get("/", (req, res)=>{
    res.json("ok")
})
mongoose.connect("mongod://127.0.0.1:271017/testing")
.then(()=>{
    console.log("mongoDB connected");
})
app.listen(5555, ()=>{
    console.log("server connected");
})