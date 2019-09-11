// ===============================================================================
// LOAD DATA
// ===============================================================================

var tableData = require("../data/friends").tableArray;
var Afriend = require("../data/friends").Afriend;


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

    var friend = new Afriend(req.body.name, req.body.photo, req.body.scores);
    var matchedFriend = friend.findMatch(0, 100, 0);

    tableData.push(friend.getTableDataFormat());
    res.json(matchedFriend);
  });



};
