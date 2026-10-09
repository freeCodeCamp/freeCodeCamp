const visit = require('unist-util-visit');

const ALLOWED_TAGS = [
  // sanitize-html default allowed tags
  // https://github.com/apostrophecms/sanitize-html/blob/86efc067a63515e08ecfc47f94d8bca0e3715030/index.js#L852-L871
  'address',
  'article',
  'aside',
  'footer',
  'header',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hgroup',
  'main',
  'nav',
  'section',
  'blockquote',
  'dd',
  'div',
  'dl',
  'dt',
  'figcaption',
  'figure',
  'hr',
  'li',
  'main',
  'ol',
  'p',
  'pre',
  'ul',
  'a',
  'abbr',
  'b',
  'bdi',
  'bdo',
  'br',
  'cite',
  'code',
  'data',
  'dfn',
  'em',
  'i',
  'kbd',
  'mark',
  'q',
  'rb',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'time',
  'u',
  'var',
  'wbr',
  'caption',
  'col',
  'colgroup',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'tr',
  // Additional tags
  'big', // TODO: This tag is deprecated. Update challenge content to use `<span>` and `font-size` instead.
  'del',
  'iframe',
  'img'
];

const ALLOWED_ATTRIBUTES = {
  // sanitize-html default allowed attributes
  // https://github.com/apostrophecms/sanitize-html/blob/86efc067a63515e08ecfc47f94d8bca0e3715030/index.js#L916-L921
  a: ['href', 'name', 'target', 'rel', 'title'],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
  // Additional attributes
  '*': ['class', 'style'],
  abbr: ['title'],
  table: ['align', 'border', 'cell-spacing', 'cell-padding'],
  th: ['align', 'scope'],
  td: ['align', 'aria-label', 'col-span', 'role', 'row-span', 'width'],
  iframe: [
    'src',
    'title',
    'width',
    'height',
    'allow',
    'allowfullscreen',
    'allow-full-screen', // HTML parser converts to kebab-case
    'allowpaymentrequest',
    'allow-payment-request',
    'allowtransparency',
    'allow-transparency',
    'frameborder',
    'frame-border',
    'scrolling',
    'name',
    'id',
    'loading',
    'referrerpolicy'
  ]
};

/**
 * Validates HAST tree against allowed tags and attributes.
 * Throws an error if disallowed content is found.
 */
function validateHAST(tree) {
  const violations = [];

  visit(tree, 'element', node => {
    const tagName = node.tagName;

    // Check if tag is allowed
    if (!ALLOWED_TAGS.includes(tagName)) {
      violations.push({
        type: 'disallowed_tag',
        tag: tagName
      });
      return; // Skip attribute validation for disallowed tags
    }

    // Check attributes
    if (node.properties) {
      const allowedForTag = ALLOWED_ATTRIBUTES[tagName] || [];
      const globalAllowed = ALLOWED_ATTRIBUTES['*'] || [];
      const allAllowed = [...allowedForTag, ...globalAllowed];

      Object.keys(node.properties).forEach(prop => {
        // Convert camelCase property names to kebab-case for validation
        // HAST uses camelCase (e.g., className), HTML uses kebab-case (e.g., class)
        const attrName = prop
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, ''); // Remove leading dash

        // Special cases: some HAST properties map to different attribute names
        const normalizedAttr =
          prop === 'className'
            ? 'class'
            : prop === 'htmlFor'
              ? 'for'
              : /^on[A-Z]/.test(prop)
                ? prop.toLowerCase() // HTML event-handler attributes are lowercase.
                : attrName;

        // Check if attribute is allowed (including wildcard patterns)
        const isAllowed = allAllowed.some(pattern => {
          if (pattern.endsWith('*')) {
            const prefix = pattern.slice(0, -1);
            return normalizedAttr.startsWith(prefix);
          }
          return normalizedAttr === pattern;
        });

        if (!isAllowed) {
          violations.push({
            type: 'disallowed_attribute',
            tag: tagName,
            attribute: normalizedAttr
          });
        }
      });
    }
  });

  if (violations.length > 0) {
    const details = violations
      .map(v => {
        if (v.type === 'disallowed_tag') {
          return `  - Disallowed tag: <${v.tag}>`;
        } else {
          return `  - Disallowed attribute "${v.attribute}" on <${v.tag}>`;
        }
      })
      .join('\n');

    throw new Error(
      `HTML validation failed. Disallowed content detected:\n${details}`
    );
  }
}

module.exports = validateHAST;
