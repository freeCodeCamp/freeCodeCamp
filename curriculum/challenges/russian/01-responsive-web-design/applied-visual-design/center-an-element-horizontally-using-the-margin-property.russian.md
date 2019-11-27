---
id: 587d78a3367417b2b2512ad0
title: Center an Element Horizontally Using the margin Property
challengeType: 0
videoUrl: https://scrimba.com/c/cyLJqU4
forumTopicId: 301043
localeTitle: Центрировать элемент горизонтально Использование поля Свойства
---

## Description
<section id='description'>
Другой метод позиционирования - центрировать элемент блока горизонтально. Один из способов сделать это - установить <code>margin</code> в значение auto. Этот метод работает и для изображений. Изображения являются встроенными элементами по умолчанию, но могут быть изменены на блокирующие элементы, когда вы устанавливаете свойство <code>display</code> для блокировки.
</section>

## Instructions
<section id='instructions'>
<code>div</code> на странице, добавив свойство <code>margin</code> со значением auto.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>div</code> should have a <code>margin</code> set to auto.
    testString: assert(code.match(/margin:\s*?auto;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

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
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```

</section>
