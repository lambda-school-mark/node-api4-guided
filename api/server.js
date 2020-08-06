const express = require("express");
const helmet = require("helmet");

const apiRouter = require("./api-router.js");

const server = express();

server.use(helmet());

server.use("/api", apiRouter);

server.get("/", (req, res) => {
  res.status(200).json({ hello: "Its deployed on heroku, and works!" });
});

module.exports = server;
