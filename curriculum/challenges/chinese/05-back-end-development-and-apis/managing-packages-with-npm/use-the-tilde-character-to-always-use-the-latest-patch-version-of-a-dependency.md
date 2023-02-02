---
id: 587d7fb5367417b2b2512c02
title: 用波浪号维持依赖项的最新修订号
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

在上一个挑战中，npm 只包含特定版本的依赖包。 如果想让项目各个部分保持相互兼容，锁定依赖包版本是一个行之有效的办法。 但是大多数情况下，我们并不希望错过依赖项的问题修复，因为它们通常包含重要的安全补丁，而且它们理论上也会兼容我们既有的代码。

可以在依赖项的版本号前加一个波浪号（`~`），以让 npm 依赖项更新到最新的修订版。 Here's an example of how to allow updates to any `1.3.x` version.

```json
"package": "~1.3.8"
```

# --instructions--

In the package.json file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version (`1.2.13`). But now, you want to allow the latest `1.2.x` version.

在依赖项中使用波浪号（`~`）字符作为 `@freecodecamp/example` 版本的前缀，并允许 npm 将其更新为任何新的*补丁*发布。

**注意：**原来的版本号不用更改。

# --hints--

`"dependencies"` 应包括 `"@freecodecamp/example"`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
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

`"@freecodecamp/example"` 版本应匹配 `"~1.2.13"`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
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

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
