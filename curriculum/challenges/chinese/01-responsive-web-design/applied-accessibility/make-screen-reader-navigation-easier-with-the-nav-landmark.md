---
id: 587d7788367417b2b2512aa2
title: 使用 nav 元素使屏幕阅读器更容易导航
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
---

# --description--

`nav`也是一个具有语义化特性的 HTML5 标签，用于呈现页面中的主导航链接。它可以使屏幕阅读器快速识别页面中的导航信息。

对于在多个页面底部出现的站点链接，不需要使用`nav`，用`footer`（在下个挑战中介绍）会更好。

# --instructions--

Camper Cat 在他的忍者训练页面顶端使用了很多导航链接，但把它们写在了`div`中。请将`div`更改为`nav`标签，以提升页面的可访问性。

# --hints--

你的代码应该有 1 个`nav`标签。

```js
assert($('nav').length == 1);
```

你的`nav`标签应该包含`ul`标签及其列表项。

```js
assert($('nav').children('ul').length == 1);
```

你的代码不应包含`div`标签。

```js
assert($('div').length == 0);
```

确保你的`nav`标签是闭合的。

```js
assert(
  code.match(/<\/nav>/g) &&
    code.match(/<\/nav>/g).length === code.match(/<nav>/g).length
);
```

# --solutions--

