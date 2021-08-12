const express = require("express");
const hbs = require("hbs");
require('dotenv').config()

const app = express();
const port = process.env.PORT;


// handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/layout");

//carpeta public
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { name: "nombre", title: "Nodejs" });
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hello World");
});

app.get("/generic", (req, res) => {
  res.render("generic", { name: "nombre", title: "Nodejs" });
});

app.get("/elements", (req, res) => {
  res.render("elements", { name: "nombre", title: "Nodejs" });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`app running in port ${port}`);
});