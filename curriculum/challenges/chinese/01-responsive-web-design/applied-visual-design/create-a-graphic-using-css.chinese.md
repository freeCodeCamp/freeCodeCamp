---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS创建图形
---

## Description
<section id="description">通过操纵不同的选择器和属性，您可以制作有趣的形状。其中一个更容易尝试的是月牙形状。对于此挑战，您需要使用设置元素<code>box-shadow</code>的<code>box-shadow</code>属性，以及控制元素角落圆度的<code>border-radius</code>属性。您将创建一个圆形透明对象，其阴影略微偏向侧面 - 阴影实际上将是您看到的月亮形状。要创建圆形对象， <code>border-radius</code>属性应设置为50％的值。您可以从之前的挑战中回想一下， <code>box-shadow</code>属性采用<code>offset-x</code> ， <code>offset-y</code> ， <code>blur-radius</code> ， <code>spread-radius</code>和颜色值的值。 <code>blur-radius</code>和<code>spread-radius</code>值是可选的。 </section>

## Instructions
<section id="instructions">在编辑器中操纵方形元素以创建月亮形状。首先，将<code>background-color</code>更改为透明，然后将<code>border-radius</code>属性设置为50％以生成圆形。最后，更改<code>box-shadow</code>属性，将<code>offset-x</code>设置为25px， <code>offset-y</code>为10px， <code>blur-radius</code>为0， <code>spread-radius</code>为0，颜色设置为蓝色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>background-color</code>属性的值应设置为<code>transparent</code> 。
    testString: 'assert(code.match(/background-color:\s*?transparent;/gi), "The value of the <code>background-color</code> property should be set to <code>transparent</code>.");'
  - text: <code>border-radius</code>属性的值应设置为<code>50%</code> 。
    testString: 'assert(code.match(/border-radius:\s*?50%;/gi), "The value of the <code>border-radius</code> property should be set to <code>50%</code>.");'
  - text: <code>box-shadow</code>属性的值应设置为<code>offset-x</code>为25px， <code>offset-y</code>为10px， <code>blur-radius</code>为0， <code>spread-radius</code>为0，最后为颜色为蓝色。
    testString: 'assert(code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi), "The value of the <code>box-shadow</code> property should be set to 25px for <code>offset-x</code>, 10px for <code>offset-y</code>, 0 for <code>blur-radius</code>, 0 for <code>spread-radius</code>, and finally blue for the color.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.center
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;

  background-color: blue;
  border-radius: 0px;
  box-shadow: 25px 10px 10px 10px green;
}

</style>
<div class="center"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
