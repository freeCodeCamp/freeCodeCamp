---
id: 587d824e367417b2b2512c58
title: Run Functional Tests on API Endpoints using Chai-HTTP
challengeType: 2
videoUrl: ''
localeTitle: 使用Chai-HTTP在API端点上运行功能测试
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。替换assert.fail（）。测试状态和text.response。让测试通过。不要在查询中发送名称，端点会以“hello Guest”响应。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 你应该测试'res.status'== 200
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: 你应该测试'res.text'=='你好客人'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.text'); assert.equal(data.assertions[1].args[1], '\'hello Guest\'');}, xhr => { throw new Error(xhr.responseText); })

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
