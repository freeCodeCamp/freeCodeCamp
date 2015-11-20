// depends on: codeUri
window.common = (function(global) {
  const {
    localStorage,
    common = { init: [] }
  } = global;

  var codeStorage = {
    getStoredValue(key) {
      if (
        !localStorage ||
        typeof localStorage.getItem !== 'function' ||
        !key ||
        typeof key !== 'string'
      ) {
        console.log('unable to save to storage');
        return '';
      }
      return '' + localStorage.getItem(key + 'Val');
    },

    isAlive: function() {
      var val = this.getStoredValue();
      return val !== 'null' &&
        val !== 'undefined' &&
        (val && val.length > 0);
    },

    updateStorage(key, code) {
      if (
        !localStorage ||
        typeof localStorage.setItem !== 'function' ||
        !key ||
        typeof key !== 'string'
      ) {
        console.log('unable to save to storage');
        return code;
      }
      localStorage.setItem(key + 'Val', code);
      return code;
    }
  };

  common.codeStorage = codeStorage;

  return common;
}(window, window.common));
