/**
 * Helper to test CodeMirror highlighting modes. It pretty prints output of the
 * highlighter and can check against expected styles.
 *
 * Mode tests are registered by calling test.mode(testName, mode,
 * tokens), where mode is a mode object as returned by
 * CodeMirror.getMode, and tokens is an array of lines that make up
 * the test.
 *
 * These lines are strings, in which styled stretches of code are
 * enclosed in brackets `[]`, and prefixed by their style. For
 * example, `[keyword if]`. Brackets in the code itself must be
 * duplicated to prevent them from being interpreted as token
 * boundaries. For example `a[[i]]` for `a[i]`. If a token has
 * multiple styles, the styles must be separated by ampersands, for
 * example `[tag&error </hmtl>]`.
 *
 * See the test.js files in the css, markdown, gfm, and stex mode
 * directories for examples.
 */
(function() {
  function findSingle(str, pos, ch) {
    for (;;) {
      var found = str.indexOf(ch, pos);
      if (found == -1) return null;
      if (str.charAt(found + 1) != ch) return found;
      pos = found + 2;
    }
  }

  var styleName = /[\w&-_]+/g;
  function parseTokens(strs) {
    var tokens = [], plain = "";
    for (var i = 0; i < strs.length; ++i) {
      if (i) plain += "\n";
      var str = strs[i], pos = 0;
      while (pos < str.length) {
        var style = null, text;
        if (str.charAt(pos) == "[" && str.charAt(pos+1) != "[") {
          styleName.lastIndex = pos + 1;
          var m = styleName.exec(str);
          style = m[0].replace(/&/g, " ");
          var textStart = pos + style.length + 2;
          var end = findSingle(str, textStart, "]");
          if (end == null) throw new Error("Unterminated token at " + pos + " in '" + str + "'" + style);
          text = str.slice(textStart, end);
          pos = end + 1;
        } else {
          var end = findSingle(str, pos, "[");
          if (end == null) end = str.length;
          text = str.slice(pos, end);
          pos = end;
        }
        text = text.replace(/\[\[|\]\]/g, function(s) {return s.charAt(0);});
        tokens.push({style: style, text: text});
        plain += text;
      }
    }
    return {tokens: tokens, plain: plain};
  }

  test.mode = function(name, mode, tokens, modeName) {
    var data = parseTokens(tokens);
    return test((modeName || mode.name) + "_" + name, function() {
      return compare(data.plain, data.tokens, mode);
    });
  };

  function esc(str) {
    return str.replace('&', '&amp;').replace('<', '&lt;').replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
;
  }

  function compare(text, expected, mode) {

    var expectedOutput = [];
    for (var i = 0; i < expected.length; ++i) {
      var sty = expected[i].style;
      if (sty && sty.indexOf(" ")) sty = sty.split(' ').sort().join(' ');
      expectedOutput.push({style: sty, text: expected[i].text});
    }

    var observedOutput = highlight(text, mode);

    var s = "";
    var diff = highlightOutputsDifferent(expectedOutput, observedOutput);
    if (diff != null) {
      s += '<div class="mt-test mt-fail">';
      s +=   '<pre>' + esc(text) + '</pre>';
      s +=   '<div class="cm-s-default">';
      s += 'expected:';
      s +=   prettyPrintOutputTable(expectedOutput, diff);
      s += 'observed: [<a onclick="this.parentElement.className+=\' mt-state-unhide\'">display states</a>]';
      s +=   prettyPrintOutputTable(observedOutput, diff);
      s +=   '</div>';
      s += '</div>';
    }
    if (observedOutput.indentFailures) {
      for (var i = 0; i < observedOutput.indentFailures.length; i++)
        s += "<div class='mt-test mt-fail'>" + esc(observedOutput.indentFailures[i]) + "</div>";
    }
    if (s) throw new Failure(s);
  }

  function stringify(obj) {
    function replacer(key, obj) {
      if (typeof obj == "function") {
        var m = obj.toString().match(/function\s*[^\s(]*/);
        return m ? m[0] : "function";
      }
      return obj;
    }
    if (window.JSON && JSON.stringify)
      return JSON.stringify(obj, replacer, 2);
    return "[unsupported]";  // Fail safely if no native JSON.
  }

  function highlight(string, mode) {
    var state = mode.startState();

    var lines = string.replace(/\r\n/g,'\n').split('\n');
    var st = [], pos = 0;
    for (var i = 0; i < lines.length; ++i) {
      var line = lines[i], newLine = true;
      if (mode.indent) {
        var ws = line.match(/^\s*/)[0];
        var indent = mode.indent(state, line.slice(ws.length));
        if (indent != CodeMirror.Pass && indent != ws.length)
          (st.indentFailures || (st.indentFailures = [])).push(
            "Indentation of line " + (i + 1) + " is " + indent + " (expected " + ws.length + ")");
      }
      var stream = new CodeMirror.StringStream(line);
      if (line == "" && mode.blankLine) mode.blankLine(state);
      /* Start copied code from CodeMirror.highlight */
      while (!stream.eol()) {
        for (var j = 0; j < 10 && stream.start >= stream.pos; j++)
          var compare = mode.token(stream, state);
        if (j == 10)
          throw new Failure("Failed to advance the stream." + stream.string + " " + stream.pos);
        var substr = stream.current();
        if (compare && compare.indexOf(" ") > -1) compare = compare.split(' ').sort().join(' ');
        stream.start = stream.pos;
        if (pos && st[pos-1].style == compare && !newLine) {
          st[pos-1].text += substr;
        } else if (substr) {
          st[pos++] = {style: compare, text: substr, state: stringify(state)};
        }
        // Give up when line is ridiculously long
        if (stream.pos > 5000) {
          st[pos++] = {style: null, text: this.text.slice(stream.pos)};
          break;
        }
        newLine = false;
      }
    }

    return st;
  }

  function highlightOutputsDifferent(o1, o2) {
    var minLen = Math.min(o1.length, o2.length);
    for (var i = 0; i < minLen; ++i)
      if (o1[i].style != o2[i].style || o1[i].text != o2[i].text) return i;
    if (o1.length > minLen || o2.length > minLen) return minLen;
  }

  function prettyPrintOutputTable(output, diffAt) {
    var s = '<table class="mt-output">';
    s += '<tr>';
    for (var i = 0; i < output.length; ++i) {
      var style = output[i].style, val = output[i].text;
      s +=
      '<td class="mt-token"' + (i == diffAt * 2 ? " style='background: pink'" : "") + '>' +
        '<span class="cm-' + esc(String(style)) + '">' +
        esc(val.replace(/ /g,'\xb7')) +  // · MIDDLE DOT
        '</span>' +
        '</td>';
    }
    s += '</tr><tr>';
    for (var i = 0; i < output.length; ++i) {
      s += '<td class="mt-style"><span>' + (output[i].style || null) + '</span></td>';
    }
    if(output[0].state) {
      s += '</tr><tr class="mt-state-row" title="State AFTER each token">';
      for (var i = 0; i < output.length; ++i) {
        s += '<td class="mt-state"><pre>' + esc(output[i].state) + '</pre></td>';
      }
    }
    s += '</tr></table>';
    return s;
  }
})();
