// Import the express module
const express = require('express');

// Create an Express app
const app = express();

// Middleware: Log every request
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url} | Method: ${req.method}`);
    next(); // Pass control to the next middleware or route
});

// Route: Home page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Airbnb</h1>');
});
app.get("/add-home", (req,res, next)=>{
    res.send(
        `<h1> Register your home here: </h1>
        <form action = "/add-home" method = "POST">
           <input type = "text" name= "houseName"
           placeholder = "Enter the name of your house/"

           >
          
        </form>
        `

    )
})

app.post ("/add-home", (req, res, next)=>{
    res.send(
        `<h1> Home registered successfully </h1>
        <a href = "/">Go to home</a>
        `
    )
})


// Route: About page (optional for demo)
app.get('/about', (req, res) => {
    res.send('<h1>About Airbnb</h1>');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
