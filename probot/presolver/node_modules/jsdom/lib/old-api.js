"use strict";
/* eslint-disable no-unused-expressions */
() => `jsdom 7.x onward only works on Node.js 4 or newer: https://github.com/tmpvar/jsdom#install`;
/* eslint-enable no-unused-expressions */

const fs = require("fs");
const path = require("path");
const { CookieJar } = require("tough-cookie");
const MIMEType = require("whatwg-mimetype");

const { toFileUrl } = require("./jsdom/utils");
const documentFeatures = require("./jsdom/browser/documentfeatures");
const { domToHtml } = require("./jsdom/browser/domtohtml");
const Window = require("./jsdom/browser/Window");
const resourceLoader = require("./jsdom/browser/resource-loader");
const VirtualConsole = require("./jsdom/virtual-console");
const idlUtils = require("./jsdom/living/generated/utils");
const Blob = require("./jsdom/living/generated/Blob");

const whatwgURL = require("whatwg-url");

require("./jsdom/living"); // Enable living standard features

/* eslint-disable no-restricted-modules */
// TODO: stop using the built-in URL in favor of the spec-compliant whatwg-url package
// This legacy usage is in the process of being purged.
const URL = require("url");
/* eslint-enable no-restricted-modules */

const canReadFilesFromFS = Boolean(fs.readFile); // in a browserify environment, this isn't present

exports.createVirtualConsole = function (options) {
  return new VirtualConsole(options);
};

exports.getVirtualConsole = function (window) {
  return window._virtualConsole;
};

exports.createCookieJar = function () {
  return new CookieJar(null, { looseMode: true });
};

exports.nodeLocation = function (node) {
  return idlUtils.implForWrapper(node).__location;
};

exports.reconfigureWindow = function (window, newProps) {
  if ("top" in newProps) {
    window._top = newProps.top;
  }
};

exports.changeURL = function (window, urlString) {
  const doc = idlUtils.implForWrapper(window._document);

  const url = whatwgURL.parseURL(urlString);

  if (url === null) {
    throw new TypeError(`Could not parse "${urlString}" as a URL`);
  }

  doc._URL = url;
  doc.origin = whatwgURL.serializeURLOrigin(doc._URL);
};

// Proxy to features module
Object.defineProperty(exports, "defaultDocumentFeatures", {
  enumerable: true,
  configurable: true,
  get() {
    return documentFeatures.defaultDocumentFeatures;
  },
  set(v) {
    documentFeatures.defaultDocumentFeatures = v;
  }
});

exports.jsdom = function (html, options) {
  if (options === undefined) {
    options = {};
  }
  if (options.parsingMode === undefined || options.parsingMode === "auto") {
    options.parsingMode = "html";
  }

  if (options.parsingMode !== "html" && options.parsingMode !== "xml") {
    throw new RangeError(`Invalid parsingMode option ${JSON.stringify(options.parsingMode)}; must be either "html", ` +
      `"xml", "auto", or undefined`);
  }

  options.encoding = options.encoding || "UTF-8";

  setGlobalDefaultConfig(options);

  // Back-compat hack: we have previously suggested nesting these under document, for jsdom.env at least.
  // So we need to support that.
  if (options.document) {
    if (options.document.cookie !== undefined) {
      options.cookie = options.document.cookie;
    }
    if (options.document.referrer !== undefined) {
      options.referrer = options.document.referrer;
    }
  }

  // Adapt old API `features: { ProcessExternalResources: ["script"] }` to the runScripts option.
  // This is part of a larger effort to eventually remove the document features infrastructure entirely. It's unclear
  // whether we'll kill the old API or document features first, but as long as old API survives, attempts to kill
  // document features will need this kind of adapter.
  if (!options.features) {
    options.features = exports.defaultDocumentFeatures;
  }
  if (options.features.ProcessExternalResources === undefined) {
    options.features.ProcessExternalResources = ["script"];
  }
  const ProcessExternalResources = options.features.ProcessExternalResources || [];
  if (ProcessExternalResources === "script" ||
      (ProcessExternalResources.includes && ProcessExternalResources.includes("script"))) {
    options.runScripts = "dangerously";
  }

  if (options.pretendToBeVisual !== undefined) {
    options.pretendToBeVisual = Boolean(options.pretendToBeVisual);
  } else {
    options.pretendToBeVisual = false;
  }

  options.storageQuota = options.storageQuota || 5000000;

  // List options explicitly to be clear which are passed through
  const window = new Window({
    parsingMode: options.parsingMode,
    parseOptions: options.parseOptions,
    contentType: options.contentType,
    encoding: options.encoding,
    url: options.url,
    lastModified: options.lastModified,
    referrer: options.referrer,
    cookieJar: options.cookieJar,
    cookie: options.cookie,
    resourceLoader: options.resourceLoader,
    deferClose: options.deferClose,
    concurrentNodeIterators: options.concurrentNodeIterators,
    virtualConsole: options.virtualConsole,
    pool: options.pool,
    agent: options.agent,
    agentClass: options.agentClass,
    agentOptions: options.agentOptions,
    strictSSL: options.strictSSL,
    proxy: options.proxy,
    userAgent: options.userAgent,
    runScripts: options.runScripts,
    pretendToBeVisual: options.pretendToBeVisual,
    storageQuota: options.storageQuota
  });

  const documentImpl = idlUtils.implForWrapper(window.document);
  documentFeatures.applyDocumentFeatures(documentImpl, options.features);

  if (options.created) {
    options.created(null, window.document.defaultView);
  }

  if (options.parsingMode === "html") {
    if (html === undefined || html === "") {
      html = "<html><head></head><body></body></html>";
    }

    window.document.write(html);
  } else if (options.parsingMode === "xml") {
    if (html !== undefined) {
      documentImpl._htmlToDom.appendToDocument(html, documentImpl);
    }
  }

  if (window.document.close && !options.deferClose) {
    window.document.close();
  }

  return window.document;
};

