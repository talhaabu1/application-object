const express = require("express");
const Port = 3000;

const app = express();

// app.engine use not something
app.set("view engine", "ejs");
// _______E___________N____________D________ //

// one main route or call any function type supose get and put and patch and delete// ____📏 ____
app
  .route("/user/information")
  .get((req, res) => {
    // app.render functon
    res.render("pages/about");
  })
  .put((req, res) => {
    res.send("welcome to My burger Shop . 🛍  🙋 ,");
  })
  .post((req, res) => {
    res.send("welcome to My burger Office . 🏢  🙋 ");
  });
// _______E___________N____________D________ //

app.get("/", (req, res) => {
  console.log(req.path);
  res.send("welcome to My burger hub . 🍔 🙋 ");
});

// serever start
app.listen(Port, () => {
  console.log("listening on port " + Port);
});
