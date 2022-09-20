import { Router } from "express";
import getProducts from "../services/products";

const router = Router();

router.get("/products", async (req, res) => {
  const data = await getProducts();

  res.send(data);
});

export default router;
