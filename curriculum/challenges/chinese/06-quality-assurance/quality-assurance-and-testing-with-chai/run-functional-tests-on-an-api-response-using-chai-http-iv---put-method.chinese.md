---
id: 587d824f367417b2b2512c5b
title: Run Functional Tests on an API Response using Chai-HTTP IV - PUT method
challengeType: 2
videoUrl: ''
localeTitle: 使用Chai-HTTP IV  -  PUT方法在API响应上运行功能测试
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a>克隆的。此练习与前面的练习类似。看看它的细节。发送{姓：&#39;da Verrazzano&#39;}。替换assert.fail（）并使测试通过。检查1）状态，2）类型，3）body.name，4）body.surname遵循上面的断言顺序，我们依赖它。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有测试都应该通过
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 您应该测试'res.status'为200
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: 你应该测试'res.type'是'application / json'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.type'); assert.equal(data.assertions[1].args[1], '\'application/json\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: 您应该测试'res.body.name'为'Giovanni'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[2].method, 'equal'); assert.equal(data.assertions[2].args[0], 'res.body.name'); assert.equal(data.assertions[2].args[1], '\'Giovanni\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: 你应该测试'res.body.surname'是'da Verrazzano'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[3].method, 'equal'); assert.equal(data.assertions[3].args[0], 'res.body.surname'); assert.equal(data.assertions[3].args[1], '\'da Verrazzano\'');}, xhr => { throw new Error(xhr.responseText); })

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
