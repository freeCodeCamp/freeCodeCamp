---
id: 587d8249367417b2b2512c40
challengeType: 2
forumTopicId: 301575
title: 使用 helmet() 中间件来配置 Helmet
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。

<code>app.use(helmet())</code> 会自动加载除了 <code>noCache()</code> 和 <code>contentSecurityPolicy()</code> 以外的，上面所有提到的中间件。但如果需要的话，我们也可以手动加入这两个中间件。通过修改配置对象，你还可以启用或禁用其它中间件。
<h3>示例：</h3>

```js
app.use(helmet({
  frameguard: {         // 配置
    action: 'deny'
  },
  contentSecurityPolicy: {    // 启用并配置
    directives: {
      defaultSrc: ["self"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // 禁用
}))
```

为了方便教学和测试，我们会一个一个地引入中间件。但在实际项目中，通过使用父级的 <code>helmet()</code> 来实现是最清晰和简洁的。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 没有测试—这是一个介绍关卡
    testString: assert(true)

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
