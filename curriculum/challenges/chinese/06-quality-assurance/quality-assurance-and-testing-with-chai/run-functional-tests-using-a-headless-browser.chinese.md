---
id: 587d824f367417b2b2512c5c
title: Run Functional Tests using a Headless Browser
challengeType: 2
videoUrl: ''
localeTitle: 使用无头浏览器运行功能测试
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。在接下来的挑战中，我们将使用名为“Headless Browser”的设备模拟人与页面的交互。无头浏览器是没有图形用户界面的Web浏览器。这些工具对于测试网页特别有用，因为它们能够以与浏览器相同的方式呈现和理解HTML，CSS和JavaScript。对于这些挑战，我们使用的是Zombie.JS。它是一个完全基于JS的轻量级浏览器，不依赖于安装其他二进制文件。此功能使其可用于Glitch等环境。还有许多其他（更强大的）选项。 <br>查看练习方向代码中的示例按照断言顺序，我们依赖它。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 断言无头浏览器请求成功
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[0].method, 'browser.success'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 断言元素“span＃name”中的文本是“Cristoforo”
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[1].method, 'browser.text'); assert.equal(data.assertions[1].args[0], '\'span#name\''); assert.equal(data.assertions[1].args[1], '\'Cristoforo\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: 断言元素“span＃surname”中的文本是“Colombo”
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[2].method, 'browser.text'); assert.equal(data.assertions[2].args[0], '\'span#surname\''); assert.equal(data.assertions[2].args[1], '\'Colombo\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: '断言元素“span #dalendar”存在且其计数为1'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[3].method, 'browser.element'); assert.equal(data.assertions[3].args[0], '\'span#dates\''); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })

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
