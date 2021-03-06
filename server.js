const express = require("express");
const path = require("path");

const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(PORT, () => console.log("Now listening"));
