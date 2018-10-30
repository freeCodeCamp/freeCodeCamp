var fs = require('fs');
var path = require('path');
var walk = require('walk').walk;

var async = require('./async');

function Instance(handlebars) {
  if (!(this instanceof Instance)) {
    return new Instance(handlebars);
  }

  // expose handlebars, allows users to use their versions
  // by overriding this early in their apps
  var self = this;

  self.handlebars = handlebars || require('handlebars').create();

  // cache for templates, express 3.x doesn't do this for us
  self.cache = {};

  self.__express = middleware.bind(this);

  // DEPRECATED, kept for backwards compatibility
  self.SafeString = this.handlebars.SafeString;
  self.Utils = this.handlebars.Utils;
};

// express 3.x template engine compliance
function middleware(filename, options, cb) {
  var self = this;
  var cache = self.cache;
  var handlebars = self.handlebars;

  self.async = async();

  // grab extension from filename
  // if we need a layout, we will look for one matching out extension
  var extension = path.extname(filename);

  // If passing the locals as data, create the handlebars options object now
  var handlebarsOpts = (self.__localsAsData) ? { data: options._locals } : undefined;

  // render the original file
  // cb(err, str)
  function render_file(locals, cb) {
    // cached?
    var template = cache[filename];
    if (template) {
      return cb(null, template(locals, handlebarsOpts));
    }

    fs.readFile(filename, 'utf8', function(err, str){
      if (err) {
        return cb(err);
      }

      var template = handlebars.compile(str);
      if (locals.cache) {
        cache[filename] = template;
      }

      try {
        var res = template(locals, handlebarsOpts);
        self.async.done(function(values) {
          Object.keys(values).forEach(function(id) {
            res = res.replace(id, values[id]);
          });

          cb(null, res);
        });
      } catch (err) {
        err.message = filename + ': ' + err.message;
        cb(err);
      }
    });
  }

  // render with a layout
  function render_with_layout(template, locals, cb) {
    render_file(locals, function(err, str) {
      if (err) {
        return cb(err);
      }

      locals.body = str;

      var res = template(locals, handlebarsOpts);
      self.async.done(function(values) {
        Object.keys(values).forEach(function(id) {
          res = res.replace(id, values[id]);
        });

        cb(null, res);
      });
    });
  }

  var layout = options.layout;

  // user did not specify a layout in the locals
  // check global layout state
  if (layout === undefined && options.settings && options.settings['view options']) {
    layout = options.settings['view options'].layout;
  }

  // user explicitly request no layout
  // either by specifying false for layout: false in locals
  // or by settings the false view options
  if (layout !== undefined && !layout) {
    return render_file(options, cb);
  }

  var view_dirs = options.settings.views;

  var layout_filename = [].concat(view_dirs).map(function (view_dir) {
    var view_path = path.join(view_dir, layout || 'layout');

    if (!path.extname(view_path)) {
      view_path += extension;
    }

    return view_path;
  });

  var layout_template = layout_filename.reduce(function (cached, filename) {
    if (cached) {
      return cached;
    }

    var cached_file = cache[filename];

    if (cached_file) {
      return cache[filename];
    }

    return undefined;
  }, undefined);

  if (layout_template) {
    return render_with_layout(layout_template, options, cb);
  }

  // TODO check if layout path has .hbs extension

  function cacheAndCompile(filename, str) {
    var layout_template = handlebars.compile(str);
    if (options.cache) {
      cache[filename] = layout_template;
    }

    render_with_layout(layout_template, options, cb);
  }

  function tryReadFileAndCache(templates) {
    var template = templates.shift();

    fs.readFile(template, 'utf8', function(err, str) {
      if (err) {
        if (layout && templates.length === 0) {
          // Only return error if user explicitly asked for layout.
          return cb(err);
        }

        if (templates.length > 0) {
          return tryReadFileAndCache(templates);
        }

        return render_file(options, cb);
      }

      cacheAndCompile(template, str);
    });
  }

  tryReadFileAndCache(layout_filename);
}

// express 2.x template engine compliance
Instance.prototype.compile = function (str) {
  if (typeof str !== 'string') {
    return str;
  }

  var template = this.handlebars.compile(str);
  return function (locals) {
    return template(locals, {
      helpers: locals.blockHelpers,
      partials: null,
      data: null
    });
  };
};

Instance.prototype.registerHelper = function () {
  this.handlebars.registerHelper.apply(this.handlebars, arguments);
};

Instance.prototype.registerPartial = function () {
  this.handlebars.registerPartial.apply(this.handlebars, arguments);
};

Instance.prototype.registerPartials = function (directory, done) {
  var handlebars = this.handlebars;

  var register = function(filepath, done) {
    var isValidTemplate = /\.(html|hbs)$/.test(filepath);

    if (!isValidTemplate) {
      return done(null);
    }

    fs.readFile(filepath, 'utf8', function(err, data) {
      if (!err) {
        var ext = path.extname(filepath);
        var templateName = path.relative(directory, filepath)
          .slice(0, -(ext.length)).replace(/[ -]/g, '_').replace('\\', '/');
        handlebars.registerPartial(templateName, data);
      }

      done(err);
    });
  };

  walk(directory).on('file', function(root, stat, next) {
    register(path.join(root, stat.name), next);
  }).on('end', done || function() {});

};

Instance.prototype.registerAsyncHelper = function(name, fn) {
  var self = this;
  self.handlebars.registerHelper(name, function() {
    return self.async.resolve(fn, arguments);
  });
};

Instance.prototype.localsAsTemplateData = function(app) {
  // Set a flag to indicate we should pass locals as data
  this.__localsAsData = true;

  app.render = (function(render) {
    return function(view, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      }

      // Mix response.locals (options._locals) with app.locals (this.locals)
      options._locals = options._locals || {};
      for (var key in this.locals) {
        options._locals[key] = this.locals[key];
      }

      return render.call(this, view, options, callback);
    };
  })(app.render);
};

module.exports = new Instance();
module.exports.create = function(handlebars) {
  return new Instance(handlebars);
};
