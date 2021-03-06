const express = require("express");
const config = require("./config");
const templates = require("./routers/Templates");
const graphQL = require("./routers/GraphQL");
const authParse = require("./utils/auth");

const app = express();

app.use(express.json());
app.use(authParse.authParse);
app.use(templates);
app.use(graphQL);

app.listen(config.port, () => {
  console.log(`Server running in port ${config.port}`);
});
