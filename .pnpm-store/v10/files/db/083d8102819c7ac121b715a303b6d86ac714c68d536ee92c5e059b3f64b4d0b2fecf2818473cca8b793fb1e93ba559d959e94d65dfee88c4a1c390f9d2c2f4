define("vs/nls.messages-loader", ["exports"], (function(exports) {
  "use strict";
  function load(name, req, load2, config) {
    const requestedLanguage = config["vs/nls"]?.availableLanguages?.["*"];
    if (!requestedLanguage || requestedLanguage === "en") {
      load2({});
    } else {
      req([`vs/nls.messages.${requestedLanguage}`], () => {
        load2({});
      });
    }
  }
  exports.load = load;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
}));
