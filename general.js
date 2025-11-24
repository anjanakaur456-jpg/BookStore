const express = require("express");
const books = require("../books");

const router = express.Router();

router.get("/books", (req, res) => res.json(books));

router.get("/isbn/:isbn", (req, res) => {
  res.json(books[req.params.isbn] || {});
});

router.get("/author/:author", (req, res) => {
  let result = Object.values(books).filter(b => b.author === req.params.author);
  res.json(result);
});

router.get("/title/:title", (req, res) => {
  let result = Object.values(books).filter(b => b.title === req.params.title);
  res.json(result);
});

router.get("/review/:isbn", (req, res) => {
  res.json(books[req.params.isbn]?.reviews || {});
});

module.exports = router;
