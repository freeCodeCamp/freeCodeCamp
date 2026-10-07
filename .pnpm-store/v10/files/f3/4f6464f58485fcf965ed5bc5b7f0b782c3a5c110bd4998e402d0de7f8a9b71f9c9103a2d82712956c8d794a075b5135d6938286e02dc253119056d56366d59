/* eslint-env worker */
/* eslint no-var: off, strict: off */

const parsersLoaded = {};

const loadParser = parser => {
  if (!parsersLoaded[parser]) {
    if (parser === "vue") {
      loadParser("typescript");
      loadParser("babylon");
      loadParser("postcss");
    }

    importScripts("/static/js/prettier/1.13.0/parser-" + parser + ".js");
    parsersLoaded[parser] = true;
  }
};

importScripts("/static/js/prettier/1.13.0/standalone.js");
if (typeof prettier === "undefined") {
  prettier = module.exports; // eslint-disable-line
}
if (typeof prettier === "undefined") {
  prettier = index; // eslint-disable-line
}

function formatCode(text, options) {
  try {
    const useCursorOffset = options.cursorOffset !== undefined;

    if (useCursorOffset) {
      return self.prettier.formatWithCursor(text, options);
    }

    const formatted = self.prettier.format(text, options);
    return { formatted };
  } catch (e) {
    if (e.constructor && e.constructor.name === "SyntaxError") {
      // Likely something wrong with the user's code
      throw e;
    }
    // Likely a bug in Prettier
    // Provide the whole stack for debugging
    throw e;
  }
}

self.onmessage = message => {
  var options = message.data.options || {};
  options.parser = options.parser || "babylon";

  loadParser(options.parser);

  let result;
  options.plugins = self.prettierPlugins;
  try {
    result = formatCode(message.data.text, options);
  } catch (e) {
    console.error(e);
    self.postMessage({ error: e.message, text: message.data.text });
    return;
  }
  var doc;
  var ast;

  if (message.data.ast) {
    try {
      ast = JSON.stringify(
        prettier.__debug.parse(message.data.text, options),
        null,
        2
      );
    } catch (e) {
      ast = e.toString();
    }
  }

  if (message.data.doc) {
    lazyLoadParser("babylon");
    try {
      doc = prettier.__debug.formatDoc(
        prettier.__debug.printToDoc(message.data.text, options),
        { parser: "babylon" }
      );
    } catch (e) {
      doc = e.toString();
    }
  }

  self.postMessage({
    result,
    text: message.data.text,
    doc: doc,
    ast: ast
  });
};
