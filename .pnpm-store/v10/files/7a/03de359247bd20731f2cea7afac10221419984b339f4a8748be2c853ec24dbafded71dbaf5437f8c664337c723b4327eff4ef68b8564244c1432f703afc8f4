import katex from '../katex.mjs';

/**
 * renderA11yString returns a readable string.
 *
 * In some cases the string will have the proper semantic math
 * meaning,:
 *   renderA11yString("\\frac{1}{2}"")
 *   -> "start fraction, 1, divided by, 2, end fraction"
 *
 * However, other cases do not:
 *   renderA11yString("f(x) = x^2")
 *   -> "f, left parenthesis, x, right parenthesis, equals, x, squared"
 *
 * The commas in the string aim to increase ease of understanding
 * when read by a screenreader.
 */
var stringMap = {
  "(": "left parenthesis",
  ")": "right parenthesis",
  "[": "open bracket",
  "]": "close bracket",
  "\\{": "left brace",
  "\\}": "right brace",
  "\\lvert": "open vertical bar",
  "\\rvert": "close vertical bar",
  "|": "vertical bar",
  "\\uparrow": "up arrow",
  "\\Uparrow": "up arrow",
  "\\downarrow": "down arrow",
  "\\Downarrow": "down arrow",
  "\\updownarrow": "up down arrow",
  "\\leftarrow": "left arrow",
  "\\Leftarrow": "left arrow",
  "\\rightarrow": "right arrow",
  "\\Rightarrow": "right arrow",
  "\\langle": "open angle",
  "\\rangle": "close angle",
  "\\lfloor": "open floor",
  "\\rfloor": "close floor",
  "\\int": "integral",
  "\\intop": "integral",
  "\\lim": "limit",
  "\\ln": "natural log",
  "\\log": "log",
  "\\sin": "sine",
  "\\cos": "cosine",
  "\\tan": "tangent",
  "\\cot": "cotangent",
  "\\sum": "sum",
  "/": "slash",
  ",": "comma",
  ".": "point",
  "-": "negative",
  "+": "plus",
  "~": "tilde",
  ":": "colon",
  "?": "question mark",
  "'": "apostrophe",
  "\\%": "percent",
  " ": "space",
  "\\ ": "space",
  "\\$": "dollar sign",
  "\\angle": "angle",
  "\\degree": "degree",
  "\\circ": "circle",
  "\\vec": "vector",
  "\\triangle": "triangle",
  "\\pi": "pi",
  "\\prime": "prime",
  "\\infty": "infinity",
  "\\alpha": "alpha",
  "\\beta": "beta",
  "\\gamma": "gamma",
  "\\omega": "omega",
  "\\theta": "theta",
  "\\sigma": "sigma",
  "\\lambda": "lambda",
  "\\tau": "tau",
  "\\Delta": "delta",
  "\\delta": "delta",
  "\\mu": "mu",
  "\\rho": "rho",
  "\\nabla": "del",
  "\\ell": "ell",
  "\\ldots": "dots",
  // TODO: add entries for all accents
  "\\hat": "hat",
  "\\acute": "acute"
};
var powerMap = {
  "prime": "prime",
  "degree": "degrees",
  "circle": "degrees",
  "2": "squared",
  "3": "cubed"
};
var openMap = {
  "|": "open vertical bar",
  ".": ""
};
var closeMap = {
  "|": "close vertical bar",
  ".": ""
};
var binMap = {
  "+": "plus",
  "-": "minus",
  "\\pm": "plus minus",
  "\\cdot": "dot",
  "*": "times",
  "/": "divided by",
  "\\times": "times",
  "\\div": "divided by",
  "\\circ": "circle",
  "\\bullet": "bullet"
};
var relMap = {
  "=": "equals",
  "\\approx": "approximately equals",
  "≠": "does not equal",
  "\\geq": "is greater than or equal to",
  "\\ge": "is greater than or equal to",
  "\\leq": "is less than or equal to",
  "\\le": "is less than or equal to",
  ">": "is greater than",
  "<": "is less than",
  "\\leftarrow": "left arrow",
  "\\Leftarrow": "left arrow",
  "\\rightarrow": "right arrow",
  "\\Rightarrow": "right arrow",
  ":": "colon"
};
var accentUnderMap = {
  "\\underleftarrow": "left arrow",
  "\\underrightarrow": "right arrow",
  "\\underleftrightarrow": "left-right arrow",
  "\\undergroup": "group",
  "\\underlinesegment": "line segment",
  "\\utilde": "tilde"
};
var buildString = (str, type, a11yStrings) => {
  if (!str) {
    return;
  }
  var ret;
  if (type === "open") {
    ret = str in openMap ? openMap[str] : stringMap[str] || str;
  } else if (type === "close") {
    ret = str in closeMap ? closeMap[str] : stringMap[str] || str;
  } else if (type === "bin") {
    ret = binMap[str] || str;
  } else if (type === "rel") {
    ret = relMap[str] || str;
  } else {
    ret = stringMap[str] || str;
  }
  // If the text to add is a number and there is already a string
  // in the list and the last string is a number then we should
  // combine them into a single number
  var last = a11yStrings[a11yStrings.length - 1];
  if (/^\d+$/.test(ret) && a11yStrings.length > 0 && typeof last === "string" && /^\d+$/.test(last)) {
    a11yStrings[a11yStrings.length - 1] += ret;
  } else if (ret) {
    a11yStrings.push(ret);
  }
};
var buildRegion = (a11yStrings, callback) => {
  var regionStrings = [];
  a11yStrings.push(regionStrings);
  callback(regionStrings);
};
var handleObject = (tree, a11yStrings, atomType) => {
  // Everything else is assumed to be an object...
  switch (tree.type) {
    case "accent":
      {
        buildRegion(a11yStrings, a11yStrings => {
          _buildA11yStrings(tree.base, a11yStrings, atomType);
          a11yStrings.push("with");
          buildString(tree.label, "normal", a11yStrings);
          a11yStrings.push("on top");
        });
        break;
      }
    case "accentUnder":
      {
        buildRegion(a11yStrings, a11yStrings => {
          _buildA11yStrings(tree.base, a11yStrings, atomType);
          a11yStrings.push("with");
          buildString(accentUnderMap[tree.label], "normal", a11yStrings);
          a11yStrings.push("underneath");
        });
        break;
      }
    case "accent-token":
      {
        // Used internally by accent symbols.
        break;
      }
    case "atom":
      {
        var {
          text
        } = tree;
        switch (tree.family) {
          case "bin":
            {
              buildString(text, "bin", a11yStrings);
              break;
            }
          case "close":
            {
              buildString(text, "close", a11yStrings);
              break;
            }
          // TODO(kevinb): figure out what should be done for inner
          case "inner":
            {
              buildString(tree.text, "inner", a11yStrings);
              break;
            }
          case "open":
            {
              buildString(text, "open", a11yStrings);
              break;
            }
          case "punct":
            {
              buildString(text, "punct", a11yStrings);
              break;
            }
          case "rel":
            {
              buildString(text, "rel", a11yStrings);
              break;
            }
          default:
            {
              tree.family;
              throw new Error("\"" + tree.family + "\" is not a valid atom type");
            }
        }
        break;
      }
    case "color":
      {
        var color = tree.color.replace(/katex-/, "");
        buildRegion(a11yStrings, regionStrings => {
          regionStrings.push("start color " + color);
          _buildA11yStrings(tree.body, regionStrings, atomType);
          regionStrings.push("end color " + color);
        });
        break;
      }
    case "color-token":
      {
        // Used by \color, \colorbox, and \fcolorbox but not directly rendered.
        // It's a leaf node and has no children so just break.
        break;
      }
    case "delimsizing":
      {
        if (tree.delim && tree.delim !== ".") {
          buildString(tree.delim, "normal", a11yStrings);
        }
        break;
      }
    case "genfrac":
      {
        buildRegion(a11yStrings, regionStrings => {
          // genfrac can have unbalanced delimiters
          var {
            leftDelim,
            rightDelim
          } = tree;
          // NOTE: Not sure if this is a safe assumption
          // hasBarLine true -> fraction, false -> binomial
          if (tree.hasBarLine) {
            regionStrings.push("start fraction");
            leftDelim && buildString(leftDelim, "open", regionStrings);
            _buildA11yStrings(tree.numer, regionStrings, atomType);
            regionStrings.push("divided by");
            _buildA11yStrings(tree.denom, regionStrings, atomType);
            rightDelim && buildString(rightDelim, "close", regionStrings);
            regionStrings.push("end fraction");
          } else {
            regionStrings.push("start binomial");
            leftDelim && buildString(leftDelim, "open", regionStrings);
            _buildA11yStrings(tree.numer, regionStrings, atomType);
            regionStrings.push("over");
            _buildA11yStrings(tree.denom, regionStrings, atomType);
            rightDelim && buildString(rightDelim, "close", regionStrings);
            regionStrings.push("end binomial");
          }
        });
        break;
      }
    case "hbox":
      {
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "kern":
      {
        // No op: we don't attempt to present kerning information
        // to the screen reader.
        break;
      }
    case "leftright":
      {
        buildRegion(a11yStrings, regionStrings => {
          buildString(tree.left, "open", regionStrings);
          _buildA11yStrings(tree.body, regionStrings, atomType);
          buildString(tree.right, "close", regionStrings);
        });
        break;
      }
    case "leftright-right":
      {
        // TODO: double check that this is a no-op
        break;
      }
    case "lap":
      {
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "mathord":
      {
        buildString(tree.text, "normal", a11yStrings);
        break;
      }
    case "op":
      {
        var {
          body,
          name
        } = tree;
        if (body) {
          _buildA11yStrings(body, a11yStrings, atomType);
        } else if (name) {
          buildString(name, "normal", a11yStrings);
        }
        break;
      }
    case "op-token":
      {
        // Used internally by operator symbols.
        buildString(tree.text, atomType, a11yStrings);
        break;
      }
    case "ordgroup":
      {
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "overline":
      {
        buildRegion(a11yStrings, function (a11yStrings) {
          a11yStrings.push("start overline");
          _buildA11yStrings(tree.body, a11yStrings, atomType);
          a11yStrings.push("end overline");
        });
        break;
      }
    case "pmb":
      {
        a11yStrings.push("bold");
        break;
      }
    case "phantom":
      {
        a11yStrings.push("empty space");
        break;
      }
    case "raisebox":
      {
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "rule":
      {
        a11yStrings.push("rectangle");
        break;
      }
    case "sizing":
      {
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "spacing":
      {
        a11yStrings.push("space");
        break;
      }
    case "styling":
      {
        // We ignore the styling and just pass through the contents
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "sqrt":
      {
        buildRegion(a11yStrings, regionStrings => {
          var {
            body,
            index
          } = tree;
          if (index) {
            var indexString = _flatten(_buildA11yStrings(index, [], atomType)).join(",");
            if (indexString === "3") {
              regionStrings.push("cube root of");
              _buildA11yStrings(body, regionStrings, atomType);
              regionStrings.push("end cube root");
              return;
            }
            regionStrings.push("root");
            regionStrings.push("start index");
            _buildA11yStrings(index, regionStrings, atomType);
            regionStrings.push("end index");
            return;
          }
          regionStrings.push("square root of");
          _buildA11yStrings(body, regionStrings, atomType);
          regionStrings.push("end square root");
        });
        break;
      }
    case "supsub":
      {
        var {
          base,
          sub,
          sup
        } = tree;
        var isLog = false;
        if (base) {
          _buildA11yStrings(base, a11yStrings, atomType);
          isLog = base.type === "op" && base.name === "\\log";
        }
        if (sub) {
          var regionName = isLog ? "base" : "subscript";
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start " + regionName);
            _buildA11yStrings(sub, regionStrings, atomType);
            regionStrings.push("end " + regionName);
          });
        }
        if (sup) {
          buildRegion(a11yStrings, function (regionStrings) {
            var supString = _flatten(_buildA11yStrings(sup, [], atomType)).join(",");
            if (supString in powerMap) {
              regionStrings.push(powerMap[supString]);
              return;
            }
            regionStrings.push("start superscript");
            _buildA11yStrings(sup, regionStrings, atomType);
            regionStrings.push("end superscript");
          });
        }
        break;
      }
    case "text":
      {
        // TODO: handle other fonts
        if (tree.font === "\\textbf") {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start bold text");
            _buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end bold text");
          });
          break;
        }
        buildRegion(a11yStrings, function (regionStrings) {
          regionStrings.push("start text");
          _buildA11yStrings(tree.body, regionStrings, atomType);
          regionStrings.push("end text");
        });
        break;
      }
    case "textord":
      {
        buildString(tree.text, atomType, a11yStrings);
        break;
      }
    case "smash":
      {
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "enclose":
      {
        // TODO: create a map for these.
        // TODO: differentiate between a body with a single atom, e.g.
        // "cancel a" instead of "start cancel, a, end cancel"
        if (/cancel/.test(tree.label)) {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start cancel");
            _buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end cancel");
          });
          break;
        } else if (/box/.test(tree.label)) {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start box");
            _buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end box");
          });
          break;
        } else if (/sout/.test(tree.label)) {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start strikeout");
            _buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end strikeout");
          });
          break;
        } else if (/phase/.test(tree.label)) {
          buildRegion(a11yStrings, function (regionStrings) {
            regionStrings.push("start phase angle");
            _buildA11yStrings(tree.body, regionStrings, atomType);
            regionStrings.push("end phase angle");
          });
          break;
        }
        throw new Error("KaTeX-a11y: enclose node with " + tree.label + " not supported yet");
      }
    case "vcenter":
      {
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "vphantom":
      {
        throw new Error("KaTeX-a11y: vphantom not implemented yet");
      }
    case "operatorname":
      {
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "array":
      {
        throw new Error("KaTeX-a11y: array not implemented yet");
      }
    case "raw":
      {
        throw new Error("KaTeX-a11y: raw not implemented yet");
      }
    case "size":
      {
        // Although there are nodes of type "size" in the parse tree, they have
        // no semantic meaning and should be ignored.
        break;
      }
    case "url":
      {
        throw new Error("KaTeX-a11y: url not implemented yet");
      }
    case "tag":
      {
        throw new Error("KaTeX-a11y: tag not implemented yet");
      }
    case "verb":
      {
        buildString("start verbatim", "normal", a11yStrings);
        buildString(tree.body, "normal", a11yStrings);
        buildString("end verbatim", "normal", a11yStrings);
        break;
      }
    case "environment":
      {
        throw new Error("KaTeX-a11y: environment not implemented yet");
      }
    case "horizBrace":
      {
        buildString("start " + tree.label.slice(1), "normal", a11yStrings);
        _buildA11yStrings(tree.base, a11yStrings, atomType);
        buildString("end " + tree.label.slice(1), "normal", a11yStrings);
        break;
      }
    case "infix":
      {
        // All infix nodes are replace with other nodes.
        break;
      }
    case "includegraphics":
      {
        throw new Error("KaTeX-a11y: includegraphics not implemented yet");
      }
    case "font":
      {
        // TODO: callout the start/end of specific fonts
        // TODO: map \BBb{N} to "the naturals" or something like that
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    case "href":
      {
        throw new Error("KaTeX-a11y: href not implemented yet");
      }
    case "cr":
      {
        // This is used by environments.
        throw new Error("KaTeX-a11y: cr not implemented yet");
      }
    case "underline":
      {
        buildRegion(a11yStrings, function (a11yStrings) {
          a11yStrings.push("start underline");
          _buildA11yStrings(tree.body, a11yStrings, atomType);
          a11yStrings.push("end underline");
        });
        break;
      }
    case "xArrow":
      {
        throw new Error("KaTeX-a11y: xArrow not implemented yet");
      }
    case "cdlabel":
      {
        throw new Error("KaTeX-a11y: cdlabel not implemented yet");
      }
    case "cdlabelparent":
      {
        throw new Error("KaTeX-a11y: cdlabelparent not implemented yet");
      }
    case "mclass":
      {
        // \neq and \ne are macros so we let "htmlmathml" render the mathmal
        // side of things and extract the text from that.
        var _atomType = tree.mclass.slice(1);
        // TODO(ts): drop the leading "m" from the values in mclass
        _buildA11yStrings(tree.body, a11yStrings, _atomType);
        break;
      }
    case "mathchoice":
      {
        // TODO: track which style we're using, e.g. display, text, etc.
        // default to text style if even that may not be the correct style
        _buildA11yStrings(tree.text, a11yStrings, atomType);
        break;
      }
    case "htmlmathml":
      {
        _buildA11yStrings(tree.mathml, a11yStrings, atomType);
        break;
      }
    case "middle":
      {
        buildString(tree.delim, atomType, a11yStrings);
        break;
      }
    case "internal":
      {
        // internal nodes are never included in the parse tree
        break;
      }
    case "html":
      {
        _buildA11yStrings(tree.body, a11yStrings, atomType);
        break;
      }
    default:
      throw new Error("KaTeX a11y un-recognized type: " + tree.type);
  }
};
var _buildA11yStrings = function buildA11yStrings(tree, a11yStrings, atomType) {
  if (a11yStrings === void 0) {
    a11yStrings = [];
  }
  if (tree instanceof Array) {
    for (var i = 0; i < tree.length; i++) {
      _buildA11yStrings(tree[i], a11yStrings, atomType);
    }
  } else {
    handleObject(tree, a11yStrings, atomType);
  }
  return a11yStrings;
};
var _flatten = function flatten(array) {
  var result = [];
  array.forEach(function (item) {
    if (Array.isArray(item)) {
      result = result.concat(_flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};
var renderA11yString = function renderA11yString(text, settings) {
  var tree = katex.__parse(text, settings);
  var a11yStrings = _buildA11yStrings(tree, [], "normal");
  return _flatten(a11yStrings).join(", ");
};

export { renderA11yString as default };
