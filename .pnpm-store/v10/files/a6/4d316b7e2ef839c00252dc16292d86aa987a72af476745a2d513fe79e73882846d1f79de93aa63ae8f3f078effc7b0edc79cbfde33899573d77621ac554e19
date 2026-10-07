# `@babel/preset-modules`

> ℹ️ Starting from `@babel/preset-env` 7.9.0, you can enable the [`bugfixes: true` option](https://babeljs.io/docs/en/babel-preset-env#bugfixes) to get the same behavior as using `@babel/preset-modules`, but with support for custom `targets`.
> If you need to target browsers with native modules support (like this preset does), you can use `targets: { esmodules: true }`.

A Babel preset that enables async/await, Tagged Templates, arrow functions, destructured and rest parameters, and more **in all modern browsers** ([88% of traffic](https://caniuse.com/#feat=es6-module)).

It works around bugs and inconsistencies in modern JavaScript engines by converting broken syntax to the _closest non-broken modern syntax_.  Use this in place of `@babel/preset-env`'s [target.esmodules](https://babeljs.io/docs/en/babel-preset-env#targetsesmodules) option for smaller bundle size and improved performance.

This preset is only useful for browsers. You can serve the output to modern browsers while still supporting older browsers using the [module/nomodule pattern](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/):

```html
<!-- transpiled with preset-modules: -->
<script type="module" src="modern.js"></script>
<!-- transpiled with preset-env: -->
<script nomodule src="legacy.js"></script>
```

### Features Supported

- JSX spread attributes are compiled to Object.assign() instead of a helper.
- Default, destructured and optional parameters are all natively supported.
- Tagged Templates are fully supported, patched for Safari 10+ and Edge 16+.
- async/await is supported without being transpiled to generators.
- Function name inference works as expected, including Arrow Functions.

### Installation & Usage

Install the preset from [npm](https://www.npmjs.com/package/@babel/preset-modules):

```sh
npm install @babel/preset-modules --save-dev
```

To use the preset, add it to your [Babel Configuration](https://babeljs.io/docs/en/configuration):

```js
{
  "presets": [
    "@babel/preset-modules"
  ]
}
```

If you're implementing the module/nomodule pattern, your configuration might look something like this:

```js
{
  "env": {
    "modern": {
      "presets": [
        "@babel/preset-modules"
      ]
    },
    "legacy": {
      "presets": [
        "@babel/preset-env"
      ]
    }
  }
}
```

### Options

There's a single Boolean `loose` option, which defaults to `false`. Passing `true` further reduces output size.

The `loose` setting turns off a rarely-needed function name workaround for older versions of Edge. If you're not relying on `Function.prototype.name`, it's worth enabling loose mode.

### How does it work?

Babel’s `preset-env` is great, since it lets you define which Babel features are needed based on a browser support target. In order to make that plumbing work automatically, the preset has configuration that groups all of the new JavaScript syntax features into collections of related syntax transforms. These groups are fairly large, for example "function arguments" includes destructured, default and rest parameters. The groupings come from the fact that Babel’s transforms often rely on other transforms, so they can’t always be applied in isolation.

From this grouping information, Babel enables or disables each group based on the browser support target you specify to preset-env’s [targets](https://babeljs.io/docs/en/babel-preset-env#targets) option. For modern output, the [targets.esmodules](https://babeljs.io/docs/en/babel-preset-env#targetsesmodules) option is effectively an alias for the set of browsers that support ES Modules: Edge 16+, Safari 10.1+, Firefox 60+ and Chrome 61+.

Here's the problem: if any version of any browser in that list contains a bug triggered by modern syntax, the only solution we have is to enable the corresponding transform group that fixes that bug. This means that fundamentally, preset-env converts code to ES5 in order to get around syntax bugs in ES2017. Since that's the only solution at our disposal, eventually it becomes overused.

For example, all of the new syntax features relating to function parameters are grouped into the same Babel plugin (`@babel/plugin-transform-function-parameters`). That means because Edge 16 & 17 support ES Modules but have a bug related to parsing shorthand destructured parameters with default values within arrow functions, all functions get compiled from the new compact argument syntaxes down to ES5:

```js
// this breaks in Edge 16:
const foo = ({ a = 1 }) => {};

// .. but this doesn't:
function foo({ a = 1, b }, ...args) {}

// ... and neither does this:
const foo = ({ a: a = 1 }) => {};
```

In fact, there are 23 syntax improvements for function parameters in ES2017, and only one of them is broken in ES Modules-supporting browsers. It seems unfortunate to transpile all those great features down to ES5 just for one browser!

This plugin takes a different approach than we've historically taken with JavaScript: it transpiles the broken syntax to the closest _non-broken modern syntax_. In the above case, here's what is generated to fix all ES Modules-supporting browsers:

**input:**

```js
const foo = ({ a = 1 }, b = 2, ...args) => [a,b,args];
```

**output:**

```js
const foo = ({ a: a = 1 }, b = 2, ...args) => [a,b,args];
```

That output works in all ES Modules-supporting browsers, and is only **59 bytes** minified & gzipped.

> Compare this to `@babel/preset-env`'s `targets.esmodules` output (**147 bytes** minified & gzipped):
>
> ```js
>const foo = function foo(_ref, b) {
>  let { a = 1 } = _ref;
>
>  if (b === void 0) { b = 2; }
>
>  for (
>    var _len = arguments.length,
>      args = new Array(_len > 2 ? _len - 2 : 0),
>      _key = 2;  _key < _len; _key++
>  ) {
>    args[_key - 2] = arguments[_key];
>  }
>
>  return [a, b, args];
>};
>````

The result is improved bundle size and performance, while supporting the same browsers.


### Important: Minification

The output generated by this preset includes workarounds for Safari 10, however minifiers like Terser sometimes remove these workarounds. In order to avoid shipping broken code, it's important to tell Terser to preserve the workarounds, which can be done via the `safari10` option.

It's also generally the case that minifiers are configured to output ES5 by default, so you'll want to change the output syntax to ES2017.

With [Terser's Node API](https://github.com/terser/terser#minify-options):

```js
terser.minify({
  ecma: 2017,
  safari10: true
})
```

With [Terser CLI](https://npm.im/terser):

```sh
terser --ecma 2017 --safari10 ...
```

With [terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/):

```js
module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 2017,
          safari10: true
        }
      })
    ]
  }
};
```

All of the above configurations also apply to [uglify-es](https://github.com/mishoo/UglifyJS2/tree/harmony).
UglifyJS (2.x and prior) does not support modern JavaScript, so it cannot be used in conjunction with this preset.
