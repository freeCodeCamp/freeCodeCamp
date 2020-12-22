---
id: bad87fee1348bd9aedd08845
title: 将字体图标添加到我们的按钮中
challengeType: 0
forumTopicId: 16638
required:
  - link: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
    raw: true
---

# --description--

Font Awesome 是一个非常便利的图标库。这些图标都是被保存在 `.svg` 的文件格式中的矢量图。这些图标就和字体一样，不仅能通过像素单位指定他们的大小，它们也同样会继承父级 HTML 元素的字体大小。

你可以将 Font Awesome 图标库添加至任何一个 app 中，方法很简单，只需要在你的 HTML 头部增加下列代码即可：

`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">`

不过在这里，我们已经预先为此页面添加了上述代码。

`i` 元素起初用于让其它元素具有斜体（italic）的效果，不过现在一般用于指代图标。你可以把 Font Awesome 中的 class 属性添加到 i 元素中，让它变成一个图标，比如：

`<i class="fas fa-info-circle"></i>`

记住 `span` 元素也一样可以用于指代图标。

# --instructions--

通过 Font Awesome 库增加一个 `thumbs-up` 图标到你的 like 按钮上，具体方法是给 i 元素添加 class 属性 `fas` 和 `fa-thumbs-up`；确保你的 "Like" 文本在图标旁边。

# --hints--

增加一个 class 为 `fas` 和 `fa-thumbs-up` 的 `i` 元素。

```js
assert($('i').is('.fas.fa-thumbs-up') || $('span').is('.fas.fa-thumbs-up'));
```

`fa-thumbs-up` 图标应该放在 Like 按钮中。

```js
assert(
  ($('i.fa-thumbs-up').parent().text().match(/Like/gi) &&
    $('.btn-primary > i').is('.fas.fa-thumbs-up')) ||
    ($('span.fa-thumbs-up').parent().text().match(/Like/gi) &&
      $('.btn-primary > span').is('.fas.fa-thumbs-up'))
);
```

将 `i` 元素放置在你的 `button` 元素中。

```js
assert(
  $('button').children('i').length > 0 ||
    $('button').children('span').length > 0
);
```

确保你的图标元素有一个闭合标签。

```js
assert(code.match(/<\/i>|<\/span>/g));
```

# --solutions--

