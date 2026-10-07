module.exports = function unquote(str, quoteChar) {
  quoteChar = quoteChar || '"';
  if (str[0] === quoteChar && str[str.length - 1] === quoteChar)
    return str.slice(1, str.length - 1);
  else return str;
};
