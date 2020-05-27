---
id: 587d8249367417b2b2512c40
title: Configure Helmet Using the ‘parent’ helmet() Middleware
challengeType: 2
isHidden: false
forumTopicId: 301575
localeTitle: 使用 helmet() 中间件来配置 Helmet
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
app.use(helmet()) 会自动加载除 noCache() 和 contentSecurityPolicy() 外上面所有提到的中间件，但有需要的话这两个中间件也被启用。你也可以使用配置对象来一个个地禁用或者配置中间件。
<h3>例子：</h3>

```js
app.use(helmet({
  frameguard: {         // configure
    action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["self"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // disable
}))
```

为了教学和方便测试我们是一个个地讲解中间件，但通过使用 ‘parent’ helmet() 是最清晰和简洁的，特别是在真实的项目中。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 没有测试 - 这是一个介绍关卡
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
