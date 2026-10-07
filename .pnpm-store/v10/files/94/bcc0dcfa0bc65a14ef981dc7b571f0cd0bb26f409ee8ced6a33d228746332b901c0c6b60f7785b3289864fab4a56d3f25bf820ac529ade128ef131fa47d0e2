/**
 * @param {string} str
 * @returns {string}
 */
const toCamelCase = (str) => {
  return str.toLowerCase().replaceAll(/^[a-z]/gu, (init) => {
    return init.toUpperCase();
  }).replaceAll(/_(?<wordInit>[a-z])/gu, (_, n1, o, s, {wordInit}) => {
    return wordInit.toUpperCase();
  });
};

export {toCamelCase};
