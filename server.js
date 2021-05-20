let express = require("express");
let app = express();
//static html
app.use(express.static(__dirname + "/static"));
//css
app.use(express.static(__dirname + "/css"))
//images
app.use(express.static(__dirname + "/images"))

//port
app.listen(8000, function() {
    console.log("Listening to 8000");
});