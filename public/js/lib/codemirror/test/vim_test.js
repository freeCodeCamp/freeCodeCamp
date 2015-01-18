CodeMirror.Vim.suppressErrorLogging = true;

var code = '' +
' wOrd1 (#%\n' +
' word3] \n' +
'aopop pop 0 1 2 3 4\n' +
' (a) [b] {c} \n' +
'int getchar(void) {\n' +
'  static char buf[BUFSIZ];\n' +
'  static char *bufp = buf;\n' +
'  if (n == 0) {  /* buffer is empty */\n' +
'    n = read(0, buf, sizeof buf);\n' +
'    bufp = buf;\n' +
'  }\n' +
'\n' +
'  return (--n >= 0) ? (unsigned char) *bufp++ : EOF;\n' +
' \n' +
'}\n';

var lines = (function() {
  lineText = code.split('\n');
  var ret = [];
  for (var i = 0; i < lineText.length; i++) {
    ret[i] = {
      line: i,
      length: lineText[i].length,
      lineText: lineText[i],
      textStart: /^\s*/.exec(lineText[i])[0].length
    };
  }
  return ret;
})();
var endOfDocument = makeCursor(lines.length - 1,
    lines[lines.length - 1].length);
var wordLine = lines[0];
var bigWordLine = lines[1];
var charLine = lines[2];
var bracesLine = lines[3];
var seekBraceLine = lines[4];

var word1 = {
  start: { line: wordLine.line, ch: 1 },
  end: { line: wordLine.line, ch: 5 }
};
var word2 = {
  start: { line: wordLine.line, ch: word1.end.ch + 2 },
  end: { line: wordLine.line, ch: word1.end.ch + 4 }
};
var word3 = {
  start: { line: bigWordLine.line, ch: 1 },
  end: { line: bigWordLine.line, ch: 5 }
};
var bigWord1 = word1;
var bigWord2 = word2;
var bigWord3 = {
  start: { line: bigWordLine.line, ch: 1 },
  end: { line: bigWordLine.line, ch: 7 }
};
var bigWord4 = {
  start: { line: bigWordLine.line, ch: bigWord1.end.ch + 3 },
  end: { line: bigWordLine.line, ch: bigWord1.end.ch + 7 }
};

var oChars = [ { line: charLine.line, ch: 1 },
    { line: charLine.line, ch: 3 },
    { line: charLine.line, ch: 7 } ];
var pChars = [ { line: charLine.line, ch: 2 },
    { line: charLine.line, ch: 4 },
    { line: charLine.line, ch: 6 },
    { line: charLine.line, ch: 8 } ];
var numChars = [ { line: charLine.line, ch: 10 },
    { line: charLine.line, ch: 12 },
    { line: charLine.line, ch: 14 },
    { line: charLine.line, ch: 16 },
    { line: charLine.line, ch: 18 }];
var parens1 = {
  start: { line: bracesLine.line, ch: 1 },
  end: { line: bracesLine.line, ch: 3 }
};
var squares1 = {
  start: { line: bracesLine.line, ch: 5 },
  end: { line: bracesLine.line, ch: 7 }
};
var curlys1 = {
  start: { line: bracesLine.line, ch: 9 },
  end: { line: bracesLine.line, ch: 11 }
};
var seekOutside = {
  start: { line: seekBraceLine.line, ch: 1 },
  end: { line: seekBraceLine.line, ch: 16 }
};
var seekInside = {
  start: { line: seekBraceLine.line, ch: 14 },
  end: { line: seekBraceLine.line, ch: 11 }
};

function copyCursor(cur) {
  return { ch: cur.ch, line: cur.line };
}

function forEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}

function testVim(name, run, opts, expectedFail) {
  var vimOpts = {
    lineNumbers: true,
    vimMode: true,
    showCursorWhenSelecting: true,
    value: code
  };
  for (var prop in opts) {
    if (opts.hasOwnProperty(prop)) {
      vimOpts[prop] = opts[prop];
    }
  }
  return test('vim_' + name, function() {
    var place = document.getElementById("testground");
    var cm = CodeMirror(place, vimOpts);
    var vim = CodeMirror.Vim.maybeInitVimState_(cm);

    function doKeysFn(cm) {
      return function(args) {
        if (args instanceof Array) {
          arguments = args;
        }
        for (var i = 0; i < arguments.length; i++) {
          CodeMirror.Vim.handleKey(cm, arguments[i]);
        }
      }
    }
    function doInsertModeKeysFn(cm) {
      return function(args) {
        if (args instanceof Array) { arguments = args; }
        function executeHandler(handler) {
          if (typeof handler == 'string') {
            CodeMirror.commands[handler](cm);
          } else {
            handler(cm);
          }
          return true;
        }
        for (var i = 0; i < arguments.length; i++) {
          var key = arguments[i];
          // Find key in keymap and handle.
          var handled = CodeMirror.lookupKey(key, 'vim-insert', executeHandler);
          // Record for insert mode.
          if (handled == "handled" && cm.state.vim.insertMode && arguments[i] != 'Esc') {
            var lastChange = CodeMirror.Vim.getVimGlobalState_().macroModeState.lastInsertModeChanges;
            if (lastChange) {
              lastChange.changes.push(new CodeMirror.Vim.InsertModeKey(key));
            }
          }
        }
      }
    }
    function doExFn(cm) {
      return function(command) {
        cm.openDialog = helpers.fakeOpenDialog(command);
        helpers.doKeys(':');
      }
    }
    function assertCursorAtFn(cm) {
      return function(line, ch) {
        var pos;
        if (ch == null && typeof line.line == 'number') {
          pos = line;
        } else {
          pos = makeCursor(line, ch);
        }
        eqPos(pos, cm.getCursor());
      }
    }
    function fakeOpenDialog(result) {
      return function(text, callback) {
        return callback(result);
      }
    }
    function fakeOpenNotification(matcher) {
      return function(text) {
        matcher(text);
      }
    }
    var helpers = {
      doKeys: doKeysFn(cm),
      // Warning: Only emulates keymap events, not character insertions. Use
      // replaceRange to simulate character insertions.
      // Keys are in CodeMirror format, NOT vim format.
      doInsertModeKeys: doInsertModeKeysFn(cm),
      doEx: doExFn(cm),
      assertCursorAt: assertCursorAtFn(cm),
      fakeOpenDialog: fakeOpenDialog,
      fakeOpenNotification: fakeOpenNotification,
      getRegisterController: function() {
        return CodeMirror.Vim.getRegisterController();
      }
    }
    CodeMirror.Vim.resetVimGlobalState_();
    var successful = false;
    var savedOpenNotification = cm.openNotification;
    try {
      run(cm, vim, helpers);
      successful = true;
    } finally {
      cm.openNotification = savedOpenNotification;
      if (!successful || verbose) {
        place.style.visibility = "visible";
      } else {
        place.removeChild(cm.getWrapperElement());
      }
    }
  }, expectedFail);
};
testVim('qq@q', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'q', 'l', 'l', 'q');
  helpers.assertCursorAt(0,2);
  helpers.doKeys('@', 'q');
  helpers.assertCursorAt(0,4);
}, { value: '            '});
testVim('@@', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'q', 'l', 'l', 'q');
  helpers.assertCursorAt(0,2);
  helpers.doKeys('@', 'q');
  helpers.assertCursorAt(0,4);
  helpers.doKeys('@', '@');
  helpers.assertCursorAt(0,6);
}, { value: '            '});
var jumplistScene = ''+
  'word\n'+
  '(word)\n'+
  '{word\n'+
  'word.\n'+
  '\n'+
  'word search\n'+
  '}word\n'+
  'word\n'+
  'word\n';
function testJumplist(name, keys, endPos, startPos, dialog) {
  endPos = makeCursor(endPos[0], endPos[1]);
  startPos = makeCursor(startPos[0], startPos[1]);
  testVim(name, function(cm, vim, helpers) {
    CodeMirror.Vim.resetVimGlobalState_();
    if(dialog)cm.openDialog = helpers.fakeOpenDialog('word');
    cm.setCursor(startPos);
    helpers.doKeys.apply(null, keys);
    helpers.assertCursorAt(endPos);
  }, {value: jumplistScene});
};
testJumplist('jumplist_H', ['H', '<C-o>'], [5,2], [5,2]);
testJumplist('jumplist_M', ['M', '<C-o>'], [2,2], [2,2]);
testJumplist('jumplist_L', ['L', '<C-o>'], [2,2], [2,2]);
testJumplist('jumplist_[[', ['[', '[', '<C-o>'], [5,2], [5,2]);
testJumplist('jumplist_]]', [']', ']', '<C-o>'], [2,2], [2,2]);
testJumplist('jumplist_G', ['G', '<C-o>'], [5,2], [5,2]);
testJumplist('jumplist_gg', ['g', 'g', '<C-o>'], [5,2], [5,2]);
testJumplist('jumplist_%', ['%', '<C-o>'], [1,5], [1,5]);
testJumplist('jumplist_{', ['{', '<C-o>'], [1,5], [1,5]);
testJumplist('jumplist_}', ['}', '<C-o>'], [1,5], [1,5]);
testJumplist('jumplist_\'', ['m', 'a', 'h', '\'', 'a', 'h', '<C-i>'], [1,0], [1,5]);
testJumplist('jumplist_`', ['m', 'a', 'h', '`', 'a', 'h', '<C-i>'], [1,5], [1,5]);
testJumplist('jumplist_*_cachedCursor', ['*', '<C-o>'], [1,3], [1,3]);
testJumplist('jumplist_#_cachedCursor', ['#', '<C-o>'], [1,3], [1,3]);
testJumplist('jumplist_n', ['#', 'n', '<C-o>'], [1,1], [2,3]);
testJumplist('jumplist_N', ['#', 'N', '<C-o>'], [1,1], [2,3]);
testJumplist('jumplist_repeat_<c-o>', ['*', '*', '*', '3', '<C-o>'], [2,3], [2,3]);
testJumplist('jumplist_repeat_<c-i>', ['*', '*', '*', '3', '<C-o>', '2', '<C-i>'], [5,0], [2,3]);
testJumplist('jumplist_repeated_motion', ['3', '*', '<C-o>'], [2,3], [2,3]);
testJumplist('jumplist_/', ['/', '<C-o>'], [2,3], [2,3], 'dialog');
testJumplist('jumplist_?', ['?', '<C-o>'], [2,3], [2,3], 'dialog');
testJumplist('jumplist_skip_delted_mark<c-o>',
             ['*', 'n', 'n', 'k', 'd', 'k', '<C-o>', '<C-o>', '<C-o>'],
             [0,2], [0,2]);
testJumplist('jumplist_skip_delted_mark<c-i>',
             ['*', 'n', 'n', 'k', 'd', 'k', '<C-o>', '<C-i>', '<C-i>'],
             [1,0], [0,2]);

/**
 * @param name Name of the test
 * @param keys An array of keys or a string with a single key to simulate.
 * @param endPos The expected end position of the cursor.
 * @param startPos The position the cursor should start at, defaults to 0, 0.
 */
function testMotion(name, keys, endPos, startPos) {
  testVim(name, function(cm, vim, helpers) {
    if (!startPos) {
      startPos = { line: 0, ch: 0 };
    }
    cm.setCursor(startPos);
    helpers.doKeys(keys);
    helpers.assertCursorAt(endPos);
  });
};

function makeCursor(line, ch) {
  return { line: line, ch: ch };
};

function offsetCursor(cur, offsetLine, offsetCh) {
  return { line: cur.line + offsetLine, ch: cur.ch + offsetCh };
};

// Motion tests
testMotion('|', '|', makeCursor(0, 0), makeCursor(0,4));
testMotion('|_repeat', ['3', '|'], makeCursor(0, 2), makeCursor(0,4));
testMotion('h', 'h', makeCursor(0, 0), word1.start);
testMotion('h_repeat', ['3', 'h'], offsetCursor(word1.end, 0, -3), word1.end);
testMotion('l', 'l', makeCursor(0, 1));
testMotion('l_repeat', ['2', 'l'], makeCursor(0, 2));
testMotion('j', 'j', offsetCursor(word1.end, 1, 0), word1.end);
testMotion('j_repeat', ['2', 'j'], offsetCursor(word1.end, 2, 0), word1.end);
testMotion('j_repeat_clip', ['1000', 'j'], endOfDocument);
testMotion('k', 'k', offsetCursor(word3.end, -1, 0), word3.end);
testMotion('k_repeat', ['2', 'k'], makeCursor(0, 4), makeCursor(2, 4));
testMotion('k_repeat_clip', ['1000', 'k'], makeCursor(0, 4), makeCursor(2, 4));
testMotion('w', 'w', word1.start);
testMotion('w_multiple_newlines_no_space', 'w', makeCursor(12, 2), makeCursor(11, 2));
testMotion('w_multiple_newlines_with_space', 'w', makeCursor(14, 0), makeCursor(12, 51));
testMotion('w_repeat', ['2', 'w'], word2.start);
testMotion('w_wrap', ['w'], word3.start, word2.start);
testMotion('w_endOfDocument', 'w', endOfDocument, endOfDocument);
testMotion('w_start_to_end', ['1000', 'w'], endOfDocument, makeCursor(0, 0));
testMotion('W', 'W', bigWord1.start);
testMotion('W_repeat', ['2', 'W'], bigWord3.start, bigWord1.start);
testMotion('e', 'e', word1.end);
testMotion('e_repeat', ['2', 'e'], word2.end);
testMotion('e_wrap', 'e', word3.end, word2.end);
testMotion('e_endOfDocument', 'e', endOfDocument, endOfDocument);
testMotion('e_start_to_end', ['1000', 'e'], endOfDocument, makeCursor(0, 0));
testMotion('b', 'b', word3.start, word3.end);
testMotion('b_repeat', ['2', 'b'], word2.start, word3.end);
testMotion('b_wrap', 'b', word2.start, word3.start);
testMotion('b_startOfDocument', 'b', makeCursor(0, 0), makeCursor(0, 0));
testMotion('b_end_to_start', ['1000', 'b'], makeCursor(0, 0), endOfDocument);
testMotion('ge', ['g', 'e'], word2.end, word3.end);
testMotion('ge_repeat', ['2', 'g', 'e'], word1.end, word3.start);
testMotion('ge_wrap', ['g', 'e'], word2.end, word3.start);
testMotion('ge_startOfDocument', ['g', 'e'], makeCursor(0, 0),
    makeCursor(0, 0));
testMotion('ge_end_to_start', ['1000', 'g', 'e'], makeCursor(0, 0), endOfDocument);
testMotion('gg', ['g', 'g'], makeCursor(lines[0].line, lines[0].textStart),
    makeCursor(3, 1));
testMotion('gg_repeat', ['3', 'g', 'g'],
    makeCursor(lines[2].line, lines[2].textStart));
testMotion('G', 'G',
    makeCursor(lines[lines.length - 1].line, lines[lines.length - 1].textStart),
    makeCursor(3, 1));
testMotion('G_repeat', ['3', 'G'], makeCursor(lines[2].line,
    lines[2].textStart));
// TODO: Make the test code long enough to test Ctrl-F and Ctrl-B.
testMotion('0', '0', makeCursor(0, 0), makeCursor(0, 8));
testMotion('^', '^', makeCursor(0, lines[0].textStart), makeCursor(0, 8));
testMotion('+', '+', makeCursor(1, lines[1].textStart), makeCursor(0, 8));
testMotion('-', '-', makeCursor(0, lines[0].textStart), makeCursor(1, 4));
testMotion('_', ['6','_'], makeCursor(5, lines[5].textStart), makeCursor(0, 8));
testMotion('$', '$', makeCursor(0, lines[0].length - 1), makeCursor(0, 1));
testMotion('$_repeat', ['2', '$'], makeCursor(1, lines[1].length - 1),
    makeCursor(0, 3));
testMotion('f', ['f', 'p'], pChars[0], makeCursor(charLine.line, 0));
testMotion('f_repeat', ['2', 'f', 'p'], pChars[2], pChars[0]);
testMotion('f_num', ['f', '2'], numChars[2], makeCursor(charLine.line, 0));
testMotion('t', ['t','p'], offsetCursor(pChars[0], 0, -1),
    makeCursor(charLine.line, 0));
testMotion('t_repeat', ['2', 't', 'p'], offsetCursor(pChars[2], 0, -1),
    pChars[0]);
