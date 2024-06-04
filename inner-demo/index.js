const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());

app.use(cors());

// app.get("/", (req, res) => {
//   var name = req.query.name;
//   var final = 0;
//   for (let i = 0; i <= name; i++) {
//     final += i;
//   }
//   res.send(`<h1>hello  ${final}world</h1>`);
// });
var user = [];
// ================= user sign up ===========================//
app.post("/signup", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  var mail = req.body.mail;
  var contact = req.body.contact;
  var Address = req.body.Address;
  var pin = req.body.pin;

  var users = {
    id,
    pass,
    mail,
    contact,
    Address,
    pin,
    purchased: [],
  };
  user.push(users);
  console.log("user : ", user);
  res.json({
    ID: id,
    Password: pass,
    Address: Address,
    mail: mail,
    contact: contact,
    pin: pin,
  });
});
app.post("/login", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  for (let i = 0; i < user.length; i++) {
    if (user[i].id === id) {
      if (user[i].pass === pass) {
        res.json({
          ID: user[i].id,
          Address: user[i].Address,
          mail: user[i].mail,
          contact: user[i].contact,
          pin: user[i].pin,
        });
      } else {
        res.json("faild");
      }
    }
  }
  res.json("user not found");
});
app.post("/forget", (req, res) => {
  const { id, pass, newpass } = req.body;
  for (let i = 0; i < user.length; i++) {
    if (user[i].id === id) {
      if (user[i].pass === pass) {
        user[i].pass = newpass;
        res.json({
          ID: user[i].id,
          newpass: user[i].pass,
        });
      } else {
        res.json("Current password is incorrect");
      }
    }
  }
  res.json("user not found");
});
// ================= seller sign up ===========================//
var seller = [];
app.post("/sellersignup", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  var mail = req.body.mail;
  var contact = req.body.contact;
  var Address = req.body.Address;
  var pin = req.body.pin;
  var users = {
    id,
    pass,
    mail,
    contact,
    Address,
    pin,
  };
  seller.push(users);
  console.log("user : ", seller);
  res.json({
    ID: id,
    Password: pass,
    Address: Address,
    mail: mail,
    contact: contact,
    pin: pin,
  });
});
app.post("/sellerlogin", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  for (let i = 0; i < seller.length; i++) {
    if (seller[i].id === id) {
      if (seller[i].pass === pass) {
        res.json({
          ID: seller[i].id,
          Address: seller[i].Address,
          mail: seller[i].mail,
          contact: seller[i].contact,
          pin: seller[i].pin,
        });
      } else {
        res.json("faild");
      }
    }
  }
  res.json("user not found");
});
var product = [];
app.post("/add-product", (req, res) => {
  var id = req.body.id;
  var image = req.body.image;
  var title = req.body.title;
  var price = req.body.price;
  var description = req.body.description;
  var add = {
    id,
    image,
    title,
    price,
    description,
  };
  product.push(add);
  res.json({
    id: id,
    image: image,
    title: title,
    price: price,
    description: description,
  });
});
app.get("/get-product", (req, res) => {
  res.json(product);
});
app.post("/purchased", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  var item = req.body.item;
  console.log({ id, pass, item });
  for (let i = 0; i < user.length; i++) {
    if (user[i].id === id) {
      if (user[i].pass === pass) {
        console.log("user found carry on");
        for (let k = 0; k < product.length; k++) {
          if (product[k].id === item) {
            user[i].purchased.push(product[k]);
             res.json(user[i]);
          }
        }
      }
    }
  }
  res.json("user not found");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
