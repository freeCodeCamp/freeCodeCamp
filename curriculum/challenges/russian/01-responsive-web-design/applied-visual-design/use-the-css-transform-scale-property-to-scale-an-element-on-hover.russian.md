---
id: 587d78a5367417b2b2512ada
title: Use the CSS Transform scale Property to Scale an Element on Hover
challengeType: 0
videoUrl: https://scrimba.com/c/cyLPJuM
forumTopicId: 301077
localeTitle: Используйте свойство масштабирования CSS Transform для масштабирования элемента при наведении
---

## Description
<section id='description'>
Свойство <code>transform</code> имеет множество функций, которые позволяют масштабировать, перемещать, вращать, перекосить и т. Д. Ваши элементы. При использовании с псевдоклассами, такими как <code>:hover</code> которые определяют определенное состояние элемента, свойство <code>transform</code> может легко добавлять интерактивность к вашим элементам. Ниже приведен пример масштабирования элементов абзаца в 2.1 раза по сравнению с их первоначальным размером, когда пользователь на них наводит: <blockquote> p: hover { <br> transform: масштаб (2.1); <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте правило CSS для состояния <code>hover</code> <code>div</code> и используйте свойство <code>transform</code> для масштабирования элемента <code>div</code> до 1,1 раз по сравнению с его первоначальным размером, когда пользователь на него наводится.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The size of the <code>div</code> element should scale 1.1 times when the user hovers over it.
    testString: assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>
```

</section>
