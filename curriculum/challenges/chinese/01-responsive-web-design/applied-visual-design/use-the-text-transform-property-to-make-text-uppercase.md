---
id: 587d781c367417b2b2512ac0
title: 使用 text-transform 属性给文本添加大写效果
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZQSP'
forumTopicId: 301081
---

# --description--

CSS 里面的 `text-transform` 属性来改变英文中字母的大小写。它通常用来统一页面里英文的显示，且无需直接改变 HTML 元素中的文本。

下面的表格展示了`text-transform` 的不同值对文字 “Transform me” 的影响。

<table class='table table-striped'><thead><tr><th>Value</th><th>Result</th></tr></thead><tbody><tr><td><code>lowercase</code></td><td>"transform me"</td></tr><tr><td><code>uppercase</code></td><td>"TRANSFORM ME"</td></tr><tr><td><code>capitalize</code></td><td>"Transform Me"</td></tr><tr><td><code>initial</code></td><td>使用默认值</td></tr><tr><td><code>inherit</code></td><td>使用父元素的 <code>text-transform</code> 值。</td></tr><tr><td><code>none</code></td><td><strong>Default:</strong>不改变文字。</td></tr></tbody></table>

# --instructions--

使用 `text-transform` 属性把 `h4` 内的英文的所有字母变成大写。

# --hints--

`h4` 内的英文的所有字母应该为大写。

```js
assert($('h4').css('text-transform') === 'uppercase');
```

`h4` 内的原文不能被改变。

```js
assert($('h4').text() !== $('h4').text().toUpperCase());
```

# --solutions--

