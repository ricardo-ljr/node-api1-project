const express = require("express");
const shortid = require("shortid");

const server = express();

server.use(express.json());

let users = [];

// POST New Users

server.post("/api/users", (req, res) => {
  const usersInfo = req.body;

  usersInfo.id = shortid.generate();

  users.push(usersInfo);

  res.status(201).json(usersInfo);

  if (!users) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }
});

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

const PORT = 5000;
server.listen(PORT, () =>
  console.log(`\n ** API running on http://localhost:${PORT} **\n`)
);
