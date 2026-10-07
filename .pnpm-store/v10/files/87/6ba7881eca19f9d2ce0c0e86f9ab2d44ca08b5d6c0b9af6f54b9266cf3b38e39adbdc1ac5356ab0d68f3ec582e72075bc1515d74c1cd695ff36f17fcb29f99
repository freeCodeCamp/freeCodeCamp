# v1.4.1
- fix .prettierignore
- add source trasformation example

# v1.4.0
- ESM compatibility improvements; fixes #159, #161

# v1.3.1
- allow for valid empty jsdoc; fixes #128

# v1.3.0
- add support for custom block markers

# v1.2.4
- reverting engine constraint back to ^12.0.0

# v1.2.3
- publishing missing fix: point package's main to .cjs file

# v1.2.2
- re-export ./util on the top-level for compatibility with older Node
- point package's main to .cjs file

# v1.2.1
- bump `engines` per `exports` issues in earlier Node versions

# v1.2.0
- keep and handle appropriately CR line endings

# v1.1.6-beta.3
- process CRs as a separate .lineEnd toke

# v1.1.6-beta.2
- ESM/CJS compatibility fixes

# v1.1.6-beta.1
- support native ESM

# v1.1.6-beta.0
- keep original CR line endings
- allow to normalize line endings with `crlf` transform

# v1.1.5
- drop unused variables
- add .editorconfig

# v1.1.4
- `bugfix` fix unsynced lib/

# v1.1.3
- export primitive type on the top level: Markers, Block, Spec, Line, Tokens, Problem

# v1.1.2
- `bugfix` Allow to build nested tags from `name.subname` even if `name` wasn't d
- `bugfix` Preserve indentation when extracting comments

# v1.1.1
- add helpers for rewiring Spec.source <-> Spec.tags.source

# v1.1.0
- split tokenizers into separate modules
- allow multiline {type} definitions - issue #109
- allow using "=>" in [name=default] defaults – issue #112
- allow using "=" in quoted [name=default] defaults – issue #112
- add tokenizers usage example - issue #111

# v1.0.0
- complete rewrite in TS with more flexible API

# v0.7.6
- distinct non-critical errors by providing `err.warning`

# v0.7.5
- name parsing fixes

# v0.7.4
- node 8 backward compatibility fixes

# v0.7.3
- make stringify result more close to the source

# v0.7.2
- make stringify to start each line with * in multiline comments

# v0.7.1
- ensure non-space characters after asterisk are included in source

# v0.7.0
- allow fenced blocks in tag description, see opts.fence

# v0.6.2
- document TypeScript definitions

# v0.6.1
- adjust strigifier indentation

# v0.6.0
- soft-drop node@6 support
- migrate to ES6 syntax
- allow to generate comments out of parsed data

# v0.5.5
- allow loose tag names, e.g. @.tag, @-tag

# v0.5.4
- allow quoted literal names, e.g. `@tag "My Var" description`

# v0.5.3
- corrected TypeScript definitions

# v0.5.2
- added TypeScript definitions
- removed `readable-stream` dependency

# v0.5.1
- Support for tab as separator between tag components.
- Docs: Indicate when `optional` is `true`; `default` property

# v0.5.0
- line wrapping control with `opts.join`

# v0.4.2
- tolerate inconsistent lines alignment within block

# v0.4.1
- refactored parsing, allow to not start lines with "* " inside block

# v0.3.2
- fix RegExp for `description` extraction to allow $ char

# v0.3.1
- use `readable-stream` fro Node 0.8 comatibility
- allow to pass optional parameters to `parse.file(path [,opts], done)`
- allow `parse.stream` to work with Buffers in addition to strings

# v0.3.0
- `feature` allow to use custom parsers
- `feature` always include source, no `raw_value` option needed
- `bugfix` always provide `optional` tag property
- `refactor` clean up tests

# v0.2.3

- `bugfix` Accept `/** one line */` comments
- `refactor` Get rid of `lodash` to avoid unnecessary extra size when bundled

# v0.2.2

- `feature` allow spaces in default values `@my-tag {my.type} [name=John Doe]`

# v0.2.1

- `refactor` make line pasing mechanism more tolerable

# v0.2.0

- `feature` include source line numbers in parsed data
- `feature` optionally prevent dotten names expanding

# v0.1.2

- `bugfix` Allow to build nested tags from `name.subname` even if `name` wasn't d
- `bugfix` Preserve indentation when extracting comments

# v0.1.1

- `improvement` `parse(source)` returns array of all blocks found in source or an empty array
- `bugfix` fixed indented blocks parsing

# v0.1.0

Initial implementation
