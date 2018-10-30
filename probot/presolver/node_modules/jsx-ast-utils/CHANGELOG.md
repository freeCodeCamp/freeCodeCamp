1.4.1 / 2017-04-19
==================
- [fix] - Fixing fatal throw in `getPropValue` for `ArrowFunctionExpression`


1.4.0 / 2017-02-02
==================
- [new] Add eventHandlers and eventHandlersByType to API. These are the event names for DOM elements on JSX-using libraries such as React, inferno, and preact.


1.3.5 / 2016-12-14
==================
- [fix] Normalize literals "true" and "false" before converting to boolean in Literal prop value extractor.


1.3.4 / 2016-11-15
==================
- [fix] Recursively resolve JSXMemberExpression names for elementType. (i.e. `<Component.Render.Me />`). Fixes [#9](https://github.com/evcohen/jsx-ast-utils/issues/9)


1.3.3 / 2016-10-28
==================
- [fix] Add support for `ArrayExpression`.


1.3.2 / 2016-10-11
==================
- [fix] Add support for `UpdateExpression`.


1.3.1 / 2016-07-13
==================
- [fix] Add `JSXElement` to expression types to handle recursively extracting prop value.


1.3.0 / 2016-07-12
==================
- [new] Add support for `TaggedTemplateExpression`.


1.2.1 / 2016-06-15
==================
- [fix] Point to `lib` instead of `src` for root exports.


1.2.0 / 2016-06-15
==================
- [new] Export functions from root so they can be imported like the following: `require('jsx-ast-utils/{function}')`.


1.1.1 / 2016-06-12
==================
- [fix] Better support for expressions in `TemplateLiteral` extraction.


1.1.0 / 2016-06-10
==================
- [new] Support for namespaced element names.
- [new] Add `propName` to API to get correct name for prop.


1.0.1 / 2016-06-10
==================
- [fix] Return actual reserved words instead of string representations of them.


1.0.0 / 2016-06-09
==================
- Initial stable release
