import camelCase from 'to-camel-case';
var namespacer = '/';
export default (function (type) {
  return type.indexOf(namespacer) === -1 ? camelCase(type) : type.split(namespacer).map(camelCase).join(namespacer);
});