---
id: bad87fee1348bd9aedc08845
title: 将字体图标添加到我们所有的按钮上
challengeType: 0
required:
  - link: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
    raw: true
---

# --description--

Font Awesome 是一个非常便利的图标库。这些图标都是被保存在 `.svg` 的文件格式中的矢量图。这些图标就和字体一样，不仅能通过像素单位指定他们的大小，它们也同样会继承父级 HTML 元素的字体大小。

# --instructions--

使用 Font Awesome 分别为你的 info 按钮添加 `info-circle` 图标，为你的 delete 按钮添加 `trash` 图标。

**记住：** 下述要求中的 `i` 元素可以用 `span` 元素代替。

# --hints--

添加一个 `<i class='fas fa-info-circle'></i>` 图标到你的 info 按钮元素中。

```js
assert(
  $('.btn-info > i').is('.fas.fa-info-circle') ||
    $('.btn-info > span').is('.fas.fa-info-circle')
);
```

添加一个 `<i class='fas fa-trash'></i>` 图标到你的 delete 按钮元素中。

```js
assert(
  $('.btn-danger > i').is('.fas.fa-trash') ||
    $('.btn-danger > span').is('.fas.fa-trash')
);
```

确保每一个 `i` 元素都有一个闭合标签并且 `<i class='fa fa-thumbs-up'></i>` 在 like 按钮元素中。

```js
assert(
  code.match(/<\/i>|<\/span/g) &&
    code.match(/<\/i|<\/span>/g).length > 2 &&
    ($('.btn-primary > i').is('.fas.fa-thumbs-up') ||
      $('.btn-primary > span').is('.fas.fa-thumbs-up'))
);
```

# --solutions--

