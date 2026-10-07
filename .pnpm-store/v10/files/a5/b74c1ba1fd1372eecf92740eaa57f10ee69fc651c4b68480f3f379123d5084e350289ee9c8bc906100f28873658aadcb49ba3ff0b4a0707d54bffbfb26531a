// This file is a source for playground examples.
// Examples integrity is smoke-checked with examples.spec.js

function parse_defaults(source, parse, stringify, transforms) {
  // Invoking parser with default config covers the most genearic cases.
  // Note how /*** and /* blocks are ignored

  /** One-liner */

  /** @some-tag {someType} someName */

  /**
   * Description may go
   * over multiple lines followed by @tags
   * @param {string} name the name parameter
   * @param {any} value the value parameter
   */

  /*** ignored */
  /* ignored */

  const parsed = parse(source);
  const stringified = parsed.map((block) => stringify(block));
}

function parse_line_numbering(source, parse, stringify, transforms) {
  // Note, line numbers are off by 5 from what you see in editor
  //
  // Try changeing start line back to 0, or omit the option
  // parse(source, {startLine: 0}) -- default
  // parse(source, {startLine: 5}) -- enforce alternative start number

  /**
   * Description may go
   * over multiple lines followed by @tags
   * @param {string} name the name parameter
   * @param {any} value the value parameter
   */

  const parsed = parse(source, { startLine: 5 });
  const stringified = parsed[0].tags
    .map((tag) => `line ${tag.source[0].number + 1} : @${tag.tag} ${tag.name}`)
    .join('\n');
}

function parse_spacing(source, parse, stringify, transforms) {
  // Note, when spacing option is set to 'compact' or omited, tag and block descriptions are collapsed to look like a single sentense.
  //
  // Try changeing it to 'preserve' or defining custom function
  // parse(source, {spacing: 'compact'}) -- default
  // parse(source, {spacing: 'preserve'}) -- preserve spaces and line breaks
  // parse(source, {spacing: lines => lines
  //   .map(tokens => tokens.description.trim())
  //   .filter(description => description !== '')
  //   .join(' ');
  // }) -- mimic 'compact' implementation

  /**
   * Description may go
   * over multiple lines followed by
   * @param {string} name the name parameter
   *   with multiline description
   * @param {function(
   *   number,
   *   string
   * )} options the options
   */

  const parsed = parse(source, { spacing: 'preserve' });
  const stringified = parsed[0].tags
    .map((tag) => `@${tag.tag} - ${tag.description}\n\n${tag.type}`)
    .join('\n----\n');
}

function parse_escaping(source, parse, stringify, transforms) {
  // Note, @decorator is not parsed as another tag because block is wrapped into ###.
  //
  // Try setting alternative escape sequence
  // parse(source, {fence: '```'}) -- default
  // parse(source, {fence: '###'}) -- update source correspondingly

  /**
   * @example "some code"
  ###
  @decorator
  function hello() {
    // do something
  }
  ###
   */

  const parsed = parse(source, { fence: '###' });
  const stringified = parsed[0].tags
    .map((tag) => `@${tag.tag} - ${tag.description}`)
    .join('\n');
}

function stringify_formatting(source, parse, stringify, transforms) {
  // stringify preserves exact formatting by default, but you can transform parsing result first
  // transform = align() -- align name, type, and description
  // transform = flow(align(), indent(4)) -- align, then place the block's opening marker at pos 4

  /**
   * Description may go
   * over multiple lines followed by @tags
   * @param {string} name the name parameter
   * @param {any} value the value parameter
   */

  const { flow, align, indent } = transforms;
  const transform = flow(align(), indent(4));

  const parsed = parse(source);
  const stringified = stringify(transform(parsed[0]));
}

function parse_source_exploration(source, parse, stringify, transforms) {
  // parse() produces Block[].source keeping accurate track of origin source

  /**
   * Description may go
   * over multiple lines followed by @tags
   * @param {string} name the name parameter
   * @param {any} value the value parameter
   */

  const parsed = parse(source);

  const summary = ({ source }) => ({
    source: source
      .map(
        ({ tokens }) =>
          tokens.start +
          tokens.delimiter +
          tokens.postDelimiter +
          tokens.tag +
          tokens.postTag +
          tokens.type +
          tokens.postType +
          tokens.name +
          tokens.postName +
          tokens.description +
          tokens.end
      )
      .join('\n'),
    start: {
      line: source[0].number + 1,
      column: source[0].tokens.start.length,
    },
    end: {
      line: source[source.length - 1].number + 1,
      column: source[source.length - 1].source.length,
    },
  });

  const pos = (p) => p.line + ':' + p.column;

  const stringified = parsed[0].tags
    .map(summary)
    .map((s) => `${pos(s.start)} - ${pos(s.end)}\n${s.source}`);
}

function parse_advanced_parsing(source, parse, _, _, tokenizers) {
  // Each '@tag ...' section results into a Spec. The Spec is computed by
  // the chain of tokenizers each contributing a change to the the Spec.* and the Spec.tags[].tokens.
  // Default parse() options come with stadart tokenizers:
  // {
  //   ...,
  //   spacing = 'compact',
  //   tokenizers = [
  //     tokenizers.tag(),
  //     tokenizers.type(spacing),
  //     tokenizers.name(),
  //     tokenizers.description(spacing),
  //   ]
  // }
  // You can reorder those, or even replace any with a custom function (spec: Spec) => Spec
  // This example allows to parse "@tag description" comments

  /**
   * @arg0 my parameter
   * @arg1
   *   another parameter
   *      with a strange formatting
   */

  const parsed = parse(source, {
    tokenizers: [tokenizers.tag(), tokenizers.description('preserve')],
  });
  const stringified = parsed[0].tags
    .map((tag) => `@${tag.tag} - ${tag.description}`)
    .join('\n');
}

function stringify_rename(source, parse, stringify, transforms) {
  // You can do any manipulations with the parsed result
  // See how each block is being mapped. If you are updating a Block.source
  // then rewireSource(block) should be called on each changed block.
  // If changes were made to Block.tags[].source then call rewireSpecs(block).
  // This example shows how you can "rename" @param tags: value1 -> value11, value2 -> value22

  /**
   * Description may go
   * over multiple lines followed by @tags
   * @param {string} name the name parameter
   * @param {any} value1 first value parameter
   *   with a multipline description
   * @param {any} value2 second value parameter
   */

  function renameParam(from, to) {
    return (block) => {
      for (const tag of block.tags) {
        if (tag.tag === 'param' && tag.name === from) {
          tag.name = to;
          for (const line of tag.source) {
            if (line.tokens.name === from) line.tokens.name = to;
          }
        }
      }
      return block;
    };
  }

  const transform = transforms.flow(
    renameParam('value1', 'value11'),
    renameParam('value2', 'value22'),
    stringify
  );

  const parsed = parse(source);
  const stringified = parsed.map(transform);
}

(typeof window === 'undefined' ? module.exports : window).examples = [
  parse_defaults,
  parse_line_numbering,
  parse_escaping,
  parse_spacing,
  parse_source_exploration,
  parse_advanced_parsing,
  stringify_formatting,
  stringify_rename,
];
