# @lezer/html

This is an HTML grammar for the
[lezer](https://lezer.codemirror.net/) parser system.

The code is licensed under an MIT license.

## Interface

This package exports two bindings:

**`parser`**`: Parser`

The parser instance for the basic HTML grammar. Supports two dialects:

 - `"noMatch"` turns off tag matching, creating regular syntax nodes
   even for mismatched tags.

 - `"selfClosing"` adds support for `/>` self-closing tag syntax.

**`configureNesting`**`(tags?: {`\
`  tag: string,`\
`  attrs?: (attrs: {[attr: string]: string}) => boolean,`\
`  parser: Parser,`\
`}[], attributes?: {`\
`  name: string,`\
`  tagName?: string,`\
`  parser: Parser,`\
`}[]): ParseWrapper`

Create a nested parser config object which overrides the way the
content of some tags or attributes is parsed. Each tag override is an
object with a `tag` property holding the (lower case) tag name to
override, and an optional `attrs` predicate that, if given, has to
return true for the tag's attributes for this override to apply.

The `parser` property describes the way the tag's content is parsed.
