var express = require ("express");
var app = express();

var PORT = process.env.PORT || 8080;


app.unsubscribe(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./add/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});