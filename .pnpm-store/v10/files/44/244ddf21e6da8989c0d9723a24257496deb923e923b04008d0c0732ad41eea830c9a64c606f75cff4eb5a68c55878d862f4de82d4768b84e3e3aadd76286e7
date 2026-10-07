var bug4 = require('./bugs/bug4');
var bug6 = require('./bugs/bug6');
var bug81a = require('./bugs/bug81a');

var doNothingValues = [
  'none',
  'auto',
  'content',
  'inherit',
  'initial',
  'unset'
];

module.exports = function(opts) {
  var options = Object.assign({ bug4: true, bug6: true, bug81a: true }, opts);

  return {
    postcssPlugin: 'postcss-flexbugs-fixes',
    Once: function(css, postcss) {
      css.walkDecls(function(d) {
        if (d.value.indexOf('var(') > -1) {
          return;
        }
        if (d.value === 'none') {
          return;
        }
        var values = postcss.list.space(d.value);
        if (doNothingValues.indexOf(d.value) > 0 && values.length === 1) {
          return;
        }
        if (options.bug4) {
          bug4(d);
        }
        if (options.bug6) {
          bug6(d);
        }
        if (options.bug81a) {
          bug81a(d);
        }
      })
    }
  };
};

module.exports.postcss = true;
