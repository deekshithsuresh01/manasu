const express=require('express');
const app=express();
const connecttomongo=require('./db');
const cors=require('cors')
const errorMiddleware = require('./middlewares/error.js')
app.use(cors())
connecttomongo();
app.use(express.json());
app.use('/api',require('./routes/user'));
app.use('/api',require('./routes/collection.js'));
app.use('/api',require('./routes/employee.js'));
app.use('/api',require('./routes/auth.js'));
app.use(errorMiddleware);
module.exports=app;
