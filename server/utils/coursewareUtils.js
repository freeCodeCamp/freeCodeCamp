var coursewares = require('../../seed_data/coursewares.json'),
  R = require('ramda');

module.exports = {
  allCoursewareIds: allCoursewareIds,
  allCoursewareNames: allCoursewareNames,
  firstUncompletedCourseware: firstUncompletedCourseware
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

function firstUncompletedCourseware(completed) {
  return R.head(allCoursewareIds().filter(function (elem) {
    if (completed.indexOf(elem) === -1) {
      return elem;
    }
  }))
}