testMotion('F', ['F', 'p'], pChars[0], pChars[1]);
testMotion('F_repeat', ['2', 'F', 'p'], pChars[0], pChars[2]);
testMotion('T', ['T', 'p'], offsetCursor(pChars[0], 0, 1), pChars[1]);
testMotion('T_repeat', ['2', 'T', 'p'], offsetCursor(pChars[0], 0, 1), pChars[2]);
testMotion('%_parens', ['%'], parens1.end, parens1.start);
testMotion('%_squares', ['%'], squares1.end, squares1.start);
testMotion('%_braces', ['%'], curlys1.end, curlys1.start);
testMotion('%_seek_outside', ['%'], seekOutside.end, seekOutside.start);
testMotion('%_seek_inside', ['%'], seekInside.end, seekInside.start);
testVim('%_seek_skip', function(cm, vim, helpers) {
  cm.setCursor(0,0);
  helpers.doKeys(['%']);
  helpers.assertCursorAt(0,9);
}, {value:'01234"("()'});
testVim('%_skip_string', function(cm, vim, helpers) {
  cm.setCursor(0,0);
  helpers.doKeys(['%']);
  helpers.assertCursorAt(0,4);
  cm.setCursor(0,2);
  helpers.doKeys(['%']);
  helpers.assertCursorAt(0,0);
}, {value:'(")")'});
(')')
testVim('%_skip_comment', function(cm, vim, helpers) {
  cm.setCursor(0,0);
  helpers.doKeys(['%']);
  helpers.assertCursorAt(0,6);
  cm.setCursor(0,3);
  helpers.doKeys(['%']);
  helpers.assertCursorAt(0,0);
}, {value:'(/*)*/)'});
// Make sure that moving down after going to the end of a line always leaves you
// at the end of a line, but preserves the offset in other cases
testVim('Changing lines after Eol operation', function(cm, vim, helpers) {
  cm.setCursor(0,0);
  helpers.doKeys(['$']);
  helpers.doKeys(['j']);
  // After moving to Eol and then down, we should be at Eol of line 2
  helpers.assertCursorAt({ line: 1, ch: lines[1].length - 1 });
  helpers.doKeys(['j']);
  // After moving down, we should be at Eol of line 3
  helpers.assertCursorAt({ line: 2, ch: lines[2].length - 1 });
  helpers.doKeys(['h']);
  helpers.doKeys(['j']);
  // After moving back one space and then down, since line 4 is shorter than line 2, we should
  // be at Eol of line 2 - 1
  helpers.assertCursorAt({ line: 3, ch: lines[3].length - 1 });
  helpers.doKeys(['j']);
  helpers.doKeys(['j']);
  // After moving down again, since line 3 has enough characters, we should be back to the
  // same place we were at on line 1
  helpers.assertCursorAt({ line: 5, ch: lines[2].length - 2 });
});
//making sure gj and gk recover from clipping
testVim('gj_gk_clipping', function(cm,vim,helpers){
  cm.setCursor(0, 1);
  helpers.doKeys('g','j','g','j');
  helpers.assertCursorAt(2, 1);
  helpers.doKeys('g','k','g','k');
  helpers.assertCursorAt(0, 1);
},{value: 'line 1\n\nline 2'});
//testing a mix of j/k and gj/gk
testVim('j_k_and_gj_gk', function(cm,vim,helpers){
  cm.setSize(120);
  cm.setCursor(0, 0);
  //go to the last character on the first line
  helpers.doKeys('$');
  //move up/down on the column within the wrapped line
  //side-effect: cursor is not locked to eol anymore
  helpers.doKeys('g','k');
  var cur=cm.getCursor();
  eq(cur.line,0);
  is((cur.ch<176),'gk didn\'t move cursor back (1)');
  helpers.doKeys('g','j');
  helpers.assertCursorAt(0, 176);
  //should move to character 177 on line 2 (j/k preserve character index within line)
  helpers.doKeys('j');
  //due to different line wrapping, the cursor can be on a different screen-x now
  //gj and gk preserve screen-x on movement, much like moveV
  helpers.doKeys('3','g','k');
  cur=cm.getCursor();
  eq(cur.line,1);
  is((cur.ch<176),'gk didn\'t move cursor back (2)');
  helpers.doKeys('g','j','2','g','j');
  //should return to the same character-index
  helpers.doKeys('k');
  helpers.assertCursorAt(0, 176);
},{ lineWrapping:true, value: 'This line is intentially long to test movement of gj and gk over wrapped lines. I will start on the end of this line, then make a step up and back to set the origin for j and k.\nThis line is supposed to be even longer than the previous. I will jump here and make another wiggle with gj and gk, before I jump back to the line above. Both wiggles should not change my cursor\'s target character but both j/k and gj/gk change each other\'s reference position.'});
testVim('gj_gk', function(cm, vim, helpers) {
  if (phantom) return;
  cm.setSize(120);
  // Test top of document edge case.
  cm.setCursor(0, 4);
  helpers.doKeys('g', 'j');
  helpers.doKeys('10', 'g', 'k');
  helpers.assertCursorAt(0, 4);

  // Test moving down preserves column position.
  helpers.doKeys('g', 'j');
  var pos1 = cm.getCursor();
  var expectedPos2 = { line: 0, ch: (pos1.ch - 4) * 2 + 4};
  helpers.doKeys('g', 'j');
  helpers.assertCursorAt(expectedPos2);

  // Move to the last character
  cm.setCursor(0, 0);
  // Move left to reset HSPos
  helpers.doKeys('h');
  // Test bottom of document edge case.
  helpers.doKeys('100', 'g', 'j');
  var endingPos = cm.getCursor();
  is(endingPos != 0, 'gj should not be on wrapped line 0');
  var topLeftCharCoords = cm.charCoords(makeCursor(0, 0));
  var endingCharCoords = cm.charCoords(endingPos);
  is(topLeftCharCoords.left == endingCharCoords.left, 'gj should end up on column 0');
},{ lineNumbers: false, lineWrapping:true, value: 'Thislineisintentiallylongtotestmovementofgjandgkoverwrappedlines.' });
testVim('}', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('}');
  helpers.assertCursorAt(1, 0);
  cm.setCursor(0, 0);
  helpers.doKeys('2', '}');
  helpers.assertCursorAt(4, 0);
  cm.setCursor(0, 0);
  helpers.doKeys('6', '}');
  helpers.assertCursorAt(5, 0);
}, { value: 'a\n\nb\nc\n\nd' });
testVim('{', function(cm, vim, helpers) {
  cm.setCursor(5, 0);
  helpers.doKeys('{');
  helpers.assertCursorAt(4, 0);
  cm.setCursor(5, 0);
  helpers.doKeys('2', '{');
  helpers.assertCursorAt(1, 0);
  cm.setCursor(5, 0);
  helpers.doKeys('6', '{');
  helpers.assertCursorAt(0, 0);
}, { value: 'a\n\nb\nc\n\nd' });
testVim('paragraph motions', function(cm, vim, helpers) {
  cm.setCursor(10, 0);
  helpers.doKeys('{');
  helpers.assertCursorAt(4, 0);
  helpers.doKeys('{');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('2', '}');
  helpers.assertCursorAt(7, 0);
  helpers.doKeys('2', '}');
  helpers.assertCursorAt(16, 0);

  cm.setCursor(9, 0);
  helpers.doKeys('}');
  helpers.assertCursorAt(14, 0);

  cm.setCursor(6, 0);
  helpers.doKeys('}');
  helpers.assertCursorAt(7, 0);

  // ip inside empty space
  cm.setCursor(10, 0);
  helpers.doKeys('v', 'i', 'p');
  eqPos(Pos(7, 0), cm.getCursor('anchor'));
  eqPos(Pos(12, 0), cm.getCursor('head'));
  helpers.doKeys('i', 'p');
  eqPos(Pos(7, 0), cm.getCursor('anchor'));
  eqPos(Pos(13, 1), cm.getCursor('head'));
  helpers.doKeys('2', 'i', 'p');
  eqPos(Pos(7, 0), cm.getCursor('anchor'));
  eqPos(Pos(16, 1), cm.getCursor('head'));

  // should switch to visualLine mode
  cm.setCursor(14, 0);
  helpers.doKeys('<Esc>', 'v', 'i', 'p');
  helpers.assertCursorAt(14, 0);

  cm.setCursor(14, 0);
  helpers.doKeys('<Esc>', 'V', 'i', 'p');
  eqPos(Pos(16, 1), cm.getCursor('head'));

  // ap inside empty space
  cm.setCursor(10, 0);
  helpers.doKeys('<Esc>', 'v', 'a', 'p');
  eqPos(Pos(7, 0), cm.getCursor('anchor'));
  eqPos(Pos(13, 1), cm.getCursor('head'));
  helpers.doKeys('a', 'p');
  eqPos(Pos(7, 0), cm.getCursor('anchor'));
  eqPos(Pos(16, 1), cm.getCursor('head'));

  cm.setCursor(13, 0);
  helpers.doKeys('v', 'a', 'p');
  eqPos(Pos(13, 0), cm.getCursor('anchor'));
  eqPos(Pos(14, 0), cm.getCursor('head'));

  cm.setCursor(16, 0);
  helpers.doKeys('v', 'a', 'p');
  eqPos(Pos(14, 0), cm.getCursor('anchor'));
  eqPos(Pos(16, 1), cm.getCursor('head'));

  cm.setCursor(0, 0);
  helpers.doKeys('v', 'a', 'p');
  eqPos(Pos(0, 0), cm.getCursor('anchor'));
  eqPos(Pos(4, 0), cm.getCursor('head'));

  cm.setCursor(0, 0);
  helpers.doKeys('d', 'i', 'p');
  var register = helpers.getRegisterController().getRegister();
  eq('a\na\n', register.toString());
  is(register.linewise);
  helpers.doKeys('3', 'j', 'p');
  helpers.doKeys('y', 'i', 'p');
  is(register.linewise);
  eq('b\na\na\nc\n', register.toString());
}, { value: 'a\na\n\n\n\nb\nc\n\n\n\n\n\n\nd\n\ne\nf' });

// Operator tests
testVim('dl', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 0);
  cm.setCursor(curStart);
  helpers.doKeys('d', 'l');
  eq('word1 ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq(' ', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
}, { value: ' word1 ' });
testVim('dl_eol', function(cm, vim, helpers) {
  cm.setCursor(0, 6);
  helpers.doKeys('d', 'l');
  eq(' word1', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq(' ', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 6);
}, { value: ' word1 ' });
testVim('dl_repeat', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 0);
  cm.setCursor(curStart);
  helpers.doKeys('2', 'd', 'l');
  eq('ord1 ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq(' w', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
}, { value: ' word1 ' });
testVim('dh', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 3);
  cm.setCursor(curStart);
  helpers.doKeys('d', 'h');
  eq(' wrd1 ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('o', register.toString());
  is(!register.linewise);
  eqPos(offsetCursor(curStart, 0 , -1), cm.getCursor());
}, { value: ' word1 ' });
testVim('dj', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 3);
  cm.setCursor(curStart);
  helpers.doKeys('d', 'j');
  eq(' word3', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq(' word1\nword2\n', register.toString());
  is(register.linewise);
  helpers.assertCursorAt(0, 1);
}, { value: ' word1\nword2\n word3' });
testVim('dj_end_of_document', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 3);
  cm.setCursor(curStart);
  helpers.doKeys('d', 'j');
  eq(' word1 ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 3);
}, { value: ' word1 ' });
testVim('dk', function(cm, vim, helpers) {
  var curStart = makeCursor(1, 3);
  cm.setCursor(curStart);
  helpers.doKeys('d', 'k');
  eq(' word3', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq(' word1\nword2\n', register.toString());
  is(register.linewise);
  helpers.assertCursorAt(0, 1);
}, { value: ' word1\nword2\n word3' });
testVim('dk_start_of_document', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 3);
  cm.setCursor(curStart);
  helpers.doKeys('d', 'k');
  eq(' word1 ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 3);
}, { value: ' word1 ' });
testVim('dw_space', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 0);
  cm.setCursor(curStart);
  helpers.doKeys('d', 'w');
  eq('word1 ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq(' ', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
}, { value: ' word1 ' });
testVim('dw_word', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 1);
  cm.setCursor(curStart);
  helpers.doKeys('d', 'w');
  eq(' word2', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('word1 ', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
}, { value: ' word1 word2' });
testVim('dw_only_word', function(cm, vim, helpers) {
  // Test that if there is only 1 word left, dw deletes till the end of the
  // line.
  cm.setCursor(0, 1);
  helpers.doKeys('d', 'w');
  eq(' ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('word1 ', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 1);
}, { value: ' word1 ' });
testVim('dw_eol', function(cm, vim, helpers) {
  // Assert that dw does not delete the newline if last word to delete is at end
  // of line.
  cm.setCursor(0, 1);
  helpers.doKeys('d', 'w');
  eq(' \nword2', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('word1', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 1);
}, { value: ' word1\nword2' });
testVim('dw_eol_with_multiple_newlines', function(cm, vim, helpers) {
  // Assert that dw does not delete the newline if last word to delete is at end
  // of line and it is followed by multiple newlines.
  cm.setCursor(0, 1);
  helpers.doKeys('d', 'w');
  eq(' \n\nword2', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('word1', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 1);
}, { value: ' word1\n\nword2' });
testVim('dw_empty_line_followed_by_whitespace', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'w');
  eq('  \nword', cm.getValue());
}, { value: '\n  \nword' });
testVim('dw_empty_line_followed_by_word', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'w');
  eq('word', cm.getValue());
}, { value: '\nword' });
testVim('dw_empty_line_followed_by_empty_line', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'w');
  eq('\n', cm.getValue());
}, { value: '\n\n' });
testVim('dw_whitespace_followed_by_whitespace', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'w');
  eq('\n   \n', cm.getValue());
}, { value: '  \n   \n' });
testVim('dw_whitespace_followed_by_empty_line', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'w');
  eq('\n\n', cm.getValue());
}, { value: '  \n\n' });
testVim('dw_word_whitespace_word', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'w');
  eq('\n   \nword2', cm.getValue());
}, { value: 'word1\n   \nword2'})
testVim('dw_end_of_document', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('d', 'w');
  eq('\nab', cm.getValue());
}, { value: '\nabc' });
testVim('dw_repeat', function(cm, vim, helpers) {
  // Assert that dw does delete newline if it should go to the next line, and
  // that repeat works properly.
  cm.setCursor(0, 1);
  helpers.doKeys('d', '2', 'w');
  eq(' ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('word1\nword2', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 1);
}, { value: ' word1\nword2' });
testVim('de_word_start_and_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'e');
  eq('\n\n', cm.getValue());
}, { value: 'word\n\n' });
testVim('de_word_end_and_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  helpers.doKeys('d', 'e');
  eq('wor', cm.getValue());
}, { value: 'word\n\n\n' });
testVim('de_whitespace_and_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'e');
  eq('', cm.getValue());
}, { value: '   \n\n\n' });
testVim('de_end_of_document', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('d', 'e');
  eq('\nab', cm.getValue());
}, { value: '\nabc' });
testVim('db_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(2, 0);
  helpers.doKeys('d', 'b');
  eq('\n\n', cm.getValue());
}, { value: '\n\n\n' });
testVim('db_word_start_and_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(2, 0);
  helpers.doKeys('d', 'b');
  eq('\nword', cm.getValue());
}, { value: '\n\nword' });
testVim('db_word_end_and_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(2, 3);
  helpers.doKeys('d', 'b');
  eq('\n\nd', cm.getValue());
}, { value: '\n\nword' });
testVim('db_whitespace_and_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(2, 0);
  helpers.doKeys('d', 'b');
  eq('', cm.getValue());
}, { value: '\n   \n' });
testVim('db_start_of_document', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'b');
  eq('abc\n', cm.getValue());
}, { value: 'abc\n' });
testVim('dge_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(1, 0);
  helpers.doKeys('d', 'g', 'e');
  // Note: In real VIM the result should be '', but it's not quite consistent,
  // since 2 newlines are deleted. But in the similar case of word\n\n, only
  // 1 newline is deleted. We'll diverge from VIM's behavior since it's much
  // easier this way.
  eq('\n', cm.getValue());
}, { value: '\n\n' });
testVim('dge_word_and_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(1, 0);
  helpers.doKeys('d', 'g', 'e');
  eq('wor\n', cm.getValue());
}, { value: 'word\n\n'});
testVim('dge_whitespace_and_empty_lines', function(cm, vim, helpers) {
  cm.setCursor(2, 0);
  helpers.doKeys('d', 'g', 'e');
  eq('', cm.getValue());
}, { value: '\n  \n' });
testVim('dge_start_of_document', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('d', 'g', 'e');
  eq('bc\n', cm.getValue());
}, { value: 'abc\n' });
testVim('d_inclusive', function(cm, vim, helpers) {
  // Assert that when inclusive is set, the character the cursor is on gets
  // deleted too.
  var curStart = makeCursor(0, 1);
  cm.setCursor(curStart);
  helpers.doKeys('d', 'e');
  eq('  ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('word1', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
}, { value: ' word1 ' });
testVim('d_reverse', function(cm, vim, helpers) {
  // Test that deleting in reverse works.
  cm.setCursor(1, 0);
  helpers.doKeys('d', 'b');
  eq(' word2 ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('word1\n', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 1);
}, { value: ' word1\nword2 ' });
testVim('dd', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  var expectedBuffer = cm.getRange({ line: 0, ch: 0 },
    { line: 1, ch: 0 });
  var expectedLineCount = cm.lineCount() - 1;
  helpers.doKeys('d', 'd');
  eq(expectedLineCount, cm.lineCount());
  var register = helpers.getRegisterController().getRegister();
  eq(expectedBuffer, register.toString());
  is(register.linewise);
  helpers.assertCursorAt(0, lines[1].textStart);
});
testVim('dd_prefix_repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  var expectedBuffer = cm.getRange({ line: 0, ch: 0 },
    { line: 2, ch: 0 });
  var expectedLineCount = cm.lineCount() - 2;
  helpers.doKeys('2', 'd', 'd');
  eq(expectedLineCount, cm.lineCount());
  var register = helpers.getRegisterController().getRegister();
  eq(expectedBuffer, register.toString());
  is(register.linewise);
  helpers.assertCursorAt(0, lines[2].textStart);
});
testVim('dd_motion_repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  var expectedBuffer = cm.getRange({ line: 0, ch: 0 },
    { line: 2, ch: 0 });
  var expectedLineCount = cm.lineCount() - 2;
  helpers.doKeys('d', '2', 'd');
  eq(expectedLineCount, cm.lineCount());
  var register = helpers.getRegisterController().getRegister();
  eq(expectedBuffer, register.toString());
  is(register.linewise);
  helpers.assertCursorAt(0, lines[2].textStart);
});
testVim('dd_multiply_repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  var expectedBuffer = cm.getRange({ line: 0, ch: 0 },
    { line: 6, ch: 0 });
  var expectedLineCount = cm.lineCount() - 6;
  helpers.doKeys('2', 'd', '3', 'd');
  eq(expectedLineCount, cm.lineCount());
  var register = helpers.getRegisterController().getRegister();
  eq(expectedBuffer, register.toString());
  is(register.linewise);
  helpers.assertCursorAt(0, lines[6].textStart);
});
testVim('dd_lastline', function(cm, vim, helpers) {
  cm.setCursor(cm.lineCount(), 0);
  var expectedLineCount = cm.lineCount() - 1;
  helpers.doKeys('d', 'd');
  eq(expectedLineCount, cm.lineCount());
  helpers.assertCursorAt(cm.lineCount() - 1, 0);
});
testVim('dd_only_line', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  var expectedRegister = cm.getValue() + "\n";
  helpers.doKeys('d','d');
  eq(1, cm.lineCount());
  eq('', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq(expectedRegister, register.toString());
}, { value: "thisistheonlyline" });
// Yank commands should behave the exact same as d commands, expect that nothing
// gets deleted.
testVim('yw_repeat', function(cm, vim, helpers) {
  // Assert that yw does yank newline if it should go to the next line, and
  // that repeat works properly.
  var curStart = makeCursor(0, 1);
  cm.setCursor(curStart);
  helpers.doKeys('y', '2', 'w');
  eq(' word1\nword2', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('word1\nword2', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
}, { value: ' word1\nword2' });
testVim('yy_multiply_repeat', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 3);
  cm.setCursor(curStart);
  var expectedBuffer = cm.getRange({ line: 0, ch: 0 },
    { line: 6, ch: 0 });
  var expectedLineCount = cm.lineCount();
  helpers.doKeys('2', 'y', '3', 'y');
  eq(expectedLineCount, cm.lineCount());
  var register = helpers.getRegisterController().getRegister();
  eq(expectedBuffer, register.toString());
  is(register.linewise);
  eqPos(curStart, cm.getCursor());
});
// Change commands behave like d commands except that it also enters insert
// mode. In addition, when the change is linewise, an additional newline is
// inserted so that insert mode starts on that line.
testVim('cw', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('c', '2', 'w');
  eq(' word3', cm.getValue());
  helpers.assertCursorAt(0, 0);
}, { value: 'word1 word2 word3'});
testVim('cw_repeat', function(cm, vim, helpers) {
  // Assert that cw does delete newline if it should go to the next line, and
  // that repeat works properly.
  var curStart = makeCursor(0, 1);
  cm.setCursor(curStart);
  helpers.doKeys('c', '2', 'w');
  eq(' ', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('word1\nword2', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
  eq('vim-insert', cm.getOption('keyMap'));
}, { value: ' word1\nword2' });
testVim('cc_multiply_repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  var expectedBuffer = cm.getRange({ line: 0, ch: 0 },
    { line: 6, ch: 0 });
  var expectedLineCount = cm.lineCount() - 5;
  helpers.doKeys('2', 'c', '3', 'c');
  eq(expectedLineCount, cm.lineCount());
  var register = helpers.getRegisterController().getRegister();
  eq(expectedBuffer, register.toString());
  is(register.linewise);
  eq('vim-insert', cm.getOption('keyMap'));
});
testVim('cc_should_not_append_to_document', function(cm, vim, helpers) {
  var expectedLineCount = cm.lineCount();
  cm.setCursor(cm.lastLine(), 0);
  helpers.doKeys('c', 'c');
  eq(expectedLineCount, cm.lineCount());
});
function fillArray(val, times) {
  var arr = [];
  for (var i = 0; i < times; i++) {
    arr.push(val);
  }
  return arr;
}
testVim('c_visual_block', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('<C-v>', '2', 'j', 'l', 'l', 'l', 'c');
  var replacement = fillArray('hello', 3);
  cm.replaceSelections(replacement);
  eq('1hello\n5hello\nahellofg', cm.getValue());
  helpers.doKeys('<Esc>');
  cm.setCursor(2, 3);
  helpers.doKeys('<C-v>', '2', 'k', 'h', 'C');
  replacement = fillArray('world', 3);
  cm.replaceSelections(replacement);
  eq('1hworld\n5hworld\nahworld', cm.getValue());
}, {value: '1234\n5678\nabcdefg'});
testVim('c_visual_block_replay', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('<C-v>', '2', 'j', 'l', 'c');
  var replacement = fillArray('fo', 3);
  cm.replaceSelections(replacement);
  eq('1fo4\n5fo8\nafodefg', cm.getValue());
  helpers.doKeys('<Esc>');
  cm.setCursor(0, 0);
  helpers.doKeys('.');
  eq('foo4\nfoo8\nfoodefg', cm.getValue());
}, {value: '1234\n5678\nabcdefg'});

