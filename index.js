var cors = require("cors");
const express = require("express");
const router = require("./src/routes/routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("server start" + PORT + "");
});
