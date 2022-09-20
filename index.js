const express = require("express");
const router = require("./src/routes/route");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("server start");
});
