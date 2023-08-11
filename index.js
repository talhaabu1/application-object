const express = require("express");
const Port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to home page! 🙂 ♦ ");
});

app.listen(Port, () => {
  console.log("listening on port " + Port);
});
