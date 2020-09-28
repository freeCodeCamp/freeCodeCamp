---
id: 587d778d367417b2b2512aaa
title: Make Elements Only Visible to a Screen Reader by Using Custom CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJ8QGkhJ'
forumTopicId: 301020
localeTitle: 使用自定义 CSS 让元素仅对屏幕阅读器可见
---

## Description
<section id='description'>
到目前为止，所有关于可访问性的挑战都没有使用 CSS。这是为了让你在关注外观样式之前，先把页面的逻辑结构写清，以及明确语义化标签的重要性。
然而，如果我们需要在页面中添加一些只对屏幕阅读器可见的内容时，CSS 可以提升页面的可访问性。当信息以可视化形式（如：图表）展示，而屏幕阅读器用户需要一种替代方式（如：表格）来获取信息时，就会出现这种情况。CSS 被用来将这些仅供屏幕阅读器使用的信息定位到浏览器可见区域之外。
举个例子：

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

<strong>注意：</strong><br>下面的 CSS 代码与上面的结果不同：
<ul>
<li><code>display: none;</code>或<code>visibility: hidden;</code>会把内容彻底隐藏起来，对于屏幕阅读器也不例外。</li>
<li>如果把值设置为 0px，如<code>width: 0px; height: 0px;</code>，意味着让元素脱离文档流，这样做也会让元素被屏幕阅读器忽略。</li>
</ul>
</section>

## Instructions
<section id='instructions'>
Camper Cat 为他的训练页面创建了一个十分酷炫的条形图，并将数据放入表格中，供屏幕阅读器用户使用。表格已经有了一个<code>sr-only</code>类，但是还没有添加 CSS 规则。请设置<code>position</code>的值为 absolute，<code>left</code> 的值为 -10000px，<code>width</code>与<code>height</code>的值为 1px。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>sr-only</code>类中的<code>position</code>属性的值应为 absolute。'
    testString: assert($('.sr-only').css('position') == 'absolute');
  - text: '<code>sr-only</code>类中的<code>left</code>属性的值应为 -10000px。'
    testString: assert($('.sr-only').css('left') == '-10000px');
  - text: '<code>sr-only</code>类中的<code>width</code>属性的值应为 1px。'
    testString: assert(code.match(/width:\s*?1px/gi));
  - text: '<code>sr-only</code>类中的<code>height</code>属性的值应为 1px。'
    testString: assert(code.match(/height:\s*?1px/gi));

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

```html
// solution required
```

</section>
              