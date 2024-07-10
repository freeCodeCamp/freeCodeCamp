// Allows error stack traces to be readable if available
if (process.env.NODE_ENV === undefined) {
  try {
    require('source-map-support').install();
  } catch {
    // ignore
  }
}

require('./dist/src/generator.js');
