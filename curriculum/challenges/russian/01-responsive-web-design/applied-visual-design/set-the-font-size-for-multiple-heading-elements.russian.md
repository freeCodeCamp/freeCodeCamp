---
id: 587d781c367417b2b2512ac2
title: Set the font-size for Multiple Heading Elements
challengeType: 0
videoUrl: ''
localeTitle: Установите размер шрифта для нескольких элементов заголовка
---

## Description
<section id="description"> Свойство <code>font-size</code> используется для указания того, насколько большой текст в данном элементе. Это правило может использоваться для нескольких элементов для создания визуальной согласованности текста на странице. В этой задаче вы установите значения для всех тегов <code>h1</code> <code>h6</code> чтобы сбалансировать размеры заголовков. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("h1").css("font-size") == "68px", "Your code should set the <code>font-size</code> property for the <code>h1</code> tag to 68 pixels.");'
  - text: ''
    testString: 'assert($("h2").css("font-size") == "52px", "Your code should set the <code>font-size</code> property for the <code>h2</code> tag to 52 pixels.");'
  - text: Ваш код должен установить свойство <code>font-size</code> для тега <code>h3</code> до 40 пикселей.
    testString: 'assert($("h3").css("font-size") == "40px", "Your code should set the <code>font-size</code> property for the <code>h3</code> tag to 40 pixels.");'
  - text: ''
    testString: 'assert($("h4").css("font-size") == "32px", "Your code should set the <code>font-size</code> property for the <code>h4</code> tag to 32 pixels.");'
  - text: ''
    testString: 'assert($("h5").css("font-size") == "21px", "Your code should set the <code>font-size</code> property for the <code>h5</code> tag to 21 pixels.");'
  - text: ''
    testString: 'assert($("h6").css("font-size") == "14px", "Your code should set the <code>font-size</code> property for the <code>h6</code> tag to 14 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>






</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
