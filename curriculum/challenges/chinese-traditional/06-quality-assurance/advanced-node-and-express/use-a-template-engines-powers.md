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

 Pug 是關於使用空白和製表符來顯示嵌套元素，並減少製作一個漂亮網站所需的代碼量。 閱讀 Pug 文檔以獲取更多關於使用和語法的信息。

 下面是一個例子：

 ```html
 <!--Typing this using Pug-->
 head
    script(type='text/javascript').
      if (foo) bar(1 + 5);
  body
    if youAreUsingPug
        p You are amazing
      else
        p Get on it!

<!--will lead to creating this code-->
  <head>
    <script type="text/javascript">
      if (foo) bar(1 + 5);
    </script>
  </head>
  <body>
    <p>You are amazing</p>
  </body>
  ```

查看在你的項目中的 pug 文件 `index.pug`，我們使用了變量 `title` 和 `message`。

爲了從服務器傳遞這些信息，你需要給 `res.render` 的第二個參數傳入一個對象，其中包含變量和對應的值。 例如，在設置索引視圖的變量時傳遞此對象：`{title: 'Hello', message: 'Please login'}`。

看起來應該像這樣：`res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});`。現在刷新頁面，你應該看到那些值就像在 `index.pug` 文件中一樣被渲染在頁面上正確的位置。

完成上述要求後，你可以在下方提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以查看<a href="https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871" target="_blank" rel="noopener noreferrer nofollow">已執行項目的當前進度</a>。

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
