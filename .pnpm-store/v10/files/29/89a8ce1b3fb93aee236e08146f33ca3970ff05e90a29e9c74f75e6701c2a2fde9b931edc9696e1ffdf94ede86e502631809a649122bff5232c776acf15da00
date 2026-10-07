[![Build Status](https://travis-ci.org/css-modules/icss-utils.svg)](https://travis-ci.org/css-modules/icss-utils)

# ICSS Utils

## replaceSymbols

Governs the way tokens are searched & replaced during the linking stage of ICSS loading.

This is broken into its own module in case the behaviour needs to be replicated in other PostCSS plugins
(i.e. [CSS Modules Values](https://github.com/css-modules/postcss-modules-values))

```js
import { replaceSymbols, replaceValueSymbols } from "icss-utils";

replaceSymbols(css, replacements);
replaceValueSymbols(string, replacements);
```

Where:

- `css` is the PostCSS tree you're working with
- `replacements` is an JS object of `symbol: "replacement"` pairs, where all occurrences of `symbol` are replaced with `replacement`.

A symbol is a string of alphanumeric, `-` or `_` characters. A replacement can be any string. They are replaced in the following places:

- In the value of a declaration, i.e. `color: my_symbol;` or `box-shadow: 0 0 blur spread shadow-color`
- In a media expression i.e. `@media small {}` or `@media screen and not-large {}`

## extractICSS(css, removeRules = true, mode = 'auto')

Extracts and remove (if removeRules is equal true) from PostCSS tree `:import`, `@icss-import`, `:export` and `@icss-export` statements.

```js
import postcss from "postcss";
import { extractICSS } from "icss-utils";

const css = postcss.parse(`
  :import(colors) {
    a: b;
  }
  :export {
    c: d;
  }
`);

extractICSS(css);
/*
  {
    icssImports: {
      colors: {
        a: 'b'
      }
    },
    icssExports: {
      c: 'd'
    }
  }
*/
```

By default both the pseudo and at-rule form of the import and export statements
will be removed. Pass the `mode` option to limit to only one type.

## createICSSRules(icssImports, icssExports, mode = 'rule')

Converts icss imports and exports definitions to postcss ast

```js
createICSSRules(
  {
    colors: {
      a: "b",
    },
  },
  {
    c: "d",
  },
  // Need pass `rule` and `decl` from postcss
  // Please look at `Step 4` https://evilmartians.com/chronicles/postcss-8-plugin-migration
  postcss
);
```

By default it will create pseudo selector rules (`:import` and `:export`). Pass
`at-rule` for `mode` to instead generate `@icss-import` and `@icss-export`, which
may be more resilient to post processing by other tools.

## License

ISC

---

Glen Maddern, Bogdan Chadkin and Evilebottnawi 2015-present.
