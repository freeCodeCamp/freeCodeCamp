"use strict";

module.exports = function convertComments(comments) {
  for (const comment of comments) {
    comment.type = comment.type === "CommentBlock" ? "Block" : "Line";
    comment.range || (comment.range = [comment.start, comment.end]);
  }
};

//# sourceMappingURL=convertComments.cjs.map
