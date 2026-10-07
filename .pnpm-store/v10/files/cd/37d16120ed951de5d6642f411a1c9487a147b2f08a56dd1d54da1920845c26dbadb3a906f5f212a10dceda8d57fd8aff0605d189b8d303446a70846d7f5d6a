// This module is compiled away!
//
// Here is the list of all types of tokens exposed by micromark, with a short
// explanation of what they include and where they are found.
// In picking names, generally, the rule is to be as explicit as possible
// instead of reusing names.
// For example, there is a `definitionDestination` and a `resourceDestination`,
// instead of one shared name.

export default {
  // Generic type for data, such as in a title, a destination, etc.
  data: 'data',

  // Generic type for syntactic whitespace (tabs, virtual spaces, spaces).
  // Such as, between a fenced code fence and an info string.
  whitespace: 'whitespace',

  // Generic type for line endings (line feed, carriage return, carriage return +
  // line feed).
  lineEnding: 'lineEnding',

  // A line ending, but ending a blank line.
  lineEndingBlank: 'lineEndingBlank',

  // Generic type for whitespace (tabs, virtual spaces, spaces) at the start of a
  // line.
  linePrefix: 'linePrefix',

  // Generic type for whitespace (tabs, virtual spaces, spaces) at the end of a
  // line.
  lineSuffix: 'lineSuffix',

  // Whole ATX heading:
  //
  // ```markdown
  // #
  // ## Alpha
  // ### Bravo ###
  // ```
  //
  // Includes `atxHeadingSequence`, `whitespace`, `atxHeadingText`.
  atxHeading: 'atxHeading',

  // Sequence of number signs in an ATX heading (`###`).
  atxHeadingSequence: 'atxHeadingSequence',

  // Content in an ATX heading (`alpha`).
  // Includes text.
  atxHeadingText: 'atxHeadingText',

  // Whole autolink (`<https://example.com>` or `<admin@example.com>`)
  // Includes `autolinkMarker` and `autolinkProtocol` or `autolinkEmail`.
  autolink: 'autolink',

  // Email autolink w/o markers (`admin@example.com`)
  autolinkEmail: 'autolinkEmail',

  // Marker around an `autolinkProtocol` or `autolinkEmail` (`<` or `>`).
  autolinkMarker: 'autolinkMarker',

  // Protocol autolink w/o markers (`https://example.com`)
  autolinkProtocol: 'autolinkProtocol',

  // A whole character escape (`\-`).
  // Includes `escapeMarker` and `characterEscapeValue`.
  characterEscape: 'characterEscape',

  // The escaped character (`-`).
  characterEscapeValue: 'characterEscapeValue',

  // A whole character reference (`&amp;`, `&#8800;`, or `&#x1D306;`).
  // Includes `characterReferenceMarker`, an optional
  // `characterReferenceMarkerNumeric`, in which case an optional
  // `characterReferenceMarkerHexadecimal`, and a `characterReferenceValue`.
  characterReference: 'characterReference',

  // The start or end marker (`&` or `;`).
  characterReferenceMarker: 'characterReferenceMarker',

  // Mark reference as numeric (`#`).
  characterReferenceMarkerNumeric: 'characterReferenceMarkerNumeric',

  // Mark reference as numeric (`x` or `X`).
  characterReferenceMarkerHexadecimal: 'characterReferenceMarkerHexadecimal',

  // Value of character reference w/o markers (`amp`, `8800`, or `1D306`).
  characterReferenceValue: 'characterReferenceValue',

  // Whole fenced code:
  //
  // ````markdown
  // ```js
  // alert(1)
  // ```
  // ````
  codeFenced: 'codeFenced',

  // A fenced code fence, including whitespace, sequence, info, and meta
  // (` ```js `).
  codeFencedFence: 'codeFencedFence',

  // Sequence of grave accent or tilde characters (` ``` `) in a fence.
  codeFencedFenceSequence: 'codeFencedFenceSequence',

  // Info word (`js`) in a fence.
  // Includes string.
  codeFencedFenceInfo: 'codeFencedFenceInfo',

  // Meta words (`highlight="1"`) in a fence.
  // Includes string.
  codeFencedFenceMeta: 'codeFencedFenceMeta',

  // A line of code.
  codeFlowValue: 'codeFlowValue',

  // Whole indented code:
  //
  // ```markdown
  //     alert(1)
  // ```
  //
  // Includes `lineEnding`, `linePrefix`, and `codeFlowValue`.
  codeIndented: 'codeIndented',

  // A text code (``` `alpha` ```).
  // Includes `codeTextSequence`, `codeTextData`, `lineEnding`, and can include
  // `codeTextPadding`.
  codeText: 'codeText',

  codeTextData: 'codeTextData',

  // A space or line ending right after or before a tick.
  codeTextPadding: 'codeTextPadding',

  // A text code fence (` `` `).
  codeTextSequence: 'codeTextSequence',

  // Whole content:
  //
  // ```markdown
  // [a]: b
  // c
  // =
  // d
  // ```
  //
  // Includes `paragraph` and `definition`.
  content: 'content',
  // Whole definition:
  //
  // ```markdown
  // [micromark]: https://github.com/micromark/micromark
  // ```
  //
  // Includes `definitionLabel`, `definitionMarker`, `whitespace`,
  // `definitionDestination`, and optionally `lineEnding` and `definitionTitle`.
  definition: 'definition',

  // Destination of a definition (`https://github.com/micromark/micromark` or
  // `<https://github.com/micromark/micromark>`).
  // Includes `definitionDestinationLiteral` or `definitionDestinationRaw`.
  definitionDestination: 'definitionDestination',

  // Enclosed destination of a definition
  // (`<https://github.com/micromark/micromark>`).
  // Includes `definitionDestinationLiteralMarker` and optionally
  // `definitionDestinationString`.
  definitionDestinationLiteral: 'definitionDestinationLiteral',

  // Markers of an enclosed definition destination (`<` or `>`).
  definitionDestinationLiteralMarker: 'definitionDestinationLiteralMarker',

  // Unenclosed destination of a definition
  // (`https://github.com/micromark/micromark`).
  // Includes `definitionDestinationString`.
  definitionDestinationRaw: 'definitionDestinationRaw',

  // Text in an destination (`https://github.com/micromark/micromark`).
  // Includes string.
  definitionDestinationString: 'definitionDestinationString',

  // Label of a definition (`[micromark]`).
  // Includes `definitionLabelMarker` and `definitionLabelString`.
  definitionLabel: 'definitionLabel',

  // Markers of a definition label (`[` or `]`).
  definitionLabelMarker: 'definitionLabelMarker',

  // Value of a definition label (`micromark`).
  // Includes string.
  definitionLabelString: 'definitionLabelString',

  // Marker between a label and a destination (`:`).
  definitionMarker: 'definitionMarker',

  // Title of a definition (`"x"`, `'y'`, or `(z)`).
  // Includes `definitionTitleMarker` and optionally `definitionTitleString`.
  definitionTitle: 'definitionTitle',

  // Marker around a title of a definition (`"`, `'`, `(`, or `)`).
  definitionTitleMarker: 'definitionTitleMarker',

  // Data without markers in a title (`z`).
  // Includes string.
  definitionTitleString: 'definitionTitleString',

  // Emphasis (`*alpha*`).
  // Includes `emphasisSequence` and `emphasisText`.
  emphasis: 'emphasis',

  // Sequence of emphasis markers (`*` or `_`).
  emphasisSequence: 'emphasisSequence',

  // Emphasis text (`alpha`).
  // Includes text.
  emphasisText: 'emphasisText',

  // The character escape marker (`\`).
  escapeMarker: 'escapeMarker',

  // A hard break created with a backslash (`\\n`).
  // Includes `escapeMarker` (does not include the line ending)
  hardBreakEscape: 'hardBreakEscape',

  // A hard break created with trailing spaces (`  \n`).
  // Does not include the line ending.
  hardBreakTrailing: 'hardBreakTrailing',

  // Flow HTML:
  //
  // ```markdown
  // <div
  // ```
  //
  // Inlcudes `lineEnding`, `htmlFlowData`.
  htmlFlow: 'htmlFlow',

  htmlFlowData: 'htmlFlowData',

  // HTML in text (the tag in `a <i> b`).
  // Includes `lineEnding`, `htmlTextData`.
  htmlText: 'htmlText',

  htmlTextData: 'htmlTextData',

  // Whole image (`![alpha](bravo)`, `![alpha][bravo]`, `![alpha][]`, or
  // `![alpha]`).
  // Includes `label` and an optional `resource` or `reference`.
  image: 'image',

  // Whole link label (`[*alpha*]`).
  // Includes `labelLink` or `labelImage`, `labelText`, and `labelEnd`.
  label: 'label',

  // Text in an label (`*alpha*`).
  // Includes text.
  labelText: 'labelText',

  // Start a link label (`[`).
  // Includes a `labelMarker`.
  labelLink: 'labelLink',

  // Start an image label (`![`).
  // Includes `labelImageMarker` and `labelMarker`.
  labelImage: 'labelImage',

  // Marker of a label (`[` or `]`).
  labelMarker: 'labelMarker',

  // Marker to start an image (`!`).
  labelImageMarker: 'labelImageMarker',

  // End a label (`]`).
  // Includes `labelMarker`.
  labelEnd: 'labelEnd',

  // Whole link (`[alpha](bravo)`, `[alpha][bravo]`, `[alpha][]`, or `[alpha]`).
  // Includes `label` and an optional `resource` or `reference`.
  link: 'link',

  // Whole paragraph:
  //
  // ```markdown
  // alpha
  // bravo.
  // ```
  //
  // Includes text.
  paragraph: 'paragraph',

  // A reference (`[alpha]` or `[]`).
  // Includes `referenceMarker` and an optional `referenceString`.
  reference: 'reference',

  // A reference marker (`[` or `]`).
  referenceMarker: 'referenceMarker',

  // Reference text (`alpha`).
  // Includes string.
  referenceString: 'referenceString',

  // A resource (`(https://example.com "alpha")`).
  // Includes `resourceMarker`, an optional `resourceDestination` with an optional
  // `whitespace` and `resourceTitle`.
  resource: 'resource',

  // A resource destination (`https://example.com`).
  // Includes `resourceDestinationLiteral` or `resourceDestinationRaw`.
  resourceDestination: 'resourceDestination',

  // A literal resource destination (`<https://example.com>`).
  // Includes `resourceDestinationLiteralMarker` and optionally
  // `resourceDestinationString`.
  resourceDestinationLiteral: 'resourceDestinationLiteral',

  // A resource destination marker (`<` or `>`).
  resourceDestinationLiteralMarker: 'resourceDestinationLiteralMarker',

  // A raw resource destination (`https://example.com`).
  // Includes `resourceDestinationString`.
  resourceDestinationRaw: 'resourceDestinationRaw',

  // Resource destination text (`https://example.com`).
  // Includes string.
  resourceDestinationString: 'resourceDestinationString',

  // A resource marker (`(` or `)`).
  resourceMarker: 'resourceMarker',

  // A resource title (`"alpha"`, `'alpha'`, or `(alpha)`).
  // Includes `resourceTitleMarker` and optionally `resourceTitleString`.
  resourceTitle: 'resourceTitle',

  // A resource title marker (`"`, `'`, `(`, or `)`).
  resourceTitleMarker: 'resourceTitleMarker',

  // Resource destination title (`alpha`).
  // Includes string.
  resourceTitleString: 'resourceTitleString',

  // Whole setext heading:
  //
  // ```markdown
  // alpha
  // bravo
  // =====
  // ```
  //
  // Includes `setextHeadingText`, `lineEnding`, `linePrefix`, and
  // `setextHeadingLine`.
  setextHeading: 'setextHeading',

  // Content in a setext heading (`alpha\nbravo`).
  // Includes text.
  setextHeadingText: 'setextHeadingText',

  // Underline in a setext heading, including whitespace suffix (`==`).
  // Includes `setextHeadingLineSequence`.
  setextHeadingLine: 'setextHeadingLine',

  // Sequence of equals or dash characters in underline in a setext heading (`-`).
  setextHeadingLineSequence: 'setextHeadingLineSequence',

  // Strong (`**alpha**`).
  // Includes `strongSequence` and `strongText`.
  strong: 'strong',

  // Sequence of strong markers (`**` or `__`).
  strongSequence: 'strongSequence',

  // Strong text (`alpha`).
  // Includes text.
  strongText: 'strongText',

  // Whole thematic break:
  //
  // ```markdown
  // * * *
  // ```
  //
  // Includes `thematicBreakSequence` and `whitespace`.
  thematicBreak: 'thematicBreak',

  // A sequence of one or more thematic break markers (`***`).
  thematicBreakSequence: 'thematicBreakSequence',

  // Whole block quote:
  //
  // ```markdown
  // > a
  // >
  // > b
  // ```
  //
  // Includes `blockQuotePrefix` and flow.
  blockQuote: 'blockQuote',
  // The `>` or `> ` of a block quote.
  blockQuotePrefix: 'blockQuotePrefix',
  // The `>` of a block quote prefix.
  blockQuoteMarker: 'blockQuoteMarker',
  // The optional ` ` of a block quote prefix.
  blockQuotePrefixWhitespace: 'blockQuotePrefixWhitespace',

  // Whole unordered list:
  //
  // ```markdown
  // - a
  //   b
  // ```
  //
  // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
  // lines.
  listOrdered: 'listOrdered',

  // Whole ordered list:
  //
  // ```markdown
  // 1. a
  //    b
  // ```
  //
  // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
  // lines.
  listUnordered: 'listUnordered',

  // The indent of further list item lines.
  listItemIndent: 'listItemIndent',

  // A marker, as in, `*`, `+`, `-`, `.`, or `)`.
  listItemMarker: 'listItemMarker',

  // The thing that starts a list item, such as `1. `.
  // Includes `listItemValue` if ordered, `listItemMarker`, and
  // `listItemPrefixWhitespace` (unless followed by a line ending).
  listItemPrefix: 'listItemPrefix',

  // The whitespace after a marker.
  listItemPrefixWhitespace: 'listItemPrefixWhitespace',

  // The numerical value of an ordered item.
  listItemValue: 'listItemValue',

  // Internal types used for subtokenizers, compiled away
  chunkContent: 'chunkContent',
  chunkFlow: 'chunkFlow',
  chunkText: 'chunkText',
  chunkString: 'chunkString'
}
