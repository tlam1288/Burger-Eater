const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },

  create: (newBurger, cb) => {
    orm.create("burgers", newCat, (res) => {
      cb(res);
    });
  },
  update: (burgerData, criteria, cb) => {
    orm.update("burgers", catData, criteria, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
