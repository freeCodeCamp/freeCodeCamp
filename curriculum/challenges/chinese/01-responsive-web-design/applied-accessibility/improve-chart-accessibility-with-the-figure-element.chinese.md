---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
localeTitle: 使用 figure 元素提高图表的可访问性
---

## Description
<section id='description'>
HTML5 引入了<code>figure</code>标签以及与之相关的<code>figcaption</code>标签。它们一起用于展示可视化信息（如：图片、图表）及其标题。这样通过语义化对内容进行分组并配以用于解释<code>figure</code>的文字，可以极大地提升内容的可访问性。
对于图表之类的可视化数据，标题可以为屏幕阅读器用户提供简要的说明。但是这里有一个难点，如何处理那些超出屏幕可视范围（使用 CSS）的表格版本的图表数据，以使屏幕阅读器用户也可以获取信息。
举个例子——注意<code>figcaption</code>包含在<code>figure</code>标签中，并且可以与其他标签组合使用：

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```

</section>

## Instructions
<section id='instructions'>
Camper Cat 正在努力创建一张条形图，用来显示每周用于隐形、战斗、武器训练的时间。请帮助完善他的页面，将他的用于呈现图表的<code>div</code>标签修改为<code>figure</code>标签，用于呈现图表标题的<code>p</code>标签改为<code>figcaption</code>标签。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的代码应该有 1 个<code>figure</code>标签。'
    testString: assert($('figure').length == 1);
  - text: '你的代码应该有 1 个<code>figcaption</code>标签。'
    testString: assert($('figcaption').length == 1);
  - text: '你的代码不应有<code>div</code>标签。'
    testString: assert($('div').length == 0);
  - text: '你的代码不应有<code>p</code>标签。'
    testString: assert($('p').length == 0);
  - text: '<code>figcaption</code>应该为<code>figure</code>的子标签。'
    testString: assert($('figure').children('figcaption').length == 1);
  - text: '请确保你的<code>figure</code>标签是闭合的。'
    testString: assert(code.match(/<\/figure>/g) && code.match(/<\/figure>/g).length === code.match(/<figure>/g).length);

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

```html
// solution required
```

</section>
              