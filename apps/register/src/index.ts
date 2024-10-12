import express from 'express'

const app=express()

app.get("/",(req,res)=>{
    res.json({
        message:"hello world"
    })

})

app.listen(1231,()=>{
 console.log("server has started")
})