exports.jQueryify = exports.jsdom.jQueryify = function (window, jqueryUrl, callback) {
  if (!window || !window.document) {
    return;
  }

  const implImpl = idlUtils.implForWrapper(window.document.implementation);
  const oldFeatures = implImpl._features;
  const oldRunScripts = window._runScripts;

  implImpl._addFeature("FetchExternalResources", ["script"]);
  documentFeatures.contextifyWindow(idlUtils.implForWrapper(window.document)._global);
  window._runScripts = "dangerously";

  const scriptEl = window.document.createElement("script");
  scriptEl.className = "jsdom";
  scriptEl.src = jqueryUrl;
  scriptEl.onload = scriptEl.onerror = () => {
    implImpl._features = oldFeatures;
    window._runScripts = oldRunScripts;
    // Can't un-contextify the window. Oh well. That's what we get for such magic behavior in old API.

    if (callback) {
      callback(window, window.jQuery);
    }
  };

  window.document.body.appendChild(scriptEl);
};

exports.env = exports.jsdom.env = function () {
  const config = getConfigFromEnvArguments(arguments);
  let req = null;

  if (config.file && canReadFilesFromFS) {
    req = resourceLoader.readFile(
      config.file,
      { defaultEncoding: config.defaultEncoding, detectMetaCharset: true },
      (err, text, res) => {
        if (err) {
          reportInitError(err, config);
          return;
        }

        const contentType = new MIMEType(res.headers["content-type"]);
        config.encoding = contentType.parameters.get("charset");
        setParsingModeFromExtension(config, config.file);

        config.html = text;
        processHTML(config);
      }
    );
  } else if (config.html !== undefined) {
    processHTML(config);
  } else if (config.url) {
    req = handleUrl(config);
  } else if (config.somethingToAutodetect !== undefined) {
    const url = URL.parse(config.somethingToAutodetect);
    if (url.protocol && url.hostname) {
      config.url = config.somethingToAutodetect;
      req = handleUrl(config.somethingToAutodetect);
    } else if (canReadFilesFromFS) {
      try {
        req = resourceLoader.readFile(
          config.somethingToAutodetect,
          { defaultEncoding: config.defaultEncoding, detectMetaCharset: true },
          (err, text, res) => {
            if (err) {
              if (err.code === "ENOENT" || err.code === "ENAMETOOLONG" || err.code === "ERR_INVALID_ARG_TYPE") {
                config.html = config.somethingToAutodetect;
                processHTML(config);
              } else {
                reportInitError(err, config);
              }
            } else {
              const contentType = new MIMEType(res.headers["content-type"]);
              config.encoding = contentType.parameters.get("charset");
              setParsingModeFromExtension(config, config.somethingToAutodetect);

              config.html = text;
              config.url = toFileUrl(config.somethingToAutodetect);
              processHTML(config);
            }
          }
        );
      } catch (err) {
        config.html = config.somethingToAutodetect;
        processHTML(config);
      }
    } else {
      config.html = config.somethingToAutodetect;
      processHTML(config);
    }
  }

  function handleUrl() {
    config.cookieJar = config.cookieJar || exports.createCookieJar();

    const options = {
      defaultEncoding: config.defaultEncoding,
      detectMetaCharset: true,
      headers: config.headers,
      pool: config.pool,
      strictSSL: config.strictSSL,
      proxy: config.proxy,
      cookieJar: config.cookieJar,
      userAgent: config.userAgent,
      agent: config.agent,
      agentClass: config.agentClass,
      agentOptions: config.agentOptions
    };

    const { fragment } = whatwgURL.parseURL(config.url);

    return resourceLoader.download(config.url, options, (err, responseText, res) => {
      if (err) {
        reportInitError(err, config);
        return;
      }

      // The use of `res.request.uri.href` ensures that `window.location.href`
      // is updated when `request` follows redirects.
      config.html = responseText;
      config.url = res.request.uri.href;
      if (fragment) {
        config.url += `#${fragment}`;
      }

      if (res.headers["last-modified"]) {
        config.lastModified = new Date(res.headers["last-modified"]);
      }

      const contentType = new MIMEType(res.headers["content-type"]);
      if (config.parsingMode === "auto") {
        if (contentType.isXML()) {
          config.parsingMode = "xml";
        }
      }
      config.contentType = contentType.essence;
      config.encoding = contentType.parameters.get("charset");

      processHTML(config);
    });
  }
  return req;
};

