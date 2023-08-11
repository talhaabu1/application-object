// cover application object = app.all - app.enbale - app.enbaled - app.disable - app.disabled - app.set - app.get - app.param - req.path

const express = require("express");
const Port = 3000;

const app = express();

// app.all any request type get put pathc delete or any
// app.all("/", (req, res) => {
//   res.send("welcome to home page! 🙂 ♦ ");
// });
// _____E_______N_______D________

// enable any Application Settings disable any application settings ...!
// app.enable("case sensitive routing");
// app.disable("case sensitive routing");
// _____E_______N_______D________ //

// enable and disable any Application Settings cheack return true or false ...//
// app.enabled("case sensitive routing")
// app.disabled("case sensitive routing")
// _____E_______N_______D________ //

// sme local storage app.get and app.set simply..
app.set("title", "My Site");
app.get("title");
// => "My Site"
// _____E_______N_______D________ //

// butifully function app.param any parameters smae "user/:id" id call this function any work // ...
// app.param("id", (req, res, next, id) => {
//   const user = {
//     userID: id,
//     name: "talha",
//   };
//   req.userDetails = user;
//   next();
// });
// _____E_______🔚 _______D________ //

app.get("/user/:id", (req, res) => {
  console.log(req.path);
  res.send("welcome to home page! 🙂 ♦ ");
});

// serever start
app.listen(Port, () => {
  console.log("listening on port " + Port);
});
