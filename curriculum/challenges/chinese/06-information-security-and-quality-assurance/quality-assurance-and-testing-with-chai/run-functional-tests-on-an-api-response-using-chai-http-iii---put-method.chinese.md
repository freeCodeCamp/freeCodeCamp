---
id: 587d824f367417b2b2512c5a
title: Run Functional Tests on an API Response using Chai-HTTP III - PUT method
challengeType: 2
isHidden: false
forumTopicId: 301590
localeTitle: 使用 Chai-HTTP III 的 PUT 方法运行功能测试
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
下一个例子我们将了解如何使用 request payload（body）发送数据。
我们准备测试发送到 '/travellers' 端点的 PUT 请求
JSON 对象结构如下：

```json
{
  "surname": [last name of a traveller of the past]
}
```

route 相应如下：
 
```json
{
  "name": [first name], "surname": [last name], "dates": [birth - death years]
}
```

更多细节请查看服务器代码。

</section>

## Instructions
<section id='instructions'>
发送 <br>

```json
{
  "surname": "Colombo"
}
```

替换 assert.fail()，使测试通过。
测试 1) status, 2) type, 3) body.name, 4) body.surname
请按照以上顺序书写断言，顺序错误会影响系统判定。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.status" 是否为 200'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.type" 是否为 "application/json"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.type'); assert.equal(data.assertions[1].args[1], '\'application/json\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.body.name" 是否为 "Cristoforo"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[2].method, 'equal'); assert.equal(data.assertions[2].args[0], 'res.body.name'); assert.equal(data.assertions[2].args[1], '\'Cristoforo\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.body.surname" 是否为 "Colombo"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[3].method, 'equal'); assert.equal(data.assertions[3].args[0], 'res.body.surname'); assert.equal(data.assertions[3].args[1], '\'Colombo\'');}, xhr => { throw new Error(xhr.responseText); })

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
