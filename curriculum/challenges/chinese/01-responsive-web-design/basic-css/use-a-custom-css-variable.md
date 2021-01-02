---
id: 5a9d727a424fe3d0e10cad12
title: 使用一个自定义的 CSS 变量
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM989ck'
forumTopicId: 301090
---

# --description--

创建变量后，CSS 属性可以通过调用变量名来使用它对应的值。

```css
background: var(--penguin-skin);
```

因为引用了 `--penguin-skin` 变量的值，使用了这个样式的元素背景颜色会是灰色。

**注意：**如果变量名不匹配，则样式不会生效。

# --instructions--

将 `--penguin-skin` 的值应用到 class 为 `penguin-top`、`penguin-bottom`、`right-hand`、`left-hand` 的 `background` 的属性值。

# --hints--

class 为 `penguin-top` 的 `background` 属性值应使用变量 `--penguin-skin` 的值。

```js
assert(
  code.match(
    /.penguin-top\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.penguin-bottom\s{/gi
  )
);
```

class 为 `penguin-bottom` 的 `background` 属性值应使用变量 `--penguin-skin` 的值。

```js
assert(
  code.match(
    /.penguin-bottom\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.right-hand\s{/gi
  )
);
```

class 为 `right-hand` 的 `background` 属性值应使用变量 `--penguin-skin` 的值。

```js
assert(
  code.match(
    /.right-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}[\s\S]*.left-hand\s{/gi
  )
);
```

class 为 `left-hand` 的 `background` 属性值应使用变量 `--penguin-skin` 的值。

```js
assert(
  code.match(
    /.left-hand\s*?{[\s\S]*background\s*?:\s*?var\s*?\(\s*?--penguin-skin\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

