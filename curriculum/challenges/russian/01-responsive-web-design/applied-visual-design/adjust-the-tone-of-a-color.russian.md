---
id: 587d78a4367417b2b2512ad5
title: Adjust the Tone of a Color
challengeType: 0
videoUrl: https://scrimba.com/c/cEDJvT7
forumTopicId: 301038
localeTitle: Отрегулируйте тон цвета
---

## Description
<section id='description'>
Опция <code>hsl()</code> в CSS также упрощает настройку тона цвета. Смешение белого цвета с чистым оттенком создает оттенок этого цвета, а добавление черного оттенка сделает оттенок. В качестве альтернативы, тон создается путем добавления серого или как под тонировку, так и как затенение. Напомним, что &#39;s&#39; и &#39;l&#39; в <code>hsl()</code> означают насыщенность и легкость соответственно. Процент насыщения изменяет количество серого, а процент света определяет, сколько белого или черного цвета. Это полезно, когда у вас есть базовый оттенок, который вам нравится, но ему нужны разные варианты.
</section>

## Instructions
<section id='instructions'>
Навигационная панель на этом сайте в настоящее время наследует свой <code>background-color</code> от элемента <code>header</code>. Начиная с этого цвета в качестве базы, добавьте <code>background-color</code> к элементу <code>nav</code> так чтобы он использовал тот же голубой оттенок, но имел 80% насыщенности и 25% значения яркости, чтобы изменить его тон и оттенок.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>nav</code> element should have a <code>background-color</code> of the adjusted cyan tone using the <code>hsl()</code> property.
    testString: assert(code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

</section>
