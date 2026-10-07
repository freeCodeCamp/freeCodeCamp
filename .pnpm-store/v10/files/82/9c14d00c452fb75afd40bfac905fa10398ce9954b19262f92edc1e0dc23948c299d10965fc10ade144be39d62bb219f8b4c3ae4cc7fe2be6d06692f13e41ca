# import/no-useless-path-segments

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Use this rule to prevent unnecessary path segments in import and require statements.

## Rule Details

Given the following folder structure:

```pt
my-project
├── app.js
├── footer.js
├── header.js
└── helpers.js
└── helpers
    └── index.js
├── index.js
└── pages
    ├── about.js
    ├── contact.js
    └── index.js
```

The following patterns are considered problems:

```js
/**
 *  in my-project/app.js
 */

import "./../my-project/pages/about.js"; // should be "./pages/about.js"
import "./../my-project/pages/about"; // should be "./pages/about"
import "../my-project/pages/about.js"; // should be "./pages/about.js"
import "../my-project/pages/about"; // should be "./pages/about"
import "./pages//about"; // should be "./pages/about"
import "./pages/"; // should be "./pages"
import "./pages/index"; // should be "./pages" (except if there is a ./pages.js file)
import "./pages/index.js"; // should be "./pages" (except if there is a ./pages.js file)
```

The following patterns are NOT considered problems:

```js
/**
 *  in my-project/app.js
 */

import "./header.js";
import "./pages";
import "./pages/about";
import ".";
import "..";
import fs from "fs";
```

## Options

### noUselessIndex

If you want to detect unnecessary `/index` or `/index.js` (depending on the specified file extensions, see below) imports in your paths, you can enable the option `noUselessIndex`. By default it is set to `false`:

```js
"import/no-useless-path-segments": ["error", {
  noUselessIndex: true,
}]
```

Additionally to the patterns described above, the following imports are considered problems if `noUselessIndex` is enabled:

```js
// in my-project/app.js
import "./helpers/index"; // should be "./helpers/" (not auto-fixable to `./helpers` because this would lead to an ambiguous import of `./helpers.js` and `./helpers/index.js`)
import "./pages/index"; // should be "./pages" (auto-fixable)
import "./pages/index.js"; // should be "./pages" (auto-fixable)
```

Note: `noUselessIndex` only avoids ambiguous imports for `.js` files if you haven't specified other resolved file extensions. See [Settings: import/extensions](https://github.com/import-js/eslint-plugin-import#importextensions) for details.

### commonjs

When set to `true`, this rule checks CommonJS imports. Default to `false`.
