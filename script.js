const jwt = require("jsonwebtoken");
const SECRET_KEY = "your_secret_key"; 

const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "7d" });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};

module.exports = {
  encrypt,
  decrypt,
};