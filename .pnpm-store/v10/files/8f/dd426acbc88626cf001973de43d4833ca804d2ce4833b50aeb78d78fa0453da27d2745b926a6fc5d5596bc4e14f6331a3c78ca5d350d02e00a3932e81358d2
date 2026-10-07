# CDN

Starting with v3.6.0, the CDN versions of date-fns are available on [jsDelivr](https://www.jsdelivr.com/package/npm/date-fns) and other CDNs. They expose the date-fns functionality via the `window.dateFns` global variable.

Unlike the npm package, the CDN is transpiled to be compatible with IE11, so it supports a wide variety of legacy browsers and environments.

```html
<script src="https://cdn.jsdelivr.net/npm/date-fns@3.6.0/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/date-fns@3.6.0/locale/es/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/date-fns@3.6.0/locale/ru/cdn.min.js"></script>
<script>
  dateFns.formatRelative(dateFns.subDays(new Date(), 3), new Date());
  //=> "last Friday at 7:26 p.m."

  dateFns.formatRelative(dateFns.subDays(new Date(), 3), new Date(), {
    locale: dateFns.locale.es,
  });
  //=> "el viernes pasado a las 19:26"

  dateFns.formatRelative(dateFns.subDays(new Date(), 3), new Date(), {
    locale: dateFns.locale.ru,
  });
  //=> "в прошлую пятницу в 19:26"
</script>
```

The CDN versions are available for the main module, all & individual locales, and the FP submodule.

They come in two flavors: `cdn.js` and `cdn.min.js`. The latter is minified and should be used in production. The former is useful for debugging and development.

Keep in mind that using the CDN versions in production is suboptimal because they bundle all the date-fns functionality you will never use. It's much better to use the npm package and a tree-shaking-enabled bundler like webpack or Rollup. However, the CDN versions are helpful for quick prototyping, small projects, educational purposes, or working in a legacy environment.

## Main module

The main module with all functions bundled:

```
https://cdn.jsdelivr.net/npm/date-fns@VERSION/cdn.js
https://cdn.jsdelivr.net/npm/date-fns@VERSION/cdn.min.js
```

You can access it via the `dateFns` global variable:

```html
<script src="https://cdn.jsdelivr.net/npm/date-fns@3.6.0/cdn.min.js"></script>
<script>
  dateFns.addDays(new Date(2014, 1, 11), 10);
  //=> Tue Feb 21 2014 00:00:00
</script>
```

## The FP submodule

The FP submodule with all functions bundled:

```
https://cdn.jsdelivr.net/npm/date-fns@VERSION/fp/cdn.js
https://cdn.jsdelivr.net/npm/date-fns@VERSION/fp/cdn.min.js
```

You can access it via the `dateFns.fp` global variable:

```html
<script src="https://cdn.jsdelivr.net/npm/date-fns@3.6.0/fp/cdn.min.js"></script>
<script>
  dateFns.fp.addDays(10, new Date(2014, 1, 11));
  //=> Tue Feb 21 2014 00:00:00
</script>
```

## Locales

All locales bundled:

```
https://cdn.jsdelivr.net/npm/date-fns@VERSION/locale/cdn.js
https://cdn.jsdelivr.net/npm/date-fns@VERSION/locale/cdn.min.js
```

You can access them via the `dateFns.locale` global variable:

```html
<script src="https://cdn.jsdelivr.net/npm/date-fns@3.6.0/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/date-fns@3.6.0/locale/cdn.min.js"></script>
<script>
  dateFns.formatRelative(dateFns.subDays(new Date(), 3), new Date(), {
    locale: dateFns.locale.es,
  });
  //=> "el viernes pasado a las 19:26"
</script>
```

The locales are also available as individual files.

```
https://cdn.jsdelivr.net/npm/date-fns@VERSION/locale/LOCALE/cdn.js
https://cdn.jsdelivr.net/npm/date-fns@VERSION/locale/LOCALE/cdn.min.js
```

You can access them via the `dateFns.locale.LOCALE` global variable:

```html
<script src="https://cdn.jsdelivr.net/npm/date-fns@3.6.0/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/date-fns@3.6.0/locale/es/cdn.min.js"></script>
<script>
  dateFns.formatRelative(dateFns.subDays(new Date(), 3), new Date(), {
    locale: dateFns.locale.es,
  });
  //=> "el viernes pasado a las 19:26"
</script>
```
