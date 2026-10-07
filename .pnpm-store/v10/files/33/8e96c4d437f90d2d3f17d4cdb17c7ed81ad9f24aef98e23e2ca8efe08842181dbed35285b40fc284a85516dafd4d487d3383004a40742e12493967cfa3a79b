import AsyncGenerator from './_async_generator.mjs';

export default function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}
