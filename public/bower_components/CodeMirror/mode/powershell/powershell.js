// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  'use strict';
  if (typeof exports == 'object' && typeof module == 'object') // CommonJS
    mod(require('codemirror'));
  else if (typeof define == 'function' && define.amd) // AMD
    define(['codemirror'], mod);
  else // Plain browser env
    mod(window.CodeMirror);
})(function(CodeMirror) {
'use strict';

CodeMirror.defineMode('powershell', function() {
  function buildRegexp(patterns, options) {
    options = options || {};
    var prefix = options.prefix !== undefined ? options.prefix : '^';
    var suffix = options.suffix !== undefined ? options.suffix : '\\b';

    for (var i = 0; i < patterns.length; i++) {
      if (patterns[i] instanceof RegExp) {
        patterns[i] = patterns[i].source;
      }
      else {
        patterns[i] = patterns[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }
    }

    return new RegExp(prefix + '(' + patterns.join('|') + ')' + suffix, 'i');
  }

  var notCharacterOrDash = '(?=[^A-Za-z\\d\\-_]|$)';
  var varNames = /[\w\-:]/
  var keywords = buildRegexp([
    /begin|break|catch|continue|data|default|do|dynamicparam/,
    /else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,
    /param|process|return|switch|throw|trap|try|until|where|while/
  ], { suffix: notCharacterOrDash });

  var punctuation = /[\[\]{},;`\.]|@[({]/;
  var wordOperators = buildRegexp([
    'f',
    /b?not/,
    /[ic]?split/, 'join',
    /is(not)?/, 'as',
    /[ic]?(eq|ne|[gl][te])/,
    /[ic]?(not)?(like|match|contains)/,
    /[ic]?replace/,
    /b?(and|or|xor)/
  ], { prefix: '-' });
  var symbolOperators = /[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/;
  var operators = buildRegexp([wordOperators, symbolOperators], { suffix: '' });

  var numbers = /^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i;

  var identifiers = /^[A-Za-z\_][A-Za-z\-\_\d]*\b/;

  var symbolBuiltins = /[A-Z]:|%|\?/i;
  var namedBuiltins = buildRegexp([
    /Add-(Computer|Content|History|Member|PSSnapin|Type)/,
    /Checkpoint-Computer/,
    /Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,
    /Compare-Object/,
    /Complete-Transaction/,
    /Connect-PSSession/,
    /ConvertFrom-(Csv|Json|SecureString|StringData)/,
    /Convert-Path/,
    /ConvertTo-(Csv|Html|Json|SecureString|Xml)/,
    /Copy-Item(Property)?/,
    /Debug-Process/,
    /Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
    /Disconnect-PSSession/,
    /Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
    /(Enter|Exit)-PSSession/,
    /Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,
    /ForEach-Object/,
    /Format-(Custom|List|Table|Wide)/,
    new RegExp('Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential'
      + '|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job'
      + '|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration'
      + '|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)'),
    /Group-Object/,
    /Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,
    /ImportSystemModules/,
    /Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,
    /Join-Path/,
    /Limit-EventLog/,
    /Measure-(Command|Object)/,
    /Move-Item(Property)?/,
    new RegExp('New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile'
      + '|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)'),
    /Out-(Default|File|GridView|Host|Null|Printer|String)/,
    /Pause/,
    /(Pop|Push)-Location/,
    /Read-Host/,
    /Receive-(Job|PSSession)/,
    /Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,
    /Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,
    /Rename-(Computer|Item(Property)?)/,
    /Reset-ComputerMachinePassword/,
    /Resolve-Path/,
    /Restart-(Computer|Service)/,
    /Restore-Computer/,
    /Resume-(Job|Service)/,
    /Save-Help/,
    /Select-(Object|String|Xml)/,
    /Send-MailMessage/,
    new RegExp('Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug' +
               '|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)'),
    /Show-(Command|ControlPanelItem|EventLog)/,
    /Sort-Object/,
    /Split-Path/,
    /Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,
    /Stop-(Computer|Job|Process|Service|Transcript)/,
    /Suspend-(Job|Service)/,
    /TabExpansion2/,
    /Tee-Object/,
    /Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,
    /Trace-Command/,
    /Unblock-File/,
    /Undo-Transaction/,
    /Unregister-(Event|PSSessionConfiguration)/,
    /Update-(FormatData|Help|List|TypeData)/,
    /Use-Transaction/,
    /Wait-(Event|Job|Process)/,
    /Where-Object/,
    /Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,
    /cd|help|mkdir|more|oss|prompt/,
    /ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,
    /echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,
    /group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,
    /measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,
    /rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,
    /sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/
  ], { prefix: '', suffix: '' });
  var variableBuiltins = buildRegexp([
    /[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,
    /FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,
    /MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,
    /PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,
    /PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,
    /WarningPreference|WhatIfPreference/,

    /Event|EventArgs|EventSubscriber|Sender/,
    /Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,
    /true|false|null/
  ], { prefix: '\\$', suffix: '' });

  var builtins = buildRegexp([symbolBuiltins, namedBuiltins, variableBuiltins], { suffix: notCharacterOrDash });

  var grammar = {
    keyword: keywords,
    number: numbers,
    operator: operators,
    builtin: builtins,
    punctuation: punctuation,
    identifier: identifiers
  };

  // tokenizers
  function tokenBase(stream, state) {
    // Handle Comments
    //var ch = stream.peek();

    var parent = state.returnStack[state.returnStack.length - 1];
    if (parent && parent.shouldReturnFrom(state)) {
      state.tokenize = parent.tokenize;
      state.returnStack.pop();
      return state.tokenize(stream, state);
    }

    if (stream.eatSpace()) {
      return null;
    }

    if (stream.eat('(')) {
      state.bracketNesting += 1;
      return 'punctuation';
    }

    if (stream.eat(')')) {
      state.bracketNesting -= 1;
      return 'punctuation';
    }

    for (var key in grammar) {
      if (stream.match(grammar[key])) {
        return key;
      }
    }

    var ch = stream.next();

    // single-quote string
    if (ch === "'") {
      return tokenSingleQuoteString(stream, state);
    }

    if (ch === '$') {
      return tokenVariable(stream, state);
    }

    // double-quote string
    if (ch === '"') {
      return tokenDoubleQuoteString(stream, state);
    }

    if (ch === '<' && stream.eat('#')) {
      state.tokenize = tokenComment;
      return tokenComment(stream, state);
    }

    if (ch === '#') {
      stream.skipToEnd();
      return 'comment';
    }

    if (ch === '@') {
      var quoteMatch = stream.eat(/["']/);
      if (quoteMatch && stream.eol()) {
        state.tokenize = tokenMultiString;
        state.startQuote = quoteMatch[0];
        return tokenMultiString(stream, state);
      } else if (stream.peek().match(/[({]/)) {
        return 'punctuation';
      } else if (stream.peek().match(varNames)) {
        // splatted variable
        return tokenVariable(stream, state);
      }
    }
    return 'error';
  }

  function tokenSingleQuoteString(stream, state) {
    var ch;
    while ((ch = stream.peek()) != null) {
      stream.next();

      if (ch === "'" && !stream.eat("'")) {
        state.tokenize = tokenBase;
        return 'string';
      }
    }

    return 'error';
  }

  function tokenDoubleQuoteString(stream, state) {
    var ch;
    while ((ch = stream.peek()) != null) {
      if (ch === '$') {
        state.tokenize = tokenStringInterpolation;
        return 'string';
      }

      stream.next();
      if (ch === '`') {
        stream.next();
        continue;
      }

      if (ch === '"' && !stream.eat('"')) {
        state.tokenize = tokenBase;
        return 'string';
      }
    }

    return 'error';
  }

  function tokenStringInterpolation(stream, state) {
    return tokenInterpolation(stream, state, tokenDoubleQuoteString);
  }

  function tokenMultiStringReturn(stream, state) {
    state.tokenize = tokenMultiString;
    state.startQuote = '"'
    return tokenMultiString(stream, state);
  }

  function tokenHereStringInterpolation(stream, state) {
    return tokenInterpolation(stream, state, tokenMultiStringReturn);
  }

  function tokenInterpolation(stream, state, parentTokenize) {
    if (stream.match('$(')) {
      var savedBracketNesting = state.bracketNesting;
      state.returnStack.push({
        /*jshint loopfunc:true */
        shouldReturnFrom: function(state) {
          return state.bracketNesting === savedBracketNesting;
        },
        tokenize: parentTokenize
      });
      state.tokenize = tokenBase;
      state.bracketNesting += 1;
      return 'punctuation';
    } else {
      stream.next();
      state.returnStack.push({
        shouldReturnFrom: function() { return true; },
        tokenize: parentTokenize
      });
      state.tokenize = tokenVariable;
      return state.tokenize(stream, state);
    }
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == '>') {
          state.tokenize = tokenBase;
          break;
      }
      maybeEnd = (ch === '#');
    }
    return 'comment';
  }

  function tokenVariable(stream, state) {
    var ch = stream.peek();
    if (stream.eat('{')) {
      state.tokenize = tokenVariableWithBraces;
      return tokenVariableWithBraces(stream, state);
    } else if (ch != undefined && ch.match(varNames)) {
      stream.eatWhile(varNames);
      state.tokenize = tokenBase;
      return 'variable-2';
    } else {
      state.tokenize = tokenBase;
      return 'error';
    }
  }

  function tokenVariableWithBraces(stream, state) {
    var ch;
    while ((ch = stream.next()) != null) {
      if (ch === '}') {
        state.tokenize = tokenBase;
        break;
      }
    }
    return 'variable-2';
  }

  function tokenMultiString(stream, state) {
    var quote = state.startQuote;
    if (stream.sol() && stream.match(new RegExp(quote + '@'))) {
      state.tokenize = tokenBase;
    }
    else if (quote === '"') {
      while (!stream.eol()) {
        var ch = stream.peek();
        if (ch === '$') {
          state.tokenize = tokenHereStringInterpolation;
          return 'string';
        }

        stream.next();
        if (ch === '`') {
          stream.next();
        }
      }
    }
    else {
      stream.skipToEnd();
    }

    return 'string';
  }

  var external = {
    startState: function() {
      return {
        returnStack: [],
        bracketNesting: 0,
        tokenize: tokenBase
      };
    },

    token: function(stream, state) {
      return state.tokenize(stream, state);
    },

    blockCommentStart: '<#',
    blockCommentEnd: '#>',
    lineComment: '#',
    fold: 'brace'
  };
  return external;
});

CodeMirror.defineMIME('application/x-powershell', 'powershell');
});
