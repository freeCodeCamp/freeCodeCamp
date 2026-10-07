/* eslint global-require: 0 */

import fs from 'fs';
import path from 'path';
import test from 'tape';

import plugin from '../src';

const rules = fs.readdirSync(path.resolve(__dirname, '../src/rules/'))
  .map((f) => path.basename(f, '.js'));

test('all rule files should be exported by the plugin', (t) => {
  rules.forEach((ruleName) => {
    t.equal(
      plugin.rules[ruleName],
      require(path.join('../src/rules', ruleName)), // eslint-disable-line import/no-dynamic-require
      `exports ${ruleName}`,
    );
  });

  t.end();
});

test('configurations', (t) => {
  t.notEqual(plugin.configs.recommended, undefined, 'exports a \'recommended\' configuration');

  t.end();
});

test('schemas', (t) => {
  rules.forEach((ruleName) => {
    const rule = require(path.join('../src/rules', ruleName)); // eslint-disable-line import/no-dynamic-require
    const schema = rule.meta && rule.meta.schema && rule.meta.schema[0];
    const { type } = schema;

    t.equal(type, 'object', `${ruleName} exports a schema with type object`);
  });

  t.end();
});
