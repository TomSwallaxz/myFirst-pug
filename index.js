/**
 //  * Required External Modules
//  */
const express = require("express");
const path = require("path");
const bodyParser = require("body-Parser");

// /*** App Variables */
const app = express();
const port = process.env.path | 4000;

// /**
//  *  App Configuration
//  */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// /**
//  * Routes Definitions
//  */

app.get("/", (req, res) => {
  //res.status(200).send("Hello World");
  res.render("index");
});

app
  .route("/user")
  .get((res, res) => {
    res.render("pageNotFound");
    // res.setEncoding("404 Page not Found");
  })

  .post((req, res) => {
    res.render("user", {
      user: {
        name: req.body.first_name,
        lastName: res.body.last_name,
      },
    });
  });
// app.post("/picView", (req, res) => {});
app.listen(port);

// /**
//  * Server Activation
//  */
