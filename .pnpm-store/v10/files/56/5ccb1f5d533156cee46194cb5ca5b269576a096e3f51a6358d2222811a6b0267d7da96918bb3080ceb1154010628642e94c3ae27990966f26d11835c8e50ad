# eslint-plugin-import/memo-parser

## NOTE

This used to improve performance, but as of ESLint 5 and v2 of this plugin, it seems to just consume a bunch of memory and slightly increase lint times.

**Not recommended for use at this time!**

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
