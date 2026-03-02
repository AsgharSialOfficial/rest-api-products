
const mongoose = require('mongoose');
const Product = require('./models/products');
require('dotenv').config();
const productJson = require('./products.json')


const start= async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URL);


        await Product.create(productJson);
        console.log('sucess');



    }catch(error){
        console.log(error);
    }
}

start();