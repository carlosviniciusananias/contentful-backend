import express from "express";
// import cors from "cors";
import route from "./routes/route";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello service");
});

app.use("/api", route);

app.listen(PORT, () => {
  console.log("server start");
});
