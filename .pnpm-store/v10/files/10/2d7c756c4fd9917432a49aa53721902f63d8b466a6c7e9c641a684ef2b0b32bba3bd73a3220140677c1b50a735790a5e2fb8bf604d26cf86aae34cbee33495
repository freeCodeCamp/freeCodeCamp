# import/no-restricted-paths

<!-- end auto-generated rule header -->

Some projects contain files which are not always meant to be executed in the same environment.
For example consider a web application that contains specific code for the server and some specific code for the browser/client. In this case you don’t want to import server-only files in your client code.

In order to prevent such scenarios this rule allows you to define restricted zones where you can forbid files from being imported if they match a specific path.

## Rule Details

This rule has one option, which is an object containing all `zones` where restrictions will be applied, plus an optional `basePath` used to resolve relative paths within each zone.
The default for `basePath` is the current working directory.

Each zone consists of a `target`, a `from`, and optional `except` and `message` attributes.

 - `target` - Identifies which files are part of the zone. It can be expressed as:
   - A simple directory path, matching all files contained recursively within it
   - A glob pattern
   - An array of any of the two types above
   - *Example: `target: './client'` - this zone consists of all files under the 'client' dir*
 - `from` - Identifies folders from which the zone is not allowed to import. It can be expressed as:
   - A simple directory path, matching all files contained recursively within it
   - A glob pattern
   - An array of only simple directories, or of only glob patterns (mixing both types within the array is not allowed)
   - *Example: `from: './server'` - this zone is not allowed to import anything from the 'server' dir*
 - `except` - Optional. Allows exceptions that would otherwise violate the related `from`. Note that it does not alter the behaviour of `target` in any way.
   - If `from` is an array of glob patterns, `except` must be an array of glob patterns as well.
   - If `from` is an array of simple directories, `except` is relative to `from` and cannot backtrack to a parent directory.
   - *Example: `except: './server/config'` this zone is allowed to import server config, even if it can't import other server code*
 - `message` - Optional. Displayed in case of rule violation.

*Note: The `from` attribute is NOT matched literally against the import path string as it appears in the code. Instead, it's matched against the path to the imported file after it's been resolved against `basePath`.*

### Examples

Given this folder structure:

```pt
.
├── client
│   ├── foo.js
│   └── baz.js
└── server
    └── bar.js
```

And this configuration:

```json
{
  "zones": [
    {
      "target": "./client",
      "from": "./server"
    }
  ]
}
```

:x: The following is considered incorrect:

```js
// client/foo.js
import bar from '../server/bar';
```

:white_check_mark: The following is considered correct:

```js
// server/bar.js
import baz from '../client/baz';
```

---------------

Given this folder structure:

```pt
.
├── client
│   └── ...
└── server
    ├── one
    │   ├── a.js
    │   └── b.js
    └── two
        └── a.js
```

And this configuration:

```json
{
  "zones": [
    {
      "target": "./server/one",
      "from": "./server",
      "except": ["./one"]
    }
  ]
}
```

:x: The following is considered incorrect:

```js
// server/one/a.js
import a from '../two/a'
```

:white_check_mark: The following is considered correct:

```js
// server/one/a.js
import b from './b'
```

---------------

Given this folder structure:

```pt
.
└── client
    ├── foo.js
    └── sub-module
        ├── bar.js
        └── baz.js
```

And this configuration:

```json
{
  "zones": [
    {
      "target": "./client/!(sub-module)/**/*",
      "from": "./client/sub-module/**/*",
    }
  ]
}
```

:x: The following is considered incorrect:

```js
// client/foo.js
import a from './sub-module/baz'
```

:white_check_mark: The following is considered correct:

```js
// client/sub-module/bar.js
import b from './baz'
```

---------------

Given this folder structure:

```pt
.
├── one
│   ├── a.js
│   └── b.js
├── two
│   ├── a.js
│   └── b.js
└── three
    ├── a.js
    └── b.js
```

And this configuration:

```json
{
  "zones": [
    {
      "target": [
        "./two/*",
        "./three/*"
      ],
      "from": [
        "./one",
        "./three"
      ]
    }
  ]
}
```

:white_check_mark: The following is considered correct:

```js
// one/b.js
import a from '../three/a'
import a from './a'
```

```js
// two/b.js
import a from './a'
```

:x: The following is considered incorrect:

```js
// two/a.js
import a from '../one/a'
import a from '../three/a'
```

```js
// three/b.js
import a from '../one/a'
import a from './a'
```
