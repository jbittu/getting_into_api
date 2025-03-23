require("./dB/connection");
const Mentor = require("./models/mentor");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.post("/api/mentor", async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    const craetdata = await mentor.save();
    res.status(201).send(craetdata);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on PORT :${port}`);
});
