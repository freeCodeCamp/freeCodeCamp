---
id: 587d7fb5367417b2b2512c03
title: 用脱字符（^）来使用依赖项的最新次要版本
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

和上一个挑战中我们学到的用波浪号来安装最新的修订版依赖一样，脱字符（`^`）也允许 npm 来安装功能更新。 它们的不同之处在于：脱字符允许次版本和修订版更新。

你当前的 `@freecodecamp/example` 版本应该是 `~1.2.13`，它允许 npm 安装到最新的 `1.2.x` 版本。 如果你使用插入符号（^）作为版本前缀，npm 将被允许更新到任何 `1.x.x` 版本。

```json
"package": "^1.3.8"
```

这会将依赖包更新到任意的 `1.x.x` 版本。

# --instructions--

使用插入符号（`^`）为依赖项中的 `@freecodecamp/example` 版本添加前缀，并允许 npm 将其更新到任何新的 MINOR 版本。

**注意：** 原来的版本号不用更改。

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

`"@freecodecamp/example"` 版本应匹配 `"^1.x.x"`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\^1\./,
        'Wrong version of "@freecodecamp/example". It should be ^1.2.13'
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
