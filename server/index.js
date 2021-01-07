require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
//const { MONGO_URI } = require('./config');

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to Mongo Database."))
  .catch((err) => console.log(err));

//BodyParser Middleware, for use of JSON in body
app.use(express.json());

// skapa statisk sökväg, så den kan komma åt filer i public-katalogen
app.use(express.static(path.join(__dirname, "public")));

// Routes
const courseRoutes = require("./routes/courses.js");
app.use("/courses", courseRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
