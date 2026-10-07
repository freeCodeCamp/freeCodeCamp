import iterateJsdoc from '../iterateJsdoc.js';

export default iterateJsdoc(({
  context,
  jsdoc,
  utils,
}) => {
  const {
    allowMultipleTags = true,
    noFinalLineText = true,
    noZeroLineText = true,
    noSingleLineBlocks = false,
    singleLineTags = [
      'lends', 'type',
    ],
    noMultilineBlocks = false,
    minimumLengthForMultiline = Number.POSITIVE_INFINITY,
    multilineTags = [
      '*',
    ],
  } = context.options[0] || {};

  const {
    source: [
      {
        tokens,
      },
    ],
  } = jsdoc;
  const {
    description,
    tag,
  } = tokens;
  const sourceLength = jsdoc.source.length;

  /**
   * @param {string} tagName
   * @returns {boolean}
   */
  const isInvalidSingleLine = (tagName) => {
    return noSingleLineBlocks &&
      (!tagName ||
      !singleLineTags.includes(tagName) && !singleLineTags.includes('*'));
  };

  if (sourceLength === 1) {
    if (!isInvalidSingleLine(tag.slice(1))) {
      return;
    }

    const fixer = () => {
      utils.makeMultiline();
    };

    utils.reportJSDoc(
      'Single line blocks are not permitted by your configuration.',
      null,
      fixer,
      true,
    );

    return;
  }

  const lineChecks = () => {
    if (
      noZeroLineText &&
      (tag || description)
    ) {
      const fixer = () => {
        const line = {
          ...tokens,
        };
        utils.emptyTokens(tokens);
        const {
          tokens: {
            delimiter,
            start,
          },
        } = jsdoc.source[1];
        utils.addLine(1, {
          ...line,
          delimiter,
          start,
        });
      };

      utils.reportJSDoc(
        'Should have no text on the "0th" line (after the `/**`).',
        null,
        fixer,
      );

      return;
    }

    const finalLine = jsdoc.source[jsdoc.source.length - 1];
    const finalLineTokens = finalLine.tokens;
    if (
      noFinalLineText &&
      finalLineTokens.description.trim()
    ) {
      const fixer = () => {
        const line = {
          ...finalLineTokens,
        };
        line.description = line.description.trimEnd();

        const {
          delimiter,
        } = line;

        for (const prop of [
          'delimiter',
          'postDelimiter',
          'tag',
          'type',
          'lineEnd',
          'postType',
          'postTag',
          'name',
          'postName',
          'description',
        ]) {
          finalLineTokens[
            /**
             * @type {"delimiter"|"postDelimiter"|"tag"|"type"|
             *   "lineEnd"|"postType"|"postTag"|"name"|
             *   "postName"|"description"}
             */ (
              prop
            )
          ] = '';
        }

        utils.addLine(jsdoc.source.length - 1, {
          ...line,
          delimiter,
          end: '',
        });
      };

      utils.reportJSDoc(
        'Should have no text on the final line (before the `*/`).',
        null,
        fixer,
      );
    }
  };

  if (noMultilineBlocks) {
    if (
      jsdoc.tags.length &&
      (multilineTags.includes('*') || utils.hasATag(multilineTags))
    ) {
      lineChecks();

      return;
    }

    if (jsdoc.description.length >= minimumLengthForMultiline) {
      lineChecks();

      return;
    }

    if (
      noSingleLineBlocks &&
      (!jsdoc.tags.length ||
      !utils.filterTags(({
        tag: tg,
      }) => {
        return !isInvalidSingleLine(tg);
      }).length)
    ) {
      utils.reportJSDoc(
        'Multiline jsdoc blocks are prohibited by ' +
          'your configuration but fixing would result in a single ' +
          'line block which you have prohibited with `noSingleLineBlocks`.',
      );

      return;
    }

    if (jsdoc.tags.length > 1) {
      if (!allowMultipleTags) {
        utils.reportJSDoc(
          'Multiline jsdoc blocks are prohibited by ' +
            'your configuration but the block has multiple tags.',
        );

        return;
      }
    } else if (jsdoc.tags.length === 1 && jsdoc.description.trim()) {
      if (!allowMultipleTags) {
        utils.reportJSDoc(
          'Multiline jsdoc blocks are prohibited by ' +
            'your configuration but the block has a description with a tag.',
        );

        return;
      }
    } else {
      const fixer = () => {
        jsdoc.source = [
          {
            number: 1,
            source: '',
            tokens: jsdoc.source.reduce((obj, {
              tokens: {
                description: desc,
                tag: tg,
                type: typ,
                name: nme,
                lineEnd,
                postType,
                postName,
                postTag,
              },
            }) => {
              if (typ) {
                obj.type = typ;
              }

              if (tg && typ && nme) {
                obj.postType = postType;
              }

              if (nme) {
                obj.name += nme;
              }

              if (nme && desc) {
                obj.postName = postName;
              }

              obj.description += desc;

              const nameOrDescription = obj.description || obj.name;
              if (
                nameOrDescription && nameOrDescription.slice(-1) !== ' '
              ) {
                obj.description += ' ';
              }

              obj.lineEnd = lineEnd;

              // Already filtered for multiple tags
              obj.tag += tg;
              if (tg) {
                obj.postTag = postTag || ' ';
              }

              return obj;
            }, utils.seedTokens({
              delimiter: '/**',
              end: '*/',
              postDelimiter: ' ',
            })),
          },
        ];
      };

      utils.reportJSDoc(
        'Multiline jsdoc blocks are prohibited by ' +
          'your configuration.',
        null,
        fixer,
      );

      return;
    }
  }

  lineChecks();
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header',
    },
    fixable: 'code',
    schema: [
      {
        additionalProperties: false,
        properties: {
          allowMultipleTags: {
            type: 'boolean',
          },
          minimumLengthForMultiline: {
            type: 'integer',
          },
          multilineTags: {
            anyOf: [
              {
                enum: [
                  '*',
                ],
                type: 'string',
              }, {
                items: {
                  type: 'string',
                },
                type: 'array',
              },
            ],
          },
          noFinalLineText: {
            type: 'boolean',
          },
          noMultilineBlocks: {
            type: 'boolean',
          },
          noSingleLineBlocks: {
            type: 'boolean',
          },
          noZeroLineText: {
            type: 'boolean',
          },
          singleLineTags: {
            items: {
              type: 'string',
            },
            type: 'array',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
});
