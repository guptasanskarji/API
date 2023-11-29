const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const connect = require('./Database/mongodb');

dotenv.config();

const app = express();

// Connect to MongoDB
connect.createconnection();

app.use(bodyParser.json());

// Routes
app.use('/api/items', itemRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
