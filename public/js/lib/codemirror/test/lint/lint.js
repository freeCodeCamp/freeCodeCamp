/*
 Simple linter, based on the Acorn [1] parser module

 All of the existing linters either cramp my style or have huge
 dependencies (Closure). So here's a very simple, non-invasive one
 that only spots

  - missing semicolons and trailing commas
  - variables or properties that are reserved words
  - assigning to a variable you didn't declare
  - access to non-whitelisted globals
    (use a '// declare global: foo, bar' comment to declare extra
    globals in a file)

 [1]: https://github.com/marijnh/acorn/
*/

var topAllowedGlobals = Object.create(null);
("Error RegExp Number String Array Function Object Math Date undefined " +
 "parseInt parseFloat Infinity NaN isNaN " +
 "window document navigator prompt alert confirm console " +
 "screen FileReader Worker postMessage importScripts " +
 "setInterval clearInterval setTimeout clearTimeout " +
 "CodeMirror " +
 "test exports require module define requirejs")
  .split(" ").forEach(function(n) { topAllowedGlobals[n] = true; });

var fs = require("fs"), acorn = require("./acorn.js"), walk = require("./walk.js");

var scopePasser = walk.make({
  ScopeBody: function(node, prev, c) { c(node, node.scope); }
});

var cBlob = /^\/\/ CodeMirror, copyright \(c\) by Marijn Haverbeke and others\n\/\/ Distributed under an MIT license: http:\/\/codemirror.net\/LICENSE\n\n/;

function checkFile(fileName) {
  var file = fs.readFileSync(fileName, "utf8"), notAllowed;
  if (notAllowed = file.match(/[\x00-\x08\x0b\x0c\x0e-\x19\uFEFF\t]|[ \t]\n/)) {
    var msg;
    if (notAllowed[0] == "\t") msg = "Found tab character";
    else if (notAllowed[0].indexOf("\n") > -1) msg = "Trailing whitespace";
    else msg = "Undesirable character " + notAllowed[0].charCodeAt(0);
    var info = acorn.getLineInfo(file, notAllowed.index);
    fail(msg + " at line " + info.line + ", column " + info.column, {source: fileName});
  }

  if (!cBlob.test(file))
    fail("Missing license blob", {source: fileName});
  
  var globalsSeen = Object.create(null);

  try {
    var parsed = acorn.parse(file, {
      locations: true,
      ecmaVersion: 3,
      strictSemicolons: true,
      allowTrailingCommas: false,
      forbidReserved: "everywhere",
      sourceFile: fileName
    });
  } catch (e) {
    fail(e.message, {source: fileName});
    return;
  }

  var scopes = [];

  walk.simple(parsed, {
    ScopeBody: function(node, scope) {
      node.scope = scope;
      scopes.push(scope);
    }
  }, walk.scopeVisitor, {vars: Object.create(null)});

  var ignoredGlobals = Object.create(null);

  function inScope(name, scope) {
    for (var cur = scope; cur; cur = cur.prev)
      if (name in cur.vars) return true;
  }
  function checkLHS(node, scope) {
    if (node.type == "Identifier" && !(node.name in ignoredGlobals) &&
        !inScope(node.name, scope)) {
      ignoredGlobals[node.name] = true;
      fail("Assignment to global variable", node.loc);
    }
  }

  walk.simple(parsed, {
    UpdateExpression: function(node, scope) {checkLHS(node.argument, scope);},
    AssignmentExpression: function(node, scope) {checkLHS(node.left, scope);},
    Identifier: function(node, scope) {
      if (node.name == "arguments") return;
      // Mark used identifiers
      for (var cur = scope; cur; cur = cur.prev)
        if (node.name in cur.vars) {
          cur.vars[node.name].used = true;
          return;
        }
      globalsSeen[node.name] = node.loc;
    },
    FunctionExpression: function(node) {
      if (node.id) fail("Named function expression", node.loc);
    },
    ForStatement: function(node) {
      checkReusedIndex(node);
    },
    MemberExpression: function(node) {
      if (node.object.type == "Identifier" && node.object.name == "console" && !node.computed)
        fail("Found console." + node.property.name, node.loc);
    },
    DebuggerStatement: function(node) {
      fail("Found debugger statement", node.loc);
    }
  }, scopePasser);

  function checkReusedIndex(node) {
    if (!node.init || node.init.type != "VariableDeclaration") return;
    var name = node.init.declarations[0].id.name;
    walk.recursive(node.body, null, {
      Function: function() {},
      VariableDeclaration: function(node, st, c) {
        for (var i = 0; i < node.declarations.length; i++)
          if (node.declarations[i].id.name == name)
            fail("redefined loop variable", node.declarations[i].id.loc);
        walk.base.VariableDeclaration(node, st, c);
      }
    });
  }

  var allowedGlobals = Object.create(topAllowedGlobals), m;
  if (m = file.match(/\/\/ declare global:\s+(.*)/))
    m[1].split(/,\s*/g).forEach(function(n) { allowedGlobals[n] = true; });
  for (var glob in globalsSeen)
    if (!(glob in allowedGlobals))
      fail("Access to global variable " + glob + ". Add a '// declare global: " + glob +
           "' comment or add this variable in test/lint/lint.js.", globalsSeen[glob]);

  for (var i = 0; i < scopes.length; ++i) {
    var scope = scopes[i];
    for (var name in scope.vars) {
      var info = scope.vars[name];
      if (!info.used && info.type != "catch clause" && info.type != "function name" && name.charAt(0) != "_")
        fail("Unused " + info.type + " " + name, info.node.loc);
    }
  }
}

var failed = false;
function fail(msg, pos) {
  if (pos.start) msg += " (" + pos.start.line + ":" + pos.start.column + ")";
  console.log(pos.source + ": " + msg);
  failed = true;
}

function checkDir(dir) {
  fs.readdirSync(dir).forEach(function(file) {
    var fname = dir + "/" + file;
    if (/\.js$/.test(file)) checkFile(fname);
    else if (fs.lstatSync(fname).isDirectory()) checkDir(fname);
  });
}

exports.checkDir = checkDir;
exports.checkFile = checkFile;
exports.success = function() { return !failed; };
