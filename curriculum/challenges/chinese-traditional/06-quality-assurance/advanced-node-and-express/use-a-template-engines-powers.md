---
id: 5895f70bf9fc0f352b528e64
title: 使用模板引擎
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

模版引擎最大的特點之一就是在 HTML 頁面展示之前，可以從服務端傳變量到模版文件。

在 Pug 文件中，你可以用變量名來調用變量，比如寫成 `#{variable_name}` 來實現行內調用，或像 `p=variable_name` 把元素與變量直接寫在一起，這表示 p 元素的內容等價於這個變量。

建議大家在 [Pug 的 README](https://github.com/pugjs/pug) 裏看看它的語法和用法，這樣你寫出的代碼會相對簡練。 另外要注意，Pug 使用縮進來表示嵌套的代碼塊。

在 pug 的 'index.pug' 文件中，我們使用了 *title* 和 *message* 兩個變量。

爲了從服務器傳遞這些信息，你需要給 *res.render* 的第二個參數傳入一個對象，其中包含變量對應的值。 比如，如果你想傳遞對象 `{title: 'Hello', message: 'Please login'}` 到你的主頁，

看起來應該像這樣：`res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});`。現在刷新頁面，你應該看到那些值就像在 index.pug 文件中一樣被渲染在頁面上正確的位置。

完成上述要求後，請提交你的頁面鏈接。 如果你遇到了問題，可以參考 [這裏](https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871) 的答案。

# --hints--

Pug 應正確地展示變量。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-variable("|')>Please login/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
