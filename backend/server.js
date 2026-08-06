const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const routes = require("./routes");

app.use(
  cors({
    origin: (process.env.FRONTEND_URL || "*").split(","),
  }),
);

app.use(express.json());

app.get("/ping", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});