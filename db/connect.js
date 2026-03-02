const mongoose = require('mongoose');

 async function ConnectDb(){
    console.log('db connecting');
    await mongoose.connect(process.env.MONGO_URL);
    console.log('db connected');
}




module.exports = ConnectDb;