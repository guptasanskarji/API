const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const connect = require('./Database/mongodb');

dotenv.config();

const app = express();

// Connect to MongoDB
connect.createconnection();

app.use(bodyParser.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
