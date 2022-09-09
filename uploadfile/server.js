const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

const app = express();

const PORT = 3001 || process.env.PORT;

app.use(cors());

app.use(bodyParser.json()).use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
