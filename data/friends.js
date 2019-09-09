// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }
];

function Afriend(name, photo, scoreList) {
  this.name = name;
  this.photo = photo;
  this.scoreList = scoreList.map(function (item) {
    return parseInt(item);
  });

  this.toString = function () {
    console.log("name: " + this.name, "photo: " + this.photo);
  }

  this.toAPIResult = function () {
    return { "name": this.name, "photo": this.photo };
  }

  this.findMatch = function () {
    var scores = [];
    for (var i = 0; i < tableArray.length; i++) {

      var score = 0;
      for (var j = 0; j < this.scoreList.length; j++) {
        if (this.scoreList[j] != tableArray[i].scores[j]) {
          score += Math.abs(this.scoreList[j] - tableArray[i].scores[j]);
        }
      }
    }
  }

  this.getTableDataFormat = function () {
    return {
      "name": this.name,
      "photo": this.photo,
      "scores": this.scoreList
    };
  }
}


// Note how we export the array. This makes it accessible to other files using require.
module.exports = { tableArray, Afriend };

