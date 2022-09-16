const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

const config = require("dotenv").config;
// require and configure dotenv, will load vars in .env in PROCESS.ENV
let dotEnvOptions = {};
if (process.env.NODE_ENV !== "production") {
  const envFile = `${process.cwd()}/.env`;
  console.log(`LOADING: ${envFile}`);
  dotEnvOptions = {
    path: envFile,
  };
}
config(dotEnvOptions);

console.log(process.env);

app.set("views", path.join(__dirname, "build"));
app.engine("html", require("ejs").renderFile);

app.use("/static", express.static(path.join(__dirname, "build/static")));

app.get("/", (req, res) => {
  const { REACT_APP_API_URL } = process.env;
  console.log(REACT_APP_API_URL);
  res.render("index.html", { REACT_APP_API_URL });
});

app.listen(port, () => console.log(`Application running on port ${port}!`));
