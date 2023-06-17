const express = require('express');
const cors = require('cors');

const { connectToAtlasDB } = require('./db');
const routes = require('./routes.js');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

connectToAtlasDB();

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server started & listening on port ${port}`);
});
