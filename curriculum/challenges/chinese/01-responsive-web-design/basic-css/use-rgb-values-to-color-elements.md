---
id: bad87fee1348bd9aede08718
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
title: 使用 RGB 值为元素上色
---

## Description
<section id='description'>
另一种可以在 CSS 中表示颜色的方法是使用 RGB 值。
黑色的 RGB 值声明如下：
<code>rgb(0, 0, 0)</code>
白色的 RGB 值声明如下：
<code>rgb(255, 255, 255)</code>
RGB 不像十六进制编码，并不需要用到 6 位十六进制数字。在 RGB 里，你只需要指定每种颜色的亮度大小，从 0 到 255。
在数学的角度来看，如果将十六进制的一种颜色的两位数字相乘，16 乘以 16 也等于 256。所以，从 0 到 255 计算的 RGB 值的具有十六进制编码相同的颜色可能性。
下面是通过使用 RGB 值设置背景颜色为橘色的例子：

```css
body {
  background-color: rgb(255, 165, 0);
}
```

</section>

## Instructions
<section id='instructions'>
让我们用<code>rgb(0, 0, 0)</code>的 RGB 值替换<code>body</code>元素背景颜色的十六进制编码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>body</code>元素的背景颜色应该是黑色的。'
    testString: assert($("body").css("background-color") === "rgb(0, 0, 0)");
  - text: '<code>body</code>元素的背景颜色的黑色值应该为<code>RGB</code>值。'
    testString: assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/ig));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              