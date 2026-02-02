const fs = require('fs');
const path = require('path');
const YAML = require('js-yaml');
const linter = require('./linter');

const CONFIG_PATH = path.resolve(
  __dirname,
  '../../challenges/.markdownlint.yaml'
);

const lintRules = fs.readFileSync(CONFIG_PATH, 'utf8');

const lint = linter(YAML.load(lintRules));

module.exports = lint;
