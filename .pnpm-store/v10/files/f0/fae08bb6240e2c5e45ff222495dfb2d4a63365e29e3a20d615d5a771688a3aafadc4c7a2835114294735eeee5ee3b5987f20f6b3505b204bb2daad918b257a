# import/dynamic-import-chunkname

💡 This rule is manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

<!-- end auto-generated rule header -->

This rule reports any dynamic imports without a webpackChunkName specified in a leading block comment in the proper format.

This rule enforces naming of webpack chunks in dynamic imports. When you don't explicitly name chunks, webpack will autogenerate chunk names that are not consistent across builds, which prevents long-term browser caching.

## Rule Details

This rule runs against `import()` by default, but can be configured to also run against an alternative dynamic-import function, e.g. 'dynamicImport.'
You can also configure the regex format you'd like to accept for the webpackChunkName - for example, if we don't want the number 6 to show up in our chunk names:

 ```javascript
{
  "import/dynamic-import-chunkname": [2, {
    importFunctions: ["dynamicImport"],
    webpackChunknameFormat: "[a-zA-Z0-57-9-/_]+",
    allowEmpty: false
  }]
}
```

### invalid

The following patterns are invalid:

```javascript
// no leading comment
import('someModule');

// incorrectly formatted comment
import(
  /*webpackChunkName:"someModule"*/
  'someModule',
);
import(
  /* webpackChunkName : "someModule" */
  'someModule',
);

// chunkname contains a 6 (forbidden by rule config)
import(
  /* webpackChunkName: "someModule6" */
  'someModule',
);

// invalid syntax for webpack comment
import(
  /* totally not webpackChunkName: "someModule" */
  'someModule',
);

// single-line comment, not a block-style comment
import(
  // webpackChunkName: "someModule"
  'someModule',
);

// chunk names are disallowed when eager mode is set
import(
  /* webpackMode: "eager" */
  /* webpackChunkName: "someModule" */
  'someModule',
)
```

### valid

The following patterns are valid:

```javascript
  import(
    /* webpackChunkName: "someModule" */
    'someModule',
  );
  import(
    /* webpackChunkName: "someOtherModule12345789" */
    'someModule',
  );
  import(
    /* webpackChunkName: "someModule" */
    /* webpackPrefetch: true */
    'someModule',
  );
  import(
    /* webpackChunkName: "someModule", webpackPrefetch: true */
    'someModule',
  );

  // using single quotes instead of double quotes
  import(
    /* webpackChunkName: 'someModule' */
    'someModule',
  );
```

### `allowEmpty: true`

If you want to allow dynamic imports without a webpackChunkName, you can set `allowEmpty: true` in the rule config. This will allow dynamic imports without a leading comment, or with a leading comment that does not contain a webpackChunkName.

Given `{ "allowEmpty": true }`:

<!-- markdownlint-disable-next-line MD024 -- duplicate header -->
### valid

The following patterns are valid:

```javascript
import('someModule');

import(
  /* webpackChunkName: "someModule" */
  'someModule',
);
```
<!-- markdownlint-disable-next-line MD024 -- duplicate header -->
### invalid

The following patterns are invalid:

```javascript
// incorrectly formatted comment
import(
  /*webpackChunkName:"someModule"*/
  'someModule',
);
```

## When Not To Use It

If you don't care that webpack will autogenerate chunk names and may blow up browser caches and bundle size reports.
