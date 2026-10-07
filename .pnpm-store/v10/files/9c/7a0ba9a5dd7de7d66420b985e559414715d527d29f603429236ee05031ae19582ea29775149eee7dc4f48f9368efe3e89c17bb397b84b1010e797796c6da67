const matchValueName = /[$]?[\w-]+/g;

const replaceValueSymbols = (value, replacements) => {
  let matches;

  while ((matches = matchValueName.exec(value))) {
    const replacement = replacements[matches[0]];

    if (replacement) {
      value =
        value.slice(0, matches.index) +
        replacement +
        value.slice(matchValueName.lastIndex);

      matchValueName.lastIndex -= matches[0].length - replacement.length;
    }
  }

  return value;
};

module.exports = replaceValueSymbols;
