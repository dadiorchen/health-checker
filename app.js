const app = require("express")();

app.use("*", async (req, res) => {
  res.status(200).send("welcome to health checker");
});

module.exports = app;
