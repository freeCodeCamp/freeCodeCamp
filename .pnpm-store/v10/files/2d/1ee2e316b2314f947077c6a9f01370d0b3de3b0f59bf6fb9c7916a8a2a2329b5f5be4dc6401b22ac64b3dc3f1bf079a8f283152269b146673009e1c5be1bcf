# Rules

This document contains a description of all rules, what they are checking for,
as well as examples of documents that break the rule and corrected
versions of the examples.

<a name="md001"></a>

## `MD001` - Heading levels should only increment by one level at a time

Tags: `headings`

Aliases: `heading-increment`

Parameters:

- `front_matter_title`: RegExp for matching title in front matter (`string`,
  default `^\s*title\s*[:=]`)

This rule is triggered when you skip heading levels in a Markdown document, for
example:

```markdown
# Heading 1

### Heading 3

We skipped out a 2nd level heading in this document
```

When using multiple heading levels, nested headings should increase by only one
level at a time:

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

## Another Heading 2

### Another Heading 3
```

If [YAML](https://en.wikipedia.org/wiki/YAML) front matter is present and
contains a `title` property (commonly used with blog posts), this rule treats
that as a top level heading and will report a violation if the actual first
heading is not a level 2 heading. To use a different property name in the
front matter, specify the text of a regular expression via the
`front_matter_title` parameter. To disable the use of front matter by this
rule, specify `""` for `front_matter_title`. When front matter is not present,
the first heading can be any level.

Rationale: Headings represent the structure of a document and can be confusing
when skipped - especially for accessibility scenarios. More information:
<https://www.w3.org/WAI/tutorials/page-structure/headings/>.

<a name="md003"></a>

## `MD003` - Heading style

Tags: `headings`

Aliases: `heading-style`

Parameters:

- `style`: Heading style (`string`, default `consistent`, values `atx` /
  `atx_closed` / `consistent` / `setext` / `setext_with_atx` /
  `setext_with_atx_closed`)

This rule is triggered when different heading styles are used in the same
document:

```markdown
# ATX style H1

## Closed ATX style H2 ##

Setext style H1
===============
```

To fix the issue, use consistent heading styles throughout the document:

```markdown
# ATX style H1

## ATX style H2
```

The `setext_with_atx` and `setext_with_atx_closed` settings allow ATX-style
headings of level 3 or more in documents with setext-style headings (which only
support level 1 and 2 headings):

```markdown
Setext style H1
===============

Setext style H2
---------------

### ATX style H3
```

Note: The configured heading style can be a specific style to require (`atx`,
`atx_closed`, `setext`, `setext_with_atx`, `setext_with_atx_closed`), or can
require that all heading styles match the first heading style via `consistent`.

Note: The placement of a horizontal rule directly below a line of text can
trigger this rule by turning that text into a level 2 setext-style heading:

```markdown
A line of text followed by a horizontal rule becomes a heading
---
```

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md004"></a>

## `MD004` - Unordered list style

Tags: `bullet`, `ul`

Aliases: `ul-style`

Parameters:

- `style`: List style (`string`, default `consistent`, values `asterisk` /
  `consistent` / `dash` / `plus` / `sublist`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when the symbols used in the document for unordered
list items do not match the configured unordered list style:

```markdown
* Item 1
+ Item 2
- Item 3
```

To fix this issue, use the configured style for list items throughout the
document:

```markdown
* Item 1
* Item 2
* Item 3
```

The configured list style can ensure all list styling is a specific symbol
(`asterisk`, `plus`, `dash`), ensure each sublist has a consistent symbol that
differs from its parent list (`sublist`), or ensure all list styles match the
first list style (`consistent`).

For example, the following is valid for the `sublist` style because the
outer-most indent uses asterisk, the middle indent uses plus, and the inner-most
indent uses dash:

```markdown
* Item 1
  + Item 2
    - Item 3
  + Item 4
* Item 4
  + Item 5
```

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md005"></a>

## `MD005` - Inconsistent indentation for list items at the same level

Tags: `bullet`, `indentation`, `ul`

Aliases: `list-indent`

Fixable: Some violations can be fixed by tooling

This rule is triggered when list items are parsed as being at the same level,
but don't have the same indentation:

```markdown
* Item 1
  * Nested Item 1
  * Nested Item 2
   * A misaligned item
```

Usually, this rule will be triggered because of a typo. Correct the indentation
for the list to fix it:

```markdown
* Item 1
  * Nested Item 1
  * Nested Item 2
  * Nested Item 3
```

Sequentially-ordered list markers are usually left-aligned such that all items
have the same starting column:

```markdown
...
8. Item
9. Item
10. Item
11. Item
...
```

This rule also supports right-alignment of list markers such that all items have
the same ending column:

```markdown
...
 8. Item
 9. Item
10. Item
11. Item
...
```

Rationale: Violations of this rule can lead to improperly rendered content.

<a name="md007"></a>

## `MD007` - Unordered list indentation

Tags: `bullet`, `indentation`, `ul`

Aliases: `ul-indent`

Parameters:

- `indent`: Spaces for indent (`integer`, default `2`)
- `start_indent`: Spaces for first level indent (when start_indented is set)
  (`integer`, default `2`)
- `start_indented`: Whether to indent the first level of the list (`boolean`,
  default `false`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when list items are not indented by the configured
number of spaces (default: 2).

Example:

```markdown
* List item
   * Nested list item indented by 3 spaces
```

Corrected Example:

```markdown
* List item
  * Nested list item indented by 2 spaces
```

Note: This rule applies to a sublist only if its parent lists are all also
unordered (otherwise, extra indentation of ordered lists interferes with the
rule).

The `start_indented` parameter allows the first level of lists to be indented by
the configured number of spaces rather than starting at zero. The `start_indent`
parameter allows the first level of lists to be indented by a different number
of spaces than the rest (ignored when `start_indented` is not set).

Rationale: Indenting by 2 spaces allows the content of a nested list to be in
line with the start of the content of the parent list when a single space is
used after the list marker. Indenting by 4 spaces is consistent with code blocks
and simpler for editors to implement. Additionally, this can be a compatibility
issue for other Markdown parsers, which require 4-space indents. More
information: [Markdown Style Guide][markdown-style-guide].

Note: See [Prettier.md](Prettier.md) for compatibility information.

[markdown-style-guide]: https://cirosantilli.com/markdown-style-guide#indentation-of-content-inside-lists

<a name="md009"></a>

## `MD009` - Trailing spaces

Tags: `whitespace`

Aliases: `no-trailing-spaces`

Parameters:

- `br_spaces`: Spaces for line break (`integer`, default `2`)
- `code_blocks`: Include code blocks (`boolean`, default `false`)
- `list_item_empty_lines`: Allow spaces for empty lines in list items
  (`boolean`, default `false`)
- `strict`: Include unnecessary breaks (`boolean`, default `false`)

Fixable: Some violations can be fixed by tooling

This rule is triggered on any lines that end with unexpected whitespace. To fix
this, remove the trailing space from the end of the line.

The `br_spaces` parameter allows an exception to this rule for a specific number
of trailing spaces, typically used to insert an explicit line break. The default
value allows 2 spaces to indicate a hard break (\<br> element). (You must set
`br_spaces` to a value >= 2 for this parameter to take effect. Setting
`br_spaces` to 1 behaves the same as 0, disallowing any trailing spaces.)

By default, trailing space is allowed in indented and fenced code blocks because
some programming languages require that. To report such instances, set the
`code_blocks` parameter to `true`.

By default, this rule will not trigger when the allowed number of spaces is
used, even when it doesn't create a hard break (for example, at the end of a
paragraph). To report such instances, set the `strict` parameter to `true`.

```markdown
Text text text
text[2 spaces]
```

Using spaces to indent blank lines inside a list item is usually not necessary,
but some parsers require it. Set the `list_item_empty_lines` parameter to `true`
to allow this (even when `strict` is `true`):

```markdown
- list item text
  [2 spaces]
  list item text
