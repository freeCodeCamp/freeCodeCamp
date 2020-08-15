---
id: 587d8247367417b2b2512c38
title: Mitigate the Risk of Clickjacking with helmet.frameguard()
challengeType: 2
isHidden: false
forumTopicId: 301582
localeTitle: 使用 helmet.frameguard() 降低点击劫持的风险
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
黑客可能会不经过你的允许，把你的页面嵌套在 <code><frame></code> 或者 <code><iframe></code> 标签里，用以实现“点击劫持”。点击劫持是一种视觉上的欺骗手段，让用户误以为自己在与所看到的网页交互。通过 iframe，黑客可以在你的页面上添加一个透明的“层”，然后把自己的恶意代码放在一个用户看不到的按钮中。这样一来，你网站的执行环境就被黑客设置成了他想要的效果。helmet 中间件可以设置 X-Frame-Options 这个头部。这样就能限制谁可以通过 iframe 引入你的页面了。 有三个模式可供配置: DENY, SAMEORIGIN, 和 ALLOW-FROM.
我们的应用不需要被 iframe 引用。
</section>

## Instructions
<section id='instructions'>
你可以调用 <code>helmet.frameguard()</code> 这个方法，然后传入配置对象  <code>{action: 'deny'}</code> 就可以了。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: helmet.frameguard() 中间件应该被正确加载
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.include(data.appStack, 'frameguard', 'helmet.frameguard() middleware is not mounted correctly'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '<code>helmet.frameguard()</code> 中的 <code>action</code> 属性的值应该为 "DENY"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/app-info').then(data => { assert.property(data.headers, 'x-frame-options'); assert.equal(data.headers['x-frame-options'], 'DENY');}, xhr => { throw new Error(xhr.responseText); })

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
