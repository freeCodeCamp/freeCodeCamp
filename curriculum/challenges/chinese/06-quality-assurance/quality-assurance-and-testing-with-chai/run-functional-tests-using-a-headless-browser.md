---
id: 587d824f367417b2b2512c5c
challengeType: 2
forumTopicId: 301595
title: 使用 headless 浏览器运行功能测试 (1)
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。
在这一项挑战中，我们将会使用 Headless Browser（无头浏览器）模拟人机交互。
<a href="https://en.wikipedia.org/wiki/Headless_browser">无头浏览器</a> 是一种没有图形用户界面的浏览器。这类工具对网页调试特别有效，因为它们可以跟普通浏览器一样理解和渲染 HTML，CSS 和 JavaScript。

</section>

## Instructions
<section id='instructions'>
在这个挑战中，我们将使用 Zombie.JS。它是一款完全基于 JS 的轻量级浏览器，不需要安装其他二进制文件。这个特性让它轻松地在如 Repl.it 的环境下使用。除此之外，还有很多（更强大的）Headless Browser 选项。<br>
请阅读此挑战给出的代码指引，按顺序书写断言。顺序错误会影响此挑战的判定。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Headless browser 应成功执行请求
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[0].method, 'browser.success'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 元素 'span#name' 中的文字应为 'Cristoforo'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[1].method, 'browser.text'); assert.match(data.assertions[1].args[0], /('|")span#name\1/); assert.match(data.assertions[1].args[1], /('|")Cristoforo\1/);}, xhr => { throw new Error(xhr.responseText); })
  - text: 元素 'span#surname' 中的文字应为 'Colombo'.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[2].method, 'browser.text'); assert.match(data.assertions[2].args[0], /('|")span#surname\1/); assert.match(data.assertions[2].args[1], /('|")Colombo\1/);}, xhr => { throw new Error(xhr.responseText); })
  - text: 元素 'span#dates' 应存在，并且只有一个
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[3].method, 'browser.element'); assert.match(data.assertions[3].args[0], /('|")span#dates\1/); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })

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
