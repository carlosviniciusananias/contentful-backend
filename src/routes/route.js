const express = require("express");
const services = require("../services/products");

const router = express.Router();

router.get("/products", async (req, res) => {
  const data = await services.getProducts();

  res.send(data);
});

module.exports = router;