testVim('d_visual_block', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('<C-v>', '2', 'j', 'l', 'l', 'l', 'd');
  eq('1\n5\nafg', cm.getValue());
}, {value: '1234\n5678\nabcdefg'});
testVim('D_visual_block', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('<C-v>', '2', 'j', 'l', 'D');
  eq('1\n5\na', cm.getValue());
}, {value: '1234\n5678\nabcdefg'});

// Swapcase commands edit in place and do not modify registers.
testVim('g~w_repeat', function(cm, vim, helpers) {
  // Assert that dw does delete newline if it should go to the next line, and
  // that repeat works properly.
  var curStart = makeCursor(0, 1);
  cm.setCursor(curStart);
  helpers.doKeys('g', '~', '2', 'w');
  eq(' WORD1\nWORD2', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
}, { value: ' word1\nword2' });
testVim('g~g~', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 3);
  cm.setCursor(curStart);
  var expectedLineCount = cm.lineCount();
  var expectedValue = cm.getValue().toUpperCase();
  helpers.doKeys('2', 'g', '~', '3', 'g', '~');
  eq(expectedValue, cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
}, { value: ' word1\nword2\nword3\nword4\nword5\nword6' });
testVim('gu_and_gU', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 7);
  var value = cm.getValue();
  cm.setCursor(curStart);
  helpers.doKeys('2', 'g', 'U', 'w');
  eq(cm.getValue(), 'wa wb xX WC wd');
  eqPos(curStart, cm.getCursor());
  helpers.doKeys('2', 'g', 'u', 'w');
  eq(cm.getValue(), value);

  helpers.doKeys('2', 'g', 'U', 'B');
  eq(cm.getValue(), 'wa WB Xx wc wd');
  eqPos(makeCursor(0, 3), cm.getCursor());

  cm.setCursor(makeCursor(0, 4));
  helpers.doKeys('g', 'u', 'i', 'w');
  eq(cm.getValue(), 'wa wb Xx wc wd');
  eqPos(makeCursor(0, 3), cm.getCursor());

  // TODO: support gUgU guu
  // eqPos(makeCursor(0, 0), cm.getCursor());

  var register = helpers.getRegisterController().getRegister();
  eq('', register.toString());
  is(!register.linewise);
}, { value: 'wa wb xx wc wd' });
testVim('visual_block_~', function(cm, vim, helpers) {
  cm.setCursor(1, 1);
  helpers.doKeys('<C-v>', 'l', 'l', 'j', '~');
  helpers.assertCursorAt(1, 1);
  eq('hello\nwoRLd\naBCDe', cm.getValue());
  cm.setCursor(2, 0);
  helpers.doKeys('v', 'l', 'l', '~');
  helpers.assertCursorAt(2, 0);
  eq('hello\nwoRLd\nAbcDe', cm.getValue());
},{value: 'hello\nwOrld\nabcde' });
testVim('._swapCase_visualBlock', function(cm, vim, helpers) {
  helpers.doKeys('<C-v>', 'j', 'j', 'l', '~');
  cm.setCursor(0, 3);
  helpers.doKeys('.');
  eq('HelLO\nWorLd\nAbcdE', cm.getValue());
},{value: 'hEllo\nwOrlD\naBcDe' });
testVim('._delete_visualBlock', function(cm, vim, helpers) {
  helpers.doKeys('<C-v>', 'j', 'x');
  eq('ive\ne\nsome\nsugar', cm.getValue());
  helpers.doKeys('.');
  eq('ve\n\nsome\nsugar', cm.getValue());
  helpers.doKeys('j', 'j', '.');
  eq('ve\n\nome\nugar', cm.getValue());
  helpers.doKeys('u', '<C-r>', '.');
  eq('ve\n\nme\ngar', cm.getValue());
},{value: 'give\nme\nsome\nsugar' });
testVim('>{motion}', function(cm, vim, helpers) {
  cm.setCursor(1, 3);
  var expectedLineCount = cm.lineCount();
  var expectedValue = '   word1\n  word2\nword3 ';
  helpers.doKeys('>', 'k');
  eq(expectedValue, cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 3);
}, { value: ' word1\nword2\nword3 ', indentUnit: 2 });
testVim('>>', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  var expectedLineCount = cm.lineCount();
  var expectedValue = '   word1\n  word2\nword3 ';
  helpers.doKeys('2', '>', '>');
  eq(expectedValue, cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 3);
}, { value: ' word1\nword2\nword3 ', indentUnit: 2 });
testVim('<{motion}', function(cm, vim, helpers) {
  cm.setCursor(1, 3);
  var expectedLineCount = cm.lineCount();
  var expectedValue = ' word1\nword2\nword3 ';
  helpers.doKeys('<', 'k');
  eq(expectedValue, cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 1);
}, { value: '   word1\n  word2\nword3 ', indentUnit: 2 });
testVim('<<', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  var expectedLineCount = cm.lineCount();
  var expectedValue = ' word1\nword2\nword3 ';
  helpers.doKeys('2', '<', '<');
  eq(expectedValue, cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 1);
}, { value: '   word1\n  word2\nword3 ', indentUnit: 2 });

// Edit tests
function testEdit(name, before, pos, edit, after) {
  return testVim(name, function(cm, vim, helpers) {
             var ch = before.search(pos)
             var line = before.substring(0, ch).split('\n').length - 1;
             if (line) {
               ch = before.substring(0, ch).split('\n').pop().length;
             }
             cm.setCursor(line, ch);
             helpers.doKeys.apply(this, edit.split(''));
             eq(after, cm.getValue());
           }, {value: before});
}

