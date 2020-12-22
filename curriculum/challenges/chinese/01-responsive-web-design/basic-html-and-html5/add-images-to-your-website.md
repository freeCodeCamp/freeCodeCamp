---
id: bad87fee1348bd9aedf08812
title: 给网站添加图片
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EbJf2'
forumTopicId: 16640
---

# --description--

用`img`元素来为你的网站添加图片，其中`src`属性指向一个图片的地址。

例如：

`<img src="https://www.freecatphotoapp.com/your-image.jpg">`

注意：`img`元素是没有结束标记的。

所有的`img`元素必须有`alt`属性，`alt`属性的文本是当图片无法加载时显示的替代文本，这对于通过屏幕阅读器来浏览网页的用户非常重要。

注意：如果图片是纯装饰性的，用一个空的`alt`是最佳实践。

理想情况下，`alt`属性不应该包含特殊字符，除非必要。

让我们给上面例子的`img`添加`alt`属性。

`<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="作者站在沙滩上竖起两个大拇指">`

# --instructions--

让我们给网站添加图片：

在`main`元素里面，给`p`前面插入一个`img`元素

现在设置`src`属性指向这个地址：

`https://bit.ly/fcc-relaxing-cat`

最后不要忘记给图片添加一个`alt`文本。

# --hints--

网页应该有一张图片。

```js
assert($('img').length);
```

`img` 应该有一个`src`属性，指向猫咪图片。

```js
assert(/^https:\/\/bit\.ly\/fcc-relaxing-cat$/i.test($('img').attr('src')));
```

`img` 元素的`alt`属性值不应为空。

```js
assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<img\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(code.replace(/\s/g, ''))
);
```

# --solutions--

