const express = require("express");
const { getProducts } = require("../services/products");

const router = express.Router();

router.get("/products", async (req, res) => {
  const data = await getProducts();

  res.send(data);
});

module.exports = router;
