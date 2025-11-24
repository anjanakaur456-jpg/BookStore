const express = require("express");
const { users, authenticate } = require("../users");
const books = require("../books");

const router = express.Router();

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  if (authenticate(username, password)) return res.json({ message: "Login successful" });
  res.status(401).json({ message: "Invalid credentials" });
});

router.put("/review/:isbn", (req, res) => {
  let { username, review } = req.body;
  books[req.params.isbn].reviews[username] = review;
  res.json({ message: "Review added or updated" });
});

router.delete("/review/:isbn", (req, res) => {
  let { username } = req.body;
  delete books[req.params.isbn].reviews[username];
  res.json({ message: "Review deleted" });
});

module.exports = router;
