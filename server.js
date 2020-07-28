/* const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routers/api/users");
const students = require("./routers/api/student");
const room = require("./routers/api/room");
const profile = require("./routers/api/profile");
const staff = require("./routers/api/staff");
const path = require("path");

const port = process.env.PORT || 5000;
const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 //DB Config
//const db = require("./config/keys").mongoURI;

// connect to mongoDB
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hostel", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/student", students);
app.use("/api/room", room);
app.use("/api/staff", staff);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}



app.listen(port, () => console.log(`Server running on port ${port}`));
 */
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://pps:Abcd1234@ds013951.mlab.com:13951/heroku_hl5r4wzp");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
