---
id: 587d824f367417b2b2512c59
title: Run Functional Tests on API Endpoints using Chai-HTTP II
challengeType: 2
isHidden: false
forumTopicId: 301592
localeTitle: 使用 Chai-HTTP II 在 API 端上运行功能测试
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。

</section>

## Instructions
<section id='instructions'>
替换 assert.fail()。测试 status 和 text.response，使测试通过。
在 query 中传入你的名字 ?name=<your_name>，端点会返回 'hello <your_name>'。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=1').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.status" == 200'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=1').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: '你需要测试 "res.text" == "hello Guest"'
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
