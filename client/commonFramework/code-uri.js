// store code in the URL
window.common = (function(global) {
  const {
    encodeURIComponent: encode,
    decodeURIComponent: decode,
    location,
    history,
    common = { init: [] }
  } = global;

  const {
    replaceScriptTags,
    replaceSafeTags,
    replaceFormActionAttr,
    replaceFccfaaAttr
  } = common;

  function encodeFcc(val) {
    return replaceScriptTags(replaceFormActionAttr(val));
  }

  function decodeFcc(val) {
    return replaceSafeTags(replaceFccfaaAttr(val));
  }

  var codeUri = {
    encode: function(code) {
      return encode(code);
    },
    decode: function(code) {
      try {
        return decode(code);
      } catch (ignore) {
        return null;
      }
    },
    isInQuery: function(query) {
      var decoded = codeUri.decode(query);
      if (!decoded || typeof decoded.split !== 'function') {
        return false;
      }
      return decoded
        .split('?')
        .splice(1)
        .pop()
        .split('&')
        .reduce(function(found, param) {
          var key = param.split('=')[0];
          if (key === 'solution') {
            return true;
          }
          return found;
        }, false);
    },
    isAlive: function() {
      return codeUri.enabled &&
        codeUri.isInQuery(location.search) ||
        codeUri.isInQuery(location.hash);
    },
    getKeyInQuery(query, keyToFind = '') {
      return query
        .split('&')
        .reduce(function(oldValue, param) {
          var key = param.split('=')[0];
          var value = param.split('=')[1];
          if (key === keyToFind) {
            return value;
          }
          return oldValue;
        }, null);
    },
    getSolutionFromQuery(query = '') {
      return decodeFcc(
        codeUri.decode(codeUri.getKeyInQuery(query, 'solution'))
      );
    },
    parse: function() {
      if (!codeUri.enabled) {
        return null;
      }
      var query;
      if (location.search && codeUri.isInQuery(location.search)) {
        query = location.search.replace(/^\?/, '');

        if (history && typeof history.replaceState === 'function') {
          history.replaceState(
            history.state,
            null,
            location.href.split('?')[0]
          );
          location.hash = '#?' + encodeFcc(query);
        }
      } else {
        query = location.hash.replace(/^\#\?/, '');
      }

      if (!query) {
        return null;
      }

      return this.getSolutionFromQuery(query);
    },
    querify: function(solution) {
      if (!codeUri.enabled) {
        return null;
      }
      if (history && typeof history.replaceState === 'function') {
        // grab the url up to the query
        // destroy any hash symbols still clinging to life
        const url = (location.href.split('?')[0]).replace(/(#*)$/, '');
        history.replaceState(
          history.state,
          null,
          url +
            '#?' +
            (codeUri.shouldRun() ? '' : 'run=disabled&') +
            'solution=' +
            codeUri.encode(encodeFcc(solution))
        );
      } else {
        location.hash = '?solution=' +
          codeUri.encode(encodeFcc(solution));
      }

      return solution;
    },
    enabled: true,
    shouldRun() {
      return !this.getKeyInQuery(
        (location.search || location.hash).replace(/^(\?|#\?)/, ''),
        'run'
      );
    }
  };

  common.init.push(function() {
    codeUri.parse();
  });

  common.codeUri = codeUri;
  common.shouldRun = () => codeUri.shouldRun();

  return common;
}(window));
