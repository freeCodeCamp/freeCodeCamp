var coursewares = require('../../seed_data/coursewares.json');

module.exports = {
  allCoursewareIds: allCoursewareIds,
  allCoursewareNames: allCoursewareNames
};

function allCoursewareIds() {
  return coursewares.map(function(elem) {
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

function allCoursewareNames() {
  return coursewares.map(function(elem) {
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
