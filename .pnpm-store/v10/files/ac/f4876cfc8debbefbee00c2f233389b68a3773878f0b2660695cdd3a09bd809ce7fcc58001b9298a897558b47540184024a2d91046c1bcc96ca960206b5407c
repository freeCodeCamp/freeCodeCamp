# babel-plugin-prismjs [![Build Status](https://travis-ci.org/mAAdhaTTah/babel-plugin-prismjs.svg?branch=master)](https://travis-ci.org/mAAdhaTTah/babel-plugin-prismjs)

A babel plugin to use PrismJS with standard bundlers.

## How to Use
This plugin allows you to treat PrismJS as a standard module and configure what languages, plugins, & themes you want to bundle with Prism.

In your code, import `prismjs`:

```js
import Prism from 'prismjs';

Prism.highlightAll();
```

The exported `Prism` object will be the fully-configured Prism instance.

### Limitations

- You must be using ES6 imports to load PrismJS.

## Configuring the plugin

In your .babelrc, register the plugin and configure its dependencies:

```json
{
  "plugins": [
    ["prismjs", {
        "languages": ["javascript", "css", "markup"],
        "plugins": ["line-numbers"],
        "theme": "twilight",
        "css": true
    }]
  ]
}
```

Each key are used as follows:

* `languages`: Array of languages to include in the bundle or `"all"` to include all languages. Those languages can be found [here](http://prismjs.com/#languages-list).
* `plugins`: Array of plugins to include in the bundle. Those plugins can be found [here](http://prismjs.com/#plugins).
* `theme`: Name of theme to include in the bundle. Themes can be found [here](http://prismjs.com/).
* `css`: Boolean indicating whether to include `.css` files in the result. Defaults to `false`. If `true`, `import`s will be added for `.css` files. Must be `true` in order for `theme` to work.
