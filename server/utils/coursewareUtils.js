var coursewares = require('../../seed_data/coursewares.json');

module.exports = {
  allCoursewareIds: allCoursewareIds,
  allCoursewareNames: allCoursewareNames
};

function allCoursewareIds() {
  return coursewares.map(function(elem) {
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

function allCoursewareNames() {
  return coursewares.map(function(elem) {
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
