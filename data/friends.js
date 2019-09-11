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
  }, {
    "name": "Ahmed2",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2
    ]
  }, {
    "name": "Ahmed3",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3
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


  // recursive function
  this.findMatch = function (bestMatchPosition, bestMatchScore, currentPosition) {
    console.log({ bestMatchPosition, bestMatchScore, currentPosition });

    // if the current position is greater than the length of tableArray, then i have reached the end and have the best match
    if (currentPosition > tableArray.length - 1) {
      return tableArray[bestMatchPosition];

    } else {

      // score of the currentPostion
      var scoreMatchCalculation = 0;
      // go through each score in this scoreList and the current position table array and add the differences 
      for (var i = 0; i < this.scoreList.length; i++) {
        scoreMatchCalculation += Math.abs(this.scoreList[i] - tableArray[currentPosition].scores[i]);
      }

      // if the new calculation of the current position is better than existing best matched score, 
      // then we will recurse to the next postion with the new best match position and score 
      // otherwise we will recurse to the next position with the old best match position ans score
      var nextPosition = currentPosition + 1;

      if (scoreMatchCalculation <= bestMatchScore) {
        return this.findMatch(currentPosition, scoreMatchCalculation, nextPosition);
      } else {
        return this.findMatch(bestMatchPosition, bestMatchScore, nextPosition);

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

