# eslint-plugin-import/memo-parser

This parser is just a memoizing wrapper around some actual parser.

To configure, just add your _actual_ parser to the `parserOptions`, like so:

```yaml
parser: eslint-plugin-import/memo-parser
# parser: babel-eslint

parserOptions:
  parser: babel-eslint
  sourceType: module
  ecmaVersion: 6
```
