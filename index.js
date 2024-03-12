const jwt = require('jsonwebtoken');
require('dotenv').config();

// Accessing the secret from the environment variables
const secret = process.env.SECRET;
const payload={
    username:"aakash",
    email:"aalu@gmail.com"
}
const token=jwt.sign(payload, secret, { expiresIn: '1h' });
console.log(token);
try {
    var decoded = jwt.verify(token, secret);
    console.log(decoded);
  } catch(err) {
    console.error("error during verifying token "+err.message);
  }
  