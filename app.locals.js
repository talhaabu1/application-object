const express = require("express");
const handle = require("./handel");

const Port = 3000;
const app = express();

// use -global variable
app.locals.title = "MY APP";

// pass any function
app.get("/", handle);

app.listen(Port, () => {
  console.log("listening on port " + Port);
});
