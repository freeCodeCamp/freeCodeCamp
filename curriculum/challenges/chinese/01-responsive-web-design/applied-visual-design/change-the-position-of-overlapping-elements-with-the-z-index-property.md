---
id: 587d78a3367417b2b2512acf
title: 使用 z-index 属性更改重叠元素的位置
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
---

# --description--

当一些元素重叠时，在 HTML 里后出现的元素会默认显示在更早出现的元素的上面。你可以使用 `z-index` 属性指定元素的堆叠次序。`z-index` 的取值是整数，数值大的元素会叠放到数值小的元素上面。

# --instructions--

给 class 为 `first` 的元素（红色的方块）添加 `z-index` 属性并将属性值设置为 2，使它显示在蓝色方块的上方。

# --hints--

class 为 `first` 的元素的 `z-index` 属性值应为 2。

```js
assert($('.first').css('z-index') == '2');
```

# --solutions--

