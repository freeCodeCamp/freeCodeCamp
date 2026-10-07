Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function parseSampleRate(sampleRate) {
  if (typeof sampleRate === "boolean") {
    return Number(sampleRate);
  }
  const rate = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
  if (typeof rate !== "number" || isNaN(rate) || rate < 0 || rate > 1) {
    return void 0;
  }
  return rate;
}

exports.parseSampleRate = parseSampleRate;
//# sourceMappingURL=parseSampleRate.js.map
