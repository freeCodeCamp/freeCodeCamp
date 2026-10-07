'use strict';

function intersection(arr1, arr2) {
  return arr1.filter(function (value, index) {
    return (
      arr2.indexOf(value) > -1 &&
      arr1.indexOf(value) === index /* skips duplicates */
    );
  });
}

module.exports = intersection;
