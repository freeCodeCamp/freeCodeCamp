---
id: 587d7fb4367417b2b2512c00
title: 使用 npm 的外部包擴展項目
challengeType: 2
forumTopicId: 301527
dashedName: expand-your-project-with-external-packages-from-npm
---

# --description--

強大的依賴管理特性是使用包管理器的最大原因之一。 每當在新的計算機上開始一個項目時，無需手動，npm 會自動安裝所有的依賴項。 但是 npm 如何準確地知道項目需要哪些依賴呢？ 來看看 package.json 文件中 `dependencies` 這一部分。

在這部分，你的項目需要按照下面這種格式來存儲依賴包：

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

```

# --instructions--

將 `@freecodecamp/example` 包的版本 `1.1.0` 添加到 `package.json` 文件的 `dependencies` 字段。

**注意：** `@freecodecamp/example` 是一個用作學習工具的仿包。

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

`"@freecodecamp/example"` 版本應爲 `"1.1.0"`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^[\^\~]?1\.1\.0/,
        'Wrong version of "@freecodecamp/example" installed. It should be 1.1.0'
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
