const express = require('express')
const mongoose = require('mongoose');
const router = require('./controller/cont');
const app = express();

mongoose.connect('mongodb+srv://divya:123@div.47bqo1v.mongodb.net/?retryWrites=true&w=majority&appName=div')
app.use(express.json())

app.use('/',router)

app.listen(80, ()=>{
    console.log(`Connection Established`)
})