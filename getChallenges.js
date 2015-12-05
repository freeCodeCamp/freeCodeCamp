var fs = require('fs');
var path = require('path');


function getFilesFor(dir) {
  return fs.readdirSync(path.join(__dirname, '/' + dir))
    .map(function(file) {
      if (fs.statSync(path.join(__dirname, dir + '/' + file)).isFile()) {
        return file;
      }
      return getFilesFor(dir + '/' + file)
        .map(function(_file) {
          return file + '/' + _file;
        });
    })
    .reduce(function(files, file) {
      if (!Array.isArray(file)) {
        files.push(file);
        return files;
      }
      return files.concat(file);
    }, []);
}

module.exports = function getChallenges() {
  try {
    return getFilesFor('challenges')
      .map(function(file) {
        console.log('fo', file);
        var challengeSpec = require('./challenges/' + file);
        challengeSpec.fileName = file;

        return challengeSpec;
      });
  } catch (e) {
    console.log('error', e);
    return [];
  }
};
