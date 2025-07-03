// work around for SASS error in Edge
// https://github.com/medialize/sass.js/issues/96#issuecomment-424386171
interface WorkerWithSass extends Worker {
  Sass: {
    compile(data: unknown, callback: unknown): void;
  };
}

const ctx: WorkerWithSass & typeof globalThis =
  self as unknown as WorkerWithSass & typeof globalThis;

if (!ctx.crypto) {
  (ctx.crypto as unknown) = {
    getRandomValues: function (array: number[]) {
      for (let i = 0, l = array.length; i < l; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    }
  };
}

ctx.importScripts('/js/sass.sync.js');

ctx.onmessage = e => {
  const data: unknown = e.data;
  ctx.Sass.compile(data, (result: Record<string, unknown>) => {
    if (result.status === 0) {
      ctx.postMessage(result.text);
    } else {
      ctx.postMessage({
        type: 'error',
        data: { message: result.formatted }
      });
    }
  });
};

ctx.postMessage({ type: 'contentLoaded' });
