---
id: 5895f70bf9fc0f352b528e64
title: Use a Template Engine's Powers
challengeType: 2
videoUrl: ''
localeTitle: 使用模板引擎的权力
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。使用模板引擎的最大特点之一是能够将变量从服务器传递到模板文件，然后再将其呈现为HTML。在您的Pug文件中，您将通过引用变量名称作为<code>#{variable_name}</code>与元素上的其他文本内联，或者在元素上使用相等的一侧而不使用空格（例如<code>p= variable_name</code>来设置该<code>p= variable_name</code> 。 p元素文本等于变量。我们强烈建议在他们的Githubs自述文件中<a href="https://github.com/pugjs/pug">查看</a> Pug的语法和结构。 Pug就是使用空格和制表符来显示嵌套元素，并减少制作漂亮网站所需的代码量。查看项目中包含的我们的pug文件&#39;index.pug&#39;，我们使用变量<em>title</em>和<em>message</em>要从我们的服务器单独传递它们，您需要将一个对象作为第二个参数添加到<em>res.render中</em> ，并带有变量和他们的价值。例如，传递此对象以设置索引视图的变量： <code>{title: &#39;Hello&#39;, message: &#39;Please login&#39;</code>它应该看起来像： <code>res.render(process.cwd() + &#39;/views/pug/index&#39;, {title: &#39;Hello&#39;, message: &#39;Please login&#39;});</code>现在刷新页面，您应该在视图中呈现的那些值在index.pug文件中列出的正确位置！当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 帕格渲染变量正确
    testString: getUserInput => $.get(getUserInput('url')+ '/') .then(data => { assert.match(data, /pug-variable("|')>Please login/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
