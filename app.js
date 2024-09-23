const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

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


//create a basic API
app.get("/",(req,res) =>{
    res.send("Hi, I'm root");
})

//create new route
app.get("/testListing", async (req,res)=>{
    //create a new variable
    let sampleListing = new Listing({
        title: " My new Villa",
        description : "By the Beach",
        price : 2000,
        location : "Goa",
        country: "India"
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("Succeefully testing");
});

app.listen(8080, () =>{
    console.log("App is Listen");
})
