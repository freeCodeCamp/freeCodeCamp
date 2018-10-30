'use strict'

/**
 * @fileoverview Disallows or enforces spaces inside of array brackets.
 * @author Jamund Ferguson
 * @copyright 2015 Jamund Ferguson. All rights reserved.
 * @copyright 2014 Brandyn Bennett. All rights reserved.
 * @copyright 2014 Michael Ficarra. No rights reserved.
 * @copyright 2014 Vignesh Anand. All rights reserved.
 */
// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    var spaced = context.options[0] === 'always'
    var either = context.options[0] === 'either'

    /**
     * Determines whether an option is set, relative to the spacing option.
     * If spaced is "always", then check whether option is set to false.
     * If spaced is "never", then check whether option is set to true.
     * @param {Object} option - The option to exclude.
     * @returns {boolean} Whether or not the property is excluded.
     */
    function isOptionSet (option) {
      return context.options[1] != null ? context.options[1][option] === !spaced : false
    }

    var options = {
      either: either,
      spaced: spaced,
      singleElementException: isOptionSet('singleValue'),
      objectsInArraysException: isOptionSet('objectsInArrays'),
      arraysInArraysException: isOptionSet('arraysInArrays')
    }

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------

    /**
     * Determines whether two adjacent tokens are have whitespace between them.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not there is space between the tokens.
     */
    function isSpaced (left, right) {
      return left.range[1] < right.range[0]
    }

    /**
     * Determines whether two adjacent tokens are on the same line.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not the tokens are on the same line.
     */
    function isSameLine (left, right) {
      return left.loc.start.line === right.loc.start.line
    }

    /**
     * Reports that there shouldn't be a space after the first token
     * @param {ASTNode} node - The node to report in the event of an error.
     * @param {Token} token - The token to use for the report.
     * @returns {void}
     */
    function reportNoBeginningSpace (node, token) {
      context.report(node, token.loc.start,
        "There should be no space after '" + token.value + "'")
    }

    /**
     * Reports that there shouldn't be a space before the last token
     * @param {ASTNode} node - The node to report in the event of an error.
     * @param {Token} token - The token to use for the report.
     * @returns {void}
     */
    function reportNoEndingSpace (node, token) {
      context.report(node, token.loc.start,
        "There should be no space before '" + token.value + "'")
    }

    /**
     * Reports that there should be a space after the first token
     * @param {ASTNode} node - The node to report in the event of an error.
     * @param {Token} token - The token to use for the report.
     * @returns {void}
     */
    function reportRequiredBeginningSpace (node, token) {
      context.report(node, token.loc.start,
        "A space is required after '" + token.value + "'")
    }

    /**
     * Reports that there should be a space before the last token
     * @param {ASTNode} node - The node to report in the event of an error.
     * @param {Token} token - The token to use for the report.
     * @returns {void}
     */
    function reportRequiredEndingSpace (node, token) {
      context.report(node, token.loc.start,
        "A space is required before '" + token.value + "'")
    }

    /**
     * Checks if a start and end brace in a node are spaced evenly
     * and not too long (>1 space)
     * @param node
     * @param start
     * @param end
     * @returns {boolean}
     */
    function isEvenlySpacedAndNotTooLong (node, start, end) {
      var expectedSpace = start[1].range[0] - start[0].range[1]
      var endSpace = end[1].range[0] - end[0].range[1]
      return endSpace === expectedSpace && endSpace <= 1
    }

    /**
     * Validates the spacing around array brackets
     * @param {ASTNode} node - The node we're checking for spacing
     * @returns {void}
     */
    function validateArraySpacing (node) {
      if (node.elements.length === 0) {
        return
      }

      var first = context.getFirstToken(node)
      var second = context.getFirstToken(node, 1)
      var penultimate = context.getLastToken(node, 1)
      var last = context.getLastToken(node)

      var openingBracketMustBeSpaced =
      (options.objectsInArraysException && second.value === '{') ||
      (options.arraysInArraysException && second.value === '[') ||
      (options.singleElementException && node.elements.length === 1)
        ? !options.spaced : options.spaced

      var closingBracketMustBeSpaced =
      (options.objectsInArraysException && penultimate.value === '}') ||
      (options.arraysInArraysException && penultimate.value === ']') ||
      (options.singleElementException && node.elements.length === 1)
        ? !options.spaced : options.spaced

      // we only care about evenly spaced things
      if (options.either) {
        // newlines at any point means return
        if (!isSameLine(first, last)) {
          return
        }

        // confirm that the object expression/literal is spaced evenly
        if (!isEvenlySpacedAndNotTooLong(node, [first, second], [penultimate, last])) {
          context.report(node, 'Expected consistent spacing')
        }

        return
      }

      if (isSameLine(first, second)) {
        if (openingBracketMustBeSpaced && !isSpaced(first, second)) {
          reportRequiredBeginningSpace(node, first)
        }
        if (!openingBracketMustBeSpaced && isSpaced(first, second)) {
          reportNoBeginningSpace(node, first)
        }
      }

      if (isSameLine(penultimate, last)) {
        if (closingBracketMustBeSpaced && !isSpaced(penultimate, last)) {
          reportRequiredEndingSpace(node, last)
        }
        if (!closingBracketMustBeSpaced && isSpaced(penultimate, last)) {
          reportNoEndingSpace(node, last)
        }
      }
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      ArrayPattern: validateArraySpacing,
      ArrayExpression: validateArraySpacing
    }
  }
}
