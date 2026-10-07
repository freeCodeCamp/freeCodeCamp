// @flow strict-local
import type {PackageName} from '@parcel/types';
import type {SchemaEntity} from '@parcel/utils';
import assert from 'assert';

// Reasoning behind this validation:
// https://github.com/parcel-bundler/parcel/issues/3397#issuecomment-521353931
export function validatePackageName(
  pkg: ?PackageName,
  pluginType: string,
  key: string,
) {
  // $FlowFixMe
  if (!pkg) {
    return;
  }

  assert(typeof pkg === 'string', `"${key}" must be a string`);

  if (pkg.startsWith('@parcel')) {
    assert(
      pkg.replace(/^@parcel\//, '').startsWith(`${pluginType}-`),
      `Official parcel ${pluginType} packages must be named according to "@parcel/${pluginType}-{name}"`,
    );
  } else if (pkg.startsWith('@')) {
    let [scope, name] = pkg.split('/');
    assert(
      name.startsWith(`parcel-${pluginType}-`) ||
        name === `parcel-${pluginType}`,
      `Scoped parcel ${pluginType} packages must be named according to "${scope}/parcel-${pluginType}[-{name}]"`,
    );
  } else {
    assert(
      pkg.startsWith(`parcel-${pluginType}-`),
      `Parcel ${pluginType} packages must be named according to "parcel-${pluginType}-{name}"`,
    );
  }
}

const validatePluginName = (pluginType: string, key: string) => {
  return (val: string) => {
    // allow plugin spread...
    if (val === '...') return;

    try {
      validatePackageName(val, pluginType, key);
    } catch (e) {
      return e.message;
    }
  };
};

const validateExtends = (val: string): void => {
  // allow relative paths...
  if (val.startsWith('.')) return;

  try {
    validatePackageName(val, 'config', 'extends');
  } catch (e) {
    return e.message;
  }
};

const pipelineSchema = (pluginType: string, key: string): SchemaEntity => {
  return {
    type: 'array',
    items: {
      type: 'string',
      __validate: validatePluginName(pluginType, key),
    },
  };
};

const mapPipelineSchema = (pluginType: string, key: string): SchemaEntity => {
  return {
    type: 'object',
    properties: {},
    additionalProperties: pipelineSchema(pluginType, key),
  };
};

const mapStringSchema = (pluginType: string, key: string): SchemaEntity => {
  return {
    type: 'object',
    properties: {},
    additionalProperties: {
      type: 'string',
      __validate: validatePluginName(pluginType, key),
    },
  };
};

export default {
  type: 'object',
  properties: {
    $schema: {
      type: 'string',
    },
    extends: {
      oneOf: [
        {
          type: 'string',
          __validate: validateExtends,
        },
        {
          type: 'array',
          items: {
            type: 'string',
            __validate: validateExtends,
          },
        },
      ],
    },
    bundler: {
      type: 'string',
      __validate: (validatePluginName('bundler', 'bundler'): string => void),
    },
    resolvers: (pipelineSchema('resolver', 'resolvers'): SchemaEntity),
    transformers: (mapPipelineSchema(
      'transformer',
      'transformers',
    ): SchemaEntity),
    validators: (mapPipelineSchema('validator', 'validators'): SchemaEntity),
    namers: (pipelineSchema('namer', 'namers'): SchemaEntity),
    packagers: (mapStringSchema('packager', 'packagers'): SchemaEntity),
    optimizers: (mapPipelineSchema('optimizer', 'optimizers'): SchemaEntity),
    compressors: (mapPipelineSchema('compressor', 'compressors'): SchemaEntity),
    reporters: (pipelineSchema('reporter', 'reporters'): SchemaEntity),
    runtimes: (pipelineSchema('runtime', 'runtimes'): SchemaEntity),
    filePath: {
      type: 'string',
    },
    resolveFrom: {
      type: 'string',
    },
  },
  additionalProperties: false,
};
