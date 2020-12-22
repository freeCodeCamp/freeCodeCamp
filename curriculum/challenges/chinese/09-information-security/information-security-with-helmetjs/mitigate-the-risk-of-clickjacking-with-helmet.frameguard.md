---
id: 587d8247367417b2b2512c38
title: 使用 helmet.frameguard() 降低点击劫持的风险
challengeType: 2
forumTopicId: 301582
---

# --description--

请注意，本项目在 [这个 Repl.it 项目](https://repl.it/github/freeCodeCamp/boilerplate-infosec) 的基础上进行开发。你也可以从 [GitHub](https://github.com/freeCodeCamp/boilerplate-infosec/) 上克隆。

黑客可能会不经过你的允许，把你的页面嵌套在 \``或者`</code> 标签里，用以实现“点击劫持”。点击劫持是一种视觉上的欺骗手段，让用户误以为自己在与所看到的网页交互。通过 iframe，黑客可以在你的页面上添加一个透明的“层”，然后把自己的恶意代码放在一个用户看不到的按钮中。这样一来，你网站的执行环境就被黑客设置成了他想要的效果。helmet 中间件可以设置 header 中的 X-Frame-Options 字段，这样我们就能设置哪些人才可以通过 frame/iframe 引入我们的页面了。这个配置有三个选项：DENY、SAMEORIGIN、ALLOW-FROM。 在这个挑战中，我们的应用不需要被 iframe 引用。 </section>\`

# --instructions--

请调用 `helmet.frameguard()`，并传入配置对象 `{action: 'deny'}`。

# --hints--

应正确加载 helmet.frameguard() 中间件

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(
        data.appStack,
        'frameguard',
        'helmet.frameguard() middleware is not mounted correctly'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

应将 helmet.frameguard() 中的 action 值设置为 'DENY'

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.property(data.headers, 'x-frame-options');
      assert.equal(data.headers['x-frame-options'], 'DENY');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

