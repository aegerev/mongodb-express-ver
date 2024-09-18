const express = require("express");
const mongoose = require("mongoose");
const app = express();

// MongoDB connection
const dbURI =
'mongodb+srv://alexandersegerev:NewAtlantica2024@movie-reviews.rsclr.mongodb.net/'; // Connection URI

// Connect to MongoDB
async function connectToDB() {
    try {
        const conn = await mongoose.connect(dbURI);
        console.log("Connected To Database");
    } catch (error) {
        return new Error(
            500,
            `An error occurred while connecting to MongoDB - ${error}`
        );
    }
}

connectToDB();

// Define routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});