var bonfires = require('../../seed_data/bonfires.json');

module.exports = {
  numberOfBonfires: numberOfBonfires,
  allBonfireNames: allBonfireNames,
  allBonfireIds: allBonfireIds
};

function numberOfBonfires() {
    return bonfires.length - 1;
}

function allBonfireIds() {
    return bonfires.map(function(elem) {
        return {
            _id: elem._id,
            difficulty: elem.difficulty
        };
    })
    .sort(function(a, b) {
        return a.difficulty - b.difficulty;
    })
    .map(function(elem) {
        return elem._id;
    });
}
function allBonfireNames() {
    return bonfires.map(function(elem) {
      return {
        name: elem.name,
        difficulty: elem.difficulty,
        _id: elem._id
      };
    })
    .sort(function(a, b) {
      return a.difficulty - b.difficulty;
    })
    .map (function(elem) {
      return {
        name: elem.name,
        _id: elem._id
      };
    });
}
