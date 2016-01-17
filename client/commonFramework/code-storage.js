// depends on: codeUri
window.common = (function(global) {
  const {
    localStorage,
    common = { init: [] }
  } = global;

  var challengePrefix = [
    'Bonfire: ',
    'Waypoint: ',
    'Zipline: ',
    'Basejump: ',
    'Checkpoint: '],
  item;

  var codeStorage = {
    getStoredValue(key) {
      if (
        !localStorage ||
        typeof localStorage.getItem !== 'function' ||
        !key ||
        typeof key !== 'string'
      ) {
        console.log('unable to read from storage');
        return '';
      }
      if (localStorage.getItem(key + 'Val')) {
        return '' + localStorage.getItem(key + 'Val');
      } else {
        for (var i = 0; i <= challengePrefix.length; i++) {
          item = localStorage.getItem(challengePrefix[i] + key + 'Val');
          if (item) {
            return '' + item;
          }
        }
      }
    },

    isAlive: function(key) {
      var val = this.getStoredValue(key);
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