// These Delete tests effectively cover word-wise Change, Visual & Yank.
// Tabs are used as differentiated whitespace to catch edge cases.
// Normal word:
testEdit('diw_mid_spc', 'foo \tbAr\t baz', /A/, 'diw', 'foo \t\t baz');
testEdit('daw_mid_spc', 'foo \tbAr\t baz', /A/, 'daw', 'foo \tbaz');
testEdit('diw_mid_punct', 'foo \tbAr.\t baz', /A/, 'diw', 'foo \t.\t baz');
testEdit('daw_mid_punct', 'foo \tbAr.\t baz', /A/, 'daw', 'foo.\t baz');
testEdit('diw_mid_punct2', 'foo \t,bAr.\t baz', /A/, 'diw', 'foo \t,.\t baz');
testEdit('daw_mid_punct2', 'foo \t,bAr.\t baz', /A/, 'daw', 'foo \t,.\t baz');
testEdit('diw_start_spc', 'bAr \tbaz', /A/, 'diw', ' \tbaz');
testEdit('daw_start_spc', 'bAr \tbaz', /A/, 'daw', 'baz');
testEdit('diw_start_punct', 'bAr. \tbaz', /A/, 'diw', '. \tbaz');
testEdit('daw_start_punct', 'bAr. \tbaz', /A/, 'daw', '. \tbaz');
testEdit('diw_end_spc', 'foo \tbAr', /A/, 'diw', 'foo \t');
testEdit('daw_end_spc', 'foo \tbAr', /A/, 'daw', 'foo');
testEdit('diw_end_punct', 'foo \tbAr.', /A/, 'diw', 'foo \t.');
testEdit('daw_end_punct', 'foo \tbAr.', /A/, 'daw', 'foo.');
// Big word:
testEdit('diW_mid_spc', 'foo \tbAr\t baz', /A/, 'diW', 'foo \t\t baz');
testEdit('daW_mid_spc', 'foo \tbAr\t baz', /A/, 'daW', 'foo \tbaz');
testEdit('diW_mid_punct', 'foo \tbAr.\t baz', /A/, 'diW', 'foo \t\t baz');
testEdit('daW_mid_punct', 'foo \tbAr.\t baz', /A/, 'daW', 'foo \tbaz');
testEdit('diW_mid_punct2', 'foo \t,bAr.\t baz', /A/, 'diW', 'foo \t\t baz');
testEdit('daW_mid_punct2', 'foo \t,bAr.\t baz', /A/, 'daW', 'foo \tbaz');
testEdit('diW_start_spc', 'bAr\t baz', /A/, 'diW', '\t baz');
testEdit('daW_start_spc', 'bAr\t baz', /A/, 'daW', 'baz');
testEdit('diW_start_punct', 'bAr.\t baz', /A/, 'diW', '\t baz');
testEdit('daW_start_punct', 'bAr.\t baz', /A/, 'daW', 'baz');
testEdit('diW_end_spc', 'foo \tbAr', /A/, 'diW', 'foo \t');
testEdit('daW_end_spc', 'foo \tbAr', /A/, 'daW', 'foo');
testEdit('diW_end_punct', 'foo \tbAr.', /A/, 'diW', 'foo \t');
testEdit('daW_end_punct', 'foo \tbAr.', /A/, 'daW', 'foo');
// Deleting text objects
//    Open and close on same line
testEdit('di(_open_spc', 'foo (bAr) baz', /\(/, 'di(', 'foo () baz');
testEdit('di)_open_spc', 'foo (bAr) baz', /\(/, 'di)', 'foo () baz');
testEdit('dib_open_spc', 'foo (bAr) baz', /\(/, 'dib', 'foo () baz');
testEdit('da(_open_spc', 'foo (bAr) baz', /\(/, 'da(', 'foo  baz');
testEdit('da)_open_spc', 'foo (bAr) baz', /\(/, 'da)', 'foo  baz');

testEdit('di(_middle_spc', 'foo (bAr) baz', /A/, 'di(', 'foo () baz');
testEdit('di)_middle_spc', 'foo (bAr) baz', /A/, 'di)', 'foo () baz');
testEdit('da(_middle_spc', 'foo (bAr) baz', /A/, 'da(', 'foo  baz');
testEdit('da)_middle_spc', 'foo (bAr) baz', /A/, 'da)', 'foo  baz');

testEdit('di(_close_spc', 'foo (bAr) baz', /\)/, 'di(', 'foo () baz');
testEdit('di)_close_spc', 'foo (bAr) baz', /\)/, 'di)', 'foo () baz');
testEdit('da(_close_spc', 'foo (bAr) baz', /\)/, 'da(', 'foo  baz');
testEdit('da)_close_spc', 'foo (bAr) baz', /\)/, 'da)', 'foo  baz');

//  delete around and inner b.
testEdit('dab_on_(_should_delete_around_()block', 'o( in(abc) )', /\(a/, 'dab', 'o( in )');

//  delete around and inner B.
testEdit('daB_on_{_should_delete_around_{}block', 'o{ in{abc} }', /{a/, 'daB', 'o{ in }');
testEdit('diB_on_{_should_delete_inner_{}block', 'o{ in{abc} }', /{a/, 'diB', 'o{ in{} }');

testEdit('da{_on_{_should_delete_inner_block', 'o{ in{abc} }', /{a/, 'da{', 'o{ in }');
testEdit('di[_on_(_should_not_delete', 'foo (bAr) baz', /\(/, 'di[', 'foo (bAr) baz');
testEdit('di[_on_)_should_not_delete', 'foo (bAr) baz', /\)/, 'di[', 'foo (bAr) baz');
testEdit('da[_on_(_should_not_delete', 'foo (bAr) baz', /\(/, 'da[', 'foo (bAr) baz');
testEdit('da[_on_)_should_not_delete', 'foo (bAr) baz', /\)/, 'da[', 'foo (bAr) baz');
testMotion('di(_outside_should_stay', ['d', 'i', '('], { line: 0, ch: 0}, { line: 0, ch: 0});

//  Open and close on different lines, equally indented
testEdit('di{_middle_spc', 'a{\n\tbar\n}b', /r/, 'di{', 'a{}b');
testEdit('di}_middle_spc', 'a{\n\tbar\n}b', /r/, 'di}', 'a{}b');
testEdit('da{_middle_spc', 'a{\n\tbar\n}b', /r/, 'da{', 'ab');
testEdit('da}_middle_spc', 'a{\n\tbar\n}b', /r/, 'da}', 'ab');
testEdit('daB_middle_spc', 'a{\n\tbar\n}b', /r/, 'daB', 'ab');

// open and close on diff lines, open indented less than close
testEdit('di{_middle_spc', 'a{\n\tbar\n\t}b', /r/, 'di{', 'a{}b');
testEdit('di}_middle_spc', 'a{\n\tbar\n\t}b', /r/, 'di}', 'a{}b');
testEdit('da{_middle_spc', 'a{\n\tbar\n\t}b', /r/, 'da{', 'ab');
testEdit('da}_middle_spc', 'a{\n\tbar\n\t}b', /r/, 'da}', 'ab');

// open and close on diff lines, open indented more than close
testEdit('di[_middle_spc', 'a\t[\n\tbar\n]b', /r/, 'di[', 'a\t[]b');
testEdit('di]_middle_spc', 'a\t[\n\tbar\n]b', /r/, 'di]', 'a\t[]b');
testEdit('da[_middle_spc', 'a\t[\n\tbar\n]b', /r/, 'da[', 'a\tb');
testEdit('da]_middle_spc', 'a\t[\n\tbar\n]b', /r/, 'da]', 'a\tb');

function testSelection(name, before, pos, keys, sel) {
  return testVim(name, function(cm, vim, helpers) {
             var ch = before.search(pos)
             var line = before.substring(0, ch).split('\n').length - 1;
             if (line) {
               ch = before.substring(0, ch).split('\n').pop().length;
             }
             cm.setCursor(line, ch);
             helpers.doKeys.apply(this, keys.split(''));
             eq(sel, cm.getSelection());
           }, {value: before});
}
testSelection('viw_middle_spc', 'foo \tbAr\t baz', /A/, 'viw', 'bAr');
testSelection('vaw_middle_spc', 'foo \tbAr\t baz', /A/, 'vaw', 'bAr\t ');
testSelection('viw_middle_punct', 'foo \tbAr,\t baz', /A/, 'viw', 'bAr');
testSelection('vaW_middle_punct', 'foo \tbAr,\t baz', /A/, 'vaW', 'bAr,\t ');
testSelection('viw_start_spc', 'foo \tbAr\t baz', /b/, 'viw', 'bAr');
testSelection('viw_end_spc', 'foo \tbAr\t baz', /r/, 'viw', 'bAr');
testSelection('viw_eol', 'foo \tbAr', /r/, 'viw', 'bAr');
testSelection('vi{_middle_spc', 'a{\n\tbar\n\t}b', /r/, 'vi{', '\n\tbar\n\t');
testSelection('va{_middle_spc', 'a{\n\tbar\n\t}b', /r/, 'va{', '{\n\tbar\n\t}');

testVim('mouse_select', function(cm, vim, helpers) {
  cm.setSelection(Pos(0, 2), Pos(0, 4), {origin: '*mouse'});
  is(cm.state.vim.visualMode);
  is(!cm.state.vim.visualLine);
  is(!cm.state.vim.visualBlock);
  helpers.doKeys('<Esc>');
  is(!cm.somethingSelected());
  helpers.doKeys('g', 'v');
  eq('cd', cm.getSelection());
}, {value: 'abcdef'});

// Operator-motion tests
testVim('D', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  helpers.doKeys('D');
  eq(' wo\nword2\n word3', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('rd1', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 3);
}, { value: ' word1\nword2\n word3' });
testVim('C', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 3);
  cm.setCursor(curStart);
  helpers.doKeys('C');
  eq(' wo\nword2\n word3', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('rd1', register.toString());
  is(!register.linewise);
  eqPos(curStart, cm.getCursor());
  eq('vim-insert', cm.getOption('keyMap'));
}, { value: ' word1\nword2\n word3' });
testVim('Y', function(cm, vim, helpers) {
  var curStart = makeCursor(0, 3);
  cm.setCursor(curStart);
  helpers.doKeys('Y');
  eq(' word1\nword2\n word3', cm.getValue());
  var register = helpers.getRegisterController().getRegister();
  eq('rd1', register.toString());
  is(!register.linewise);
  helpers.assertCursorAt(0, 3);
}, { value: ' word1\nword2\n word3' });
testVim('~', function(cm, vim, helpers) {
  helpers.doKeys('3', '~');
  eq('ABCdefg', cm.getValue());
  helpers.assertCursorAt(0, 3);
}, { value: 'abcdefg' });

// Action tests
testVim('ctrl-a', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('<C-a>');
  eq('-9', cm.getValue());
  helpers.assertCursorAt(0, 1);
  helpers.doKeys('2','<C-a>');
  eq('-7', cm.getValue());
}, {value: '-10'});
testVim('ctrl-x', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('<C-x>');
  eq('-1', cm.getValue());
  helpers.assertCursorAt(0, 1);
  helpers.doKeys('2','<C-x>');
  eq('-3', cm.getValue());
}, {value: '0'});
testVim('<C-x>/<C-a> search forward', function(cm, vim, helpers) {
  forEach(['<C-x>', '<C-a>'], function(key) {
    cm.setCursor(0, 0);
    helpers.doKeys(key);
    helpers.assertCursorAt(0, 5);
    helpers.doKeys('l');
    helpers.doKeys(key);
    helpers.assertCursorAt(0, 10);
    cm.setCursor(0, 11);
    helpers.doKeys(key);
    helpers.assertCursorAt(0, 11);
  });
}, {value: '__jmp1 jmp2 jmp'});
testVim('a', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('a');
  helpers.assertCursorAt(0, 2);
  eq('vim-insert', cm.getOption('keyMap'));
});
testVim('a_eol', function(cm, vim, helpers) {
  cm.setCursor(0, lines[0].length - 1);
  helpers.doKeys('a');
  helpers.assertCursorAt(0, lines[0].length);
  eq('vim-insert', cm.getOption('keyMap'));
});
testVim('A_endOfSelectedArea', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('v', 'j', 'l');
  helpers.doKeys('A');
  helpers.assertCursorAt(1, 2);
  eq('vim-insert', cm.getOption('keyMap'));
}, {value: 'foo\nbar'});
testVim('i', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('i');
  helpers.assertCursorAt(0, 1);
  eq('vim-insert', cm.getOption('keyMap'));
});
testVim('i_repeat', function(cm, vim, helpers) {
  helpers.doKeys('3', 'i');
  cm.replaceRange('test', cm.getCursor());
  helpers.doKeys('<Esc>');
  eq('testtesttest', cm.getValue());
  helpers.assertCursorAt(0, 11);
}, { value: '' });
testVim('i_repeat_delete', function(cm, vim, helpers) {
  cm.setCursor(0, 4);
  helpers.doKeys('2', 'i');
  cm.replaceRange('z', cm.getCursor());
  helpers.doInsertModeKeys('Backspace', 'Backspace');
  helpers.doKeys('<Esc>');
  eq('abe', cm.getValue());
  helpers.assertCursorAt(0, 1);
}, { value: 'abcde' });
testVim('A', function(cm, vim, helpers) {
  helpers.doKeys('A');
  helpers.assertCursorAt(0, lines[0].length);
  eq('vim-insert', cm.getOption('keyMap'));
});
testVim('A_visual_block', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('<C-v>', '2', 'j', 'l', 'l', 'A');
  var replacement = new Array(cm.listSelections().length+1).join('hello ').split(' ');
  replacement.pop();
  cm.replaceSelections(replacement);
  eq('testhello\nmehello\npleahellose', cm.getValue());
  helpers.doKeys('<Esc>');
  cm.setCursor(0, 0);
  helpers.doKeys('.');
  // TODO this doesn't work yet
  // eq('teshellothello\nme hello hello\nplehelloahellose', cm.getValue());
}, {value: 'test\nme\nplease'});
testVim('I', function(cm, vim, helpers) {
  cm.setCursor(0, 4);
  helpers.doKeys('I');
  helpers.assertCursorAt(0, lines[0].textStart);
  eq('vim-insert', cm.getOption('keyMap'));
});
testVim('I_repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('3', 'I');
  cm.replaceRange('test', cm.getCursor());
  helpers.doKeys('<Esc>');
  eq('testtesttestblah', cm.getValue());
  helpers.assertCursorAt(0, 11);
}, { value: 'blah' });
testVim('I_visual_block', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('<C-v>', '2', 'j', 'l', 'l', 'I');
  var replacement = new Array(cm.listSelections().length+1).join('hello ').split(' ');
  replacement.pop();
  cm.replaceSelections(replacement);
  eq('hellotest\nhellome\nhelloplease', cm.getValue());
}, {value: 'test\nme\nplease'});
testVim('o', function(cm, vim, helpers) {
  cm.setCursor(0, 4);
  helpers.doKeys('o');
  eq('word1\n\nword2', cm.getValue());
  helpers.assertCursorAt(1, 0);
  eq('vim-insert', cm.getOption('keyMap'));
}, { value: 'word1\nword2' });
testVim('o_repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('3', 'o');
  cm.replaceRange('test', cm.getCursor());
  helpers.doKeys('<Esc>');
  eq('\ntest\ntest\ntest', cm.getValue());
  helpers.assertCursorAt(3, 3);
}, { value: '' });
testVim('O', function(cm, vim, helpers) {
  cm.setCursor(0, 4);
  helpers.doKeys('O');
  eq('\nword1\nword2', cm.getValue());
  helpers.assertCursorAt(0, 0);
  eq('vim-insert', cm.getOption('keyMap'));
}, { value: 'word1\nword2' });
testVim('J', function(cm, vim, helpers) {
  cm.setCursor(0, 4);
  helpers.doKeys('J');
  var expectedValue = 'word1  word2\nword3\n word4';
  eq(expectedValue, cm.getValue());
  helpers.assertCursorAt(0, expectedValue.indexOf('word2') - 1);
}, { value: 'word1 \n    word2\nword3\n word4' });
testVim('J_repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 4);
  helpers.doKeys('3', 'J');
  var expectedValue = 'word1  word2 word3\n word4';
  eq(expectedValue, cm.getValue());
  helpers.assertCursorAt(0, expectedValue.indexOf('word3') - 1);
}, { value: 'word1 \n    word2\nword3\n word4' });
testVim('p', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.getRegisterController().pushText('"', 'yank', 'abc\ndef', false);
  helpers.doKeys('p');
  eq('__abc\ndef_', cm.getValue());
  helpers.assertCursorAt(1, 2);
}, { value: '___' });
testVim('p_register', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.getRegisterController().getRegister('a').setText('abc\ndef', false);
  helpers.doKeys('"', 'a', 'p');
  eq('__abc\ndef_', cm.getValue());
  helpers.assertCursorAt(1, 2);
}, { value: '___' });
testVim('p_wrong_register', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.getRegisterController().getRegister('a').setText('abc\ndef', false);
  helpers.doKeys('p');
  eq('___', cm.getValue());
  helpers.assertCursorAt(0, 1);
}, { value: '___' });
testVim('p_line', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.getRegisterController().pushText('"', 'yank', '  a\nd\n', true);
  helpers.doKeys('2', 'p');
  eq('___\n  a\nd\n  a\nd', cm.getValue());
  helpers.assertCursorAt(1, 2);
}, { value: '___' });
testVim('p_lastline', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.getRegisterController().pushText('"', 'yank', '  a\nd', true);
  helpers.doKeys('2', 'p');
  eq('___\n  a\nd\n  a\nd', cm.getValue());
  helpers.assertCursorAt(1, 2);
}, { value: '___' });
testVim(']p_first_indent_is_smaller', function(cm, vim, helpers) {
  helpers.getRegisterController().pushText('"', 'yank', '  abc\n    def\n', true);
  helpers.doKeys(']', 'p');
  eq('  ___\n  abc\n    def', cm.getValue());
}, { value: '  ___' });
testVim(']p_first_indent_is_larger', function(cm, vim, helpers) {
  helpers.getRegisterController().pushText('"', 'yank', '    abc\n  def\n', true);
  helpers.doKeys(']', 'p');
  eq('  ___\n  abc\ndef', cm.getValue());
}, { value: '  ___' });
testVim(']p_with_tab_indents', function(cm, vim, helpers) {
  helpers.getRegisterController().pushText('"', 'yank', '\t\tabc\n\t\t\tdef\n', true);
  helpers.doKeys(']', 'p');
  eq('\t___\n\tabc\n\t\tdef', cm.getValue());
}, { value: '\t___', indentWithTabs: true});
testVim(']p_with_spaces_translated_to_tabs', function(cm, vim, helpers) {
  helpers.getRegisterController().pushText('"', 'yank', '  abc\n    def\n', true);
  helpers.doKeys(']', 'p');
  eq('\t___\n\tabc\n\t\tdef', cm.getValue());
}, { value: '\t___', indentWithTabs: true, tabSize: 2 });
testVim('[p', function(cm, vim, helpers) {
  helpers.getRegisterController().pushText('"', 'yank', '  abc\n    def\n', true);
  helpers.doKeys('[', 'p');
  eq('  abc\n    def\n  ___', cm.getValue());
}, { value: '  ___' });
testVim('P', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.getRegisterController().pushText('"', 'yank', 'abc\ndef', false);
  helpers.doKeys('P');
  eq('_abc\ndef__', cm.getValue());
  helpers.assertCursorAt(1, 3);
}, { value: '___' });
testVim('P_line', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.getRegisterController().pushText('"', 'yank', '  a\nd\n', true);
  helpers.doKeys('2', 'P');
  eq('  a\nd\n  a\nd\n___', cm.getValue());
  helpers.assertCursorAt(0, 2);
}, { value: '___' });
testVim('r', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('3', 'r', 'u');
  eq('wuuuet\nanother', cm.getValue(),'3r failed');
  helpers.assertCursorAt(0, 3);
  cm.setCursor(0, 4);
  helpers.doKeys('v', 'j', 'h', 'r', '<Space>');
  eq('wuuu  \n    her', cm.getValue(),'Replacing selection by space-characters failed');
}, { value: 'wordet\nanother' });
testVim('r_visual_block', function(cm, vim, helpers) {
  cm.setCursor(2, 3);
  helpers.doKeys('<C-v>', 'k', 'k', 'h', 'h', 'r', 'l');
  eq('1lll\n5lll\nalllefg', cm.getValue());
  helpers.doKeys('<C-v>', 'l', 'j', 'r', '<Space>');
  eq('1  l\n5  l\nalllefg', cm.getValue());
  cm.setCursor(2, 0);
  helpers.doKeys('o');
  helpers.doKeys('<Esc>');
  cm.replaceRange('\t\t', cm.getCursor());
  helpers.doKeys('<C-v>', 'h', 'h', 'r', 'r');
  eq('1  l\n5  l\nalllefg\nrrrrrrrr', cm.getValue());
}, {value: '1234\n5678\nabcdefg'});
testVim('R', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('R');
  helpers.assertCursorAt(0, 1);
  eq('vim-replace', cm.getOption('keyMap'));
  is(cm.state.overwrite, 'Setting overwrite state failed');
});
testVim('mark', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('m', 't');
  cm.setCursor(0, 0);
  helpers.doKeys('`', 't');
  helpers.assertCursorAt(2, 2);
  cm.setCursor(2, 0);
  cm.replaceRange('   h', cm.getCursor());
  cm.setCursor(0, 0);
  helpers.doKeys('\'', 't');
  helpers.assertCursorAt(2, 3);
});
testVim('jumpToMark_next', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('m', 't');
  cm.setCursor(0, 0);
  helpers.doKeys(']', '`');
  helpers.assertCursorAt(2, 2);
  cm.setCursor(0, 0);
  helpers.doKeys(']', '\'');
  helpers.assertCursorAt(2, 0);
});
testVim('jumpToMark_next_repeat', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('m', 'a');
  cm.setCursor(3, 2);
  helpers.doKeys('m', 'b');
  cm.setCursor(4, 2);
  helpers.doKeys('m', 'c');
  cm.setCursor(0, 0);
  helpers.doKeys('2', ']', '`');
  helpers.assertCursorAt(3, 2);
  cm.setCursor(0, 0);
  helpers.doKeys('2', ']', '\'');
  helpers.assertCursorAt(3, 1);
});
testVim('jumpToMark_next_sameline', function(cm, vim, helpers) {
  cm.setCursor(2, 0);
  helpers.doKeys('m', 'a');
  cm.setCursor(2, 4);
  helpers.doKeys('m', 'b');
  cm.setCursor(2, 2);
  helpers.doKeys(']', '`');
  helpers.assertCursorAt(2, 4);
});
testVim('jumpToMark_next_onlyprev', function(cm, vim, helpers) {
  cm.setCursor(2, 0);
  helpers.doKeys('m', 'a');
  cm.setCursor(4, 0);
  helpers.doKeys(']', '`');
  helpers.assertCursorAt(4, 0);
});
testVim('jumpToMark_next_nomark', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys(']', '`');
  helpers.assertCursorAt(2, 2);
  helpers.doKeys(']', '\'');
  helpers.assertCursorAt(2, 0);
});
testVim('jumpToMark_next_linewise_over', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('m', 'a');
  cm.setCursor(3, 4);
  helpers.doKeys('m', 'b');
  cm.setCursor(2, 1);
  helpers.doKeys(']', '\'');
  helpers.assertCursorAt(3, 1);
});
testVim('jumpToMark_next_action', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('m', 't');
  cm.setCursor(0, 0);
  helpers.doKeys('d', ']', '`');
  helpers.assertCursorAt(0, 0);
  var actual = cm.getLine(0);
  var expected = 'pop pop 0 1 2 3 4';
  eq(actual, expected, "Deleting while jumping to the next mark failed.");
});
testVim('jumpToMark_next_line_action', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('m', 't');
  cm.setCursor(0, 0);
  helpers.doKeys('d', ']', '\'');
  helpers.assertCursorAt(0, 1);
  var actual = cm.getLine(0);
  var expected = ' (a) [b] {c} '
  eq(actual, expected, "Deleting while jumping to the next mark line failed.");
});
testVim('jumpToMark_prev', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('m', 't');
  cm.setCursor(4, 0);
  helpers.doKeys('[', '`');
  helpers.assertCursorAt(2, 2);
  cm.setCursor(4, 0);
  helpers.doKeys('[', '\'');
  helpers.assertCursorAt(2, 0);
});
testVim('jumpToMark_prev_repeat', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('m', 'a');
  cm.setCursor(3, 2);
  helpers.doKeys('m', 'b');
  cm.setCursor(4, 2);
  helpers.doKeys('m', 'c');
  cm.setCursor(5, 0);
  helpers.doKeys('2', '[', '`');
  helpers.assertCursorAt(3, 2);
  cm.setCursor(5, 0);
  helpers.doKeys('2', '[', '\'');
  helpers.assertCursorAt(3, 1);
});
testVim('jumpToMark_prev_sameline', function(cm, vim, helpers) {
  cm.setCursor(2, 0);
  helpers.doKeys('m', 'a');
  cm.setCursor(2, 4);
  helpers.doKeys('m', 'b');
  cm.setCursor(2, 2);
  helpers.doKeys('[', '`');
  helpers.assertCursorAt(2, 0);
});
testVim('jumpToMark_prev_onlynext', function(cm, vim, helpers) {
  cm.setCursor(4, 4);
  helpers.doKeys('m', 'a');
  cm.setCursor(2, 0);
  helpers.doKeys('[', '`');
  helpers.assertCursorAt(2, 0);
});
testVim('jumpToMark_prev_nomark', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('[', '`');
  helpers.assertCursorAt(2, 2);
  helpers.doKeys('[', '\'');
  helpers.assertCursorAt(2, 0);
});
testVim('jumpToMark_prev_linewise_over', function(cm, vim, helpers) {
  cm.setCursor(2, 2);
  helpers.doKeys('m', 'a');
  cm.setCursor(3, 4);
  helpers.doKeys('m', 'b');
  cm.setCursor(3, 6);
  helpers.doKeys('[', '\'');
  helpers.assertCursorAt(2, 0);
});
testVim('delmark_single', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('m', 't');
  helpers.doEx('delmarks t');
  cm.setCursor(0, 0);
  helpers.doKeys('`', 't');
  helpers.assertCursorAt(0, 0);
});
testVim('delmark_range', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('m', 'a');
  cm.setCursor(2, 2);
  helpers.doKeys('m', 'b');
  cm.setCursor(3, 2);
  helpers.doKeys('m', 'c');
  cm.setCursor(4, 2);
  helpers.doKeys('m', 'd');
  cm.setCursor(5, 2);
  helpers.doKeys('m', 'e');
  helpers.doEx('delmarks b-d');
  cm.setCursor(0, 0);
  helpers.doKeys('`', 'a');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'b');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'c');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'd');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'e');
  helpers.assertCursorAt(5, 2);
});
testVim('delmark_multi', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('m', 'a');
  cm.setCursor(2, 2);
  helpers.doKeys('m', 'b');
  cm.setCursor(3, 2);
  helpers.doKeys('m', 'c');
  cm.setCursor(4, 2);
  helpers.doKeys('m', 'd');
  cm.setCursor(5, 2);
  helpers.doKeys('m', 'e');
  helpers.doEx('delmarks bcd');
  cm.setCursor(0, 0);
  helpers.doKeys('`', 'a');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'b');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'c');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'd');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'e');
  helpers.assertCursorAt(5, 2);
});
testVim('delmark_multi_space', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('m', 'a');
  cm.setCursor(2, 2);
  helpers.doKeys('m', 'b');
  cm.setCursor(3, 2);
  helpers.doKeys('m', 'c');
  cm.setCursor(4, 2);
  helpers.doKeys('m', 'd');
  cm.setCursor(5, 2);
  helpers.doKeys('m', 'e');
  helpers.doEx('delmarks b c d');
  cm.setCursor(0, 0);
  helpers.doKeys('`', 'a');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'b');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'c');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'd');
  helpers.assertCursorAt(1, 2);
  helpers.doKeys('`', 'e');
  helpers.assertCursorAt(5, 2);
});
testVim('delmark_all', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('m', 'a');
  cm.setCursor(2, 2);
  helpers.doKeys('m', 'b');
  cm.setCursor(3, 2);
  helpers.doKeys('m', 'c');
  cm.setCursor(4, 2);
  helpers.doKeys('m', 'd');
  cm.setCursor(5, 2);
  helpers.doKeys('m', 'e');
  helpers.doEx('delmarks a b-de');
  cm.setCursor(0, 0);
  helpers.doKeys('`', 'a');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('`', 'b');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('`', 'c');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('`', 'd');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('`', 'e');
  helpers.assertCursorAt(0, 0);
});
testVim('visual', function(cm, vim, helpers) {
  helpers.doKeys('l', 'v', 'l', 'l');
  helpers.assertCursorAt(0, 4);
  eqPos(makeCursor(0, 1), cm.getCursor('anchor'));
  helpers.doKeys('d');
  eq('15', cm.getValue());
}, { value: '12345' });
testVim('visual_yank', function(cm, vim, helpers) {
  helpers.doKeys('v', '3', 'l', 'y');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('p');
  eq('aa te test for yank', cm.getValue());
}, { value: 'a test for yank' })
testVim('visual_w', function(cm, vim, helpers) {
  helpers.doKeys('v', 'w');
  eq(cm.getSelection(), 'motion t');
}, { value: 'motion test'});
testVim('visual_initial_selection', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('v');
  cm.getSelection('n');
}, { value: 'init'});
testVim('visual_crossover_left', function(cm, vim, helpers) {
  cm.setCursor(0, 2);
  helpers.doKeys('v', 'l', 'h', 'h');
  cm.getSelection('ro');
}, { value: 'cross'});
testVim('visual_crossover_left', function(cm, vim, helpers) {
  cm.setCursor(0, 2);
  helpers.doKeys('v', 'h', 'l', 'l');
  cm.getSelection('os');
}, { value: 'cross'});
testVim('visual_crossover_up', function(cm, vim, helpers) {
  cm.setCursor(3, 2);
  helpers.doKeys('v', 'j', 'k', 'k');
  eqPos(Pos(2, 2), cm.getCursor('head'));
  eqPos(Pos(3, 3), cm.getCursor('anchor'));
  helpers.doKeys('k');
  eqPos(Pos(1, 2), cm.getCursor('head'));
  eqPos(Pos(3, 3), cm.getCursor('anchor'));
}, { value: 'cross\ncross\ncross\ncross\ncross\n'});
testVim('visual_crossover_down', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('v', 'k', 'j', 'j');
  eqPos(Pos(2, 3), cm.getCursor('head'));
  eqPos(Pos(1, 2), cm.getCursor('anchor'));
  helpers.doKeys('j');
  eqPos(Pos(3, 3), cm.getCursor('head'));
  eqPos(Pos(1, 2), cm.getCursor('anchor'));
}, { value: 'cross\ncross\ncross\ncross\ncross\n'});
testVim('visual_exit', function(cm, vim, helpers) {
  helpers.doKeys('<C-v>', 'l', 'j', 'j', '<Esc>');
  eqPos(cm.getCursor('anchor'), cm.getCursor('head'));
  eq(vim.visualMode, false);
}, { value: 'hello\nworld\nfoo' });
testVim('visual_line', function(cm, vim, helpers) {
  helpers.doKeys('l', 'V', 'l', 'j', 'j', 'd');
  eq(' 4\n 5', cm.getValue());
}, { value: ' 1\n 2\n 3\n 4\n 5' });
testVim('visual_block_move_to_eol', function(cm, vim, helpers) {
  // moveToEol should move all block cursors to end of line
  cm.setCursor(0, 0);
  helpers.doKeys('<C-v>', 'G', '$');
  var selections = cm.getSelections().join();
  eq("123,45,6", selections);
}, {value: '123\n45\n6'});
testVim('visual_block_different_line_lengths', function(cm, vim, helpers) {
  // test the block selection with lines of different length
  // i.e. extending the selection
  // till the end of the longest line.
  helpers.doKeys('<C-v>', 'l', 'j', 'j', '6', 'l', 'd');
  helpers.doKeys('d', 'd', 'd', 'd');
  eq('', cm.getValue());
}, {value: '1234\n5678\nabcdefg'});
testVim('visual_block_truncate_on_short_line', function(cm, vim, helpers) {
  // check for left side selection in case
  // of moving up to a shorter line.
  cm.replaceRange('', cm.getCursor());
  cm.setCursor(3, 4);
  helpers.doKeys('<C-v>', 'l', 'k', 'k', 'd');
  eq('hello world\n{\ntis\nsa!', cm.getValue());
}, {value: 'hello world\n{\nthis is\nsparta!'});
testVim('visual_block_corners', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('<C-v>', '2', 'l', 'k');
  // circle around the anchor
  // and check the selections
  var selections = cm.getSelections();
  eq('345891', selections.join(''));
  helpers.doKeys('4', 'h');
  selections = cm.getSelections();
  eq('123678', selections.join(''));
  helpers.doKeys('j', 'j');
  selections = cm.getSelections();
  eq('678abc', selections.join(''));
  helpers.doKeys('4', 'l');
  selections = cm.getSelections();
  eq('891cde', selections.join(''));
}, {value: '12345\n67891\nabcde'});
testVim('visual_block_mode_switch', function(cm, vim, helpers) {
  // switch between visual modes
  cm.setCursor(1, 1);
  // blockwise to characterwise visual
  helpers.doKeys('<C-v>', 'j', 'l', 'v');
  selections = cm.getSelections();
  eq('7891\nabc', selections.join(''));
  // characterwise to blockwise
  helpers.doKeys('<C-v>');
  selections = cm.getSelections();
  eq('78bc', selections.join(''));
  // blockwise to linewise visual
  helpers.doKeys('V');
  selections = cm.getSelections();
  eq('67891\nabcde', selections.join(''));
}, {value: '12345\n67891\nabcde'});
testVim('visual_block_crossing_short_line', function(cm, vim, helpers) {
  // visual block with long and short lines
  cm.setCursor(0, 3);
  helpers.doKeys('<C-v>', 'j', 'j', 'j');
  var selections = cm.getSelections().join();
  eq('4,,d,b', selections);
  helpers.doKeys('3', 'k');
  selections = cm.getSelections().join();
  eq('4', selections);
  helpers.doKeys('5', 'j', 'k');
  selections = cm.getSelections().join("");
  eq(10, selections.length);
}, {value: '123456\n78\nabcdefg\nfoobar\n}\n'});
testVim('visual_block_curPos_on_exit', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('<C-v>', '3' , 'l', '<Esc>');
  eqPos(makeCursor(0, 3), cm.getCursor());
  helpers.doKeys('h', '<C-v>', '2' , 'j' ,'3' , 'l');
  eq(cm.getSelections().join(), "3456,,cdef");
  helpers.doKeys('4' , 'h');
  eq(cm.getSelections().join(), "23,8,bc");
  helpers.doKeys('2' , 'l');
  eq(cm.getSelections().join(), "34,,cd");
}, {value: '123456\n78\nabcdefg\nfoobar'});

