#!/usr/bin/env node
var path = require('path')
var eslint = require('eslint')
var opts = {
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'standard.json'),
    useEslintrc: false
  }
}

require('../../').cli(opts)
