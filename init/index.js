const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

//connet DB
const MONGO_DB = "mongodb://127.0.0.1:27017/projectDB";

main()
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_DB);
}

//create a function
const initDB = async () =>{
    //completely clean
    await Listing.deleteMany({});
    //insert DATA
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");

}

initDB();