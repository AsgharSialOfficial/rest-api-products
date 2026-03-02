const express = require('express');
const app = express();
const ConnectDb = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();

const products_Routes = require('./routes/products')

app.get("/", (req,res)=>{
    res.send(' I am on main page');


})
app.use('/api/products', products_Routes);

app.listen(process.env.PORT, async ()=>{
   
    await ConnectDb();
     console.log('server is live');
});

