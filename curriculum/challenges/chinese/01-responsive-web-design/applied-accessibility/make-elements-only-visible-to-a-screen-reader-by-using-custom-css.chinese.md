---
id: 587d778d367417b2b2512aaa
title: Make Elements Only Visible to a Screen Reader by Using Custom CSS
challengeType: 0
videoUrl: ''
localeTitle: 使用自定义CSS使元素仅对屏幕阅读器可见
---

## Description
<section id="description">您是否注意到目前为止所有应用的可访问性问题都没有使用任何CSS？这是为了展示逻辑文档大纲的重要性，并在介绍视觉设计方面之前在您的内容周围使用具有语义意义的标记。但是，当您想要在视觉上隐藏仅供屏幕阅读器使用的内容时，CSS的魔力还可以改善页面的可访问性。当信息采用可视格式（如图表）时会发生这种情况，但屏幕阅读器用户需要使用替代演示（如表格）来访问数据。 CSS用于将屏幕阅读器元素定位在浏览器窗口的可视区域之外。这是完成此任务的CSS规则的示例： <blockquote> .sr-only { <br>位置：绝对; <br>左：-10000px; <br>宽度：1px; <br>身高：1px; <br>顶部：汽车; <br>溢出：隐藏; <br> } </blockquote> <strong>注意</strong> <br>以下CSS方法不会做同样的事情： <ul><li> <code>display: none;</code>或<code>visibility: hidden;</code>隐藏每个人的内容，包括屏幕阅读器用户</li><li>像素大小的零值，例如<code>width: 0px; height: 0px;</code>从文档流中删除该元素，这意味着屏幕阅读器将忽略它</li></ul></section>

## Instructions
<section id="instructions"> Camper Cat为他​​的培训页面创建了一个非常酷的堆积条形图，并将数据放入一个表格中，供视障用户使用。该表已经有一个<code>sr-only</code>类，但CSS规则尚未填写。给<code>position</code>一个绝对值， <code>left</code>是-10000px值， <code>width</code>和<code>height</code>都是1px值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该将<code>sr-only</code>类的<code>position</code>属性设置为absolute的值。
    testString: 'assert($(".sr-only").css("position") == "absolute", "Your code should set the <code>position</code> property of the <code>sr-only</code> class to a value of absolute.");'
  - text: 您的代码应将<code>sr-only</code>类的<code>left</code>属性设置为-10000px的值。
    testString: 'assert($(".sr-only").css("left") == "-10000px", "Your code should set the <code>left</code> property of the <code>sr-only</code> class to a value of -10000px.");'
  - text: 您的代码应将<code>sr-only</code>类的<code>width</code>属性设置为1像素的值。
    testString: 'assert(code.match(/width:\s*?1px/gi), "Your code should set the <code>width</code> property of the <code>sr-only</code> class to a value of 1 pixel.");'
  - text: 您的代码应将<code>sr-only</code>类的<code>height</code>属性设置为1像素的值。
    testString: 'assert(code.match(/height:\s*?1px/gi), "Your code should set the <code>height</code> property of the <code>sr-only</code> class to a value of 1 pixel.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  .sr-only {
    position: ;
    left: ;
    width: ;
    height: ;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training-->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
