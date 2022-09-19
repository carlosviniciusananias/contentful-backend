import express from "express";
import getProducts from "../services/products";

const route = express.Router();

route.get("/products", async (req, res) => {
  const data = await getProducts();

  res.send(data);
});

export default route;
