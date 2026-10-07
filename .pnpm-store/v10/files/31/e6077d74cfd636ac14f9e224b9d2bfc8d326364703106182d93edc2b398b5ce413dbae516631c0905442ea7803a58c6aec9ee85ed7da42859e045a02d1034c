"use strict";

const BABEL_VISITOR_KEYS = require("@babel/types").VISITOR_KEYS;
const ESLINT_VISITOR_KEYS = require("eslint-visitor-keys").KEYS;

module.exports = Object.assign(
  {
    Literal: ESLINT_VISITOR_KEYS.Literal,
    MethodDefinition: ["decorators"].concat(
      ESLINT_VISITOR_KEYS.MethodDefinition
    ),
    Property: ["decorators"].concat(ESLINT_VISITOR_KEYS.Property),
  },
  BABEL_VISITOR_KEYS
);
