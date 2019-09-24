---
id: 587d78a5367417b2b2512ad9
title: Use the CSS Transform scale Property to Change the Size of an Element
challengeType: 0
videoUrl: https://scrimba.com/c/c2MZVSg
forumTopicId: 301076
localeTitle: Используйте свойство масштабирования CSS Transform для изменения размера элемента
---

## Description
<section id='description'>
Чтобы изменить масштаб элемента, CSS имеет свойство <code>transform</code> , а также функцию <code>scale()</code> . Следующий пример кода удваивает размер всех элементов абзаца на странице: <blockquote> п { <br> преобразования: масштаб (2); <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Увеличьте размер элемента с идентификатором <code>ball2</code> до его первоначального размера в 1,5 раза.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Set the <code>transform</code> property for <code>#ball2</code> to scale it 1.5 times its size.
    testString: assert(code.match(/#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;

  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;
    transform: scale(1.5);
  }
</style>
<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```

</section>
