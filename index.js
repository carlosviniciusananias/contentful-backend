const express = require("express");
const router = require("./src/routes/route");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello, welcome to my service");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("server start");
});
