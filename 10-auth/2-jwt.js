const jwt = require('jsonwebtoken');

const secret = 'JnqfdjhvdnsWEE7t9';
const token = jwt.sign(
  {
    id: 'yshush',
    isAdmin: false,
  },
  secret,
  { expiresIn: 2 }
);

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);

console.log(token);
