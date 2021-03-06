// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var sushi = {
  all: function(cb) {
    orm.all("sushi", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("sushi", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("sushi", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (sushiController.js).
module.exports = sushi;
