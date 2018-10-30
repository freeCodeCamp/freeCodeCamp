'use strict';

var _ = require('lodash');
var chalk = require('chalk');


/**
 * The paginator keep trakcs of a pointer index in a list and return
 * a subset of the choices if the list is too long.
 */

var Paginator = module.exports = function () {
  this.pointer = 0;
  this.lastIndex = 0;
};

Paginator.prototype.paginate = function (output, active, pageSize) {
  var pageSize = pageSize || 7;
  var lines = output.split('\n');

  // Make sure there's enough lines to paginate
  if (lines.length <= pageSize + 2) {
    return output;
  }

  // Move the pointer only when the user go down and limit it to 3
  if (this.pointer < 3 && this.lastIndex < active && active - this.lastIndex < 9) {
    this.pointer = Math.min(3, this.pointer + active - this.lastIndex);
  }
  this.lastIndex = active;

  // Duplicate the lines so it give an infinite list look
  var infinite = _.flatten([lines, lines, lines]);
  var topIndex = Math.max(0, active + lines.length - this.pointer);

  var section = infinite.splice(topIndex, pageSize).join('\n');
  return section + '\n' + chalk.dim('(Move up and down to reveal more choices)');
};
