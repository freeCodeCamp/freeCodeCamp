import { e as decamelize } from './dependencies.js';

const decamelizeFlagKey = flagKey => `--${decamelize(flagKey, {separator: '-'})}`;

const joinFlagKeys = (flagKeys, prefix = '--') => `\`${prefix}${flagKeys.join(`\`, \`${prefix}`)}\``;

export { decamelizeFlagKey, joinFlagKeys };
