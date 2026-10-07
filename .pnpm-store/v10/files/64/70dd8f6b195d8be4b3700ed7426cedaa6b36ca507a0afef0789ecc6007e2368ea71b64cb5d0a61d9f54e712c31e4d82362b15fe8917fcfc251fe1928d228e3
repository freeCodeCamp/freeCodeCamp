var concatMap = require('concat-map');
var balanced = require('balanced-match');

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

var EXPANSION_MAX = 100000

// `EXPANSION_MAX` caps the *number* of expansions, but not their length. An
// input like `'{a,b}'.repeat(1500)` stays under that count - its output is
// truncated to 100k results - while making every result ~1500 characters
// long. The result set, and the intermediate arrays built while combining
// brace sets, then grow large enough to exhaust memory and crash the process
// (CVE-2026-14257). `EXPANSION_MAX_LENGTH` bounds the total number of
// characters the accumulator may hold at any point, so memory stays flat no
// matter how many brace groups are chained. The limit sits well above any
// realistic expansion (100k results hitting `EXPANSION_MAX` measure ~1M
// characters) so legitimate input is unaffected.
var EXPANSION_MAX_LENGTH = 4000000

// `expand` recurses once per level of brace *nesting* - both when expanding a
// set's comma members and when re-wrapping a set whose body is a single part.
// The CVE-2026-14257 fix made the *tail* iterative (recursion on `m.post`, one
// level per chained group), which left nesting depth unbounded: about 3,100
// levels of `{{{...a,b...}}}` - only ~6KB of input - exhausted the native stack
// and crashed the process. `EXPANSION_MAX_DEPTH` bounds how deep the parser
// will follow nesting. It sits far above any realistic pattern and well below
// the depth at which the stack runs out.
var EXPANSION_MAX_DEPTH = 1000

// Bash keeps a quirk where a brace group followed by a comma set still expands
// (`{a},b}`). The parser implements it by rewriting the string and restarting
// the scan, absorbing one `}` per pass. `n` trailing braces therefore cost `n`
// full passes over a string that itself grows by one `escClose` sentinel each
// time - quadratic in `n`, with a ~26x constant from the sentinel's length.
// 128KB of `'{a}' + '}'.repeat(n) + ',z}'` blocked the event loop for 27
// seconds to produce two results. `EXPANSION_MAX_REWRITES` bounds how many
// times the scan may restart. Real `{a},b}` input needs a handful.
var EXPANSION_MAX_REWRITES = 1000

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Like `target.push(...items)` but doesn't overflow the stack
function pushAll(target, items) {
  for (var i = 0; i < items.length; i++) {
    target.push(items[i]);
  }
}

// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  var parts = [];

  // Walk the brace groups iteratively. Recursing on `post` once per group let a
  // chain of them exhaust the stack - the parsing-side counterpart to
  // the `expand` overflow fixed for CVE-2026-14257, and not something `max` or
  // `maxLength` can bound, since it happens before expansion.
  //
  // The part the next chunk continues
  var carry = '';

  for (;;) {
    var m = balanced('{', '}', str);

    if (!m) {
      var tail = str.split(',');
      tail[0] = carry + tail[0];
      pushAll(parts, tail);
      return parts;
    }

    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(',');

    p[0] = carry + p[0];
    p[p.length-1] += '{' + body + '}';

    if (!post.length) {
      pushAll(parts, p);
      return parts;
    }

    carry = p.pop();
    pushAll(parts, p);
    str = post;
  }
}

function expandTop(str, options) {
  if (!str)
    return [];

  options = options || {};
  var max = options.max == null ? EXPANSION_MAX : options.max;
  var maxLength = options.maxLength == null ? EXPANSION_MAX_LENGTH : options.maxLength;
  var maxDepth = options.maxDepth == null ? EXPANSION_MAX_DEPTH : options.maxDepth;
  var maxRewrites = options.maxRewrites == null ? EXPANSION_MAX_REWRITES : options.maxRewrites;

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), max, maxLength, maxDepth, 0, maxRewrites, true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

