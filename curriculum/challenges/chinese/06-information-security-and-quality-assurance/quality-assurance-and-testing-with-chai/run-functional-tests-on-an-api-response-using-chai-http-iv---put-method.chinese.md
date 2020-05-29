---
id: 587d824f367417b2b2512c5b
title: Run Functional Tests on an API Response using Chai-HTTP IV - PUT method
challengeType: 2
isHidden: false
forumTopicId: 301591
localeTitle: 使用 Chai-HTTP IV 的 PUT 方法运行功能测试
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
这个练习与上一个类似，我们详细看看。

</section>

## Instructions
<section id='instructions'>
发送 

```json
{
  "surname": "da Verrazzano"
}
```

替换 assert.fail()，使测试通过。
测试 for 1) status, 2) type, 3) body.name, 4) body.surname
请按照以上顺序书写断言，顺序错误会影响系统判定。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.status" 是否为 200'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.type" 是否为 "application/json"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.type'); assert.equal(data.assertions[1].args[1], '\'application/json\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.body.name" 是否为 "Giovanni"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[2].method, 'equal'); assert.equal(data.assertions[2].args[0], 'res.body.name'); assert.equal(data.assertions[2].args[1], '\'Giovanni\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.body.surname" 是否为 "da Verrazzano"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[3].method, 'equal'); assert.equal(data.assertions[3].args[0], 'res.body.surname'); assert.equal(data.assertions[3].args[1], '\'da Verrazzano\'');}, xhr => { throw new Error(xhr.responseText); })

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
