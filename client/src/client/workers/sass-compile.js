import Sass from 'sass.js';

onmessage = e => {
  const data = e.data;
  Sass.compile(data, result => {
    if (result.status === 0) {
      self.postMessage(result.text);
    } else {
      throw result.formatted;
    }
  });
};
