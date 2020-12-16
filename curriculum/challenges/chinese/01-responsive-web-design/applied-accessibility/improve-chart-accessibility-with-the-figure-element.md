---
id: 587d778a367417b2b2512aa5
title: 使用 figure 元素提高图表的可访问性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
---

# --description--

HTML5 引入了`figure`标签以及与之相关的`figcaption`标签。它们一起用于展示可视化信息（如：图片、图表）及其标题。这样通过语义化对内容进行分组并配以用于解释`figure`的文字，可以极大地提升内容的可访问性。

对于图表之类的可视化数据，标题可以为屏幕阅读器用户提供简要的说明。但是这里有一个难点，如何处理那些超出屏幕可视范围（使用 CSS）的表格版本的图表数据，以使屏幕阅读器用户也可以获取信息。

举个例子——注意`figcaption`包含在`figure`标签中，并且可以与其他标签组合使用：

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```

# --instructions--

Camper Cat 正在努力创建一张条形图，用来显示每周用于隐形、战斗、武器训练的时间。请帮助完善他的页面，将他的用于呈现图表的`div`标签修改为`figure`标签，用于呈现图表标题的`p`标签改为`figcaption`标签。

# --hints--

你的代码应该有 1 个`figure`标签。

```js
assert($('figure').length == 1);
```

你的代码应该有 1 个`figcaption`标签。

```js
assert($('figcaption').length == 1);
```

你的代码不应有`div`标签。

```js
assert($('div').length == 0);
```

你的代码不应有`p`标签。

```js
assert($('p').length == 0);
```

`figcaption`应该为`figure`的子标签。

```js
assert($('figure').children('figcaption').length == 1);
```

请确保你的`figure`标签是闭合的。

```js
assert(
  code.match(/<\/figure>/g) &&
    code.match(/<\/figure>/g).length === code.match(/<figure>/g).length
);
```

# --solutions--