testVim('visual_marks', function(cm, vim, helpers) {
  helpers.doKeys('l', 'v', 'l', 'l', 'j', 'j', 'v');
  // Test visual mode marks
  cm.setCursor(2, 1);
  helpers.doKeys('\'', '<');
  helpers.assertCursorAt(0, 1);
  helpers.doKeys('\'', '>');
  helpers.assertCursorAt(2, 0);
});
testVim('visual_join', function(cm, vim, helpers) {
  helpers.doKeys('l', 'V', 'l', 'j', 'j', 'J');
  eq(' 1 2 3\n 4\n 5', cm.getValue());
  is(!vim.visualMode);
}, { value: ' 1\n 2\n 3\n 4\n 5' });
testVim('visual_blank', function(cm, vim, helpers) {
  helpers.doKeys('v', 'k');
  eq(vim.visualMode, true);
}, { value: '\n' });
testVim('reselect_visual', function(cm, vim, helpers) {
  helpers.doKeys('l', 'v', 'l', 'l', 'l', 'y', 'g', 'v');
  helpers.assertCursorAt(0, 5);
  eqPos(makeCursor(0, 1), cm.getCursor('anchor'));
  helpers.doKeys('v');
  cm.setCursor(1, 0);
  helpers.doKeys('v', 'l', 'l', 'p');
  eq('123456\n2345\nbar', cm.getValue());
  cm.setCursor(0, 0);
  helpers.doKeys('g', 'v');
  // here the fake cursor is at (1, 3)
  helpers.assertCursorAt(1, 4);
  eqPos(makeCursor(1, 0), cm.getCursor('anchor'));
  helpers.doKeys('v');
  cm.setCursor(2, 0);
  helpers.doKeys('v', 'l', 'l', 'g', 'v');
  helpers.assertCursorAt(1, 4);
  eqPos(makeCursor(1, 0), cm.getCursor('anchor'));
  helpers.doKeys('g', 'v');
  helpers.assertCursorAt(2, 3);
  eqPos(makeCursor(2, 0), cm.getCursor('anchor'));
  eq('123456\n2345\nbar', cm.getValue());
}, { value: '123456\nfoo\nbar' });
testVim('reselect_visual_line', function(cm, vim, helpers) {
  helpers.doKeys('l', 'V', 'j', 'j', 'V', 'g', 'v', 'd');
  eq('foo\nand\nbar', cm.getValue());
  cm.setCursor(1, 0);
  helpers.doKeys('V', 'y', 'j');
  helpers.doKeys('V', 'p' , 'g', 'v', 'd');
  eq('foo\nand', cm.getValue());
}, { value: 'hello\nthis\nis\nfoo\nand\nbar' });
testVim('reselect_visual_block', function(cm, vim, helpers) {
  cm.setCursor(1, 2);
  helpers.doKeys('<C-v>', 'k', 'h', '<C-v>');
  cm.setCursor(2, 1);
  helpers.doKeys('v', 'l', 'g', 'v');
  eqPos(Pos(1, 2), vim.sel.anchor);
  eqPos(Pos(0, 1), vim.sel.head);
  // Ensure selection is done with visual block mode rather than one
  // continuous range.
  eq(cm.getSelections().join(''), '23oo')
  helpers.doKeys('g', 'v');
  eqPos(Pos(2, 1), vim.sel.anchor);
  eqPos(Pos(2, 2), vim.sel.head);
  helpers.doKeys('<Esc>');
  // Ensure selection of deleted range
  cm.setCursor(1, 1);
  helpers.doKeys('v', '<C-v>', 'j', 'd', 'g', 'v');
  eq(cm.getSelections().join(''), 'or');
}, { value: '123456\nfoo\nbar' });
testVim('s_normal', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('s');
  helpers.doKeys('<Esc>');
  eq('ac', cm.getValue());
}, { value: 'abc'});
testVim('s_visual', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('v', 's');
  helpers.doKeys('<Esc>');
  helpers.assertCursorAt(0, 0);
  eq('ac', cm.getValue());
}, { value: 'abc'});
testVim('o_visual', function(cm, vim, helpers) {
  cm.setCursor(0,0);
  helpers.doKeys('v','l','l','l','o');
  helpers.assertCursorAt(0,0);
  helpers.doKeys('v','v','j','j','j','o');
  helpers.assertCursorAt(0,0);
  helpers.doKeys('O');
  helpers.doKeys('l','l')
  helpers.assertCursorAt(3, 3);
  helpers.doKeys('d');
  eq('p',cm.getValue());
}, { value: 'abcd\nefgh\nijkl\nmnop'});
testVim('o_visual_block', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('<C-v>','3','j','l','l', 'o');
  eqPos(Pos(3, 3), vim.sel.anchor);
  eqPos(Pos(0, 1), vim.sel.head);
  helpers.doKeys('O');
  eqPos(Pos(3, 1), vim.sel.anchor);
  eqPos(Pos(0, 3), vim.sel.head);
  helpers.doKeys('o');
  eqPos(Pos(0, 3), vim.sel.anchor);
  eqPos(Pos(3, 1), vim.sel.head);
}, { value: 'abcd\nefgh\nijkl\nmnop'});
testVim('changeCase_visual', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('v', 'l', 'l');
  helpers.doKeys('U');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('v', 'l', 'l');
  helpers.doKeys('u');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('l', 'l', 'l', '.');
  helpers.assertCursorAt(0, 3);
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'a', 'v', 'j', 'U', 'q');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('j', '@', 'a');
  helpers.assertCursorAt(1, 0);
  cm.setCursor(3, 0);
  helpers.doKeys('V', 'U', 'j', '.');
  eq('ABCDEF\nGHIJKL\nMnopq\nSHORT LINE\nLONG LINE OF TEXT', cm.getValue());
}, { value: 'abcdef\nghijkl\nmnopq\nshort line\nlong line of text'});
testVim('changeCase_visual_block', function(cm, vim, helpers) {
  cm.setCursor(2, 1);
  helpers.doKeys('<C-v>', 'k', 'k', 'h', 'U');
  eq('ABcdef\nGHijkl\nMNopq\nfoo', cm.getValue());
  cm.setCursor(0, 2);
  helpers.doKeys('.');
  eq('ABCDef\nGHIJkl\nMNOPq\nfoo', cm.getValue());
  // check when last line is shorter.
  cm.setCursor(2, 2);
  helpers.doKeys('.');
  eq('ABCDef\nGHIJkl\nMNOPq\nfoO', cm.getValue());
}, { value: 'abcdef\nghijkl\nmnopq\nfoo'});
testVim('visual_paste', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('v', 'l', 'l', 'y');
  helpers.assertCursorAt(0, 0);
  helpers.doKeys('3', 'l', 'j', 'v', 'l', 'p');
  helpers.assertCursorAt(1, 5);
  eq('this is a\nunithitest for visual paste', cm.getValue());
  cm.setCursor(0, 0);
  // in case of pasting whole line
  helpers.doKeys('y', 'y');
  cm.setCursor(1, 6);
  helpers.doKeys('v', 'l', 'l', 'l', 'p');
  helpers.assertCursorAt(2, 0);
  eq('this is a\nunithi\nthis is a\n for visual paste', cm.getValue());
}, { value: 'this is a\nunit test for visual paste'});

// This checks the contents of the register used to paste the text
testVim('v_paste_from_register', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('"', 'a', 'y', 'w');
  cm.setCursor(1, 0);
  helpers.doKeys('v', 'p');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/a\s+register/.test(text));
  });
}, { value: 'register contents\nare not erased'});
testVim('S_normal', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('j', 'S');
  helpers.doKeys('<Esc>');
  helpers.assertCursorAt(1, 0);
  eq('aa\n\ncc', cm.getValue());
}, { value: 'aa\nbb\ncc'});
testVim('blockwise_paste', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('<C-v>', '3', 'j', 'l', 'y');
  cm.setCursor(0, 2);
  // paste one char after the current cursor position
  helpers.doKeys('p');
  eq('helhelo\nworwold\nfoofo\nbarba', cm.getValue());
  cm.setCursor(0, 0);
  helpers.doKeys('v', '4', 'l', 'y');
  cm.setCursor(0, 0);
  helpers.doKeys('<C-v>', '3', 'j', 'p');
  eq('helheelhelo\norwold\noofo\narba', cm.getValue());
}, { value: 'hello\nworld\nfoo\nbar'});
testVim('blockwise_paste_long/short_line', function(cm, vim, helpers) {
  // extend short lines in case of different line lengths.
  cm.setCursor(0, 0);
  helpers.doKeys('<C-v>', 'j', 'j', 'y');
  cm.setCursor(0, 3);
  helpers.doKeys('p');
  eq('hellho\nfoo f\nbar b', cm.getValue());
}, { value: 'hello\nfoo\nbar'});
testVim('blockwise_paste_cut_paste', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('<C-v>', '2', 'j', 'x');
  cm.setCursor(0, 0);
  helpers.doKeys('P');
  eq('cut\nand\npaste\nme', cm.getValue());
}, { value: 'cut\nand\npaste\nme'});
testVim('blockwise_paste_from_register', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('<C-v>', '2', 'j', '"', 'a', 'y');
  cm.setCursor(0, 3);
  helpers.doKeys('"', 'a', 'p');
  eq('foobfar\nhellho\nworlwd', cm.getValue());
}, { value: 'foobar\nhello\nworld'});
testVim('blockwise_paste_last_line', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('<C-v>', '2', 'j', 'l', 'y');
  cm.setCursor(3, 0);
  helpers.doKeys('p');
  eq('cut\nand\npaste\nmcue\n an\n pa', cm.getValue());
}, { value: 'cut\nand\npaste\nme'});

testVim('S_visual', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('v', 'j', 'S');
  helpers.doKeys('<Esc>');
  helpers.assertCursorAt(0, 0);
  eq('\ncc', cm.getValue());
}, { value: 'aa\nbb\ncc'});

