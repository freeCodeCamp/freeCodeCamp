var fs = require('fs');
var path = require('path');


function getFilesFor(dir) {
  return fs.readdirSync(path.join(__dirname, '/' + dir));
}

module.exports = function getChallenges() {
  try {
    return getFilesFor('challenges')
      .map(function(file) {
        return require('./challenges/' + file);
      });
  } catch (e) {
    console.log('error', e);
    return [];
  }
};
