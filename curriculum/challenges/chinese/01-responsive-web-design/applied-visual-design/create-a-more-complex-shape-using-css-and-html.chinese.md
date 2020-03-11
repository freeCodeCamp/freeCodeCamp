---
id: 587d78a6367417b2b2512ade
title: Create a More Complex Shape Using CSS and HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
localeTitle: 使用 CSS 和 HTML 创建更复杂的形状
---

## Description
<section id='description'>
世界上最流行的形状非心形莫属了，在本关里你将用纯 CSS 创建一个心形。但是首先你需要了解 <code>::before</code> 和 <code>::after</code> 伪类。这些伪类用来在选择元素之前和之后添加一些内容。在下面的例子里，<code>::before</code> 伪类元素用来给 class 为 <code>heart</code> 的元素添加一个正方形。

```css
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

<code>::before</code> 和 <code>::after</code> 必须配合 <code>content</code> 来使用。这个属性通常用来给元素添加内容诸如图片或者文字。当 <code>::before</code> 和 <code>::after</code>伪类用来添加某些形状而不是图片或文字时，<code>content</code> 属性仍然是必需的，但是它的值可以是空字符串。
在上面的例子里，class 为 <code>heart</code> 元素的 <code>::before</code> 伪类添加了一个黄色的长方形，长方形的 <code>height</code> 和 <code>width</code> 分别为 50px 和 70px。由于设置了其边框半径为 25%，所以长方形为圆角长方形，同时其相对位置为距离 <code>left</code> 5px，以及向 <code>top</code> 偏移 50px。
</section>

## Instructions
<section id='instructions'>
把屏幕里的元素变成心形。在 <code>heart::after</code> 选择器里面，把 <code>background-color</code> 改成粉色（pink），把 <code>border-radius</code> 改成 50%。
接下来，在 <code>heart</code> class 选择器（单纯的 <code>heart</code> 元素）里面，完善 <code>transform</code> 属性。使用 <code>rotate()</code> 函数并赋参 -45 度。（<code>rotate()</code>用法和 <code>skewX</code> 以及 <code>skewY</code> 类似）。
最后，在 <code>heart::before</code> 选择器里面，设置 <code>content</code> 属性为空字符串。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>heart::after</code> 选择器的 <code>background-color</code> 属性值应该为粉色。'
    testString: assert(code.match(/\.heart::after\s*?{\s*?background-color\s*?:\s*?pink\s*?;/gi));
  - text: '<code>heart::after</code> 选择器的 <code>border-radius</code> 属性值应该为 50%。'
    testString: assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
  - text: '<code>heart</code> class 的 <code>transform</code> 属性应该使用 <code>rotate()</code> 函数并赋参为 <code>-45deg</code>。'
    testString: assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
  - text: '<code>heart::before</code>选择器的<code>content</code>应该为空字符串。'
    testString: assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));

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
<div class="heart"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              