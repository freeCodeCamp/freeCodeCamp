// eslint-disable-next-line no-undef
importScripts('/js/sass.sync.js');

self.onmessage = e => {
  const data = e.data;
  self.Sass.compile(data, result => {
    if (result.status === 0) {
      self.postMessage(result.text);
    } else {
      throw result.formatted;
    }
  });
};
