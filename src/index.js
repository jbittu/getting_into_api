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

app.get("/api/mentor", async (req, res) => {
  try {
    const mentorData = await Mentor.find();
    res.status(200).send(mentorData);
  } catch (err) {
    res.status(400).send(err);
  }
});
app.get("/api/mentor/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const mentorData = await Mentor.find({ _id });
    res.status(200).send(mentorData);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.patch("/api/mentor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await Mentor.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).send(updateData);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on PORT :${port}`);
});
