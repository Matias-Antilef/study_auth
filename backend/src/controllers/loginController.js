const connection = require("../models/db");
const jwt = require("jsonwebtoken");

module.exports.login = (req, res) => {
  const { username, password } = req.body;
  const consult = "SELECT * FROM user WHERE username = ? AND password = ?";

  try {
    connection.query(consult, [username, password], (err, result) => {
      if (err) {
        res.send(err);
        return res.status(500).send(err);
      }
      if (result.length > 0) {
        const { role, first_name, last_name } = result[0];
        const token = jwt.sign(
          { username, role, first_name, last_name },
          "Stack",
          {
            expiresIn: "12h",
          }
        );
        res.send({ token, role, first_name, last_name });
      } else {
        console.log("wrong user");
        res.send({ message: "wrong user" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
};
