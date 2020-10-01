---
id: 587d824f367417b2b2512c5b
challengeType: 2
forumTopicId: 301591
title: 使用 Chai-HTTP 测试 API 响应结果 (4)—PUT 方法
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。
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
分别测试 1) <code>status</code>，2) <code>type</code>，3) <code>body.name</code>，4) <code>body.surname</code>
请按照以上顺序书写断言，顺序错误会影响此挑战的判定。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 你需要测试 'res.status' 是否为 200
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: 你需要测试 'res.type' 是否为 'application/json'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.type'); assert.match(data.assertions[1].args[1], /('|")application\/json\1/);}, xhr => { throw new Error(xhr.responseText); })
  - text: 你需要测试 'res.body.name' 是否为 'Giovanni'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[2].method, 'equal'); assert.equal(data.assertions[2].args[0], 'res.body.name'); assert.match(data.assertions[2].args[1], /('|")Giovanni\1/);}, xhr => { throw new Error(xhr.responseText); })
  - text: 你需要测试 'res.body.surname' 是否为 'da Verrazzano'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[3].method, 'equal'); assert.equal(data.assertions[3].args[0], 'res.body.surname'); assert.match(data.assertions[3].args[1], /('|")da Verrazzano\1/);}, xhr => { throw new Error(xhr.responseText); })

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
