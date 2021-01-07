require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
//const { MONGO_URI } = require('./config');

// atlas fBfHdE2hLbu7WNz
//mongodb+srv://bjorn:<password>@icecluster.fr0sf.mongodb.net/<dbname>?retryWrites=true&w=majority

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
const postRoutes = require("./routes/api/posts.js");
//allting som går till api/posts sätts till postRoutes
app.use("/api/posts", postRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server run at port ${port}`));
