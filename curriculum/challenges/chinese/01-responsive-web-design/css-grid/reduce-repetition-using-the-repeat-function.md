---
id: 5a94fe3669fb03452672e45f
title: 使用 repeat 函数减少重复
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
---

# --description--

当使用`grid-template-columns`和`grid-template-rows`定义网格结构时，你需要为添加的每一行和每一列都输入一个值。

如果一个网格共有 100 行，每行高度相同，就得输入 100 个值，这不太实际。幸运的是，有一种更好的方法——使用`repeat`方法指定行或列的重复次数，后面加上逗号以及需要重复的值。

这里有一个添加 100 行网格的例子，使每行高度均为 50px：

```css
grid-template-rows: repeat(100, 50px);
```

你还可以用 repeat 方法重复多个值，并在定义网格结构时与其他值一起使用。举个例子：

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

效果相当于：

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**注意：**  
`1fr 50px`重复了两次，后面跟着 20px。

# --instructions--

用`repeat`代替`grid-template-columns`属性值中的重复代码。

# --hints--

`container`类应该带有`grid-template-columns`属性且设置为重复 3 列，宽为`1fr`。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

