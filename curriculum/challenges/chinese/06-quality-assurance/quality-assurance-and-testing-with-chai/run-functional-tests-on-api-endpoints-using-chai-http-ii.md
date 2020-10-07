---
id: 587d824f367417b2b2512c59
challengeType: 2
forumTopicId: 301592
title: 使用 Chai-HTTP 进行 API 功能测试 (2)
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>GitHub</a> 上克隆。

</section>

## Instructions
<section id='instructions'>
测试 status 和 <code>text.response</code>。替换 <code>assert.fail()</code> 使测试通过。
请把 name 的值添加到 query 结尾：<code>?name=&ltyour_name&gt</code>，后端将会返回 <code>'hello &ltyour_name&gt'</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应有未通过的测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=1').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: 你需要测试 'res.status' 是否为 200
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=1').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: 你需要测试 'res.text' 是否为 'hello Guest'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=1').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.text'); assert.match(data.assertions[1].args[1], /hello [\w\d_-]/);}, xhr => { throw new Error(xhr.responseText); })

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
