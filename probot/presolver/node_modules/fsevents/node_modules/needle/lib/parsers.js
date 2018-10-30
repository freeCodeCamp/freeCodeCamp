//////////////////////////////////////////
// Defines mappings between content-type
// and the appropriate parsers.
//////////////////////////////////////////

var Transform = require('stream').Transform;
var sax = require('sax');

function parseXML(str, cb) {
  var obj, current, parser = sax.parser(true, { trim: true, lowercase: true })
  parser.onerror = parser.onend = done;

  function done(err) {
    parser.onerror = parser.onend = function() { }
    cb(err, obj)
  }

  function newElement(name, attributes) {
    return {
      name: name || '',
      value: '',
      attributes: attributes || {},
      children: []
    }
  }

  parser.ontext = function(t) {
    if (current) current.value += t
  }

  parser.onopentag = function(node) {
    var element = newElement(node.name, node.attributes)
    if (current) {
      element.parent = current
      current.children.push(element)
    } else { // root object
      obj = element
    }

    current = element
  };

  parser.onclosetag = function() {
    if (typeof current.parent !== 'undefined') {
      var just_closed = current
      current = current.parent
      delete just_closed.parent
    }
  }

  parser.write(str).close()
}

function parserFactory(name, fn) {

  function parser() {
    var chunks = [],
        stream = new Transform({ objectMode: true });

    // Buffer all our data
    stream._transform = function(chunk, encoding, done) {
      chunks.push(chunk);
      done();
    }

    // And call the parser when all is there.
    stream._flush = function(done) {
      var self = this,
          data = Buffer.concat(chunks);

      try {
        fn(data, function(err, result) {
          if (err) throw err;
          self.push(result);
        });
      } catch (err) {
        self.push(data); // just pass the original data
      } finally {
        done();
      }
    }

    return stream;
  }

  return { fn: parser, name: name };
}

var parsers = {}

function buildParser(name, types, fn) {
  var parser = parserFactory(name, fn);
  types.forEach(function(type) {
    parsers[type] = parser;
  })
}

buildParser('json', [
  'application/json',
  'text/javascript'
], function(buffer, cb) {
  var err, data;
  try { data = JSON.parse(buffer); } catch (e) { err = e; }
  cb(err, data);
});

buildParser('xml', [
  'text/xml',
  'application/xml',
  'application/rdf+xml',
  'application/rss+xml',
  'application/atom+xml'
], function(buffer, cb) {
  parseXML(buffer.toString(), function(err, obj) {
    cb(err, obj)
  })
});

module.exports = parsers;
module.exports.use = buildParser;