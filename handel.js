const handle = (req, res) => {
  console.log(req.app.locals.title);
  res.send("This is home Page ?.....");
};

module.exports = handle;
