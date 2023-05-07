const bodyParser = require("body-parser");
const express = require("express")
const app = express();
const bodyparser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({extended:true}));

// // to set the html.
// app.set('view engine','html');
app.use('/docs',express.static('pages'));
app.use('/images',express.static('images'));
app.set('docs',path.join(__dirname,'docs'));


app.get("/",(req,res)=>{
    const params = {}
    res.status(200).sendFile(__dirname +"/docs/index.html");


});


app.listen(8080,()=>{
    console.log("server running at http://localhost:8080/");
})

