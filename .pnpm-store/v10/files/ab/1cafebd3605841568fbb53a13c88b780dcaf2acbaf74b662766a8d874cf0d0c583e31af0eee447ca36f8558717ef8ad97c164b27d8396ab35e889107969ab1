'use strict';

/** @param {import('../index.js').Options} options */
function CommentRemover(options) {
  this.options = options;
}
/**
 * @param {string} comment
 * @return {boolean | undefined}
 */
CommentRemover.prototype.canRemove = function (comment) {
  const remove = this.options.remove;

  if (remove) {
    return remove(comment);
  } else {
    const isImportant = comment.indexOf('!') === 0;

    if (!isImportant) {
      return true;
    }

    if (this.options.removeAll || this._hasFirst) {
      return true;
    } else if (this.options.removeAllButFirst && !this._hasFirst) {
      this._hasFirst = true;
      return false;
    }
  }
};

module.exports = CommentRemover;
