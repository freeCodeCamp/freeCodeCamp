---
id: 587d7fb5367417b2b2512c03
title: 用脫字符（^）來使用依賴項的最新次要版本
challengeType: 2
forumTopicId: 301531
dashedName: use-the-caret-character-to-use-the-latest-minor-version-of-a-dependency
---

# --description--

和上一個挑戰中我們學到的用波浪號來安裝最新的修訂版依賴一樣，脫字符（`^`）也允許 npm 來安裝功能更新。 它們的不同之處在於：脫字符允許次版本和修訂版更新。

Your current version of `@freecodecamp/example` should be `~1.2.13` which allows npm to install to the latest `1.2.x` version. If you were to use the caret (^) as a version prefix instead, npm would be allowed to update to any `1.x.x` version.

```json
"package": "^1.3.8"
```

This would allow updates to any `1.x.x` version of the package.

# --instructions--

使用插入符號（`^`）爲依賴項中的 `@freecodecamp/example` 版本添加前綴，並允許 npm 將其更新到任何新的 MINOR 版本。

**注意：** 原來的版本號不用更改。

# --hints--

`"dependencies"` 應包括 `"@freecodecamp/example"`。

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

`"@freecodecamp/example"` 版本應匹配 `"^1.x.x"`。

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
