const express = require('express');
const userRouter = express.Router();



// Route: Home page
userRouter.get('/', (req, res) => {
    res.send(`<h1>Welcome to Airbnb</h1>
        <a href="/host/add-home"> 
        `);
});

module.exports = userRouter;