import iterateJsdoc from '../iterateJsdoc.js';

const defaultTags = {
  file: {
    initialCommentsOnly: true,
    mustExist: true,
    preventDuplicates: true,
  },
};

/**
 * @param {import('../iterateJsdoc.js').StateObject} state
 * @returns {void}
 */
const setDefaults = (state) => {
  // First iteration
  if (!state.globalTags) {
    state.globalTags = {};
    state.hasDuplicates = {};
    state.hasTag = {};
    state.hasNonCommentBeforeTag = {};
  }
};

export default iterateJsdoc(({
  jsdocNode,
  state,
  utils,
  context,
}) => {
  const {
    tags = defaultTags,
  } = context.options[0] || {};

  setDefaults(state);

  for (const tagName of Object.keys(tags)) {
    const targetTagName = /** @type {string} */ (utils.getPreferredTagName({
      tagName,
    }));

    const hasTag = Boolean(targetTagName && utils.hasTag(targetTagName));

    state.hasTag[tagName] = hasTag || state.hasTag[tagName];

    const hasDuplicate = state.hasDuplicates[tagName];

    if (hasDuplicate === false) {
      // Was marked before, so if a tag now, is a dupe
      state.hasDuplicates[tagName] = hasTag;
    } else if (!hasDuplicate && hasTag) {
      // No dupes set before, but has first tag, so change state
      //   from `undefined` to `false` so can detect next time
      state.hasDuplicates[tagName] = false;
      state.hasNonCommentBeforeTag[tagName] = state.hasNonComment &&
        state.hasNonComment < jsdocNode.range[0];
    }
  }
}, {
  exit ({
    context,
    state,
    utils,
  }) {
    setDefaults(state);
    const {
      tags = defaultTags,
    } = context.options[0] || {};

    for (const [
      tagName,
      {
        mustExist = false,
        preventDuplicates = false,
        initialCommentsOnly = false,
      },
    ] of Object.entries(tags)) {
      const obj = utils.getPreferredTagNameObject({
        tagName,
      });
      if (obj && typeof obj === 'object' && 'blocked' in obj) {
        utils.reportSettings(
          `\`settings.jsdoc.tagNamePreference\` cannot block @${obj.tagName} ` +
          'for the `require-file-overview` rule',
        );
      } else {
        const targetTagName = (
          obj && typeof obj === 'object' && obj.replacement
        ) || obj;
        if (mustExist && !state.hasTag[tagName]) {
          utils.reportSettings(`Missing @${targetTagName}`);
        }

        if (preventDuplicates && state.hasDuplicates[tagName]) {
          utils.reportSettings(
            `Duplicate @${targetTagName}`,
          );
        }

        if (initialCommentsOnly &&
            state.hasNonCommentBeforeTag[tagName]
        ) {
          utils.reportSettings(
            `@${targetTagName} should be at the beginning of the file`,
          );
        }
      }
    }
  },
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header',
    },
    schema: [
      {
        additionalProperties: false,
        properties: {
          tags: {
            patternProperties: {
              '.*': {
                additionalProperties: false,
                properties: {
                  initialCommentsOnly: {
                    type: 'boolean',
                  },
                  mustExist: {
                    type: 'boolean',
                  },
                  preventDuplicates: {
                    type: 'boolean',
                  },
                },
                type: 'object',
              },
            },
            type: 'object',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
  nonComment ({
    state,
    node,
  }) {
    if (!state.hasNonComment) {
      state.hasNonComment = node.range[0];
    }
  },
});
