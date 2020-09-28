---
id: 587d78a7367417b2b2512ae2
title: Create Visual Direction by Fading an Element from Left to Right
challengeType: 0
videoUrl: https://scrimba.com/c/cGJqqAE
forumTopicId: 301054
localeTitle: Создать визуальное направление, затухая элемент слева направо
---

## Description
<section id='description'>
Для этой задачи вы измените <code>opacity</code> анимированного элемента, чтобы он постепенно исчезал, когда он достиг правой стороны экрана. В отображаемой анимации круглый элемент с фоном градиента перемещается вправо на 50% метки анимации по правилу <code>@keyframes</code> .
</section>

## Instructions
<section id='instructions'>
Задайте элемент с идентификатором <code>ball</code> и добавьте свойство <code>opacity</code> равное 0.1, равное <code>50%</code> , поэтому элемент исчезает, когда он перемещается вправо.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>keyframes</code> rule for fade should set the <code>opacity</code> property to 0.1 at 50%.
    testString: assert(code.match(/@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```

</section>
