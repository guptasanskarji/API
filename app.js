const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const connect = require('./Database/mongodb');

dotenv.config();

const app = express();

// Connect to MongoDB using mongoose require from "./database/mongodb.js"
connect.createconnection();

app.use(bodyParser.json());

// Routes
// NOte:  I Created 3 different API's for 3 different models and each API perform get, post and put method to retrieve, store and update data in database
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
