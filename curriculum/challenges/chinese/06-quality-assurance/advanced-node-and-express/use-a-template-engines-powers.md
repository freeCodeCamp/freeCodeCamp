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

 Pug 是关于使用空白和制表符来显示嵌套元素，并减少制作一个漂亮网站所需的代码量。 阅读 Pug 文档以获取更多关于使用和语法的信息。

 下面是一个例子：

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

查看在你的项目中的 pug 文件 `index.pug`，我们使用了变量 `title` 和 `message`。

为了从服务器传递这些信息，你需要给 `res.render` 的第二个参数传入一个对象，其中包含变量和对应的值。 例如，在设置索引视图的变量时传递此对象：`{title: 'Hello', message: 'Please login'}`。

看起来应该像这样：`res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});`。现在刷新页面，你应该看到那些值就像在 `index.pug` 文件中一样被渲染在页面上正确的位置。

完成上述要求后，你可以在下方提交你的页面链接。 如果你在运行时遇到错误，你可以查看<a href="https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871" target="_blank" rel="noopener noreferrer nofollow">已执行项目的当前进度</a>。

# --hints--

Pug 应正确地展示变量。

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
