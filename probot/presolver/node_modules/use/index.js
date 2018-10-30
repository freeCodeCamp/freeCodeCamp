/*!
 * use <https://github.com/jonschlinkert/use>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function base(app, options) {
  if (!isObject(app) && typeof app !== 'function') {
    throw new TypeError('expected an object or function');
  }

  var opts = isObject(options) ? options : {};
  var prop = typeof opts.prop === 'string' ? opts.prop : 'fns';
  if (!Array.isArray(app[prop])) {
    define(app, prop, []);
  }

  /**
   * Define a plugin function to be passed to use. The only
   * parameter exposed to the plugin is `app`, the object or function.
   * passed to `use(app)`. `app` is also exposed as `this` in plugins.
   *
   * Additionally, **if a plugin returns a function, the function will
   * be pushed onto the `fns` array**, allowing the plugin to be
   * called at a later point by the `run` method.
   *
   * ```js
   * var use = require('use');
   *
   * // define a plugin
   * function foo(app) {
   *   // do stuff
   * }
   *
   * var app = function(){};
   * use(app);
   *
   * // register plugins
   * app.use(foo);
   * app.use(bar);
   * app.use(baz);
   * ```
   * @name .use
   * @param {Function} `fn` plugin function to call
   * @api public
   */

  define(app, 'use', use);

  /**
   * Run all plugins on `fns`. Any plugin that returns a function
   * when called by `use` is pushed onto the `fns` array.
   *
   * ```js
   * var config = {};
   * app.run(config);
   * ```
   * @name .run
   * @param {Object} `value` Object to be modified by plugins.
   * @return {Object} Returns the object passed to `run`
   * @api public
   */

  define(app, 'run', function(val) {
    if (!isObject(val)) return;

    if (!val.use || !val.run) {
      define(val, prop, val[prop] || []);
      define(val, 'use', use);
    }

    if (!val[prop] || val[prop].indexOf(base) === -1) {
      val.use(base);
    }

    var self = this || app;
    var fns = self[prop];
    var len = fns.length;
    var idx = -1;

    while (++idx < len) {
      val.use(fns[idx]);
    }
    return val;
  });

  /**
   * Call plugin `fn`. If a function is returned push it into the
   * `fns` array to be called by the `run` method.
   */

  function use(type, fn, options) {
    var offset = 1;

    if (typeof type === 'string' || Array.isArray(type)) {
      fn = wrap(type, fn);
      offset++;
    } else {
      options = fn;
      fn = type;
    }

    if (typeof fn !== 'function') {
      throw new TypeError('expected a function');
    }

    var self = this || app;
    var fns = self[prop];

    var args = [].slice.call(arguments, offset);
    args.unshift(self);

    if (typeof opts.hook === 'function') {
      opts.hook.apply(self, args);
    }

    var val = fn.apply(self, args);
    if (typeof val === 'function' && fns.indexOf(val) === -1) {
      fns.push(val);
    }
    return self;
  }

  /**
   * Wrap a named plugin function so that it's only called on objects of the
   * given `type`
   *
   * @param {String} `type`
   * @param {Function} `fn` Plugin function
   * @return {Function}
   */

  function wrap(type, fn) {
    return function plugin() {
      return this.type === type ? fn.apply(this, arguments) : plugin;
    };
  }

  return app;
};

function isObject(val) {
  return val && typeof val === 'object' && !Array.isArray(val);
}

function define(obj, key, val) {
  Object.defineProperty(obj, key, {
    configurable: true,
    writable: true,
    value: val
  });
}
