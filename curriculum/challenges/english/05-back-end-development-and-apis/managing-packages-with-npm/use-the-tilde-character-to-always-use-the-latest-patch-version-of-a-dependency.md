---
id: 587d7fb5367417b2b2512c02
title: Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

In the last challenge, you told npm to only include a specific version of a package. That’s a useful way to freeze your dependencies if you need to make sure that different parts of your project stay compatible with each other. But in most use cases, you don’t want to miss bug fixes since they often include important security patches and (hopefully) don’t break things in doing so.

To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (`~`) character. Here's an example of how to allow updates to any `1.3.x` version.

```json
"package": "~1.3.8"
```

# --instructions--

In the package.json file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version (`1.2.13`). But now, you want to allow the latest `1.2.x` version.

Use the tilde (`~`) character to prefix the version of `@freecodecamp/example` in your dependencies, and allow npm to update it to any new _patch_ release.

**Note:** The version numbers themselves should not be changed.

# --hints--

`"dependencies"` should include `"@freecodecamp/example"`.

```js
  $.get(code + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" does not include "@freecodecamp/example"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

`"@freecodecamp/example"` version should match `"~1.2.13"`.

```js
  $.get(code + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\~1\.2\.13/,
        'Wrong version of "@freecodecamp/example". It should be ~1.2.13'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

