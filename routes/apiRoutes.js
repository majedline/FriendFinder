// ===============================================================================
// LOAD DATA
// ===============================================================================

var tableData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  // API GET Requests to get friends list
  app.get("/api/friends", function (req, res) {
    res.json(tableData);
  });

  // API POST Requests to add friend
  app.post("/api/friends", function (req, res) {
    tableData.push(req.body);
    res.json(true);

  });


};
