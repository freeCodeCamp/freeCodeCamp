---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
challengeType: 0
videoUrl: ''
localeTitle: 使用图元素改进图表可访问性
---

## Description
<section id="description"> HTML5引入了<code>figure</code>元素以及相关的<code>figcaption</code> 。这些项目一起使用，包含可视化表示（如图像，图表或图表）及其标题。通过语义分组相关内容和提供解释<code>figure</code>的文本替代，这提供了双倍的可访问性提升。对于图表等数据可视化，可以使用标题简要说明视力障碍用户的趋势或结论。另一个挑战包括如何为屏幕阅读器用户在屏幕外（使用CSS）移动图表数据的表格版本。这是一个例子 - 请注意， <code>figcaption</code>位于<code>figure</code>标签内部，可以与其他元素组合： <blockquote> &lt;图&gt; <br> &lt;img src =“roundhouseDestruction.jpeg”alt =“露营猫执行圆屋踢的照片”&gt; <br>点击<br> &lt;figcaption&gt; <br> Master Camper Cat展示了适当形式的圆屋踢。 <br> &lt;/ figcaption&gt; <br> &lt;/图&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat正在努力创建一个堆积条形图，显示每周花在隐形，战斗和武器上的训练时间。通过将用于<code>figure</code>标记的<code>div</code>标签和包含标题的<code>p</code>标签更改为<code>figcaption</code>标记，帮助他更好地构建页面。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有一个<code>figure</code>标记。
    testString: 'assert($("figure").length == 1, "Your code should have one <code>figure</code> tag.");'
  - text: 您的代码应该有一个<code>figcaption</code>标记。
    testString: 'assert($("figcaption").length == 1, "Your code should have one <code>figcaption</code> tag.");'
  - text: 您的代码不应包含任何<code>div</code>标记。
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: 您的代码不应包含任何<code>p</code>标记。
    testString: 'assert($("p").length == 0, "Your code should not have any <code>p</code> tags.");'
  - text: <code>figcaption</code>应该是<code>figure</code>标签的子<code>figcaption</code> 。
    testString: 'assert($("figure").children("figcaption").length == 1, "The <code>figcaption</code> should be a child of the <code>figure</code> tag.");'
  - text: 确保您的<code>figure</code>元素有一个结束标记。
    testString: 'assert(code.match(/<\/figure>/g) && code.match(/<\/figure>/g).length === code.match(/<figure>/g).length, "Make sure your <code>figure</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
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
  <main>
    <section>

      <!-- Add your code below this line -->
      <div>
        <!-- Stacked bar chart will go here -->
        <br>
        <p>Breakdown per week of time to spend training in stealth, combat, and weapons.</p>
      </div>
      <!-- Add your code above this line -->

    </section>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
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
