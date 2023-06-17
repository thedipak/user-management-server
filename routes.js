const express = require('express');
const { client } = require('./db');

const router = express.Router();

// GET /users
router.get('/getUser', async (req, res) => {        
    try {
        const db = client.db('UsersDB');
        const users = [];
        await db.collection('UsersCollection').find().forEach(user => users.push(user))
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST /users
router.post('/setUser', async (req, res) => {
    try {
        const db = client.db('UsersDB');
        const newUser = req.body; // Assuming you have body-parser or a similar middleware to parse the request body
        const result = await db.collection('UsersCollection').insertOne(newUser);
        res.json(result.ops[0]);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
