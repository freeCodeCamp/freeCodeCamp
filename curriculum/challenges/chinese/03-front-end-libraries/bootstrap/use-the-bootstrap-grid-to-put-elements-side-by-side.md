---
id: bad88fee1348ce8acef08815
title: 使用 Bootstrap 网格并排放置元素
challengeType: 0
forumTopicId: 18371
---

# --description--

Bootstrap 具有一套基于 12 列的响应式栅格系统————可以轻松实现将多个元素放入一行并指定它们的相对宽度。 Bootstrap 的大部分 class 属性都可以应用在 `div` 元素上。

Bootstrap 的列宽度属性取决于用户的屏幕宽度。 比如，手机有着窄屏幕而笔记本电脑有者更大的屏幕.

就拿 Bootstrap 的 `col-md-*` class 来说。 在这里， `md` 表示 medium （中等的）， 而 `*` 是一个数字，说明了这个元素占有多少个列宽度。这个例子就是指定了中等大小屏幕（例如笔记本电脑）下元素所占的列宽度。

在我们创建的 Cat Photo App 中，我们将使用 `col-xs-*` ， 其中 `xs` 是 extra small 的缩写 (应用于较小的屏幕，比如手机屏幕)， `*` 是你填写的数字，代表一行中，你的元素该占多少列宽。

将我们的 `Like`, `Info` 和 `Delete` 三个按钮并排放入一个 `<div class="row">` 元素中，然后每个按钮都各用一个 `<div class="col-xs-4">` 元素包裹起来。

当 `div` 元素设置了 `row` class 之后，那几个按钮便会嵌入其中了。

# --hints--

所有按钮都需要嵌入到同一个 `div` 元素中， 并且该元素包含 class 属性 `row`。

```js
assert($('div.row:has(button)').length > 0);
```

每个 Bootstrap 按钮都需要嵌入各自的 `div` 元素，并且该元素包含 class 属性 `col-xs-4`。

```js
assert($('div.col-xs-4:has(button)').length > 2);
```

确保每一个 `button` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

确保每一个 `div` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --solutions--

