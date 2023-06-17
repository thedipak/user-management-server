const { MongoClient } = require("mongodb");

require('dotenv').config();

const uri = "mongodb+srv://MernStack:MernStack@cluster0.wa0b8qp.mongodb.net/UsersDB?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function connectToAtlasDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
}

module.exports = { connectToAtlasDB, client };
