---
id: 5895f70bf9fc0f352b528e64
challengeType: 2
forumTopicId: 301567
title: 使用模板引擎
---

## Description
<section id='description'>

模版引擎最大的特点之一就是在 HTML 页面展示之前，可以从服务端传变量到模版文件。

在 Pug 文件中，你可以用变量名来调用变量，比如写成 <code>#{variable_name}</code> 来实现行内调用，或像 <code>p= variable_name</code> 把元素与变量直接写在一起，这表示 p 元素的内容等价于这个变量。

建议大家在 <a href='https://github.com/pugjs/pug' target='_blank'>Pug 的 README</a> 里看看它的语法和用法，这样你写出的代码会相对简练。另外要注意，Pug 使用缩进来表示嵌套的代码块。

在 pug 的 'index.pug' 文件中，我们使用了 <em>title</em> 和 <em>message</em> 两个变量。

为了从服务器传递这些信息，你需要给 <em>res.render</em> 的第二个参数传入一个对象，其中包含变量对应的值。比如，如果你想传递对象 <code>{title: 'Hello', message: 'Please login'</code> 到你的主页，那么应该这样写：

<code>res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});</code>

刷新页面，如果页面中数据显示正确，你就可以提交你的页面了。

完成上述要求后，你可以在下方提交你的页面链接。如果你遇到了问题，可以参考 <a href='https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871' target='_blank'>这里</a> 的答案。

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Pug 应正确地展示变量。
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /pug-variable("|')>Please login/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