```

Rationale: Except when being used to create a line break, trailing whitespace
has no purpose and does not affect the rendering of content.

<a name="md010"></a>

## `MD010` - Hard tabs

Tags: `hard_tab`, `whitespace`

Aliases: `no-hard-tabs`

Parameters:

- `code_blocks`: Include code blocks (`boolean`, default `true`)
- `ignore_code_languages`: Fenced code languages to ignore (`string[]`, default
  `[]`)
- `spaces_per_tab`: Number of spaces for each hard tab (`integer`, default `1`)

Fixable: Some violations can be fixed by tooling

This rule is triggered by any lines that contain hard tab characters instead
of using spaces for indentation. To fix this, replace any hard tab characters
with spaces instead.

Example:

<!-- markdownlint-disable no-hard-tabs -->

```markdown
Some text

	* hard tab character used to indent the list item
```

<!-- markdownlint-restore -->

Corrected example:

```markdown
Some text

    * Spaces used to indent the list item instead
```

You have the option to exclude this rule for code blocks and spans. To do so,
set the `code_blocks` parameter to `false`. Code blocks and spans are included
by default since handling of tabs by Markdown tools can be inconsistent (e.g.,
using 4 vs. 8 spaces).

When code blocks are scanned (e.g., by default or if `code_blocks` is `true`),
the `ignore_code_languages` parameter can be set to a list of languages that
should be ignored (i.e., hard tabs will be allowed, though not required). This
makes it easier for documents to include code for languages that require hard
tabs.

By default, violations of this rule are fixed by replacing the tab with 1 space
character. To use a different number of spaces, set the `spaces_per_tab`
parameter to the desired value.

Rationale: Hard tabs are often rendered inconsistently by different editors and
can be harder to work with than spaces.

More information:

- <https://agiletribe.wordpress.com/2011/10/27/18-dont-use-tab-characters/>
- <https://www.jwz.org/doc/tabs-vs-spaces.html>
- <https://adamspiers.org/computing/why_no_tabs.html>

<a name="md011"></a>

## `MD011` - Reversed link syntax

Tags: `links`

Aliases: `no-reversed-links`

Fixable: Some violations can be fixed by tooling

This rule is triggered when text that appears to be a link is encountered, but
where the syntax appears to have been reversed (the `[]` and `()` are
reversed):

```markdown
(Incorrect link syntax)[https://www.example.com/]
```

To fix this, swap the `[]` and `()` around:

```markdown
[Correct link syntax](https://www.example.com/)
```

Note: [Markdown Extra](https://en.wikipedia.org/wiki/Markdown_Extra)-style
footnotes do not trigger this rule:

```markdown
For (example)[^1]
```

Rationale: Reversed links are not rendered as usable links.

<a name="md012"></a>

## `MD012` - Multiple consecutive blank lines

Tags: `blank_lines`, `whitespace`

Aliases: `no-multiple-blanks`

Parameters:

- `maximum`: Consecutive blank lines (`integer`, default `1`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when there are multiple consecutive blank lines in the
document:

```markdown
Some text here


Some more text here
```

To fix this, delete the offending lines:

```markdown
Some text here

Some more text here
```

Note: this rule will not be triggered if there are multiple consecutive blank
lines inside code blocks.

Note: The `maximum` parameter can be used to configure the maximum number of
consecutive blank lines.

Rationale: Except in a code block, blank lines serve no purpose and do not
affect the rendering of content.

<a name="md013"></a>

## `MD013` - Line length

Tags: `line_length`

Aliases: `line-length`

Parameters:

- `code_block_line_length`: Number of characters for code blocks (`integer`,
  default `80`)
- `code_blocks`: Include code blocks (`boolean`, default `true`)
- `heading_line_length`: Number of characters for headings (`integer`, default
  `80`)
- `headings`: Include headings (`boolean`, default `true`)
- `line_length`: Number of characters (`integer`, default `80`)
- `stern`: Stern length checking (`boolean`, default `false`)
- `strict`: Strict length checking (`boolean`, default `false`)
- `tables`: Include tables (`boolean`, default `true`)

This rule is triggered when there are lines that are longer than the
configured `line_length` (default: 80 characters). To fix this, split the line
up into multiple lines. To set a different maximum length for headings, use
`heading_line_length`. To set a different maximum length for code blocks, use
`code_block_line_length`

This rule has an exception when there is no whitespace beyond the configured
line length. This allows you to include items such as long URLs without being
forced to break them in the middle. To disable this exception, set the `strict`
parameter to `true` and an issue will be reported when any line is too long. To
warn for lines that are too long and could be fixed but allow long lines
without spaces, set the `stern` parameter to `true`.

For example (assuming normal behavior):

```markdown
IF THIS LINE IS THE MAXIMUM LENGTH
This line is okay because there are-no-spaces-beyond-that-length
This line is a violation because there are spaces beyond that length
This-line-is-okay-because-there-are-no-spaces-anywhere-within
```

In `strict` mode, the last three lines above are all violations. In `stern`
mode, the middle two lines above are both violations, but the last is okay.

You have the option to exclude this rule for code blocks, tables, or headings.
To do so, set the `code_blocks`, `tables`, or `headings` parameter(s) to false.

Code blocks are included in this rule by default since it is often a
requirement for document readability, and tentatively compatible with code
rules. Still, some languages do not lend themselves to short lines.

Lines with link/image reference definitions and standalone lines (i.e., not part
of a paragraph) with only a link/image (possibly using (strong) emphasis) are
always exempted from this rule (even in `strict` mode) because there is often no
way to split such lines without breaking the URL.

Rationale: Extremely long lines can be difficult to work with in some editors.
More information: <https://cirosantilli.com/markdown-style-guide#line-wrapping>.

<a name="md014"></a>

## `MD014` - Dollar signs used before commands without showing output

Tags: `code`

Aliases: `commands-show-output`

Fixable: Some violations can be fixed by tooling

This rule is triggered when there are code blocks showing shell commands to be
typed, and *all* of the shell commands are preceded by dollar signs ($):

<!-- markdownlint-disable commands-show-output -->

```markdown
$ ls
$ cat foo
$ less bar
```

<!-- markdownlint-restore -->

The dollar signs are unnecessary in this situation, and should not be
included:

```markdown
ls
cat foo
less bar
```

Showing output for commands preceded by dollar signs does not trigger this rule:

```markdown
$ ls
foo bar
$ cat foo
Hello world
$ cat bar
baz
```

Because some commands do not produce output, it is not a violation if *some*
commands do not have output:

```markdown
$ mkdir test
mkdir: created directory 'test'
$ ls test
```

Rationale: It is easier to copy/paste and less noisy if the dollar signs
are omitted when they are not needed. See
<https://cirosantilli.com/markdown-style-guide#dollar-signs-in-shell-code>
for more information.

<a name="md018"></a>

## `MD018` - No space after hash on atx style heading

Tags: `atx`, `headings`, `spaces`

Aliases: `no-missing-space-atx`

Fixable: Some violations can be fixed by tooling

This rule is triggered when spaces are missing after the hash characters
in an atx style heading:

```markdown
#Heading 1

##Heading 2
```

To fix this, separate the heading text from the hash character by a single
space:

```markdown
# Heading 1

## Heading 2
```

Rationale: Violations of this rule can lead to improperly rendered content.

<a name="md019"></a>

## `MD019` - Multiple spaces after hash on atx style heading

Tags: `atx`, `headings`, `spaces`

Aliases: `no-multiple-space-atx`

Fixable: Some violations can be fixed by tooling

This rule is triggered when more than one space is used to separate the
heading text from the hash characters in an atx style heading:

```markdown
#  Heading 1

##  Heading 2
```

To fix this, separate the heading text from the hash character by a single
space:

```markdown
# Heading 1

## Heading 2
```

Rationale: Extra space has no purpose and does not affect the rendering of
content.

<a name="md020"></a>

## `MD020` - No space inside hashes on closed atx style heading

Tags: `atx_closed`, `headings`, `spaces`

Aliases: `no-missing-space-closed-atx`

Fixable: Some violations can be fixed by tooling

This rule is triggered when spaces are missing inside the hash characters
in a closed atx style heading:

```markdown
#Heading 1#

##Heading 2##
```

To fix this, separate the heading text from the hash character by a single
space:

```markdown
# Heading 1 #

## Heading 2 ##
```

Note: this rule will fire if either side of the heading is missing spaces.

Rationale: Violations of this rule can lead to improperly rendered content.

<a name="md021"></a>

## `MD021` - Multiple spaces inside hashes on closed atx style heading

Tags: `atx_closed`, `headings`, `spaces`

Aliases: `no-multiple-space-closed-atx`

Fixable: Some violations can be fixed by tooling

This rule is triggered when more than one space is used to separate the
heading text from the hash characters in a closed atx style heading:

```markdown
#  Heading 1  #

##  Heading 2  ##
```

To fix this, separate the heading text from the hash character by a single
space:

```markdown
# Heading 1 #

## Heading 2 ##
```

Note: this rule will fire if either side of the heading contains multiple
spaces.

Rationale: Extra space has no purpose and does not affect the rendering of
content.

<a name="md022"></a>

## `MD022` - Headings should be surrounded by blank lines

Tags: `blank_lines`, `headings`

Aliases: `blanks-around-headings`

Parameters:

- `lines_above`: Blank lines above heading (`integer|integer[]`, default `1`)
- `lines_below`: Blank lines below heading (`integer|integer[]`, default `1`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when headings (any style) are either not preceded or not
followed by at least one blank line:

```markdown
# Heading 1
Some text

Some more text
## Heading 2
```

To fix this, ensure that all headings have a blank line both before and after
(except where the heading is at the beginning or end of the document):

```markdown
# Heading 1

Some text

Some more text

## Heading 2
```

The `lines_above` and `lines_below` parameters can be used to specify a
different number of blank lines (including `0`) above or below each heading.
If the value `-1` is used for either parameter, any number of blank lines is
allowed. To customize the number of lines above or below each heading level
individually, specify a `number[]` where values correspond to heading levels
1-6 (in order).

Notes: If `lines_above` or `lines_below` are configured to require more than one
blank line, [MD012/no-multiple-blanks](md012.md) should also be customized. This
rule checks for *at least* as many blank lines as specified; any extra blank
lines are ignored.

Rationale: Aside from aesthetic reasons, some parsers, including `kramdown`,
will not parse headings that don't have a blank line before, and will parse them
as regular text.

<a name="md023"></a>

## `MD023` - Headings must start at the beginning of the line

Tags: `headings`, `spaces`

Aliases: `heading-start-left`

Fixable: Some violations can be fixed by tooling

This rule is triggered when a heading is indented by one or more spaces:

```markdown
Some text

  # Indented heading
```

To fix this, ensure that all headings start at the beginning of the line:

```markdown
Some text

# Heading
```

Note that scenarios like block quotes "indent" the start of the line, so the
following is also correct:

```markdown
> # Heading in Block Quote
```

Rationale: Headings that don't start at the beginning of the line will not be
parsed as headings, and will instead appear as regular text.

<a name="md024"></a>

## `MD024` - Multiple headings with the same content

Tags: `headings`

Aliases: `no-duplicate-heading`

Parameters:

- `siblings_only`: Only check sibling headings (`boolean`, default `false`)

This rule is triggered if there are multiple headings in the document that have
the same text:

```markdown
# Some text

## Some text
```

To fix this, ensure that the content of each heading is different:

```markdown
# Some text

## Some more text
```

If the parameter `siblings_only` is set to `true`, duplication is allowed for
headings with different parents (as is common in changelogs):

```markdown
# Change log

## 1.0.0

### Features

## 2.0.0

### Features
```

Rationale: Some Markdown parsers generate anchors for headings based on the
heading name; headings with the same content can cause problems with that.

<a name="md025"></a>

## `MD025` - Multiple top-level headings in the same document

Tags: `headings`

Aliases: `single-h1`, `single-title`

Parameters:

- `front_matter_title`: RegExp for matching title in front matter (`string`,
  default `^\s*title\s*[:=]`)
- `level`: Heading level (`integer`, default `1`)

This rule is triggered when a top-level heading is in use (the first line of
the file is an h1 heading), and more than one h1 heading is in use in the
document:

```markdown
# Top level heading

# Another top-level heading
```

To fix, structure your document so there is a single h1 heading that is
the title for the document. Subsequent headings must be
lower-level headings (h2, h3, etc.):

```markdown
# Title

## Heading

## Another heading
```

Note: The `level` parameter can be used to change the top-level (ex: to h2) in
cases where an h1 is added externally.

If [YAML](https://en.wikipedia.org/wiki/YAML) front matter is present and
contains a `title` property (commonly used with blog posts), this rule treats
that as a top level heading and will report a violation for any subsequent
top-level headings. To use a different property name in the front matter,
specify the text of a regular expression via the `front_matter_title` parameter.
To disable the use of front matter by this rule, specify `""` for
`front_matter_title`.

Rationale: A top-level heading is an h1 on the first line of the file, and
serves as the title for the document. If this convention is in use, then there
can not be more than one title for the document, and the entire document should
be contained within this heading.

<a name="md026"></a>

## `MD026` - Trailing punctuation in heading

Tags: `headings`

Aliases: `no-trailing-punctuation`

Parameters:

- `punctuation`: Punctuation characters (`string`, default `.,;:!。，；：！`)

Fixable: Some violations can be fixed by tooling

This rule is triggered on any heading that has one of the specified normal or
full-width punctuation characters as the last character in the line:

```markdown
# This is a heading.
```

To fix this, remove the trailing punctuation:

```markdown
# This is a heading
```

Note: The `punctuation` parameter can be used to specify what characters count
as punctuation at the end of a heading. For example, you can change it to
`".,;:"` to allow headings that end with an exclamation point. `?` is
allowed by default because of how common it is in headings of FAQ-style
documents. Setting the `punctuation` parameter to `""` allows all characters -
and is equivalent to disabling the rule.

Note: The trailing semicolon of [HTML entity references][html-entity-references]
like `&copy;`, `&#169;`, and `&#x000A9;` is ignored by this rule.

Rationale: Headings are not meant to be full sentences. More information:
[Punctuation at the end of headers][end-punctuation].

[end-punctuation]: https://cirosantilli.com/markdown-style-guide#punctuation-at-the-end-of-headers
[html-entity-references]: https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references

<a name="md027"></a>

## `MD027` - Multiple spaces after blockquote symbol

Tags: `blockquote`, `indentation`, `whitespace`

Aliases: `no-multiple-space-blockquote`

Parameters:

- `list_items`: Include list items (`boolean`, default `true`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when blockquotes have more than one space after the
blockquote (`>`) symbol:

```markdown
>  This is a blockquote with bad indentation
>  there should only be one.
```

To fix, remove any extraneous space:

```markdown
> This is a blockquote with correct
> indentation.
```

Inferring intended list indentation within a blockquote can be challenging;
setting the `list_items` parameter to `false` disables this rule for ordered
and unordered list items.

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md028"></a>

## `MD028` - Blank line inside blockquote

Tags: `blockquote`, `whitespace`

Aliases: `no-blanks-blockquote`

This rule is triggered when two blockquote blocks are separated by nothing
except for a blank line:

```markdown
> This is a blockquote
> which is immediately followed by

> this blockquote. Unfortunately
> In some parsers, these are treated as the same blockquote.
```

To fix this, ensure that any blockquotes that are right next to each other
have some text in between:

```markdown
> This is a blockquote.

And Jimmy also said:

> This too is a blockquote.
```

Alternatively, if they are supposed to be the same quote, then add the
blockquote symbol at the beginning of the blank line:

```markdown
> This is a blockquote.
>
> This is the same blockquote.
```

Rationale: Some Markdown parsers will treat two blockquotes separated by one
or more blank lines as the same blockquote, while others will treat them as
separate blockquotes.

<a name="md029"></a>

## `MD029` - Ordered list item prefix

Tags: `ol`

Aliases: `ol-prefix`

Parameters:

- `style`: List style (`string`, default `one_or_ordered`, values `one` /
  `one_or_ordered` / `ordered` / `zero`)

Fixable: Some violations can be fixed by tooling

This rule is triggered for ordered lists that do not either start with '1.' or
do not have a prefix that increases in numerical order (depending on the
configured style). The less-common pattern of using '0.' as a first prefix or
for all prefixes is also supported.

Example valid list if the style is configured as 'one':

```markdown
1. Do this.
1. Do that.
1. Done.
```

Examples of valid lists if the style is configured as 'ordered':

```markdown
1. Do this.
2. Do that.
3. Done.
```

```markdown
0. Do this.
1. Do that.
2. Done.
```

All three examples are valid when the style is configured as 'one_or_ordered'.

Example valid list if the style is configured as 'zero':

```markdown
0. Do this.
0. Do that.
0. Done.
```

Example invalid list for all styles:

```markdown
1. Do this.
3. Done.
```

This rule supports 0-prefixing ordered list items for uniform indentation:

```markdown
...
08. Item
09. Item
10. Item
11. Item
...
```

Note: This rule will report violations for cases like the following where an
improperly-indented code block (or similar) appears between two list items and
"breaks" the list in two:

<!-- markdownlint-disable code-fence-style -->

~~~markdown
1. First list

```text
Code block
```

1. Second list
~~~

The fix is to indent the code block so it becomes part of the preceding list
item as intended:

~~~markdown
1. First list

   ```text
   Code block
   ```

2. Still first list
~~~

<!-- markdownlint-restore -->

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md030"></a>

## `MD030` - Spaces after list markers

Tags: `ol`, `ul`, `whitespace`

Aliases: `list-marker-space`

Parameters:

- `ol_multi`: Spaces for multi-line ordered list items (`integer`, default `1`)
- `ol_single`: Spaces for single-line ordered list items (`integer`, default
  `1`)
- `ul_multi`: Spaces for multi-line unordered list items (`integer`, default
  `1`)
- `ul_single`: Spaces for single-line unordered list items (`integer`, default
  `1`)

Fixable: Some violations can be fixed by tooling

This rule checks for the number of spaces between a list marker (e.g. '`-`',
'`*`', '`+`' or '`1.`') and the text of the list item.

The number of spaces checked for depends on the document style in use, but the
default is 1 space after any list marker:

```markdown
* Foo
* Bar
* Baz

1. Foo
1. Bar
1. Baz

1. Foo
   * Bar
1. Baz
```

A document style may change the number of spaces after unordered list items
and ordered list items independently, as well as based on whether the content
of every item in the list consists of a single paragraph or multiple
paragraphs (including sub-lists and code blocks).

For example, the style guide at
<https://cirosantilli.com/markdown-style-guide#spaces-after-list-marker>
specifies that 1 space after the list marker should be used if every item in
the list fits within a single paragraph, but to use 2 or 3 spaces (for ordered
and unordered lists respectively) if there are multiple paragraphs of content
inside the list:

```markdown
* Foo
* Bar
* Baz
```

vs.

```markdown
*   Foo

    Second paragraph

*   Bar
```

or

```markdown
1.  Foo

    Second paragraph

1.  Bar
```

To fix this, ensure the correct number of spaces are used after the list marker
for your selected document style.

Rationale: Violations of this rule can lead to improperly rendered content.

Note: See [Prettier.md](Prettier.md) for compatibility information.

<a name="md031"></a>

## `MD031` - Fenced code blocks should be surrounded by blank lines

Tags: `blank_lines`, `code`

Aliases: `blanks-around-fences`

Parameters:

- `list_items`: Include list items (`boolean`, default `true`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when fenced code blocks are either not preceded or not
followed by a blank line:

````markdown
Some text
```
Code block
```

```
Another code block
```
Some more text
````

To fix this, ensure that all fenced code blocks have a blank line both before
and after (except where the block is at the beginning or end of the document):

````markdown
Some text

```
Code block
```

```
Another code block
```

Some more text
````

Set the `list_items` parameter to `false` to disable this rule for list items.
Disabling this behavior for lists can be useful if it is necessary to create a
[tight](https://spec.commonmark.org/0.29/#tight) list containing a code fence.

Rationale: Aside from aesthetic reasons, some parsers, including kramdown, will
not parse fenced code blocks that don't have blank lines before and after them.

<a name="md032"></a>

## `MD032` - Lists should be surrounded by blank lines

Tags: `blank_lines`, `bullet`, `ol`, `ul`

Aliases: `blanks-around-lists`

Fixable: Some violations can be fixed by tooling

This rule is triggered when lists (of any kind) are either not preceded or not
followed by a blank line:

```markdown
Some text
* List item
* List item

1. List item
2. List item
***
```

In the first case above, text immediately precedes the unordered list. In the
second case above, a thematic break immediately follows the ordered list. To fix
violations of this rule, ensure that all lists have a blank line both before and
after (except when the list is at the very beginning or end of the document):

```markdown
Some text

* List item
* List item

1. List item
2. List item

***
```

Note that the following case is **not** a violation of this rule:

```markdown
1. List item
   More item 1
2. List item
More item 2
```

Although it is not indented, the text "More item 2" is referred to as a
[lazy continuation line][lazy-continuation] and considered part of the second
list item.

Rationale: In addition to aesthetic reasons, some parsers, including kramdown,
will not parse lists that don't have blank lines before and after them.

[lazy-continuation]: https://spec.commonmark.org/0.30/#lazy-continuation-line

<a name="md033"></a>

## `MD033` - Inline HTML

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

<a name="md034"></a>

## `MD034` - Bare URL used

Tags: `links`, `url`

Aliases: `no-bare-urls`

Fixable: Some violations can be fixed by tooling

This rule is triggered whenever a URL or email address appears without
surrounding angle brackets:

```markdown
For more info, visit https://www.example.com/ or email user@example.com.
```

To fix this, add angle brackets around the URL or email address:

```markdown
For more info, visit <https://www.example.com/> or email <user@example.com>.
```

If a URL or email address contains non-ASCII characters, it may be not be
handled as intended even when angle brackets are present. In such cases,
[percent-encoding](https://en.m.wikipedia.org/wiki/Percent-encoding) can be used
to comply with the required syntax for URL and email.

Note: To include a bare URL or email without it being converted into a link,
wrap it in a code span:

```markdown
Not a clickable link: `https://www.example.com`
```

Note: The following scenario does not trigger this rule because it could be a
shortcut link:

```markdown
[https://www.example.com]
```

Note: The following syntax triggers this rule because the nested link could be
a shortcut link (which takes precedence):

```markdown
[text [shortcut] text](https://example.com)
```

To avoid this, escape both inner brackets:

```markdown
[link \[text\] link](https://example.com)
```

Rationale: Without angle brackets, a bare URL or email isn't converted into a
link by some Markdown parsers.

<a name="md035"></a>

## `MD035` - Horizontal rule style

Tags: `hr`

Aliases: `hr-style`

Parameters:

- `style`: Horizontal rule style (`string`, default `consistent`)

This rule is triggered when inconsistent styles of horizontal rules are used
in the document:

```markdown
---

- - -

***

* * *

****
```

To fix this, use the same horizontal rule everywhere:

```markdown
---

---
```

The configured style can ensure all horizontal rules use a specific string or it
can ensure all horizontal rules match the first horizontal rule (`consistent`).

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md036"></a>

## `MD036` - Emphasis used instead of a heading

Tags: `emphasis`, `headings`

Aliases: `no-emphasis-as-heading`

Parameters:

- `punctuation`: Punctuation characters (`string`, default `.,;:!?。，；：！？`)

This check looks for instances where emphasized (i.e. bold or italic) text is
used to separate sections, where a heading should be used instead:

```markdown
**My document**

Lorem ipsum dolor sit amet...

_Another section_

Consectetur adipiscing elit, sed do eiusmod.
```

To fix this, use Markdown headings instead of emphasized text to denote
sections:

```markdown
# My document

Lorem ipsum dolor sit amet...

## Another section

Consectetur adipiscing elit, sed do eiusmod.
```

Note: This rule looks for single-line paragraphs that consist entirely
of emphasized text. It won't fire on emphasis used within regular text,
multi-line emphasized paragraphs, or paragraphs ending in punctuation
(normal or full-width). Similarly to rule MD026, you can configure what
characters are recognized as punctuation.

Rationale: Using emphasis instead of a heading prevents tools from inferring
the structure of a document. More information:
<https://cirosantilli.com/markdown-style-guide#emphasis-vs-headers>.

<a name="md037"></a>

## `MD037` - Spaces inside emphasis markers

Tags: `emphasis`, `whitespace`

Aliases: `no-space-in-emphasis`

Fixable: Some violations can be fixed by tooling

This rule is triggered when emphasis markers (bold, italic) are used, but they
have spaces between the markers and the text:

```markdown
Here is some ** bold ** text.

Here is some * italic * text.

Here is some more __ bold __ text.

Here is some more _ italic _ text.
```

To fix this, remove the spaces around the emphasis markers:

```markdown
Here is some **bold** text.

Here is some *italic* text.

Here is some more __bold__ text.

Here is some more _italic_ text.
```

Rationale: Emphasis is only parsed as such when the asterisks/underscores
aren't surrounded by spaces. This rule attempts to detect where
they were surrounded by spaces, but it appears that emphasized text was
intended by the author.

<a name="md038"></a>

## `MD038` - Spaces inside code span elements

Tags: `code`, `whitespace`

Aliases: `no-space-in-code`

Fixable: Some violations can be fixed by tooling

This rule is triggered for code spans containing content with unnecessary space
next to the beginning or ending backticks:

```markdown
`some text `

` some text`

`   some text   `
```

To fix this, remove the extra space characters from the beginning and ending:

```markdown
`some text`
```

Note: A single leading *and* trailing space is allowed by the specification and
trimmed by the parser to support code spans that begin or end with a backtick:

```markdown
`` `backticks` ``

`` backtick` ``
```

Note: When single-space padding is present in the input, it will be preserved
(even if unnecessary):

```markdown
` code `
```

Note: Code spans containing only spaces are allowed by the specification and are
also preserved:

```markdown
` `

`   `
```

Rationale: Violations of this rule are usually unintentional and can lead to
improperly-rendered content.

<a name="md039"></a>

## `MD039` - Spaces inside link text

Tags: `links`, `whitespace`

Aliases: `no-space-in-links`

Fixable: Some violations can be fixed by tooling

This rule is triggered on links that have spaces surrounding the link text:

```markdown
[ a link ](https://www.example.com/)
```

To fix this, remove the spaces surrounding the link text:

```markdown
[a link](https://www.example.com/)
```

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md040"></a>

## `MD040` - Fenced code blocks should have a language specified

Tags: `code`, `language`

Aliases: `fenced-code-language`

Parameters:

- `allowed_languages`: List of languages (`string[]`, default `[]`)
- `language_only`: Require language only (`boolean`, default `false`)

This rule is triggered when fenced code blocks are used, but a language isn't
specified:

````markdown
```
#!/bin/bash
echo Hello world
```
````

To fix this, add a language specifier to the code block:

````markdown
```bash
#!/bin/bash
echo Hello world
```
````

To display a code block without syntax highlighting, use:

````markdown
```text
Plain text in a code block
```
````

You can configure the `allowed_languages` parameter to specify a list of
languages code blocks could use. Languages are case sensitive. The default value
is `[]` which means any language specifier is valid.

You can prevent extra data from being present in the info string of fenced code
blocks. To do so, set the `language_only` parameter to `true`.

<!-- markdownlint-disable-next-line no-space-in-code -->
Info strings with leading/trailing whitespace (ex: `js `) or other content (ex:
`ruby startline=3`) will trigger this rule.

Rationale: Specifying a language improves content rendering by using the
correct syntax highlighting for code. More information:
<https://cirosantilli.com/markdown-style-guide#option-code-fenced>.

<a name="md041"></a>

## `MD041` - First line in a file should be a top-level heading

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

<a name="md042"></a>

## `MD042` - No empty links

Tags: `links`

Aliases: `no-empty-links`

This rule is triggered when an empty link is encountered:

```markdown
[an empty link]()
```

To fix the violation, provide a destination for the link:

```markdown
[a valid link](https://example.com/)
```

Empty fragments will trigger this rule:

```markdown
[an empty fragment](#)
```

But non-empty fragments will not:

```markdown
[a valid fragment](#fragment)
```

Rationale: Empty links do not lead anywhere and therefore don't function as
links.

<a name="md043"></a>

## `MD043` - Required heading structure

Tags: `headings`

Aliases: `required-headings`

Parameters:

- `headings`: List of headings (`string[]`, default `[]`)
- `match_case`: Match case of headings (`boolean`, default `false`)

This rule is triggered when the headings in a file do not match the array of
headings passed to the rule. It can be used to enforce a standard heading
structure for a set of files.

To require exactly the following structure:

```markdown
# Heading
## Item
### Detail
```

Set the `headings` parameter to:

```json
[
    "# Heading",
    "## Item",
    "### Detail"
]
```

To allow optional headings as with the following structure:

```markdown
# Heading
## Item
### Detail (optional)
## Foot
### Notes (optional)
```

Use the special value `"*"` meaning "zero or more unspecified headings" or the
special value `"+"` meaning "one or more unspecified headings" and set the
`headings` parameter to:

```json
[
    "# Heading",
    "## Item",
    "*",
    "## Foot",
    "*"
]
```

To allow a single required heading to vary as with a project name:

```markdown
# Project Name
## Description
## Examples
```

Use the special value `"?"` meaning "exactly one unspecified heading":

```json
[
    "?",
    "## Description",
    "## Examples"
]
```

When an error is detected, this rule outputs the line number of the first
problematic heading (otherwise, it outputs the last line number of the file).

Note that while the `headings` parameter uses the "## Text" ATX heading style
for simplicity, a file may use any supported heading style.

By default, the case of headings in the document is not required to match that
of `headings`. To require that case match exactly, set the `match_case`
parameter to `true`.

Rationale: Projects may wish to enforce a consistent document structure across
a set of similar content.

<a name="md044"></a>

## `MD044` - Proper names should have the correct capitalization

Tags: `spelling`

Aliases: `proper-names`

Parameters:

- `code_blocks`: Include code blocks (`boolean`, default `true`)
- `html_elements`: Include HTML elements (`boolean`, default `true`)
- `names`: List of proper names (`string[]`, default `[]`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when any of the strings in the `names` array do not have
the specified capitalization. It can be used to enforce a standard letter case
for the names of projects and products.

For example, the language "JavaScript" is usually written with both the 'J' and
'S' capitalized - though sometimes the 's' or 'j' appear in lower-case. To
enforce the proper capitalization, specify the desired letter case in the
`names` array:

```json
[
    "JavaScript"
]
```

Sometimes a proper name is capitalized differently in certain contexts. In such
cases, add both forms to the `names` array:

```json
[
    "GitHub",
    "github.com"
]
```

Set the `code_blocks` parameter to `false` to disable this rule for code blocks
and spans. Set the `html_elements` parameter to `false` to disable this rule
for HTML elements and attributes (such as when using a proper name as part of
a path for `a`/`href` or `img`/`src`).

Rationale: Incorrect capitalization of proper names is usually a mistake.

<a name="md045"></a>

## `MD045` - Images should have alternate text (alt text)

Tags: `accessibility`, `images`

Aliases: `no-alt-text`

This rule reports a violation when an image is missing alternate text (alt text)
information.

Alternate text is commonly specified inline as:

```markdown
![Alternate text](image.jpg)
```

Or with reference syntax as:

```markdown
![Alternate text][ref]

...

[ref]: image.jpg "Optional title"
```

Or with HTML as:

```html
<img src="image.jpg" alt="Alternate text" />
```

Note: If the [HTML `aria-hidden` attribute][aria-hidden] is used to hide the
image from assistive technology, this rule does not report a violation:

```html
<img src="image.jpg" aria-hidden="true" />
```

Guidance for writing alternate text is available from the [W3C][w3c],
[Wikipedia][wikipedia], and [other locations][phase2technology].

Rationale: Alternate text is important for accessibility and describes the
content of an image for people who may not be able to see it.

[aria-hidden]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden
[phase2technology]: https://www.phase2technology.com/blog/no-more-excuses
[w3c]: https://www.w3.org/WAI/alt/
[wikipedia]: https://en.wikipedia.org/wiki/Alt_attribute

<a name="md046"></a>

## `MD046` - Code block style

Tags: `code`

Aliases: `code-block-style`

Parameters:

- `style`: Block style (`string`, default `consistent`, values `consistent` /
  `fenced` / `indented`)

This rule is triggered when unwanted or different code block styles are used in
the same document.

In the default configuration this rule reports a violation for the following
document:

<!-- markdownlint-disable code-block-style -->

    Some text.

        # Indented code

    More text.

    ```ruby
    # Fenced code
    ```

    More text.

<!-- markdownlint-restore -->

To fix violations of this rule, use a consistent style (either indenting or code
fences).

The configured code block style can be specific (`fenced`, `indented`) or can
require all code blocks match the first code block (`consistent`).

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md047"></a>

## `MD047` - Files should end with a single newline character

Tags: `blank_lines`

Aliases: `single-trailing-newline`

Fixable: Some violations can be fixed by tooling

This rule is triggered when there is not a single newline character at the end
of a file.

An example that triggers the rule:

```markdown
# Heading

This file ends without a newline.[EOF]
```

To fix the violation, add a newline character to the end of the file:

```markdown
# Heading

This file ends with a newline.
[EOF]
```

Rationale: Some programs have trouble with files that do not end with a newline.

More information: [What's the point in adding a new line to the end of a
file?][stack-exchange]

[stack-exchange]: https://unix.stackexchange.com/questions/18743/whats-the-point-in-adding-a-new-line-to-the-end-of-a-file

<a name="md048"></a>

## `MD048` - Code fence style

Tags: `code`

Aliases: `code-fence-style`

Parameters:

- `style`: Code fence style (`string`, default `consistent`, values `backtick`
  / `consistent` / `tilde`)

This rule is triggered when the symbols used in the document for fenced code
blocks do not match the configured code fence style:

````markdown
```ruby
# Fenced code
```

~~~ruby
# Fenced code
~~~
````

To fix this issue, use the configured code fence style throughout the
document:

````markdown
```ruby
# Fenced code
```

```ruby
# Fenced code
```
````

The configured code fence style can be a specific symbol to use (`backtick`,
`tilde`) or it can require all code fences match the first code fence
(`consistent`).

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md049"></a>

## `MD049` - Emphasis style

Tags: `emphasis`

Aliases: `emphasis-style`

Parameters:

- `style`: Emphasis style (`string`, default `consistent`, values `asterisk` /
  `consistent` / `underscore`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when the symbols used in the document for emphasis do not
match the configured emphasis style:

```markdown
*Text*
_Text_
```

To fix this issue, use the configured emphasis style throughout the document:

```markdown
*Text*
*Text*
```

The configured emphasis style can be a specific symbol to use (`asterisk`,
`underscore`) or can require all emphasis matches the first emphasis
(`consistent`).

Note: Emphasis within a word is restricted to `asterisk` in order to avoid
unwanted emphasis for words containing internal underscores like_this_one.

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md050"></a>

## `MD050` - Strong style

Tags: `emphasis`

Aliases: `strong-style`

Parameters:

- `style`: Strong style (`string`, default `consistent`, values `asterisk` /
  `consistent` / `underscore`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when the symbols used in the document for strong do not
match the configured strong style:

```markdown
**Text**
__Text__
```

To fix this issue, use the configured strong style throughout the document:

```markdown
**Text**
**Text**
```

The configured strong style can be a specific symbol to use (`asterisk`,
`underscore`) or can require all strong matches the first strong (`consistent`).

Note: Emphasis within a word is restricted to `asterisk` in order to avoid
unwanted emphasis for words containing internal underscores like__this__one.

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md051"></a>

## `MD051` - Link fragments should be valid

Tags: `links`

Aliases: `link-fragments`

Parameters:

- `ignore_case`: Ignore case of fragments (`boolean`, default `false`)
- `ignored_pattern`: Pattern for ignoring additional fragments (`string`,
  default ``)

Fixable: Some violations can be fixed by tooling

This rule is triggered when a link fragment does not match any of the fragments
that are automatically generated for headings in a document:

```markdown
# Heading Name

[Link](#fragment)
```

To fix this issue, change the link fragment to reference an existing heading's
generated name (see below):

```markdown
# Heading Name

[Link](#heading-name)
```

For consistency, this rule requires fragments to exactly match the [GitHub
heading algorithm][github-heading-algorithm] which converts letters to
lowercase. Therefore, the following example is reported as a violation:

```markdown
# Heading Name

[Link](#Heading-Name)
```

To ignore case when comparing fragments with heading names, the `ignore_case`
parameter can be set to `true`. In this configuration, the previous example is
not reported as a violation.

Alternatively, some platforms allow the syntax `{#named-anchor}` to be used
within a heading to provide a specific name (consisting of only lower-case
letters, numbers, `-`, and `_`):

```markdown
# Heading Name {#custom-name}

[Link](#custom-name)
```

Alternatively, any HTML tag with an `id` attribute or an `a` tag with a `name`
attribute can be used to define a fragment:

```markdown
<a id="bookmark"></a>

[Link](#bookmark)
```

An `a` tag can be useful in scenarios where a heading is not appropriate or for
control over the text of the fragment identifier.

[HTML links to `#top` scroll to the top of a document][html-top-fragment]. This
rule allows that syntax (using lower-case for consistency):

```markdown
[Link](#top)
```

This rule also recognizes the custom fragment syntax used by GitHub to highlight
[specific content in a document][github-linking-to-content].

For example, this link to line 20:

```markdown
[Link](#L20)
```

And this link to content starting within line 19 running into line 21:

```markdown
[Link](#L19C5-L21C11)
```

Some Markdown generators dynamically create and insert headings when building
documents, for example by combining a fixed prefix like `figure-` and an
incrementing numeric counter. To ignore such generated fragments, set the
`ignored_pattern` [regular expression][RegEx] parameter to a pattern that
matches (e.g., `^figure-`).

Rationale: [GitHub section links][github-section-links] are created
automatically for every heading when Markdown content is displayed on GitHub.
This makes it easy to link directly to different sections within a document.
However, section links change if headings are renamed or removed. This rule
helps identify broken section links within a document.

Note: Section links are **not** part of the CommonMark specification; this rule
enforces the [GitHub heading algorithm][github-heading-algorithm]:

1. Convert text to lowercase
2. Remove punctuation characters
3. Convert spaces to dashes
4. Append an incrementing integer (as needed for uniqueness)
5. [URI-encode][encodeURIComponent] the result

[encodeURIComponent]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
[github-section-links]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#section-links
[github-heading-algorithm]: https://github.com/gjtorikian/html-pipeline/blob/f13a1534cb650ba17af400d1acd3a22c28004c09/lib/html/pipeline/toc_filter.rb
[github-linking-to-content]: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet#linking-to-markdown
[html-top-fragment]: https://html.spec.whatwg.org/multipage/browsing-the-web.html#scrolling-to-a-fragment
[RegEx]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

<a name="md052"></a>

## `MD052` - Reference links and images should use a label that is defined

Tags: `images`, `links`

Aliases: `reference-links-images`

Parameters:

- `ignored_labels`: Ignored link labels (`string[]`, default `["x"]`)
- `shortcut_syntax`: Include shortcut syntax (`boolean`, default `false`)

Links and images in Markdown can provide the link destination or image source
at the time of use or can define it elsewhere and use a label for reference.
The reference format is convenient for keeping paragraph text clutter-free
and makes it easy to reuse the same URL in multiple places.

There are three kinds of reference links and images:

```markdown
Full: [text][label]
Collapsed: [label][]
Shortcut: [label]

Full: ![text][image]
Collapsed: ![image][]
Shortcut: ![image]

[label]: https://example.com/label
[image]: https://example.com/image
```

A link or image renders correctly when the corresponding label is defined, but
displays as text with brackets when the label is not present. By default, this
rule warns of undefined labels for "full" and "collapsed" reference syntax but
not for "shortcut" syntax because it is ambiguous.

The text `[example]` could be a shortcut link or the text "example" in brackets,
so "shortcut" syntax is ignored by default. To include "shortcut" syntax, set
the `include_shortcut` parameter to `true`. Note that doing so produces warnings
for *all* text in the document that *could* be a shortcut. If bracketed text is
intentional, brackets can be escaped with the `\` character: `\[example\]`.

If there are link labels that are deliberately unreferenced, they can be ignored
by setting the `ignored_labels` parameter to the list of strings to ignore. The
default value of this parameter ignores the checkbox syntax used by
[GitHub Flavored Markdown task list items][gfm-tasklist]:

```markdown
- [x] Checked task list item
```

[gfm-tasklist]: https://github.github.com/gfm/#task-list-items-extension-

<a name="md053"></a>

## `MD053` - Link and image reference definitions should be needed

Tags: `images`, `links`

Aliases: `link-image-reference-definitions`

Parameters:

- `ignored_definitions`: Ignored definitions (`string[]`, default `["//"]`)

Fixable: Some violations can be fixed by tooling

Links and images in Markdown can provide the link destination or image source
at the time of use or can use a label to reference a definition elsewhere in
the document. The latter reference format is convenient for keeping paragraph
text clutter-free and makes it easy to reuse the same URL in multiple places.

Because link and image reference definitions are located separately from
where they are used, there are two scenarios where a definition can be
unnecessary:

1. If a label is not referenced by any link or image in a document, that
   definition is unused and can be deleted.
2. If a label is defined multiple times in a document, the first definition is
   used and the others can be deleted.

This rule considers a reference definition to be used if any link or image
reference has the corresponding label. The "full", "collapsed", and "shortcut"
formats are all supported.

If there are reference definitions that are deliberately unreferenced, they can
be ignored by setting the `ignored_definitions` parameter to the list of strings
to ignore. The default value of this parameter ignores the following convention
for adding non-HTML comments to Markdown:

```markdown
[//]: # (This behaves like a comment)
```

<a name="md054"></a>

## `MD054` - Link and image style

Tags: `images`, `links`

Aliases: `link-image-style`

Parameters:

- `autolink`: Allow autolinks (`boolean`, default `true`)
- `collapsed`: Allow collapsed reference links and images (`boolean`, default
  `true`)
- `full`: Allow full reference links and images (`boolean`, default `true`)
- `inline`: Allow inline links and images (`boolean`, default `true`)
- `shortcut`: Allow shortcut reference links and images (`boolean`, default
  `true`)
- `url_inline`: Allow URLs as inline links (`boolean`, default `true`)

Fixable: Some violations can be fixed by tooling

Links and images in Markdown can provide the link destination or image source at
the time of use or can use a label to reference a definition elsewhere in the
document. The three reference formats are convenient for keeping paragraph text
clutter-free and make it easy to reuse the same URL in multiple places.

By default, this rule allows all link/image styles.

Setting the `autolink` parameter to `false` disables autolinks:

```markdown
<https://example.com>
```

Setting the `inline` parameter to `false` disables inline links and images:

```markdown
[link](https://example.com)

![image](https://example.com)
```

Setting the `full` parameter to `false` disables full reference links and
images:

```markdown
[link][url]

![image][url]

[url]: https://example.com
```

Setting the `collapsed` parameter to `false` disables collapsed reference links
and images:

```markdown
[url][]

![url][]

[url]: https://example.com
```

Setting the `shortcut` parameter to `false` disables shortcut reference links
and images:

```markdown
[url]

![url]

[url]: https://example.com
```

To fix violations of this rule, change the link or image to use an allowed
style. This rule can automatically fix violations when a link or image can be
converted to the `inline` style (preferred) or a link can be converted to the
`autolink` style (which does not support images and must be an absolute URL).
This rule does *not* fix scenarios that require converting a link or image to
the `full`, `collapsed`, or `shortcut` reference styles because that involves
naming the reference and determining where to insert it in the document.

Setting the `url_inline` parameter to `false` prevents the use of inline links
with the same absolute URL text/destination and no title because such links can
be converted to autolinks:

```markdown
[https://example.com](https://example.com)
```

To fix `url_inline` violations, use the simpler autolink syntax instead:

```markdown
<https://example.com>
```

Rationale: Consistent formatting makes it easier to understand a document.
Autolinks are concise, but appear as URLs which can be long and confusing.
Inline links and images can include descriptive text, but take up more space in
Markdown form. Reference links and images can be easier to read and manipulate
in Markdown form, but require a separate link reference definition.

<a name="md055"></a>

## `MD055` - Table pipe style

Tags: `table`

Aliases: `table-pipe-style`

Parameters:

- `style`: Table pipe style (`string`, default `consistent`, values
  `consistent` / `leading_and_trailing` / `leading_only` /
  `no_leading_or_trailing` / `trailing_only`)

This rule is triggered when a [GitHub Flavored Markdown table][gfm-table-055]
is inconsistent about its use of leading and trailing pipe characters (`|`).

By default (`consistent` style), the header row of the first table in a document
is used to determine the style that is enforced for every table in the document.
A specific style can be used instead (`leading_and_trailing`, `leading_only`,
`no_leading_or_trailing`, `trailing_only`).

This table's header row has leading and trailing pipes, but its delimiter row is
missing the trailing pipe and its first row of cells is missing the leading
pipe:

```markdown
| Header | Header |
| ------ | ------
  Cell   | Cell   |
```

To fix these issues, make sure there is a pipe character at the beginning and
end of every row:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
```

Note that text immediately following a table (i.e., not separated by an empty
line) is treated as part of the table (per the specification) and may also
trigger this rule:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
This text is part of the table
```

Rationale: Some parsers have difficulty with tables that are missing their
leading or trailing pipe characters. The use of leading/trailing pipes can also
help provide visual clarity.

[gfm-table-055]: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables

<a name="md056"></a>

## `MD056` - Table column count

Tags: `table`

Aliases: `table-column-count`

This rule is triggered when a [GitHub Flavored Markdown table][gfm-table-056]
does not have the same number of cells in every row.

This table's second data row has too few cells and its third data row has too
many cells:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
| Cell   |
| Cell   | Cell   | Cell   |
```

To fix these issues, ensure every row has the same number of cells:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
| Cell   | Cell   |
| Cell   | Cell   |
```

Note that a table's header row and its delimiter row must have the same number
of cells or it will not be recognized as a table (per specification).

Rationale: Extra cells in a row are usually not shown, so their data is lost.
Missing cells in a row create holes in the table and suggest an omission.

[gfm-table-056]: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables

<a name="md058"></a>

## `MD058` - Tables should be surrounded by blank lines

Tags: `table`

Aliases: `blanks-around-tables`

Fixable: Some violations can be fixed by tooling

This rule is triggered when tables are either not preceded or not followed by a
blank line:

```markdown
Some text
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
> Blockquote
```

To fix violations of this rule, ensure that all tables have a blank line both
before and after (except when the table is at the very beginning or end of the
document):

```markdown
Some text

| Header | Header |
| ------ | ------ |
| Cell   | Cell   |

> Blockquote
```

Note that text immediately following a table (i.e., not separated by an empty
line) is treated as part of the table (per the specification) and will not
trigger this rule:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
This text is part of the table and the next line is blank

Some text
```

Rationale: In addition to aesthetic reasons, some parsers will incorrectly parse
tables that don't have blank lines before and after them.

<a name="md059"></a>

## `MD059` - Link text should be descriptive

Tags: `accessibility`, `links`

Aliases: `descriptive-link-text`

Parameters:

- `prohibited_texts`: Prohibited link texts (`string[]`, default `["click
  here","here","link","more"]`)

This rule is triggered when a link has generic text like `[click here](...)` or
`[link](...)`.

Link text should be descriptive and communicate the purpose of the link (e.g.,
`[Download the budget document](...)` or `[CommonMark Specification](...)`).
This is especially important for screen readers which sometimes present links
without context.

By default, this rule prohibits a small number of common English words/phrases.
To customize that list of words/phrases, set the `prohibited_texts` parameter to
an `Array` of `string`s.

Note: For languages other than English, use the `prohibited_texts` parameter to
customize the list for that language. It is *not* a goal for this rule to have
translations for every language.

Note: This rule checks Markdown links; HTML links are ignored.

More information:

- <https://webaim.org/techniques/hypertext/>
- <https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html>

<a name="md060"></a>

## `MD060` - Table column style

Tags: `table`

Aliases: `table-column-style`

Parameters:

- `aligned_delimiter`: Aligned delimiter columns (`boolean`, default `false`)
- `style`: Table column style (`string`, default `any`, values `aligned` /
  `any` / `compact` / `tight`)

This rule is triggered when the column separator pipe characters (`|`) of a
[GitHub Flavored Markdown table][gfm-table-060] are used inconsistently.

This rule recognizes three table column styles based on popular use.

Style `aligned` ensures pipe characters are vertically aligned:

```markdown
| Character | Meaning |
| --------- | ------- |
| Y         | Yes     |
| N         | No      |
```

The `aligned` style ignores cell content, so the following is also valid:

```markdown
| Character | Meaning |
|-----------|---------|
|     Y     |     Yes |
|     N     |      No |
```

Style `compact` avoids extra padding with a single space around cell content:

```markdown
| Character | Meaning |
| --- | --- |
| Y | Yes |
| N | No |
```

Style `tight` uses no padding at all for cell content:

```markdown
|Character|Meaning|
|---|---|
|Y|Yes|
|N|No|
```

When this rule's `style` parameter is set to `aligned`, `compact`, or `tight`,
every table must match the corresponding pattern and any violations will be
reported. By default, or when the `any` style is used, each table is analyzed to
see if it satisfies any supported style. If so, no violations are reported. If
not, violations are be reported for whichever style would produce the *fewest*
issues (i.e., whichever style is the closest match).

Setting the `aligned_delimiter` parameter to `true` requires pipe characters in
the delimiter row to align with those in the header row. This can be used with
`compact` and `tight` tables to make the header text more obvious. (It's already
required for tables with style `aligned`.)

Style `compact` with `aligned_delimiter`:

```markdown
| Character | Meaning |
| --------- | ------- |
| Y | Yes |
| N | No |
```

Style `tight` with `aligned_delimiter`:

```markdown
|Character|Meaning|
|---------|-------|
|Y|Yes|
|N|No|
```

**Note**: This rule does not require leading/trailing pipe characters, so this
is also a valid table for style `compact`:

```markdown
Character | Meaning
--- | ---
Y | Yes
N | No
```

**Note**: Pipe alignment for the `aligned` style is based on visual appearance
and not character count. Because editors typically render [emoji][emoji] and
[CJK characters][cjk-characters] at *twice* the width of
[Latin characters][latin-script], this rule takes that into account for tables
using the `aligned` style. The following table is correctly formatted and will
appear aligned in most editors and monospaced fonts:

<!-- markdownlint-capture -->
<!-- markdownlint-disable extended-ascii -->

```markdown
| Response | Emoji |
| -------- | ----- |
| Yes      | ✅    |
| No       | ❎    |
```

<!-- markdownlint-restore -->

Rationale: Consistent formatting makes it easier to understand a document.

[cjk-characters]: https://en.wikipedia.org/wiki/CJK_characters
[emoji]: https://en.wikipedia.org/wiki/Emoji
[gfm-table-060]: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
[latin-script]: https://en.wikipedia.org/wiki/Latin_script

<!-- markdownlint-configure-file {
  "no-inline-html": {
    "allowed_elements": [
      "a"
    ]
  }
} -->
