if (global.GENTLY) require = GENTLY.hijack(require);

var Buffer = require('buffer').Buffer;

function JSONParser(parent) {
  this.parent = parent;
  this.chunks = [];
  this.bytesWritten = 0;
}
exports.JSONParser = JSONParser;

JSONParser.prototype.write = function(buffer) {
  this.bytesWritten += buffer.length;
  this.chunks.push(buffer);
  return buffer.length;
};

JSONParser.prototype.end = function() {
  try {
    var fields = JSON.parse(Buffer.concat(this.chunks));
    for (var field in fields) {
      this.onField(field, fields[field]);
    }
  } catch (e) {
    this.parent.emit('error', e);
  }
  this.data = null;

  this.onEnd();
};
