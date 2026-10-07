if (
  Function.prototype.name === undefined &&
  Object.defineProperty !== undefined
) {
  Object.defineProperty(Function.prototype, 'name', {
    get: function() {
      var regex = /function\s([^(]{1,})\(/,
        match = regex.exec(this.toString());
      return match && match.length > 1 ? match[1].trim() : '';
    },
  });
}
if (String.prototype.trimRight === undefined) {
  String.prototype.trimRight = function() {
    return String(this).replace(/\s+$/, '');
  };
}
var stylus = (function() {
  function require(p) {
    var path = require.resolve(p),
      mod = require.modules[path];
    if (!mod) throw new Error('failed to require "' + p + '"');
    if (!mod.exports) {
      mod.exports = {};
      mod.call(mod.exports, mod, mod.exports, require.relative(path));
    }
    return mod.exports;
  }
  var bifs =
    "called-from = ()\n\nvendors = moz webkit o ms official\n\n// stringify the given arg\n\n-string(arg)\n  type(arg) + ' ' + arg\n\n// require a color\n\nrequire-color(color)\n  unless color is a 'color'\n    error('RGB or HSL value expected, got a ' + -string(color))\n\n// require a unit\n\nrequire-unit(n)\n  unless n is a 'unit'\n    error('unit expected, got a ' + -string(n))\n\n// require a string\n\nrequire-string(str)\n  unless str is a 'string' or str is a 'ident'\n    error('string expected, got a ' + -string(str))\n\n// Math functions\n\nabs(n) { math(n, 'abs') }\nmin(a, b) { a < b ? a : b }\nmax(a, b) { a > b ? a : b }\n\n// Trigonometrics\nPI = -math-prop('PI')\n\nradians-to-degrees(angle)\n  angle * (180 / PI)\n\ndegrees-to-radians(angle)\n  unit(angle * (PI / 180),'')\n\nsin(n)\n  n = degrees-to-radians(n) if unit(n) == 'deg'\n  round(math(n, 'sin'), 9)\n\ncos(n)\n  n = degrees-to-radians(n) if unit(n) == 'deg'\n  round(math(n, 'cos'), 9)\n\n// Rounding Math functions\n\nceil(n, precision = 0)\n  multiplier = 10 ** precision\n  math(n * multiplier, 'ceil') / multiplier\n\nfloor(n, precision = 0)\n  multiplier = 10 ** precision\n  math(n * multiplier, 'floor') / multiplier\n\nround(n, precision = 0)\n  multiplier = 10 ** precision\n  math(n * multiplier, 'round') / multiplier\n\n// return the sum of the given numbers\n\nsum(nums)\n  sum = 0\n  sum += n for n in nums\n\n// return the average of the given numbers\n\navg(nums)\n  sum(nums) / length(nums)\n\n// return a unitless number, or pass through\n\nremove-unit(n)\n  if typeof(n) is 'unit'\n    unit(n, '')\n  else\n    n\n\n// convert a percent to a decimal, or pass through\n\npercent-to-decimal(n)\n  if unit(n) is '%'\n    remove-unit(n) / 100\n  else\n    n\n\n// check if n is an odd number\n\nodd(n)\n  1 == n % 2\n\n// check if n is an even number\n\neven(n)\n  0 == n % 2\n\n// check if color is light\n\nlight(color)\n  lightness(color) >= 50%\n\n// check if color is dark\n\ndark(color)\n  lightness(color) < 50%\n\n// desaturate color by amount\n\ndesaturate(color, amount)\n  adjust(color, 'saturation', - amount)\n\n// saturate color by amount\n\nsaturate(color = '', amount = 100%)\n  if color is a 'color'\n    adjust(color, 'saturation', amount)\n  else\n    unquote( 'saturate(' + color + ')' )\n\n// darken by the given amount\n\ndarken(color, amount)\n  adjust(color, 'lightness', - amount)\n\n// lighten by the given amount\n\nlighten(color, amount)\n  adjust(color, 'lightness', amount)\n\n// decrease opacity by amount\n\nfade-out(color, amount)\n  color - rgba(black, percent-to-decimal(amount))\n\n// increase opacity by amount\n\nfade-in(color, amount)\n  color + rgba(black, percent-to-decimal(amount))\n\n// spin hue by a given amount\n\nspin(color, amount)\n  color + unit(amount, deg)\n\n// mix two colors by a given amount\n\nmix(color1, color2, weight = 50%)\n  unless weight in 0..100\n    error('Weight must be between 0% and 100%')\n\n  if length(color1) == 2\n    weight = color1[0]\n    color1 = color1[1]\n\n  else if length(color2) == 2\n    weight = 100 - color2[0]\n    color2 = color2[1]\n\n  require-color(color1)\n  require-color(color2)\n\n  p = unit(weight / 100, '')\n  w = p * 2 - 1\n\n  a = alpha(color1) - alpha(color2)\n\n  w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2\n  w2 = 1 - w1\n\n  channels = (red(color1) red(color2)) (green(color1) green(color2)) (blue(color1) blue(color2))\n  rgb = ()\n\n  for pair in channels\n    push(rgb, floor(pair[0] * w1 + pair[1] * w2))\n\n  a1 = alpha(color1) * p\n  a2 = alpha(color2) * (1 - p)\n  alpha = a1 + a2\n\n  rgba(rgb[0], rgb[1], rgb[2], alpha)\n\n// invert colors, leave alpha intact\n\ninvert(color = '')\n  if color is a 'color'\n    rgba(#fff - color, alpha(color))\n  else\n    unquote( 'invert(' + color + ')' )\n\n// give complement of the given color\n\ncomplement( color )\n  spin( color, 180 )\n\n// give grayscale of the given color\n\ngrayscale( color = '' )\n  if color is a 'color'\n    desaturate( color, 100% )\n  else\n    unquote( 'grayscale(' + color + ')' )\n\n// mix the given color with white\n\ntint( color, percent )\n  mix( white, color, percent )\n\n// mix the given color with black\n\nshade( color, percent )\n  mix( black, color, percent )\n\n// return the last value in the given expr\n\nlast(expr)\n  expr[length(expr) - 1]\n\n// return keys in the given pairs or object\n\nkeys(pairs)\n  ret = ()\n  if type(pairs) == 'object'\n    for key in pairs\n      push(ret, key)\n  else\n    for pair in pairs\n      push(ret, pair[0]);\n  ret\n\n// return values in the given pairs or object\n\nvalues(pairs)\n  ret = ()\n  if type(pairs) == 'object'\n    for key, val in pairs\n      push(ret, val)\n  else\n    for pair in pairs\n      push(ret, pair[1]);\n  ret\n\n// join values with the given delimiter\n\njoin(delim, vals...)\n  buf = ''\n  vals = vals[0] if length(vals) == 1\n  for val, i in vals\n    buf += i ? delim + val : val\n\n// add a CSS rule to the containing block\n\n// - This definition allows add-property to be used as a mixin\n// - It has the same effect as interpolation but allows users\n//   to opt for a functional style\n\nadd-property-function = add-property\nadd-property(name, expr)\n  if mixin\n    {name} expr\n  else\n    add-property-function(name, expr)\n\nprefix-classes(prefix)\n  -prefix-classes(prefix, block)\n\n// Caching mixin, use inside your functions to enable caching by extending.\n\n$stylus_mixin_cache = {}\ncache()\n  $key = (current-media() or 'no-media') + '__' + called-from[0] + '__' + arguments\n  if $key in $stylus_mixin_cache\n    @extend {'$cache_placeholder_for_' + $stylus_mixin_cache[$key]}\n  else if 'cache' in called-from\n    {block}\n  else\n    $id = length($stylus_mixin_cache)\n\n    &,\n    /$cache_placeholder_for_{$id}\n      $stylus_mixin_cache[$key] = $id\n      {block}\n\n// Percentage function to convert a number, e.g. '.45', into a percentage, e.g. '45%'\n\npercentage(num)\n  return unit(num * 100, '%')\n\n// Returns the position of a `value` within a `list`\n\nindex(list, value)\n  for val, i in list\n    return i if val == value\n";
  require.modules = {};
  require.resolve = function(path) {
    var orig = path,
      reg = path + '.js',
      index = path + '/index.js';
    return (
      (require.modules[reg] && reg) || (require.modules[index] && index) || orig
    );
  };
  require.register = function(path, fn) {
    require.modules[path] = fn;
  };
  require.relative = function(parent) {
    return function(p) {
      if ('.' != p[0]) return require(p);
      var path = parent.split('/'),
        segs = p.split('/');
      path.pop();
      for (var i = 0; i < segs.length; i++) {
        var seg = segs[i];
        if ('..' == seg) path.pop();
        else if ('.' != seg) path.push(seg);
      }
      return require(path.join('/'));
    };
  };
  require.register('path.js', function(module, exports, require) {
    var isWindows = false;
    function normalizeArray(parts, allowAboveRoot) {
      var up = 0;
      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last == '.') {
          parts.splice(i, 1);
        } else if (last === '..') {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }
      if (allowAboveRoot) {
        for (; up--; up) {
          parts.unshift('..');
        }
      }
      return parts;
    }
    var splitPathRe = /^([\s\S]+\/(?!$)|\/)?((?:[\s\S]+?)?(\.[^.]*)?)$/;
    exports.normalize = function(path) {
      var isAbsolute = path.charAt(0) === '/',
        trailingSlash = path.slice(-1) === '/';
      path = normalizeArray(
        path.split('/').filter(function(p) {
          return !!p;
        }),
        !isAbsolute,
      ).join('/');
      if (!path && !isAbsolute) {
        path = '.';
      }
      if (path && trailingSlash) {
        path += '/';
      }
      return (isAbsolute ? '/' : '') + path;
    };
    exports.join = function() {
      var paths = Array.prototype.slice.call(arguments, 0);
      return exports.normalize(
        paths
          .filter(function(p, index) {
            return p && typeof p === 'string';
          })
          .join('/'),
      );
    };
    exports.relative = function(from, to) {
      from = exports.resolve(from).substr(1);
      to = exports.resolve(to).substr(1);
      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '') break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '') break;
        }
        if (start > end) return [];
        return arr.slice(start, end - start + 1);
      }
      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('/');
    };
    exports.dirname = function(path) {
      var dir = splitPathRe.exec(path)[1] || '';
      if (!dir) {
        return '.';
      } else if (
        dir.length === 1 ||
        (isWindows && dir.length <= 3 && dir.charAt(1) === ':')
      ) {
        return dir;
      } else {
        return dir.substring(0, dir.length - 1);
      }
    };
    exports.basename = function(path, ext) {
      var f = splitPathRe.exec(path)[2] || '';
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    exports.extname = function(path) {
      return splitPathRe.exec(path)[3] || '';
    };
  });
  require.register('colors.js', function(module, exports, require) {
    module.exports = {
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
      azure: [240, 255, 255, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      blueviolet: [138, 43, 226, 1],
      brown: [165, 42, 42, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      cornflowerblue: [100, 149, 237, 1],
      cornsilk: [255, 248, 220, 1],
      crimson: [220, 20, 60, 1],
      cyan: [0, 255, 255, 1],
      darkblue: [0, 0, 139, 1],
      darkcyan: [0, 139, 139, 1],
      darkgoldenrod: [184, 134, 11, 1],
      darkgray: [169, 169, 169, 1],
      darkgreen: [0, 100, 0, 1],
      darkgrey: [169, 169, 169, 1],
      darkkhaki: [189, 183, 107, 1],
      darkmagenta: [139, 0, 139, 1],
      darkolivegreen: [85, 107, 47, 1],
      darkorange: [255, 140, 0, 1],
      darkorchid: [153, 50, 204, 1],
      darkred: [139, 0, 0, 1],
      darksalmon: [233, 150, 122, 1],
      darkseagreen: [143, 188, 143, 1],
      darkslateblue: [72, 61, 139, 1],
      darkslategray: [47, 79, 79, 1],
      darkslategrey: [47, 79, 79, 1],
      darkturquoise: [0, 206, 209, 1],
      darkviolet: [148, 0, 211, 1],
      deeppink: [255, 20, 147, 1],
      deepskyblue: [0, 191, 255, 1],
      dimgray: [105, 105, 105, 1],
      dimgrey: [105, 105, 105, 1],
      dodgerblue: [30, 144, 255, 1],
      firebrick: [178, 34, 34, 1],
      floralwhite: [255, 250, 240, 1],
      forestgreen: [34, 139, 34, 1],
      fuchsia: [255, 0, 255, 1],
      gainsboro: [220, 220, 220, 1],
      ghostwhite: [248, 248, 255, 1],
      gold: [255, 215, 0, 1],
      goldenrod: [218, 165, 32, 1],
      gray: [128, 128, 128, 1],
      green: [0, 128, 0, 1],
      greenyellow: [173, 255, 47, 1],
      grey: [128, 128, 128, 1],
      honeydew: [240, 255, 240, 1],
      hotpink: [255, 105, 180, 1],
      indianred: [205, 92, 92, 1],
      indigo: [75, 0, 130, 1],
      ivory: [255, 255, 240, 1],
      khaki: [240, 230, 140, 1],
      lavender: [230, 230, 250, 1],
      lavenderblush: [255, 240, 245, 1],
      lawngreen: [124, 252, 0, 1],
      lemonchiffon: [255, 250, 205, 1],
      lightblue: [173, 216, 230, 1],
      lightcoral: [240, 128, 128, 1],
      lightcyan: [224, 255, 255, 1],
      lightgoldenrodyellow: [250, 250, 210, 1],
      lightgray: [211, 211, 211, 1],
      lightgreen: [144, 238, 144, 1],
      lightgrey: [211, 211, 211, 1],
      lightpink: [255, 182, 193, 1],
      lightsalmon: [255, 160, 122, 1],
      lightseagreen: [32, 178, 170, 1],
      lightskyblue: [135, 206, 250, 1],
      lightslategray: [119, 136, 153, 1],
      lightslategrey: [119, 136, 153, 1],
      lightsteelblue: [176, 196, 222, 1],
      lightyellow: [255, 255, 224, 1],
      lime: [0, 255, 0, 1],
      limegreen: [50, 205, 50, 1],
      linen: [250, 240, 230, 1],
      magenta: [255, 0, 255, 1],
      maroon: [128, 0, 0, 1],
      mediumaquamarine: [102, 205, 170, 1],
      mediumblue: [0, 0, 205, 1],
      mediumorchid: [186, 85, 211, 1],
      mediumpurple: [147, 112, 219, 1],
      mediumseagreen: [60, 179, 113, 1],
      mediumslateblue: [123, 104, 238, 1],
      mediumspringgreen: [0, 250, 154, 1],
      mediumturquoise: [72, 209, 204, 1],
      mediumvioletred: [199, 21, 133, 1],
      midnightblue: [25, 25, 112, 1],
      mintcream: [245, 255, 250, 1],
      mistyrose: [255, 228, 225, 1],
      moccasin: [255, 228, 181, 1],
      navajowhite: [255, 222, 173, 1],
      navy: [0, 0, 128, 1],
      oldlace: [253, 245, 230, 1],
      olive: [128, 128, 0, 1],
      olivedrab: [107, 142, 35, 1],
      orange: [255, 165, 0, 1],
      orangered: [255, 69, 0, 1],
      orchid: [218, 112, 214, 1],
      palegoldenrod: [238, 232, 170, 1],
      palegreen: [152, 251, 152, 1],
      paleturquoise: [175, 238, 238, 1],
      palevioletred: [219, 112, 147, 1],
      papayawhip: [255, 239, 213, 1],
      peachpuff: [255, 218, 185, 1],
      peru: [205, 133, 63, 1],
      pink: [255, 192, 203, 1],
      plum: [221, 160, 221, 1],
      powderblue: [176, 224, 230, 1],
      purple: [128, 0, 128, 1],
      red: [255, 0, 0, 1],
      rosybrown: [188, 143, 143, 1],
      royalblue: [65, 105, 225, 1],
      saddlebrown: [139, 69, 19, 1],
      salmon: [250, 128, 114, 1],
      sandybrown: [244, 164, 96, 1],
      seagreen: [46, 139, 87, 1],
      seashell: [255, 245, 238, 1],
      sienna: [160, 82, 45, 1],
      silver: [192, 192, 192, 1],
      skyblue: [135, 206, 235, 1],
      slateblue: [106, 90, 205, 1],
      slategray: [112, 128, 144, 1],
      slategrey: [112, 128, 144, 1],
      snow: [255, 250, 250, 1],
      springgreen: [0, 255, 127, 1],
      steelblue: [70, 130, 180, 1],
      tan: [210, 180, 140, 1],
      teal: [0, 128, 128, 1],
      thistle: [216, 191, 216, 1],
      tomato: [255, 99, 71, 1],
      transparent: [0, 0, 0, 0],
      turquoise: [64, 224, 208, 1],
      violet: [238, 130, 238, 1],
      wheat: [245, 222, 179, 1],
      white: [255, 255, 255, 1],
      whitesmoke: [245, 245, 245, 1],
      yellow: [255, 255, 0, 1],
      yellowgreen: [154, 205, 50, 1],
      rebeccapurple: [102, 51, 153, 1],
    };
  });
  require.register('errors.js', function(module, exports, require) {
    exports.ParseError = ParseError;
    exports.SyntaxError = SyntaxError;
    SyntaxError.prototype.__proto__ = Error.prototype;
    function ParseError(msg) {
      this.name = 'ParseError';
      this.message = msg;
      Error.captureStackTrace(this, ParseError);
    }
    ParseError.prototype.__proto__ = Error.prototype;
    function SyntaxError(msg) {
      this.name = 'SyntaxError';
      this.message = msg;
      Error.captureStackTrace(this, ParseError);
    }
    SyntaxError.prototype.__proto__ = Error.prototype;
  });
  require.register('units.js', function(module, exports, require) {
    module.exports = [
      'em',
      'ex',
      'ch',
      'rem',
      'vw',
      'vh',
      'vmin',
      'vmax',
      'cm',
      'mm',
      'in',
      'pt',
      'pc',
      'px',
      'deg',
      'grad',
      'rad',
      'turn',
      's',
      'ms',
      'Hz',
      'kHz',
      'dpi',
      'dpcm',
      'dppx',
      'x',
      '%',
      'fr',
    ];
  });
  require.register('functions/index.js', function(module, exports, require) {
    exports['add-property'] = require('./add-property');
    exports.adjust = require('./adjust');
    exports.alpha = require('./alpha');
    exports['base-convert'] = require('./base-convert');
    exports.basename = require('./basename');
    exports.blend = require('./blend');
    exports.blue = require('./blue');
    exports.clone = require('./clone');
    exports.component = require('./component');
    exports.contrast = require('./contrast');
    exports.convert = require('./convert');
    exports['current-media'] = require('./current-media');
    exports.define = require('./define');
    exports.dirname = require('./dirname');
    exports.error = require('./error');
    exports.extname = require('./extname');
    exports.green = require('./green');
    exports.hsl = require('./hsl');
    exports.hsla = require('./hsla');
    exports.hue = require('./hue');
    exports.length = require('./length');
    exports.lightness = require('./lightness');
    exports['list-separator'] = require('./list-separator');
    exports.lookup = require('./lookup');
    exports.luminosity = require('./luminosity');
    exports.match = require('./match');
    exports.math = require('./math');
    exports.merge = exports.extend = require('./merge');
    exports.operate = require('./operate');
    exports['opposite-position'] = require('./opposite-position');
    exports.p = require('./p');
    exports.pathjoin = require('./pathjoin');
    exports.pop = require('./pop');
    exports.push = exports.append = require('./push');
    exports.range = require('./range');
    exports.red = require('./red');
    exports.remove = require('./remove');
    exports.replace = require('./replace');
    exports.rgb = require('./rgb');
    exports.rgba = require('./rgba');
    exports.s = require('./s');
    exports.saturation = require('./saturation');
    exports['selector-exists'] = require('./selector-exists');
    exports.selector = require('./selector');
    exports.selectors = require('./selectors');
    exports.shift = require('./shift');
    exports.split = require('./split');
    exports.substr = require('./substr');
    exports.slice = require('./slice');
    exports.tan = require('./tan');
    exports.trace = require('./trace');
    exports.transparentify = require('./transparentify');
    exports.type = exports.typeof = exports['type-of'] = require('./type');
    exports.unit = require('./unit');
    exports.unquote = require('./unquote');
    exports.unshift = exports.prepend = require('./unshift');
    exports.warn = require('./warn');
    exports['-math-prop'] = require('./math-prop');
    exports['-prefix-classes'] = require('./prefix-classes');
  });
  require.register('functions/url.js', function(module, exports, require) {
    var Compiler = require('../visitor/compiler'),
      events = require('../renderer').events,
      nodes = require('../nodes'),
      extname = require('../path').extname,
      utils = require('../utils');
    var defaultMimes = {
      '.gif': 'image/gif',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.webp': 'image/webp',
      '.ttf': 'application/x-font-ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.woff': 'application/font-woff',
      '.woff2': 'application/font-woff2',
    };
    var encodingTypes = { BASE_64: 'base64', UTF8: 'charset=utf-8' };
    module.exports = function(options) {
      options = options || {};
      var _paths = options.paths || [];
      var sizeLimit = null != options.limit ? options.limit : 3e4;
      var mimes = options.mimes || defaultMimes;
      function fn(url, enc) {
        var compiler = new Compiler(url),
          encoding = encodingTypes.BASE_64;
        compiler.isURL = true;
        url = url.nodes
          .map(function(node) {
            return compiler.visit(node);
          })
          .join('');
        url = parse(url);
        var ext = extname(url.pathname),
          mime = mimes[ext],
          hash = url.hash || '',
          literal = new nodes.Literal('url("' + url.href + '")'),
          paths = _paths.concat(this.paths),
          buf,
          result;
        if (!mime) return literal;
        if (url.protocol) return literal;
        var found = utils.lookup(url.pathname, paths);
        if (!found) {
          events.emit(
            'file not found',
            'File ' + literal + ' could not be found, literal url retained!',
          );
          return literal;
        }
        buf = fs.readFileSync(found);
        if (false !== sizeLimit && buf.length > sizeLimit) return literal;
        if (enc && 'utf8' == enc.first.val.toLowerCase()) {
          encoding = encodingTypes.UTF8;
          result = buf
            .toString('utf8')
            .replace(/\s+/g, ' ')
            .replace(/[{}\|\\\^~\[\]`"<>#%]/g, function(match) {
              return '%' + match[0].charCodeAt(0).toString(16).toUpperCase();
            })
            .trim();
        } else {
          result = buf.toString(encoding) + hash;
        }
        return new nodes.Literal(
          'url("data:' + mime + ';' + encoding + ',' + result + '")',
        );
      }
      fn.raw = true;
      return fn;
    };
    module.exports.mimes = defaultMimes;
  });
  require.register('functions/add-property.js', function(
    module,
    exports,
    require,
  ) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    (module.exports = function addProperty(name, expr) {
      utils.assertType(name, 'expression', 'name');
      name = utils.unwrap(name).first;
      utils.assertString(name, 'name');
      utils.assertType(expr, 'expression', 'expr');
      var prop = new nodes.Property([name], expr);
      var block = this.closestBlock;
      var len = block.nodes.length,
        head = block.nodes.slice(0, block.index),
        tail = block.nodes.slice(block.index++, len);
      head.push(prop);
      block.nodes = head.concat(tail);
      return prop;
    }).raw = true;
  });
  require.register('functions/adjust.js', function(module, exports, require) {
    var utils = require('../utils');
    module.exports = function adjust(color, prop, amount) {
      utils.assertColor(color, 'color');
      utils.assertString(prop, 'prop');
      utils.assertType(amount, 'unit', 'amount');
      var hsl = color.hsla.clone();
      prop = { hue: 'h', saturation: 's', lightness: 'l' }[prop.string];
      if (!prop) throw new Error('invalid adjustment property');
      var val = amount.val;
      if ('%' == amount.type) {
        val =
          'l' == prop && val > 0
            ? (100 - hsl[prop]) * val / 100
            : hsl[prop] * (val / 100);
      }
      hsl[prop] += val;
      return hsl.rgba;
    };
  });
  require.register('functions/alpha.js', function(module, exports, require) {
    var nodes = require('../nodes'),
      rgba = require('./rgba');
    module.exports = function alpha(color, value) {
      color = color.rgba;
      if (value) {
        return rgba(
          new nodes.Unit(color.r),
          new nodes.Unit(color.g),
          new nodes.Unit(color.b),
          value,
        );
      }
      return new nodes.Unit(color.a, '');
    };
  });
  require.register('functions/base-convert.js', function(
    module,
    exports,
    require,
  ) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    (module.exports = function(num, base, width) {
      utils.assertPresent(num, 'number');
      utils.assertPresent(base, 'base');
      num = utils.unwrap(num).nodes[0].val;
      base = utils.unwrap(base).nodes[0].val;
      width = (width && utils.unwrap(width).nodes[0].val) || 2;
      var result = Number(num).toString(base);
      while (result.length < width) {
        result = '0' + result;
      }
      return new nodes.Literal(result);
    }).raw = true;
  });
  require.register('functions/basename.js', function(module, exports, require) {
    var utils = require('../utils'),
      path = require('../path');
    module.exports = function basename(p, ext) {
      utils.assertString(p, 'path');
      return path.basename(p.val, ext && ext.val);
    };
  });
  require.register('functions/blend.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function blend(top, bottom) {
      utils.assertColor(top);
      top = top.rgba;
      bottom = bottom || new nodes.RGBA(255, 255, 255, 1);
      utils.assertColor(bottom);
      bottom = bottom.rgba;
      return new nodes.RGBA(
        top.r * top.a + bottom.r * (1 - top.a),
        top.g * top.a + bottom.g * (1 - top.a),
        top.b * top.a + bottom.b * (1 - top.a),
        top.a + bottom.a - top.a * bottom.a,
      );
    };
  });
  require.register('functions/blue.js', function(module, exports, require) {
    var nodes = require('../nodes'),
      rgba = require('./rgba');
    module.exports = function blue(color, value) {
      color = color.rgba;
      if (value) {
        return rgba(
          new nodes.Unit(color.r),
          new nodes.Unit(color.g),
          value,
          new nodes.Unit(color.a),
        );
      }
      return new nodes.Unit(color.b, '');
    };
  });
  require.register('functions/clone.js', function(module, exports, require) {
    var utils = require('../utils');
    (module.exports = function clone(expr) {
      utils.assertPresent(expr, 'expr');
      return expr.clone();
    }).raw = true;
  });
  require.register('functions/component.js', function(
    module,
    exports,
    require,
  ) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    var componentMap = {
      red: 'r',
      green: 'g',
      blue: 'b',
      alpha: 'a',
      hue: 'h',
      saturation: 's',
      lightness: 'l',
    };
    var unitMap = { hue: 'deg', saturation: '%', lightness: '%' };
    var typeMap = {
      red: 'rgba',
      blue: 'rgba',
      green: 'rgba',
      alpha: 'rgba',
      hue: 'hsla',
      saturation: 'hsla',
      lightness: 'hsla',
    };
    module.exports = function component(color, name) {
      utils.assertColor(color, 'color');
      utils.assertString(name, 'name');
      var name = name.string,
        unit = unitMap[name],
        type = typeMap[name],
        name = componentMap[name];
      if (!name) throw new Error('invalid color component "' + name + '"');
      return new nodes.Unit(color[type][name], unit);
    };
  });
  require.register('functions/contrast.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes'),
      blend = require('./blend'),
      luminosity = require('./luminosity');
    module.exports = function contrast(top, bottom) {
      if ('rgba' != top.nodeName && 'hsla' != top.nodeName) {
        return new nodes.Literal(
          'contrast(' + (top.isNull ? '' : top.toString()) + ')',
        );
      }
      var result = new nodes.Object();
      top = top.rgba;
      bottom = bottom || new nodes.RGBA(255, 255, 255, 1);
      utils.assertColor(bottom);
      bottom = bottom.rgba;
      function contrast(top, bottom) {
        if (1 > top.a) {
          top = blend(top, bottom);
        }
        var l1 = luminosity(bottom).val + 0.05,
          l2 = luminosity(top).val + 0.05,
          ratio = l1 / l2;
        if (l2 > l1) {
          ratio = 1 / ratio;
        }
        return Math.round(ratio * 10) / 10;
      }
      if (1 <= bottom.a) {
        var resultRatio = new nodes.Unit(contrast(top, bottom));
        result.set('ratio', resultRatio);
        result.set('error', new nodes.Unit(0));
        result.set('min', resultRatio);
        result.set('max', resultRatio);
      } else {
        var onBlack = contrast(top, blend(bottom, new nodes.RGBA(0, 0, 0, 1))),
          onWhite = contrast(
            top,
            blend(bottom, new nodes.RGBA(255, 255, 255, 1)),
          ),
          max = Math.max(onBlack, onWhite);
        function processChannel(topChannel, bottomChannel) {
          return Math.min(
            Math.max(
              0,
              (topChannel - bottomChannel * bottom.a) / (1 - bottom.a),
            ),
            255,
          );
        }
        var closest = new nodes.RGBA(
          processChannel(top.r, bottom.r),
          processChannel(top.g, bottom.g),
          processChannel(top.b, bottom.b),
          1,
        );
        var min = contrast(top, blend(bottom, closest));
        result.set('ratio', new nodes.Unit(Math.round((min + max) * 50) / 100));
        result.set('error', new nodes.Unit(Math.round((max - min) * 50) / 100));
        result.set('min', new nodes.Unit(min));
        result.set('max', new nodes.Unit(max));
      }
      return result;
    };
  });
  require.register('functions/convert.js', function(module, exports, require) {
    var utils = require('../utils');
    module.exports = function convert(str) {
      utils.assertString(str, 'str');
      return utils.parseString(str.string);
    };
  });
  require.register('functions/current-media.js', function(
    module,
    exports,
    require,
  ) {
    var nodes = require('../nodes');
    module.exports = function currentMedia() {
      var self = this;
      return new nodes.String(lookForMedia(this.closestBlock.node) || '');
      function lookForMedia(node) {
        if ('media' == node.nodeName) {
          node.val = self.visit(node.val);
          return node.toString();
        } else if (node.block.parent.node) {
          return lookForMedia(node.block.parent.node);
        }
      }
    };
  });
  require.register('functions/define.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function define(name, expr, global) {
      utils.assertType(name, 'string', 'name');
      expr = utils.unwrap(expr);
      var scope = this.currentScope;
      if (global && global.toBoolean().isTrue) {
        scope = this.global.scope;
      }
      var node = new nodes.Ident(name.val, expr);
      scope.add(node);
      return nodes.nil;
    };
  });
  require.register('functions/dirname.js', function(module, exports, require) {
    var utils = require('../utils'),
      path = require('../path');
    module.exports = function dirname(p) {
      utils.assertString(p, 'path');
      return path.dirname(p.val).replace(/\\/g, '/');
    };
  });
  require.register('functions/error.js', function(module, exports, require) {
    var utils = require('../utils');
    module.exports = function error(msg) {
      utils.assertType(msg, 'string', 'msg');
      var err = new Error(msg.val);
      err.fromStylus = true;
      throw err;
    };
  });
  require.register('functions/extname.js', function(module, exports, require) {
    var utils = require('../utils'),
      path = require('../path');
    module.exports = function extname(p) {
      utils.assertString(p, 'path');
      return path.extname(p.val);
    };
  });
  require.register('functions/green.js', function(module, exports, require) {
    var nodes = require('../nodes'),
      rgba = require('./rgba');
    module.exports = function green(color, value) {
      color = color.rgba;
      if (value) {
        return rgba(
          new nodes.Unit(color.r),
          value,
          new nodes.Unit(color.b),
          new nodes.Unit(color.a),
        );
      }
      return new nodes.Unit(color.g, '');
    };
  });
  require.register('functions/hsl.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes'),
      hsla = require('./hsla');
    module.exports = function hsl(hue, saturation, lightness) {
      if (1 == arguments.length) {
        utils.assertColor(hue, 'color');
        return hue.hsla;
      } else {
        return hsla(hue, saturation, lightness, new nodes.Unit(1));
      }
    };
  });
  require.register('functions/hsla.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function hsla(hue, saturation, lightness, alpha) {
      switch (arguments.length) {
        case 1:
          utils.assertColor(hue);
          return hue.hsla;
        case 2:
          utils.assertColor(hue);
          var color = hue.hsla;
          utils.assertType(saturation, 'unit', 'alpha');
          var alpha = saturation.clone();
          if ('%' == alpha.type) alpha.val /= 100;
          return new nodes.HSLA(color.h, color.s, color.l, alpha.val);
        default:
          utils.assertType(hue, 'unit', 'hue');
          utils.assertType(saturation, 'unit', 'saturation');
          utils.assertType(lightness, 'unit', 'lightness');
          utils.assertType(alpha, 'unit', 'alpha');
          var alpha = alpha.clone();
          if (alpha && '%' == alpha.type) alpha.val /= 100;
          return new nodes.HSLA(
            hue.val,
            saturation.val,
            lightness.val,
            alpha.val,
          );
      }
    };
  });
  require.register('functions/hue.js', function(module, exports, require) {
    var nodes = require('../nodes'),
      hsla = require('./hsla'),
      component = require('./component');
    module.exports = function hue(color, value) {
      if (value) {
        var hslaColor = color.hsla;
        return hsla(
          value,
          new nodes.Unit(hslaColor.s),
          new nodes.Unit(hslaColor.l),
          new nodes.Unit(hslaColor.a),
        );
      }
      return component(color, new nodes.String('hue'));
    };
  });
  require.register('functions/length.js', function(module, exports, require) {
    var utils = require('../utils');
    (module.exports = function length(expr) {
      if (expr) {
        if (expr.nodes) {
          var nodes = utils.unwrap(expr).nodes;
          if (1 == nodes.length && 'object' == nodes[0].nodeName) {
            return nodes[0].length;
          } else {
            return nodes.length;
          }
        } else {
          return 1;
        }
      }
      return 0;
    }).raw = true;
  });
  require.register('functions/lightness.js', function(
    module,
    exports,
    require,
  ) {
    var nodes = require('../nodes'),
      hsla = require('./hsla'),
      component = require('./component');
    module.exports = function lightness(color, value) {
      if (value) {
        var hslaColor = color.hsla;
        return hsla(
          new nodes.Unit(hslaColor.h),
          new nodes.Unit(hslaColor.s),
          value,
          new nodes.Unit(hslaColor.a),
        );
      }
      return component(color, new nodes.String('lightness'));
    };
  });
  require.register('functions/list-separator.js', function(
    module,
    exports,
    require,
  ) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    (module.exports = function listSeparator(list) {
      list = utils.unwrap(list);
      return new nodes.String(list.isList ? ',' : ' ');
    }).raw = true;
  });
  require.register('functions/lookup.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function lookup(name) {
      utils.assertType(name, 'string', 'name');
      var node = this.lookup(name.val);
      if (!node) return nodes.nil;
      return this.visit(node);
    };
  });
  require.register('functions/luminosity.js', function(
    module,
    exports,
    require,
  ) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function luminosity(color) {
      utils.assertColor(color);
      color = color.rgba;
      function processChannel(channel) {
        channel = channel / 255;
        return 0.03928 > channel
          ? channel / 12.92
          : Math.pow((channel + 0.055) / 1.055, 2.4);
      }
      return new nodes.Unit(
        0.2126 * processChannel(color.r) +
          0.7152 * processChannel(color.g) +
          0.0722 * processChannel(color.b),
      );
    };
  });
  require.register('functions/match.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    var VALID_FLAGS = 'igm';
    module.exports = function match(pattern, val, flags) {
      utils.assertType(pattern, 'string', 'pattern');
      utils.assertString(val, 'val');
      var re = new RegExp(
        pattern.val,
        validateFlags(flags) ? flags.string : '',
      );
      return val.string.match(re);
    };
    function validateFlags(flags) {
      flags = flags && flags.string;
      if (flags) {
        return flags.split('').every(function(flag) {
          return ~VALID_FLAGS.indexOf(flag);
        });
      }
      return false;
    }
  });
  require.register('functions/math-prop.js', function(
    module,
    exports,
    require,
  ) {
    var nodes = require('../nodes');
    module.exports = function math(prop) {
      return new nodes.Unit(Math[prop.string]);
    };
  });
  require.register('functions/math.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function math(n, fn) {
      utils.assertType(n, 'unit', 'n');
      utils.assertString(fn, 'fn');
      return new nodes.Unit(Math[fn.string](n.val), n.type);
    };
  });
  require.register('functions/merge.js', function(module, exports, require) {
    var utils = require('../utils');
    (module.exports = function merge(dest) {
      utils.assertPresent(dest, 'dest');
      dest = utils.unwrap(dest).first;
      utils.assertType(dest, 'object', 'dest');
      var last = utils.unwrap(arguments[arguments.length - 1]).first,
        deep = true === last.val;
      for (var i = 1, len = arguments.length - deep; i < len; ++i) {
        utils.merge(dest.vals, utils.unwrap(arguments[i]).first.vals, deep);
      }
      return dest;
    }).raw = true;
  });
  require.register('functions/operate.js', function(module, exports, require) {
    var utils = require('../utils');
    module.exports = function operate(op, left, right) {
      utils.assertType(op, 'string', 'op');
      utils.assertPresent(left, 'left');
      utils.assertPresent(right, 'right');
      return left.operate(op.val, right);
    };
  });
  require.register('functions/opposite-position.js', function(
    module,
    exports,
    require,
  ) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    (module.exports = function oppositePosition(positions) {
      var expr = [];
      utils.unwrap(positions).nodes.forEach(function(pos, i) {
        utils.assertString(pos, 'position ' + i);
        pos = (function() {
          switch (pos.string) {
            case 'top':
              return 'bottom';
            case 'bottom':
              return 'top';
            case 'left':
              return 'right';
            case 'right':
              return 'left';
            case 'center':
              return 'center';
            default:
              throw new Error('invalid position ' + pos);
          }
        })();
        expr.push(new nodes.Literal(pos));
      });
      return expr;
    }).raw = true;
  });
  require.register('functions/p.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    (module.exports = function p() {
      [].slice.call(arguments).forEach(function(expr) {
        expr = utils.unwrap(expr);
        if (!expr.nodes.length) return;
        console.log(
          '[90minspect:[0m %s',
          expr.toString().replace(/^\(|\)$/g, ''),
        );
      });
      return nodes.nil;
    }).raw = true;
  });
  require.register('functions/pathjoin.js', function(module, exports, require) {
    var path = require('../path');
    (module.exports = function pathjoin() {
      var paths = [].slice.call(arguments).map(function(path) {
        return path.first.string;
      });
      return path.join.apply(null, paths).replace(/\\/g, '/');
    }).raw = true;
  });
  require.register('functions/pop.js', function(module, exports, require) {
    var utils = require('../utils');
    (module.exports = function pop(expr) {
      expr = utils.unwrap(expr);
      return expr.nodes.pop();
    }).raw = true;
  });
  require.register('functions/prefix-classes.js', function(
    module,
    exports,
    require,
  ) {
    var utils = require('../utils');
    module.exports = function prefixClasses(prefix, block) {
      utils.assertString(prefix, 'prefix');
      utils.assertType(block, 'block', 'block');
      var _prefix = this.prefix;
      this.options.prefix = this.prefix = prefix.string;
      block = this.visit(block);
      this.options.prefix = this.prefix = _prefix;
      return block;
    };
  });
  require.register('functions/push.js', function(module, exports, require) {
    var utils = require('../utils');
    (module.exports = function(expr) {
      expr = utils.unwrap(expr);
      for (var i = 1, len = arguments.length; i < len; ++i) {
        expr.nodes.push(utils.unwrap(arguments[i]).clone());
      }
      return expr.nodes.length;
    }).raw = true;
  });
  require.register('functions/range.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function range(start, stop, step) {
      utils.assertType(start, 'unit', 'start');
      utils.assertType(stop, 'unit', 'stop');
      if (step) {
        utils.assertType(step, 'unit', 'step');
        if (0 == step.val) {
          throw new Error('ArgumentError: "step" argument must not be zero');
        }
      } else {
        step = new nodes.Unit(1);
      }
      var list = new nodes.Expression();
      for (var i = start.val; i <= stop.val; i += step.val) {
        list.push(new nodes.Unit(i, start.type));
      }
      return list;
    };
  });
  require.register('functions/red.js', function(module, exports, require) {
    var nodes = require('../nodes'),
      rgba = require('./rgba');
    module.exports = function red(color, value) {
      color = color.rgba;
      if (value) {
        return rgba(
          value,
          new nodes.Unit(color.g),
          new nodes.Unit(color.b),
          new nodes.Unit(color.a),
        );
      }
      return new nodes.Unit(color.r, '');
    };
  });
  require.register('functions/remove.js', function(module, exports, require) {
    var utils = require('../utils');
    module.exports = function remove(object, key) {
      utils.assertType(object, 'object', 'object');
      utils.assertString(key, 'key');
      delete object.vals[key.string];
      return object;
    };
  });
  require.register('functions/replace.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function replace(pattern, replacement, val) {
      utils.assertString(pattern, 'pattern');
      utils.assertString(replacement, 'replacement');
      utils.assertString(val, 'val');
      pattern = new RegExp(pattern.string, 'g');
      var res = val.string.replace(pattern, replacement.string);
      return val instanceof nodes.Ident
        ? new nodes.Ident(res)
        : new nodes.String(res);
    };
  });
  require.register('functions/rgb.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes'),
      rgba = require('./rgba');
    module.exports = function rgb(red, green, blue) {
      switch (arguments.length) {
        case 1:
          utils.assertColor(red);
          var color = red.rgba;
          return new nodes.RGBA(color.r, color.g, color.b, 1);
        default:
          return rgba(red, green, blue, new nodes.Unit(1));
      }
    };
  });
  require.register('functions/rgba.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function rgba(red, green, blue, alpha) {
      switch (arguments.length) {
        case 1:
          utils.assertColor(red);
          return red.rgba;
        case 2:
          utils.assertColor(red);
          var color = red.rgba;
          utils.assertType(green, 'unit', 'alpha');
          alpha = green.clone();
          if ('%' == alpha.type) alpha.val /= 100;
          return new nodes.RGBA(color.r, color.g, color.b, alpha.val);
        default:
          utils.assertType(red, 'unit', 'red');
          utils.assertType(green, 'unit', 'green');
          utils.assertType(blue, 'unit', 'blue');
          utils.assertType(alpha, 'unit', 'alpha');
          var r = '%' == red.type ? Math.round(red.val * 2.55) : red.val,
            g = '%' == green.type ? Math.round(green.val * 2.55) : green.val,
            b = '%' == blue.type ? Math.round(blue.val * 2.55) : blue.val;
          alpha = alpha.clone();
          if (alpha && '%' == alpha.type) alpha.val /= 100;
          return new nodes.RGBA(r, g, b, alpha.val);
      }
    };
  });
  require.register('functions/s.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes'),
      Compiler = require('../visitor/compiler');
    (module.exports = function s(fmt) {
      fmt = utils.unwrap(fmt).nodes[0];
      utils.assertString(fmt);
      var self = this,
        str = fmt.string,
        args = arguments,
        i = 1;
      str = str.replace(/%(s|d)/g, function(_, specifier) {
        var arg = args[i++] || nodes.nil;
        switch (specifier) {
          case 's':
            return new Compiler(arg, self.options).compile();
          case 'd':
            arg = utils.unwrap(arg).first;
            if ('unit' != arg.nodeName) throw new Error('%d requires a unit');
            return arg.val;
        }
      });
      return new nodes.Literal(str);
    }).raw = true;
  });
  require.register('functions/saturation.js', function(
    module,
    exports,
    require,
  ) {
    var nodes = require('../nodes'),
      hsla = require('./hsla'),
      component = require('./component');
    module.exports = function saturation(color, value) {
      if (value) {
        var hslaColor = color.hsla;
        return hsla(
          new nodes.Unit(hslaColor.h),
          value,
          new nodes.Unit(hslaColor.l),
          new nodes.Unit(hslaColor.a),
        );
      }
      return component(color, new nodes.String('saturation'));
    };
  });
  require.register('functions/selector-exists.js', function(
    module,
    exports,
    require,
  ) {
    var utils = require('../utils');
    module.exports = function selectorExists(sel) {
      utils.assertString(sel, 'selector');
      if (!this.__selectorsMap__) {
        var Normalizer = require('../visitor/normalizer'),
          visitor = new Normalizer(this.root.clone());
        visitor.visit(visitor.root);
        this.__selectorsMap__ = visitor.map;
      }
      return sel.string in this.__selectorsMap__;
    };
  });
  require.register('functions/selector.js', function(module, exports, require) {
    var utils = require('../utils');
    (module.exports = function selector() {
      var stack = this.selectorStack,
        args = [].slice.call(arguments);
      if (1 == args.length) {
        var expr = utils.unwrap(args[0]),
          len = expr.nodes.length;
        if (1 == len) {
          utils.assertString(expr.first, 'selector');
          var SelectorParser = require('../selector-parser'),
            val = expr.first.string,
            parsed = new SelectorParser(val).parse().val;
          if (parsed == val) return val;
          stack.push(parse(val));
        } else if (len > 1) {
          if (expr.isList) {
            pushToStack(expr.nodes, stack);
          } else {
            stack.push(
              parse(
                expr.nodes
                  .map(function(node) {
                    utils.assertString(node, 'selector');
                    return node.string;
                  })
                  .join(' '),
              ),
            );
          }
        }
      } else if (args.length > 1) {
        pushToStack(args, stack);
      }
      return stack.length ? utils.compileSelectors(stack).join(',') : '&';
    }).raw = true;
    function pushToStack(selectors, stack) {
      selectors.forEach(function(sel) {
        sel = sel.first;
        utils.assertString(sel, 'selector');
        stack.push(parse(sel.string));
      });
    }
    function parse(selector) {
      var Parser = new require('../parser'),
        parser = new Parser(selector),
        nodes;
      parser.state.push('selector-parts');
      nodes = parser.selector();
      nodes.forEach(function(node) {
        node.val = node.segments
          .map(function(seg) {
            return seg.toString();
          })
          .join('');
      });
      return nodes;
    }
  });
  require.register('functions/selectors.js', function(
    module,
    exports,
    require,
  ) {
    var nodes = require('../nodes'),
      Parser = require('../selector-parser');
    module.exports = function selectors() {
      var stack = this.selectorStack,
        expr = new nodes.Expression(true);
      if (stack.length) {
        for (var i = 0; i < stack.length; i++) {
          var group = stack[i],
            nested;
          if (group.length > 1) {
            expr.push(
              new nodes.String(
                group
                  .map(function(selector) {
                    nested = new Parser(selector.val).parse().nested;
                    return (nested && i ? '& ' : '') + selector.val;
                  })
                  .join(','),
              ),
            );
          } else {
            var selector = group[0].val;
            nested = new Parser(selector).parse().nested;
            expr.push(new nodes.String((nested && i ? '& ' : '') + selector));
          }
        }
      } else {
        expr.push(new nodes.String('&'));
      }
      return expr;
    };
  });
  require.register('functions/shift.js', function(module, exports, require) {
    var utils = require('../utils');
    (module.exports = function(expr) {
      expr = utils.unwrap(expr);
      return expr.nodes.shift();
    }).raw = true;
  });
  require.register('functions/split.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function split(delim, val) {
      utils.assertString(delim, 'delimiter');
      utils.assertString(val, 'val');
      var splitted = val.string.split(delim.string);
      var expr = new nodes.Expression();
      var ItemNode = val instanceof nodes.Ident ? nodes.Ident : nodes.String;
      for (var i = 0, len = splitted.length; i < len; ++i) {
        expr.nodes.push(new ItemNode(splitted[i]));
      }
      return expr;
    };
  });
  require.register('functions/slice.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    (module.exports = function slice(val, start, end) {
      start = start && start.nodes[0].val;
      end = end && end.nodes[0].val;
      val = utils.unwrap(val).nodes;
      if (val.length > 1) {
        return utils.coerce(val.slice(start, end), true);
      }
      var result = val[0].string.slice(start, end);
      return val[0] instanceof nodes.Ident
        ? new nodes.Ident(result)
        : new nodes.String(result);
    }).raw = true;
  });
  require.register('functions/substr.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function substr(val, start, length) {
      utils.assertString(val, 'val');
      utils.assertType(start, 'unit', 'start');
      length = length && length.val;
      var res = val.string.substr(start.val, length);
      return val instanceof nodes.Ident
        ? new nodes.Ident(res)
        : new nodes.String(res);
    };
  });
  require.register('functions/tan.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function tan(angle) {
      utils.assertType(angle, 'unit', 'angle');
      var radians = angle.val;
      if (angle.type === 'deg') {
        radians *= Math.PI / 180;
      }
      var m = Math.pow(10, 9);
      var sin = Math.round(Math.sin(radians) * m) / m,
        cos = Math.round(Math.cos(radians) * m) / m,
        tan = Math.round(m * sin / cos) / m;
      return new nodes.Unit(tan, '');
    };
  });
  require.register('functions/trace.js', function(module, exports, require) {
    var nodes = require('../nodes');
    module.exports = function trace() {
      console.log(this.stack);
      return nodes.nil;
    };
  });
  require.register('functions/transparentify.js', function(
    module,
    exports,
    require,
  ) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function transparentify(top, bottom, alpha) {
      utils.assertColor(top);
      top = top.rgba;
      bottom = bottom || new nodes.RGBA(255, 255, 255, 1);
      if (!alpha && bottom && !bottom.rgba) {
        alpha = bottom;
        bottom = new nodes.RGBA(255, 255, 255, 1);
      }
      utils.assertColor(bottom);
      bottom = bottom.rgba;
      var bestAlpha = ['r', 'g', 'b']
        .map(function(channel) {
          return (
            (top[channel] - bottom[channel]) /
            ((0 < top[channel] - bottom[channel] ? 255 : 0) - bottom[channel])
          );
        })
        .sort(function(a, b) {
          return a < b;
        })[0];
      if (alpha) {
        utils.assertType(alpha, 'unit', 'alpha');
        if ('%' == alpha.type) {
          bestAlpha = alpha.val / 100;
        } else if (!alpha.type) {
          bestAlpha = alpha = alpha.val;
        }
      }
      bestAlpha = Math.max(Math.min(bestAlpha, 1), 0);
      function processChannel(channel) {
        if (0 == bestAlpha) {
          return bottom[channel];
        } else {
          return bottom[channel] + (top[channel] - bottom[channel]) / bestAlpha;
        }
      }
      return new nodes.RGBA(
        processChannel('r'),
        processChannel('g'),
        processChannel('b'),
        Math.round(bestAlpha * 100) / 100,
      );
    };
  });
  require.register('functions/type.js', function(module, exports, require) {
    var utils = require('../utils');
    module.exports = function type(node) {
      utils.assertPresent(node, 'expression');
      return node.nodeName;
    };
  });
  require.register('functions/unit.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function unit(unit, type) {
      utils.assertType(unit, 'unit', 'unit');
      if (type) {
        utils.assertString(type, 'type');
        return new nodes.Unit(unit.val, type.string);
      } else {
        return unit.type || '';
      }
    };
  });
  require.register('functions/unquote.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function unquote(string) {
      utils.assertString(string, 'string');
      return new nodes.Literal(string.string);
    };
  });
  require.register('functions/unshift.js', function(module, exports, require) {
    var utils = require('../utils');
    (module.exports = function(expr) {
      expr = utils.unwrap(expr);
      for (var i = 1, len = arguments.length; i < len; ++i) {
        expr.nodes.unshift(utils.unwrap(arguments[i]));
      }
      return expr.nodes.length;
    }).raw = true;
  });
  require.register('functions/warn.js', function(module, exports, require) {
    var utils = require('../utils'),
      nodes = require('../nodes');
    module.exports = function warn(msg) {
      utils.assertType(msg, 'string', 'msg');
      console.warn('Warning: %s', msg.val);
      return nodes.nil;
    };
  });
  require.register('lexer.js', function(module, exports, require) {
    var Token = require('./token'),
      nodes = require('./nodes'),
      errors = require('./errors');
    exports = module.exports = Lexer;
    var alias = {
      and: '&&',
      or: '||',
      is: '==',
      isnt: '!=',
      'is not': '!=',
      ':=': '?=',
    };
    function Lexer(str, options) {
      options = options || {};
      this.stash = [];
      this.indentStack = [];
      this.indentRe = null;
      this.lineno = 1;
      this.column = 1;
      function comment(str, val, offset, s) {
        var inComment =
            s.lastIndexOf('/*', offset) > s.lastIndexOf('*/', offset),
          commentIdx = s.lastIndexOf('//', offset),
          i = s.lastIndexOf('\n', offset),
          double = 0,
          single = 0;
        if (~commentIdx && commentIdx > i) {
          while (i != offset) {
            if ("'" == s[i]) single ? single-- : single++;
            if ('"' == s[i]) double ? double-- : double++;
            if ('/' == s[i] && '/' == s[i + 1]) {
              inComment = !single && !double;
              break;
            }
            ++i;
          }
        }
        return inComment ? str : val + '\r';
      }
      if ('\ufeff' == str.charAt(0)) str = str.slice(1);
      this.str = str
        .replace(/\s+$/, '\n')
        .replace(/\r\n?/g, '\n')
        .replace(/\\ *\n/g, '\r')
        .replace(
          /([,(:](?!\/\/[^ ])) *(?:\/\/[^\n]*|\/\*.*?\*\/)?\n\s*/g,
          comment,
        )
        .replace(/\s*\n[ \t]*([,)])/g, comment);
    }
    Lexer.prototype = {
      inspect: function() {
        var tok,
          tmp = this.str,
          buf = [];
        while ('eos' != (tok = this.next()).type) {
          buf.push(tok.inspect());
        }
        this.str = tmp;
        return buf.concat(tok.inspect()).join('\n');
      },
      lookahead: function(n) {
        var fetch = n - this.stash.length;
        while (fetch-- > 0) this.stash.push(this.advance());
        return this.stash[--n];
      },
      skip: function(len) {
        var chunk = len[0];
        len = chunk ? chunk.length : len;
        this.str = this.str.substr(len);
        if (chunk) {
          this.move(chunk);
        } else {
          this.column += len;
        }
      },
      move: function(str) {
        var lines = str.match(/\n/g),
          idx = str.lastIndexOf('\n');
        if (lines) this.lineno += lines.length;
        this.column = ~idx ? str.length - idx : this.column + str.length;
      },
      next: function() {
        var tok = this.stashed() || this.advance();
        this.prev = tok;
        return tok;
      },
      isPartOfSelector: function() {
        var tok = this.stash[this.stash.length - 1] || this.prev;
        switch (tok && tok.type) {
          case 'color':
            return 2 == tok.val.raw.length;
          case '.':
          case '[':
            return true;
        }
        return false;
      },
      advance: function() {
        var column = this.column,
          line = this.lineno,
          tok =
            this.eos() ||
            this.nil() ||
            this.sep() ||
            this.keyword() ||
            this.urlchars() ||
            this.comment() ||
            this.newline() ||
            this.escaped() ||
            this.important() ||
            this.literal() ||
            this.fun() ||
            this.anonFunc() ||
            this.atrule() ||
            this.brace() ||
            this.paren() ||
            this.color() ||
            this.string() ||
            this.unit() ||
            this.namedop() ||
            this.boolean() ||
            this.unicode() ||
            this.ident() ||
            this.op() ||
            this.eol() ||
            this.space() ||
            this.selector();
        tok.lineno = line;
        tok.column = column;
        return tok;
      },
      peek: function() {
        return this.lookahead(1);
      },
      stashed: function() {
        return this.stash.shift();
      },
      eos: function() {
        if (this.str.length) return;
        if (this.indentStack.length) {
          this.indentStack.shift();
          return new Token('outdent');
        } else {
          return new Token('eos');
        }
      },
      urlchars: function() {
        var captures;
        if (!this.isURL) return;
        if ((captures = /^[\/:@.;?&=*!,<>#%0-9]+/.exec(this.str))) {
          this.skip(captures);
          return new Token('literal', new nodes.Literal(captures[0]));
        }
      },
      sep: function() {
        var captures;
        if ((captures = /^;[ \t]*/.exec(this.str))) {
          this.skip(captures);
          return new Token(';');
        }
      },
      eol: function() {
        if ('\r' == this.str[0]) {
          ++this.lineno;
          this.skip(1);
          return this.advance();
        }
      },
      space: function() {
        var captures;
        if ((captures = /^([ \t]+)/.exec(this.str))) {
          this.skip(captures);
          return new Token('space');
        }
      },
      escaped: function() {
        var captures;
        if ((captures = /^\\(.)[ \t]*/.exec(this.str))) {
          var c = captures[1];
          this.skip(captures);
          return new Token('ident', new nodes.Literal(c));
        }
      },
      literal: function() {
        var captures;
        if ((captures = /^@css[ \t]*\{/.exec(this.str))) {
          this.skip(captures);
          var c,
            braces = 1,
            css = '',
            node;
          while ((c = this.str[0])) {
            this.str = this.str.substr(1);
            switch (c) {
              case '{':
                ++braces;
                break;
              case '}':
                --braces;
                break;
              case '\n':
              case '\r':
                ++this.lineno;
                break;
            }
            css += c;
            if (!braces) break;
          }
          css = css.replace(/\s*}$/, '');
          node = new nodes.Literal(css);
          node.css = true;
          return new Token('literal', node);
        }
      },
      important: function() {
        var captures;
        if ((captures = /^!important[ \t]*/.exec(this.str))) {
          this.skip(captures);
          return new Token('ident', new nodes.Literal('!important'));
        }
      },
      brace: function() {
        var captures;
        if ((captures = /^([{}])/.exec(this.str))) {
          this.skip(1);
          var brace = captures[1];
          return new Token(brace, brace);
        }
      },
      paren: function() {
        var captures;
        if ((captures = /^([()])([ \t]*)/.exec(this.str))) {
          var paren = captures[1];
          this.skip(captures);
          if (')' == paren) this.isURL = false;
          var tok = new Token(paren, paren);
          tok.space = captures[2];
          return tok;
        }
      },
      nil: function() {
        var captures, tok;
        if ((captures = /^(null)\b[ \t]*/.exec(this.str))) {
          this.skip(captures);
          if (this.isPartOfSelector()) {
            tok = new Token('ident', new nodes.Ident(captures[0]));
          } else {
            tok = new Token('null', nodes.nil);
          }
          return tok;
        }
      },
      keyword: function() {
        var captures, tok;
        if (
          (captures = /^(return|if|else|unless|for|in)\b[ \t]*/.exec(this.str))
        ) {
          var keyword = captures[1];
          this.skip(captures);
          if (this.isPartOfSelector()) {
            tok = new Token('ident', new nodes.Ident(captures[0]));
          } else {
            tok = new Token(keyword, keyword);
          }
          return tok;
        }
      },
      namedop: function() {
        var captures, tok;
        if (
          (captures = /^(not|and|or|is a|is defined|isnt|is not|is)(?!-)\b([ \t]*)/.exec(
            this.str,
          ))
        ) {
          var op = captures[1];
          this.skip(captures);
          if (this.isPartOfSelector()) {
            tok = new Token('ident', new nodes.Ident(captures[0]));
          } else {
            op = alias[op] || op;
            tok = new Token(op, op);
          }
          tok.space = captures[2];
          return tok;
        }
      },
      op: function() {
        var captures;
        if (
          (captures = /^([.]{1,3}|&&|\|\||[!<>=?:]=|\*\*|[-+*\/%]=?|[,=?:!~<>&\[\]])([ \t]*)/.exec(
            this.str,
          ))
        ) {
          var op = captures[1];
          this.skip(captures);
          op = alias[op] || op;
          var tok = new Token(op, op);
          tok.space = captures[2];
          this.isURL = false;
          return tok;
        }
      },
      anonFunc: function() {
        var tok;
        if ('@' == this.str[0] && '(' == this.str[1]) {
          this.skip(2);
          tok = new Token('function', new nodes.Ident('anonymous'));
          tok.anonymous = true;
          return tok;
        }
      },
      atrule: function() {
        var captures;
        if (
          (captures = /^@(?:-(\w+)-)?([a-zA-Z0-9-_]+)[ \t]*/.exec(this.str))
        ) {
          this.skip(captures);
          var vendor = captures[1],
            type = captures[2],
            tok;
          switch (type) {
            case 'require':
            case 'import':
            case 'charset':
            case 'namespace':
            case 'media':
            case 'scope':
            case 'supports':
              return new Token(type);
            case 'document':
              return new Token('-moz-document');
            case 'block':
              return new Token('atblock');
            case 'extend':
            case 'extends':
              return new Token('extend');
            case 'keyframes':
              return new Token(type, vendor);
            default:
              return new Token(
                'atrule',
                vendor ? '-' + vendor + '-' + type : type,
              );
          }
        }
      },
      comment: function() {
        if ('/' == this.str[0] && '/' == this.str[1]) {
          var end = this.str.indexOf('\n');
          if (-1 == end) end = this.str.length;
          this.skip(end);
          return this.advance();
        }
        if ('/' == this.str[0] && '*' == this.str[1]) {
          var end = this.str.indexOf('*/');
          if (-1 == end) end = this.str.length;
          var str = this.str.substr(0, end + 2),
            lines = str.split(/\n|\r/).length - 1,
            suppress = true,
            inline = false;
          this.lineno += lines;
          this.skip(end + 2);
          if ('!' == str[2]) {
            str = str.replace('*!', '*');
            suppress = false;
          }
          if (this.prev && ';' == this.prev.type) inline = true;
          return new Token('comment', new nodes.Comment(str, suppress, inline));
        }
      },
      boolean: function() {
        var captures;
        if ((captures = /^(true|false)\b([ \t]*)/.exec(this.str))) {
          var val = nodes.Boolean('true' == captures[1]);
          this.skip(captures);
          var tok = new Token('boolean', val);
          tok.space = captures[2];
          return tok;
        }
      },
      unicode: function() {
        var captures;
        if (
          (captures = /^u\+[0-9a-f?]{1,6}(?:-[0-9a-f]{1,6})?/i.exec(this.str))
        ) {
          this.skip(captures);
          return new Token('literal', new nodes.Literal(captures[0]));
        }
      },
      fun: function() {
        var captures;
        if ((captures = /^(-*[_a-zA-Z$][-\w\d$]*)\(([ \t]*)/.exec(this.str))) {
          var name = captures[1];
          this.skip(captures);
          this.isURL = 'url' == name;
          var tok = new Token('function', new nodes.Ident(name));
          tok.space = captures[2];
          return tok;
        }
      },
      ident: function() {
        var captures;
        if ((captures = /^-*[_a-zA-Z$][-\w\d$]*/.exec(this.str))) {
          this.skip(captures);
          return new Token('ident', new nodes.Ident(captures[0]));
        }
      },
      newline: function() {
        var captures, re;
        if (this.indentRe) {
          captures = this.indentRe.exec(this.str);
        } else {
          re = /^\n([\t]*)[ \t]*/;
          captures = re.exec(this.str);
          if (captures && !captures[1].length) {
            re = /^\n([ \t]*)/;
            captures = re.exec(this.str);
          }
          if (captures && captures[1].length) this.indentRe = re;
        }
        if (captures) {
          var tok,
            indents = captures[1].length;
          this.skip(captures);
          if (this.str[0] === ' ' || this.str[0] === '	') {
            throw new errors.SyntaxError(
              'Invalid indentation. You can use tabs or spaces to indent, but not both.',
            );
          }
          if ('\n' == this.str[0]) return this.advance();
          if (this.indentStack.length && indents < this.indentStack[0]) {
            while (this.indentStack.length && this.indentStack[0] > indents) {
              this.stash.push(new Token('outdent'));
              this.indentStack.shift();
            }
            tok = this.stash.pop();
          } else if (indents && indents != this.indentStack[0]) {
            this.indentStack.unshift(indents);
            tok = new Token('indent');
          } else {
            tok = new Token('newline');
          }
          return tok;
        }
      },
      unit: function() {
        var captures;
        if (
          (captures = /^(-)?(\d+\.\d+|\d+|\.\d+)(%|[a-zA-Z]+)?[ \t]*/.exec(
            this.str,
          ))
        ) {
          this.skip(captures);
          var n = parseFloat(captures[2]);
          if ('-' == captures[1]) n = -n;
          var node = new nodes.Unit(n, captures[3]);
          node.raw = captures[0];
          return new Token('unit', node);
        }
      },
      string: function() {
        var captures;
        if ((captures = /^("[^"]*"|'[^']*')[ \t]*/.exec(this.str))) {
          var str = captures[1],
            quote = captures[0][0];
          this.skip(captures);
          str = str.slice(1, -1).replace(/\\n/g, '\n');
          return new Token('string', new nodes.String(str, quote));
        }
      },
      color: function() {
        return (
          this.rrggbbaa() ||
          this.rrggbb() ||
          this.rgba() ||
          this.rgb() ||
          this.nn() ||
          this.n()
        );
      },
      n: function() {
        var captures;
        if ((captures = /^#([a-fA-F0-9]{1})[ \t]*/.exec(this.str))) {
          this.skip(captures);
          var n = parseInt(captures[1] + captures[1], 16),
            color = new nodes.RGBA(n, n, n, 1);
          color.raw = captures[0];
          return new Token('color', color);
        }
      },
      nn: function() {
        var captures;
        if ((captures = /^#([a-fA-F0-9]{2})[ \t]*/.exec(this.str))) {
          this.skip(captures);
          var n = parseInt(captures[1], 16),
            color = new nodes.RGBA(n, n, n, 1);
          color.raw = captures[0];
          return new Token('color', color);
        }
      },
      rgb: function() {
        var captures;
        if ((captures = /^#([a-fA-F0-9]{3})[ \t]*/.exec(this.str))) {
          this.skip(captures);
          var rgb = captures[1],
            r = parseInt(rgb[0] + rgb[0], 16),
            g = parseInt(rgb[1] + rgb[1], 16),
            b = parseInt(rgb[2] + rgb[2], 16),
            color = new nodes.RGBA(r, g, b, 1);
          color.raw = captures[0];
          return new Token('color', color);
        }
      },
      rgba: function() {
        var captures;
        if ((captures = /^#([a-fA-F0-9]{4})[ \t]*/.exec(this.str))) {
          this.skip(captures);
          var rgb = captures[1],
            r = parseInt(rgb[0] + rgb[0], 16),
            g = parseInt(rgb[1] + rgb[1], 16),
            b = parseInt(rgb[2] + rgb[2], 16),
            a = parseInt(rgb[3] + rgb[3], 16),
            color = new nodes.RGBA(r, g, b, a / 255);
          color.raw = captures[0];
          return new Token('color', color);
        }
      },
      rrggbb: function() {
        var captures;
        if ((captures = /^#([a-fA-F0-9]{6})[ \t]*/.exec(this.str))) {
          this.skip(captures);
          var rgb = captures[1],
            r = parseInt(rgb.substr(0, 2), 16),
            g = parseInt(rgb.substr(2, 2), 16),
            b = parseInt(rgb.substr(4, 2), 16),
            color = new nodes.RGBA(r, g, b, 1);
          color.raw = captures[0];
          return new Token('color', color);
        }
      },
      rrggbbaa: function() {
        var captures;
        if ((captures = /^#([a-fA-F0-9]{8})[ \t]*/.exec(this.str))) {
          this.skip(captures);
          var rgb = captures[1],
            r = parseInt(rgb.substr(0, 2), 16),
            g = parseInt(rgb.substr(2, 2), 16),
            b = parseInt(rgb.substr(4, 2), 16),
            a = parseInt(rgb.substr(6, 2), 16),
            color = new nodes.RGBA(r, g, b, a / 255);
          color.raw = captures[0];
          return new Token('color', color);
        }
      },
      selector: function() {
        var captures;
        if ((captures = /^\^|.*?(?=\/\/(?![^\[]*\])|[,\n{])/.exec(this.str))) {
          var selector = captures[0];
          this.skip(captures);
          return new Token('selector', selector);
        }
      },
    };
  });
  require.register('nodes/arguments.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('../nodes'),
      utils = require('../utils');
    var Arguments = (module.exports = function Arguments() {
      nodes.Expression.call(this);
      this.map = {};
    });
    Arguments.prototype.__proto__ = nodes.Expression.prototype;
    Arguments.fromExpression = function(expr) {
      var args = new Arguments(),
        len = expr.nodes.length;
      args.lineno = expr.lineno;
      args.column = expr.column;
      args.isList = expr.isList;
      for (var i = 0; i < len; ++i) {
        args.push(expr.nodes[i]);
      }
      return args;
    };
    Arguments.prototype.clone = function(parent) {
      var clone = nodes.Expression.prototype.clone.call(this, parent);
      clone.map = {};
      for (var key in this.map) {
        clone.map[key] = this.map[key].clone(parent, clone);
      }
      clone.isList = this.isList;
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Arguments.prototype.toJSON = function() {
      return {
        __type: 'Arguments',
        map: this.map,
        isList: this.isList,
        preserve: this.preserve,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
        nodes: this.nodes,
      };
    };
  });
  require.register('nodes/binop.js', function(module, exports, require) {
    var Node = require('./node');
    var BinOp = (module.exports = function BinOp(op, left, right) {
      Node.call(this);
      this.op = op;
      this.left = left;
      this.right = right;
    });
    BinOp.prototype.__proto__ = Node.prototype;
    BinOp.prototype.clone = function(parent) {
      var clone = new BinOp(this.op);
      clone.left = this.left.clone(parent, clone);
      clone.right = this.right && this.right.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      if (this.val) clone.val = this.val.clone(parent, clone);
      return clone;
    };
    BinOp.prototype.toString = function() {
      return this.left.toString() + ' ' + this.op + ' ' + this.right.toString();
    };
    BinOp.prototype.toJSON = function() {
      var json = {
        __type: 'BinOp',
        left: this.left,
        right: this.right,
        op: this.op,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
      if (this.val) json.val = this.val;
      return json;
    };
  });
  require.register('nodes/block.js', function(module, exports, require) {
    var Node = require('./node');
    var Block = (module.exports = function Block(parent, node) {
      Node.call(this);
      this.nodes = [];
      this.parent = parent;
      this.node = node;
      this.scope = true;
    });
    Block.prototype.__proto__ = Node.prototype;
    Block.prototype.__defineGetter__('hasProperties', function() {
      for (var i = 0, len = this.nodes.length; i < len; ++i) {
        if ('property' == this.nodes[i].nodeName) {
          return true;
        }
      }
    });
    Block.prototype.__defineGetter__('hasMedia', function() {
      for (var i = 0, len = this.nodes.length; i < len; ++i) {
        var nodeName = this.nodes[i].nodeName;
        if ('media' == nodeName) {
          return true;
        }
      }
      return false;
    });
    Block.prototype.__defineGetter__('isEmpty', function() {
      return !this.nodes.length;
    });
    Block.prototype.clone = function(parent, node) {
      parent = parent || this.parent;
      var clone = new Block(parent, node || this.node);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      clone.scope = this.scope;
      this.nodes.forEach(function(node) {
        clone.push(node.clone(clone, clone));
      });
      return clone;
    };
    Block.prototype.push = function(node) {
      this.nodes.push(node);
    };
    Block.prototype.toJSON = function() {
      return {
        __type: 'Block',
        scope: this.scope,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
        nodes: this.nodes,
      };
    };
  });
  require.register('nodes/boolean.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('./index');
    var Boolean = (module.exports = function Boolean(val) {
      Node.call(this);
      if (this.nodeName) {
        this.val = !!val;
      } else {
        return new Boolean(val);
      }
    });
    Boolean.prototype.__proto__ = Node.prototype;
    Boolean.prototype.toBoolean = function() {
      return this;
    };
    Boolean.prototype.__defineGetter__('isTrue', function() {
      return this.val;
    });
    Boolean.prototype.__defineGetter__('isFalse', function() {
      return !this.val;
    });
    Boolean.prototype.negate = function() {
      return new Boolean(!this.val);
    };
    Boolean.prototype.inspect = function() {
      return '[Boolean ' + this.val + ']';
    };
    Boolean.prototype.toString = function() {
      return this.val ? 'true' : 'false';
    };
    Boolean.prototype.toJSON = function() {
      return { __type: 'Boolean', val: this.val };
    };
  });
  require.register('nodes/call.js', function(module, exports, require) {
    var Node = require('./node');
    var Call = (module.exports = function Call(name, args) {
      Node.call(this);
      this.name = name;
      this.args = args;
    });
    Call.prototype.__proto__ = Node.prototype;
    Call.prototype.clone = function(parent) {
      var clone = new Call(this.name);
      clone.args = this.args.clone(parent, clone);
      if (this.block) clone.block = this.block.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Call.prototype.toString = function() {
      var args = this.args.nodes
        .map(function(node) {
          var str = node.toString();
          return str.slice(1, str.length - 1);
        })
        .join(', ');
      return this.name + '(' + args + ')';
    };
    Call.prototype.toJSON = function() {
      var json = {
        __type: 'Call',
        name: this.name,
        args: this.args,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
      if (this.block) json.block = this.block;
      return json;
    };
  });
  require.register('nodes/charset.js', function(module, exports, require) {
    var Node = require('./node');
    var Charset = (module.exports = function Charset(val) {
      Node.call(this);
      this.val = val;
    });
    Charset.prototype.__proto__ = Node.prototype;
    Charset.prototype.toString = function() {
      return '@charset ' + this.val;
    };
    Charset.prototype.toJSON = function() {
      return {
        __type: 'Charset',
        val: this.val,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/namespace.js', function(module, exports, require) {
    var Node = require('./node');
    var Namespace = (module.exports = function Namespace(val, prefix) {
      Node.call(this);
      this.val = val;
      this.prefix = prefix;
    });
    Namespace.prototype.__proto__ = Node.prototype;
    Namespace.prototype.toString = function() {
      return '@namespace ' + (this.prefix ? this.prefix + ' ' : '') + this.val;
    };
    Namespace.prototype.toJSON = function() {
      return {
        __type: 'Namespace',
        val: this.val,
        prefix: this.prefix,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/comment.js', function(module, exports, require) {
    var Node = require('./node');
    var Comment = (module.exports = function Comment(str, suppress, inline) {
      Node.call(this);
      this.str = str;
      this.suppress = suppress;
      this.inline = inline;
    });
    Comment.prototype.__proto__ = Node.prototype;
    Comment.prototype.toJSON = function() {
      return {
        __type: 'Comment',
        str: this.str,
        suppress: this.suppress,
        inline: this.inline,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    Comment.prototype.toString = function() {
      return this.str;
    };
  });
  require.register('nodes/each.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('./index');
    var Each = (module.exports = function Each(val, key, expr, block) {
      Node.call(this);
      this.val = val;
      this.key = key;
      this.expr = expr;
      this.block = block;
    });
    Each.prototype.__proto__ = Node.prototype;
    Each.prototype.clone = function(parent) {
      var clone = new Each(this.val, this.key);
      clone.expr = this.expr.clone(parent, clone);
      clone.block = this.block.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Each.prototype.toJSON = function() {
      return {
        __type: 'Each',
        val: this.val,
        key: this.key,
        expr: this.expr,
        block: this.block,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/expression.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('../nodes'),
      utils = require('../utils');
    var Expression = (module.exports = function Expression(isList) {
      Node.call(this);
      this.nodes = [];
      this.isList = isList;
    });
    Expression.prototype.__defineGetter__('isEmpty', function() {
      return !this.nodes.length;
    });
    Expression.prototype.__defineGetter__('first', function() {
      return this.nodes[0] ? this.nodes[0].first : nodes.nil;
    });
    Expression.prototype.__defineGetter__('hash', function() {
      return this.nodes
        .map(function(node) {
          return node.hash;
        })
        .join('::');
    });
    Expression.prototype.__proto__ = Node.prototype;
    Expression.prototype.clone = function(parent) {
      var clone = new this.constructor(this.isList);
      clone.preserve = this.preserve;
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      clone.nodes = this.nodes.map(function(node) {
        return node.clone(parent, clone);
      });
      return clone;
    };
    Expression.prototype.push = function(node) {
      this.nodes.push(node);
    };
    Expression.prototype.operate = function(op, right, val) {
      switch (op) {
        case '[]=':
          var self = this,
            range = utils.unwrap(right).nodes,
            val = utils.unwrap(val),
            len,
            node;
          range.forEach(function(unit) {
            len = self.nodes.length;
            if ('unit' == unit.nodeName) {
              var i = unit.val < 0 ? len + unit.val : unit.val,
                n = i;
              while (i-- > len) self.nodes[i] = nodes.nil;
              self.nodes[n] = val;
            } else if (unit.string) {
              node = self.nodes[0];
              if (node && 'object' == node.nodeName)
                node.set(unit.string, val.clone());
            }
          });
          return val;
        case '[]':
          var expr = new nodes.Expression(),
            vals = utils.unwrap(this).nodes,
            range = utils.unwrap(right).nodes,
            node;
          range.forEach(function(unit) {
            if ('unit' == unit.nodeName) {
              node = vals[unit.val < 0 ? vals.length + unit.val : unit.val];
            } else if ('object' == vals[0].nodeName) {
              node = vals[0].get(unit.string);
            }
            if (node) expr.push(node);
          });
          return expr.isEmpty ? nodes.nil : utils.unwrap(expr);
        case '||':
          return this.toBoolean().isTrue ? this : right;
        case 'in':
          return Node.prototype.operate.call(this, op, right);
        case '!=':
          return this.operate('==', right, val).negate();
        case '==':
          var len = this.nodes.length,
            right = right.toExpression(),
            a,
            b;
          if (len != right.nodes.length) return nodes.no;
          for (var i = 0; i < len; ++i) {
            a = this.nodes[i];
            b = right.nodes[i];
            if (a.operate(op, b).isTrue) continue;
            return nodes.no;
          }
          return nodes.yes;
          break;
        default:
          return this.first.operate(op, right, val);
      }
    };
    Expression.prototype.toBoolean = function() {
      if (this.nodes.length > 1) return nodes.yes;
      return this.first.toBoolean();
    };
    Expression.prototype.toString = function() {
      return (
        '(' +
        this.nodes
          .map(function(node) {
            return node.toString();
          })
          .join(this.isList ? ', ' : ' ') +
        ')'
      );
    };
    Expression.prototype.toJSON = function() {
      return {
        __type: 'Expression',
        isList: this.isList,
        preserve: this.preserve,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
        nodes: this.nodes,
      };
    };
  });
  require.register('nodes/function.js', function(module, exports, require) {
    var Node = require('./node');
    var Function = (module.exports = function Function(name, params, body) {
      Node.call(this);
      this.name = name;
      this.params = params;
      this.block = body;
      if ('function' == typeof params) this.fn = params;
    });
    Function.prototype.__defineGetter__('arity', function() {
      return this.params.length;
    });
    Function.prototype.__proto__ = Node.prototype;
    Function.prototype.__defineGetter__('hash', function() {
      return 'function ' + this.name;
    });
    Function.prototype.clone = function(parent) {
      if (this.fn) {
        var clone = new Function(this.name, this.fn);
      } else {
        var clone = new Function(this.name);
        clone.params = this.params.clone(parent, clone);
        clone.block = this.block.clone(parent, clone);
      }
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Function.prototype.toString = function() {
      if (this.fn) {
        return (
          this.name +
          '(' +
          this.fn
            .toString()
            .match(/^function *\w*\((.*?)\)/)
            .slice(1)
            .join(', ') +
          ')'
        );
      } else {
        return this.name + '(' + this.params.nodes.join(', ') + ')';
      }
    };
    Function.prototype.toJSON = function() {
      var json = {
        __type: 'Function',
        name: this.name,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
      if (this.fn) {
        json.fn = this.fn;
      } else {
        json.params = this.params;
        json.block = this.block;
      }
      return json;
    };
  });
  require.register('nodes/group.js', function(module, exports, require) {
    var Node = require('./node');
    var Group = (module.exports = function Group() {
      Node.call(this);
      this.nodes = [];
      this.extends = [];
    });
    Group.prototype.__proto__ = Node.prototype;
    Group.prototype.push = function(selector) {
      this.nodes.push(selector);
    };
    Group.prototype.__defineGetter__('block', function() {
      return this.nodes[0].block;
    });
    Group.prototype.__defineSetter__('block', function(block) {
      for (var i = 0, len = this.nodes.length; i < len; ++i) {
        this.nodes[i].block = block;
      }
    });
    Group.prototype.__defineGetter__('hasOnlyPlaceholders', function() {
      return this.nodes.every(function(selector) {
        return selector.isPlaceholder;
      });
    });
    Group.prototype.clone = function(parent) {
      var clone = new Group();
      clone.lineno = this.lineno;
      clone.column = this.column;
      this.nodes.forEach(function(node) {
        clone.push(node.clone(parent, clone));
      });
      clone.filename = this.filename;
      clone.block = this.block.clone(parent, clone);
      return clone;
    };
    Group.prototype.toJSON = function() {
      return {
        __type: 'Group',
        nodes: this.nodes,
        block: this.block,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/hsla.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('./index');
    var HSLA = (exports = module.exports = function HSLA(h, s, l, a) {
      Node.call(this);
      this.h = clampDegrees(h);
      this.s = clampPercentage(s);
      this.l = clampPercentage(l);
      this.a = clampAlpha(a);
      this.hsla = this;
    });
    HSLA.prototype.__proto__ = Node.prototype;
    HSLA.prototype.toString = function() {
      return (
        'hsla(' +
        this.h +
        ',' +
        this.s.toFixed(0) +
        '%,' +
        this.l.toFixed(0) +
        '%,' +
        this.a +
        ')'
      );
    };
    HSLA.prototype.clone = function(parent) {
      var clone = new HSLA(this.h, this.s, this.l, this.a);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    HSLA.prototype.toJSON = function() {
      return {
        __type: 'HSLA',
        h: this.h,
        s: this.s,
        l: this.l,
        a: this.a,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    HSLA.prototype.__defineGetter__('rgba', function() {
      return nodes.RGBA.fromHSLA(this);
    });
    HSLA.prototype.__defineGetter__('hash', function() {
      return this.rgba.toString();
    });
    HSLA.prototype.add = function(h, s, l) {
      return new HSLA(this.h + h, this.s + s, this.l + l, this.a);
    };
    HSLA.prototype.sub = function(h, s, l) {
      return this.add(-h, -s, -l);
    };
    HSLA.prototype.operate = function(op, right) {
      switch (op) {
        case '==':
        case '!=':
        case '<=':
        case '>=':
        case '<':
        case '>':
        case 'is a':
        case '||':
        case '&&':
          return this.rgba.operate(op, right);
        default:
          return this.rgba.operate(op, right).hsla;
      }
    };
    exports.fromRGBA = function(rgba) {
      var r = rgba.r / 255,
        g = rgba.g / 255,
        b = rgba.b / 255,
        a = rgba.a;
      var min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        l = (max + min) / 2,
        d = max - min,
        h,
        s;
      switch (max) {
        case min:
          h = 0;
          break;
        case r:
          h = 60 * (g - b) / d;
          break;
        case g:
          h = 60 * (b - r) / d + 120;
          break;
        case b:
          h = 60 * (r - g) / d + 240;
          break;
      }
      if (max == min) {
        s = 0;
      } else if (l < 0.5) {
        s = d / (2 * l);
      } else {
        s = d / (2 - 2 * l);
      }
      h %= 360;
      s *= 100;
      l *= 100;
      return new HSLA(h, s, l, a);
    };
    HSLA.prototype.adjustLightness = function(percent) {
      this.l = clampPercentage(this.l + this.l * (percent / 100));
      return this;
    };
    HSLA.prototype.adjustHue = function(deg) {
      this.h = clampDegrees(this.h + deg);
      return this;
    };
    function clampDegrees(n) {
      n = n % 360;
      return n >= 0 ? n : 360 + n;
    }
    function clampPercentage(n) {
      return Math.max(0, Math.min(n, 100));
    }
    function clampAlpha(n) {
      return Math.max(0, Math.min(n, 1));
    }
  });
  require.register('nodes/ident.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('./index');
    var Ident = (module.exports = function Ident(name, val, mixin) {
      Node.call(this);
      this.name = name;
      this.string = name;
      this.val = val || nodes.nil;
      this.mixin = !!mixin;
    });
    Ident.prototype.__defineGetter__('isEmpty', function() {
      return undefined == this.val;
    });
    Ident.prototype.__defineGetter__('hash', function() {
      return this.name;
    });
    Ident.prototype.__proto__ = Node.prototype;
    Ident.prototype.clone = function(parent) {
      var clone = new Ident(this.name);
      clone.val = this.val.clone(parent, clone);
      clone.mixin = this.mixin;
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      clone.property = this.property;
      clone.rest = this.rest;
      return clone;
    };
    Ident.prototype.toJSON = function() {
      return {
        __type: 'Ident',
        name: this.name,
        val: this.val,
        mixin: this.mixin,
        property: this.property,
        rest: this.rest,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    Ident.prototype.toString = function() {
      return this.name;
    };
    Ident.prototype.coerce = function(other) {
      switch (other.nodeName) {
        case 'ident':
        case 'string':
        case 'literal':
          return new Ident(other.string);
        case 'unit':
          return new Ident(other.toString());
        default:
          return Node.prototype.coerce.call(this, other);
      }
    };
    Ident.prototype.operate = function(op, right) {
      var val = right.first;
      switch (op) {
        case '-':
          if ('unit' == val.nodeName) {
            var expr = new nodes.Expression();
            val = val.clone();
            val.val = -val.val;
            expr.push(this);
            expr.push(val);
            return expr;
          }
        case '+':
          return new nodes.Ident(this.string + this.coerce(val).string);
      }
      return Node.prototype.operate.call(this, op, right);
    };
  });
  require.register('nodes/if.js', function(module, exports, require) {
    var Node = require('./node');
    var If = (module.exports = function If(cond, negate) {
      Node.call(this);
      this.cond = cond;
      this.elses = [];
      if (negate && negate.nodeName) {
        this.block = negate;
      } else {
        this.negate = negate;
      }
    });
    If.prototype.__proto__ = Node.prototype;
    If.prototype.clone = function(parent) {
      var clone = new If();
      clone.cond = this.cond.clone(parent, clone);
      clone.block = this.block.clone(parent, clone);
      clone.elses = this.elses.map(function(node) {
        return node.clone(parent, clone);
      });
      clone.negate = this.negate;
      clone.postfix = this.postfix;
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    If.prototype.toJSON = function() {
      return {
        __type: 'If',
        cond: this.cond,
        block: this.block,
        elses: this.elses,
        negate: this.negate,
        postfix: this.postfix,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/import.js', function(module, exports, require) {
    var Node = require('./node');
    var Import = (module.exports = function Import(expr, once) {
      Node.call(this);
      this.path = expr;
      this.once = once || false;
    });
    Import.prototype.__proto__ = Node.prototype;
    Import.prototype.clone = function(parent) {
      var clone = new Import();
      clone.path = this.path.nodeName
        ? this.path.clone(parent, clone)
        : this.path;
      clone.once = this.once;
      clone.mtime = this.mtime;
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Import.prototype.toJSON = function() {
      return {
        __type: 'Import',
        path: this.path,
        once: this.once,
        mtime: this.mtime,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/extend.js', function(module, exports, require) {
    var Node = require('./node');
    var Extend = (module.exports = function Extend(selectors) {
      Node.call(this);
      this.selectors = selectors;
    });
    Extend.prototype.__proto__ = Node.prototype;
    Extend.prototype.clone = function() {
      return new Extend(this.selectors);
    };
    Extend.prototype.toString = function() {
      return '@extend ' + this.selectors.join(', ');
    };
    Extend.prototype.toJSON = function() {
      return {
        __type: 'Extend',
        selectors: this.selectors,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/index.js', function(module, exports, require) {
    exports.Node = require('./node');
    exports.Root = require('./root');
    exports.Null = require('./null');
    exports.Each = require('./each');
    exports.If = require('./if');
    exports.Call = require('./call');
    exports.UnaryOp = require('./unaryop');
    exports.BinOp = require('./binop');
    exports.Ternary = require('./ternary');
    exports.Block = require('./block');
    exports.Unit = require('./unit');
    exports.String = require('./string');
    exports.HSLA = require('./hsla');
    exports.RGBA = require('./rgba');
    exports.Ident = require('./ident');
    exports.Group = require('./group');
    exports.Literal = require('./literal');
    exports.Boolean = require('./boolean');
    exports.Return = require('./return');
    exports.Media = require('./media');
    exports.QueryList = require('./query-list');
    exports.Query = require('./query');
    exports.Feature = require('./feature');
    exports.Params = require('./params');
    exports.Comment = require('./comment');
    exports.Keyframes = require('./keyframes');
    exports.Member = require('./member');
    exports.Charset = require('./charset');
    exports.Namespace = require('./namespace');
    exports.Import = require('./import');
    exports.Extend = require('./extend');
    exports.Object = require('./object');
    exports.Function = require('./function');
    exports.Property = require('./property');
    exports.Selector = require('./selector');
    exports.Expression = require('./expression');
    exports.Arguments = require('./arguments');
    exports.Atblock = require('./atblock');
    exports.Atrule = require('./atrule');
    exports.Supports = require('./supports');
    exports.yes = new exports.Boolean(true);
    exports.no = new exports.Boolean(false);
    exports.nil = new exports.Null();
  });
  require.register('nodes/keyframes.js', function(module, exports, require) {
    var Atrule = require('./atrule');
    var Keyframes = (module.exports = function Keyframes(segs, prefix) {
      Atrule.call(this, 'keyframes');
      this.segments = segs;
      this.prefix = prefix || 'official';
    });
    Keyframes.prototype.__proto__ = Atrule.prototype;
    Keyframes.prototype.clone = function(parent) {
      var clone = new Keyframes();
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      clone.segments = this.segments.map(function(node) {
        return node.clone(parent, clone);
      });
      clone.prefix = this.prefix;
      clone.block = this.block.clone(parent, clone);
      return clone;
    };
    Keyframes.prototype.toJSON = function() {
      return {
        __type: 'Keyframes',
        segments: this.segments,
        prefix: this.prefix,
        block: this.block,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    Keyframes.prototype.toString = function() {
      return '@keyframes ' + this.segments.join('');
    };
  });
  require.register('nodes/literal.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('./index');
    var Literal = (module.exports = function Literal(str) {
      Node.call(this);
      this.val = str;
      this.string = str;
      this.prefixed = false;
    });
    Literal.prototype.__proto__ = Node.prototype;
    Literal.prototype.__defineGetter__('hash', function() {
      return this.val;
    });
    Literal.prototype.toString = function() {
      return this.val;
    };
    Literal.prototype.coerce = function(other) {
      switch (other.nodeName) {
        case 'ident':
        case 'string':
        case 'literal':
          return new Literal(other.string);
        default:
          return Node.prototype.coerce.call(this, other);
      }
    };
    Literal.prototype.operate = function(op, right) {
      var val = right.first;
      switch (op) {
        case '+':
          return new nodes.Literal(this.string + this.coerce(val).string);
        default:
          return Node.prototype.operate.call(this, op, right);
      }
    };
    Literal.prototype.toJSON = function() {
      return {
        __type: 'Literal',
        val: this.val,
        string: this.string,
        prefixed: this.prefixed,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/media.js', function(module, exports, require) {
    var Atrule = require('./atrule');
    var Media = (module.exports = function Media(val) {
      Atrule.call(this, 'media');
      this.val = val;
    });
    Media.prototype.__proto__ = Atrule.prototype;
    Media.prototype.clone = function(parent) {
      var clone = new Media();
      clone.val = this.val.clone(parent, clone);
      clone.block = this.block.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Media.prototype.toJSON = function() {
      return {
        __type: 'Media',
        val: this.val,
        block: this.block,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    Media.prototype.toString = function() {
      return '@media ' + this.val;
    };
  });
  require.register('nodes/query-list.js', function(module, exports, require) {
    var Node = require('./node');
    var QueryList = (module.exports = function QueryList() {
      Node.call(this);
      this.nodes = [];
    });
    QueryList.prototype.__proto__ = Node.prototype;
    QueryList.prototype.clone = function(parent) {
      var clone = new QueryList();
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      for (var i = 0; i < this.nodes.length; ++i) {
        clone.push(this.nodes[i].clone(parent, clone));
      }
      return clone;
    };
    QueryList.prototype.push = function(node) {
      this.nodes.push(node);
    };
    QueryList.prototype.merge = function(other) {
      var list = new QueryList(),
        merged;
      this.nodes.forEach(function(query) {
        for (var i = 0, len = other.nodes.length; i < len; ++i) {
          merged = query.merge(other.nodes[i]);
          if (merged) list.push(merged);
        }
      });
      return list;
    };
    QueryList.prototype.toString = function() {
      return (
        '(' +
        this.nodes
          .map(function(node) {
            return node.toString();
          })
          .join(', ') +
        ')'
      );
    };
    QueryList.prototype.toJSON = function() {
      return {
        __type: 'QueryList',
        nodes: this.nodes,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/query.js', function(module, exports, require) {
    var Node = require('./node');
    var Query = (module.exports = function Query() {
      Node.call(this);
      this.nodes = [];
      this.type = '';
      this.predicate = '';
    });
    Query.prototype.__proto__ = Node.prototype;
    Query.prototype.clone = function(parent) {
      var clone = new Query();
      clone.predicate = this.predicate;
      clone.type = this.type;
      for (var i = 0, len = this.nodes.length; i < len; ++i) {
        clone.push(this.nodes[i].clone(parent, clone));
      }
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Query.prototype.push = function(feature) {
      this.nodes.push(feature);
    };
    Query.prototype.__defineGetter__('resolvedType', function() {
      if (this.type) {
        return this.type.nodeName ? this.type.string : this.type;
      }
    });
    Query.prototype.__defineGetter__('resolvedPredicate', function() {
      if (this.predicate) {
        return this.predicate.nodeName ? this.predicate.string : this.predicate;
      }
    });
    Query.prototype.merge = function(other) {
      var query = new Query(),
        p1 = this.resolvedPredicate,
        p2 = other.resolvedPredicate,
        t1 = this.resolvedType,
        t2 = other.resolvedType,
        type,
        pred;
      t1 = t1 || t2;
      t2 = t2 || t1;
      if (('not' == p1) ^ ('not' == p2)) {
        if (t1 == t2) return;
        type = 'not' == p1 ? t2 : t1;
        pred = 'not' == p1 ? p2 : p1;
      } else if ('not' == p1 && 'not' == p2) {
        if (t1 != t2) return;
        type = t1;
        pred = 'not';
      } else if (t1 != t2) {
        return;
      } else {
        type = t1;
        pred = p1 || p2;
      }
      query.predicate = pred;
      query.type = type;
      query.nodes = this.nodes.concat(other.nodes);
      return query;
    };
    Query.prototype.toString = function() {
      var pred = this.predicate ? this.predicate + ' ' : '',
        type = this.type || '',
        len = this.nodes.length,
        str = pred + type;
      if (len) {
        str +=
          (type && ' and ') +
          this.nodes
            .map(function(expr) {
              return expr.toString();
            })
            .join(' and ');
      }
      return str;
    };
    Query.prototype.toJSON = function() {
      return {
        __type: 'Query',
        predicate: this.predicate,
        type: this.type,
        nodes: this.nodes,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/feature.js', function(module, exports, require) {
    var Node = require('./node');
    var Feature = (module.exports = function Feature(segs) {
      Node.call(this);
      this.segments = segs;
      this.expr = null;
    });
    Feature.prototype.__proto__ = Node.prototype;
    Feature.prototype.clone = function(parent) {
      var clone = new Feature();
      clone.segments = this.segments.map(function(node) {
        return node.clone(parent, clone);
      });
      if (this.expr) clone.expr = this.expr.clone(parent, clone);
      if (this.name) clone.name = this.name;
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Feature.prototype.toString = function() {
      if (this.expr) {
        return '(' + this.segments.join('') + ': ' + this.expr.toString() + ')';
      } else {
        return this.segments.join('');
      }
    };
    Feature.prototype.toJSON = function() {
      var json = {
        __type: 'Feature',
        segments: this.segments,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
      if (this.expr) json.expr = this.expr;
      if (this.name) json.name = this.name;
      return json;
    };
  });
  require.register('nodes/node.js', function(module, exports, require) {
    var Evaluator = require('../visitor/evaluator'),
      utils = require('../utils'),
      nodes = require('./index');
    function CoercionError(msg) {
      this.name = 'CoercionError';
      this.message = msg;
      Error.captureStackTrace(this, CoercionError);
    }
    CoercionError.prototype.__proto__ = Error.prototype;
    var Node = (module.exports = function Node() {
      this.lineno = nodes.lineno || 1;
      this.column = nodes.column || 1;
      this.filename = nodes.filename;
    });
    Node.prototype = {
      constructor: Node,
      get first() {
        return this;
      },
      get hash() {
        return this.val;
      },
      get nodeName() {
        return this.constructor.name.toLowerCase();
      },
      clone: function() {
        return this;
      },
      toJSON: function() {
        return {
          lineno: this.lineno,
          column: this.column,
          filename: this.filename,
        };
      },
      eval: function() {
        return new Evaluator(this).evaluate();
      },
      toBoolean: function() {
        return nodes.yes;
      },
      toExpression: function() {
        if ('expression' == this.nodeName) return this;
        var expr = new nodes.Expression();
        expr.push(this);
        return expr;
      },
      shouldCoerce: function(op) {
        switch (op) {
          case 'is a':
          case 'in':
          case '||':
          case '&&':
            return false;
          default:
            return true;
        }
      },
      operate: function(op, right) {
        switch (op) {
          case 'is a':
            if ('string' == right.first.nodeName) {
              return nodes.Boolean(this.nodeName == right.val);
            } else {
              throw new Error(
                '"is a" expects a string, got ' + right.toString(),
              );
            }
          case '==':
            return nodes.Boolean(this.hash == right.hash);
          case '!=':
            return nodes.Boolean(this.hash != right.hash);
          case '>=':
            return nodes.Boolean(this.hash >= right.hash);
          case '<=':
            return nodes.Boolean(this.hash <= right.hash);
          case '>':
            return nodes.Boolean(this.hash > right.hash);
          case '<':
            return nodes.Boolean(this.hash < right.hash);
          case '||':
            return this.toBoolean().isTrue ? this : right;
          case 'in':
            var vals = utils.unwrap(right).nodes,
              len = vals && vals.length,
              hash = this.hash;
            if (!vals)
              throw new Error(
                '"in" given invalid right-hand operand, expecting an expression',
              );
            if (1 == len && 'object' == vals[0].nodeName) {
              return nodes.Boolean(vals[0].has(this.hash));
            }
            for (var i = 0; i < len; ++i) {
              if (hash == vals[i].hash) {
                return nodes.yes;
              }
            }
            return nodes.no;
          case '&&':
            var a = this.toBoolean(),
              b = right.toBoolean();
            return a.isTrue && b.isTrue ? right : a.isFalse ? this : right;
          default:
            if ('[]' == op) {
              var msg = 'cannot perform ' + this + '[' + right + ']';
            } else {
              var msg = 'cannot perform' + ' ' + this + ' ' + op + ' ' + right;
            }
            throw new Error(msg);
        }
      },
      coerce: function(other) {
        if (other.nodeName == this.nodeName) return other;
        throw new CoercionError(
          'cannot coerce ' + other + ' to ' + this.nodeName,
        );
      },
    };
  });
  require.register('nodes/null.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('./index');
    var Null = (module.exports = function Null() {});
    Null.prototype.__proto__ = Node.prototype;
    Null.prototype.inspect = Null.prototype.toString = function() {
      return 'null';
    };
    Null.prototype.toBoolean = function() {
      return nodes.no;
    };
    Null.prototype.__defineGetter__('isNull', function() {
      return true;
    });
    Null.prototype.__defineGetter__('hash', function() {
      return null;
    });
    Null.prototype.toJSON = function() {
      return {
        __type: 'Null',
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/params.js', function(module, exports, require) {
    var Node = require('./node');
    var Params = (module.exports = function Params() {
      Node.call(this);
      this.nodes = [];
    });
    Params.prototype.__defineGetter__('length', function() {
      return this.nodes.length;
    });
    Params.prototype.__proto__ = Node.prototype;
    Params.prototype.push = function(node) {
      this.nodes.push(node);
    };
    Params.prototype.clone = function(parent) {
      var clone = new Params();
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      this.nodes.forEach(function(node) {
        clone.push(node.clone(parent, clone));
      });
      return clone;
    };
    Params.prototype.toJSON = function() {
      return {
        __type: 'Params',
        nodes: this.nodes,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/property.js', function(module, exports, require) {
    var Node = require('./node');
    var Property = (module.exports = function Property(segs, expr) {
      Node.call(this);
      this.segments = segs;
      this.expr = expr;
    });
    Property.prototype.__proto__ = Node.prototype;
    Property.prototype.clone = function(parent) {
      var clone = new Property(this.segments);
      clone.name = this.name;
      if (this.literal) clone.literal = this.literal;
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      clone.segments = this.segments.map(function(node) {
        return node.clone(parent, clone);
      });
      if (this.expr) clone.expr = this.expr.clone(parent, clone);
      return clone;
    };
    Property.prototype.toJSON = function() {
      var json = {
        __type: 'Property',
        segments: this.segments,
        name: this.name,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
      if (this.expr) json.expr = this.expr;
      if (this.literal) json.literal = this.literal;
      return json;
    };
    Property.prototype.toString = function() {
      return 'property(' + this.segments.join('') + ', ' + this.expr + ')';
    };
    Property.prototype.operate = function(op, right, val) {
      return this.expr.operate(op, right, val);
    };
  });
  require.register('nodes/return.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('./index');
    var Return = (module.exports = function Return(expr) {
      this.expr = expr || nodes.nil;
    });
    Return.prototype.__proto__ = Node.prototype;
    Return.prototype.clone = function(parent) {
      var clone = new Return();
      clone.expr = this.expr.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Return.prototype.toJSON = function() {
      return {
        __type: 'Return',
        expr: this.expr,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/rgba.js', function(module, exports, require) {
    var Node = require('./node'),
      HSLA = require('./hsla'),
      functions = require('../functions'),
      adjust = functions.adjust,
      nodes = require('./index');
    var RGBA = (exports = module.exports = function RGBA(r, g, b, a) {
      Node.call(this);
      this.r = clamp(r);
      this.g = clamp(g);
      this.b = clamp(b);
      this.a = clampAlpha(a);
      this.name = '';
      this.rgba = this;
    });
    RGBA.prototype.__proto__ = Node.prototype;
    RGBA.withoutClamping = function(r, g, b, a) {
      var rgba = new RGBA(0, 0, 0, 0);
      rgba.r = r;
      rgba.g = g;
      rgba.b = b;
      rgba.a = a;
      return rgba;
    };
    RGBA.prototype.clone = function() {
      var clone = new RGBA(this.r, this.g, this.b, this.a);
      clone.raw = this.raw;
      clone.name = this.name;
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    RGBA.prototype.toJSON = function() {
      return {
        __type: 'RGBA',
        r: this.r,
        g: this.g,
        b: this.b,
        a: this.a,
        raw: this.raw,
        name: this.name,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    RGBA.prototype.toBoolean = function() {
      return nodes.yes;
    };
    RGBA.prototype.__defineGetter__('hsla', function() {
      return HSLA.fromRGBA(this);
    });
    RGBA.prototype.__defineGetter__('hash', function() {
      return this.toString();
    });
    RGBA.prototype.add = function(r, g, b, a) {
      return new RGBA(this.r + r, this.g + g, this.b + b, this.a + a);
    };
    RGBA.prototype.sub = function(r, g, b, a) {
      return new RGBA(
        this.r - r,
        this.g - g,
        this.b - b,
        a == 1 ? this.a : this.a - a,
      );
    };
    RGBA.prototype.multiply = function(n) {
      return new RGBA(this.r * n, this.g * n, this.b * n, this.a);
    };
    RGBA.prototype.divide = function(n) {
      return new RGBA(this.r / n, this.g / n, this.b / n, this.a);
    };
    RGBA.prototype.operate = function(op, right) {
      if ('in' != op) right = right.first;
      switch (op) {
        case 'is a':
          if ('string' == right.nodeName && 'color' == right.string) {
            return nodes.yes;
          }
          break;
        case '+':
          switch (right.nodeName) {
            case 'unit':
              var n = right.val;
              switch (right.type) {
                case '%':
                  return adjust(this, new nodes.String('lightness'), right);
                case 'deg':
                  return this.hsla.adjustHue(n).rgba;
                default:
                  return this.add(n, n, n, 0);
              }
            case 'rgba':
              return this.add(right.r, right.g, right.b, right.a);
            case 'hsla':
              return this.hsla.add(right.h, right.s, right.l);
          }
          break;
        case '-':
          switch (right.nodeName) {
            case 'unit':
              var n = right.val;
              switch (right.type) {
                case '%':
                  return adjust(
                    this,
                    new nodes.String('lightness'),
                    new nodes.Unit(-n, '%'),
                  );
                case 'deg':
                  return this.hsla.adjustHue(-n).rgba;
                default:
                  return this.sub(n, n, n, 0);
              }
            case 'rgba':
              return this.sub(right.r, right.g, right.b, right.a);
            case 'hsla':
              return this.hsla.sub(right.h, right.s, right.l);
          }
          break;
        case '*':
          switch (right.nodeName) {
            case 'unit':
              return this.multiply(right.val);
          }
          break;
        case '/':
          switch (right.nodeName) {
            case 'unit':
              return this.divide(right.val);
          }
          break;
      }
      return Node.prototype.operate.call(this, op, right);
    };
    RGBA.prototype.toString = function() {
      function pad(n) {
        return n < 16 ? '0' + n.toString(16) : n.toString(16);
      }
      if ('transparent' == this.name) return this.name;
      if (1 == this.a) {
        var r = pad(this.r),
          g = pad(this.g),
          b = pad(this.b);
        if (r[0] == r[1] && g[0] == g[1] && b[0] == b[1]) {
          return '#' + r[0] + g[0] + b[0];
        } else {
          return '#' + r + g + b;
        }
      } else {
        return (
          'rgba(' +
          this.r +
          ',' +
          this.g +
          ',' +
          this.b +
          ',' +
          +this.a.toFixed(3) +
          ')'
        );
      }
    };
    exports.fromHSLA = function(hsla) {
      var h = hsla.h / 360,
        s = hsla.s / 100,
        l = hsla.l / 100,
        a = hsla.a;
      var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s,
        m1 = l * 2 - m2;
      var r = hue(h + 1 / 3) * 255,
        g = hue(h) * 255,
        b = hue(h - 1 / 3) * 255;
      function hue(h) {
        if (h < 0) ++h;
        if (h > 1) --h;
        if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
        if (h * 2 < 1) return m2;
        if (h * 3 < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6;
        return m1;
      }
      return new RGBA(r, g, b, a);
    };
    function clamp(n) {
      return Math.max(0, Math.min(n.toFixed(0), 255));
    }
    function clampAlpha(n) {
      return Math.max(0, Math.min(n, 1));
    }
  });
  require.register('nodes/root.js', function(module, exports, require) {
    var Node = require('./node');
    var Root = (module.exports = function Root() {
      this.nodes = [];
    });
    Root.prototype.__proto__ = Node.prototype;
    Root.prototype.push = function(node) {
      this.nodes.push(node);
    };
    Root.prototype.unshift = function(node) {
      this.nodes.unshift(node);
    };
    Root.prototype.clone = function() {
      var clone = new Root();
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      this.nodes.forEach(function(node) {
        clone.push(node.clone(clone, clone));
      });
      return clone;
    };
    Root.prototype.toString = function() {
      return '[Root]';
    };
    Root.prototype.toJSON = function() {
      return {
        __type: 'Root',
        nodes: this.nodes,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/selector.js', function(module, exports, require) {
    var Block = require('./block'),
      Node = require('./node');
    var Selector = (module.exports = function Selector(segs) {
      Node.call(this);
      this.inherits = true;
      this.segments = segs;
      this.optional = false;
    });
    Selector.prototype.__proto__ = Node.prototype;
    Selector.prototype.toString = function() {
      return this.segments.join('') + (this.optional ? ' !optional' : '');
    };
    Selector.prototype.__defineGetter__('isPlaceholder', function() {
      return this.val && ~this.val.substr(0, 2).indexOf('$');
    });
    Selector.prototype.clone = function(parent) {
      var clone = new Selector();
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      clone.inherits = this.inherits;
      clone.val = this.val;
      clone.segments = this.segments.map(function(node) {
        return node.clone(parent, clone);
      });
      clone.optional = this.optional;
      return clone;
    };
    Selector.prototype.toJSON = function() {
      return {
        __type: 'Selector',
        inherits: this.inherits,
        segments: this.segments,
        optional: this.optional,
        val: this.val,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/string.js', function(module, exports, require) {
    var Node = require('./node'),
      sprintf = require('../functions').s,
      utils = require('../utils'),
      nodes = require('./index');
    var String = (module.exports = function String(val, quote) {
      Node.call(this);
      this.val = val;
      this.string = val;
      this.prefixed = false;
      if (typeof quote !== 'string') {
        this.quote = "'";
      } else {
        this.quote = quote;
      }
    });
    String.prototype.__proto__ = Node.prototype;
    String.prototype.toString = function() {
      return this.quote + this.val + this.quote;
    };
    String.prototype.clone = function() {
      var clone = new String(this.val, this.quote);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    String.prototype.toJSON = function() {
      return {
        __type: 'String',
        val: this.val,
        quote: this.quote,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    String.prototype.toBoolean = function() {
      return nodes.Boolean(this.val.length);
    };
    String.prototype.coerce = function(other) {
      switch (other.nodeName) {
        case 'string':
          return other;
        case 'expression':
          return new String(
            other.nodes
              .map(function(node) {
                return this.coerce(node).val;
              }, this)
              .join(' '),
          );
        default:
          return new String(other.toString());
      }
    };
    String.prototype.operate = function(op, right) {
      switch (op) {
        case '%':
          var expr = new nodes.Expression();
          expr.push(this);
          var args =
            'expression' == right.nodeName
              ? utils.unwrap(right).nodes
              : [right];
          return sprintf.apply(null, [expr].concat(args));
        case '+':
          var expr = new nodes.Expression();
          expr.push(new String(this.val + this.coerce(right).val));
          return expr;
        default:
          return Node.prototype.operate.call(this, op, right);
      }
    };
  });
  require.register('nodes/ternary.js', function(module, exports, require) {
    var Node = require('./node');
    var Ternary = (module.exports = function Ternary(
      cond,
      trueExpr,
      falseExpr,
    ) {
      Node.call(this);
      this.cond = cond;
      this.trueExpr = trueExpr;
      this.falseExpr = falseExpr;
    });
    Ternary.prototype.__proto__ = Node.prototype;
    Ternary.prototype.clone = function(parent) {
      var clone = new Ternary();
      clone.cond = this.cond.clone(parent, clone);
      clone.trueExpr = this.trueExpr.clone(parent, clone);
      clone.falseExpr = this.falseExpr.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Ternary.prototype.toJSON = function() {
      return {
        __type: 'Ternary',
        cond: this.cond,
        trueExpr: this.trueExpr,
        falseExpr: this.falseExpr,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/unaryop.js', function(module, exports, require) {
    var Node = require('./node');
    var UnaryOp = (module.exports = function UnaryOp(op, expr) {
      Node.call(this);
      this.op = op;
      this.expr = expr;
    });
    UnaryOp.prototype.__proto__ = Node.prototype;
    UnaryOp.prototype.clone = function(parent) {
      var clone = new UnaryOp(this.op);
      clone.expr = this.expr.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    UnaryOp.prototype.toJSON = function() {
      return {
        __type: 'UnaryOp',
        op: this.op,
        expr: this.expr,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
  });
  require.register('nodes/unit.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('./index');
    var FACTOR_TABLE = {
      mm: { val: 1, label: 'mm' },
      cm: { val: 10, label: 'mm' },
      in: { val: 25.4, label: 'mm' },
      pt: { val: 25.4 / 72, label: 'mm' },
      ms: { val: 1, label: 'ms' },
      s: { val: 1e3, label: 'ms' },
      Hz: { val: 1, label: 'Hz' },
      kHz: { val: 1e3, label: 'Hz' },
    };
    var Unit = (module.exports = function Unit(val, type) {
      Node.call(this);
      this.val = val;
      this.type = type;
    });
    Unit.prototype.__proto__ = Node.prototype;
    Unit.prototype.toBoolean = function() {
      return nodes.Boolean(this.type ? true : this.val);
    };
    Unit.prototype.toString = function() {
      return this.val + (this.type || '');
    };
    Unit.prototype.clone = function() {
      var clone = new Unit(this.val, this.type);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Unit.prototype.toJSON = function() {
      return {
        __type: 'Unit',
        val: this.val,
        type: this.type,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    Unit.prototype.operate = function(op, right) {
      var type = this.type || right.first.type;
      if ('rgba' == right.nodeName || 'hsla' == right.nodeName) {
        return right.operate(op, this);
      }
      if (this.shouldCoerce(op)) {
        right = right.first;
        if ('%' != this.type && ('-' == op || '+' == op) && '%' == right.type) {
          right = new Unit(this.val * (right.val / 100), '%');
        } else {
          right = this.coerce(right);
        }
        switch (op) {
          case '-':
            return new Unit(this.val - right.val, type);
          case '+':
            type = type || (right.type == '%' && right.type);
            return new Unit(this.val + right.val, type);
          case '/':
            return new Unit(this.val / right.val, type);
          case '*':
            return new Unit(this.val * right.val, type);
          case '%':
            return new Unit(this.val % right.val, type);
          case '**':
            return new Unit(Math.pow(this.val, right.val), type);
          case '..':
          case '...':
            var start = this.val,
              end = right.val,
              expr = new nodes.Expression(),
              inclusive = '..' == op;
            if (start < end) {
              do {
                expr.push(new nodes.Unit(start));
              } while (inclusive ? ++start <= end : ++start < end);
            } else {
              do {
                expr.push(new nodes.Unit(start));
              } while (inclusive ? --start >= end : --start > end);
            }
            return expr;
        }
      }
      return Node.prototype.operate.call(this, op, right);
    };
    Unit.prototype.coerce = function(other) {
      if ('unit' == other.nodeName) {
        var a = this,
          b = other,
          factorA = FACTOR_TABLE[a.type],
          factorB = FACTOR_TABLE[b.type];
        if (factorA && factorB && factorA.label == factorB.label) {
          var bVal = b.val * (factorB.val / factorA.val);
          return new nodes.Unit(bVal, a.type);
        } else {
          return new nodes.Unit(b.val, a.type);
        }
      } else if ('string' == other.nodeName) {
        if ('%' == other.val) return new nodes.Unit(0, '%');
        var val = parseFloat(other.val);
        if (isNaN(val)) Node.prototype.coerce.call(this, other);
        return new nodes.Unit(val);
      } else {
        return Node.prototype.coerce.call(this, other);
      }
    };
  });
  require.register('nodes/object.js', function(module, exports, require) {
    var Node = require('./node'),
      nodes = require('./index'),
      nativeObj = {}.constructor;
    var Object = (module.exports = function Object() {
      Node.call(this);
      this.vals = {};
    });
    Object.prototype.__proto__ = Node.prototype;
    Object.prototype.set = function(key, val) {
      this.vals[key] = val;
      return this;
    };
    Object.prototype.__defineGetter__('length', function() {
      return nativeObj.keys(this.vals).length;
    });
    Object.prototype.get = function(key) {
      return this.vals[key] || nodes.nil;
    };
    Object.prototype.has = function(key) {
      return key in this.vals;
    };
    Object.prototype.operate = function(op, right) {
      switch (op) {
        case '.':
        case '[]':
          return this.get(right.hash);
        case '==':
          var vals = this.vals,
            a,
            b;
          if ('object' != right.nodeName || this.length != right.length)
            return nodes.no;
          for (var key in vals) {
            a = vals[key];
            b = right.vals[key];
            if (a.operate(op, b).isFalse) return nodes.no;
          }
          return nodes.yes;
        case '!=':
          return this.operate('==', right).negate();
        default:
          return Node.prototype.operate.call(this, op, right);
      }
    };
    Object.prototype.toBoolean = function() {
      return nodes.Boolean(this.length);
    };
    Object.prototype.toBlock = function() {
      var str = '{',
        key,
        val;
      for (key in this.vals) {
        val = this.get(key);
        if ('object' == val.first.nodeName) {
          str += key + ' ' + val.first.toBlock();
        } else {
          switch (key) {
            case '@charset':
              str += key + ' ' + val.first.toString() + ';';
              break;
            default:
              str += key + ':' + toString(val) + ';';
          }
        }
      }
      str += '}';
      return str;
      function toString(node) {
        if (node.nodes) {
          return node.nodes.map(toString).join(node.isList ? ',' : ' ');
        } else if ('literal' == node.nodeName && ',' == node.val) {
          return '\\,';
        }
        return node.toString();
      }
    };
    Object.prototype.clone = function(parent) {
      var clone = new Object();
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      for (var key in this.vals) {
        clone.vals[key] = this.vals[key].clone(parent, clone);
      }
      return clone;
    };
    Object.prototype.toJSON = function() {
      return {
        __type: 'Object',
        vals: this.vals,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    Object.prototype.toString = function() {
      var obj = {};
      for (var prop in this.vals) {
        obj[prop] = this.vals[prop].toString();
      }
      return JSON.stringify(obj);
    };
  });
  require.register('nodes/supports.js', function(module, exports, require) {
    var Atrule = require('./atrule');
    var Supports = (module.exports = function Supports(condition) {
      Atrule.call(this, 'supports');
      this.condition = condition;
    });
    Supports.prototype.__proto__ = Atrule.prototype;
    Supports.prototype.clone = function(parent) {
      var clone = new Supports();
      clone.condition = this.condition.clone(parent, clone);
      clone.block = this.block.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Supports.prototype.toJSON = function() {
      return {
        __type: 'Supports',
        condition: this.condition,
        block: this.block,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
    };
    Supports.prototype.toString = function() {
      return '@supports ' + this.condition;
    };
  });
  require.register('nodes/member.js', function(module, exports, require) {
    var Node = require('./node');
    var Member = (module.exports = function Member(left, right) {
      Node.call(this);
      this.left = left;
      this.right = right;
    });
    Member.prototype.__proto__ = Node.prototype;
    Member.prototype.clone = function(parent) {
      var clone = new Member();
      clone.left = this.left.clone(parent, clone);
      clone.right = this.right.clone(parent, clone);
      if (this.val) clone.val = this.val.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Member.prototype.toJSON = function() {
      var json = {
        __type: 'Member',
        left: this.left,
        right: this.right,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
      if (this.val) json.val = this.val;
      return json;
    };
    Member.prototype.toString = function() {
      return this.left.toString() + '.' + this.right.toString();
    };
  });
  require.register('nodes/atblock.js', function(module, exports, require) {
    var Node = require('./node');
    var Atblock = (module.exports = function Atblock() {
      Node.call(this);
    });
    Atblock.prototype.__defineGetter__('nodes', function() {
      return this.block.nodes;
    });
    Atblock.prototype.__proto__ = Node.prototype;
    Atblock.prototype.clone = function(parent) {
      var clone = new Atblock();
      clone.block = this.block.clone(parent, clone);
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Atblock.prototype.toString = function() {
      return '@block';
    };
    Atblock.prototype.toJSON = function() {
      return {
        __type: 'Atblock',
        block: this.block,
        lineno: this.lineno,
        column: this.column,
        fileno: this.fileno,
      };
    };
  });
  require.register('nodes/atrule.js', function(module, exports, require) {
    var Node = require('./node');
    var Atrule = (module.exports = function Atrule(type) {
      Node.call(this);
      this.type = type;
    });
    Atrule.prototype.__proto__ = Node.prototype;
    Atrule.prototype.__defineGetter__('hasOnlyProperties', function() {
      if (!this.block) return false;
      var nodes = this.block.nodes;
      for (var i = 0, len = nodes.length; i < len; ++i) {
        var nodeName = nodes[i].nodeName;
        switch (nodes[i].nodeName) {
          case 'property':
          case 'expression':
          case 'comment':
            continue;
          default:
            return false;
        }
      }
      return true;
    });
    Atrule.prototype.clone = function(parent) {
      var clone = new Atrule(this.type);
      if (this.block) clone.block = this.block.clone(parent, clone);
      clone.segments = this.segments.map(function(node) {
        return node.clone(parent, clone);
      });
      clone.lineno = this.lineno;
      clone.column = this.column;
      clone.filename = this.filename;
      return clone;
    };
    Atrule.prototype.toJSON = function() {
      var json = {
        __type: 'Atrule',
        type: this.type,
        segments: this.segments,
        lineno: this.lineno,
        column: this.column,
        filename: this.filename,
      };
      if (this.block) json.block = this.block;
      return json;
    };
    Atrule.prototype.toString = function() {
      return '@' + this.type;
    };
    Atrule.prototype.__defineGetter__('hasOutput', function() {
      return !!this.block && hasOutput(this.block);
    });
    function hasOutput(block) {
      var nodes = block.nodes;
      if (
        nodes.every(function(node) {
          return 'group' == node.nodeName && node.hasOnlyPlaceholders;
        })
      )
        return false;
      return nodes.some(function(node) {
        switch (node.nodeName) {
          case 'property':
          case 'literal':
          case 'import':
            return true;
          case 'block':
            return hasOutput(node);
          default:
            if (node.block) return hasOutput(node.block);
        }
      });
    }
  });
  require.register('parser.js', function(module, exports, require) {
    var Lexer = require('./lexer'),
      nodes = require('./nodes'),
      Token = require('./token'),
      units = require('./units'),
      errors = require('./errors');
    var selectorTokens = [
      'ident',
      'string',
      'selector',
      'function',
      'comment',
      'boolean',
      'space',
      'color',
      'unit',
      'for',
      'in',
      '[',
      ']',
      '(',
      ')',
      '+',
      '-',
      '*',
      '*=',
      '<',
      '>',
      '=',
      ':',
      '&',
      '&&',
      '~',
      '{',
      '}',
      '.',
      '..',
      '/',
    ];
    var pseudoSelectors = [
      'matches',
      'not',
      'dir',
      'lang',
      'any-link',
      'link',
      'visited',
      'local-link',
      'target',
      'scope',
      'hover',
      'active',
      'focus',
      'drop',
      'current',
      'past',
      'future',
      'enabled',
      'disabled',
      'read-only',
      'read-write',
      'placeholder-shown',
      'checked',
      'indeterminate',
      'valid',
      'invalid',
      'in-range',
      'out-of-range',
      'required',
      'optional',
      'user-error',
      'root',
      'empty',
      'blank',
      'nth-child',
      'nth-last-child',
      'first-child',
      'last-child',
      'only-child',
      'nth-of-type',
      'nth-last-of-type',
      'first-of-type',
      'last-of-type',
      'only-of-type',
      'nth-match',
      'nth-last-match',
      'nth-column',
      'nth-last-column',
      'first-line',
      'first-letter',
      'before',
      'after',
      'selection',
    ];
    var Parser = (module.exports = function Parser(str, options) {
      var self = this;
      options = options || {};
      this.lexer = new Lexer(str, options);
      this.prefix = options.prefix || '';
      this.root = options.root || new nodes.Root();
      this.state = ['root'];
      this.stash = [];
      this.parens = 0;
      this.css = 0;
      this.state.pop = function() {
        self.prevState = [].pop.call(this);
      };
    });
    Parser.prototype = {
      constructor: Parser,
      currentState: function() {
        return this.state[this.state.length - 1];
      },
      previousState: function() {
        return this.state[this.state.length - 2];
      },
      parse: function() {
        var block = (this.parent = this.root);
        while ('eos' != this.peek().type) {
          this.skipWhitespace();
          if ('eos' == this.peek().type) break;
          var stmt = this.statement();
          this.accept(';');
          if (!stmt)
            this.error(
              'unexpected token {peek}, not allowed at the root level',
            );
          block.push(stmt);
        }
        return block;
      },
      error: function(msg) {
        var type = this.peek().type,
          val =
            undefined == this.peek().val ? '' : ' ' + this.peek().toString();
        if (val.trim() == type.trim()) val = '';
        throw new errors.ParseError(
          msg.replace('{peek}', '"' + type + val + '"'),
        );
      },
      accept: function(type) {
        if (type == this.peek().type) {
          return this.next();
        }
      },
      expect: function(type) {
        if (type != this.peek().type) {
          this.error('expected "' + type + '", got {peek}');
        }
        return this.next();
      },
      next: function() {
        var tok = this.stash.length ? this.stash.pop() : this.lexer.next(),
          line = tok.lineno,
          column = tok.column || 1;
        if (tok.val && tok.val.nodeName) {
          tok.val.lineno = line;
          tok.val.column = column;
        }
        nodes.lineno = line;
        nodes.column = column;
        return tok;
      },
      peek: function() {
        return this.lexer.peek();
      },
      lookahead: function(n) {
        return this.lexer.lookahead(n);
      },
      isSelectorToken: function(n) {
        var la = this.lookahead(n).type;
        switch (la) {
          case 'for':
            return this.bracketed;
          case '[':
            this.bracketed = true;
            return true;
          case ']':
            this.bracketed = false;
            return true;
          default:
            return ~selectorTokens.indexOf(la);
        }
      },
      isPseudoSelector: function(n) {
        var val = this.lookahead(n).val;
        return val && ~pseudoSelectors.indexOf(val.name);
      },
      lineContains: function(type) {
        var i = 1,
          la;
        while ((la = this.lookahead(i++))) {
          if (~['indent', 'outdent', 'newline', 'eos'].indexOf(la.type)) return;
          if (type == la.type) return true;
        }
      },
      selectorToken: function() {
        if (this.isSelectorToken(1)) {
          if ('{' == this.peek().type) {
            if (!this.lineContains('}')) return;
            var i = 0,
              la;
            while ((la = this.lookahead(++i))) {
              if ('}' == la.type) {
                if (i == 2 || (i == 3 && this.lookahead(i - 1).type == 'space'))
                  return;
                break;
              }
              if (':' == la.type) return;
            }
          }
          return this.next();
        }
      },
      skip: function(tokens) {
        while (~tokens.indexOf(this.peek().type)) this.next();
      },
      skipWhitespace: function() {
        this.skip(['space', 'indent', 'outdent', 'newline']);
      },
      skipNewlines: function() {
        while ('newline' == this.peek().type) this.next();
      },
      skipSpaces: function() {
        while ('space' == this.peek().type) this.next();
      },
      skipSpacesAndComments: function() {
        while ('space' == this.peek().type || 'comment' == this.peek().type)
          this.next();
      },
      looksLikeFunctionDefinition: function(i) {
        return (
          'indent' == this.lookahead(i).type || '{' == this.lookahead(i).type
        );
      },
      looksLikeSelector: function(fromProperty) {
        var i = 1,
          brace;
        if (
          fromProperty &&
          ':' == this.lookahead(i + 1).type &&
          (this.lookahead(i + 1).space ||
            'indent' == this.lookahead(i + 2).type)
        )
          return false;
        while (
          'ident' == this.lookahead(i).type &&
          ('newline' == this.lookahead(i + 1).type ||
            ',' == this.lookahead(i + 1).type)
        )
          i += 2;
        while (this.isSelectorToken(i) || ',' == this.lookahead(i).type) {
          if ('selector' == this.lookahead(i).type) return true;
          if ('&' == this.lookahead(i + 1).type) return true;
          if (
            '.' == this.lookahead(i).type &&
            'ident' == this.lookahead(i + 1).type
          )
            return true;
          if (
            '*' == this.lookahead(i).type &&
            'newline' == this.lookahead(i + 1).type
          )
            return true;
          if (
            ':' == this.lookahead(i).type &&
            ':' == this.lookahead(i + 1).type
          )
            return true;
          if (
            'color' == this.lookahead(i).type &&
            'newline' == this.lookahead(i - 1).type
          )
            return true;
          if (this.looksLikeAttributeSelector(i)) return true;
          if (
            ('=' == this.lookahead(i).type ||
              'function' == this.lookahead(i).type) &&
            '{' == this.lookahead(i + 1).type
          )
            return false;
          if (
            ':' == this.lookahead(i).type &&
            !this.isPseudoSelector(i + 1) &&
            this.lineContains('.')
          )
            return false;
          if ('{' == this.lookahead(i).type) brace = true;
          else if ('}' == this.lookahead(i).type) brace = false;
          if (brace && ':' == this.lookahead(i).type) return true;
          if (
            'space' == this.lookahead(i).type &&
            '{' == this.lookahead(i + 1).type
          )
            return true;
          if (
            ':' == this.lookahead(i++).type &&
            !this.lookahead(i - 1).space &&
            this.isPseudoSelector(i)
          )
            return true;
          if (
            'space' == this.lookahead(i).type &&
            'newline' == this.lookahead(i + 1).type &&
            '{' == this.lookahead(i + 2).type
          )
            return true;
          if (
            ',' == this.lookahead(i).type &&
            'newline' == this.lookahead(i + 1).type
          )
            return true;
        }
        if (
          ',' == this.lookahead(i).type &&
          'newline' == this.lookahead(i + 1).type
        )
          return true;
        if (
          '{' == this.lookahead(i).type &&
          'newline' == this.lookahead(i + 1).type
        )
          return true;
        if (this.css) {
          if (
            ';' == this.lookahead(i).type ||
            '}' == this.lookahead(i - 1).type
          )
            return false;
        }
        while (
          !~[
            'indent',
            'outdent',
            'newline',
            'for',
            'if',
            ';',
            '}',
            'eos',
          ].indexOf(this.lookahead(i).type)
        )
          ++i;
        if ('indent' == this.lookahead(i).type) return true;
      },
      looksLikeAttributeSelector: function(n) {
        var type = this.lookahead(n).type;
        if ('=' == type && this.bracketed) return true;
        return (
          ('ident' == type || 'string' == type) &&
          ']' == this.lookahead(n + 1).type &&
          ('newline' == this.lookahead(n + 2).type ||
            this.isSelectorToken(n + 2)) &&
          !this.lineContains(':') &&
          !this.lineContains('=')
        );
      },
      looksLikeKeyframe: function() {
        var i = 2,
          type;
        switch (this.lookahead(i).type) {
          case '{':
          case 'indent':
          case ',':
            return true;
          case 'newline':
            while (
              'unit' == this.lookahead(++i).type ||
              'newline' == this.lookahead(i).type
            );
            type = this.lookahead(i).type;
            return 'indent' == type || '{' == type;
        }
      },
      stateAllowsSelector: function() {
        switch (this.currentState()) {
          case 'root':
          case 'atblock':
          case 'selector':
          case 'conditional':
          case 'function':
          case 'atrule':
          case 'for':
            return true;
        }
      },
      assignAtblock: function(expr) {
        try {
          expr.push(this.atblock(expr));
        } catch (err) {
          this.error(
            'invalid right-hand side operand in assignment, got {peek}',
          );
        }
      },
      statement: function() {
        var stmt = this.stmt(),
          state = this.prevState,
          block,
          op;
        if (this.allowPostfix) {
          this.allowPostfix = false;
          state = 'expression';
        }
        switch (state) {
          case 'assignment':
          case 'expression':
          case 'function arguments':
            while (
              (op =
                this.accept('if') ||
                this.accept('unless') ||
                this.accept('for'))
            ) {
              switch (op.type) {
                case 'if':
                case 'unless':
                  stmt = new nodes.If(this.expression(), stmt);
                  stmt.postfix = true;
                  stmt.negate = 'unless' == op.type;
                  this.accept(';');
                  break;
                case 'for':
                  var key,
                    val = this.id().name;
                  if (this.accept(',')) key = this.id().name;
                  this.expect('in');
                  var each = new nodes.Each(val, key, this.expression());
                  block = new nodes.Block(this.parent, each);
                  block.push(stmt);
                  each.block = block;
                  stmt = each;
              }
            }
        }
        return stmt;
      },
      stmt: function() {
        var type = this.peek().type;
        switch (type) {
          case 'keyframes':
            return this.keyframes();
          case '-moz-document':
            return this.mozdocument();
          case 'comment':
          case 'selector':
          case 'extend':
          case 'literal':
          case 'charset':
          case 'namespace':
          case 'require':
          case 'extend':
          case 'media':
          case 'atrule':
          case 'ident':
          case 'scope':
          case 'supports':
          case 'unless':
            return this[type]();
          case 'function':
            return this.fun();
          case 'import':
            return this.atimport();
          case 'if':
            return this.ifstmt();
          case 'for':
            return this.forin();
          case 'return':
            return this.ret();
          case '{':
            return this.property();
          default:
            if (this.stateAllowsSelector()) {
              switch (type) {
                case 'color':
                case '~':
                case '>':
                case '<':
                case ':':
                case '&':
                case '&&':
                case '[':
                case '.':
                case '/':
                  return this.selector();
                case '..':
                  if ('/' == this.lookahead(2).type) return this.selector();
                case '+':
                  return 'function' == this.lookahead(2).type
                    ? this.functionCall()
                    : this.selector();
                case '*':
                  return this.property();
                case 'unit':
                  if (this.looksLikeKeyframe()) return this.selector();
                case '-':
                  if ('{' == this.lookahead(2).type) return this.property();
              }
            }
            var expr = this.expression();
            if (expr.isEmpty) this.error('unexpected {peek}');
            return expr;
        }
      },
      block: function(node, scope) {
        var delim,
          stmt,
          next,
          block = (this.parent = new nodes.Block(this.parent, node));
        if (false === scope) block.scope = false;
        this.accept('newline');
        if (this.accept('{')) {
          this.css++;
          delim = '}';
          this.skipWhitespace();
        } else {
          delim = 'outdent';
          this.expect('indent');
        }
        while (delim != this.peek().type) {
          if (this.css) {
            if (this.accept('newline') || this.accept('indent')) continue;
            stmt = this.statement();
            this.accept(';');
            this.skipWhitespace();
          } else {
            if (this.accept('newline')) continue;
            next = this.lookahead(2).type;
            if (
              'indent' == this.peek().type &&
              ~['outdent', 'newline', 'comment'].indexOf(next)
            ) {
              this.skip(['indent', 'outdent']);
              continue;
            }
            if ('eos' == this.peek().type) return block;
            stmt = this.statement();
            this.accept(';');
          }
          if (!stmt) this.error('unexpected token {peek} in block');
          block.push(stmt);
        }
        if (this.css) {
          this.skipWhitespace();
          this.expect('}');
          this.skipSpaces();
          this.css--;
        } else {
          this.expect('outdent');
        }
        this.parent = block.parent;
        return block;
      },
      comment: function() {
        var node = this.next().val;
        this.skipSpaces();
        return node;
      },
      forin: function() {
        this.expect('for');
        var key,
          val = this.id().name;
        if (this.accept(',')) key = this.id().name;
        this.expect('in');
        this.state.push('for');
        this.cond = true;
        var each = new nodes.Each(val, key, this.expression());
        this.cond = false;
        each.block = this.block(each, false);
        this.state.pop();
        return each;
      },
      ret: function() {
        this.expect('return');
        var expr = this.expression();
        return expr.isEmpty ? new nodes.Return() : new nodes.Return(expr);
      },
      unless: function() {
        this.expect('unless');
        this.state.push('conditional');
        this.cond = true;
        var node = new nodes.If(this.expression(), true);
        this.cond = false;
        node.block = this.block(node, false);
        this.state.pop();
        return node;
      },
      ifstmt: function() {
        this.expect('if');
        this.state.push('conditional');
        this.cond = true;
        var node = new nodes.If(this.expression()),
          cond,
          block;
        this.cond = false;
        node.block = this.block(node, false);
        this.skip(['newline', 'comment']);
        while (this.accept('else')) {
          if (this.accept('if')) {
            this.cond = true;
            cond = this.expression();
            this.cond = false;
            block = this.block(node, false);
            node.elses.push(new nodes.If(cond, block));
          } else {
            node.elses.push(this.block(node, false));
            break;
          }
          this.skip(['newline', 'comment']);
        }
        this.state.pop();
        return node;
      },
      atblock: function(node) {
        if (!node) this.expect('atblock');
        node = new nodes.Atblock();
        this.state.push('atblock');
        node.block = this.block(node, false);
        this.state.pop();
        return node;
      },
      atrule: function() {
        var type = this.expect('atrule').val,
          node = new nodes.Atrule(type),
          tok;
        this.skipSpacesAndComments();
        node.segments = this.selectorParts();
        this.skipSpacesAndComments();
        tok = this.peek().type;
        if (
          'indent' == tok ||
          '{' == tok ||
          ('newline' == tok && '{' == this.lookahead(2).type)
        ) {
          this.state.push('atrule');
          node.block = this.block(node);
          this.state.pop();
        }
        return node;
      },
      scope: function() {
        this.expect('scope');
        var selector = this.selectorParts()
          .map(function(selector) {
            return selector.val;
          })
          .join('');
        this.selectorScope = selector.trim();
        return nodes.nil;
      },
      supports: function() {
        this.expect('supports');
        var node = new nodes.Supports(this.supportsCondition());
        this.state.push('atrule');
        node.block = this.block(node);
        this.state.pop();
        return node;
      },
      supportsCondition: function() {
        var node = this.supportsNegation() || this.supportsOp();
        if (!node) {
          this.cond = true;
          node = this.expression();
          this.cond = false;
        }
        return node;
      },
      supportsNegation: function() {
        if (this.accept('not')) {
          var node = new nodes.Expression();
          node.push(new nodes.Literal('not'));
          node.push(this.supportsFeature());
          return node;
        }
      },
      supportsOp: function() {
        var feature = this.supportsFeature(),
          op,
          expr;
        if (feature) {
          expr = new nodes.Expression();
          expr.push(feature);
          while ((op = this.accept('&&') || this.accept('||'))) {
            expr.push(new nodes.Literal('&&' == op.val ? 'and' : 'or'));
            expr.push(this.supportsFeature());
          }
          return expr;
        }
      },
      supportsFeature: function() {
        this.skipSpacesAndComments();
        if ('(' == this.peek().type) {
          var la = this.lookahead(2).type;
          if ('ident' == la || '{' == la) {
            return this.feature();
          } else {
            this.expect('(');
            var node = new nodes.Expression();
            node.push(new nodes.Literal('('));
            node.push(this.supportsCondition());
            this.expect(')');
            node.push(new nodes.Literal(')'));
            this.skipSpacesAndComments();
            return node;
          }
        }
      },
      extend: function() {
        var tok = this.expect('extend'),
          selectors = [],
          sel,
          node,
          arr;
        do {
          arr = this.selectorParts();
          if (!arr.length) continue;
          sel = new nodes.Selector(arr);
          selectors.push(sel);
          if ('!' !== this.peek().type) continue;
          tok = this.lookahead(2);
          if ('ident' !== tok.type || 'optional' !== tok.val.name) continue;
          this.skip(['!', 'ident']);
          sel.optional = true;
        } while (this.accept(','));
        node = new nodes.Extend(selectors);
        node.lineno = tok.lineno;
        node.column = tok.column;
        return node;
      },
      media: function() {
        this.expect('media');
        this.state.push('atrule');
        var media = new nodes.Media(this.queries());
        media.block = this.block(media);
        this.state.pop();
        return media;
      },
      queries: function() {
        var queries = new nodes.QueryList(),
          skip = ['comment', 'newline', 'space'];
        do {
          this.skip(skip);
          queries.push(this.query());
          this.skip(skip);
        } while (this.accept(','));
        return queries;
      },
      query: function() {
        var query = new nodes.Query(),
          expr,
          pred,
          id;
        if (
          'ident' == this.peek().type &&
          ('.' == this.lookahead(2).type || '[' == this.lookahead(2).type)
        ) {
          this.cond = true;
          expr = this.expression();
          this.cond = false;
          query.push(new nodes.Feature(expr.nodes));
          return query;
        }
        if ((pred = this.accept('ident') || this.accept('not'))) {
          pred = new nodes.Literal(pred.val.string || pred.val);
          this.skipSpacesAndComments();
          if ((id = this.accept('ident'))) {
            query.type = id.val;
            query.predicate = pred;
          } else {
            query.type = pred;
          }
          this.skipSpacesAndComments();
          if (!this.accept('&&')) return query;
        }
        do {
          query.push(this.feature());
        } while (this.accept('&&'));
        return query;
      },
      feature: function() {
        this.skipSpacesAndComments();
        this.expect('(');
        this.skipSpacesAndComments();
        var node = new nodes.Feature(this.interpolate());
        this.skipSpacesAndComments();
        this.accept(':');
        this.skipSpacesAndComments();
        this.inProperty = true;
        node.expr = this.list();
        this.inProperty = false;
        this.skipSpacesAndComments();
        this.expect(')');
        this.skipSpacesAndComments();
        return node;
      },
      mozdocument: function() {
        this.expect('-moz-document');
        var mozdocument = new nodes.Atrule('-moz-document'),
          calls = [];
        do {
          this.skipSpacesAndComments();
          calls.push(this.functionCall());
          this.skipSpacesAndComments();
        } while (this.accept(','));
        mozdocument.segments = [new nodes.Literal(calls.join(', '))];
        this.state.push('atrule');
        mozdocument.block = this.block(mozdocument, false);
        this.state.pop();
        return mozdocument;
      },
      atimport: function() {
        this.expect('import');
        this.allowPostfix = true;
        return new nodes.Import(this.expression(), false);
      },
      require: function() {
        this.expect('require');
        this.allowPostfix = true;
        return new nodes.Import(this.expression(), true);
      },
      charset: function() {
        this.expect('charset');
        var str = this.expect('string').val;
        this.allowPostfix = true;
        return new nodes.Charset(str);
      },
      namespace: function() {
        var str, prefix;
        this.expect('namespace');
        this.skipSpacesAndComments();
        if ((prefix = this.accept('ident'))) {
          prefix = prefix.val;
        }
        this.skipSpacesAndComments();
        str = this.accept('string') || this.url();
        this.allowPostfix = true;
        return new nodes.Namespace(str, prefix);
      },
      keyframes: function() {
        var tok = this.expect('keyframes'),
          keyframes;
        this.skipSpacesAndComments();
        keyframes = new nodes.Keyframes(this.selectorParts(), tok.val);
        this.skipSpacesAndComments();
        this.state.push('atrule');
        keyframes.block = this.block(keyframes);
        this.state.pop();
        return keyframes;
      },
      literal: function() {
        return this.expect('literal').val;
      },
      id: function() {
        var tok = this.expect('ident');
        this.accept('space');
        return tok.val;
      },
      ident: function() {
        var i = 2,
          la = this.lookahead(i).type;
        while ('space' == la) la = this.lookahead(++i).type;
        switch (la) {
          case '=':
          case '?=':
          case '-=':
          case '+=':
          case '*=':
          case '/=':
          case '%=':
            return this.assignment();
          case '.':
            if ('space' == this.lookahead(i - 1).type) return this.selector();
            if (this._ident == this.peek()) return this.id();
            while (
              '=' != this.lookahead(++i).type &&
              !~['[', ',', 'newline', 'indent', 'eos'].indexOf(
                this.lookahead(i).type,
              )
            );
            if ('=' == this.lookahead(i).type) {
              this._ident = this.peek();
              return this.expression();
            } else if (this.looksLikeSelector() && this.stateAllowsSelector()) {
              return this.selector();
            }
          case '[':
            if (this._ident == this.peek()) return this.id();
            while (
              ']' != this.lookahead(i++).type &&
              'selector' != this.lookahead(i).type &&
              'eos' != this.lookahead(i).type
            );
            if ('=' == this.lookahead(i).type) {
              this._ident = this.peek();
              return this.expression();
            } else if (this.looksLikeSelector() && this.stateAllowsSelector()) {
              return this.selector();
            }
          case '-':
          case '+':
          case '/':
          case '*':
          case '%':
          case '**':
          case '&&':
          case '||':
          case '>':
          case '<':
          case '>=':
          case '<=':
          case '!=':
          case '==':
          case '?':
          case 'in':
          case 'is a':
          case 'is defined':
            if (this._ident == this.peek()) {
              return this.id();
            } else {
              this._ident = this.peek();
              switch (this.currentState()) {
                case 'for':
                case 'selector':
                  return this.property();
                case 'root':
                case 'atblock':
                case 'atrule':
                  return '[' == la ? this.subscript() : this.selector();
                case 'function':
                case 'conditional':
                  return this.looksLikeSelector()
                    ? this.selector()
                    : this.expression();
                default:
                  return this.operand ? this.id() : this.expression();
              }
            }
          default:
            switch (this.currentState()) {
              case 'root':
                return this.selector();
              case 'for':
              case 'selector':
              case 'function':
              case 'conditional':
              case 'atblock':
              case 'atrule':
                return this.property();
              default:
                var id = this.id();
                if ('interpolation' == this.previousState()) id.mixin = true;
                return id;
            }
        }
      },
      interpolate: function() {
        var node,
          segs = [],
          star;
        star = this.accept('*');
        if (star) segs.push(new nodes.Literal('*'));
        while (true) {
          if (this.accept('{')) {
            this.state.push('interpolation');
            segs.push(this.expression());
            this.expect('}');
            this.state.pop();
          } else if ((node = this.accept('-'))) {
            segs.push(new nodes.Literal('-'));
          } else if ((node = this.accept('ident'))) {
            segs.push(node.val);
          } else {
            break;
          }
        }
        if (!segs.length) this.expect('ident');
        return segs;
      },
      property: function() {
        if (this.looksLikeSelector(true)) return this.selector();
        var ident = this.interpolate(),
          prop = new nodes.Property(ident),
          ret = prop;
        this.accept('space');
        if (this.accept(':')) this.accept('space');
        this.state.push('property');
        this.inProperty = true;
        prop.expr = this.list();
        if (prop.expr.isEmpty) ret = ident[0];
        this.inProperty = false;
        this.allowPostfix = true;
        this.state.pop();
        this.accept(';');
        return ret;
      },
      selector: function() {
        var arr,
          group = new nodes.Group(),
          scope = this.selectorScope,
          isRoot = 'root' == this.currentState(),
          selector;
        do {
          this.accept('newline');
          arr = this.selectorParts();
          if (isRoot && scope) arr.unshift(new nodes.Literal(scope + ' '));
          if (arr.length) {
            selector = new nodes.Selector(arr);
            selector.lineno = arr[0].lineno;
            selector.column = arr[0].column;
            group.push(selector);
          }
        } while (this.accept(',') || this.accept('newline'));
        if ('selector-parts' == this.currentState()) return group.nodes;
        this.state.push('selector');
        group.block = this.block(group);
        this.state.pop();
        return group;
      },
      selectorParts: function() {
        var tok,
          arr = [];
        while ((tok = this.selectorToken())) {
          switch (tok.type) {
            case '{':
              this.skipSpaces();
              var expr = this.expression();
              this.skipSpaces();
              this.expect('}');
              arr.push(expr);
              break;
            case this.prefix && '.':
              var literal = new nodes.Literal(tok.val + this.prefix);
              literal.prefixed = true;
              arr.push(literal);
              break;
            case 'comment':
              break;
            case 'color':
            case 'unit':
              arr.push(new nodes.Literal(tok.val.raw));
              break;
            case 'space':
              arr.push(new nodes.Literal(' '));
              break;
            case 'function':
              arr.push(new nodes.Literal(tok.val.name + '('));
              break;
            case 'ident':
              arr.push(new nodes.Literal(tok.val.name || tok.val.string));
              break;
            default:
              arr.push(new nodes.Literal(tok.val));
              if (tok.space) arr.push(new nodes.Literal(' '));
          }
        }
        return arr;
      },
      assignment: function() {
        var op,
          node,
          name = this.id().name;
        if (
          (op =
            this.accept('=') ||
            this.accept('?=') ||
            this.accept('+=') ||
            this.accept('-=') ||
            this.accept('*=') ||
            this.accept('/=') ||
            this.accept('%='))
        ) {
          this.state.push('assignment');
          var expr = this.list();
          if (expr.isEmpty) this.assignAtblock(expr);
          node = new nodes.Ident(name, expr);
          this.state.pop();
          switch (op.type) {
            case '?=':
              var defined = new nodes.BinOp('is defined', node),
                lookup = new nodes.Expression();
              lookup.push(new nodes.Ident(name));
              node = new nodes.Ternary(defined, lookup, node);
              break;
            case '+=':
            case '-=':
            case '*=':
            case '/=':
            case '%=':
              node.val = new nodes.BinOp(
                op.type[0],
                new nodes.Ident(name),
                expr,
              );
              break;
          }
        }
        return node;
      },
      fun: function() {
        var parens = 1,
          i = 2,
          tok;
        out: while ((tok = this.lookahead(i++))) {
          switch (tok.type) {
            case 'function':
            case '(':
              ++parens;
              break;
            case ')':
              if (!--parens) break out;
              break;
            case 'eos':
              this.error('failed to find closing paren ")"');
          }
        }
        switch (this.currentState()) {
          case 'expression':
            return this.functionCall();
          default:
            return this.looksLikeFunctionDefinition(i)
              ? this.functionDefinition()
              : this.expression();
        }
      },
      url: function() {
        this.expect('function');
        this.state.push('function arguments');
        var args = this.args();
        this.expect(')');
        this.state.pop();
        return new nodes.Call('url', args);
      },
      functionCall: function() {
        var withBlock = this.accept('+');
        if ('url' == this.peek().val.name) return this.url();
        var name = this.expect('function').val.name;
        this.state.push('function arguments');
        this.parens++;
        var args = this.args();
        this.expect(')');
        this.parens--;
        this.state.pop();
        var call = new nodes.Call(name, args);
        if (withBlock) {
          this.state.push('function');
          call.block = this.block(call);
          this.state.pop();
        }
        return call;
      },
      functionDefinition: function() {
        var name = this.expect('function').val.name;
        this.state.push('function params');
        this.skipWhitespace();
        var params = this.params();
        this.skipWhitespace();
        this.expect(')');
        this.state.pop();
        this.state.push('function');
        var fn = new nodes.Function(name, params);
        fn.block = this.block(fn);
        this.state.pop();
        return new nodes.Ident(name, fn);
      },
      params: function() {
        var tok,
          node,
          params = new nodes.Params();
        while ((tok = this.accept('ident'))) {
          this.accept('space');
          params.push((node = tok.val));
          if (this.accept('...')) {
            node.rest = true;
          } else if (this.accept('=')) {
            node.val = this.expression();
          }
          this.skipWhitespace();
          this.accept(',');
          this.skipWhitespace();
        }
        return params;
      },
      args: function() {
        var args = new nodes.Arguments(),
          keyword;
        do {
          if ('ident' == this.peek().type && ':' == this.lookahead(2).type) {
            keyword = this.next().val.string;
            this.expect(':');
            args.map[keyword] = this.expression();
          } else {
            args.push(this.expression());
          }
        } while (this.accept(','));
        return args;
      },
      list: function() {
        var node = this.expression();
        while (this.accept(',')) {
          if (node.isList) {
            list.push(this.expression());
          } else {
            var list = new nodes.Expression(true);
            list.push(node);
            list.push(this.expression());
            node = list;
          }
        }
        return node;
      },
      expression: function() {
        var node,
          expr = new nodes.Expression();
        this.state.push('expression');
        while ((node = this.negation())) {
          if (!node) this.error('unexpected token {peek} in expression');
          expr.push(node);
        }
        this.state.pop();
        if (expr.nodes.length) {
          expr.lineno = expr.nodes[0].lineno;
          expr.column = expr.nodes[0].column;
        }
        return expr;
      },
      negation: function() {
        if (this.accept('not')) {
          return new nodes.UnaryOp('!', this.negation());
        }
        return this.ternary();
      },
      ternary: function() {
        var node = this.logical();
        if (this.accept('?')) {
          var trueExpr = this.expression();
          this.expect(':');
          var falseExpr = this.expression();
          node = new nodes.Ternary(node, trueExpr, falseExpr);
        }
        return node;
      },
      logical: function() {
        var op,
          node = this.typecheck();
        while ((op = this.accept('&&') || this.accept('||'))) {
          node = new nodes.BinOp(op.type, node, this.typecheck());
        }
        return node;
      },
      typecheck: function() {
        var op,
          node = this.equality();
        while ((op = this.accept('is a'))) {
          this.operand = true;
          if (!node)
            this.error('illegal unary "' + op + '", missing left-hand operand');
          node = new nodes.BinOp(op.type, node, this.equality());
          this.operand = false;
        }
        return node;
      },
      equality: function() {
        var op,
          node = this.inop();
        while ((op = this.accept('==') || this.accept('!='))) {
          this.operand = true;
          if (!node)
            this.error('illegal unary "' + op + '", missing left-hand operand');
          node = new nodes.BinOp(op.type, node, this.inop());
          this.operand = false;
        }
        return node;
      },
      inop: function() {
        var node = this.relational();
        while (this.accept('in')) {
          this.operand = true;
          if (!node)
            this.error('illegal unary "in", missing left-hand operand');
          node = new nodes.BinOp('in', node, this.relational());
          this.operand = false;
        }
        return node;
      },
      relational: function() {
        var op,
          node = this.range();
        while (
          (op =
            this.accept('>=') ||
            this.accept('<=') ||
            this.accept('<') ||
            this.accept('>'))
        ) {
          this.operand = true;
          if (!node)
            this.error('illegal unary "' + op + '", missing left-hand operand');
          node = new nodes.BinOp(op.type, node, this.range());
          this.operand = false;
        }
        return node;
      },
      range: function() {
        var op,
          node = this.additive();
        if ((op = this.accept('...') || this.accept('..'))) {
          this.operand = true;
          if (!node)
            this.error('illegal unary "' + op + '", missing left-hand operand');
          node = new nodes.BinOp(op.val, node, this.additive());
          this.operand = false;
        }
        return node;
      },
      additive: function() {
        var op,
          node = this.multiplicative();
        while ((op = this.accept('+') || this.accept('-'))) {
          this.operand = true;
          node = new nodes.BinOp(op.type, node, this.multiplicative());
          this.operand = false;
        }
        return node;
      },
      multiplicative: function() {
        var op,
          node = this.defined();
        while (
          (op =
            this.accept('**') ||
            this.accept('*') ||
            this.accept('/') ||
            this.accept('%'))
        ) {
          this.operand = true;
          if ('/' == op && this.inProperty && !this.parens) {
            this.stash.push(new Token('literal', new nodes.Literal('/')));
            this.operand = false;
            return node;
          } else {
            if (!node)
              this.error(
                'illegal unary "' + op + '", missing left-hand operand',
              );
            node = new nodes.BinOp(op.type, node, this.defined());
            this.operand = false;
          }
        }
        return node;
      },
      defined: function() {
        var node = this.unary();
        if (this.accept('is defined')) {
          if (!node)
            this.error('illegal unary "is defined", missing left-hand operand');
          node = new nodes.BinOp('is defined', node);
        }
        return node;
      },
      unary: function() {
        var op, node;
        if (
          (op =
            this.accept('!') ||
            this.accept('~') ||
            this.accept('+') ||
            this.accept('-'))
        ) {
          this.operand = true;
          node = this.unary();
          if (!node) this.error('illegal unary "' + op + '"');
          node = new nodes.UnaryOp(op.type, node);
          this.operand = false;
          return node;
        }
        return this.subscript();
      },
      subscript: function() {
        var node = this.member(),
          id;
        while (this.accept('[')) {
          node = new nodes.BinOp('[]', node, this.expression());
          this.expect(']');
        }
        if (this.accept('=')) {
          node.op += '=';
          node.val = this.list();
          if (node.val.isEmpty) this.assignAtblock(node.val);
        }
        return node;
      },
      member: function() {
        var node = this.primary();
        if (node) {
          while (this.accept('.')) {
            var id = new nodes.Ident(this.expect('ident').val.string);
            node = new nodes.Member(node, id);
          }
          this.skipSpaces();
          if (this.accept('=')) {
            node.val = this.list();
            if (node.val.isEmpty) this.assignAtblock(node.val);
          }
        }
        return node;
      },
      object: function() {
        var obj = new nodes.Object(),
          id,
          val,
          comma;
        this.expect('{');
        this.skipWhitespace();
        while (!this.accept('}')) {
          if (this.accept('comment') || this.accept('newline')) continue;
          if (!comma) this.accept(',');
          id = this.accept('ident') || this.accept('string');
          if (!id) this.error('expected "ident" or "string", got {peek}');
          id = id.val.hash;
          this.skipSpacesAndComments();
          this.expect(':');
          val = this.expression();
          obj.set(id, val);
          comma = this.accept(',');
          this.skipWhitespace();
        }
        return obj;
      },
      primary: function() {
        var tok;
        this.skipSpaces();
        if (this.accept('(')) {
          ++this.parens;
          var expr = this.expression(),
            paren = this.expect(')');
          --this.parens;
          if (this.accept('%')) expr.push(new nodes.Ident('%'));
          tok = this.peek();
          if (
            !paren.space &&
            'ident' == tok.type &&
            ~units.indexOf(tok.val.string)
          ) {
            expr.push(new nodes.Ident(tok.val.string));
            this.next();
          }
          return expr;
        }
        tok = this.peek();
        switch (tok.type) {
          case 'null':
          case 'unit':
          case 'color':
          case 'string':
          case 'literal':
          case 'boolean':
          case 'comment':
            return this.next().val;
          case !this.cond && '{':
            return this.object();
          case 'atblock':
            return this.atblock();
          case 'atrule':
            var id = new nodes.Ident(this.next().val);
            id.property = true;
            return id;
          case 'ident':
            return this.ident();
          case 'function':
            return tok.anonymous
              ? this.functionDefinition()
              : this.functionCall();
        }
      },
    };
  });
  require.register('renderer.js', function(module, exports, require) {
    var Parser = require('./parser'),
      Evaluator = require('./visitor/evaluator'),
      Normalizer = require('./visitor/normalizer'),
      utils = require('./utils'),
      nodes = require('./nodes'),
      join = require('./path').join;
    module.exports = Renderer;
    function Renderer(str, options) {
      options = options || {};
      options.globals = options.globals || {};
      options.functions = options.functions || {};
      options.use = options.use || [];
      options.use = Array.isArray(options.use) ? options.use : [options.use];
      options.imports = [];
      options.paths = options.paths || [];
      options.filename = options.filename || 'stylus';
      options.Evaluator = options.Evaluator || Evaluator;
      this.options = options;
      this.str = str;
    }
    Renderer.prototype.render = function(fn) {
      var parser = (this.parser = new Parser(this.str, this.options));
      for (var i = 0, len = this.options.use.length; i < len; i++) {
        this.use(this.options.use[i]);
      }
      try {
        nodes.filename = this.options.filename;
        var ast = parser.parse();
        this.evaluator = new this.options.Evaluator(ast, this.options);
        this.nodes = nodes;
        this.evaluator.renderer = this;
        ast = this.evaluator.evaluate();
        var normalizer = new Normalizer(ast, this.options);
        ast = normalizer.normalize();
        var compiler = this.options.sourcemap
            ? new (require('./visitor/sourcemapper'))(ast, this.options)
            : new (require('./visitor/compiler'))(ast, this.options),
          css = compiler.compile();
        if (this.options.sourcemap) this.sourcemap = compiler.map.toJSON();
      } catch (err) {
        var options = {};
        options.input = err.input || this.str;
        options.filename = err.filename || this.options.filename;
        options.lineno = err.lineno || parser.lexer.lineno;
        options.column = err.column || parser.lexer.column;
        if (!fn) throw utils.formatException(err, options);
        return fn(utils.formatException(err, options));
      }
      if (!fn) return css;
      fn(null, css);
    };
    Renderer.prototype.deps = function(filename) {
      var opts = utils.merge({ cache: false }, this.options);
      if (filename) opts.filename = filename;
      var DepsResolver = require('./visitor/deps-resolver'),
        parser = new Parser(this.str, opts);
      try {
        nodes.filename = opts.filename;
        var ast = parser.parse(),
          resolver = new DepsResolver(ast, opts);
        return resolver.resolve();
      } catch (err) {
        var options = {};
        options.input = err.input || this.str;
        options.filename = err.filename || opts.filename;
        options.lineno = err.lineno || parser.lexer.lineno;
        options.column = err.column || parser.lexer.column;
        throw utils.formatException(err, options);
      }
    };
    Renderer.prototype.set = function(key, val) {
      this.options[key] = val;
      return this;
    };
    Renderer.prototype.get = function(key) {
      return this.options[key];
    };
    Renderer.prototype.include = function(path) {
      this.options.paths.push(path);
      return this;
    };
    Renderer.prototype.use = function(fn) {
      fn.call(this, this);
      return this;
    };
    Renderer.prototype.define = function(name, fn, raw) {
      fn = utils.coerce(fn, raw);
      if (fn.nodeName) {
        this.options.globals[name] = fn;
        return this;
      }
      this.options.functions[name] = fn;
      if (undefined != raw) fn.raw = raw;
      return this;
    };
  });
  require.register('selector-parser.js', function(module, exports, require) {
    var COMBINATORS = ['>', '+', '~'];
    var SelectorParser = (module.exports = function SelectorParser(
      str,
      stack,
      parts,
    ) {
      this.str = str;
      this.stack = stack || [];
      this.parts = parts || [];
      this.pos = 0;
      this.level = 2;
      this.nested = true;
      this.ignore = false;
    });
    SelectorParser.prototype.skip = function(len) {
      this.str = this.str.substr(len);
      this.pos += len;
    };
    SelectorParser.prototype.skipSpaces = function() {
      while (' ' == this.str[0]) this.skip(1);
    };
    SelectorParser.prototype.advance = function() {
      return (
        this.root() ||
        this.relative() ||
        this.initial() ||
        this.escaped() ||
        this.parent() ||
        this.partial() ||
        this.char()
      );
    };
    SelectorParser.prototype.root = function() {
      if (!this.pos && '/' == this.str[0] && 'deep' != this.str.slice(1, 5)) {
        this.nested = false;
        this.skip(1);
      }
    };
    SelectorParser.prototype.relative = function(multi) {
      if ((!this.pos || multi) && '../' == this.str.slice(0, 3)) {
        this.nested = false;
        this.skip(3);
        while (this.relative(true)) this.level++;
        if (!this.raw) {
          var ret = this.stack[this.stack.length - this.level];
          if (ret) {
            return ret;
          } else {
            this.ignore = true;
          }
        }
      }
    };
    SelectorParser.prototype.initial = function() {
      if (!this.pos && '~' == this.str[0] && '/' == this.str[1]) {
        this.nested = false;
        this.skip(2);
        return this.stack[0];
      }
    };
    SelectorParser.prototype.escaped = function() {
      if ('\\' == this.str[0]) {
        var char = this.str[1];
        if ('&' == char || '^' == char) {
          this.skip(2);
          return char;
        }
      }
    };
    SelectorParser.prototype.parent = function() {
      if ('&' == this.str[0]) {
        this.nested = false;
        if (!this.pos && (!this.stack.length || this.raw)) {
          var i = 0;
          while (' ' == this.str[++i]);
          if (~COMBINATORS.indexOf(this.str[i])) {
            this.skip(i + 1);
            return;
          }
        }
        this.skip(1);
        if (!this.raw) return this.stack[this.stack.length - 1];
      }
    };
    SelectorParser.prototype.partial = function() {
      if ('^' == this.str[0] && '[' == this.str[1]) {
        this.skip(2);
        this.skipSpaces();
        var ret = this.range();
        this.skipSpaces();
        if (']' != this.str[0]) return '^[';
        this.nested = false;
        this.skip(1);
        if (ret) {
          return ret;
        } else {
          this.ignore = true;
        }
      }
    };
    SelectorParser.prototype.number = function() {
      var i = 0,
        ret = '';
      if ('-' == this.str[i]) ret += this.str[i++];
      while (this.str.charCodeAt(i) >= 48 && this.str.charCodeAt(i) <= 57)
        ret += this.str[i++];
      if (ret) {
        this.skip(i);
        return Number(ret);
      }
    };
    SelectorParser.prototype.range = function() {
      var start = this.number(),
        ret;
      if ('..' == this.str.slice(0, 2)) {
        this.skip(2);
        var end = this.number(),
          len = this.parts.length;
        if (start < 0) start = len + start - 1;
        if (end < 0) end = len + end - 1;
        if (start > end) {
          var tmp = start;
          start = end;
          end = tmp;
        }
        if (end < len - 1) {
          ret = this.parts
            .slice(start, end + 1)
            .map(function(part) {
              var selector = new SelectorParser(part, this.stack, this.parts);
              selector.raw = true;
              return selector.parse();
            }, this)
            .map(function(selector) {
              return (selector.nested ? ' ' : '') + selector.val;
            })
            .join('')
            .trim();
        }
      } else {
        ret = this.stack[start < 0 ? this.stack.length + start - 1 : start];
      }
      if (ret) {
        return ret;
      } else {
        this.ignore = true;
      }
    };
    SelectorParser.prototype.char = function() {
      var char = this.str[0];
      this.skip(1);
      return char;
    };
    SelectorParser.prototype.parse = function() {
      var val = '';
      while (this.str.length) {
        val += this.advance() || '';
        if (this.ignore) {
          val = '';
          break;
        }
      }
      return { val: val.trimRight(), nested: this.nested };
    };
  });
  require.register('stack/index.js', function(module, exports, require) {
    var Stack = (module.exports = function Stack() {
      Array.apply(this, arguments);
    });
    Stack.prototype.__proto__ = Array.prototype;
    Stack.prototype.push = function(frame) {
      frame.stack = this;
      frame.parent = this.currentFrame;
      return [].push.apply(this, arguments);
    };
    Stack.prototype.__defineGetter__('currentFrame', function() {
      return this[this.length - 1];
    });
    Stack.prototype.getBlockFrame = function(block) {
      for (var i = 0; i < this.length; ++i) {
        if (block == this[i].block) {
          return this[i];
        }
      }
    };
    Stack.prototype.lookup = function(name) {
      var block = this.currentFrame.block,
        val,
        ret;
      do {
        var frame = this.getBlockFrame(block);
        if (frame && (val = frame.lookup(name))) {
          return val;
        }
      } while ((block = block.parent));
    };
    Stack.prototype.inspect = function() {
      return this.reverse()
        .map(function(frame) {
          return frame.inspect();
        })
        .join('\n');
    };
    Stack.prototype.toString = function() {
      var block,
        node,
        buf = [],
        location,
        len = this.length;
      while (len--) {
        block = this[len].block;
        if ((node = block.node)) {
          location =
            '(' +
            node.filename +
            ':' +
            (node.lineno + 1) +
            ':' +
            node.column +
            ')';
          switch (node.nodeName) {
            case 'function':
              buf.push('    at ' + node.name + '() ' + location);
              break;
            case 'group':
              buf.push('    at "' + node.nodes[0].val + '" ' + location);
              break;
          }
        }
      }
      return buf.join('\n');
    };
  });
  require.register('stack/frame.js', function(module, exports, require) {
    var Scope = require('./scope');
    var Frame = (module.exports = function Frame(block) {
      this._scope = false === block.scope ? null : new Scope();
      this.block = block;
    });
    Frame.prototype.__defineGetter__('scope', function() {
      return this._scope || this.parent.scope;
    });
    Frame.prototype.lookup = function(name) {
      return this.scope.lookup(name);
    };
    Frame.prototype.inspect = function() {
      return (
        '[Frame ' +
        (false === this.block.scope ? 'scope-less' : this.scope.inspect()) +
        ']'
      );
    };
  });
  require.register('stack/scope.js', function(module, exports, require) {
    var Scope = (module.exports = function Scope() {
      this.locals = {};
    });
    Scope.prototype.add = function(ident) {
      this.locals[ident.name] = ident.val;
    };
    Scope.prototype.lookup = function(name) {
      return this.locals[name];
    };
    Scope.prototype.inspect = function() {
      var keys = Object.keys(this.locals).map(function(key) {
        return '@' + key;
      });
      return '[Scope' + (keys.length ? ' ' + keys.join(', ') : '') + ']';
    };
  });
  require.register('stylus.js', function(module, exports, require) {
    var Renderer = require('./renderer'),
      nodes = require('./nodes'),
      utils = require('./utils');
    exports = module.exports = render;
    exports.version = '0.54.5';
    exports.nodes = nodes;
    exports.functions = require('./functions');
    exports.utils = require('./utils');
    exports.Visitor = require('./visitor');
    exports.Parser = require('./parser');
    exports.Evaluator = require('./visitor/evaluator');
    exports.Normalizer = require('./visitor/normalizer');
    exports.Compiler = require('./visitor/compiler');
    exports.render = function(str, options, fn) {
      if ('function' == typeof options) (fn = options), (options = {});
      if (bifs) str = bifs + str;
      return new Renderer(str, options).render(fn);
    };
    function render(str, options) {
      if (bifs) str = bifs + str;
      return new Renderer(str, options);
    }
    exports.url = require('./functions/url');
  });
  require.register('token.js', function(module, exports, require) {
    var Token = (exports = module.exports = function Token(type, val) {
      this.type = type;
      this.val = val;
    });
    Token.prototype.inspect = function() {
      var val = ' ' + this.val;
      return (
        '[Token:' +
        this.lineno +
        ':' +
        this.column +
        ' ' +
        '[32m' +
        this.type +
        '[0m' +
        '[33m' +
        (this.val ? val : '') +
        '[0m' +
        ']'
      );
    };
    Token.prototype.toString = function() {
      return (undefined === this.val ? this.type : this.val).toString();
    };
  });
  require.register('utils.js', function(module, exports, require) {
    var nodes = require('./nodes'),
      join = require('./path').join,
      isAbsolute = require('./path').isAbsolute;
    exports.absolute =
      isAbsolute ||
      function(path) {
        return (
          path.substr(0, 2) == '\\\\' ||
          '/' === path.charAt(0) ||
          /^[a-z]:[\\\/]/i.test(path)
        );
      };
    exports.lookup = function(path, paths, ignore) {
      var lookup,
        i = paths.length;
      if (exports.absolute(path)) {
        try {
          return path;
        } catch (err) {}
      }
      while (i--) {
        try {
          lookup = join(paths[i], path);
          if (ignore == lookup) continue;
          return lookup;
        } catch (err) {}
      }
    };
    exports.find = function(path, paths, ignore) {
      var lookup,
        found,
        i = paths.length;
      if (exports.absolute(path)) {
        if ((found = glob.sync(path)).length) {
          return found;
        }
      }
      while (i--) {
        lookup = join(paths[i], path);
        if (ignore == lookup) continue;
        if ((found = glob.sync(lookup)).length) {
          return found;
        }
      }
    };
    exports.lookupIndex = function(name, paths, filename) {
      var found = exports.find(join(name, 'index.styl'), paths, filename);
      if (!found) {
        found = exports.find(
          join(name, basename(name).replace(/\.styl/i, '') + '.styl'),
          paths,
          filename,
        );
      }
      if (!found && !~name.indexOf('node_modules')) {
        found = lookupPackage(join('node_modules', name));
      }
      return found;
      function lookupPackage(dir) {
        var pkg = exports.lookup(join(dir, 'package.json'), paths, filename);
        if (!pkg) {
          return /\.styl$/i.test(dir)
            ? exports.lookupIndex(dir, paths, filename)
            : lookupPackage(dir + '.styl');
        }
        var main = require(relative(__dirname, pkg)).main;
        if (main) {
          found = exports.find(join(dir, main), paths, filename);
        } else {
          found = exports.lookupIndex(dir, paths, filename);
        }
        return found;
      }
    };
    exports.formatException = function(err, options) {
      var lineno = options.lineno,
        column = options.column,
        filename = options.filename,
        str = options.input,
        context = options.context || 8,
        context = context / 2,
        lines = ('\n' + str).split('\n'),
        start = Math.max(lineno - context, 1),
        end = Math.min(lines.length, lineno + context),
        pad = end.toString().length;
      var context = lines
        .slice(start, end)
        .map(function(line, i) {
          var curr = i + start;
          return (
            '   ' +
            Array(pad - curr.toString().length + 1).join(' ') +
            curr +
            '| ' +
            line +
            (curr == lineno
              ? '\n' +
                Array(curr.toString().length + 5 + column).join('-') +
                '^'
              : '')
          );
        })
        .join('\n');
      err.message =
        filename +
        ':' +
        lineno +
        ':' +
        column +
        '\n' +
        context +
        '\n\n' +
        err.message +
        '\n' +
        (err.stylusStack ? err.stylusStack + '\n' : '');
      if (err.fromStylus) err.stack = 'Error: ' + err.message;
      return err;
    };
    exports.assertType = function(node, type, param) {
      exports.assertPresent(node, param);
      if (node.nodeName == type) return;
      var actual = node.nodeName,
        msg =
          'expected ' +
          (param ? '"' + param + '" to be a ' : '') +
          type +
          ', but got ' +
          actual +
          ':' +
          node;
      throw new Error('TypeError: ' + msg);
    };
    exports.assertString = function(node, param) {
      exports.assertPresent(node, param);
      switch (node.nodeName) {
        case 'string':
        case 'ident':
        case 'literal':
          return;
        default:
          var actual = node.nodeName,
            msg =
              'expected string, ident or literal, but got ' +
              actual +
              ':' +
              node;
          throw new Error('TypeError: ' + msg);
      }
    };
    exports.assertColor = function(node, param) {
      exports.assertPresent(node, param);
      switch (node.nodeName) {
        case 'rgba':
        case 'hsla':
          return;
        default:
          var actual = node.nodeName,
            msg = 'expected rgba or hsla, but got ' + actual + ':' + node;
          throw new Error('TypeError: ' + msg);
      }
    };
    exports.assertPresent = function(node, name) {
      if (node) return;
      if (name) throw new Error('"' + name + '" argument required');
      throw new Error('argument missing');
    };
    exports.unwrap = function(expr) {
      if (expr.preserve) return expr;
      if ('arguments' != expr.nodeName && 'expression' != expr.nodeName)
        return expr;
      if (1 != expr.nodes.length) return expr;
      if (
        'arguments' != expr.nodes[0].nodeName &&
        'expression' != expr.nodes[0].nodeName
      )
        return expr;
      return exports.unwrap(expr.nodes[0]);
    };
    exports.coerce = function(val, raw) {
      switch (typeof val) {
        case 'function':
          return val;
        case 'string':
          return new nodes.String(val);
        case 'boolean':
          return new nodes.Boolean(val);
        case 'number':
          return new nodes.Unit(val);
        default:
          if (null == val) return nodes.nil;
          if (Array.isArray(val)) return exports.coerceArray(val, raw);
          if (val.nodeName) return val;
          return exports.coerceObject(val, raw);
      }
    };
    exports.coerceArray = function(val, raw) {
      var expr = new nodes.Expression();
      val.forEach(function(val) {
        expr.push(exports.coerce(val, raw));
      });
      return expr;
    };
    exports.coerceObject = function(obj, raw) {
      var node = raw ? new nodes.Object() : new nodes.Expression(),
        val;
      for (var key in obj) {
        val = exports.coerce(obj[key], raw);
        key = new nodes.Ident(key);
        if (raw) {
          node.set(key, val);
        } else {
          node.push(exports.coerceArray([key, val]));
        }
      }
      return node;
    };
    exports.params = function(fn) {
      return fn.toString().match(/\(([^)]*)\)/)[1].split(/ *, */);
    };
    exports.merge = function(a, b, deep) {
      for (var k in b) {
        if (deep && a[k]) {
          var nodeA = exports.unwrap(a[k]).first,
            nodeB = exports.unwrap(b[k]).first;
          if ('object' == nodeA.nodeName && 'object' == nodeB.nodeName) {
            a[k].first.vals = exports.merge(nodeA.vals, nodeB.vals, deep);
          } else {
            a[k] = b[k];
          }
        } else {
          a[k] = b[k];
        }
      }
      return a;
    };
    exports.uniq = function(arr) {
      var obj = {},
        ret = [];
      for (var i = 0, len = arr.length; i < len; ++i) {
        if (arr[i] in obj) continue;
        obj[arr[i]] = true;
        ret.push(arr[i]);
      }
      return ret;
    };
    exports.compileSelectors = function(arr, leaveHidden) {
      var selectors = [],
        Parser = require('./selector-parser'),
        indent = this.indent || '',
        buf = [];
      function parse(selector, buf) {
        var parts = [selector.val],
          str = new Parser(parts[0], parents, parts).parse().val,
          parents = [];
        if (buf.length) {
          for (var i = 0, len = buf.length; i < len; ++i) {
            parts.push(buf[i]);
            parents.push(str);
            var child = new Parser(buf[i], parents, parts).parse();
            if (child.nested) {
              str += ' ' + child.val;
            } else {
              str = child.val;
            }
          }
        }
        return str.trim();
      }
      function compile(arr, i) {
        if (i) {
          arr[i].forEach(function(selector) {
            if (!leaveHidden && selector.isPlaceholder) return;
            if (selector.inherits) {
              buf.unshift(selector.val);
              compile(arr, i - 1);
              buf.shift();
            } else {
              selectors.push(indent + parse(selector, buf));
            }
          });
        } else {
          arr[0].forEach(function(selector) {
            if (!leaveHidden && selector.isPlaceholder) return;
            var str = parse(selector, buf);
            if (str) selectors.push(indent + str);
          });
        }
      }
      compile(arr, arr.length - 1);
      return exports.uniq(selectors);
    };
    exports.parseString = function(str) {
      var Parser = require('./parser'),
        parser,
        ret;
      try {
        parser = new Parser(str);
        parser.state.push('expression');
        ret = new nodes.Expression();
        ret.nodes = parser.parse().nodes;
      } catch (e) {
        ret = new nodes.Literal(str);
      }
      return ret;
    };
  });
  require.register('visitor/index.js', function(module, exports, require) {
    var Visitor = (module.exports = function Visitor(root) {
      this.root = root;
    });
    Visitor.prototype.visit = function(node, fn) {
      var method = 'visit' + node.constructor.name;
      if (this[method]) return this[method](node);
      return node;
    };
  });
  require.register('visitor/compiler.js', function(module, exports, require) {
    var Visitor = require('./index'),
      utils = require('../utils');
    var Compiler = (module.exports = function Compiler(root, options) {
      options = options || {};
      this.compress = options.compress;
      this.firebug = options.firebug;
      this.linenos = options.linenos;
      this.spaces = options['indent spaces'] || 2;
      this.indents = 1;
      Visitor.call(this, root);
      this.stack = [];
    });
    Compiler.prototype.__proto__ = Visitor.prototype;
    Compiler.prototype.compile = function() {
      return this.visit(this.root);
    };
    Compiler.prototype.out = function(str, node) {
      return str;
    };
    Compiler.prototype.__defineGetter__('indent', function() {
      if (this.compress) return '';
      return new Array(this.indents).join(Array(this.spaces + 1).join(' '));
    });
    Compiler.prototype.needBrackets = function(node) {
      return (
        1 == this.indents || 'atrule' != node.nodeName || node.hasOnlyProperties
      );
    };
    Compiler.prototype.visitRoot = function(block) {
      this.buf = '';
      for (var i = 0, len = block.nodes.length; i < len; ++i) {
        var node = block.nodes[i];
        if (this.linenos || this.firebug) this.debugInfo(node);
        var ret = this.visit(node);
        if (ret) this.buf += this.out(ret + '\n', node);
      }
      return this.buf;
    };
    Compiler.prototype.visitBlock = function(block) {
      var node,
        separator = this.compress ? '' : '\n',
        needBrackets;
      if (block.hasProperties && !block.lacksRenderedSelectors) {
        needBrackets = this.needBrackets(block.node);
        if (needBrackets) {
          this.buf += this.out(this.compress ? '{' : ' {\n');
          ++this.indents;
        }
        for (var i = 0, len = block.nodes.length; i < len; ++i) {
          this.last = len - 1 == i;
          node = block.nodes[i];
          switch (node.nodeName) {
            case 'null':
            case 'expression':
            case 'function':
            case 'group':
            case 'block':
            case 'unit':
            case 'media':
            case 'keyframes':
            case 'atrule':
            case 'supports':
              continue;
            case !this.compress && node.inline && 'comment':
              this.buf = this.buf.slice(0, -1);
              this.buf += this.out(' ' + this.visit(node) + '\n', node);
              break;
            case 'property':
              var ret = this.visit(node) + separator;
              this.buf += this.compress ? ret : this.out(ret, node);
              break;
            default:
              this.buf += this.out(this.visit(node) + separator, node);
          }
        }
        if (needBrackets) {
          --this.indents;
          this.buf += this.out(this.indent + '}' + separator);
        }
      }
      for (var i = 0, len = block.nodes.length; i < len; ++i) {
        node = block.nodes[i];
        switch (node.nodeName) {
          case 'group':
          case 'block':
          case 'keyframes':
            if (this.linenos || this.firebug) this.debugInfo(node);
            this.visit(node);
            break;
          case 'media':
          case 'import':
          case 'atrule':
          case 'supports':
            this.visit(node);
            break;
          case 'comment':
            if (!node.suppress) {
              this.buf += this.out(this.indent + this.visit(node) + '\n', node);
            }
            break;
          case 'charset':
          case 'literal':
          case 'namespace':
            this.buf += this.out(this.visit(node) + '\n', node);
            break;
        }
      }
    };
    Compiler.prototype.visitKeyframes = function(node) {
      if (!node.frames) return;
      var prefix = 'official' == node.prefix ? '' : '-' + node.prefix + '-';
      this.buf += this.out(
        '@' +
          prefix +
          'keyframes ' +
          this.visit(node.val) +
          (this.compress ? '{' : ' {\n'),
        node,
      );
      this.keyframe = true;
      ++this.indents;
      this.visit(node.block);
      --this.indents;
      this.keyframe = false;
      this.buf += this.out('}' + (this.compress ? '' : '\n'));
    };
    Compiler.prototype.visitMedia = function(media) {
      var val = media.val;
      if (!media.hasOutput || !val.nodes.length) return;
      this.buf += this.out('@media ', media);
      this.visit(val);
      this.buf += this.out(this.compress ? '{' : ' {\n');
      ++this.indents;
      this.visit(media.block);
      --this.indents;
      this.buf += this.out('}' + (this.compress ? '' : '\n'));
    };
    Compiler.prototype.visitQueryList = function(queries) {
      for (var i = 0, len = queries.nodes.length; i < len; ++i) {
        this.visit(queries.nodes[i]);
        if (len - 1 != i)
          this.buf += this.out(',' + (this.compress ? '' : ' '));
      }
    };
    Compiler.prototype.visitQuery = function(node) {
      var len = node.nodes.length;
      if (node.predicate) this.buf += this.out(node.predicate + ' ');
      if (node.type) this.buf += this.out(node.type + (len ? ' and ' : ''));
      for (var i = 0; i < len; ++i) {
        this.buf += this.out(this.visit(node.nodes[i]));
        if (len - 1 != i) this.buf += this.out(' and ');
      }
    };
    Compiler.prototype.visitFeature = function(node) {
      if (!node.expr) {
        return node.name;
      } else if (node.expr.isEmpty) {
        return '(' + node.name + ')';
      } else {
        return (
          '(' +
          node.name +
          ':' +
          (this.compress ? '' : ' ') +
          this.visit(node.expr) +
          ')'
        );
      }
    };
    Compiler.prototype.visitImport = function(imported) {
      this.buf += this.out(
        '@import ' + this.visit(imported.path) + ';\n',
        imported,
      );
    };
    Compiler.prototype.visitAtrule = function(atrule) {
      var newline = this.compress ? '' : '\n';
      this.buf += this.out(this.indent + '@' + atrule.type, atrule);
      if (atrule.val) this.buf += this.out(' ' + atrule.val.trim());
      if (atrule.block) {
        if (atrule.hasOnlyProperties) {
          this.visit(atrule.block);
        } else {
          this.buf += this.out(this.compress ? '{' : ' {\n');
          ++this.indents;
          this.visit(atrule.block);
          --this.indents;
          this.buf += this.out(this.indent + '}' + newline);
        }
      } else {
        this.buf += this.out(';' + newline);
      }
    };
    (Compiler.prototype.visitSupports = function(node) {
      if (!node.hasOutput) return;
      this.buf += this.out(this.indent + '@supports ', node);
      this.isCondition = true;
      this.buf += this.out(this.visit(node.condition));
      this.isCondition = false;
      this.buf += this.out(this.compress ? '{' : ' {\n');
      ++this.indents;
      this.visit(node.block);
      --this.indents;
      this.buf += this.out(this.indent + '}' + (this.compress ? '' : '\n'));
    }), (Compiler.prototype.visitComment = function(comment) {
      return this.compress
        ? comment.suppress ? '' : comment.str
        : comment.str;
    });
    Compiler.prototype.visitFunction = function(fn) {
      return fn.name;
    };
    Compiler.prototype.visitCharset = function(charset) {
      return '@charset ' + this.visit(charset.val) + ';';
    };
    Compiler.prototype.visitNamespace = function(namespace) {
      return (
        '@namespace ' +
        (namespace.prefix ? this.visit(namespace.prefix) + ' ' : '') +
        this.visit(namespace.val) +
        ';'
      );
    };
    Compiler.prototype.visitLiteral = function(lit) {
      var val = lit.val;
      if (lit.css) val = val.replace(/^  /gm, '');
      return val;
    };
    Compiler.prototype.visitBoolean = function(bool) {
      return bool.toString();
    };
    Compiler.prototype.visitRGBA = function(rgba) {
      return rgba.toString();
    };
    Compiler.prototype.visitHSLA = function(hsla) {
      return hsla.rgba.toString();
    };
    Compiler.prototype.visitUnit = function(unit) {
      var type = unit.type || '',
        n = unit.val,
        float = n != (n | 0);
      if (this.compress) {
        if ('%' != type && 's' != type && 'ms' != type && 0 == n) return '0';
        if (float && n < 1 && n > -1) {
          return n.toString().replace('0.', '.') + type;
        }
      }
      return (float ? parseFloat(n.toFixed(15)) : n).toString() + type;
    };
    Compiler.prototype.visitGroup = function(group) {
      var stack = this.keyframe ? [] : this.stack,
        comma = this.compress ? ',' : ',\n';
      stack.push(group.nodes);
      if (group.block.hasProperties) {
        var selectors = utils.compileSelectors.call(this, stack),
          len = selectors.length;
        if (len) {
          if (this.keyframe) comma = this.compress ? ',' : ', ';
          for (var i = 0; i < len; ++i) {
            var selector = selectors[i],
              last = i == len - 1;
            if (this.keyframe) selector = i ? selector.trim() : selector;
            this.buf += this.out(
              selector + (last ? '' : comma),
              group.nodes[i],
            );
          }
        } else {
          group.block.lacksRenderedSelectors = true;
        }
      }
      this.visit(group.block);
      stack.pop();
    };
    Compiler.prototype.visitIdent = function(ident) {
      return ident.name;
    };
    Compiler.prototype.visitString = function(string) {
      return this.isURL ? string.val : string.toString();
    };
    Compiler.prototype.visitNull = function(node) {
      return '';
    };
    Compiler.prototype.visitCall = function(call) {
      this.isURL = 'url' == call.name;
      var args = call.args.nodes
        .map(function(arg) {
          return this.visit(arg);
        }, this)
        .join(this.compress ? ',' : ', ');
      if (this.isURL) args = '"' + args + '"';
      this.isURL = false;
      return call.name + '(' + args + ')';
    };
    Compiler.prototype.visitExpression = function(expr) {
      var buf = [],
        self = this,
        len = expr.nodes.length,
        nodes = expr.nodes.map(function(node) {
          return self.visit(node);
        });
      nodes.forEach(function(node, i) {
        var last = i == len - 1;
        buf.push(node);
        if ('/' == nodes[i + 1] || '/' == node) return;
        if (last) return;
        var space =
          self.isURL ||
          (self.isCondition && (')' == nodes[i + 1] || '(' == node))
            ? ''
            : ' ';
        buf.push(expr.isList ? (self.compress ? ',' : ', ') : space);
      });
      return buf.join('');
    };
    Compiler.prototype.visitArguments = Compiler.prototype.visitExpression;
    Compiler.prototype.visitProperty = function(prop) {
      var val = this.visit(prop.expr).trim(),
        name = prop.name || prop.segments.join(''),
        arr = [];
      arr.push(
        this.out(this.indent),
        this.out(name + (this.compress ? ':' : ': '), prop),
        this.out(val, prop.expr),
        this.out(this.compress ? (this.last ? '' : ';') : ';'),
      );
      return arr.join('');
    };
    Compiler.prototype.debugInfo = function(node) {
      var path =
          node.filename == 'stdin' ? 'stdin' : fs.realpathSync(node.filename),
        line =
          (node.nodes && node.nodes.length
            ? node.nodes[0].lineno
            : node.lineno) || 1;
      if (this.linenos) {
        this.buf += '\n/* ' + 'line ' + line + ' : ' + path + ' */\n';
      }
      if (this.firebug) {
        path =
          'file\\:\\/\\/' +
          path.replace(/([.:\/\\])/g, function(m) {
            return '\\' + (m === '\\' ? '/' : m);
          });
        line = '\\00003' + line;
        this.buf +=
          '\n@media -stylus-debug-info' +
          '{filename{font-family:' +
          path +
          '}line{font-family:' +
          line +
          '}}\n';
      }
    };
  });
  require.register('visitor/evaluator.js', function(module, exports, require) {
    var Visitor = require('./index'),
      nodes = require('../nodes'),
      Stack = require('../stack'),
      Frame = require('../stack/frame'),
      utils = require('../utils'),
      bifs = require('../functions'),
      dirname = require('../path').dirname,
      colors = require('../colors'),
      units = require('../units');
    function cloneNode(node) {
      if (node.block && node.block.node) {
        node.block.node = node.block.node.clone();
      }
      if (node.nodes && node.nodes.length) {
        node.nodes.map(cloneNode);
      }
      return node;
    }
    function importFile(node, file, literal) {
      var importStack = this.importStack,
        Parser = require('../parser'),
        stat;
      if (node.once) {
        if (this.requireHistory[file]) return nodes.nil;
        this.requireHistory[file] = true;
        if (literal && !this.includeCSS) {
          return node;
        }
      }
      if (~importStack.indexOf(file))
        throw new Error('import loop has been found');
      var str = fs.readFileSync(file, 'utf8');
      if (!str.trim()) return nodes.nil;
      node.path = file;
      node.dirname = dirname(file);
      stat = fs.statSync(file);
      node.mtime = stat.mtime;
      this.paths.push(node.dirname);
      if (this.options._imports) this.options._imports.push(node.clone());
      importStack.push(file);
      nodes.filename = file;
      if (literal) {
        literal = new nodes.Literal(str.replace(/\r\n?/g, '\n'));
        literal.lineno = literal.column = 1;
        if (!this.resolveURL) return literal;
      }
      var block = new nodes.Block(),
        parser = new Parser(str, utils.merge({ root: block }, this.options));
      try {
        block = parser.parse();
      } catch (err) {
        var line = parser.lexer.lineno,
          column = parser.lexer.column;
        if (literal && this.includeCSS && this.resolveURL) {
          this.warn(
            'ParseError: ' +
              file +
              ':' +
              line +
              ':' +
              column +
              '. This file included as-is',
          );
          return literal;
        } else {
          err.filename = file;
          err.lineno = line;
          err.column = column;
          err.input = str;
          throw err;
        }
      }
      block = block.clone(this.currentBlock);
      block.parent = this.currentBlock;
      block.scope = false;
      var ret = this.visit(block);
      importStack.pop();
      if (!this.resolveURL || this.resolveURL.nocheck) this.paths.pop();
      return ret;
    }
    var Evaluator = (module.exports = function Evaluator(root, options) {
      options = options || {};
      Visitor.call(this, root);
      var functions = (this.functions = options.functions || {});
      this.stack = new Stack();
      this.imports = options.imports || [];
      this.globals = options.globals || {};
      this.paths = options.paths || [];
      this.prefix = options.prefix || '';
      this.filename = options.filename;
      this.includeCSS = options['include css'];
      this.resolveURL =
        functions.url &&
        'resolver' == functions.url.name &&
        functions.url.options;
      this.paths.push(dirname(options.filename || '.'));
      this.stack.push((this.global = new Frame(root)));
      this.warnings = options.warn;
      this.options = options;
      this.calling = [];
      this.importStack = [];
      this.ret = 0;
      this.requireHistory = {};
    });
    Evaluator.prototype.__proto__ = Visitor.prototype;
    var visit = Visitor.prototype.visit;
    Evaluator.prototype.visit = function(node) {
      try {
        return visit.call(this, node);
      } catch (err) {
        if (err.filename) throw err;
        err.lineno = node.lineno;
        err.column = node.column;
        err.filename = node.filename;
        err.stylusStack = this.stack.toString();
        try {
        } catch (err) {}
        throw err;
      }
    };
    Evaluator.prototype.setup = function() {
      var root = this.root;
      var imports = [];
      this.populateGlobalScope();
      this.imports.forEach(function(file) {
        var expr = new nodes.Expression();
        expr.push(new nodes.String(file));
        imports.push(new nodes.Import(expr));
      }, this);
      root.nodes = imports.concat(root.nodes);
    };
    Evaluator.prototype.populateGlobalScope = function() {
      var scope = this.global.scope;
      Object.keys(colors).forEach(function(name) {
        var color = colors[name],
          rgba = new nodes.RGBA(color[0], color[1], color[2], color[3]),
          node = new nodes.Ident(name, rgba);
        rgba.name = name;
        scope.add(node);
      });
      scope.add(
        new nodes.Ident(
          'embedurl',
          new nodes.Function(
            'embedurl',
            require('../functions/url')({ limit: false }),
          ),
        ),
      );
      var globals = this.globals;
      Object.keys(globals).forEach(function(name) {
        var val = globals[name];
        if (!val.nodeName) val = new nodes.Literal(val);
        scope.add(new nodes.Ident(name, val));
      });
    };
    Evaluator.prototype.evaluate = function() {
      this.setup();
      return this.visit(this.root);
    };
    Evaluator.prototype.visitGroup = function(group) {
      group.nodes = group.nodes.map(function(selector) {
        selector.val = this.interpolate(selector);
        return selector;
      }, this);
      group.block = this.visit(group.block);
      return group;
    };
    Evaluator.prototype.visitReturn = function(ret) {
      ret.expr = this.visit(ret.expr);
      throw ret;
    };
    Evaluator.prototype.visitMedia = function(media) {
      media.block = this.visit(media.block);
      media.val = this.visit(media.val);
      return media;
    };
    Evaluator.prototype.visitQueryList = function(queries) {
      var val, query;
      queries.nodes.forEach(this.visit, this);
      if (1 == queries.nodes.length) {
        query = queries.nodes[0];
        if ((val = this.lookup(query.type))) {
          val = val.first.string;
          if (!val) return queries;
          var Parser = require('../parser'),
            parser = new Parser(val, this.options);
          queries = this.visit(parser.queries());
        }
      }
      return queries;
    };
    Evaluator.prototype.visitQuery = function(node) {
      node.predicate = this.visit(node.predicate);
      node.type = this.visit(node.type);
      node.nodes.forEach(this.visit, this);
      return node;
    };
    Evaluator.prototype.visitFeature = function(node) {
      node.name = this.interpolate(node);
      if (node.expr) {
        this.ret++;
        node.expr = this.visit(node.expr);
        this.ret--;
      }
      return node;
    };
    Evaluator.prototype.visitObject = function(obj) {
      for (var key in obj.vals) {
        obj.vals[key] = this.visit(obj.vals[key]);
      }
      return obj;
    };
    Evaluator.prototype.visitMember = function(node) {
      var left = node.left,
        right = node.right,
        obj = this.visit(left).first;
      if ('object' != obj.nodeName) {
        throw new Error(left.toString() + ' has no property .' + right);
      }
      if (node.val) {
        this.ret++;
        obj.set(right.name, this.visit(node.val));
        this.ret--;
      }
      return obj.get(right.name);
    };
    Evaluator.prototype.visitKeyframes = function(keyframes) {
      var val;
      if (keyframes.fabricated) return keyframes;
      keyframes.val = this.interpolate(keyframes).trim();
      if ((val = this.lookup(keyframes.val))) {
        keyframes.val = val.first.string || val.first.name;
      }
      keyframes.block = this.visit(keyframes.block);
      if ('official' != keyframes.prefix) return keyframes;
      this.vendors.forEach(function(prefix) {
        if ('ms' == prefix) return;
        var node = keyframes.clone();
        node.val = keyframes.val;
        node.prefix = prefix;
        node.block = keyframes.block;
        node.fabricated = true;
        this.currentBlock.push(node);
      }, this);
      return nodes.nil;
    };
    Evaluator.prototype.visitFunction = function(fn) {
      var local = this.stack.currentFrame.scope.lookup(fn.name);
      if (local)
        this.warn(
          'local ' +
            local.nodeName +
            ' "' +
            fn.name +
            '" previously defined in this scope',
        );
      var user = this.functions[fn.name];
      if (user)
        this.warn('user-defined function "' + fn.name + '" is already defined');
      var bif = bifs[fn.name];
      if (bif)
        this.warn('built-in function "' + fn.name + '" is already defined');
      return fn;
    };
    Evaluator.prototype.visitEach = function(each) {
      this.ret++;
      var expr = utils.unwrap(this.visit(each.expr)),
        len = expr.nodes.length,
        val = new nodes.Ident(each.val),
        key = new nodes.Ident(each.key || '__index__'),
        scope = this.currentScope,
        block = this.currentBlock,
        vals = [],
        self = this,
        body,
        obj;
      this.ret--;
      each.block.scope = false;
      function visitBody(key, val) {
        scope.add(val);
        scope.add(key);
        body = self.visit(each.block.clone());
        vals = vals.concat(body.nodes);
      }
      if (1 == len && 'object' == expr.nodes[0].nodeName) {
        obj = expr.nodes[0];
        for (var prop in obj.vals) {
          val.val = new nodes.String(prop);
          key.val = obj.get(prop);
          visitBody(key, val);
        }
      } else {
        for (var i = 0; i < len; ++i) {
          val.val = expr.nodes[i];
          key.val = new nodes.Unit(i);
          visitBody(key, val);
        }
      }
      this.mixin(vals, block);
      return vals[vals.length - 1] || nodes.nil;
    };
    Evaluator.prototype.visitCall = function(call) {
      var fn = this.lookup(call.name),
        literal,
        ret;
      this.ignoreColors = 'url' == call.name;
      if (fn && 'expression' == fn.nodeName) {
        fn = fn.nodes[0];
      }
      if (fn && 'function' != fn.nodeName) {
        fn = this.lookupFunction(call.name);
      }
      if (!fn || fn.nodeName != 'function') {
        if ('calc' == this.unvendorize(call.name)) {
          literal = call.args.nodes && call.args.nodes[0];
          if (literal) ret = new nodes.Literal(call.name + literal);
        } else {
          ret = this.literalCall(call);
        }
        this.ignoreColors = false;
        return ret;
      }
      this.calling.push(call.name);
      if (this.calling.length > 200) {
        throw new RangeError('Maximum stylus call stack size exceeded');
      }
      if ('expression' == fn.nodeName) fn = fn.first;
      this.ret++;
      var args = this.visit(call.args);
      for (var key in args.map) {
        args.map[key] = this.visit(args.map[key].clone());
      }
      this.ret--;
      if (fn.fn) {
        ret = this.invokeBuiltin(fn.fn, args);
      } else if ('function' == fn.nodeName) {
        if (call.block) call.block = this.visit(call.block);
        ret = this.invokeFunction(fn, args, call.block);
      }
      this.calling.pop();
      this.ignoreColors = false;
      return ret;
    };
    Evaluator.prototype.visitIdent = function(ident) {
      var prop;
      if (ident.property) {
        if ((prop = this.lookupProperty(ident.name))) {
          return this.visit(prop.expr.clone());
        }
        return nodes.nil;
      } else if (ident.val.isNull) {
        var val = this.lookup(ident.name);
        if (val && ident.mixin) this.mixinNode(val);
        return val ? this.visit(val) : ident;
      } else {
        this.ret++;
        ident.val = this.visit(ident.val);
        this.ret--;
        this.currentScope.add(ident);
        return ident.val;
      }
    };
    Evaluator.prototype.visitBinOp = function(binop) {
      if ('is defined' == binop.op) return this.isDefined(binop.left);
      this.ret++;
      var op = binop.op,
        left = this.visit(binop.left),
        right =
          '||' == op || '&&' == op ? binop.right : this.visit(binop.right);
      var val = binop.val ? this.visit(binop.val) : null;
      this.ret--;
      try {
        return this.visit(left.operate(op, right, val));
      } catch (err) {
        if ('CoercionError' == err.name) {
          switch (op) {
            case '==':
              return nodes.no;
            case '!=':
              return nodes.yes;
          }
        }
        throw err;
      }
    };
    Evaluator.prototype.visitUnaryOp = function(unary) {
      var op = unary.op,
        node = this.visit(unary.expr);
      if ('!' != op) {
        node = node.first.clone();
        utils.assertType(node, 'unit');
      }
      switch (op) {
        case '-':
          node.val = -node.val;
          break;
        case '+':
          node.val = +node.val;
          break;
        case '~':
          node.val = ~node.val;
          break;
        case '!':
          return node.toBoolean().negate();
      }
      return node;
    };
    Evaluator.prototype.visitTernary = function(ternary) {
      var ok = this.visit(ternary.cond).toBoolean();
      return ok.isTrue
        ? this.visit(ternary.trueExpr)
        : this.visit(ternary.falseExpr);
    };
    Evaluator.prototype.visitExpression = function(expr) {
      for (var i = 0, len = expr.nodes.length; i < len; ++i) {
        expr.nodes[i] = this.visit(expr.nodes[i]);
      }
      if (this.castable(expr)) expr = this.cast(expr);
      return expr;
    };
    Evaluator.prototype.visitArguments = Evaluator.prototype.visitExpression;
    Evaluator.prototype.visitProperty = function(prop) {
      var name = this.interpolate(prop),
        fn = this.lookup(name),
        call = fn && 'function' == fn.first.nodeName,
        literal = ~this.calling.indexOf(name),
        _prop = this.property;
      if (call && !literal && !prop.literal) {
        var args = nodes.Arguments.fromExpression(
          utils.unwrap(prop.expr.clone()),
        );
        prop.name = name;
        this.property = prop;
        this.ret++;
        this.property.expr = this.visit(prop.expr);
        this.ret--;
        var ret = this.visit(new nodes.Call(name, args));
        this.property = _prop;
        return ret;
      } else {
        this.ret++;
        prop.name = name;
        prop.literal = true;
        this.property = prop;
        prop.expr = this.visit(prop.expr);
        this.property = _prop;
        this.ret--;
        return prop;
      }
    };
    Evaluator.prototype.visitRoot = function(block) {
      if (block != this.root) {
        block.constructor = nodes.Block;
        return this.visit(block);
      }
      for (var i = 0; i < block.nodes.length; ++i) {
        block.index = i;
        block.nodes[i] = this.visit(block.nodes[i]);
      }
      return block;
    };
    Evaluator.prototype.visitBlock = function(block) {
      this.stack.push(new Frame(block));
      for (block.index = 0; block.index < block.nodes.length; ++block.index) {
        try {
          block.nodes[block.index] = this.visit(block.nodes[block.index]);
        } catch (err) {
          if ('return' == err.nodeName) {
            if (this.ret) {
              this.stack.pop();
              throw err;
            } else {
              block.nodes[block.index] = err;
              break;
            }
          } else {
            throw err;
          }
        }
      }
      this.stack.pop();
      return block;
    };
    Evaluator.prototype.visitAtblock = function(atblock) {
      atblock.block = this.visit(atblock.block);
      return atblock;
    };
    Evaluator.prototype.visitAtrule = function(atrule) {
      atrule.val = this.interpolate(atrule);
      if (atrule.block) atrule.block = this.visit(atrule.block);
      return atrule;
    };
    Evaluator.prototype.visitSupports = function(node) {
      var condition = node.condition,
        val;
      this.ret++;
      node.condition = this.visit(condition);
      this.ret--;
      val = condition.first;
      if (1 == condition.nodes.length && 'string' == val.nodeName) {
        node.condition = val.string;
      }
      node.block = this.visit(node.block);
      return node;
    };
    Evaluator.prototype.visitIf = function(node) {
      var ret,
        block = this.currentBlock,
        negate = node.negate;
      this.ret++;
      var ok = this.visit(node.cond).first.toBoolean();
      this.ret--;
      node.block.scope = node.block.hasMedia;
      if (negate) {
        if (ok.isFalse) {
          ret = this.visit(node.block);
        }
      } else {
        if (ok.isTrue) {
          ret = this.visit(node.block);
        } else if (node.elses.length) {
          var elses = node.elses,
            len = elses.length,
            cond;
          for (var i = 0; i < len; ++i) {
            if (elses[i].cond) {
              elses[i].block.scope = elses[i].block.hasMedia;
              this.ret++;
              cond = this.visit(elses[i].cond).first.toBoolean();
              this.ret--;
              if (cond.isTrue) {
                ret = this.visit(elses[i].block);
                break;
              }
            } else {
              elses[i].scope = elses[i].hasMedia;
              ret = this.visit(elses[i]);
            }
          }
        }
      }
      if (
        ret &&
        !node.postfix &&
        block.node &&
        ~['group', 'atrule', 'media', 'supports', 'keyframes'].indexOf(
          block.node.nodeName,
        )
      ) {
        this.mixin(ret.nodes, block);
        return nodes.nil;
      }
      return ret || nodes.nil;
    };
    Evaluator.prototype.visitExtend = function(extend) {
      var block = this.currentBlock;
      if ('group' != block.node.nodeName) block = this.closestGroup;
      extend.selectors.forEach(function(selector) {
        block.node.extends.push({
          selector: this.interpolate(selector.clone()).trim(),
          optional: selector.optional,
          lineno: selector.lineno,
          column: selector.column,
        });
      }, this);
      return nodes.nil;
    };
    Evaluator.prototype.visitImport = function(imported) {
      this.ret++;
      var path = this.visit(imported.path).first,
        nodeName = imported.once ? 'require' : 'import',
        found,
        literal;
      this.ret--;
      if ('url' == path.name) {
        if (imported.once) throw new Error('You cannot @require a url');
        return imported;
      }
      if (!path.string) throw new Error('@' + nodeName + ' string expected');
      var name = (path = path.string);
      if (/(?:url\s*\(\s*)?['"]?(?:#|(?:https?:)?\/\/)/i.test(path)) {
        if (imported.once) throw new Error('You cannot @require a url');
        return imported;
      }
      if (/\.css(?:"|$)/.test(path)) {
        literal = true;
        if (!imported.once && !this.includeCSS) {
          return imported;
        }
      }
      if (!literal && !/\.styl$/i.test(path)) path += '.styl';
      found = utils.find(path, this.paths, this.filename);
      if (!found) {
        found = utils.lookupIndex(name, this.paths, this.filename);
      }
      if (!found)
        throw new Error('failed to locate @' + nodeName + ' file ' + path);
      var block = new nodes.Block();
      for (var i = 0, len = found.length; i < len; ++i) {
        block.push(importFile.call(this, imported, found[i], literal));
      }
      return block;
    };
    Evaluator.prototype.invokeFunction = function(fn, args, content) {
      var block = new nodes.Block(fn.block.parent);
      var body = fn.block.clone(block);
      var mixinBlock = this.stack.currentFrame.block;
      this.stack.push(new Frame(block));
      var scope = this.currentScope;
      if ('arguments' != args.nodeName) {
        var expr = new nodes.Expression();
        expr.push(args);
        args = nodes.Arguments.fromExpression(expr);
      }
      scope.add(new nodes.Ident('arguments', args));
      scope.add(
        new nodes.Ident(
          'mixin',
          this.ret ? nodes.no : new nodes.String(mixinBlock.nodeName),
        ),
      );
      if (this.property) {
        var prop = this.propertyExpression(this.property, fn.name);
        scope.add(new nodes.Ident('current-property', prop));
      } else {
        scope.add(new nodes.Ident('current-property', nodes.nil));
      }
      var expr = new nodes.Expression();
      for (var i = this.calling.length - 1; i--; ) {
        expr.push(new nodes.Literal(this.calling[i]));
      }
      scope.add(new nodes.Ident('called-from', expr));
      var i = 0,
        len = args.nodes.length;
      fn.params.nodes.forEach(function(node) {
        if (node.rest) {
          node.val = new nodes.Expression();
          for (; i < len; ++i) node.val.push(args.nodes[i]);
          node.val.preserve = true;
          node.val.isList = args.isList;
        } else {
          var arg = args.map[node.name] || args.nodes[i++];
          node = node.clone();
          if (arg) {
            arg.isEmpty
              ? (args.nodes[i - 1] = this.visit(node))
              : (node.val = arg);
          } else {
            args.push(node.val);
          }
          if (node.val.isNull) {
            throw new Error('argument "' + node + '" required for ' + fn);
          }
        }
        scope.add(node);
      }, this);
      if (content) scope.add(new nodes.Ident('block', content, true));
      return this.invoke(body, true, fn.filename);
    };
    Evaluator.prototype.invokeBuiltin = function(fn, args) {
      if (fn.raw) {
        args = args.nodes;
      } else {
        args = utils.params(fn).reduce(function(ret, param) {
          var arg = args.map[param] || args.nodes.shift();
          if (arg) {
            arg = utils.unwrap(arg);
            var len = arg.nodes.length;
            if (len > 1) {
              for (var i = 0; i < len; ++i) {
                ret.push(utils.unwrap(arg.nodes[i].first));
              }
            } else {
              ret.push(arg.first);
            }
          }
          return ret;
        }, []);
      }
      var body = utils.coerce(fn.apply(this, args));
      var expr = new nodes.Expression();
      expr.push(body);
      body = expr;
      return this.invoke(body);
    };
    Evaluator.prototype.invoke = function(body, stack, filename) {
      var self = this,
        ret;
      if (filename) this.paths.push(dirname(filename));
      if (this.ret) {
        ret = this.eval(body.nodes);
        if (stack) this.stack.pop();
      } else {
        body = this.visit(body);
        if (stack) this.stack.pop();
        this.mixin(body.nodes, this.currentBlock);
        ret = nodes.nil;
      }
      if (filename) this.paths.pop();
      return ret;
    };
    Evaluator.prototype.mixin = function(nodes, block) {
      if (!nodes.length) return;
      var len = block.nodes.length,
        head = block.nodes.slice(0, block.index),
        tail = block.nodes.slice(block.index + 1, len);
      this._mixin(nodes, head, block);
      block.index = 0;
      block.nodes = head.concat(tail);
    };
    Evaluator.prototype._mixin = function(items, dest, block) {
      var node,
        len = items.length;
      for (var i = 0; i < len; ++i) {
        switch ((node = items[i]).nodeName) {
          case 'return':
            return;
          case 'block':
            this._mixin(node.nodes, dest, block);
            break;
          case 'media':
            var parentNode = node.block.parent.node;
            if (parentNode && 'call' != parentNode.nodeName) {
              node.block.parent = block;
            }
          case 'property':
            var val = node.expr;
            if (node.literal && 'block' == val.first.name) {
              val = utils.unwrap(val);
              val.nodes[0] = new nodes.Literal('block');
            }
          default:
            dest.push(node);
        }
      }
    };
    Evaluator.prototype.mixinNode = function(node) {
      node = this.visit(node.first);
      switch (node.nodeName) {
        case 'object':
          this.mixinObject(node);
          return nodes.nil;
        case 'block':
        case 'atblock':
          this.mixin(node.nodes, this.currentBlock);
          return nodes.nil;
      }
    };
    Evaluator.prototype.mixinObject = function(object) {
      var Parser = require('../parser'),
        root = this.root,
        str = '$block ' + object.toBlock(),
        parser = new Parser(str, utils.merge({ root: block }, this.options)),
        block;
      try {
        block = parser.parse();
      } catch (err) {
        err.filename = this.filename;
        err.lineno = parser.lexer.lineno;
        err.column = parser.lexer.column;
        err.input = str;
        throw err;
      }
      block.parent = root;
      block.scope = false;
      var ret = this.visit(block),
        vals = ret.first.nodes;
      for (var i = 0, len = vals.length; i < len; ++i) {
        if (vals[i].block) {
          this.mixin(vals[i].block.nodes, this.currentBlock);
          break;
        }
      }
    };
    Evaluator.prototype.eval = function(vals) {
      if (!vals) return nodes.nil;
      var len = vals.length,
        node = nodes.nil;
      try {
        for (var i = 0; i < len; ++i) {
          node = vals[i];
          switch (node.nodeName) {
            case 'if':
              if ('block' != node.block.nodeName) {
                node = this.visit(node);
                break;
              }
            case 'each':
            case 'block':
              node = this.visit(node);
              if (node.nodes) node = this.eval(node.nodes);
              break;
            default:
              node = this.visit(node);
          }
        }
      } catch (err) {
        if ('return' == err.nodeName) {
          return err.expr;
        } else {
          throw err;
        }
      }
      return node;
    };
    Evaluator.prototype.literalCall = function(call) {
      call.args = this.visit(call.args);
      return call;
    };
    Evaluator.prototype.lookupProperty = function(name) {
      var i = this.stack.length,
        index = this.currentBlock.index,
        top = i,
        nodes,
        block,
        len,
        other;
      while (i--) {
        block = this.stack[i].block;
        if (!block.node) continue;
        switch (block.node.nodeName) {
          case 'group':
          case 'function':
          case 'if':
          case 'each':
          case 'atrule':
          case 'media':
          case 'atblock':
          case 'call':
            nodes = block.nodes;
            if (i + 1 == top) {
              while (index--) {
                if (this.property == nodes[index]) continue;
                other = this.interpolate(nodes[index]);
                if (name == other) return nodes[index].clone();
              }
            } else {
              len = nodes.length;
              while (len--) {
                if (
                  'property' != nodes[len].nodeName ||
                  this.property == nodes[len]
                )
                  continue;
                other = this.interpolate(nodes[len]);
                if (name == other) return nodes[len].clone();
              }
            }
            break;
        }
      }
      return nodes.nil;
    };
    Evaluator.prototype.__defineGetter__('closestBlock', function() {
      var i = this.stack.length,
        block;
      while (i--) {
        block = this.stack[i].block;
        if (block.node) {
          switch (block.node.nodeName) {
            case 'group':
            case 'keyframes':
            case 'atrule':
            case 'atblock':
            case 'media':
            case 'call':
              return block;
          }
        }
      }
    });
    Evaluator.prototype.__defineGetter__('closestGroup', function() {
      var i = this.stack.length,
        block;
      while (i--) {
        block = this.stack[i].block;
        if (block.node && 'group' == block.node.nodeName) {
          return block;
        }
      }
    });
    Evaluator.prototype.__defineGetter__('selectorStack', function() {
      var block,
        stack = [];
      for (var i = 0, len = this.stack.length; i < len; ++i) {
        block = this.stack[i].block;
        if (block.node && 'group' == block.node.nodeName) {
          block.node.nodes.forEach(function(selector) {
            if (!selector.val) selector.val = this.interpolate(selector);
          }, this);
          stack.push(block.node.nodes);
        }
      }
      return stack;
    });
    Evaluator.prototype.lookup = function(name) {
      var val;
      if (this.ignoreColors && name in colors) return;
      if ((val = this.stack.lookup(name))) {
        return utils.unwrap(val);
      } else {
        return this.lookupFunction(name);
      }
    };
    Evaluator.prototype.interpolate = function(node) {
      var self = this,
        isSelector = 'selector' == node.nodeName;
      function toString(node) {
        switch (node.nodeName) {
          case 'function':
          case 'ident':
            return node.name;
          case 'literal':
          case 'string':
            if (self.prefix && !node.prefixed && !node.val.nodeName) {
              node.val = node.val.replace(/\./g, '.' + self.prefix);
              node.prefixed = true;
            }
            return node.val;
          case 'unit':
            return '%' == node.type ? node.val + '%' : node.val;
          case 'member':
            return toString(self.visit(node));
          case 'expression':
            if (
              self.calling &&
              ~self.calling.indexOf('selector') &&
              self._selector
            )
              return self._selector;
            self.ret++;
            var ret = toString(self.visit(node).first);
            self.ret--;
            if (isSelector) self._selector = ret;
            return ret;
        }
      }
      if (node.segments) {
        return node.segments.map(toString).join('');
      } else {
        return toString(node);
      }
    };
    Evaluator.prototype.lookupFunction = function(name) {
      var fn = this.functions[name] || bifs[name];
      if (fn) return new nodes.Function(name, fn);
    };
    Evaluator.prototype.isDefined = function(node) {
      if ('ident' == node.nodeName) {
        return nodes.Boolean(this.lookup(node.name));
      } else {
        throw new Error('invalid "is defined" check on non-variable ' + node);
      }
    };
    Evaluator.prototype.propertyExpression = function(prop, name) {
      var expr = new nodes.Expression(),
        val = prop.expr.clone();
      expr.push(new nodes.String(prop.name));
      function replace(node) {
        if ('call' == node.nodeName && name == node.name) {
          return new nodes.Literal('__CALL__');
        }
        if (node.nodes) node.nodes = node.nodes.map(replace);
        return node;
      }
      replace(val);
      expr.push(val);
      return expr;
    };
    Evaluator.prototype.cast = function(expr) {
      return new nodes.Unit(expr.first.val, expr.nodes[1].name);
    };
    Evaluator.prototype.castable = function(expr) {
      return (
        2 == expr.nodes.length &&
        'unit' == expr.first.nodeName &&
        ~units.indexOf(expr.nodes[1].name)
      );
    };
    Evaluator.prototype.warn = function(msg) {
      if (!this.warnings) return;
      console.warn('[33mWarning:[0m ' + msg);
    };
    Evaluator.prototype.__defineGetter__('currentBlock', function() {
      return this.stack.currentFrame.block;
    });
    Evaluator.prototype.__defineGetter__('vendors', function() {
      return this.lookup('vendors').nodes.map(function(node) {
        return node.string;
      });
    });
    Evaluator.prototype.unvendorize = function(prop) {
      for (var i = 0, len = this.vendors.length; i < len; i++) {
        if ('official' != this.vendors[i]) {
          var vendor = '-' + this.vendors[i] + '-';
          if (~prop.indexOf(vendor)) return prop.replace(vendor, '');
        }
      }
      return prop;
    };
    Evaluator.prototype.__defineGetter__('currentScope', function() {
      return this.stack.currentFrame.scope;
    });
    Evaluator.prototype.__defineGetter__('currentFrame', function() {
      return this.stack.currentFrame;
    });
  });
  require.register('visitor/normalizer.js', function(module, exports, require) {
    var Visitor = require('./index'),
      nodes = require('../nodes/index'),
      utils = require('../utils');
    var Normalizer = (module.exports = function Normalizer(root, options) {
      options = options || {};
      Visitor.call(this, root);
      this.hoist = options['hoist atrules'];
      this.stack = [];
      this.map = {};
      this.imports = [];
    });
    Normalizer.prototype.__proto__ = Visitor.prototype;
    Normalizer.prototype.normalize = function() {
      var ret = this.visit(this.root);
      if (this.hoist) {
        if (this.imports.length) ret.nodes = this.imports.concat(ret.nodes);
        if (this.charset) ret.nodes = [this.charset].concat(ret.nodes);
      }
      return ret;
    };
    Normalizer.prototype.bubble = function(node) {
      var props = [],
        other = [],
        self = this;
      function filterProps(block) {
        block.nodes.forEach(function(node) {
          node = self.visit(node);
          switch (node.nodeName) {
            case 'property':
              props.push(node);
              break;
            case 'block':
              filterProps(node);
              break;
            default:
              other.push(node);
          }
        });
      }
      filterProps(node.block);
      if (props.length) {
        var selector = new nodes.Selector([new nodes.Literal('&')]);
        selector.lineno = node.lineno;
        selector.column = node.column;
        selector.filename = node.filename;
        selector.val = '&';
        var group = new nodes.Group();
        group.lineno = node.lineno;
        group.column = node.column;
        group.filename = node.filename;
        var block = new nodes.Block(node.block, group);
        block.lineno = node.lineno;
        block.column = node.column;
        block.filename = node.filename;
        props.forEach(function(prop) {
          block.push(prop);
        });
        group.push(selector);
        group.block = block;
        node.block.nodes = [];
        node.block.push(group);
        other.forEach(function(n) {
          node.block.push(n);
        });
        var group = this.closestGroup(node.block);
        if (group) node.group = group.clone();
        node.bubbled = true;
      }
    };
    Normalizer.prototype.closestGroup = function(block) {
      var parent = block.parent,
        node;
      while (parent && (node = parent.node)) {
        if ('group' == node.nodeName) return node;
        parent = node.block && node.block.parent;
      }
    };
    Normalizer.prototype.visitRoot = function(block) {
      var ret = new nodes.Root(),
        node;
      for (var i = 0; i < block.nodes.length; ++i) {
        node = block.nodes[i];
        switch (node.nodeName) {
          case 'null':
          case 'expression':
          case 'function':
          case 'unit':
          case 'atblock':
            continue;
          default:
            this.rootIndex = i;
            ret.push(this.visit(node));
        }
      }
      return ret;
    };
    Normalizer.prototype.visitProperty = function(prop) {
      this.visit(prop.expr);
      return prop;
    };
    Normalizer.prototype.visitExpression = function(expr) {
      expr.nodes = expr.nodes.map(function(node) {
        if ('block' == node.nodeName) {
          var literal = new nodes.Literal('block');
          literal.lineno = expr.lineno;
          literal.column = expr.column;
          return literal;
        }
        return node;
      });
      return expr;
    };
    Normalizer.prototype.visitBlock = function(block) {
      var node;
      if (block.hasProperties) {
        for (var i = 0, len = block.nodes.length; i < len; ++i) {
          node = block.nodes[i];
          switch (node.nodeName) {
            case 'null':
            case 'expression':
            case 'function':
            case 'group':
            case 'unit':
            case 'atblock':
              continue;
            default:
              block.nodes[i] = this.visit(node);
          }
        }
      }
      for (var i = 0, len = block.nodes.length; i < len; ++i) {
        node = block.nodes[i];
        block.nodes[i] = this.visit(node);
      }
      return block;
    };
    Normalizer.prototype.visitGroup = function(group) {
      var stack = this.stack,
        map = this.map,
        parts;
      group.nodes.forEach(function(selector, i) {
        if (!~selector.val.indexOf(',')) return;
        if (~selector.val.indexOf('\\,')) {
          selector.val = selector.val.replace(/\\,/g, ',');
          return;
        }
        parts = selector.val.split(',');
        var root = '/' == selector.val.charAt(0),
          part,
          s;
        for (var k = 0, len = parts.length; k < len; ++k) {
          part = parts[k].trim();
          if (root && k > 0 && !~part.indexOf('&')) {
            part = '/' + part;
          }
          s = new nodes.Selector([new nodes.Literal(part)]);
          s.val = part;
          s.block = group.block;
          group.nodes[i++] = s;
        }
      });
      stack.push(group.nodes);
      var selectors = utils.compileSelectors(stack, true);
      selectors.forEach(function(selector) {
        map[selector] = map[selector] || [];
        map[selector].push(group);
      });
      this.extend(group, selectors);
      stack.pop();
      return group;
    };
    Normalizer.prototype.visitFunction = function() {
      return nodes.nil;
    };
    Normalizer.prototype.visitMedia = function(media) {
      var medias = [],
        group = this.closestGroup(media.block),
        parent;
      function mergeQueries(block) {
        block.nodes.forEach(function(node, i) {
          switch (node.nodeName) {
            case 'media':
              node.val = media.val.merge(node.val);
              medias.push(node);
              block.nodes[i] = nodes.nil;
              break;
            case 'block':
              mergeQueries(node);
              break;
            default:
              if (node.block && node.block.nodes) mergeQueries(node.block);
          }
        });
      }
      mergeQueries(media.block);
      this.bubble(media);
      if (medias.length) {
        medias.forEach(function(node) {
          if (group) {
            group.block.push(node);
          } else {
            this.root.nodes.splice(++this.rootIndex, 0, node);
          }
          node = this.visit(node);
          parent = node.block.parent;
          if (node.bubbled && (!group || 'group' == parent.node.nodeName)) {
            node.group.block = node.block.nodes[0].block;
            node.block.nodes[0] = node.group;
          }
        }, this);
      }
      return media;
    };
    Normalizer.prototype.visitSupports = function(node) {
      this.bubble(node);
      return node;
    };
    Normalizer.prototype.visitAtrule = function(node) {
      if (node.block) node.block = this.visit(node.block);
      return node;
    };
    Normalizer.prototype.visitKeyframes = function(node) {
      var frames = node.block.nodes.filter(function(frame) {
        return frame.block && frame.block.hasProperties;
      });
      node.frames = frames.length;
      return node;
    };
    Normalizer.prototype.visitImport = function(node) {
      this.imports.push(node);
      return this.hoist ? nodes.nil : node;
    };
    Normalizer.prototype.visitCharset = function(node) {
      this.charset = node;
      return this.hoist ? nodes.nil : node;
    };
    Normalizer.prototype.extend = function(group, selectors) {
      var map = this.map,
        self = this,
        parent = this.closestGroup(group.block);
      group.extends.forEach(function(extend) {
        var groups = map[extend.selector];
        if (!groups) {
          if (extend.optional) return;
          var err = new Error('Failed to @extend "' + extend.selector + '"');
          err.lineno = extend.lineno;
          err.column = extend.column;
          throw err;
        }
        selectors.forEach(function(selector) {
          var node = new nodes.Selector();
          node.val = selector;
          node.inherits = false;
          groups.forEach(function(group) {
            if (!parent || parent != group) self.extend(group, selectors);
            group.push(node);
          });
        });
      });
      group.block = this.visit(group.block);
    };
  });
  return require('stylus');
})();
