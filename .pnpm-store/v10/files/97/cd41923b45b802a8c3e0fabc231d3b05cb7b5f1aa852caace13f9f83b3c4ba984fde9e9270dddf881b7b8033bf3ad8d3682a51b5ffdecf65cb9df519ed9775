# `MD041` - First line in a file should be a top-level heading

Tags: `headings`

Aliases: `first-line-h1`, `first-line-heading`

Parameters:

- `allow_preamble`: Allow content before first heading (`boolean`, default
  `false`)
- `front_matter_title`: RegExp for matching title in front matter (`string`,
  default `^\s*title\s*[:=]`)
- `level`: Heading level (`integer`, default `1`)

This rule is intended to ensure documents have a title and is triggered when
the first line in a document is not a top-level ([HTML][HTML] `h1`) heading:

```markdown
This is a document without a heading
```

To fix this, add a top-level heading to the beginning of the document:

```markdown
# Document Heading

This is a document with a top-level heading
```

Because it is common for projects on GitHub to use an image for the heading of
`README.md` and that pattern is not well-supported by Markdown, HTML headings
are also permitted by this rule. For example:

```markdown
<h1 align="center"><img src="https://placekitten.com/300/150"/></h1>

This is a document with a top-level HTML heading
```

In some cases, a document's title heading may be preceded by text like a table
of contents. This is not ideal for accessibility, but can be allowed by setting
the `allow_preamble` parameter to `true`.

```markdown
This is a document with preamble text

# Document Heading
```

If [YAML][YAML] front matter is present and contains a `title` property
(commonly used with blog posts), this rule will not report a violation. To use a
different property name in the front matter, specify the text of a [regular
expression][RegExp] via the `front_matter_title` parameter. To disable the use
of front matter by this rule, specify `""` for `front_matter_title`.

The `level` parameter can be used to change the top-level heading (ex: to `h2`)
in cases where an `h1` is added externally.

Rationale: The top-level heading often acts as the title of a document. More
information: <https://cirosantilli.com/markdown-style-guide#top-level-header>.

[HTML]: https://en.wikipedia.org/wiki/HTML
[RegExp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
[YAML]: https://en.wikipedia.org/wiki/YAML
