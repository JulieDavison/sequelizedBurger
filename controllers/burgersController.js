var express = require("express");

var router = express.Router();

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(data) {
    console.log(data);
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", function(req, res) {
  //Object destructuring/ Javascript Object Shorthand Notation
  var {burgername: burgername, devoured} = req.body
  db.burger.create({
    burgername,
    devoured
  }).then(function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });  
  
});


 


router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  db.burger.destroy(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;