---
id: 587d824f367417b2b2512c5b
title: Run Functional Tests on an API Response using Chai-HTTP IV - PUT method
challengeType: 2

videoUrl: ''
localeTitle: Run Functional Tests on an API Response using Chai-HTTP IV - PUT method
---

## Description
<section id='description'>
注意，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
使用 assert.isNull() 或 assert.isNotNull() 通过测试。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 需通过全部测试
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: '你需要测试 "res.status" 是否为 200'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.assertions[0].method, "equal"); assert.equal(data.assertions[0].args[0], "res.status"); assert.equal(data.assertions[0].args[1], "200");}, xhr => { throw new Error(xhr.responseText); })'
  - text: '你需要测试 "res.type" 是否为 "application/json"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.assertions[1].method, "equal"); assert.equal(data.assertions[1].args[0], "res.type"); assert.equal(data.assertions[1].args[1], "\"application/json\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: '你需要测试 "res.body.name" 是否为 "Giovanni"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.assertions[2].method, "equal"); assert.equal(data.assertions[2].args[0], "res.body.name"); assert.equal(data.assertions[2].args[1], "\"Giovanni\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: '你需要测试 "res.body.surname" 是否为 "da Verrazzano"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=3").then(data => { assert.equal(data.assertions[3].method, "equal"); assert.equal(data.assertions[3].args[0], "res.body.surname"); assert.equal(data.assertions[3].args[1], "\"da Verrazzano\"");}, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              