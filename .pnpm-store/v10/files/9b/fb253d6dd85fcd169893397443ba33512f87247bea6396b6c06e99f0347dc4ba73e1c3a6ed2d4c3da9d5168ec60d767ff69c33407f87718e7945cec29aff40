import iterateJsdoc from '../iterateJsdoc.js';

const middleAsterisksBlockWS = /^([\t ]|\*(?!\*))+/u;
const middleAsterisksNoBlockWS = /^\*+/u;

const endAsterisksSingleLineBlockWS = /\*((?:\*|(?: |\t))*)\*$/u;
const endAsterisksMultipleLineBlockWS = /((?:\*|(?: |\t))*)\*$/u;

const endAsterisksSingleLineNoBlockWS = /\*(\**)\*$/u;
const endAsterisksMultipleLineNoBlockWS = /(\**)\*$/u;

export default iterateJsdoc(({
  context,
  jsdoc,
  utils,
}) => {
  const {
    allowWhitespace = false,
    preventAtEnd = true,
    preventAtMiddleLines = true,
  } = context.options[0] || {};

  const middleAsterisks = allowWhitespace ? middleAsterisksNoBlockWS : middleAsterisksBlockWS;

  // eslint-disable-next-line complexity -- Todo
  jsdoc.source.some(({
    tokens,
    number,
  }) => {
    const {
      delimiter,
      tag,
      name,
      type,
      description,
      end,
      postDelimiter,
    } = tokens;

    if (
      preventAtMiddleLines &&
      !end && !tag && !type && !name &&
      (
        !allowWhitespace && middleAsterisks.test(description) ||
        allowWhitespace && middleAsterisks.test(postDelimiter + description)
      )
    ) {
      // console.log('description', JSON.stringify(description));
      const fix = () => {
        tokens.description = description.replace(middleAsterisks, '');
      };

      utils.reportJSDoc(
        'Should be no multiple asterisks on middle lines.',
        {
          line: number,
        },
        fix,
        true,
      );

      return true;
    }

    if (!preventAtEnd || !end) {
      return false;
    }

    const isSingleLineBlock = delimiter === '/**';
    const delim = isSingleLineBlock ? '*' : delimiter;
    const endAsterisks = allowWhitespace ?
      (isSingleLineBlock ? endAsterisksSingleLineNoBlockWS : endAsterisksMultipleLineNoBlockWS) :
      (isSingleLineBlock ? endAsterisksSingleLineBlockWS : endAsterisksMultipleLineBlockWS);

    const endingAsterisksAndSpaces = (
      allowWhitespace ? postDelimiter + description + delim : description + delim
    ).match(
      endAsterisks,
    );

    if (
      !endingAsterisksAndSpaces ||
      !isSingleLineBlock && endingAsterisksAndSpaces[1] && !endingAsterisksAndSpaces[1].trim()
    ) {
      return false;
    }

    const endFix = () => {
      if (!isSingleLineBlock) {
        tokens.delimiter = '';
      }

      tokens.description = (description + delim).replace(endAsterisks, '');
    };

    utils.reportJSDoc(
      'Should be no multiple asterisks on end lines.',
      {
        line: number,
      },
      endFix,
      true,
    );

    return true;
  });
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: '',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header',
    },
    fixable: 'code',
    schema: [
      {
        additionalProperties: false,
        properties: {
          allowWhitespace: {
            type: 'boolean',
          },
          preventAtEnd: {
            type: 'boolean',
          },
          preventAtMiddleLines: {
            type: 'boolean',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
});
