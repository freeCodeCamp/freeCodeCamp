---
id: 695b93cb572125a6fb19f39e
title: What Is the package-lock.json File?
challengeType: 19
dashedName: what-is-the-package-lock-json-file
---

# --description--

When you install dependencies with npm, especially in an existing project, npm looks at your `package.json` file to see which packages your project needs.

Each dependency in `package.json` includes a version number like this:

```bash
"lodash": "^4.17.21"
```

As you learned earlier, the **caret (^)** allows npm to install newer minor and patch versions like `4.18.0` or `4.17.22`. This flexibility is helpful, but it can also lead to problems.

If two developers run `npm install` at different times, npm might install slightly different versions of the same package. Even small differences can cause bugs or unexpected behavior.

The `package-lock.json` file solves this. It is created automatically the first time you run `npm install`, and it locks in the exact versions of every dependency that was installed—including all child dependencies, which are dependencies of dependencies.

This guarantees that everyone working on the project gets the same versions of packages every time.

Here's a simple `package.json` file with `lodash` as a dependency:

```bash
{
  "name": "package-lock-json",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

And here is the matching section from the `package-lock.json`:

```bash
"node_modules/lodash": {
  "version": "4.17.21",
  "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
  "integrity": "sha512-v2kDEe57..."
}
```

Notice the difference:

* In `package.json`, `lodash` is listed as `^4.17.21` — a flexible rule.
    
* In `package-lock.json`, `lodash` is pinned to version `4.17.21`.
    

No matter when someone runs `npm install`, they will get that exact version.

This way, no matter when someone runs `npm install`, they will get the exact same version of Lodash every time.

Note that this also applies to child dependencies, which are dependencies of any dependencies you use for your project.

For example, here's part of the `package-lock.json` file for a project using Express:

```json
{
  "name": "package-lock-json-file",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "package-lock-json-file",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "express": "^5.2.1"
      }
    },
    ...
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    ...others
  }
}
```

You can see that besides Express itself, there are other packages like `accepts`, `mime-types`, and `negotiator`. These are child dependencies, which are packages Express depends on internally to work.

Also notice that, while the `dependencies` in `node_modules/express` do use caret characters for ranges, but if you find the entry for each child dependency like `node_modules/etags`, they're pinned to a specific version.

In short, the `package-lock.json` file keeps everyone on the same page and ensures consistency across developer machines, CI servers, deployments, and other environments.

It is important to always commit your `package-lock.json` file with Git so your team shares the same setup. Also, do not edit the `package-lock.json` file manually—npm will update it automatically whenever dependencies change.

# --questions--

## --text--

How does the `package-lock.json` file solve version inconsistency issues between different environments?

## --answers--

By automatically updating all dependencies to their latest versions.

### --feedback--

Think about how it ensures everyone installs the same dependency versions.

---

By deleting old dependencies before installing new ones.

### --feedback--

Think about how it ensures everyone installs the same dependency versions.

---

By freezing the exact versions of dependencies that were installed.

---

By storing only the major version numbers of each dependency.

### --feedback--

Think about how it ensures everyone installs the same dependency versions.

## --video-solution--

3

## --text--

Why should you always commit your `package-lock.json` file to Git?

## --answers--

To make npm run faster on your machine.

### --feedback--

Think about keeping every developer's environment consistent.

---

To let your team share the same dependency versions and setup.

---

To automatically update outdated dependencies.

### --feedback--

Think about keeping every developer's environment consistent.

---

To reduce the size of your Git repository.

### --feedback--

Think about keeping every developer's environment consistent.

## --video-solution--

2

## --text--

What are child dependencies?

## --answers--

Packages that are installed but never used in the project.

### --feedback--

Think about dependencies that your main dependencies themselves depend on.

---

Packages that depend on your project's main files to run.

### --feedback--

Think about dependencies that your main dependencies themselves depend on.

---

Packages that are only used during development.

### --feedback--

Think about dependencies that your main dependencies themselves depend on.

---

Packages that your dependencies rely on internally to work.

## --video-solution--

4
