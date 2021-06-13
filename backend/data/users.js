import bcrypt from "bcryptjs";

const users = [
  {
    name: "monu devada",
    email: "monu@example.com",
    isAdmin: true,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "sonu",
    email: "sonu@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "aman",
    email: "aman@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
