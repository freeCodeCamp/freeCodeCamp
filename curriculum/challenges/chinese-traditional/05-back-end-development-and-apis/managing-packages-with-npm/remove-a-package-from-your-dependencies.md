---
id: 587d7fb5367417b2b2512c04
title: 從依賴項中刪除依賴包
challengeType: 2
forumTopicId: 301530
dashedName: remove-a-package-from-your-dependencies
---

# --description--

已經嘗試過一些通過項目 package.json 文件中依賴項管理依賴的方式了， 也添加了一些外部的依賴包到項目中，甚至通過一些特殊的字符比如波浪號或者脫字符來告訴 npm 想要的版本類型。

但是，如果想要刪除不再需要的依賴包，該怎麼辦呢？ 可能已經猜到了——只需要從依賴項中刪除相應的鍵值對就行了。

同樣的方法也適用於刪除 package.json 中的其他字段。

# --instructions--

從依賴項中刪除 `@freecodecamp/example` 包。

**注意：**刪除依賴包後，確保逗號數量正確。

# --hints--

`"dependencies"` 不應包含 `"@freecodecamp/example"`。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.notProperty(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" still includes "@freecodecamp/example"'
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
