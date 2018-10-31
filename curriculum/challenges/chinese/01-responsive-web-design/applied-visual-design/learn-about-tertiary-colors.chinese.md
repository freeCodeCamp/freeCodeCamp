---
id: 587d78a4367417b2b2512ad2
title: Learn about Tertiary Colors
challengeType: 0
videoUrl: ''
localeTitle: 了解第三色
---

## Description
<section id="description">计算机显示器和设备屏幕通过组合红色，绿色和蓝色光的数量来创建不同的颜色。这被称为现代色彩理论中的RGB加色模型。红色（R），绿色（G）和蓝色（B）被称为原色。混合两种基色会产生青色（G + B），品红色（R + B）和黄色（R + G）的二次色。您在Complementary Colors挑战中看到了这些颜色。这些次要颜色恰好是其创建时未使用的原色的补充，并且与色轮上的原色相反。例如，洋红色由红色和蓝色制成，是绿色的补充。三原色是将原色与其次要颜色邻居组合的结果。例如，红色（主要）和黄色（次要）使橙色。这为简单的色轮增加了六种颜色，总共十二种颜色。有多种选择不同颜色的方法可以在设计中实现和谐组合。可以使用三级颜色的一个示例称为分裂互补色方案。该方案以基色开始，然后将其与其补色相邻的两种颜色配对。三种颜色在设计中提供强烈的视觉对比度，但比使用两种互补色更微妙。以下是使用拆分补充方案创建的三种颜色： <table class="table table-striped"><thead><tr><th>颜色</th><th> Hex代码</th></tr></thead><thead></thead><tbody><tr><td>橙子</td><td> ＃FF7D00 </td></tr><tr><td>青色</td><td> ＃00FFFF </td></tr><tr><td>覆盆子</td><td> ＃FF007D </td></tr></tbody></table></section>

## Instructions
<section id="instructions">将<code>orange</code> ， <code>cyan</code>和<code>raspberry</code>类的<code>background-color</code>属性更改为各自的颜色。确保使用十六进制代码，因为橙色和覆盆子不是浏览器识别的颜色名称。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 具有<code>orange</code>等级的<code>div</code>元素应具有<code>orange</code>的<code>background-color</code> 。
    testString: 'assert($(".orange").css("background-color") == "rgb(255, 125, 0)", "The <code>div</code> element with class <code>orange</code> should have a <code>background-color</code> of orange.");'
  - text: 具有<code>cyan</code>类的<code>div</code>元素应具有<code>cyan</code>的<code>background-color</code> 。
    testString: 'assert($(".cyan").css("background-color") == "rgb(0, 255, 255)", "The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.");'
  - text: 具有类<code>raspberry</code>的<code>div</code>元素应该具有<code>raspberry</code>的<code>background-color</code> 。
    testString: 'assert($(".raspberry").css("background-color") == "rgb(255, 0, 125)", "The <code>div</code> element with class <code>raspberry</code> should have a <code>background-color</code> of raspberry.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
