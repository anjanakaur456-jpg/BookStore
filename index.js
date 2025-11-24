const express = require("express");
const session = require("express-session");
const { users, isValid } = require("./users");

const customer = require("./routes/auth_users");
const general = require("./routes/general");

const app = express();
app.use(express.json());

app.use(session({
  secret: "fingerprint_customer",
  resave: true,
  saveUninitialized: true
}));

app.post("/register", (req, res) => {
  let { username, password } = req.body;
  if (!isValid(username)) return res.json({ message: "User exists" });
  users.push({ username, password });
  res.json({ message: "User registered" });
});

app.use("/", general);
app.use("/customer", customer);

app.listen(5000, () => console.log("Server running on port 5000"));
