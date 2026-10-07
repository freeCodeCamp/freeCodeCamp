'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromTemplateLiteral;
function sortStarts(a, b) {
  return (a.range ? a.range[0] : a.start) - (b.range ? b.range[0] : b.start);
}

/**
 * Returns the string value of a template literal object.
 * Tries to build it as best as it can based on the passed
 * prop. For instance `This is a ${prop}` will return 'This is a {prop}'.
 *
 * If the template literal builds to undefined (`${undefined}`), then
 * this should return "undefined".
 */
function extractValueFromTemplateLiteral(value) {
  var quasis = value.quasis,
      expressions = value.expressions;

  var partitions = quasis.concat(expressions);

  return partitions.sort(sortStarts).map(function (_ref) {
    var type = _ref.type,
        _ref$value = _ref.value;
    _ref$value = _ref$value === undefined ? {} : _ref$value;
    var raw = _ref$value.raw,
        name = _ref.name;

    if (type === 'TemplateElement') {
      return raw;
    }

    if (type === 'Identifier') {
      return name === 'undefined' ? name : '{' + name + '}';
    }

    if (type.indexOf('Expression') > -1) {
      return '{' + type + '}';
    }

    return '';
  }).join('');
}