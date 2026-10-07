import iterateJsdoc from '../iterateJsdoc.js';
import {
  areDocsInformative,
} from 'are-docs-informative';

const defaultAliases = {
  a: [
    'an', 'our',
  ],
};

const defaultUselessWords = [
  'a', 'an', 'i', 'in', 'of', 's', 'the',
];

/* eslint-disable complexity -- Temporary */

/**
 * @param {import('eslint').Rule.Node|import('@typescript-eslint/types').TSESTree.Node|null|undefined} node
 * @returns {string[]}
 */
const getNamesFromNode = (node) => {
  switch (node?.type) {
  case 'AccessorProperty':
  case 'MethodDefinition':
  case 'PropertyDefinition':
  case 'TSAbstractAccessorProperty':
  case 'TSAbstractMethodDefinition':
  case 'TSAbstractPropertyDefinition':
    return [
      ...getNamesFromNode(
        /** @type {import('@typescript-eslint/types').TSESTree.Node} */ (
          node.parent
        ).parent,
      ),
      ...getNamesFromNode(
        /** @type {import('@typescript-eslint/types').TSESTree.Node} */
        (node.key),
      ),
    ];

  case 'ExportDefaultDeclaration':
  case 'ExportNamedDeclaration':
    return getNamesFromNode(
      /** @type {import('@typescript-eslint/types').TSESTree.ExportNamedDeclaration} */
      (node).declaration
    );
  case 'ClassDeclaration':
  case 'ClassExpression':
  case 'FunctionDeclaration':
  case 'FunctionExpression':
  case 'TSModuleDeclaration':
  case 'TSMethodSignature':
  case 'TSDeclareFunction':
  case 'TSEnumDeclaration':
  case 'TSEnumMember':
  case 'TSInterfaceDeclaration':
  case 'TSTypeAliasDeclaration':
    return getNamesFromNode(
      /** @type {import('@typescript-eslint/types').TSESTree.ClassDeclaration} */
      (node).id,
    );
  case 'Identifier':
    return [
      node.name,
    ];
  case 'Property':
    return getNamesFromNode(
      /** @type {import('@typescript-eslint/types').TSESTree.Node} */
      (node.key),
    );
  case 'VariableDeclaration':
    return getNamesFromNode(
      /** @type {import('@typescript-eslint/types').TSESTree.Node} */
      (node.declarations[0]),
    );
  case 'VariableDeclarator':
    return [
      ...getNamesFromNode(
        /** @type {import('@typescript-eslint/types').TSESTree.Node} */
        (node.id),
      ),
      ...getNamesFromNode(
        /** @type {import('@typescript-eslint/types').TSESTree.Node} */
        (node.init),
      ),
    ].filter(Boolean);
  default:
    return [];
  }
};
/* eslint-enable complexity -- Temporary */

export default iterateJsdoc(({
  context,
  jsdoc,
  node,
  report,
  utils,
}) => {
  const /** @type {{aliases: {[key: string]: string[]}, excludedTags: string[], uselessWords: string[]}} */ {
    aliases = defaultAliases,
    excludedTags = [],
    uselessWords = defaultUselessWords,
  } = context.options[0] || {};
  const nodeNames = getNamesFromNode(node);

  /**
   * @param {string} text
   * @param {string} extraName
   * @returns {boolean}
   */
  const descriptionIsRedundant = (text, extraName = '') => {
    const textTrimmed = text.trim();
    return Boolean(textTrimmed) && !areDocsInformative(textTrimmed, [
      extraName, nodeNames,
    ].filter(Boolean).join(' '), {
      aliases,
      uselessWords,
    });
  };

  const {
    description,
    lastDescriptionLine,
  } = utils.getDescription();
  let descriptionReported = false;

  for (const tag of jsdoc.tags) {
    if (excludedTags.includes(tag.tag)) {
      continue;
    }

    if (descriptionIsRedundant(tag.description, tag.name)) {
      utils.reportJSDoc(
        'This tag description only repeats the name it describes.',
        tag,
      );
    }

    descriptionReported ||= tag.description === description &&
      /** @type {import('comment-parser').Spec & {line: import('../iterateJsdoc.js').Integer}} */
      (tag).line === lastDescriptionLine;
  }

  if (!descriptionReported && descriptionIsRedundant(description)) {
    report('This description only repeats the name it describes.');
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description:
        'This rule reports doc comments that only restate their attached name.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header',
    },
    schema: [
      {
        additionalProperties: false,
        properties: {
          aliases: {
            patternProperties: {
              '.*': {
                items: {
                  type: 'string',
                },
                type: 'array',
              },
            },
          },
          excludedTags: {
            items: {
              type: 'string',
            },
            type: 'array',
          },
          uselessWords: {
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
