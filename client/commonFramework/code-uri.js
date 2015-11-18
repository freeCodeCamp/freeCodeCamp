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

      return query
        .split('&')
        .reduce(function(solution, param) {
          var key = param.split('=')[0];
          var value = param.split('=')[1];
          if (key === 'solution') {
            return decodeFcc(codeUri.decode(value || ''));
          }
          return solution;
        }, null);
    },
    querify: function(solution) {
      if (!codeUri.enabled) {
        return null;
      }
      if (history && typeof history.replaceState === 'function') {
        history.replaceState(
          history.state,
          null,
          '?solution=' + codeUri.encode(encodeFcc(solution))
        );
      } else {
        location.hash = '?solution=' +
          codeUri.encode(encodeFcc(solution));
      }

      return solution;
    },
    enabled: true
  };

  common.init.push(function() {
    codeUri.parse();
  });

  common.codeUri = codeUri;

  return common;
}(window));
