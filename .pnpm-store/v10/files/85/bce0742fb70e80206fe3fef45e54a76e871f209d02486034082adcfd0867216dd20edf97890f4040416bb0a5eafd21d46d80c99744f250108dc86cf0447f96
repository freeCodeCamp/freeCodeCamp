// @flow strict-local
import type {SchemaEntity, SchemaObject} from '@parcel/utils';

export const ENGINES_SCHEMA: SchemaEntity = {
  type: 'object',
  properties: {
    browsers: {
      oneOf: [
        {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        {
          type: 'string',
        },
      ],
    },
  },
  __forbiddenProperties: ['browser'],
  additionalProperties: {
    type: 'string',
  },
};

export const PACKAGE_DESCRIPTOR_SCHEMA: SchemaObject = {
  type: 'object',
  properties: {
    context: {
      type: 'string',
      enum: [
        'node',
        'browser',
        'web-worker',
        'electron-main',
        'electron-renderer',
        'service-worker',
      ],
    },
    includeNodeModules: {
      oneOf: [
        {
          type: 'boolean',
        },
        {
          type: 'array',
          items: {
            type: 'string',
            __type: 'a wildcard or filepath',
          },
        },
        {
          type: 'object',
          properties: {},
          additionalProperties: {
            type: 'boolean',
          },
        },
      ],
    },
    outputFormat: {
      type: 'string',
      enum: ['global', 'esmodule', 'commonjs'],
    },
    distDir: {
      type: 'string',
    },
    publicUrl: {
      type: 'string',
    },
    isLibrary: {
      type: 'boolean',
    },
    source: {
      oneOf: [
        {
          type: 'string',
        },
        {
          type: 'array',
          items: {type: 'string'},
        },
      ],
    },
    sourceMap: {
      oneOf: [
        {
          type: 'boolean',
        },
        {
          type: 'object',
          properties: {
            inlineSources: {
              type: 'boolean',
            },
            sourceRoot: {
              type: 'string',
            },
            inline: {
              type: 'boolean',
            },
          },
          additionalProperties: false,
        },
      ],
    },
    engines: ENGINES_SCHEMA,
    optimize: {
      type: 'boolean',
    },
    scopeHoist: {
      type: 'boolean',
    },
  },
  additionalProperties: false,
};

export const DESCRIPTOR_SCHEMA: SchemaEntity = {
  ...PACKAGE_DESCRIPTOR_SCHEMA,
  properties: {
    ...PACKAGE_DESCRIPTOR_SCHEMA.properties,
    distEntry: {
      type: 'string',
    },
  },
};

export const COMMON_TARGET_DESCRIPTOR_SCHEMA: SchemaEntity = {
  oneOf: [
    PACKAGE_DESCRIPTOR_SCHEMA,
    {
      enum: [false],
    },
  ],
};
