var fs = require('fs');
var path = require('path');
var flatted = require('flatted');

module.exports = {
  tryParse: function (filePath, defaultValue) {
    var result;
    try {
      result = this.readJSON(filePath);
    } catch (ex) {
      result = defaultValue;
    }
    return result;
  },

  /**
   * Read json file synchronously using flatted
   *
   * @method readJSON
   * @param  {String} filePath Json filepath
   * @returns {*} parse result
   */
  readJSON: function (filePath) {
    return flatted.parse(
      fs.readFileSync(filePath, {
        encoding: 'utf8',
      })
    );
  },

  /**
   * Write json file synchronously using circular-json
   *
   * @method writeJSON
   * @param  {String} filePath Json filepath
   * @param  {*} data Object to serialize
   */
  writeJSON: function (filePath, data) {
    fs.mkdirSync(path.dirname(filePath), {
      recursive: true,
    });
    fs.writeFileSync(filePath, flatted.stringify(data));
  },
};
