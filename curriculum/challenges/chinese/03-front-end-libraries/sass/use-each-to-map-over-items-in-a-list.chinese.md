---
id: 587d7dbf367417b2b2512bba
title: Use @each to Map Over Items in a List
challengeType: 0
videoUrl: ''
localeTitle: 使用@each映射列表中的项目
---

## Description
<section id="description">最后一个挑战显示了<code>@for</code>指令如何使用起始值和结束值循环一定次数。 Sass还提供了<code>@each</code>指令，它循环遍历列表或映射中的每个项目。在每次迭代时，变量将从列表或映射分配给当前值。 <blockquote> @each $颜色为蓝色，红色，绿色{ <br> 。＃{$ color} -text {color：$ color;} <br> } </blockquote>地图的语法略有不同。这是一个例子： <blockquote> $ colors：（color1：blue，color2：red，color3：green）; <br><br> @each $ key，$ colors in colors { <br> 。＃{$ color} -text {color：$ color;} <br> } </blockquote>请注意，需要<code>$key</code>变量来引用地图中的键。否则，编译后的CSS将有<code>color1</code> ， <code>color2</code> ...在里面。以上两个代码示例都转换为以下CSS： <blockquote> .blue-text { <br>颜色：蓝色; <br> } <br><br> .red-text { <br>红色; <br> } <br><br> .green-text { <br>颜色：绿色; <br> } </blockquote></section>

## Instructions
<section id="instructions">编写一个<code>@each</code>列表的<code>@each</code>指令： <code>blue, black, red</code> ，并将每个变量分配给<code>.color-bg</code>类，其中“颜色”部分为每个项目更改。每个类应该将<code>background-color</code>设置为相应的颜色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该使用<code>@each</code>指令。
    testString: assert(code.match(/@each /g));
  - text: 您的<code>.blue-bg</code>类应该具有蓝色的<code>background-color</code> 。
    testString: assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
  - text: 你的<code>.black-bg</code>类的<code>background-color</code>为黑色。
    testString: assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
  - text: 您的<code>.red-bg</code>类应该具有红色的<code>background-color</code> 。
    testString: assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
