/* eslint-disable functional/immutable-data, import/no-commonjs */
const recommend = require('./dist/recommend.cjs.js');

/**
 * The Common JS build is the default entry point for the Node environment. Keep in
 * in mind, that for the browser environment, we hint the bundler to use the UMD
 * build instead as specified on the key `browser` of our `package.json` file.
 */
module.exports = recommend;

/**
 * In addition, we also set explicitly the default export below making
 * this Common JS module in compliance with es6 modules specification.
 */
module.exports.default = recommend;
