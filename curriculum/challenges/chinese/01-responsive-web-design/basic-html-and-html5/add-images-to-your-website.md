---
id: bad87fee1348bd9aedf08812
title: 给网站添加图片
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

你可以使用 `img` 元素来为你的网站添加图片，其中 `src` 属性指向图片的地址。

例如：

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg">
```

注意：`img` 元素是没有结束标签的。

所有的 `img` 元素 **必须** 有 `alt` 属性。 `alt` 的属性值有两个作用，第一个作用是让屏幕阅读器可以知晓图片的内容，这会对网页的可访问性有很大提升；另一个作用是当图片无法加载时，页面需要显示的替代文本。

**注意：** 如果图片是纯装饰性的，把 `alt` 的属性值设置为空是最佳实践。

理想情况下，`alt` 属性不应该包含特殊字符，除非有特殊需要。

让我们给上面例子的 `img` 添加 `alt` 属性。

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="freeCodeCamp logo">
```

# --instructions--

让我们给网站添加图片：

在 `main` 元素里，给 `p` 元素前面插入一个 `img` 元素。

现在设置 `src` 属性，使其指向 url `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`

最后，不要忘记给 `img` 加上 `alt` 属性。

# --hints--

你的网页上应该有一张图片。

```js
assert($('img').length);
```

你的图片应该有一个 `src` 属性，其值为猫咪图片的 url。

```js
assert(/^https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg$/i.test($('img').attr('src')));
```

你的图片元素的 `alt` 属性值不应为空。

```js
assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<(?:img|IMG)\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(
      __helpers.removeWhiteSpace(code)
    )
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
