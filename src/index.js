const express = require('express')
const app = express();
const db = require("./config/db")
const router = require("./routes/student.route")
const bodyParser = require("body-parser");
const { default: mongoose } = require('mongoose');
const port = 8080
app.use(express.urlencoded());

mongoose.connect(db.url,
{ useNewUrlParser: true, useUnifiedTopology: true })

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.use("/",router);

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   