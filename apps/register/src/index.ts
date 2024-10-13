import express from "express"
import cors from "cors"
import signuproute from "./router/route"

const app=express()
const port=process.env.PORT || 8000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
app.get("/",(req,res)=>{
    res.json({
        message:"hello world"
    })

})

app.use('/api/v1/',signuproute)
// app.post('api/v1')
app.listen(port,()=>{
 console.log("server has started")
})