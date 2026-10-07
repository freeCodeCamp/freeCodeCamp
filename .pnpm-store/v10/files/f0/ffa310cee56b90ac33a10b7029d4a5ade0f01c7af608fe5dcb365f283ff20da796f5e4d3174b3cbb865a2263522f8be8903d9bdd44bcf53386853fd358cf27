/* jshint node: true */
'use strict';

var REGEXP_PARTS = /(\*|\?)/g;

/**
  # wildcard

  Very simple wildcard matching, which is designed to provide the same
  functionality that is found in the
  [eve](https://github.com/adobe-webplatform/eve) eventing library.

  ## Usage

  It works with strings:

  <<< examples/strings.js

  Arrays:

  <<< examples/arrays.js

  Objects (matching against keys):

  <<< examples/objects.js

  ## Alternative Implementations

  - <https://github.com/isaacs/node-glob>

    Great for full file-based wildcard matching.

  - <https://github.com/sindresorhus/matcher>

     A well cared for and loved JS wildcard matcher.
**/

function WildcardMatcher(text, separator) {
  this.text = text = text || '';
  this.hasWild = text.indexOf('*') >= 0;
  this.separator = separator;
  this.parts = text.split(separator).map(this.classifyPart.bind(this));
}

WildcardMatcher.prototype.match = function(input) {
  var matches = true;
  var parts = this.parts;
  var ii;
  var partsCount = parts.length;
  var testParts;

  if (typeof input == 'string' || input instanceof String) {
    if (!this.hasWild && this.text != input) {
      matches = false;
    } else {
      testParts = (input || '').split(this.separator);
      for (ii = 0; matches && ii < partsCount; ii++) {
        if (parts[ii] === '*')  {
          continue;
        } else if (ii < testParts.length) {
          matches = parts[ii] instanceof RegExp
            ? parts[ii].test(testParts[ii])
            : parts[ii] === testParts[ii];
        } else {
          matches = false;
        }
      }

      // If matches, then return the component parts
      matches = matches && testParts;
    }
  }
  else if (typeof input.splice == 'function') {
    matches = [];

    for (ii = input.length; ii--; ) {
      if (this.match(input[ii])) {
        matches[matches.length] = input[ii];
      }
    }
  }
  else if (typeof input == 'object') {
    matches = {};

    for (var key in input) {
      if (this.match(key)) {
        matches[key] = input[key];
      }
    }
  }

  return matches;
};

WildcardMatcher.prototype.classifyPart = function(part) {
  // in the event that we have been provided a part that is not just a wildcard
  // then turn this into a regular expression for matching purposes
  if (part === '*') {
    return part;
  } else if (part.indexOf('*') >= 0 || part.indexOf('?') >= 0) {
    return new RegExp(part.replace(REGEXP_PARTS, '\.$1'));
  }

  return part;
};

module.exports = function(text, test, separator) {
  var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
  if (typeof test != 'undefined') {
    return matcher.match(test);
  }

  return matcher;
};
