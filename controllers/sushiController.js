var express = require("express");

var router = express.Router();

// Import the model (sushi.js) to use its database functions.
var sushi = require("../models/sushi.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  sushi.all(function(data) {
    var hbsObject = {
      sushi: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/sushi", function(req, res) {
  console.log("Req bod: "+req.body.fresh);
  sushi.create([
    "name", "fresh"
  ], [
    req.body.name, req.body.fresh
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/sushi/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  sushi.update({
    fresh: req.body.fresh
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
