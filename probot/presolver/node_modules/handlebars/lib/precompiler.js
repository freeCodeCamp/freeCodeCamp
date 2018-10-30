/* eslint-disable no-console */
import Async from 'async';
import fs from 'fs';
import * as Handlebars from './handlebars';
import {basename} from 'path';
import {SourceMapConsumer, SourceNode} from 'source-map';
import uglify from 'uglify-js';

module.exports.loadTemplates = function(opts, callback) {
  loadStrings(opts, function(err, strings) {
    if (err) {
      callback(err);
    } else {
      loadFiles(opts, function(err, files) {
        if (err) {
          callback(err);
        } else {
          opts.templates = strings.concat(files);
          callback(undefined, opts);
        }
      });
    }
  });
};

function loadStrings(opts, callback) {
  let strings = arrayCast(opts.string),
      names = arrayCast(opts.name);

  if (names.length !== strings.length
      && strings.length > 1) {
    return callback(new Handlebars.Exception('Number of names did not match the number of string inputs'));
  }

  Async.map(strings, function(string, callback) {
      if (string !== '-') {
        callback(undefined, string);
      } else {
        // Load from stdin
        let buffer = '';
        process.stdin.setEncoding('utf8');

        process.stdin.on('data', function(chunk) {
          buffer += chunk;
        });
        process.stdin.on('end', function() {
          callback(undefined, buffer);
        });
      }
    },
    function(err, strings) {
      strings = strings.map((string, index) => ({
        name: names[index],
        path: names[index],
        source: string
      }));
      callback(err, strings);
    });
}

function loadFiles(opts, callback) {
  // Build file extension pattern
  let extension = (opts.extension || 'handlebars').replace(/[\\^$*+?.():=!|{}\-\[\]]/g, function(arg) { return '\\' + arg; });
  extension = new RegExp('\\.' + extension + '$');

  let ret = [],
      queue = (opts.files || []).map((template) => ({template, root: opts.root}));
  Async.whilst(() => queue.length, function(callback) {
    let {template: path, root} = queue.shift();

    fs.stat(path, function(err, stat) {
      if (err) {
        return callback(new Handlebars.Exception(`Unable to open template file "${path}"`));
      }

      if (stat.isDirectory()) {
        opts.hasDirectory = true;

        fs.readdir(path, function(err, children) {
          /* istanbul ignore next : Race condition that being too lazy to test */
          if (err) {
            return callback(err);
          }
          children.forEach(function(file) {
            let childPath = path + '/' + file;

            if (extension.test(childPath) || fs.statSync(childPath).isDirectory()) {
              queue.push({template: childPath, root: root || path});
            }
          });

          callback();
        });
      } else {
        fs.readFile(path, 'utf8', function(err, data) {
          /* istanbul ignore next : Race condition that being too lazy to test */
          if (err) {
            return callback(err);
          }

          if (opts.bom && data.indexOf('\uFEFF') === 0) {
            data = data.substring(1);
          }

          // Clean the template name
          let name = path;
          if (!root) {
            name = basename(name);
          } else if (name.indexOf(root) === 0) {
            name = name.substring(root.length + 1);
          }
          name = name.replace(extension, '');

          ret.push({
            path: path,
            name: name,
            source: data
          });

          callback();
        });
      }
    });
  },
  function(err) {
    if (err) {
      callback(err);
    } else {
      callback(undefined, ret);
    }
  });
}

module.exports.cli = function(opts) {
  if (opts.version) {
    console.log(Handlebars.VERSION);
    return;
  }

  if (!opts.templates.length && !opts.hasDirectory) {
    throw new Handlebars.Exception('Must define at least one template or directory.');
  }

  if (opts.simple && opts.min) {
    throw new Handlebars.Exception('Unable to minimize simple output');
  }

  const multiple = opts.templates.length !== 1 || opts.hasDirectory;
  if (opts.simple && multiple) {
    throw new Handlebars.Exception('Unable to output multiple templates in simple mode');
  }

  // Force simple mode if we have only one template and it's unnamed.
  if (!opts.amd && !opts.commonjs && opts.templates.length === 1
      && !opts.templates[0].name) {
    opts.simple = true;
  }

  // Convert the known list into a hash
  let known = {};
  if (opts.known && !Array.isArray(opts.known)) {
    opts.known = [opts.known];
  }
  if (opts.known) {
    for (let i = 0, len = opts.known.length; i < len; i++) {
      known[opts.known[i]] = true;
    }
  }

  const objectName = opts.partial ? 'Handlebars.partials' : 'templates';

  let output = new SourceNode();
  if (!opts.simple) {
    if (opts.amd) {
      output.add('define([\'' + opts.handlebarPath + 'handlebars.runtime\'], function(Handlebars) {\n  Handlebars = Handlebars["default"];');
    } else if (opts.commonjs) {
      output.add('var Handlebars = require("' + opts.commonjs + '");');
    } else {
      output.add('(function() {\n');
    }
    output.add('  var template = Handlebars.template, templates = ');
    if (opts.namespace) {
      output.add(opts.namespace);
      output.add(' = ');
      output.add(opts.namespace);
      output.add(' || ');
    }
    output.add('{};\n');
  }

  opts.templates.forEach(function(template) {
    let options = {
      knownHelpers: known,
      knownHelpersOnly: opts.o
    };

    if (opts.map) {
      options.srcName = template.path;
    }
    if (opts.data) {
      options.data = true;
    }

    let precompiled = Handlebars.precompile(template.source, options);

    // If we are generating a source map, we have to reconstruct the SourceNode object
    if (opts.map) {
      let consumer = new SourceMapConsumer(precompiled.map);
      precompiled = SourceNode.fromStringWithSourceMap(precompiled.code, consumer);
    }

    if (opts.simple) {
      output.add([precompiled, '\n']);
    } else {
      if (!template.name) {
        throw new Handlebars.Exception('Name missing for template');
      }

      if (opts.amd && !multiple) {
        output.add('return ');
      }
      output.add([objectName, '[\'', template.name, '\'] = template(', precompiled, ');\n']);
    }
  });

  // Output the content
  if (!opts.simple) {
    if (opts.amd) {
      if (multiple) {
        output.add(['return ', objectName, ';\n']);
      }
      output.add('});');
    } else if (!opts.commonjs) {
      output.add('})();');
    }
  }


  if (opts.map) {
    output.add('\n//# sourceMappingURL=' + opts.map + '\n');
  }

  output = output.toStringWithSourceMap();
  output.map = output.map + '';

  if (opts.min) {
    output = uglify.minify(output.code, {
      fromString: true,

      outSourceMap: opts.map,
      inSourceMap: JSON.parse(output.map)
    });
    if (opts.map) {
      output.code += '\n//# sourceMappingURL=' + opts.map + '\n';
    }
  }

  if (opts.map) {
    fs.writeFileSync(opts.map, output.map, 'utf8');
  }
  output = output.code;

  if (opts.output) {
    fs.writeFileSync(opts.output, output, 'utf8');
  } else {
    console.log(output);
  }
};

function arrayCast(value) {
  value = value != null ? value : [];
  if (!Array.isArray(value)) {
    value = [value];
  }
  return value;
}
