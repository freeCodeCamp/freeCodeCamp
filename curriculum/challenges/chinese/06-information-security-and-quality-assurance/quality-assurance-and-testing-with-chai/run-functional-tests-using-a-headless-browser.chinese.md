---
id: 587d824f367417b2b2512c5c
title: Run Functional Tests using a Headless Browser
challengeType: 2
isHidden: false
forumTopicId: 301595
localeTitle: 使用 无头浏览器 运行功能测试
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
下一项挑战，我们将会使用无头浏览器模拟人机交互。
无头浏览器是一种没有图形用户界面的浏览器。这类工具对网页调试特别有效，因为它们可以跟普通浏览器一样理解和渲染 HTML，CSS 和 JavaScript。

</section>

## Instructions
<section id='instructions'>
这次挑战我们使用 Zombie.JS。它是一款完全基于 JS 的轻量级浏览器，不需要安装其他二进制文件。这个特性使它可以轻松在如 Glitch 的环境下使用。还有很多（更强大的）选项。<br>
看看此挑战的给出的代码指引。请按顺序书写断言，顺序错误会影响系统判定。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 断言无头浏览器请求成功
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[0].method, 'browser.success'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '断言 "span#name" 元素里的文字为 "Cristoforo"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[1].method, 'browser.text'); assert.equal(data.assertions[1].args[0], '\'span#name\''); assert.equal(data.assertions[1].args[1], '\'Cristoforo\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: '断言 "span#surname" 元素里的文字为 "Colombo"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[2].method, 'browser.text'); assert.equal(data.assertions[2].args[0], '\'span#surname\''); assert.equal(data.assertions[2].args[1], '\'Colombo\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: '断言 "span#dates" 的存在，并且计数为 1'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[3].method, 'browser.element'); assert.equal(data.assertions[3].args[0], '\'span#dates\''); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })

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
