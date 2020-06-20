const path = require("path");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
require("dotenv").config();

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});


//database configuration
const db = require("./config/db").MongoURI;

mongoose.connect(db, {
	useNewUrlParser: true, useUnifiedTopology: true,
	useCreateIndex: true, useFindAndModify: false
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


//allow cross-origins
app.use(cors())
//avoid deprecation error
mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({ extended: true }));
//parse the application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/api/users", require("./routes/users"));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));


// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	
	// Set static folder
	app.use(express.static("frontend/build"));
	
	// index.html for all page routes    html or routing and naviagtion
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	});
	
}
