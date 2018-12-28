import Sass from 'sass.js';

onmessage = e => {
  const data = e.data;
  Sass.compile(data, result => {
    self.postMessage(result.text);
  });
};
