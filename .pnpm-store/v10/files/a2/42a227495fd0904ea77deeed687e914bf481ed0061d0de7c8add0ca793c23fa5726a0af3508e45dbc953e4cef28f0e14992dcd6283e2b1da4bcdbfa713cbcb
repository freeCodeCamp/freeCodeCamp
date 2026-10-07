'use strict';

const create = require('./create.cjs');
const lexer = require('./config/lexer.cjs');
const parser = require('./config/parser.cjs');
const walker = require('./config/walker.cjs');

const syntax = create({
    ...lexer,
    ...parser,
    ...walker
});

module.exports = syntax;
