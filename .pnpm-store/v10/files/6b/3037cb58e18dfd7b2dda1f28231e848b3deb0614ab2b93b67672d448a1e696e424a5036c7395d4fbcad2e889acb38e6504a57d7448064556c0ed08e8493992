function normalizer(config) {
  if (typeof config === 'string') {
    return { module: config };
  }
  return config;
}

module.exports = function(config) {
  if (Array.isArray(config)) {
    return config.map(normalizer);
  }
  return normalizer(config);
};