// Build `{ acc[a] + pre + values[v] }` for every combination, capping the
// number of results at `max` and the total number of characters at `maxLength`.
// This is the one place output grows, so bounding it here keeps the single
// accumulator - and therefore memory - flat regardless of how many brace groups
// are combined (CVE-2026-14257).
//
// `base[a]` is the length of the part of `acc[a]` that predates the current
// empty-drop baseline (see `expand`). The matching baselines for the results
// are appended to `outBase`, which the caller carries forward alongside them.
function combine(
  acc,
  base,
  pre,
  values,
  max,
  maxLength,
  dropEmpties,
  outBase
) {
  var out = []
  var length = 0
  for (var a = 0; a < acc.length; a++) {
    for (var v = 0; v < values.length; v++) {
      if (out.length >= max) return out
      var expansion = acc[a] + pre + values[v]
      // Bash drops empty results at the top level. Skip them before they count
      // against `max`, so `max` bounds the number of *kept* results. "Empty"
      // means "adds nothing past the baseline", not "empty overall".
      if (dropEmpties && expansion.length === base[a]) continue
      if (length + expansion.length > maxLength) return out
      out.push(expansion)
      outBase.push(base[a])
      length += expansion.length
    }
  }
  return out
}

// The expansion values of a single numeric (`1..5`) or alphabetic (`a..e..2`)
// sequence body.
function expandSequence(
  body,
  isAlphaSequence,
  max,
  maxLength
) {
  var n = body.split(/\.\./)
  var N = []
  // A sequence body always splits into two or three parts, but the compiler
  // can't know that.
  /* c8 ignore start */
  if (n[0] === undefined || n[1] === undefined) {
    return N
  }
  /* c8 ignore stop */
  var x = numeric(n[0])
  var y = numeric(n[1])
  var width = Math.max(n[0].length, n[1].length)
  var incr =
    n.length === 3 && n[2] !== undefined ?
      Math.max(Math.abs(numeric(n[2])), 1)
    : 1
  var test = lte
  var reverse = y < x
  if (reverse) {
    incr *= -1
    test = gte
  }
  var pad = n.some(isPadded)

  var length = 0
  for (var i = x; test(i, y) && N.length < max; i += incr) {
    var c
    if (isAlphaSequence) {
      c = String.fromCharCode(i)
      if (c === '\\') {
        c = ''
      }
    } else {
      c = String(i)
      if (pad) {
        var need = width - c.length
        if (need > 0) {
          var z = new Array(need + 1).join('0')
          if (i < 0) {
            c = '-' + z + c.slice(1)
          } else {
            c = z + c
          }
        }
      }
    }
    if (length + c.length > maxLength) break
    N.push(c)
    length += c.length
  }
  return N
}