testVim('/ and n/N', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('match');
  helpers.doKeys('/');
  helpers.assertCursorAt(0, 11);
  helpers.doKeys('n');
  helpers.assertCursorAt(1, 6);
  helpers.doKeys('N');
  helpers.assertCursorAt(0, 11);

  cm.setCursor(0, 0);
  helpers.doKeys('2', '/');
  helpers.assertCursorAt(1, 6);
}, { value: 'match nope match \n nope Match' });
testVim('/_case', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('Match');
  helpers.doKeys('/');
  helpers.assertCursorAt(1, 6);
}, { value: 'match nope match \n nope Match' });
testVim('/_2_pcre', function(cm, vim, helpers) {
  CodeMirror.Vim.setOption('pcre', true);
  cm.openDialog = helpers.fakeOpenDialog('(word){2}');
  helpers.doKeys('/');
  helpers.assertCursorAt(1, 9);
  helpers.doKeys('n');
  helpers.assertCursorAt(2, 1);
}, { value: 'word\n another wordword\n wordwordword\n' });
testVim('/_2_nopcre', function(cm, vim, helpers) {
  CodeMirror.Vim.setOption('pcre', false);
  cm.openDialog = helpers.fakeOpenDialog('\\(word\\)\\{2}');
  helpers.doKeys('/');
  helpers.assertCursorAt(1, 9);
  helpers.doKeys('n');
  helpers.assertCursorAt(2, 1);
}, { value: 'word\n another wordword\n wordwordword\n' });
testVim('/_nongreedy', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('aa');
  helpers.doKeys('/');
  helpers.assertCursorAt(0, 4);
  helpers.doKeys('n');
  helpers.assertCursorAt(1, 3);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 0);
}, { value: 'aaa aa \n a aa'});
testVim('?_nongreedy', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('aa');
  helpers.doKeys('?');
  helpers.assertCursorAt(1, 3);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 4);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 0);
}, { value: 'aaa aa \n a aa'});
testVim('/_greedy', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('a+');
  helpers.doKeys('/');
  helpers.assertCursorAt(0, 4);
  helpers.doKeys('n');
  helpers.assertCursorAt(1, 1);
  helpers.doKeys('n');
  helpers.assertCursorAt(1, 3);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 0);
}, { value: 'aaa aa \n a aa'});
testVim('?_greedy', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('a+');
  helpers.doKeys('?');
  helpers.assertCursorAt(1, 3);
  helpers.doKeys('n');
  helpers.assertCursorAt(1, 1);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 4);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 0);
}, { value: 'aaa aa \n a aa'});
testVim('/_greedy_0_or_more', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('a*');
  helpers.doKeys('/');
  helpers.assertCursorAt(0, 3);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 4);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 5);
  helpers.doKeys('n');
  helpers.assertCursorAt(1, 0);
  helpers.doKeys('n');
  helpers.assertCursorAt(1, 1);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 0);
}, { value: 'aaa  aa\n aa'});
testVim('?_greedy_0_or_more', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('a*');
  helpers.doKeys('?');
  helpers.assertCursorAt(1, 1);
  helpers.doKeys('n');
  helpers.assertCursorAt(1, 0);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 5);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 4);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 3);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 0);
}, { value: 'aaa  aa\n aa'});
testVim('? and n/N', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('match');
  helpers.doKeys('?');
  helpers.assertCursorAt(1, 6);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 11);
  helpers.doKeys('N');
  helpers.assertCursorAt(1, 6);

  cm.setCursor(0, 0);
  helpers.doKeys('2', '?');
  helpers.assertCursorAt(0, 11);
}, { value: 'match nope match \n nope Match' });
testVim('*', function(cm, vim, helpers) {
  cm.setCursor(0, 9);
  helpers.doKeys('*');
  helpers.assertCursorAt(0, 22);

  cm.setCursor(0, 9);
  helpers.doKeys('2', '*');
  helpers.assertCursorAt(1, 8);
}, { value: 'nomatch match nomatch match \nnomatch Match' });
testVim('*_no_word', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('*');
  helpers.assertCursorAt(0, 0);
}, { value: ' \n match \n' });
testVim('*_symbol', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('*');
  helpers.assertCursorAt(1, 0);
}, { value: ' /}\n/} match \n' });
testVim('#', function(cm, vim, helpers) {
  cm.setCursor(0, 9);
  helpers.doKeys('#');
  helpers.assertCursorAt(1, 8);

  cm.setCursor(0, 9);
  helpers.doKeys('2', '#');
  helpers.assertCursorAt(0, 22);
}, { value: 'nomatch match nomatch match \nnomatch Match' });
testVim('*_seek', function(cm, vim, helpers) {
  // Should skip over space and symbols.
  cm.setCursor(0, 3);
  helpers.doKeys('*');
  helpers.assertCursorAt(0, 22);
}, { value: '    :=  match nomatch match \nnomatch Match' });
testVim('#', function(cm, vim, helpers) {
  // Should skip over space and symbols.
  cm.setCursor(0, 3);
  helpers.doKeys('#');
  helpers.assertCursorAt(1, 8);
}, { value: '    :=  match nomatch match \nnomatch Match' });
testVim('g*', function(cm, vim, helpers) {
  cm.setCursor(0, 8);
  helpers.doKeys('g', '*');
  helpers.assertCursorAt(0, 18);
  cm.setCursor(0, 8);
  helpers.doKeys('3', 'g', '*');
  helpers.assertCursorAt(1, 8);
}, { value: 'matches match alsoMatch\nmatchme matching' });
testVim('g#', function(cm, vim, helpers) {
  cm.setCursor(0, 8);
  helpers.doKeys('g', '#');
  helpers.assertCursorAt(0, 0);
  cm.setCursor(0, 8);
  helpers.doKeys('3', 'g', '#');
  helpers.assertCursorAt(1, 0);
}, { value: 'matches match alsoMatch\nmatchme matching' });
testVim('macro_insert', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'a', '0', 'i');
  cm.replaceRange('foo', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('q', '@', 'a');
  eq('foofoo', cm.getValue());
}, { value: ''});
testVim('macro_insert_repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'a', '$', 'a');
  cm.replaceRange('larry.', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('a');
  cm.replaceRange('curly.', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('q');
  helpers.doKeys('a');
  cm.replaceRange('moe.', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('@', 'a');
  // At this point, the most recent edit should be the 2nd insert change
  // inside the macro, i.e. "curly.".
  helpers.doKeys('.');
  eq('larry.curly.moe.larry.curly.curly.', cm.getValue());
}, { value: ''});
testVim('macro_space', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('<Space>', '<Space>');
  helpers.assertCursorAt(0, 2);
  helpers.doKeys('q', 'a', '<Space>', '<Space>', 'q');
  helpers.assertCursorAt(0, 4);
  helpers.doKeys('@', 'a');
  helpers.assertCursorAt(0, 6);
  helpers.doKeys('@', 'a');
  helpers.assertCursorAt(0, 8);
}, { value: 'one line of text.'});
testVim('macro_t_search', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'a', 't', 'e', 'q');
  helpers.assertCursorAt(0, 1);
  helpers.doKeys('l', '@', 'a');
  helpers.assertCursorAt(0, 6);
  helpers.doKeys('l', ';');
  helpers.assertCursorAt(0, 12);
}, { value: 'one line of text.'});
testVim('macro_f_search', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'b', 'f', 'e', 'q');
  helpers.assertCursorAt(0, 2);
  helpers.doKeys('@', 'b');
  helpers.assertCursorAt(0, 7);
  helpers.doKeys(';');
  helpers.assertCursorAt(0, 13);
}, { value: 'one line of text.'});
testVim('macro_slash_search', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'c');
  cm.openDialog = helpers.fakeOpenDialog('e');
  helpers.doKeys('/', 'q');
  helpers.assertCursorAt(0, 2);
  helpers.doKeys('@', 'c');
  helpers.assertCursorAt(0, 7);
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 13);
}, { value: 'one line of text.'});
testVim('macro_multislash_search', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'd');
  cm.openDialog = helpers.fakeOpenDialog('e');
  helpers.doKeys('/');
  cm.openDialog = helpers.fakeOpenDialog('t');
  helpers.doKeys('/', 'q');
  helpers.assertCursorAt(0, 12);
  helpers.doKeys('@', 'd');
  helpers.assertCursorAt(0, 15);
}, { value: 'one line of text to rule them all.'});
testVim('macro_parens', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'z', 'i');
  cm.replaceRange('(', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('e', 'a');
  cm.replaceRange(')', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('q');
  helpers.doKeys('w', '@', 'z');
  helpers.doKeys('w', '@', 'z');
  eq('(see) (spot) (run)', cm.getValue());
}, { value: 'see spot run'});
testVim('macro_overwrite', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'z', '0', 'i');
  cm.replaceRange('I ', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('q');
  helpers.doKeys('e');
  // Now replace the macro with something else.
  helpers.doKeys('q', 'z', 'a');
  cm.replaceRange('.', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('q');
  helpers.doKeys('e', '@', 'z');
  helpers.doKeys('e', '@', 'z');
  eq('I see. spot. run.', cm.getValue());
}, { value: 'see spot run'});
testVim('macro_search_f', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'a', 'f', ' ');
  helpers.assertCursorAt(0,3);
  helpers.doKeys('q', '0');
  helpers.assertCursorAt(0,0);
  helpers.doKeys('@', 'a');
  helpers.assertCursorAt(0,3);
}, { value: 'The quick brown fox jumped over the lazy dog.'});
testVim('macro_search_2f', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'a', '2', 'f', ' ');
  helpers.assertCursorAt(0,9);
  helpers.doKeys('q', '0');
  helpers.assertCursorAt(0,0);
  helpers.doKeys('@', 'a');
  helpers.assertCursorAt(0,9);
}, { value: 'The quick brown fox jumped over the lazy dog.'});
testVim('yank_register', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('"', 'a', 'y', 'y');
  helpers.doKeys('j', '"', 'b', 'y', 'y');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/a\s+foo/.test(text));
    is(/b\s+bar/.test(text));
  });
  helpers.doKeys(':');
}, { value: 'foo\nbar'});
testVim('yank_visual_block', function(cm, vim, helpers) {
  cm.setCursor(0, 1);
  helpers.doKeys('<C-v>', 'l', 'j', '"', 'a', 'y');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/a\s+oo\nar/.test(text));
  });
  helpers.doKeys(':');
}, { value: 'foo\nbar'});
testVim('yank_append_line_to_line_register', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('"', 'a', 'y', 'y');
  helpers.doKeys('j', '"', 'A', 'y', 'y');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/a\s+foo\nbar/.test(text));
    is(/"\s+foo\nbar/.test(text));
  });
  helpers.doKeys(':');
}, { value: 'foo\nbar'});
testVim('yank_append_word_to_word_register', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('"', 'a', 'y', 'w');
  helpers.doKeys('j', '"', 'A', 'y', 'w');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/a\s+foobar/.test(text));
    is(/"\s+foobar/.test(text));
  });
  helpers.doKeys(':');
}, { value: 'foo\nbar'});
testVim('yank_append_line_to_word_register', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('"', 'a', 'y', 'w');
  helpers.doKeys('j', '"', 'A', 'y', 'y');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/a\s+foo\nbar/.test(text));
    is(/"\s+foo\nbar/.test(text));
  });
  helpers.doKeys(':');
}, { value: 'foo\nbar'});
testVim('yank_append_word_to_line_register', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('"', 'a', 'y', 'y');
  helpers.doKeys('j', '"', 'A', 'y', 'w');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/a\s+foo\nbar/.test(text));
    is(/"\s+foo\nbar/.test(text));
  });
  helpers.doKeys(':');
}, { value: 'foo\nbar'});
testVim('macro_register', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('q', 'a', 'i');
  cm.replaceRange('gangnam', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('q');
  helpers.doKeys('q', 'b', 'o');
  cm.replaceRange('style', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('q');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/a\s+i/.test(text));
    is(/b\s+o/.test(text));
  });
  helpers.doKeys(':');
}, { value: ''});
testVim('._register', function(cm,vim,helpers) {
  cm.setCursor(0,0);
  helpers.doKeys('i');
  cm.replaceRange('foo',cm.getCursor());
  helpers.doKeys('<Esc>');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/\.\s+foo/.test(text));
  });
  helpers.doKeys(':');
}, {value: ''});
testVim(':_register', function(cm,vim,helpers) {
  helpers.doEx('bar');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/:\s+bar/.test(text));
  });
  helpers.doKeys(':');
}, {value: ''});
testVim('search_register_escape', function(cm, vim, helpers) {
  // Check that the register is restored if the user escapes rather than confirms.
  cm.openDialog = helpers.fakeOpenDialog('waldo');
  helpers.doKeys('/');
  var onKeyDown;
  var onKeyUp;
  var KEYCODES = {
    f: 70,
    o: 79,
    Esc: 27
  };
  cm.openDialog = function(template, callback, options) {
    onKeyDown = options.onKeyDown;
    onKeyUp = options.onKeyUp;
  };
  var close = function() {};
  helpers.doKeys('/');
  // Fake some keyboard events coming in.
  onKeyDown({keyCode: KEYCODES.f}, '', close);
  onKeyUp({keyCode: KEYCODES.f}, '', close);
  onKeyDown({keyCode: KEYCODES.o}, 'f', close);
  onKeyUp({keyCode: KEYCODES.o}, 'f', close);
  onKeyDown({keyCode: KEYCODES.o}, 'fo', close);
  onKeyUp({keyCode: KEYCODES.o}, 'fo', close);
  onKeyDown({keyCode: KEYCODES.Esc}, 'foo', close);
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/waldo/.test(text));
    is(!/foo/.test(text));
  });
  helpers.doKeys(':');
}, {value: ''});
testVim('search_register', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('foo');
  helpers.doKeys('/');
  cm.openDialog = helpers.fakeOpenDialog('registers');
  cm.openNotification = helpers.fakeOpenNotification(function(text) {
    is(/\/\s+foo/.test(text));
  });
  helpers.doKeys(':');
}, {value: ''});
testVim('search_history', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('this');
  helpers.doKeys('/');
  cm.openDialog = helpers.fakeOpenDialog('checks');
  helpers.doKeys('/');
  cm.openDialog = helpers.fakeOpenDialog('search');
  helpers.doKeys('/');
  cm.openDialog = helpers.fakeOpenDialog('history');
  helpers.doKeys('/');
  cm.openDialog = helpers.fakeOpenDialog('checks');
  helpers.doKeys('/');
  var onKeyDown;
  var onKeyUp;
  var query = '';
  var keyCodes = {
    Up: 38,
    Down: 40
  };
  cm.openDialog = function(template, callback, options) {
    onKeyUp = options.onKeyUp;
    onKeyDown = options.onKeyDown;
  };
  var close = function(newVal) {
    if (typeof newVal == 'string') query = newVal;
  }
  helpers.doKeys('/');
  onKeyDown({keyCode: keyCodes.Up}, query, close);
  onKeyUp({keyCode: keyCodes.Up}, query, close);
  eq(query, 'checks');
  onKeyDown({keyCode: keyCodes.Up}, query, close);
  onKeyUp({keyCode: keyCodes.Up}, query, close);
  eq(query, 'history');
  onKeyDown({keyCode: keyCodes.Up}, query, close);
  onKeyUp({keyCode: keyCodes.Up}, query, close);
  eq(query, 'search');
  onKeyDown({keyCode: keyCodes.Up}, query, close);
  onKeyUp({keyCode: keyCodes.Up}, query, close);
  eq(query, 'this');
  onKeyDown({keyCode: keyCodes.Down}, query, close);
  onKeyUp({keyCode: keyCodes.Down}, query, close);
  eq(query, 'search');
}, {value: ''});
testVim('exCommand_history', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('registers');
  helpers.doKeys(':');
  cm.openDialog = helpers.fakeOpenDialog('sort');
  helpers.doKeys(':');
  cm.openDialog = helpers.fakeOpenDialog('map');
  helpers.doKeys(':');
  cm.openDialog = helpers.fakeOpenDialog('invalid');
  helpers.doKeys(':');
  var onKeyDown;
  var onKeyUp;
  var input = '';
  var keyCodes = {
    Up: 38,
    Down: 40,
    s: 115
  };
  cm.openDialog = function(template, callback, options) {
    onKeyUp = options.onKeyUp;
    onKeyDown = options.onKeyDown;
  };
  var close = function(newVal) {
    if (typeof newVal == 'string') input = newVal;
  }
  helpers.doKeys(':');
  onKeyDown({keyCode: keyCodes.Up}, input, close);
  eq(input, 'invalid');
  onKeyDown({keyCode: keyCodes.Up}, input, close);
  eq(input, 'map');
  onKeyDown({keyCode: keyCodes.Up}, input, close);
  eq(input, 'sort');
  onKeyDown({keyCode: keyCodes.Up}, input, close);
  eq(input, 'registers');
  onKeyDown({keyCode: keyCodes.s}, '', close);
  input = 's';
  onKeyDown({keyCode: keyCodes.Up}, input, close);
  eq(input, 'sort');
}, {value: ''});
testVim('.', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('2', 'd', 'w');
  helpers.doKeys('.');
  eq('5 6', cm.getValue());
}, { value: '1 2 3 4 5 6'});
testVim('._repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('2', 'd', 'w');
  helpers.doKeys('3', '.');
  eq('6', cm.getValue());
}, { value: '1 2 3 4 5 6'});
testVim('._insert', function(cm, vim, helpers) {
  helpers.doKeys('i');
  cm.replaceRange('test', cm.getCursor());
  helpers.doKeys('<Esc>');
  helpers.doKeys('.');
  eq('testestt', cm.getValue());
  helpers.assertCursorAt(0, 6);
}, { value: ''});
testVim('._insert_repeat', function(cm, vim, helpers) {
  helpers.doKeys('i');
  cm.replaceRange('test', cm.getCursor());
  cm.setCursor(0, 4);
  helpers.doKeys('<Esc>');
  helpers.doKeys('2', '.');
  eq('testesttestt', cm.getValue());
  helpers.assertCursorAt(0, 10);
}, { value: ''});
testVim('._repeat_insert', function(cm, vim, helpers) {
  helpers.doKeys('3', 'i');
  cm.replaceRange('te', cm.getCursor());
  cm.setCursor(0, 2);
  helpers.doKeys('<Esc>');
  helpers.doKeys('.');
  eq('tetettetetee', cm.getValue());
  helpers.assertCursorAt(0, 10);
}, { value: ''});
testVim('._insert_o', function(cm, vim, helpers) {
  helpers.doKeys('o');
  cm.replaceRange('z', cm.getCursor());
  cm.setCursor(1, 1);
  helpers.doKeys('<Esc>');
  helpers.doKeys('.');
  eq('\nz\nz', cm.getValue());
  helpers.assertCursorAt(2, 0);
}, { value: ''});
testVim('._insert_o_repeat', function(cm, vim, helpers) {
  helpers.doKeys('o');
  cm.replaceRange('z', cm.getCursor());
  helpers.doKeys('<Esc>');
  cm.setCursor(1, 0);
  helpers.doKeys('2', '.');
  eq('\nz\nz\nz', cm.getValue());
  helpers.assertCursorAt(3, 0);
}, { value: ''});
testVim('._insert_o_indent', function(cm, vim, helpers) {
  helpers.doKeys('o');
  cm.replaceRange('z', cm.getCursor());
  helpers.doKeys('<Esc>');
  cm.setCursor(1, 2);
  helpers.doKeys('.');
  eq('{\n  z\n  z', cm.getValue());
  helpers.assertCursorAt(2, 2);
}, { value: '{'});
testVim('._insert_cw', function(cm, vim, helpers) {
  helpers.doKeys('c', 'w');
  cm.replaceRange('test', cm.getCursor());
  helpers.doKeys('<Esc>');
  cm.setCursor(0, 3);
  helpers.doKeys('2', 'l');
  helpers.doKeys('.');
  eq('test test word3', cm.getValue());
  helpers.assertCursorAt(0, 8);
}, { value: 'word1 word2 word3' });
testVim('._insert_cw_repeat', function(cm, vim, helpers) {
  // For some reason, repeat cw in desktop VIM will does not repeat insert mode
  // changes. Will conform to that behavior.
  helpers.doKeys('c', 'w');
  cm.replaceRange('test', cm.getCursor());
  helpers.doKeys('<Esc>');
  cm.setCursor(0, 4);
  helpers.doKeys('l');
  helpers.doKeys('2', '.');
  eq('test test', cm.getValue());
  helpers.assertCursorAt(0, 8);
}, { value: 'word1 word2 word3' });
testVim('._delete', function(cm, vim, helpers) {
  cm.setCursor(0, 5);
  helpers.doKeys('i');
  helpers.doInsertModeKeys('Backspace');
  helpers.doKeys('<Esc>');
  helpers.doKeys('.');
  eq('zace', cm.getValue());
  helpers.assertCursorAt(0, 1);
}, { value: 'zabcde'});
testVim('._delete_repeat', function(cm, vim, helpers) {
  cm.setCursor(0, 6);
  helpers.doKeys('i');
  helpers.doInsertModeKeys('Backspace');
  helpers.doKeys('<Esc>');
  helpers.doKeys('2', '.');
  eq('zzce', cm.getValue());
  helpers.assertCursorAt(0, 1);
}, { value: 'zzabcde'});
testVim('._visual_>', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('V', 'j', '>');
  cm.setCursor(2, 0)
  helpers.doKeys('.');
  eq('  1\n  2\n  3\n  4', cm.getValue());
  helpers.assertCursorAt(2, 2);
}, { value: '1\n2\n3\n4'});
testVim('f;', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('f', 'x');
  helpers.doKeys(';');
  helpers.doKeys('2', ';');
  eq(9, cm.getCursor().ch);
}, { value: '01x3xx678x'});
testVim('F;', function(cm, vim, helpers) {
  cm.setCursor(0, 8);
  helpers.doKeys('F', 'x');
  helpers.doKeys(';');
  helpers.doKeys('2', ';');
  eq(2, cm.getCursor().ch);
}, { value: '01x3xx6x8x'});
testVim('t;', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('t', 'x');
  helpers.doKeys(';');
  helpers.doKeys('2', ';');
  eq(8, cm.getCursor().ch);
}, { value: '01x3xx678x'});
testVim('T;', function(cm, vim, helpers) {
  cm.setCursor(0, 9);
  helpers.doKeys('T', 'x');
  helpers.doKeys(';');
  helpers.doKeys('2', ';');
  eq(2, cm.getCursor().ch);
}, { value: '0xx3xx678x'});
testVim('f,', function(cm, vim, helpers) {
  cm.setCursor(0, 6);
  helpers.doKeys('f', 'x');
  helpers.doKeys(',');
  helpers.doKeys('2', ',');
  eq(2, cm.getCursor().ch);
}, { value: '01x3xx678x'});
testVim('F,', function(cm, vim, helpers) {
  cm.setCursor(0, 3);
  helpers.doKeys('F', 'x');
  helpers.doKeys(',');
  helpers.doKeys('2', ',');
  eq(9, cm.getCursor().ch);
}, { value: '01x3xx678x'});
testVim('t,', function(cm, vim, helpers) {
  cm.setCursor(0, 6);
  helpers.doKeys('t', 'x');
  helpers.doKeys(',');
  helpers.doKeys('2', ',');
  eq(3, cm.getCursor().ch);
}, { value: '01x3xx678x'});
testVim('T,', function(cm, vim, helpers) {
  cm.setCursor(0, 4);
  helpers.doKeys('T', 'x');
  helpers.doKeys(',');
  helpers.doKeys('2', ',');
  eq(8, cm.getCursor().ch);
}, { value: '01x3xx67xx'});
testVim('fd,;', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('f', '4');
  cm.setCursor(0, 0);
  helpers.doKeys('d', ';');
  eq('56789', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 9);
  helpers.doKeys('d', ',');
  eq('01239', cm.getValue());
}, { value: '0123456789'});
testVim('Fd,;', function(cm, vim, helpers) {
  cm.setCursor(0, 9);
  helpers.doKeys('F', '4');
  cm.setCursor(0, 9);
  helpers.doKeys('d', ';');
  eq('01239', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 0);
  helpers.doKeys('d', ',');
  eq('56789', cm.getValue());
}, { value: '0123456789'});
testVim('td,;', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('t', '4');
  cm.setCursor(0, 0);
  helpers.doKeys('d', ';');
  eq('456789', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 9);
  helpers.doKeys('d', ',');
  eq('012349', cm.getValue());
}, { value: '0123456789'});
testVim('Td,;', function(cm, vim, helpers) {
  cm.setCursor(0, 9);
  helpers.doKeys('T', '4');
  cm.setCursor(0, 9);
  helpers.doKeys('d', ';');
  eq('012349', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 0);
  helpers.doKeys('d', ',');
  eq('456789', cm.getValue());
}, { value: '0123456789'});
testVim('fc,;', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('f', '4');
  cm.setCursor(0, 0);
  helpers.doKeys('c', ';', '<Esc>');
  eq('56789', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 9);
  helpers.doKeys('c', ',');
  eq('01239', cm.getValue());
}, { value: '0123456789'});
testVim('Fc,;', function(cm, vim, helpers) {
  cm.setCursor(0, 9);
  helpers.doKeys('F', '4');
  cm.setCursor(0, 9);
  helpers.doKeys('c', ';', '<Esc>');
  eq('01239', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 0);
  helpers.doKeys('c', ',');
  eq('56789', cm.getValue());
}, { value: '0123456789'});
testVim('tc,;', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('t', '4');
  cm.setCursor(0, 0);
  helpers.doKeys('c', ';', '<Esc>');
  eq('456789', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 9);
  helpers.doKeys('c', ',');
  eq('012349', cm.getValue());
}, { value: '0123456789'});
testVim('Tc,;', function(cm, vim, helpers) {
  cm.setCursor(0, 9);
  helpers.doKeys('T', '4');
  cm.setCursor(0, 9);
  helpers.doKeys('c', ';', '<Esc>');
  eq('012349', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 0);
  helpers.doKeys('c', ',');
  eq('456789', cm.getValue());
}, { value: '0123456789'});
testVim('fy,;', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('f', '4');
  cm.setCursor(0, 0);
  helpers.doKeys('y', ';', 'P');
  eq('012340123456789', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 9);
  helpers.doKeys('y', ',', 'P');
  eq('012345678456789', cm.getValue());
}, { value: '0123456789'});
testVim('Fy,;', function(cm, vim, helpers) {
  cm.setCursor(0, 9);
  helpers.doKeys('F', '4');
  cm.setCursor(0, 9);
  helpers.doKeys('y', ';', 'p');
  eq('012345678945678', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 0);
  helpers.doKeys('y', ',', 'P');
  eq('012340123456789', cm.getValue());
}, { value: '0123456789'});
testVim('ty,;', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys('t', '4');
  cm.setCursor(0, 0);
  helpers.doKeys('y', ';', 'P');
  eq('01230123456789', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 9);
  helpers.doKeys('y', ',', 'p');
  eq('01234567895678', cm.getValue());
}, { value: '0123456789'});
testVim('Ty,;', function(cm, vim, helpers) {
  cm.setCursor(0, 9);
  helpers.doKeys('T', '4');
  cm.setCursor(0, 9);
  helpers.doKeys('y', ';', 'p');
  eq('01234567895678', cm.getValue());
  helpers.doKeys('u');
  cm.setCursor(0, 0);
  helpers.doKeys('y', ',', 'P');
  eq('01230123456789', cm.getValue());
}, { value: '0123456789'});
testVim('HML', function(cm, vim, helpers) {
  var lines = 35;
  var textHeight = cm.defaultTextHeight();
  cm.setSize(600, lines*textHeight);
  cm.setCursor(120, 0);
  helpers.doKeys('H');
  helpers.assertCursorAt(86, 2);
  helpers.doKeys('L');
  helpers.assertCursorAt(120, 4);
  helpers.doKeys('M');
  helpers.assertCursorAt(103,4);
}, { value: (function(){
  var lines = new Array(100);
  var upper = '  xx\n';
  var lower = '    xx\n';
  upper = lines.join(upper);
  lower = lines.join(lower);
  return upper + lower;
})()});

