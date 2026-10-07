"use strict";

exports.__esModule = true;
exports.createInvalidArgFactory = createInvalidArgFactory;

function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
  };
}