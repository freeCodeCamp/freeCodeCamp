"use strict";

// comment fixes
module.exports = function(ast, comments, tokens) {
  if (comments.length) {
    var firstComment = comments[0];
    var lastComment = comments[comments.length - 1];
    // fixup program start
    if (!tokens.length) {
      // if no tokens, the program starts at the end of the last comment
      ast.start = lastComment.end;
      ast.loc.start.line = lastComment.loc.end.line;
      ast.loc.start.column = lastComment.loc.end.column;

      if (ast.leadingComments === null && ast.innerComments.length) {
        ast.leadingComments = ast.innerComments;
      }
    } else if (firstComment.start < tokens[0].start) {
      // if there are comments before the first token, the program starts at the first token
      var token = tokens[0];
      // ast.start = token.start;
      // ast.loc.start.line = token.loc.start.line;
      // ast.loc.start.column = token.loc.start.column;

      // estraverse do not put leading comments on first node when the comment
      // appear before the first token
      if (ast.body.length) {
        var node = ast.body[0];
        node.leadingComments = [];
        var firstTokenStart = token.start;
        var len = comments.length;
        for (var i = 0; i < len && comments[i].start < firstTokenStart; i++) {
          node.leadingComments.push(comments[i]);
        }
      }
    }
    // fixup program end
    if (tokens.length) {
      var lastToken = tokens[tokens.length - 1];
      if (lastComment.end > lastToken.end) {
        // If there is a comment after the last token, the program ends at the
        // last token and not the comment
        // ast.end = lastToken.end;
        ast.range[1] = lastToken.end;
        ast.loc.end.line = lastToken.loc.end.line;
        ast.loc.end.column = lastToken.loc.end.column;
      }
    }
  } else {
    if (!tokens.length) {
      ast.loc.start.line = 1;
      ast.loc.end.line = 1;
    }
  }
  if (ast.body && ast.body.length > 0) {
    ast.loc.start.line = ast.body[0].loc.start.line;
    ast.range[0] = ast.body[0].start;
  }
};
