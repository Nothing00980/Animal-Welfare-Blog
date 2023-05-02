const bodyParser = require("body-parser");
const express = require("express")
const app = express();
const bodyparser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({extended:true}));

// // to set the html.
// app.set('view engine','html');
app.use('/pages',express.static('pages'));
app.use('/images',express.static('images'));
app.set('pages',path.join(__dirname,'pages'));


app.get("/",(req,res)=>{
    const params = {}
    res.status(200).sendFile(__dirname +"/pages/index.html");


});


app.listen(8080,()=>{
    console.log("server running at http://localhost:8080/");
})

