---
id: 5895f70bf9fc0f352b528e64
title: 使用模板引擎
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

模版引擎最大的特点之一就是在 HTML 页面展示之前，可以从服务端传变量到模版文件。

在 Pug 文件中，你可以用变量名来调用变量，比如写成 `#{variable_name}` 来实现行内调用，或像 `p=variable_name` 把元素与变量直接写在一起，这表示 p 元素的内容等价于这个变量。

Pug 是关于使用空白和制表符来显示嵌套元素，并减少制作一个漂亮网站所需的代码量。

以下面的 Pug 代码为例：

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

以上代码生成以下 HTML：

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

你的项目中的 `index.pug` 文件使用了变量 `title` 和 `message`。

为了从服务器传递这些信息到 Pug 文件，你需要给 `res.render` 调用添加一个对象作为第二个参数，其中包含变量和对应的值。 给 `title` 一个值为 `Hello`，给 `message` 一个值为 `Please log in`。

就像这样：

```javascript
res.render('index', { title: 'Hello', message: 'Please log in' });
```

现在刷新你的页面， 你应该看到这些值呈现在你的视图中正确位置，即 `index.pug` 文件中！

完成上述要求后，请提交你的页面链接。 如果你在运行时遇到错误，你可以<a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#use-a-template-engines-power-2" target="_blank" rel="noopener noreferrer nofollow">查看已完成的项目</a>。

# --hints--

Pug 应正确地展示变量。

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
