import express from 'express'
const app=express();
const port =process.env.PORT||4000
import 'dotenv/config'
app.get("/",(req,res)=>{
    res.send("Hello world");
})
app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${port}`);
    
})