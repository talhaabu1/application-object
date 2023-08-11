const express = require("express");
const Port = 3000;

const app = express();

app.get("/user/:id", (req, res) => {
  console.log(req.path);
  res.send("welcome to My burger hub . 🍔 🙋 ");
});

// serever start
app.listen(Port, () => {
  console.log("listening on port " + Port);
});
