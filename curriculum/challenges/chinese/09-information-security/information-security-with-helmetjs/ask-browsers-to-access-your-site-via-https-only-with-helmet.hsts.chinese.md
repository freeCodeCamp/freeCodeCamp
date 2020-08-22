---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
videoUrl: ''
localeTitle: 要求浏览器通过HTTPS访问您的站点仅限于使用helmet.hsts（）
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a>克隆的。 HTTP严格传输安全（HSTS）是一种Web安全策略，可帮助保护网站免受协议降级攻击和cookie劫持。如果您的网站可以通过HTTPS访问，您可以要求用户的浏览器避免使用不安全的HTTP。通过设置标头Strict-Transport-Security，您可以告诉浏览器在指定的时间内对将来的请求使用HTTPS。这将适用于初始请求之后的请求。配置helmet.hsts（）以在接下来的90天内使用HTTPS。传递配置对象{maxAge：timeInSeconds，force：true}。 Glitch已经启用了hsts。要覆盖其设置，您需要在配置对象中将字段“force”设置为true。在检查Glitch标头进行测试后，我们将拦截并恢复Glitch标头。注意：在自定义网站上配置HTTPS需要获取域和SSL / TSL证书。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.hsts（）中间件应正确安装
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'hsts'); assert.property(data.headers, 'strict-transport-security'); }, xhr => { throw new Error(xhr.responseText); })
  - text: maxAge应该等于7776000毫秒（90天）
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.match(data.headers['strict-transport-security'], /^max-age=7776000;?/); }, xhr => { throw new Error(xhr.responseText); })

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
