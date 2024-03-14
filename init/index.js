const mongoose = require('mongoose');
const initData = require('./data.js');
const mongo_url = 'mongodb://127.0.0.1:27017/wanderlust';
const Listing = require('../models/listing.js');

async function main(){
    await mongoose.connect(mongo_url);
}

main().then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "65dec9794c9f9774ceb2e3bc"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();