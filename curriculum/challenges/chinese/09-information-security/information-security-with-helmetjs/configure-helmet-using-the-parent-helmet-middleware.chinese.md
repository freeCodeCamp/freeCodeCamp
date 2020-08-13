---
id: 587d8249367417b2b2512c40
title: Configure Helmet Using the ‘parent’ helmet() Middleware
challengeType: 2
videoUrl: ''
localeTitle: 配置头盔使用“父”头盔（）中间件
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。 app.use（helmet（））将自动包含上面介绍的所有中间件，noCache（）和contentSecurityPolicy（）除外，但如果需要，可以启用这些中间件。您还可以使用配置对象单独禁用或配置任何其他中间件。 //示例<code>app.use(helmet({</code> <code>frameguard: { // configure</code> <code>action: &#39;deny&#39;</code> <code>},</code> <code>contentSecurityPolicy: { // enable and configure</code> <code>directives: {</code> <code>defaultSrc: [&quot;self&quot;],</code> <code>styleSrc: [&#39;style.com&#39;],</code> <code>}</code> <code>},</code> <code>dnsPrefetchControl: false // disable</code> <code>}))</code>我们分别为教学目的引入了每个中间件，并且易于测试。使用“父”头盔（）中间件对于真实项目来说是最简单，更清洁的。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 没有测试 - 这是一个描述性的挑战
    testString: assert(true)

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
