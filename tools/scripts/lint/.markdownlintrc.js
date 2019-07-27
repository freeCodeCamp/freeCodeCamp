// JS rather than JSON so comments can be included

module.exports = {
  "default": true,  // include all rules, with exceptions below
  "MD002": false,   // first heading should not be a top level heading
  "MD013": false,   // lines can be any length
  "MD022": false,   // headings don't need surrounding by newlines
  "MD031": true,    // fenced blocks do need surrounding by newlines
  "MD033": false,   // inline html is required
  "whitespace": false  // extra whitespace is ignored, so we don't enforce it.
}
