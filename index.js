const app = require("express")();

app.use("*", async (req, res) => {
  res.status(200).send("welcome to health checker");
});

app.listen(3000, () => {
  console.log("listening on 3000...");
});
