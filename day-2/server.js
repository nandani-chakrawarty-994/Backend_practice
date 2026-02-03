

const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/about',(req,res)=>{
    res.send('this is a about')
})

app.get('/home',(req,res)=>{
    res.send('this is a home')
})

app.listen(3000, (req,res) => {
    console.log('server started on port 3000')
})