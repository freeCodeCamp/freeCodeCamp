/* eslint-disable import/unambiguous */
// work around for SASS error in Edge
// https://github.com/medialize/sass.js/issues/96#issuecomment-424386171
if (!self.crypto) {
  (self.crypto as unknown) = {
    getRandomValues: function (array: number[]) {
      for (let i = 0, l = array.length; i < l; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    }
  };
}

self.importScripts('/js/sass.sync.js');

self.onmessage = e => {
  const data: unknown = e.data;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
  (self as any).Sass.compile(data, (result: Record<string, unknown>) => {
    if (result.status === 0) {
      self.postMessage(result.text);
    } else {
      self.postMessage({ type: 'error', data: { message: result.formatted } });
    }
  });
};

self.postMessage({ type: 'contentLoaded' });
