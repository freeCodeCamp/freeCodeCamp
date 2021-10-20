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

建议大家在 [Pug 的 README](https://github.com/pugjs/pug) 里看看它的语法和用法，这样你写出的代码会相对简练。 另外要注意，Pug 使用缩进来表示嵌套的代码块。

在 pug 的 'index.pug' 文件中，我们使用了 *title* 和 *message* 两个变量。

为了从服务器传递这些信息，你需要给 *res.render* 的第二个参数传入一个对象，其中包含变量对应的值。 比如，如果你想传递对象 `{title: 'Hello', message: 'Please login'}` 到你的主页，

看起来应该像这样：`res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});`。现在刷新页面，你应该看到那些值就像在 index.pug 文件中一样被渲染在页面上正确的位置。

完成上述要求后，请提交你的页面链接。 如果你遇到了问题，可以参考 [这里](https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871) 的答案。

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
