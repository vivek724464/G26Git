const express=require("express");
const userRouter=require("./routes/userRoutes");
const blogRouter=require("./routes/blogRoutes");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("api/user", userRouter);

app.use("/api/blogs", blogRouter);
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