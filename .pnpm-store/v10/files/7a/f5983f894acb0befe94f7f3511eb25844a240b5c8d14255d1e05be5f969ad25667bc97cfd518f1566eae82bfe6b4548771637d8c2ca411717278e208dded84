"use strict"

var Buffer = require("safer-buffer").Buffer

var bomHandling = require("./bom-handling")
var mergeModules = require("./helpers/merge-exports")

// All codecs and aliases are kept here, keyed by encoding name/alias.
// They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.
// Cannot initialize with { __proto__: null } because Boolean({ __proto__: null }) === true
module.exports.encodings = null

// Characters emitted in case of error.
module.exports.defaultCharUnicode = "�"
module.exports.defaultCharSingleByte = "?"

// Public API.
module.exports.encode = function encode (str, encoding, options) {
  str = "" + (str || "") // Ensure string.

  var encoder = module.exports.getEncoder(encoding, options)

  var res = encoder.write(str)
  var trail = encoder.end()

  return (trail && trail.length > 0) ? Buffer.concat([res, trail]) : res
}

module.exports.decode = function decode (buf, encoding, options) {
  if (typeof buf === "string") {
    if (!module.exports.skipDecodeWarning) {
      console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding")
      module.exports.skipDecodeWarning = true
    }

    buf = Buffer.from("" + (buf || ""), "binary") // Ensure buffer.
  }

  var decoder = module.exports.getDecoder(encoding, options)

  var res = decoder.write(buf)
  var trail = decoder.end()

  return trail ? (res + trail) : res
}

module.exports.encodingExists = function encodingExists (enc) {
  try {
    module.exports.getCodec(enc)
    return true
  } catch (e) {
    return false
  }
}

// Legacy aliases to convert functions
module.exports.toEncoding = module.exports.encode
module.exports.fromEncoding = module.exports.decode

// Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.
module.exports._codecDataCache = { __proto__: null }

module.exports.getCodec = function getCodec (encoding) {
  if (!module.exports.encodings) {
    var raw = require("../encodings")
    // TODO: In future versions when old nodejs support is removed can use object.assign
    module.exports.encodings = { __proto__: null } // Initialize as empty object.
    mergeModules(module.exports.encodings, raw)
  }

  // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
  var enc = module.exports._canonicalizeEncoding(encoding)

  // Traverse iconv.encodings to find actual codec.
  var codecOptions = {}
  while (true) {
    var codec = module.exports._codecDataCache[enc]

    if (codec) { return codec }

    var codecDef = module.exports.encodings[enc]

    switch (typeof codecDef) {
      case "string": // Direct alias to other encoding.
        enc = codecDef
        break

      case "object": // Alias with options. Can be layered.
        for (var key in codecDef) { codecOptions[key] = codecDef[key] }

        if (!codecOptions.encodingName) { codecOptions.encodingName = enc }

        enc = codecDef.type
        break

      case "function": // Codec itself.
        if (!codecOptions.encodingName) { codecOptions.encodingName = enc }

        // The codec function must load all tables and return object with .encoder and .decoder methods.
        // It'll be called only once (for each different options object).
        //
        codec = new codecDef(codecOptions, module.exports)

        module.exports._codecDataCache[codecOptions.encodingName] = codec // Save it to be reused later.
        return codec

      default:
        throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '" + enc + "')")
    }
  }
}

module.exports._canonicalizeEncoding = function (encoding) {
  // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
  return ("" + encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "")
}

module.exports.getEncoder = function getEncoder (encoding, options) {
  var codec = module.exports.getCodec(encoding)
  var encoder = new codec.encoder(options, codec)

  if (codec.bomAware && options && options.addBOM) { encoder = new bomHandling.PrependBOM(encoder, options) }

  return encoder
}

module.exports.getDecoder = function getDecoder (encoding, options) {
  var codec = module.exports.getCodec(encoding)
  var decoder = new codec.decoder(options, codec)

  if (codec.bomAware && !(options && options.stripBOM === false)) { decoder = new bomHandling.StripBOM(decoder, options) }

  return decoder
}

// Streaming API
// NOTE: Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add
// up to 100Kb to the output bundle. To avoid unnecessary code bloat, we don't enable Streaming API in browser by default.
// If you would like to enable it explicitly, please add the following code to your app:
// > iconv.enableStreamingAPI(require('stream'));
module.exports.enableStreamingAPI = function enableStreamingAPI (streamModule) {
  if (module.exports.supportsStreams) { return }

  // Dependency-inject stream module to create IconvLite stream classes.
  var streams = require("./streams")(streamModule)

  // Not public API yet, but expose the stream classes.
  module.exports.IconvLiteEncoderStream = streams.IconvLiteEncoderStream
  module.exports.IconvLiteDecoderStream = streams.IconvLiteDecoderStream

  // Streaming API.
  module.exports.encodeStream = function encodeStream (encoding, options) {
    return new module.exports.IconvLiteEncoderStream(module.exports.getEncoder(encoding, options), options)
  }

  module.exports.decodeStream = function decodeStream (encoding, options) {
    return new module.exports.IconvLiteDecoderStream(module.exports.getDecoder(encoding, options), options)
  }

  module.exports.supportsStreams = true
}

// Enable Streaming API automatically if 'stream' module is available and non-empty (the majority of environments).
var streamModule
try {
  streamModule = require("stream")
} catch (e) {}

if (streamModule && streamModule.Transform) {
  module.exports.enableStreamingAPI(streamModule)
} else {
  // In rare cases where 'stream' module is not available by default, throw a helpful exception.
  module.exports.encodeStream = module.exports.decodeStream = function () {
    throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.")
  }
}

// Some environments, such as browsers, may not load JavaScript files as UTF-8
// eslint-disable-next-line no-constant-condition
if ("Ā" !== "\u0100") {
  console.error("iconv-lite warning: js files use non-utf8 encoding. See https://github.com/ashtuchkin/iconv-lite/wiki/Javascript-source-file-encodings for more info.")
}
