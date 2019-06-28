// JS rather than JSON so comments can be included

module.exports = {
  "default": false,    // the guide has a more permissive set of rules
  "MD031": false,      // code fences do not need surrounding by newlines
                       // unlike the curriculum, they are not embedded in html.
  "MD040": true,       // code fence languages should be specificed
  "prism-langs": true, // code fence languages should be supported by PrismJS
}
