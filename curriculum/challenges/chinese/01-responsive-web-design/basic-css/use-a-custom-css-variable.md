---
id: 5a9d727a424fe3d0e10cad12
title: 使用一个自定义的 CSS 变量
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM989ck'
forumTopicId: 301090
---

# --description--

创建变量后，CSS 属性可以通过引用变量名来使用它的值。

```css
background: var(--penguin-skin);
```

因为引用了`--penguin-skin`变量的值，使用了这个样式的元素背景颜色会是灰色。 注意：如果变量名不匹配，样式不会生效。

# --instructions--

`penguin-top`，`penguin-bottom`，`right-hand`和`left-hand`class 的`background`属性均使用`--penguin-skin`变量值。

# --hints--

`penguin-top` class 的`background`属性应使用`--penguin-skin`变量值。

```js
assert(
  code.match(
    /.penguin-top\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.penguin-bottom\s{/gi
  )
);
```

`penguin-bottom` class 的`background`属性应使用`--penguin-skin`变量值。

```js
assert(
  code.match(
    /.penguin-bottom\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.right-hand\s{/gi
  )
);
```

`right-hand` class 的`background`属性应使用`--penguin-skin`变量值。

```js
assert(
  code.match(
    /.right-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.left-hand\s{/gi
  )
);
```

`left-hand` class 的`background`属性应使用`--penguin-skin`变量值。

```js
assert(
  code.match(
    /.left-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

