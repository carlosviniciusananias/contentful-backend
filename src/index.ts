import express, { Express, Request, Response } from "express";
import router from "./routes/route";

const PORT = process.env.PORT || 5000;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("hello, welcome to my service");
});

app.use("/api", router);

app.use((req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log("server start");
});