var zVals = [];
forEach(['zb','zz','zt','z-','z.','z<CR>'], function(e, idx){
  var lineNum = 250;
  var lines = 35;
  testVim(e, function(cm, vim, helpers) {
    var k1 = e[0];
    var k2 = e.substring(1);
    var textHeight = cm.defaultTextHeight();
    cm.setSize(600, lines*textHeight);
    cm.setCursor(lineNum, 0);
    helpers.doKeys(k1, k2);
    zVals[idx] = cm.getScrollInfo().top;
  }, { value: (function(){
    return new Array(500).join('\n');
  })()});
});
testVim('zb<zz', function(cm, vim, helpers){
  eq(zVals[0]<zVals[1], true);
});
testVim('zz<zt', function(cm, vim, helpers){
  eq(zVals[1]<zVals[2], true);
});
testVim('zb==z-', function(cm, vim, helpers){
  eq(zVals[0], zVals[3]);
});
testVim('zz==z.', function(cm, vim, helpers){
  eq(zVals[1], zVals[4]);
});
testVim('zt==z<CR>', function(cm, vim, helpers){
  eq(zVals[2], zVals[5]);
});

var moveTillCharacterSandbox =
  'The quick brown fox \n'
  'jumped over the lazy dog.'
testVim('moveTillCharacter', function(cm, vim, helpers){
  cm.setCursor(0, 0);
  // Search for the 'q'.
  cm.openDialog = helpers.fakeOpenDialog('q');
  helpers.doKeys('/');
  eq(4, cm.getCursor().ch);
  // Jump to just before the first o in the list.
  helpers.doKeys('t');
  helpers.doKeys('o');
  eq('The quick brown fox \n', cm.getValue());
  // Delete that one character.
  helpers.doKeys('d');
  helpers.doKeys('t');
  helpers.doKeys('o');
  eq('The quick bown fox \n', cm.getValue());
  // Delete everything until the next 'o'.
  helpers.doKeys('.');
  eq('The quick box \n', cm.getValue());
  // An unmatched character should have no effect.
  helpers.doKeys('d');
  helpers.doKeys('t');
  helpers.doKeys('q');
  eq('The quick box \n', cm.getValue());
  // Matches should only be possible on single lines.
  helpers.doKeys('d');
  helpers.doKeys('t');
  helpers.doKeys('z');
  eq('The quick box \n', cm.getValue());
  // After all that, the search for 'q' should still be active, so the 'N' command
  // can run it again in reverse. Use that to delete everything back to the 'q'.
  helpers.doKeys('d');
  helpers.doKeys('N');
  eq('The ox \n', cm.getValue());
  eq(4, cm.getCursor().ch);
}, { value: moveTillCharacterSandbox});
testVim('searchForPipe', function(cm, vim, helpers){
  CodeMirror.Vim.setOption('pcre', false);
  cm.setCursor(0, 0);
  // Search for the '|'.
  cm.openDialog = helpers.fakeOpenDialog('|');
  helpers.doKeys('/');
  eq(4, cm.getCursor().ch);
}, { value: 'this|that'});


var scrollMotionSandbox =
  '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
  '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
  '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
  '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
testVim('scrollMotion', function(cm, vim, helpers){
  var prevCursor, prevScrollInfo;
  cm.setCursor(0, 0);
  // ctrl-y at the top of the file should have no effect.
  helpers.doKeys('<C-y>');
  eq(0, cm.getCursor().line);
  prevScrollInfo = cm.getScrollInfo();
  helpers.doKeys('<C-e>');
  eq(1, cm.getCursor().line);
  is(prevScrollInfo.top < cm.getScrollInfo().top);
  // Jump to the end of the sandbox.
  cm.setCursor(1000, 0);
  prevCursor = cm.getCursor();
  // ctrl-e at the bottom of the file should have no effect.
  helpers.doKeys('<C-e>');
  eq(prevCursor.line, cm.getCursor().line);
  prevScrollInfo = cm.getScrollInfo();
  helpers.doKeys('<C-y>');
  eq(prevCursor.line - 1, cm.getCursor().line);
  is(prevScrollInfo.top > cm.getScrollInfo().top);
}, { value: scrollMotionSandbox});

var squareBracketMotionSandbox = ''+
  '({\n'+//0
  '  ({\n'+//11
  '  /*comment {\n'+//2
  '            */(\n'+//3
  '#else                \n'+//4
  '  /*       )\n'+//5
  '#if        }\n'+//6
  '  )}*/\n'+//7
  ')}\n'+//8
  '{}\n'+//9
  '#else {{\n'+//10
  '{}\n'+//11
  '}\n'+//12
  '{\n'+//13
  '#endif\n'+//14
  '}\n'+//15
  '}\n'+//16
  '#else';//17
testVim('[[, ]]', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys(']', ']');
  helpers.assertCursorAt(9,0);
  helpers.doKeys('2', ']', ']');
  helpers.assertCursorAt(13,0);
  helpers.doKeys(']', ']');
  helpers.assertCursorAt(17,0);
  helpers.doKeys('[', '[');
  helpers.assertCursorAt(13,0);
  helpers.doKeys('2', '[', '[');
  helpers.assertCursorAt(9,0);
  helpers.doKeys('[', '[');
  helpers.assertCursorAt(0,0);
}, { value: squareBracketMotionSandbox});
testVim('[], ][', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doKeys(']', '[');
  helpers.assertCursorAt(12,0);
  helpers.doKeys('2', ']', '[');
  helpers.assertCursorAt(16,0);
  helpers.doKeys(']', '[');
  helpers.assertCursorAt(17,0);
  helpers.doKeys('[', ']');
  helpers.assertCursorAt(16,0);
  helpers.doKeys('2', '[', ']');
  helpers.assertCursorAt(12,0);
  helpers.doKeys('[', ']');
  helpers.assertCursorAt(0,0);
}, { value: squareBracketMotionSandbox});
testVim('[{, ]}', function(cm, vim, helpers) {
  cm.setCursor(4, 10);
  helpers.doKeys('[', '{');
  helpers.assertCursorAt(2,12);
  helpers.doKeys('2', '[', '{');
  helpers.assertCursorAt(0,1);
  cm.setCursor(4, 10);
  helpers.doKeys(']', '}');
  helpers.assertCursorAt(6,11);
  helpers.doKeys('2', ']', '}');
  helpers.assertCursorAt(8,1);
  cm.setCursor(0,1);
  helpers.doKeys(']', '}');
  helpers.assertCursorAt(8,1);
  helpers.doKeys('[', '{');
  helpers.assertCursorAt(0,1);
}, { value: squareBracketMotionSandbox});
testVim('[(, ])', function(cm, vim, helpers) {
  cm.setCursor(4, 10);
  helpers.doKeys('[', '(');
  helpers.assertCursorAt(3,14);
  helpers.doKeys('2', '[', '(');
  helpers.assertCursorAt(0,0);
  cm.setCursor(4, 10);
  helpers.doKeys(']', ')');
  helpers.assertCursorAt(5,11);
  helpers.doKeys('2', ']', ')');
  helpers.assertCursorAt(8,0);
  helpers.doKeys('[', '(');
  helpers.assertCursorAt(0,0);
  helpers.doKeys(']', ')');
  helpers.assertCursorAt(8,0);
}, { value: squareBracketMotionSandbox});
testVim('[*, ]*, [/, ]/', function(cm, vim, helpers) {
  forEach(['*', '/'], function(key){
    cm.setCursor(7, 0);
    helpers.doKeys('2', '[', key);
    helpers.assertCursorAt(2,2);
    helpers.doKeys('2', ']', key);
    helpers.assertCursorAt(7,5);
  });
}, { value: squareBracketMotionSandbox});
testVim('[#, ]#', function(cm, vim, helpers) {
  cm.setCursor(10, 3);
  helpers.doKeys('2', '[', '#');
  helpers.assertCursorAt(4,0);
  helpers.doKeys('5', ']', '#');
  helpers.assertCursorAt(17,0);
  cm.setCursor(10, 3);
  helpers.doKeys(']', '#');
  helpers.assertCursorAt(14,0);
}, { value: squareBracketMotionSandbox});
testVim('[m, ]m, [M, ]M', function(cm, vim, helpers) {
  cm.setCursor(11, 0);
  helpers.doKeys('[', 'm');
  helpers.assertCursorAt(10,7);
  helpers.doKeys('4', '[', 'm');
  helpers.assertCursorAt(1,3);
  helpers.doKeys('5', ']', 'm');
  helpers.assertCursorAt(11,0);
  helpers.doKeys('[', 'M');
  helpers.assertCursorAt(9,1);
  helpers.doKeys('3', ']', 'M');
  helpers.assertCursorAt(15,0);
  helpers.doKeys('5', '[', 'M');
  helpers.assertCursorAt(7,3);
}, { value: squareBracketMotionSandbox});

// Ex mode tests
testVim('ex_go_to_line', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doEx('4');
  helpers.assertCursorAt(3, 0);
}, { value: 'a\nb\nc\nd\ne\n'});
testVim('ex_write', function(cm, vim, helpers) {
  var tmp = CodeMirror.commands.save;
  var written;
  var actualCm;
  CodeMirror.commands.save = function(cm) {
    written = true;
    actualCm = cm;
  };
  // Test that w, wr, wri ... write all trigger :write.
  var command = 'write';
  for (var i = 1; i < command.length; i++) {
    written = false;
    actualCm = null;
    helpers.doEx(command.substring(0, i));
    eq(written, true);
    eq(actualCm, cm);
  }
  CodeMirror.commands.save = tmp;
});
testVim('ex_sort', function(cm, vim, helpers) {
  helpers.doEx('sort');
  eq('Z\na\nb\nc\nd', cm.getValue());
}, { value: 'b\nZ\nd\nc\na'});
testVim('ex_sort_reverse', function(cm, vim, helpers) {
  helpers.doEx('sort!');
  eq('d\nc\nb\na', cm.getValue());
}, { value: 'b\nd\nc\na'});
testVim('ex_sort_range', function(cm, vim, helpers) {
  helpers.doEx('2,3sort');
  eq('b\nc\nd\na', cm.getValue());
}, { value: 'b\nd\nc\na'});
testVim('ex_sort_oneline', function(cm, vim, helpers) {
  helpers.doEx('2sort');
  // Expect no change.
  eq('b\nd\nc\na', cm.getValue());
}, { value: 'b\nd\nc\na'});
testVim('ex_sort_ignoreCase', function(cm, vim, helpers) {
  helpers.doEx('sort i');
  eq('a\nb\nc\nd\nZ', cm.getValue());
}, { value: 'b\nZ\nd\nc\na'});
testVim('ex_sort_unique', function(cm, vim, helpers) {
  helpers.doEx('sort u');
  eq('Z\na\nb\nc\nd', cm.getValue());
}, { value: 'b\nZ\na\na\nd\na\nc\na'});
testVim('ex_sort_decimal', function(cm, vim, helpers) {
  helpers.doEx('sort d');
  eq('d3\n s5\n6\n.9', cm.getValue());
}, { value: '6\nd3\n s5\n.9'});
testVim('ex_sort_decimal_negative', function(cm, vim, helpers) {
  helpers.doEx('sort d');
  eq('z-9\nd3\n s5\n6\n.9', cm.getValue());
}, { value: '6\nd3\n s5\n.9\nz-9'});
testVim('ex_sort_decimal_reverse', function(cm, vim, helpers) {
  helpers.doEx('sort! d');
  eq('.9\n6\n s5\nd3', cm.getValue());
}, { value: '6\nd3\n s5\n.9'});
testVim('ex_sort_hex', function(cm, vim, helpers) {
  helpers.doEx('sort x');
  eq(' s5\n6\n.9\n&0xB\nd3', cm.getValue());
}, { value: '6\nd3\n s5\n&0xB\n.9'});
testVim('ex_sort_octal', function(cm, vim, helpers) {
  helpers.doEx('sort o');
  eq('.8\n.9\nd3\n s5\n6', cm.getValue());
}, { value: '6\nd3\n s5\n.9\n.8'});
testVim('ex_sort_decimal_mixed', function(cm, vim, helpers) {
  helpers.doEx('sort d');
  eq('y\nz\nc1\nb2\na3', cm.getValue());
}, { value: 'a3\nz\nc1\ny\nb2'});
testVim('ex_sort_decimal_mixed_reverse', function(cm, vim, helpers) {
  helpers.doEx('sort! d');
  eq('a3\nb2\nc1\nz\ny', cm.getValue());
}, { value: 'a3\nz\nc1\ny\nb2'});
// test for :global command
testVim('ex_global', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  helpers.doEx('g/one/s//two');
  eq('two two\n two two\n two two', cm.getValue());
  helpers.doEx('1,2g/two/s//one');
  eq('one one\n one one\n two two', cm.getValue());
}, {value: 'one one\n one one\n one one'});
testVim('ex_global_confirm', function(cm, vim, helpers) {
  cm.setCursor(0, 0);
  var onKeyDown;
  var openDialogSave = cm.openDialog;
  var KEYCODES = {
    a: 65,
    n: 78,
    q: 81,
    y: 89
  };
  // Intercept the ex command, 'global'
  cm.openDialog = function(template, callback, options) {
    // Intercept the prompt for the embedded ex command, 'substitute'
    cm.openDialog = function(template, callback, options) {
      onKeyDown = options.onKeyDown;
    };
    callback('g/one/s//two/gc');
  };
  helpers.doKeys(':');
  var close = function() {};
  onKeyDown({keyCode: KEYCODES.n}, '', close);
  onKeyDown({keyCode: KEYCODES.y}, '', close);
  onKeyDown({keyCode: KEYCODES.a}, '', close);
  onKeyDown({keyCode: KEYCODES.q}, '', close);
  onKeyDown({keyCode: KEYCODES.y}, '', close);
  eq('one two\n two two\n one one\n two one\n one one', cm.getValue());
}, {value: 'one one\n one one\n one one\n one one\n one one'});
// Basic substitute tests.
testVim('ex_substitute_same_line', function(cm, vim, helpers) {
  cm.setCursor(1, 0);
  helpers.doEx('s/one/two/g');
  eq('one one\n two two', cm.getValue());
}, { value: 'one one\n one one'});
testVim('ex_substitute_full_file', function(cm, vim, helpers) {
  cm.setCursor(1, 0);
  helpers.doEx('%s/one/two/g');
  eq('two two\n two two', cm.getValue());
}, { value: 'one one\n one one'});
testVim('ex_substitute_input_range', function(cm, vim, helpers) {
  cm.setCursor(1, 0);
  helpers.doEx('1,3s/\\d/0/g');
  eq('0\n0\n0\n4', cm.getValue());
}, { value: '1\n2\n3\n4' });
testVim('ex_substitute_visual_range', function(cm, vim, helpers) {
  cm.setCursor(1, 0);
  // Set last visual mode selection marks '< and '> at lines 2 and 4
  helpers.doKeys('V', '2', 'j', 'v');
  helpers.doEx('\'<,\'>s/\\d/0/g');
  eq('1\n0\n0\n0\n5', cm.getValue());
}, { value: '1\n2\n3\n4\n5' });
testVim('ex_substitute_empty_query', function(cm, vim, helpers) {
  // If the query is empty, use last query.
  cm.setCursor(1, 0);
  cm.openDialog = helpers.fakeOpenDialog('1');
  helpers.doKeys('/');
  helpers.doEx('s//b/g');
  eq('abb ab2 ab3', cm.getValue());
}, { value: 'a11 a12 a13' });
testVim('ex_substitute_javascript', function(cm, vim, helpers) {
  CodeMirror.Vim.setOption('pcre', false);
  cm.setCursor(1, 0);
  // Throw all the things that javascript likes to treat as special values
  // into the replace part. All should be literal (this is VIM).
  helpers.doEx('s/\\(\\d+\\)/$$ $\' $` $& \\1/g')
  eq('a $$ $\' $` $& 0 b', cm.getValue());
}, { value: 'a 0 b' });
testVim('ex_substitute_empty_arguments', function(cm,vim,helpers) {
  cm.setCursor(0, 0);
  helpers.doEx('s/a/b/g');
  cm.setCursor(1, 0);
  helpers.doEx('s');
  eq('b b\nb a', cm.getValue());
}, {value: 'a a\na a'});

