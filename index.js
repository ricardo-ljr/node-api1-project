const express = require("express");
const shortid = require("shortid");

const server = express();

server.use(express.json());

let users = [];

server.post("/api/users", (req, res) => {
  const usersInfo = req.body;

  usersInfo.id = shortid.generate();

  users.push(usersInfo);

  res.status(201).json(usersInfo);
});

const PORT = 5000;
server.listen(PORT, () =>
  console.log(`\n ** API running on http://localhost:${PORT} **\n`)
);
