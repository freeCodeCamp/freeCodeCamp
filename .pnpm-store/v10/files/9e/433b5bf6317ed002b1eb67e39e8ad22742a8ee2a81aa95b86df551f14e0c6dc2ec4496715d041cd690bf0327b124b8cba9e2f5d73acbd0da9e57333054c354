# webpack

## Removing unused languages from dynamic import

If a locale is imported dynamically, then all locales from date-fns are loaded by webpack into a bundle (~160kb) or split across the chunks. This prolongs the build process and increases the amount of space taken. However, it is possible to use webpack to trim down languages using [ContextReplacementPlugin].

Let's assume that we have a single point in which supported locales are present:

`config.js`:

```js
// `see date-fns/src/locale` for available locales
export const supportedLocales = ["en-US", "de", "pl", "it"];
```

We could also have a function that formats the date:

```js
const getLocale = (locale) => import(`date-fns-locale/locale/${locale}.js`); // or require() if using CommonJS

const formatDate = (date, formatStyle, locale) => {
  return format(date, formatStyle, {
    locale: getLocale(locale).default,
  });
};
```

In order to exclude unused languages we can use webpacks [ContextReplacementPlugin].

`webpack.config.js`:

```js
import webpack from "webpack";
import { supportedLocales } from "./config.js";

export default config = {
  resolve: {
    alias: {
      "date-fns-locale": path.dirname(require.resolve("date-fns/package.json")),
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /date-fns[/\\]locale/,
      new RegExp(`(${locales.join("|")})\.js$`),
    ),
  ],
};
```

This results in a language bundle of ~23kb .

[contextreplacementplugin]: https://webpack.js.org/plugins/context-replacement-plugin/
