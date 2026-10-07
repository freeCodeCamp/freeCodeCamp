const WarnSettings = function () {
  /** @type {WeakMap<object, Set<string>>} */
  const warnedSettings = new WeakMap();

  return {
    /**
     * Warn only once for each context and setting
     * @param {{}} context
     * @param {string} setting
     * @returns {boolean}
     */
    hasBeenWarned (context, setting) {
      return warnedSettings.has(context) && /** @type {Set<string>} */ (
        warnedSettings.get(context)
      ).has(setting);
    },

    /**
     * @param {{}} context
     * @param {string} setting
     * @returns {void}
     */
    markSettingAsWarned (context, setting) {
      // c8 ignore else
      if (!warnedSettings.has(context)) {
        warnedSettings.set(context, new Set());
      }

      /** @type {Set<string>} */ (warnedSettings.get(context)).add(setting);
    },
  };
};

export default WarnSettings;
