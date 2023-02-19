---
id: 587d7fb5367417b2b2512c02
title: 用波浪號維持依賴項的最新修訂號
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

在上一個挑戰中，npm 只包含特定版本的依賴包。 如果想讓項目各個部分保持相互兼容，鎖定依賴包版本是一個行之有效的辦法。 但是大多數情況下，我們並不希望錯過依賴項的問題修復，因爲它們通常包含重要的安全補丁，而且它們理論上也會兼容我們既有的代碼。

可以在依賴項的版本號前加一個波浪號（`~`），以讓 npm 依賴項更新到最新的修訂版。 這裏有一個允許升級到任何 `1.3.x` 的例子。

```json
"package": "~1.3.8"
```

# --instructions--

在 package.json 文件中，你當前關於 npm 如何升級 `@freecodecamp/example` 的規則是使用特定版本（`1.2.13`）。 但現在，你想允許最新的 `1.2.x` 版本。

在依賴項中使用波浪號（`~`）字符作爲 `@freecodecamp/example` 版本的前綴，並允許 npm 將其更新爲任何新的*補丁*發佈。

**注意：**原來的版本號不用更改。

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

`"@freecodecamp/example"` 版本應匹配 `"~1.2.13"`。

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
