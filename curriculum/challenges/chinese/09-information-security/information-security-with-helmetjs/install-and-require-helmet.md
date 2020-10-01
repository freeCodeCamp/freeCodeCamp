---
id: 587d8247367417b2b2512c36
challengeType: 2
forumTopicId: 301581
title: 安装和引入 Helmet
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
Helmet 通过配置不同的 HTTP header 信息来使你的 Express 应用更加安全。
</section>

## Instructions
<section id='instructions'>

安装版本号为 `3.21.3` 的 Helmet，并引入它。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>package.json</code> 中应存在版本号为 <code>3.21.3</code> 的 <code>helmet</code> 依赖项'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert(packJson.dependencies.helmet === '3.21.3' ); }, xhr => { throw new Error(xhr.responseText); })

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
