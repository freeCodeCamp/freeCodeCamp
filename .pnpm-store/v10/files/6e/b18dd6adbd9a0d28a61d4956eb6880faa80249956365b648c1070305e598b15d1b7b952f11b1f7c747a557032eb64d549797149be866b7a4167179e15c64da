import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { createSyncFn } from 'synckit';
import semver from 'semver';
import spdxExpressionParse from 'spdx-expression-parse';
import iterateJsdoc from '../iterateJsdoc.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathName = join(__dirname, '../import-worker.mjs');

const allowedKinds = new Set([
  'class',
  'constant',
  'event',
  'external',
  'file',
  'function',
  'member',
  'mixin',
  'module',
  'namespace',
  'typedef',
]);

export default iterateJsdoc(({
  utils,
  report,
  context,
  settings,
}) => {
  const options = context.options[0] || {};
  const {
    allowedLicenses = null,
    allowedAuthors = null,
    numericOnlyVariation = false,
    licensePattern = '/([^\n\r]*)/gu',
  } = options;

  utils.forEachPreferredTag('version', (jsdocParameter, targetTagName) => {
    const version = /** @type {string} */ (
      utils.getTagDescription(jsdocParameter)
    ).trim();
    if (!version) {
      report(
        `Missing JSDoc @${targetTagName} value.`,
        null,
        jsdocParameter,
      );
    } else if (!semver.valid(version)) {
      report(
        `Invalid JSDoc @${targetTagName}: "${utils.getTagDescription(jsdocParameter)}".`,
        null,
        jsdocParameter,
      );
    }
  });

  utils.forEachPreferredTag('kind', (jsdocParameter, targetTagName) => {
    const kind = /** @type {string} */ (
      utils.getTagDescription(jsdocParameter)
    ).trim();
    if (!kind) {
      report(
        `Missing JSDoc @${targetTagName} value.`,
        null,
        jsdocParameter,
      );
    } else if (!allowedKinds.has(kind)) {
      report(
        `Invalid JSDoc @${targetTagName}: "${utils.getTagDescription(jsdocParameter)}"; ` +
        `must be one of: ${[
          ...allowedKinds,
        ].join(', ')}.`,
        null,
        jsdocParameter,
      );
    }
  });

  if (numericOnlyVariation) {
    utils.forEachPreferredTag('variation', (jsdocParameter, targetTagName) => {
      const variation = /** @type {string} */ (
        utils.getTagDescription(jsdocParameter)
      ).trim();
      if (!variation) {
        report(
          `Missing JSDoc @${targetTagName} value.`,
          null,
          jsdocParameter,
        );
      } else if (
        !Number.isInteger(Number(variation)) ||
        Number(variation) <= 0
      ) {
        report(
          `Invalid JSDoc @${targetTagName}: "${utils.getTagDescription(jsdocParameter)}".`,
          null,
          jsdocParameter,
        );
      }
    });
  }

  utils.forEachPreferredTag('since', (jsdocParameter, targetTagName) => {
    const version = /** @type {string} */ (
      utils.getTagDescription(jsdocParameter)
    ).trim();
    if (!version) {
      report(
        `Missing JSDoc @${targetTagName} value.`,
        null,
        jsdocParameter,
      );
    } else if (!semver.valid(version)) {
      report(
        `Invalid JSDoc @${targetTagName}: "${utils.getTagDescription(jsdocParameter)}".`,
        null,
        jsdocParameter,
      );
    }
  });
  utils.forEachPreferredTag('license', (jsdocParameter, targetTagName) => {
    const licenseRegex = utils.getRegexFromString(licensePattern, 'g');
    const matches = /** @type {string} */ (
      utils.getTagDescription(jsdocParameter)
    ).matchAll(licenseRegex);
    let positiveMatch = false;
    for (const match of matches) {
      const license = match[1] || match[0];
      if (license) {
        positiveMatch = true;
      }

      if (!license.trim()) {
        // Avoid reporting again as empty match
        if (positiveMatch) {
          return;
        }

        report(
          `Missing JSDoc @${targetTagName} value.`,
          null,
          jsdocParameter,
        );
      } else if (allowedLicenses) {
        if (allowedLicenses !== true && !allowedLicenses.includes(license)) {
          report(
            `Invalid JSDoc @${targetTagName}: "${license}"; expected one of ${allowedLicenses.join(', ')}.`,
            null,
            jsdocParameter,
          );
        }
      } else {
        try {
          spdxExpressionParse(license);
        } catch {
          report(
            `Invalid JSDoc @${targetTagName}: "${license}"; expected SPDX expression: https://spdx.org/licenses/.`,
            null,
            jsdocParameter,
          );
        }
      }
    }
  });

  if (settings.mode === 'typescript') {
    utils.forEachPreferredTag('import', (tag) => {
      const {
        type, name, description
      } = tag;
      const typePart = type ? `{${type}} `: '';
      const imprt = 'import ' + (description
        ? `${typePart}${name} ${description}`
        : `${typePart}${name}`);

      const getImports = createSyncFn(pathName);
      if (!getImports(imprt)) {
        report(
          `Bad @import tag`,
          null,
          tag,
        );
      }
    });
  }

  utils.forEachPreferredTag('author', (jsdocParameter, targetTagName) => {
    const author = /** @type {string} */ (
      utils.getTagDescription(jsdocParameter)
    ).trim();
    if (!author) {
      report(
        `Missing JSDoc @${targetTagName} value.`,
        null,
        jsdocParameter,
      );
    } else if (allowedAuthors && !allowedAuthors.includes(author)) {
      report(
        `Invalid JSDoc @${targetTagName}: "${utils.getTagDescription(jsdocParameter)}"; expected one of ${allowedAuthors.join(', ')}.`,
        null,
        jsdocParameter,
      );
    }
  });
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header',
    },
    schema: [
      {
        additionalProperties: false,
        properties: {
          allowedAuthors: {
            items: {
              type: 'string',
            },
            type: 'array',
          },
          allowedLicenses: {
            anyOf: [
              {
                items: {
                  type: 'string',
                },
                type: 'array',
              },
              {
                type: 'boolean',
              },
            ],
          },
          licensePattern: {
            type: 'string',
          },
          numericOnlyVariation: {
            type: 'boolean',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
});
