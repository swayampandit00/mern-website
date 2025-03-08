//require('dotenv').config();
const mongoose = require("mongoose");

//const URI ="mongodb://127.0.0.1:27017/mern_admin"
const URI = process.env.DB_URI;
//const URI = "mongodb+srv://pandit12:hello@cluster0.jb4qo.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
//const URI = 'mongodb+srv://swayampandit00:Swayam@123@cluster0.jb4qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB Connected');
    }catch (error){
        console.error("database connection failed");
        process.exit(0)
    }
};
module.exports = connectDb;

//mongodb+srv://swayampandit00:<db_password>@cluster0.jb4qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//mongodb+srv://pandit12:hello@cluster0.jb4qo.mongodb.net/mern-admin?retryWrites=true&w=majority&appName=Cluster0