// More complex substitute tests that test both pcre and nopcre options.
function testSubstitute(name, options) {
  testVim(name + '_pcre', function(cm, vim, helpers) {
    cm.setCursor(1, 0);
    CodeMirror.Vim.setOption('pcre', true);
    helpers.doEx(options.expr);
    eq(options.expectedValue, cm.getValue());
  }, options);
  // If no noPcreExpr is defined, assume that it's the same as the expr.
  var noPcreExpr = options.noPcreExpr ? options.noPcreExpr : options.expr;
  testVim(name + '_nopcre', function(cm, vim, helpers) {
    cm.setCursor(1, 0);
    CodeMirror.Vim.setOption('pcre', false);
    helpers.doEx(noPcreExpr);
    eq(options.expectedValue, cm.getValue());
  }, options);
}
testSubstitute('ex_substitute_capture', {
  value: 'a11 a12 a13',
  expectedValue: 'a1111 a1212 a1313',
  // $n is a backreference
  expr: 's/(\\d+)/$1$1/g',
  // \n is a backreference.
  noPcreExpr: 's/\\(\\d+\\)/\\1\\1/g'});
testSubstitute('ex_substitute_capture2', {
  value: 'a 0 b',
  expectedValue: 'a $00 b',
  expr: 's/(\\d+)/$$$1$1/g',
  noPcreExpr: 's/\\(\\d+\\)/$\\1\\1/g'});
testSubstitute('ex_substitute_nocapture', {
  value: 'a11 a12 a13',
  expectedValue: 'a$1$1 a$1$1 a$1$1',
  expr: 's/(\\d+)/$$1$$1/g',
  noPcreExpr: 's/\\(\\d+\\)/$1$1/g'});
testSubstitute('ex_substitute_nocapture2', {
  value: 'a 0 b',
  expectedValue: 'a $10 b',
  expr: 's/(\\d+)/$$1$1/g',
  noPcreExpr: 's/\\(\\d+\\)/\\$1\\1/g'});
testSubstitute('ex_substitute_nocapture', {
  value: 'a b c',
  expectedValue: 'a $ c',
  expr: 's/b/$$/',
  noPcreExpr: 's/b/$/'});
testSubstitute('ex_substitute_slash_regex', {
  value: 'one/two \n three/four',
  expectedValue: 'one|two \n three|four',
  expr: '%s/\\//|'});
testSubstitute('ex_substitute_pipe_regex', {
  value: 'one|two \n three|four',
  expectedValue: 'one,two \n three,four',
  expr: '%s/\\|/,/',
  noPcreExpr: '%s/|/,/'});
testSubstitute('ex_substitute_or_regex', {
  value: 'one|two \n three|four',
  expectedValue: 'ana|twa \n thraa|faar',
  expr: '%s/o|e|u/a/g',
  noPcreExpr: '%s/o\\|e\\|u/a/g'});
testSubstitute('ex_substitute_or_word_regex', {
  value: 'one|two \n three|four',
  expectedValue: 'five|five \n three|four',
  expr: '%s/(one|two)/five/g',
  noPcreExpr: '%s/\\(one\\|two\\)/five/g'});
testSubstitute('ex_substitute_backslashslash_regex', {
  value: 'one\\two \n three\\four',
  expectedValue: 'one,two \n three,four',
  expr: '%s/\\\\/,'});
testSubstitute('ex_substitute_slash_replacement', {
  value: 'one,two \n three,four',
  expectedValue: 'one/two \n three/four',
  expr: '%s/,/\\/'});
testSubstitute('ex_substitute_backslash_replacement', {
  value: 'one,two \n three,four',
  expectedValue: 'one\\two \n three\\four',
  expr: '%s/,/\\\\/g'});
testSubstitute('ex_substitute_multibackslash_replacement', {
  value: 'one,two \n three,four',
  expectedValue: 'one\\\\\\\\two \n three\\\\\\\\four', // 2*8 backslashes.
  expr: '%s/,/\\\\\\\\\\\\\\\\/g'}); // 16 backslashes.
testSubstitute('ex_substitute_braces_word', {
  value: 'ababab abb ab{2}',
  expectedValue: 'ab abb ab{2}',
  expr: '%s/(ab){2}//g',
  noPcreExpr: '%s/\\(ab\\)\\{2\\}//g'});
testSubstitute('ex_substitute_braces_range', {
  value: 'a aa aaa aaaa',
  expectedValue: 'a   a',
  expr: '%s/a{2,3}//g',
  noPcreExpr: '%s/a\\{2,3\\}//g'});
testSubstitute('ex_substitute_braces_literal', {
  value: 'ababab abb ab{2}',
  expectedValue: 'ababab abb ',
  expr: '%s/ab\\{2\\}//g',
  noPcreExpr: '%s/ab{2}//g'});
testSubstitute('ex_substitute_braces_char', {
  value: 'ababab abb ab{2}',
  expectedValue: 'ababab  ab{2}',
  expr: '%s/ab{2}//g',
  noPcreExpr: '%s/ab\\{2\\}//g'});
testSubstitute('ex_substitute_braces_no_escape', {
  value: 'ababab abb ab{2}',
  expectedValue: 'ababab  ab{2}',
  expr: '%s/ab{2}//g',
  noPcreExpr: '%s/ab\\{2}//g'});
testSubstitute('ex_substitute_count', {
  value: '1\n2\n3\n4',
  expectedValue: '1\n0\n0\n4',
  expr: 's/\\d/0/i 2'});
testSubstitute('ex_substitute_count_with_range', {
  value: '1\n2\n3\n4',
  expectedValue: '1\n2\n0\n0',
  expr: '1,3s/\\d/0/ 3'});
testSubstitute('ex_substitute_not_global', {
  value: 'aaa\nbaa\ncaa',
  expectedValue: 'xaa\nbxa\ncxa',
  expr: '%s/a/x/'});
function testSubstituteConfirm(name, command, initialValue, expectedValue, keys, finalPos) {
  testVim(name, function(cm, vim, helpers) {
    var savedOpenDialog = cm.openDialog;
    var savedKeyName = CodeMirror.keyName;
    var onKeyDown;
    var recordedCallback;
    var closed = true; // Start out closed, set false on second openDialog.
    function close() {
      closed = true;
    }
    // First openDialog should save callback.
    cm.openDialog = function(template, callback, options) {
      recordedCallback = callback;
    }
    // Do first openDialog.
    helpers.doKeys(':');
    // Second openDialog should save keyDown handler.
    cm.openDialog = function(template, callback, options) {
      onKeyDown = options.onKeyDown;
      closed = false;
    };
    // Return the command to Vim and trigger second openDialog.
    recordedCallback(command);
    // The event should really use keyCode, but here just mock it out and use
    // key and replace keyName to just return key.
    CodeMirror.keyName = function (e) { return e.key; }
    keys = keys.toUpperCase();
    for (var i = 0; i < keys.length; i++) {
      is(!closed);
      onKeyDown({ key: keys.charAt(i) }, '', close);
    }
    try {
      eq(expectedValue, cm.getValue());
      helpers.assertCursorAt(finalPos);
      is(closed);
    } catch(e) {
      throw e
    } finally {
      // Restore overriden functions.
      CodeMirror.keyName = savedKeyName;
      cm.openDialog = savedOpenDialog;
    }
  }, { value: initialValue });
};
testSubstituteConfirm('ex_substitute_confirm_emptydoc',
    '%s/x/b/c', '', '', '', makeCursor(0, 0));
testSubstituteConfirm('ex_substitute_confirm_nomatch',
    '%s/x/b/c', 'ba a\nbab', 'ba a\nbab', '', makeCursor(0, 0));
testSubstituteConfirm('ex_substitute_confirm_accept',
    '%s/a/b/cg', 'ba a\nbab', 'bb b\nbbb', 'yyy', makeCursor(1, 1));
testSubstituteConfirm('ex_substitute_confirm_random_keys',
    '%s/a/b/cg', 'ba a\nbab', 'bb b\nbbb', 'ysdkywerty', makeCursor(1, 1));
testSubstituteConfirm('ex_substitute_confirm_some',
    '%s/a/b/cg', 'ba a\nbab', 'bb a\nbbb', 'yny', makeCursor(1, 1));
testSubstituteConfirm('ex_substitute_confirm_all',
    '%s/a/b/cg', 'ba a\nbab', 'bb b\nbbb', 'a', makeCursor(1, 1));
testSubstituteConfirm('ex_substitute_confirm_accept_then_all',
    '%s/a/b/cg', 'ba a\nbab', 'bb b\nbbb', 'ya', makeCursor(1, 1));
testSubstituteConfirm('ex_substitute_confirm_quit',
    '%s/a/b/cg', 'ba a\nbab', 'bb a\nbab', 'yq', makeCursor(0, 3));
testSubstituteConfirm('ex_substitute_confirm_last',
    '%s/a/b/cg', 'ba a\nbab', 'bb b\nbab', 'yl', makeCursor(0, 3));
testSubstituteConfirm('ex_substitute_confirm_oneline',
    '1s/a/b/cg', 'ba a\nbab', 'bb b\nbab', 'yl', makeCursor(0, 3));
testSubstituteConfirm('ex_substitute_confirm_range_accept',
    '1,2s/a/b/cg', 'aa\na \na\na', 'bb\nb \na\na', 'yyy', makeCursor(1, 0));
testSubstituteConfirm('ex_substitute_confirm_range_some',
    '1,3s/a/b/cg', 'aa\na \na\na', 'ba\nb \nb\na', 'ynyy', makeCursor(2, 0));
testSubstituteConfirm('ex_substitute_confirm_range_all',
    '1,3s/a/b/cg', 'aa\na \na\na', 'bb\nb \nb\na', 'a', makeCursor(2, 0));
testSubstituteConfirm('ex_substitute_confirm_range_last',
    '1,3s/a/b/cg', 'aa\na \na\na', 'bb\nb \na\na', 'yyl', makeCursor(1, 0));
//:noh should clear highlighting of search-results but allow to resume search through n
testVim('ex_noh_clearSearchHighlight', function(cm, vim, helpers) {
  cm.openDialog = helpers.fakeOpenDialog('match');
  helpers.doKeys('?');
  helpers.doEx('noh');
  eq(vim.searchState_.getOverlay(),null,'match-highlighting wasn\'t cleared');
  helpers.doKeys('n');
  helpers.assertCursorAt(0, 11,'can\'t resume search after clearing highlighting');
}, { value: 'match nope match \n nope Match' });
testVim('set_boolean', function(cm, vim, helpers) {
  CodeMirror.Vim.defineOption('testoption', true, 'boolean');
  // Test default value is set.
  is(CodeMirror.Vim.getOption('testoption'));
  try {
    // Test fail to set to non-boolean
    CodeMirror.Vim.setOption('testoption', '5');
    fail();
  } catch (expected) {};
  // Test setOption
  CodeMirror.Vim.setOption('testoption', false);
  is(!CodeMirror.Vim.getOption('testoption'));
});
testVim('ex_set_boolean', function(cm, vim, helpers) {
  CodeMirror.Vim.defineOption('testoption', true, 'boolean');
  // Test default value is set.
  is(CodeMirror.Vim.getOption('testoption'));
  try {
    // Test fail to set to non-boolean
    helpers.doEx('set testoption=22');
    fail();
  } catch (expected) {};
  // Test setOption
  helpers.doEx('set notestoption');
  is(!CodeMirror.Vim.getOption('testoption'));
});
testVim('set_string', function(cm, vim, helpers) {
  CodeMirror.Vim.defineOption('testoption', 'a', 'string');
  // Test default value is set.
  eq('a', CodeMirror.Vim.getOption('testoption'));
  try {
    // Test fail to set non-string.
    CodeMirror.Vim.setOption('testoption', true);
    fail();
  } catch (expected) {};
  try {
    // Test fail to set 'notestoption'
    CodeMirror.Vim.setOption('notestoption', 'b');
    fail();
  } catch (expected) {};
  // Test setOption
  CodeMirror.Vim.setOption('testoption', 'c');
  eq('c', CodeMirror.Vim.getOption('testoption'));
});
testVim('ex_set_string', function(cm, vim, helpers) {
  CodeMirror.Vim.defineOption('testoption', 'a', 'string');
  // Test default value is set.
  eq('a', CodeMirror.Vim.getOption('testoption'));
  try {
    // Test fail to set 'notestoption'
    helpers.doEx('set notestoption=b');
    fail();
  } catch (expected) {};
  // Test setOption
  helpers.doEx('set testoption=c')
  eq('c', CodeMirror.Vim.getOption('testoption'));
});
// TODO: Reset key maps after each test.
testVim('ex_map_key2key', function(cm, vim, helpers) {
  helpers.doEx('map a x');
  helpers.doKeys('a');
  helpers.assertCursorAt(0, 0);
  eq('bc', cm.getValue());
}, { value: 'abc' });
testVim('ex_unmap_key2key', function(cm, vim, helpers) {
  helpers.doEx('unmap a');
  helpers.doKeys('a');
  eq('vim-insert', cm.getOption('keyMap'));
}, { value: 'abc' });
testVim('ex_unmap_key2key_does_not_remove_default', function(cm, vim, helpers) {
  try {
    helpers.doEx('unmap a');
    fail();
  } catch (expected) {}
  helpers.doKeys('a');
  eq('vim-insert', cm.getOption('keyMap'));
}, { value: 'abc' });
testVim('ex_map_key2key_to_colon', function(cm, vim, helpers) {
  helpers.doEx('map ; :');
  var dialogOpened = false;
  cm.openDialog = function() {
    dialogOpened = true;
  }
  helpers.doKeys(';');
  eq(dialogOpened, true);
});
testVim('ex_map_ex2key:', function(cm, vim, helpers) {
  helpers.doEx('map :del x');
  helpers.doEx('del');
  helpers.assertCursorAt(0, 0);
  eq('bc', cm.getValue());
}, { value: 'abc' });
testVim('ex_map_ex2ex', function(cm, vim, helpers) {
  helpers.doEx('map :del :w');
  var tmp = CodeMirror.commands.save;
  var written = false;
  var actualCm;
  CodeMirror.commands.save = function(cm) {
    written = true;
    actualCm = cm;
  };
  helpers.doEx('del');
  CodeMirror.commands.save = tmp;
  eq(written, true);
  eq(actualCm, cm);
});
testVim('ex_map_key2ex', function(cm, vim, helpers) {
  helpers.doEx('map a :w');
  var tmp = CodeMirror.commands.save;
  var written = false;
  var actualCm;
  CodeMirror.commands.save = function(cm) {
    written = true;
    actualCm = cm;
  };
  helpers.doKeys('a');
  CodeMirror.commands.save = tmp;
  eq(written, true);
  eq(actualCm, cm);
});
testVim('ex_map_key2key_visual_api', function(cm, vim, helpers) {
  CodeMirror.Vim.map('b', ':w', 'visual');
  var tmp = CodeMirror.commands.save;
  var written = false;
  var actualCm;
  CodeMirror.commands.save = function(cm) {
    written = true;
    actualCm = cm;
  };
  // Mapping should not work in normal mode.
  helpers.doKeys('b');
  eq(written, false);
  // Mapping should work in visual mode.
  helpers.doKeys('v', 'b');
  eq(written, true);
  eq(actualCm, cm);

  CodeMirror.commands.save = tmp;
});
testVim('ex_imap', function(cm, vim, helpers) {
  CodeMirror.Vim.map('jk', '<Esc>', 'insert');
  helpers.doKeys('i');
  is(vim.insertMode);
  helpers.doKeys('j', 'k');
  is(!vim.insertMode);
})

// Testing registration of functions as ex-commands and mapping to <Key>-keys
testVim('ex_api_test', function(cm, vim, helpers) {
  var res=false;
  var val='from';
  CodeMirror.Vim.defineEx('extest','ext',function(cm,params){
    if(params.args)val=params.args[0];
    else res=true;
  });
  helpers.doEx(':ext to');
  eq(val,'to','Defining ex-command failed');
  CodeMirror.Vim.map('<C-CR><Space>',':ext');
  helpers.doKeys('<C-CR>','<Space>');
  is(res,'Mapping to key failed');
});
// For now, this test needs to be last because it messes up : for future tests.
testVim('ex_map_key2key_from_colon', function(cm, vim, helpers) {
  helpers.doEx('map : x');
  helpers.doKeys(':');
  helpers.assertCursorAt(0, 0);
  eq('bc', cm.getValue());
}, { value: 'abc' });

// Test event handlers
testVim('beforeSelectionChange', function(cm, vim, helpers) {
  cm.setCursor(0, 100);
  eqPos(cm.getCursor('head'), cm.getCursor('anchor'));
}, { value: 'abc' });


