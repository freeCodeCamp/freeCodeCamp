---
id: 58965611f9fc0f352b528e6c
title: Logging a User Out
challengeType: 2
videoUrl: ''
localeTitle: 记录用户
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。创建注销逻辑很容易。路径应该只是取消认证用户并重定向到主页而不是渲染任何视图。在护照中， <code>req.logout();</code>认证用户就像调用<code>req.logout();</code>一样简单<code>req.logout();</code>在重定向之前。 <pre> app.route（ &#39;/注销&#39;）
  .get（（req，res）=&gt; {
      req.logout（）;
      res.redirect（ &#39;/&#39;）;
  }）; </pre>您可能已经注意到我们也没有处理丢失的页面（404），在Node中处理此问题的常用方法是使用以下中间件。继续在所有其他路线之后添加： <pre> app.use（（req，res，next）=&gt; {
  res.status（404）
    .TYPE（ &#39;文本&#39;）
    .send（&#39;未找到&#39;）;
}）; </pre>当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 退出路线
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /req.logout/gi, 'You should be calling req.logout() in your /logout route'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 注销应该重定向到主页/
    testString: getUserInput => $.get(getUserInput('url')+ '/logout') .then(data => { assert.match(data, /Home page/gi, 'When a user logs out they should be redirected to the homepage'); }, xhr => { throw new Error(xhr.statusText); })

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
