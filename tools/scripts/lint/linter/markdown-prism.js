const components = require(`prismjs/components`);

module.exports = {
  names: ['prism-langs'],
  description: 'Code block languages should be supported by PrismJS',
  tags: ['prism'],
  function: function rule(params, onError) {
    params.tokens
      .filter(param => param.type === 'fence')
      .forEach(codeBlock => {
        // whitespace around the language is ignored by the parser, as is case:
        const baseLang = codeBlock.info.trim().toLowerCase();
        const lang = getBaseLanguageName(baseLang);
        // Rule MD040 checks if the block has a language, so this rule only
        // comes into play if a language has been specified.
        if (baseLang && !lang) {
          onError({
            lineNumber: codeBlock.lineNumber,
            detail: `'${baseLang}' is not recognised.`
          });
        }
      });
  }
};

/*
 * This is the method used by https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-remark-prismjs/src/load-prism-language.js
 */

// Get the real name of a language given it or an alias
const getBaseLanguageName = nameOrAlias => {
  if (components.languages[nameOrAlias]) {
    return nameOrAlias;
  }
  return Object.keys(components.languages).find(language => {
    const { alias } = components.languages[language];
    if (!alias) return false;
    if (Array.isArray(alias)) {
      return alias.includes(nameOrAlias);
    } else {
      return alias === nameOrAlias;
    }
  });
};
