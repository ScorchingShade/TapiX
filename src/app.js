const express = require('express');
//cors is used for cross origin requests
const cors = require('cors');
//mongoose is a mongodb client for express
const mongoose = require('mongoose')

//to process are env file
require('dotenv').config();

//initialise express
const app = express();

//|| parses the port
const port = process.env.PORT || 8080;



app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

//connection establishment parser
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})

const storeRouter = require('./routes/store');
app.use('/stores', storeRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})