let users = [];

function isValid(username) {
  return !users.some(u => u.username === username);
}

function authenticate(username, password) {
  return users.some(u => u.username === username && u.password === password);
}

module.exports = { users, isValid, authenticate };
