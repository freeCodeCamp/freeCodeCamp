# `MD033` - Inline HTML

Tags: `html`

Aliases: `no-inline-html`

Parameters:

- `allowed_elements`: Allowed elements (`string[]`, default `[]`)
- `table_allowed_elements`: Allowed elements in tables (`string[]`, default
  `[]`)

This rule is triggered whenever raw HTML is used in a Markdown document:

```markdown
<h1>Inline HTML heading</h1>
```

To fix this, use 'pure' Markdown instead of including raw HTML:

```markdown
# Markdown heading
```

To allow specific HTML elements anywhere in Markdown content, set the
`allowed_elements` parameter to a list of HTML element names. To allow a
specific set of HTML elements within Markdown tables, set the
`table_allowed_elements` parameter to a list of HTML element names. This can be
used to permit the use of `<br>`-style line breaks only within Markdown tables.

Rationale: Raw HTML is allowed in Markdown, but this rule is included for
those who want their documents to only include "pure" Markdown, or for those
who are rendering Markdown documents into something other than HTML.
