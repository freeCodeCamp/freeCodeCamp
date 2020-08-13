---
id: 587d824f367417b2b2512c5a
title: Run Functional Tests on an API Response using Chai-HTTP III - PUT method
challengeType: 2
videoUrl: ''
localeTitle: 使用Chai-HTTP III-PUT方法在API响应上运行功能测试
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。在下一个示例中，我们将看到如何在请求有效负载（正文）中发送数据。我们将测试PUT请求。 &#39;/ travelers&#39;端点接受一个采用结构的JSON对象：{surname：[过去的旅行者的姓氏]}，路由响应：{name：[first name]，surname：[last name]，dates ：[birth  -  death years]}查看服务器代码以获取更多详细信息。发送{姓：&#39;科伦坡&#39;}。替换assert.fail（）并使测试通过。检查1）状态，2）类型，3）body.name，4）body.surname遵循上面的断言顺序，我们依赖它。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 您应该测试'res.status'为200
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: 你应该测试'res.type'是'application / json'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.type'); assert.equal(data.assertions[1].args[1], '\'application/json\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: 您应该测试'res.body.name'为'Cristoforo'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[2].method, 'equal'); assert.equal(data.assertions[2].args[0], 'res.body.name'); assert.equal(data.assertions[2].args[1], '\'Cristoforo\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: 你应该测试'res.body.surname'是'科伦坡'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[3].method, 'equal'); assert.equal(data.assertions[3].args[0], 'res.body.surname'); assert.equal(data.assertions[3].args[1], '\'Colombo\'');}, xhr => { throw new Error(xhr.responseText); })

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
