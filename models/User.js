const sql = require("./db.js");

//constructor
const User = function (user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO Agent SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

module.exports = User;
