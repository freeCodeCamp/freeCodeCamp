/* eslint-disable */
importScripts(
  'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.11/sass.sync.min.js'
);

onmessage = e => {
  const data = e.data;
  Sass.compile(data, result => {
    self.postMessage(result.text);
  });
}
