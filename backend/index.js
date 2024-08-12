const express = require('express');
const userRoutes = require('./Routes/userRoute.js'); 
const authRoutes = require ('./Routes/authRoute.js');

const { mongoConnect } = require('./config/db.js')
require('dotenv').config() 
const app = express();
const http = require('http').createServer(app)
mongoConnect()


app.use(express.json())
app.listen(3000, ()=>{
    console.log('server listening on port 3000');
})

// app.use('/backend/user',userRoutes)
// app.use('/backend/auth',authRoutes)