var bonfires = require('../../seed_data/bonfires.json');

module.exports = {
  numberOfBonfires: numberOfBonfires,
  allBonfireNames: allBonfireNames,
  allBonfireIds: allBonfireIds,
  uncompletedBonfires: uncompletedBonfires
};

function numberOfBonfires() {
    return bonfires.length - 1;
}

function allBonfireIds() {
    return bonfires.map(function(elem) {
        return {
            id: elem.id,
            difficulty: elem.difficulty
        };
    })
    .sort(function(a, b) {
        return a.difficulty - b.difficulty;
    })
    .map(function(elem) {
        return elem.id;
    });
}
function allBonfireNames() {
    return bonfires.map(function(elem) {
      return {
        name: elem.name,
        difficulty: elem.difficulty,
        id: elem.id
      };
    })
    .sort(function(a, b) {
      return a.difficulty - b.difficulty;
    })
    .map (function(elem) {
      return {
        name: elem.name,
        id: elem.id
      };
    });
}
function uncompletedBonfires(completed) {
  return allBonfireIds()
    .filter(function (elem) {
      if (completed.indexOf(elem) === -1) {
        return elem;
      }
    });
}

