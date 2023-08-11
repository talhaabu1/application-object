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

app.get("/home", (req, res) => {
  res.send("welcome to home page! 🙂 ♦ ");
});

// serever start
app.listen(Port, () => {
  console.log("listening on port " + Port);
});
