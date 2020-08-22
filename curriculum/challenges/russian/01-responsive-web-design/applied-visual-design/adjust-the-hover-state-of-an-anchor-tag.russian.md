---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
challengeType: 0
videoUrl: https://scrimba.com/c/cakRGcm
forumTopicId: 301035
localeTitle: Отрегулируйте состояние ссылок при наведении курсора
---

## Description
<section id='description'>
Эта проблема будет касаться использования псевдоклассов. Псевдокласс - это ключевое слово, которое можно добавить в селектор, чтобы выбрать конкретное состояние элемента. Например, стиль тега привязки может быть изменен для его состояния зависания с помощью селектора псевдо-класса <code>:hover</code> . Вот CSS, чтобы изменить <code>color</code> привязанного тега на красный во время наведения на него: <blockquote> a: hover { <br> красный цвет; <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Редактор кода имеет правило CSS в стиле все <code>a</code> теги черный. Добавьте правила, так чтобы когда пользователь наводит на <code>a</code> тег, то <code>color</code> становился синим.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The anchor tag <code>color</code> should remain black, only add CSS rules for the <code>:hover</code> state.
    testString: assert($('a').css('color') == 'rgb(0, 0, 0)');
  - text: The anchor tag should have a <code>color</code> of blue on hover.
    testString: assert(code.match(/a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  a {
    color: #000;
  }
  a:hover {
    color: rgba(0,0,255,1);
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

</section>
