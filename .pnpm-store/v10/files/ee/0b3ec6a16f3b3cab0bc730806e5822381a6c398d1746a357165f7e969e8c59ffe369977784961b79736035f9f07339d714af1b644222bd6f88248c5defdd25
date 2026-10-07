'use strict';
const browserslist = require('browserslist');
const { isSupported } = require('caniuse-api');
const fromInitial = require('./data/fromInitial.json');
const toInitial = require('./data/toInitial.json');

const initial = 'initial';

// In most of the browser including chrome the initial for `writing-mode` is not `horizontal-tb`. Ref https://github.com/cssnano/cssnano/pull/905
const defaultIgnoreProps = ['writing-mode', 'transform-box'];

/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-reduce-initial',
    /** @param {import('postcss').Result & {opts: browserslist.Options & {ignore?: string[]}}} result */
    prepare(result) {
      const resultOpts = result.opts || {};
      const browsers = browserslist(null, {
        stats: resultOpts.stats,
        path: __dirname,
        env: resultOpts.env,
      });

      const initialSupport = isSupported('css-initial-value', browsers);
      return {
        OnceExit(css) {
          css.walkDecls((decl) => {
            const lowerCasedProp = decl.prop.toLowerCase();
            const ignoreProp = new Set(
              defaultIgnoreProps.concat(resultOpts.ignore || [])
            );

            if (ignoreProp.has(lowerCasedProp)) {
              return;
            }

            if (
              initialSupport &&
              Object.prototype.hasOwnProperty.call(toInitial, lowerCasedProp) &&
              decl.value.toLowerCase() ===
                toInitial[/** @type {keyof toInitial} */ (lowerCasedProp)]
            ) {
              decl.value = initial;
              return;
            }

            if (
              decl.value.toLowerCase() !== initial ||
              !fromInitial[/** @type {keyof fromInitial} */ (lowerCasedProp)]
            ) {
              return;
            }

            decl.value =
              fromInitial[/** @type {keyof fromInitial} */ (lowerCasedProp)];
          });
        },
      };
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
