# Introduction

[![Actions](https://github.com/i18next/i18next-fs-backend/workflows/node/badge.svg)](https://github.com/i18next/i18next-fs-backend/actions?query=workflow%3Anode)
[![Actions deno](https://github.com/i18next/i18next-fs-backend/workflows/deno/badge.svg)](https://github.com/i18next/i18next-fs-backend/actions?query=workflow%3Adeno)
[![npm version](https://img.shields.io/npm/v/i18next-fs-backend.svg?style=flat-square)](https://www.npmjs.com/package/i18next-fs-backend)

This is an i18next backend to be used in Node.js and Deno. It will load resources from the file system.

It's based on the deprecated [i18next-node-fs-backend](https://github.com/i18next/i18next-node-fs-backend) and can mostly be used as a drop-in replacement.

It will load resources from filesystem. Right now it supports following filetypes:

- .json
- .json5
- .jsonc
- .yml/.yaml
- .js (very limited, checks for `exports` or `export default`)

## Advice:

If you don't like to manage your translation files manually or are simply looking for a [better management solution](https://www.locize.com?utm_source=i18next_fs_backend_readme&utm_medium=github&utm_campaign=readme), take a look at [i18next-locize-backend](https://github.com/locize/i18next-locize-backend). The i18next [backend plugin](https://www.i18next.com/overview/plugins-and-utils#backends) for 🌐 [Locize](https://www.locize.com?utm_source=i18next_fs_backend_readme&utm_medium=github&utm_campaign=readme) ☁️.

Starting from an app with hardcoded strings? Run `npx i18next-cli localize` — one command that wraps strings in `t()`, extracts keys, connects to [Locize](https://www.locize.com?from=i18next-fs-backend_readme__localize) and AI-translates your app. See the [launch post](https://www.locize.com/blog/i18next-cli-localize?from=i18next-fs-backend_readme__localize).

# Getting started

```bash
# npm package
$ npm install i18next-fs-backend
```

Wiring up:

```js
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';

i18next.use(Backend).init(i18nextOptions);
```

for Deno:

```js
import i18next from 'https://deno.land/x/i18next/index.js'
import Backend from 'https://deno.land/x/i18next_fs_backend/index.js'

i18next.use(Backend).init(i18nextOptions);
```

- As with all modules you can either pass the constructor function (class) to the i18next.use or a concrete instance.

## Backend Options

```js
{
  // path where resources get loaded from, or a function
  // returning a path:
  // function(lngs, namespaces) { return customPath; }
  // the returned path will interpolate lng, ns if provided like giving a static path
  loadPath: '/locales/{{lng}}/{{ns}}.json',

  // path to post missing resources
  addPath: '/locales/{{lng}}/{{ns}}.missing.json',

  // if you use i18next-fs-backend as caching layer in combination with i18next-chained-backend, you can optionally set an expiration time
  // an example on how to use it as cache layer can be found here: https://github.com/i18next/i18next-fs-backend/blob/master/example/caching/app.js
  // expirationTime: 60 * 60 * 1000
}
```

Options can be passed in:

**preferred** - by setting options.backend in i18next.init:

```js
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';

i18next.use(Backend).init({
  backend: options,
});
```

on construction:

```js
import Backend from 'i18next-fs-backend';
const Backend = new Backend(null, options);
```

via calling init:

```js
import Backend from 'i18next-fs-backend';
const Backend = new Backend();
Backend.init(null, options);
```

## TypeScript

To properly type the backend options, you can import the `FsBackendOptions` interface and use it as a generic type parameter to the i18next's `init` method, e.g.:

```ts
import i18n from 'i18next'
import FsBackend, { FsBackendOptions } from 'i18next-fs-backend'

i18n
  .use(FsBackend)
  .init<FsBackendOptions>({
    backend: {
      // fs backend options
    },

    // other i18next options
  })
```

# If set i18next initAsync option to false it will load the files synchronously

```js
// i18n.js
const { join } = require('path')
const { readdirSync, lstatSync } = require('fs')
const i18next = require('i18next')
const Backend = require('i18next-fs-backend')
i18next
  .use(Backend)
  .init({
    // debug: true,
    initAsync: false,
    fallbackLng: 'en',
    lng: 'en',
    preload: readdirSync(join(__dirname, '../locales')).filter((fileName) => {
      const joinedPath = join(join(__dirname, '../locales'), fileName)
      const isDirectory = lstatSync(joinedPath).isDirectory()
      return isDirectory
    }),
    ns: 'backend-app',
    defaultNS: 'backend-app',
    backend: {
      loadPath: join(__dirname, '../locales/{{lng}}/{{ns}}.json')
    }
  })
```

## Security considerations

### Language / namespace values reach the filesystem

`i18next-fs-backend` substitutes the `lng` and `ns` options into the
configured `loadPath` / `addPath` templates and reads / writes the resulting
file. If those values come from an untrusted source (HTTP query string,
cookie, request header), a crafted value could break out of the intended
locale directory and read or overwrite files elsewhere on disk.

Since **2.6.4**, values containing `..`, `\`, control characters, prototype
keys (`__proto__`, `constructor`, `prototype`), or longer than 128
characters are rejected — the backend refuses to build the filesystem path
and returns an error to the caller. Any legitimate i18next language-code
shape (BCP-47, underscores, dots, `+`-joined multi-language requests) is
still accepted.

`/` is handled per key: it is rejected in `lng`, since no legitimate
language-code shape contains one, and allowed in `ns` since **2.6.5**, so
that nested namespace names such as `a/b` keep mapping to subfolder layouts
like `public/locales/en/a/b.json`. Directory escape stays blocked in both
cases, because `..` and `\` are still rejected.

This is a defence-in-depth layer. It does **not** replace the usual
responsibility to validate `lng` / `ns` at your application boundary —
especially when either comes from user input.

### `.js` / `.ts` locale files are executed via `eval`

The backend supports loading translation data from `.js` and `.ts` files by
`eval`-ing their content. This is an intentional feature — it allows
expressions, comments, and module-style default exports in locale files —
but it carries a real trust requirement:

> **Treat every `.js` / `.ts` locale file as code that will run with the
> full privileges of your Node process**, including access to
> `process.env`, the filesystem, and the network.

Concretely that means:

- Never load `.js` / `.ts` locale files from an untrusted or writable
  source (user uploads, compromised CDN, shared-mount drops).
- If your build / deploy pipeline produces locale files, secure the
  pipeline the same way you would secure any code-producing pipeline
  (signed commits, reviewed merges, protected branches).
- Prefer **JSON / JSON5 / YAML / JSONC** for locale files whenever you
  don't need expression-level dynamism — those formats are parsed, not
  executed.

### Reporting a vulnerability

Please **do not** open a public GitHub issue for security problems. Send
reports privately via the [GitHub Security Advisories](https://github.com/i18next/i18next-fs-backend/security/advisories/new)
flow on the repository.

---

<h3 align="center">Gold Sponsors</h3>

<p align="center">
  <a href="https://www.locize.com/?utm_source=i18next_fs_backend_readme&utm_medium=github&utm_campaign=readme" target="_blank">
    <img src="https://raw.githubusercontent.com/i18next/i18next/master/assets/locize_sponsor_240.gif" width="240px">
  </a>
</p>
