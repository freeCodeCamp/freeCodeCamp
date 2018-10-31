---
id: 587d78a6367417b2b2512ade
title: Create a More Complex Shape Using CSS and HTML
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS和HTML创建更复杂的形状
---

## Description
<section id="description">世界上最流行的形状之一是心形，在这个挑战中你将使用纯CSS创建一个。但首先，您需要了解<code>::before</code>和<code>::after</code>伪元素。这些伪元素用于在所选元素之前或之后添加内容。在以下示例中，使用<code>::before</code>伪元素将矩形添加到具有类<code>heart</code>的元素： <blockquote> .heart :: before { <br>内容：“”; <br>背景颜色：黄色; <br> border-radius：25％; <br>位置：绝对; <br>身高：50px; <br>宽度：70px; <br>顶部：-50px; <br>左：5px; <br> } </blockquote>要使<code>::before</code>和<code>::after</code>伪元素正常运行，它们必须具有已定义的<code>content</code>属性。此属性通常用于向所选元素添加照片或文本等内容。当使用<code>::before</code>和<code>::after</code>伪元素创建形状时，仍然需要<code>content</code>属性，但它被设置为空字符串。在上面的示例中，具有<code>heart</code>类的元素具有<code>::before</code>伪元素，该元素分别生成<code>height</code>和<code>width</code>分别为50px和70px的黄色矩形。这个矩形由于其25％的边界半径而具有圆角，并且绝对位于距离<code>left</code> 5px和高于元素<code>top</code> 50px的<code>top</code> 。 </section>

## Instructions
<section id="instructions">将屏幕上的元素转换为心形。在<code>heart::after</code>选择器中，将<code>background-color</code>更改为pink，将<code>border-radius</code>更改为50％。接下来，使用类<code>heart</code> （只是<code>heart</code> ）定位元素并填充<code>transform</code>属性。使用-45度的<code>rotate()</code>函数。 （ <code>rotate()</code>工作方式与<code>skewX()</code>和<code>skewY()</code>工作方式相同。最后，在<code>heart::before</code>选择器中，将其<code>content</code>属性设置为空字符串。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>heart::after</code>选择器的<code>background-color</code>属性应为粉红色。'
    testString: 'assert(code.match(/\.heart::after\s*?{\s*?background-color\s*?:\s*?pink\s*?;/gi), "The <code>background-color</code> property of the <code>heart::after</code> selector should be pink.");'
  - text: '选择<code>heart::after</code>的<code>heart::after</code> <code>border-radius</code>应为50％。'
    testString: 'assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2, "The <code>border-radius</code> of the <code>heart::after</code> selector should be 50%.");'
  - text: <code>heart</code>类的<code>transform</code>属性应使用设置为-45度的<code>rotate()</code>函数。
    testString: 'assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi), "The <code>transform</code> property for the <code>heart</code> class should use a <code>rotate()</code> function set to -45 degrees.");'
  - text: '该<code>content</code>的的<code>heart::before</code>选择应该是一个空字符串。'
    testString: 'assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|")\1\s*?;/gi), "The <code>content</code> of the <code>heart::before</code> selector should be an empty string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.heart {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: pink;
  height: 50px;
  width: 50px;
  transform: ;
}
.heart::after {
  background-color: blue;
  content: "";
  border-radius: 25%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0px;
  left: 25px;
}
.heart::before {
  content: ;
  background-color: pink;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: -25px;
  left: 0px;
}
</style>
<div class = "heart"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
