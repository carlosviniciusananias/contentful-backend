import express from "express";
import route from "./routes/route";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello, welcome to my service");
});

app.use("/api", route);

app.use((req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log("server start");
});
