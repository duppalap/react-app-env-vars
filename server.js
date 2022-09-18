const express = require("express");
const path = require("path");

const app = express();

const config = require("dotenv").config;
// require and configure dotenv, will load vars in .env in PROCESS.ENV
let dotEnvOptions = {};
if (process.env.REACT_APP_ENV === "local") {
  const envFile = `${process.cwd()}/.env`;
  console.log(`LOADING: ${envFile}`);
  dotEnvOptions = {
    path: envFile,
  };
}
config(dotEnvOptions);

const port = process.env.port || 9000;

app.set("views", path.join(__dirname, "build"));
app.engine("html", require("ejs").renderFile);

app.use("/static", express.static(path.join(__dirname, "build/static")));

app.get("/", (req, res) => {
  console.log(process.env);
  const { REACT_APP_API_URL } = process.env;
  res.render("index.html", { REACT_APP_API_URL });
});

app.listen(port, () => console.log(`Application running on port ${port}!`));
