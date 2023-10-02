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

Pug 是關於使用空白和製表符來顯示嵌套元素，並減少製作一個漂亮網站所需的代碼量。

以下面的 Pug 代碼爲例：

```pug
head
  script(type='text/javascript').
    if (foo) bar(1 + 5);
body
  if youAreUsingPug
      p You are amazing
    else
      p Get on it!
```

以上代碼生成以下 HTML：

```html
<head>
  <script type="text/javascript">
    if (foo) bar(1 + 5);
  </script>
</head>
<body>
  <p>You are amazing</p>
</body>
```

你的項目中的 `index.pug` 文件使用了變量 `title` 和 `message`。

爲了從服務器傳遞這些信息到 Pug 文件，你需要給 `res.render` 調用添加一個對象作爲第二個參數，其中包含變量和對應的值。 給 `title` 一個值爲 `Hello`，給 `message` 一個值爲 `Please log in`。

就像這樣：

```javascript
res.render('index', { title: 'Hello', message: 'Please log in' });
```

現在刷新你的頁面， 你應該看到這些值呈現在你的視圖中正確位置，即 `index.pug` 文件中！

完成上述要求後，請提交你的頁面鏈接。 如果你在運行時遇到錯誤，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#use-a-template-engines-power-2" target="_blank" rel="noopener noreferrer nofollow">查看已完成的項目</a>。

# --hints--

Pug 應正確地展示變量。

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /pug-variable("|')>Please log in/gi,
    'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
