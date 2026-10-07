'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Source = void 0;
exports.isSource = isSource;

var _devAssert = require('../jsutils/devAssert.js');

var _inspect = require('../jsutils/inspect.js');

var _instanceOf = require('../jsutils/instanceOf.js');

/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
class Source {
  constructor(
    body,
    name = 'GraphQL request',
    locationOffset = {
      line: 1,
      column: 1,
    },
  ) {
    typeof body === 'string' ||
      (0, _devAssert.devAssert)(
        false,
        `Body must be a string. Received: ${(0, _inspect.inspect)(body)}.`,
      );
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 ||
      (0, _devAssert.devAssert)(
        false,
        'line in locationOffset is 1-indexed and must be positive.',
      );
    this.locationOffset.column > 0 ||
      (0, _devAssert.devAssert)(
        false,
        'column in locationOffset is 1-indexed and must be positive.',
      );
  }

  get [Symbol.toStringTag]() {
    return 'Source';
  }
}
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

exports.Source = Source;

function isSource(source) {
  return (0, _instanceOf.instanceOf)(source, Source);
}
