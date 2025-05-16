import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "success" });
});
app.listen(3000, () => console.log("server running on port: 3000"));
