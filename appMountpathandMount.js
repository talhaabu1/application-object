const express = require("express");
const Port = 3000;

const app = express();
// Multiple routes call express
const admin = express();
// _______E___________N____________D________

// On MOunt event traggered
// admin.on("mount", function (parent) {
//   console.log("Admin Mounted");
//   console.log(parent); // refers to the parent app
// });
// _______E___________N____________D________

// admin child routes
admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath);
  res.send("welcome to admin dashboard ! 😥 !!");
});

admin.get("/product", (req, res) => {
  console.log(admin.mountpath);
  res.send("welcome to admin product ! 🖤   !!");
});
// _______E___________N____________D________

app.get("/", (req, res) => {
  res.send("welcome to home page! 🙂 ♦ ");
});

app.get("/all", (req, res) => {
  res.send("welcome to home all! 🌷  ♦ ");
});

// admin main routes call admin
app.use("/admin", admin);
// _______E___________N____________D________

app.listen(Port, () => {
  console.log("listening on port " + Port);
});
