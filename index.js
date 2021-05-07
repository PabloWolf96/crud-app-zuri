require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const { Schema } = mongoose;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database is ready"))
  .catch((err) => console.log(err));

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  country: String,
  number: String,
  job: String,
  faveFood: String,
  faveDrink: String,
  faveShow: String,
  hobbies: [String],
});

const user = mongoose.model("name", userSchema);
app.post("/user", (req, res) => {
  user
    .create({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      country: req.body.country,
      number: req.body.number,
      job: req.body.job,
      faveFood: req.body.faveFood,
      faveDrink: req.body.faveDrink,
      faveShow: req.body.faveShow,
      hobbies: req.body.hobbies,
    })
    .then((doc) =>
      res
        .status(200)
        .json({ message: "new user created successfully", data: doc })
    )
    .catch((err) => res.status(500).json({ message: err }));
});
app.get("/users", (req, res) => {
  user
    .find({})
    .then((doc) => res.status(200).json({ message: "success", data: doc }))
    .catch((err) => res.status(500).json({ message: err }));
});
app.get("/user/:id", (req, res) => {
  user.findById(req.params.id, (err, doc) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!doc) {
      return res.status(404).json({ message: "user not found" });
    } else {
      return res.status(200).json({ message: "success", data: doc });
    }
  });
});

app.put("/user/:id", (req, res) => {
  user.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, doc) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!doc) {
      return res.status(404).json({ message: "user not found" });
    } else {
      return res.status(200).json({ message: "user successfully updated" });
    }
  });
});
app.delete("/user/:id", (req, res) => {
  user.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!doc) {
      return res.status(404).json({ message: "user not found" });
    } else {
      return res.status(200).json({ message: "user deleted successfully " });
    }
  });
});
app.listen(PORT, () => console.log("Server is running..."));
