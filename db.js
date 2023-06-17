const { MongoClient } = require("mongodb");

require('dotenv').config();

const uri = process.env.USER_DB_URI;

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
