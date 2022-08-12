// use the express package NOT SURE WHAT ITS FOR
var express = require("express");
// create an an express app instance
var app     = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// function that I think is callable from client side

/* ARGS:
 *      req - request body, contains request info
 *      res - response body, handles response function
 *            i.e. .json() which returns json data
 */

// this particular function 
// makes the express app at the specified url
app.get("/", (req, res, next) => {
    res.send("Hello World");
 //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
