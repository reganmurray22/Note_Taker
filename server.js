var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/htmlroute")(app);
require("./routes/apiroute")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
}); 