exports.serializeDocument = function (doc) {
  return domToHtml([idlUtils.implForWrapper(doc)]);
};

exports.blobToBuffer = function (blob) {
  return (Blob.is(blob) && idlUtils.implForWrapper(blob)._buffer) || undefined;
};

exports.evalVMScript = (window, script) => {
  return script.runInContext(idlUtils.implForWrapper(window._document)._global);
};

function processHTML(config) {
  const window = exports.jsdom(config.html, config).defaultView;
  const implImpl = idlUtils.implForWrapper(window.document.implementation);
  const features = JSON.parse(JSON.stringify(implImpl._features));

  let docsLoaded = 0;
  const totalDocs = config.scripts.length + config.src.length;

  if (!window || !window.document) {
    reportInitError(new Error("JSDOM: a window object could not be created."), config);
    return;
  }

  function scriptComplete() {
    docsLoaded++;

    if (docsLoaded >= totalDocs) {
      implImpl._features = features;

      process.nextTick(() => {
        if (config.onload) {
          config.onload(window);
        }
        if (config.done) {
          config.done(null, window);
        }
      });
    }
  }

  function handleScriptError() {
    // nextTick so that an exception within scriptComplete won't cause
    // another script onerror (which would be an infinite loop)
    process.nextTick(scriptComplete);
  }

  if (config.scripts.length > 0 || config.src.length > 0) {
    implImpl._addFeature("FetchExternalResources", ["script"]);

    for (const scriptSrc of config.scripts) {
      const script = window.document.createElement("script");
      script.className = "jsdom";
      script.onload = scriptComplete;
      script.onerror = handleScriptError;
      script.src = scriptSrc;

      window.document.body.appendChild(script);
    }

    for (const scriptText of config.src) {
      const script = window.document.createElement("script");
      script.onload = scriptComplete;
      script.onerror = handleScriptError;
      script.text = scriptText;

      window.document.documentElement.appendChild(script);
      window.document.documentElement.removeChild(script);
    }
  } else if (window.document.readyState === "complete") {
    scriptComplete();
  } else {
    window.addEventListener("load", scriptComplete);
  }
}

function setGlobalDefaultConfig(config) {
  config.parseOptions = { locationInfo: true };

  config.pool = config.pool !== undefined ? config.pool : { maxSockets: 6 };

  config.agentOptions = config.agentOptions !== undefined ?
                        config.agentOptions :
                        { keepAlive: true, keepAliveMsecs: 115 * 1000 };

  config.strictSSL = config.strictSSL !== undefined ? config.strictSSL : true;

  config.userAgent = config.userAgent ||
    `Node.js (${process.platform}; U; rv:${process.version}) AppleWebKit/537.36 (KHTML, like Gecko)`;
}

function getConfigFromEnvArguments(args) {
  const config = {};
  if (typeof args[0] === "object") {
    Object.assign(config, args[0]);
  } else {
    for (const arg of args) {
      switch (typeof arg) {
        case "string":
          config.somethingToAutodetect = arg;
          break;
        case "function":
          config.done = arg;
          break;
        case "object":
          if (Array.isArray(arg)) {
            config.scripts = arg;
          } else {
            Object.assign(config, arg);
          }
          break;
      }
    }
  }

  if (!config.done && !config.created && !config.onload) {
    throw new Error("Must pass a \"created\", \"onload\", or \"done\" option, or a callback, to jsdom.env");
  }

  if (config.somethingToAutodetect === undefined &&
      config.html === undefined && !config.file && !config.url) {
    throw new Error("Must pass a \"html\", \"file\", or \"url\" option, or a string, to jsdom.env");
  }

  config.scripts = ensureArray(config.scripts);
  config.src = ensureArray(config.src);
  config.parsingMode = config.parsingMode || "auto";

  config.features = config.features || {
    FetchExternalResources: false,
    SkipExternalResources: false,
    ProcessExternalResources: false // needed since we'll process it inside jsdom.jsdom()
  };

  if (!config.url && config.file) {
    config.url = toFileUrl(config.file);
  }

  config.defaultEncoding = config.defaultEncoding || "windows-1252";

  setGlobalDefaultConfig(config);

  if (config.scripts.length > 0 || config.src.length > 0) {
    config.features.ProcessExternalResources = ["script"];
  }
  return config;
}

function reportInitError(err, config) {
  if (config.created) {
    config.created(err);
  }
  if (config.done) {
    config.done(err);
  }
}

function ensureArray(value) {
  let array = value || [];
  if (typeof array === "string") {
    array = [array];
  }
  return array;
}

function setParsingModeFromExtension(config, filename) {
  if (config.parsingMode === "auto") {
    const ext = path.extname(filename);
    if (ext === ".xhtml" || ext === ".xml") {
      config.parsingMode = "xml";
    }
  }
}