function expand(
  str,
  max,
  maxLength,
  maxDepth,
  depth,
  maxRewrites,
  isTop
) {
  // Too deeply nested to keep following: treat the rest as literal, the same
  // way a group that cannot expand is already handled. Truncating rather than
  // throwing keeps expansion total, matching `max` and `maxLength`.
  if (depth > maxDepth) {
    return [str];
  }

  // Consume the string's top-level brace groups left to right, threading a
  // running set of combined prefixes (`acc`). Expanding the tail iteratively -
  // rather than recursing on `m.post` once per group - keeps the native stack
  // depth constant, so deeply chained input (`'{a,b}'.repeat(3000)`) can no
  // longer overflow the stack, and leaves a single accumulator whose size
  // `maxLength` bounds directly (CVE-2026-14257).
  var acc = ['']

  // Bash drops empty results, but only when the *first* group of the run is a
  // comma set - a sequence like `{a..\}` may legitimately yield ''. The drop
  // is on the final strings, so it is applied to whichever `combine` produces
  // them (the one with no brace set left in the tail).
  //
  // The old implementation recursed on `m.post`, so the drop tested only the
  // expansion of the current call's substring. The `{a},b}` rewrite below turns
  // `isTop` back on part-way through a string, starting a fresh such run, so
  // the drop must ignore whatever `acc` already holds from earlier groups.
  // `accBase[a]` records how much of `acc[a]` predates the current run;
  // `combine` treats an expansion as empty when it adds nothing past that.
  var accBase = [0]
  // How many times the `{a},b}` rewrite below has restarted the scan. Each pass
  // re-reads the whole string, so leaving this unbounded is quadratic.
  var rewrites = 0
  var dropEmpties = false
  var firstGroup = true
  var nextBase

  for (;;) {
    var m = balanced('{', '}', str);

    // No brace set left: the rest of the string is literal.
    if (!m) {
      return combine(acc, accBase, str, [''], max, maxLength, dropEmpties, [])
    }

    // no need to expand pre, since it is guaranteed to be free of brace-sets
    var pre = m.pre;

    // For compatibility reasons, `${` is not eligible for brace expansion, and
    // on the 1.x line it suppresses expansion of the rest of the string too:
    // the whole remainder is literal. The 2.x and 5.x lines instead keep
    // expanding the tail, which is what bash does, but changing that here would
    // be a breaking change for 1.x consumers. Routed through `combine` so the
    // result is still bounded by `max` and `maxLength`.
    if (/\$$/.test(pre)) {
      return combine(acc, accBase, str, [''], max, maxLength, dropEmpties, [])
    }

    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(',') >= 0;
    if (!isSequence && !isOptions) {
      // {a},b}
      if (rewrites < maxRewrites && m.post.match(/,(?!,).*\}/)) {
        rewrites++;
        str = m.pre + '{' + m.body + escClose + m.post;
        // The rewritten string is expanded as if it were a fresh top-level one,
        // so start a new empty-drop run: anchor the baseline at what `acc`
        // holds now, and let the next expanding group decide whether to drop.
        isTop = true
        firstGroup = true
        dropEmpties = false
        accBase = []
        for (var b = 0; b < acc.length; b++) {
          accBase.push(acc[b].length)
        }
        continue
      }
      // Nothing here expands, so the whole remaining string is literal.
      return combine(
        acc,
        accBase,
        pre + '{' + m.body + '}' + m.post,
        [''],
        max,
        maxLength,
        dropEmpties,
        []
      )
    }

    if (firstGroup) {
      dropEmpties = isTop && !isSequence
      firstGroup = false
    }

    var values;
    if (isSequence) {
      values = expandSequence(m.body, isAlphaSequence, max, maxLength);
    } else {
      var n = parseCommaParts(m.body);
      if (n.length === 1 && n[0] !== undefined) {
        // x{{a,b}}y ==> x{a}y x{b}y
        n = expand(n[0], max, maxLength, maxDepth, depth + 1, maxRewrites, false).map(embrace);
        //XXX is this necessary? Can't seem to hit it in tests.
        /* c8 ignore start */
        if (n.length === 1) {
          nextBase = []
          acc = combine(
            acc,
            accBase,
            pre + n[0],
            [''],
            max,
            maxLength,
            dropEmpties && !m.post.length,
            nextBase
          )
          accBase = nextBase
          if (!m.post.length) break
          str = m.post
          continue
        }
        /* c8 ignore stop */
      }

      // Values that `combine` is going to drop as empty produce no result, so
      // they must not count against `max` - otherwise `{a,,b}` with `max: 2`
      // would stop at `['a', '']` and yield one result instead of two. Skipping
      // them outright keeps `values` bounded while leaving `max` a bound on
      // *kept* results. A value is dropped when it adds nothing past the
      // baseline, which is what `combine` tests.
      var dropsEmpties = dropEmpties && !m.post.length && !pre
      for (var d = 0; dropsEmpties && d < acc.length; d++) {
        if (acc[d].length !== accBase[d]) {
          dropsEmpties = false
        }
      }

      values = []
      var valuesLength = 0
      outer: for (var j = 0; j < n.length; j++) {
        var expanded = expand(n[j], max, maxLength, maxDepth, depth + 1, maxRewrites, false)
        for (var k = 0; k < expanded.length; k++) {
          var v = expanded[k]
          if (dropsEmpties && !v) continue
          if (values.length >= max || valuesLength + v.length > maxLength) {
            break outer
          }
          values.push(v)
          valuesLength += v.length
        }
      }
    }

    nextBase = []
    acc = combine(
      acc,
      accBase,
      pre,
      values,
      max,
      maxLength,
      dropEmpties && !m.post.length,
      nextBase
    )
    accBase = nextBase
    if (!m.post.length) break
    str = m.post
  }

  return acc
}
