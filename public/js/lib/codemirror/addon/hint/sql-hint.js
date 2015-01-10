// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../../mode/sql/sql"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../../mode/sql/sql"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var tables;
  var defaultTable;
  var keywords;
  var CONS = {
    QUERY_DIV: ";",
    ALIAS_KEYWORD: "AS"
  };
  var Pos = CodeMirror.Pos;

  function getKeywords(editor) {
    var mode = editor.doc.modeOption;
    if (mode === "sql") mode = "text/x-sql";
    return CodeMirror.resolveMode(mode).keywords;
  }

  function match(string, word) {
    var len = string.length;
    var sub = word.substr(0, len);
    return string.toUpperCase() === sub.toUpperCase();
  }

  function addMatches(result, search, wordlist, formatter) {
    for (var word in wordlist) {
      if (!wordlist.hasOwnProperty(word)) continue;
      if (Array.isArray(wordlist)) {
        word = wordlist[word];
      }
      if (match(search, word)) {
        result.push(formatter(word));
      }
    }
  }

  function nameCompletion(cur, token, result, editor) {
    var useBacktick = (token.string.charAt(0) == "`");
    var string = token.string.substr(1);
    var prevToken = editor.getTokenAt(Pos(cur.line, token.start));
    if (token.string.charAt(0) == "." || prevToken.string == "."){
      //Suggest colunm names
      if (prevToken.string == ".") {
        var prevToken = editor.getTokenAt(Pos(cur.line, token.start - 1));
      }
      var table = prevToken.string;
      //Check if backtick is used in table name. If yes, use it for columns too.
      var useBacktickTable = false;
      if (table.match(/`/g)) {
        useBacktickTable = true;
        table = table.replace(/`/g, "");
      }
      //Check if table is available. If not, find table by Alias
      if (!tables.hasOwnProperty(table))
        table = findTableByAlias(table, editor);
      var columns = tables[table];
      if (!columns) return;

      if (useBacktick) {
        addMatches(result, string, columns, function(w) {return "`" + w + "`";});
      }
      else if(useBacktickTable) {
        addMatches(result, string, columns, function(w) {return ".`" + w + "`";});
      }
      else {
        addMatches(result, string, columns, function(w) {return "." + w;});
      }
    }
    else {
      //Suggest table names or colums in defaultTable
      while (token.start && string.charAt(0) == ".") {
        token = editor.getTokenAt(Pos(cur.line, token.start - 1));
        string = token.string + string;
      }
      if (useBacktick) {
        addMatches(result, string, tables, function(w) {return "`" + w + "`";});
        addMatches(result, string, defaultTable, function(w) {return "`" + w + "`";});
      }
      else {
        addMatches(result, string, tables, function(w) {return w;});
        addMatches(result, string, defaultTable, function(w) {return w;});
      }
    }
  }

  function eachWord(lineText, f) {
    if (!lineText) return;
    var excepted = /[,;]/g;
    var words = lineText.split(" ");
    for (var i = 0; i < words.length; i++) {
      f(words[i]?words[i].replace(excepted, '') : '');
    }
  }

  function convertCurToNumber(cur) {
    // max characters of a line is 999,999.
    return cur.line + cur.ch / Math.pow(10, 6);
  }

  function convertNumberToCur(num) {
    return Pos(Math.floor(num), +num.toString().split('.').pop());
  }

  function findTableByAlias(alias, editor) {
    var doc = editor.doc;
    var fullQuery = doc.getValue();
    var aliasUpperCase = alias.toUpperCase();
    var previousWord = "";
    var table = "";
    var separator = [];
    var validRange = {
      start: Pos(0, 0),
      end: Pos(editor.lastLine(), editor.getLineHandle(editor.lastLine()).length)
    };

    //add separator
    var indexOfSeparator = fullQuery.indexOf(CONS.QUERY_DIV);
    while(indexOfSeparator != -1) {
      separator.push(doc.posFromIndex(indexOfSeparator));
      indexOfSeparator = fullQuery.indexOf(CONS.QUERY_DIV, indexOfSeparator+1);
    }
    separator.unshift(Pos(0, 0));
    separator.push(Pos(editor.lastLine(), editor.getLineHandle(editor.lastLine()).text.length));

    //find valid range
    var prevItem = 0;
    var current = convertCurToNumber(editor.getCursor());
    for (var i=0; i< separator.length; i++) {
      var _v = convertCurToNumber(separator[i]);
      if (current > prevItem && current <= _v) {
        validRange = { start: convertNumberToCur(prevItem), end: convertNumberToCur(_v) };
        break;
      }
      prevItem = _v;
    }

    var query = doc.getRange(validRange.start, validRange.end, false);

    for (var i = 0; i < query.length; i++) {
      var lineText = query[i];
      eachWord(lineText, function(word) {
        var wordUpperCase = word.toUpperCase();
        if (wordUpperCase === aliasUpperCase && tables.hasOwnProperty(previousWord)) {
            table = previousWord;
        }
        if (wordUpperCase !== CONS.ALIAS_KEYWORD) {
          previousWord = word;
        }
      });
      if (table) break;
    }
    return table;
  }

  CodeMirror.registerHelper("hint", "sql", function(editor, options) {
    tables = (options && options.tables) || {};
    var defaultTableName = options && options.defaultTable;
    defaultTable = (defaultTableName && tables[defaultTableName] || []);
    keywords = keywords || getKeywords(editor);

    var cur = editor.getCursor();
    var result = [];
    var token = editor.getTokenAt(cur), start, end, search;
    if (token.end > cur.ch) {
      token.end = cur.ch;
      token.string = token.string.slice(0, cur.ch - token.start);
    }

    if (token.string.match(/^[.`\w@]\w*$/)) {
      search = token.string;
      start = token.start;
      end = token.end;
    } else {
      start = end = cur.ch;
      search = "";
    }
    if (search.charAt(0) == "." || search.charAt(0) == "`") {
      nameCompletion(cur, token, result, editor);
    } else {
      addMatches(result, search, tables, function(w) {return w;});
      addMatches(result, search, defaultTable, function(w) {return w;});
      addMatches(result, search, keywords, function(w) {return w.toUpperCase();});
    }

    return {list: result, from: Pos(cur.line, start), to: Pos(cur.line, end)};
  });
});
