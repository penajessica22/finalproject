const express = require("express");
const app = express();
const users = require("./routes/users");
const port = process.env.PORT || 4001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("welcome to our app"));

app.use("/api/users", users);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
