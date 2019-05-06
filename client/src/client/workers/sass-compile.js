// work around for SASS error in Edge
// https://github.com/medialize/sass.js/issues/96#issuecomment-424386171
if (!self.crypto) {
  self.crypto = {
    getRandomValues: function(array) {
      for (var i = 0, l = array.length; i < l; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    }
  };
}

self.importScripts('/js/sass.sync.js');

self.onmessage = e => {
  const data = e.data;
  self.Sass.compile(data, result => {
    if (result.status === 0) {
      self.postMessage(result.text);
    } else {
      self.postMessage({ type: 'error', data: { message: result.formatted } });
    }
  });
};

self.postMessage({ type: 'contentLoaded' });
