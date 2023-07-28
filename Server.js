const express=require('express')
const mongoose=require('mongoose')
const route=require('./routes/ToDoRoutes')
const cors=require('cors')

require('dotenv').config()

const app=express()
const PORT=process.env.port||5000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`Connected to MongoDb....`))
.catch((err)=>console.log(err))

app.use(route)

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})