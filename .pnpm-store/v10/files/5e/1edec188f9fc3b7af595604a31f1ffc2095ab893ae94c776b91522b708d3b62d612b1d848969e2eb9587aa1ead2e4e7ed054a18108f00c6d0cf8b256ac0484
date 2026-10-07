'use strict';

var _ = {
  sum: require('lodash/sum'),
  flatten: require('lodash/flatten'),
};
var chalk = require('chalk');

/**
 * The paginator returns a subset of the choices if the list is too long.
 */

class Paginator {
  constructor(screen, options = {}) {
    const { isInfinite = true } = options;
    this.lastIndex = 0;
    this.screen = screen;
    this.isInfinite = isInfinite;
  }

  paginate(output, active, pageSize) {
    pageSize = pageSize || 7;
    var lines = output.split('\n');

    if (this.screen) {
      lines = this.screen.breakLines(lines);
      active = _.sum(lines.map((lineParts) => lineParts.length).splice(0, active));
      lines = _.flatten(lines);
    }

    // Make sure there's enough lines to paginate
    if (lines.length <= pageSize) {
      return output;
    }
    const visibleLines = this.isInfinite
      ? this.getInfiniteLines(lines, active, pageSize)
      : this.getFiniteLines(lines, active, pageSize);
    this.lastIndex = active;
    return (
      visibleLines.join('\n') +
      '\n' +
      chalk.dim('(Move up and down to reveal more choices)')
    );
  }

  getInfiniteLines(lines, active, pageSize) {
    if (this.pointer === undefined) {
      this.pointer = 0;
    }
    var middleOfList = Math.floor(pageSize / 2);
    // Move the pointer only when the user go down and limit it to the middle of the list
    if (
      this.pointer < middleOfList &&
      this.lastIndex < active &&
      active - this.lastIndex < pageSize
    ) {
      this.pointer = Math.min(middleOfList, this.pointer + active - this.lastIndex);
    }

    // Duplicate the lines so it give an infinite list look
    var infinite = _.flatten([lines, lines, lines]);
    var topIndex = Math.max(0, active + lines.length - this.pointer);

    return infinite.splice(topIndex, pageSize);
  }

  getFiniteLines(lines, active, pageSize) {
    var topIndex = active - pageSize / 2;
    if (topIndex < 0) {
      topIndex = 0;
    } else if (topIndex + pageSize > lines.length) {
      topIndex = lines.length - pageSize;
    }
    return lines.splice(topIndex, pageSize);
  }
}

module.exports = Paginator;
