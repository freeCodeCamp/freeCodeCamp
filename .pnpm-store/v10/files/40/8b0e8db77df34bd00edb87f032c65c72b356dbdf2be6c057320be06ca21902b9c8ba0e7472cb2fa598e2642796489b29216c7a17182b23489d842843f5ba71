import iterateJsdoc from '../iterateJsdoc.js';

export default iterateJsdoc(({
  context,
  jsdoc,
  utils,
  indent,
}) => {
  const [
    defaultRequireValue = 'always',
    {
      tags: tagMap = {},
    } = {},
  ] = context.options;

  const {
    source,
  } = jsdoc;

  const always = defaultRequireValue === 'always';
  const never = defaultRequireValue === 'never';

  /** @type {string} */
  let currentTag;
  source.some(({
    number,
    tokens,
  }) => {
    const {
      delimiter,
      tag,
      end,
      description,
    } = tokens;

    /**
     * @returns {void}
     */
    const neverFix = () => {
      tokens.delimiter = '';
      tokens.postDelimiter = '';
    };

    /**
     * @param {string} checkValue
     * @returns {boolean}
     */
    const checkNever = (checkValue) => {
      if (delimiter && delimiter !== '/**' && (
        never && !tagMap.always?.includes(checkValue) ||
        tagMap.never?.includes(checkValue)
      )) {
        utils.reportJSDoc('Expected JSDoc line to have no prefix.', {
          column: 0,
          line: number,
        }, neverFix);

        return true;
      }

      return false;
    };

    /**
     * @returns {void}
     */
    const alwaysFix = () => {
      if (!tokens.start) {
        tokens.start = indent + ' ';
      }

      tokens.delimiter = '*';
      tokens.postDelimiter = tag || description ? ' ' : '';
    };

    /**
     * @param {string} checkValue
     * @returns {boolean}
     */
    const checkAlways = (checkValue) => {
      if (
        !delimiter && (
          always && !tagMap.never?.includes(checkValue) ||
          tagMap.always?.includes(checkValue)
        )
      ) {
        utils.reportJSDoc('Expected JSDoc line to have the prefix.', {
          column: 0,
          line: number,
        }, alwaysFix);

        return true;
      }

      return false;
    };

    if (tag) {
      // Remove at sign
      currentTag = tag.slice(1);
    }

    if (
      // If this is the end but has a tag, the delimiter will also be
      //  populated and will be safely ignored later
      end && !tag
    ) {
      return false;
    }

    if (!currentTag) {
      if (tagMap.any?.includes('*description')) {
        return false;
      }

      if (checkNever('*description')) {
        return true;
      }

      if (checkAlways('*description')) {
        return true;
      }

      return false;
    }

    if (tagMap.any?.includes(currentTag)) {
      return false;
    }

    if (checkNever(currentTag)) {
      return true;
    }

    if (checkAlways(currentTag)) {
      return true;
    }

    return false;
  });
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description:
        'Requires that each JSDoc line starts with an `*`.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header',
    },
    fixable: 'code',
    schema: [
      {
        enum: [
          'always', 'never', 'any',
        ],
        type: 'string',
      },
      {
        additionalProperties: false,
        properties: {
          tags: {
            properties: {
              always: {
                items: {
                  type: 'string',
                },
                type: 'array',
              },
              any: {
                items: {
                  type: 'string',
                },
                type: 'array',
              },
              never: {
                items: {
                  type: 'string',
                },
                type: 'array',
              },
            },
            type: 'object',
          },
        },
        type: 'object',
      },
    ],
    type: 'layout',
  },
});
