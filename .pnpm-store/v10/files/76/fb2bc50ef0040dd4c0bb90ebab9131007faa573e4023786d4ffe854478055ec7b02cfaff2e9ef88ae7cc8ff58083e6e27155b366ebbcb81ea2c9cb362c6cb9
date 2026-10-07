module.exports = function (source) {
  if (this.cacheable) this.cacheable();

  var value = typeof source === "string" ? JSON.parse(source) : source;

  value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `module.exports = ${value}`;
}
