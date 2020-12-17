---
id: 5a9036ee38fddaf9a66b5d34
title: 使用 CSS 网格单位来更改列和行的大小
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
---

# --description--

在 CSS 网格中，可以使用绝对定位和相对定位单位如`px`和`em`来确定行或列的大小。下面的单位也可以使用：

`fr`：设置列或行占剩余空间的一个比例，

`auto`：设置列宽或行高自动等于它的内容的宽度或高度，

`%`：将列或行调整为它的容器宽度或高度的百分比，

最右侧的预览区中的效果通过下面的代码实现：

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

这段代码添加了五个列。第一列的宽与它的内容宽度相等；第二列宽 50px；第三列宽是它容器的 10%；最后两列，将剩余的宽度平均分成三份，第四列占两份，第五列占一份。

# --instructions--

生成一个包含三列的网格，每列宽度分别为：1fr，100px，和 2fr。

# --hints--

`container`类应该有`grid-template-columns`属性，且生成宽为`1fr, 100px`和`2fr`的三列。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

