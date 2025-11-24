const axios = require("axios");

function getAllBooks() {
  axios.get("http://localhost:5000/books").then(r => console.log("TASK 10", r.data));
}

function getByISBN(isbn) {
  axios.get(`http://localhost:5000/isbn/${isbn}`).then(r => console.log("TASK 11", r.data));
}

async function getByAuthor(author) {
  let r = await axios.get(`http://localhost:5000/author/${author}`);
  console.log("TASK 12", r.data);
}

async function getByTitle(title) {
  let r = await axios.get(`http://localhost:5000/title/${title}`);
  console.log("TASK 13", r.data);
}

getAllBooks();
getByISBN("1111");
getByAuthor("Paulo Coelho");
getByTitle("The Alchemist");
