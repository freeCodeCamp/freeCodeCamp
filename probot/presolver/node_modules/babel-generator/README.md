# babel-generator

> Turns an AST into code.

## Install

```sh
npm install --save-dev babel-generator
```

## Usage

```js
import {parse} from 'babylon';
import generate from 'babel-generator';

const code = 'class Example {}';
const ast = parse(code);

const output = generate(ast, { /* options */ }, code);
```

## Options

Options for formatting output:

name                   | type     | default         | description
-----------------------|----------|-----------------|--------------------------------------------------------------------------
auxiliaryCommentBefore | string   |                 | Optional string to add as a block comment at the start of the output file
auxiliaryCommentAfter  | string   |                 | Optional string to add as a block comment at the end of the output file
shouldPrintComment     | function | `opts.comments` | Function that takes a comment (as a string) and returns `true` if the comment should be included in the output.  By default, comments are included if `opts.comments` is `true` or if `opts.minifed` is `false` and the comment contains `@preserve` or `@license`
retainLines            | boolean  | `false`         | Attempt to use the same line numbers in the output code as in the source code (helps preserve stack traces)
retainFunctionParens   | boolean  | `false`         | Retain parens around function expressions (could be used to change engine parsing behavior)
comments               | boolean  | `true`          | Should comments be included in output
compact                | boolean or `'auto'` | `opts.minified` | Set to `true` to avoid adding whitespace for formatting
minified               | boolean  | `false`         | Should the output be minified
concise                | boolean  | `false`         | Set to `true` to reduce whitespace (but not as much as `opts.compact`)
quotes                 | `'single'` or `'double'` | autodetect based on `ast.tokens` | The type of quote to use in the output
filename               | string   |                 | Used in warning messages
flowCommaSeparator     | boolean  | `false`         | Set to `true` to use commas instead of semicolons as Flow property separators
jsonCompatibleStrings  | boolean  | `false`         | Set to true to run `jsesc` with "json": true to print "\u00A9" vs. "©";

Options for source maps:

name                   | type     | default         | description
-----------------------|----------|-----------------|--------------------------------------------------------------------------
sourceMaps             | boolean  | `false`         | Enable generating source maps
sourceMapTarget        | string   |                 | The filename of the generated code that the source map will be associated with
sourceRoot             | string   |                 | A root for all relative URLs in the source map
sourceFileName         | string   |                 | The filename for the source code (i.e. the code in the `code` argument).  This will only be used if `code` is a string.

## AST from Multiple Sources

In most cases, Babel does a 1:1 transformation of input-file to output-file.  However,
you may be dealing with AST constructed from multiple sources - JS files, templates, etc.
If this is the case, and you want the sourcemaps to reflect the correct sources, you'll need
to pass an object to `generate` as the `code` parameter.  Keys
should be the source filenames, and values should be the source content.

Here's an example of what that might look like:

```js
import {parse} from 'babylon';
import generate from 'babel-generator';

const a = 'var a = 1;';
const b = 'var b = 2;';
const astA = parse(a, { sourceFilename: 'a.js' });
const astB = parse(b, { sourceFilename: 'b.js' });
const ast = {
  type: 'Program',
  body: [].concat(astA.program.body, astB.program.body)
};

const { code, map } = generate(ast, { sourceMaps: true }, {
  'a.js': a,
  'b.js': b
});

// Sourcemap will point to both a.js and b.js where appropriate.
```
