var tests = [], filters = [], allNames = [];

function Failure(why) {this.message = why;}
Failure.prototype.toString = function() { return this.message; };

function indexOf(collection, elt) {
  if (collection.indexOf) return collection.indexOf(elt);
  for (var i = 0, e = collection.length; i < e; ++i)
    if (collection[i] == elt) return i;
  return -1;
}

function test(name, run, expectedFail) {
  // Force unique names
  var originalName = name;
  var i = 2; // Second function would be NAME_2
  while (indexOf(allNames, name) !== -1){
    name = originalName + "_" + i;
    i++;
  }
  allNames.push(name);
  // Add test
  tests.push({name: name, func: run, expectedFail: expectedFail});
  return name;
}
var namespace = "";
function testCM(name, run, opts, expectedFail) {
  return test(namespace + name, function() {
    var place = document.getElementById("testground"), cm = window.cm = CodeMirror(place, opts);
    var successful = false;
    try {
      run(cm);
      successful = true;
    } finally {
      if (!successful || verbose) {
        place.style.visibility = "visible";
      } else {
        place.removeChild(cm.getWrapperElement());
      }
    }
  }, expectedFail);
}

function runTests(callback) {
  var totalTime = 0;
  function step(i) {
    for (;;) {
      if (i === tests.length) {
        running = false;
        return callback("done");
      }
      var test = tests[i], skip = false;
      if (filters.length) {
        skip = true;
        for (var j = 0; j < filters.length; j++)
          if (test.name.match(filters[j])) skip = false;
      }
      if (skip) {
        callback("skipped", test.name, message);
        i++;
      } else {
        break;
      }
    }
    var expFail = test.expectedFail, startTime = +new Date, threw = false;
    try {
      var message = test.func();
    } catch(e) {
      threw = true;
      if (expFail) callback("expected", test.name);
      else if (e instanceof Failure) callback("fail", test.name, e.message);
      else {
        var pos = /(?:\bat |@).*?([^\/:]+):(\d+)/.exec(e.stack);
        if (pos) console["log"](e.stack);
        callback("error", test.name, e.toString() + (pos ? " (" + pos[1] + ":" + pos[2] + ")" : ""));
      }
    }
    if (!threw) {
      if (expFail) callback("fail", test.name, message || "expected failure, but succeeded");
      else callback("ok", test.name, message);
    }
    if (!quit) { // Run next test
      var delay = 0;
      totalTime += (+new Date) - startTime;
      if (totalTime > 500){
        totalTime = 0;
        delay = 50;
      }
      setTimeout(function(){step(i + 1);}, delay);
    } else { // Quit tests
      running = false;
      return null;
    }
  }
  step(0);
}

function label(str, msg) {
  if (msg) return str + " (" + msg + ")";
  return str;
}
function eq(a, b, msg) {
  if (a != b) throw new Failure(label(a + " != " + b, msg));
}
function near(a, b, margin, msg) {
  if (Math.abs(a - b) > margin)
    throw new Failure(label(a + " is not close to " + b + " (" + margin + ")", msg));
}
function eqPos(a, b, msg) {
  function str(p) { return "{line:" + p.line + ",ch:" + p.ch + "}"; }
  if (a == b) return;
  if (a == null) throw new Failure(label("comparing null to " + str(b), msg));
  if (b == null) throw new Failure(label("comparing " + str(a) + " to null", msg));
  if (a.line != b.line || a.ch != b.ch) throw new Failure(label(str(a) + " != " + str(b), msg));
}
function is(a, msg) {
  if (!a) throw new Failure(label("assertion failed", msg));
}

function countTests() {
  if (!filters.length) return tests.length;
  var sum = 0;
  for (var i = 0; i < tests.length; ++i) {
    var name = tests[i].name;
    for (var j = 0; j < filters.length; j++) {
      if (name.match(filters[j])) {
        ++sum;
        break;
      }
    }
  }
  return sum;
}

function parseTestFilter(s) {
  if (/_\*$/.test(s)) return new RegExp("^" + s.slice(0, s.length - 2), "i");
  else return new RegExp(s, "i");
}
