import Promise from './es6-promise/promise';
import polyfill from './es6-promise/polyfill';

// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;
export default Promise;
