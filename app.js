const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000 ;
const { MongoClient } = require('mongodb');

MongoClient.connect(process.env.USER_DB_URI)
    .then(client => {
        const db = client.db("UsersDB");
        const UsersCollection = db.collection("UsersCollection");
        app.use(cors());
        app.use(express.json());

        app.get("/", (req, res) => {
            res.send("WELCOME HOME 2!")
        });

        app.get("/getUser", (req, res) => {
            const users = [];
            UsersCollection
                .find()
                .forEach(user => users.push(user))
                .then(() => res.status(201).json(users))
                .catch(err => console.log(err));
        });

        app.post("/setUser", (req, res) => {
            console.log("req", req);
            UsersCollection
                .insertOne(req.body)
                .then(result => res.status(200).json({message: "details added successfully"}))
                .catch(err => console.log(err));
        });

        app.get("*", (req, res) => res.send("Page not found, please check URL"))
        app.listen(port, () => console.log("listening on port " + port));
    })
    .catch(err => console.log(err));



