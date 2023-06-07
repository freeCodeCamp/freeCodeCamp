---
id: 587d7fb3367417b2b2512bfc
title: 給 package.json 添加描述
challengeType: 2
forumTopicId: 301522
dashedName: add-a-description-to-your-package-json
---

# --description--

一個好的 package.json 文件的下一部分就是 `description` 字段——簡短精悍的的項目描述。

如果有一天你打算向 npm 發佈一個軟件包，當用戶決定是否安裝你的軟件包時，這個字符串就能向用戶表明你的想法。 然而，這並不是使用描述的唯一場景：它也是一種很好的總結項目的方式， 可以幫助其它開發者、維護者甚至自己在未來快速地瞭解項目，對於任何一個 Node.js 項目來說都非常重要。

無論項目計劃是什麼，都建議使用描述。 類似這樣：

```json
"description": "A project that does something awesome",
```

# --instructions--

給項目的 package.json 文件添加描述（`description`）。

**注意：** 請記住使用雙引號（"）包裹字段名並且使用逗號（,）分隔字段。

# --hints--

package.json 應該包含一個有效的“description”鍵

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.description, '"description" is missing');
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
