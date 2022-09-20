var cors = require("cors");
const express = require("express");
const router = require("./src/routes/routes");

const PORT = process.env.PORT || 3000;

const app = express();

const http = require("http");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

http.createServer(app).listen(4000);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("server start: " + PORT + "");
});
