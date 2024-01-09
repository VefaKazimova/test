const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const mongoose = require('mongoose')
const dotenv=require("dotenv")

dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/*+json' }))

const { Schema } = mongoose;
const userSchema = new Schema({
  image: { type: String, require: true },
  title: { type: String, require: true },
  description: { type: String, require: true },
});

const User = mongoose.model("User", userSchema);
app.post("/users", (req, res) => {
  try {
    const { image, title, description } = req.body;
    const user = new User({
      image,
      title,
      description,
    });
    user.save();
    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});


app.get("/users", async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
)
app.delete("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
  
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });
  

const PORT = process.env.PORT;
const DB = process.env.DB_URL;

mongoose.connect(DB).then(() => {
  console.log("Connected");
});

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});
