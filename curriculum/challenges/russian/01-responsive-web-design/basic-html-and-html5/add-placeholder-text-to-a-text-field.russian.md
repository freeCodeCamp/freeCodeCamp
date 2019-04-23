---
id: bad87fee1348bd9aedf08830
title: Add Placeholder Text to a Text Field
challengeType: 0
videoUrl: ''
localeTitle: Добавить текст для placeholder в текстовое поле
---

## Description
<section id="description"> Текст placeholder'а - это то, что отображается в вашем элементе <code>input</code> до того, как ваш пользователь ввел что-либо. Вы можете создать текст placeholder'а следующим образом: <code>&lt;input type=&quot;text&quot; placeholder=&quot;this is placeholder text&quot;&gt;</code> </section>

## Instructions
<section id="instructions"> Задайте значение <code>placeholder</code> вашего <code>input</code> текста «URL-адрес кота». </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Добавьте атрибут <code>placeholder</code> в существующий элемент <code>input</code> текста.
    testString: 'assert($("input[placeholder]").length > 0, "Add a <code>placeholder</code> attribute to the existing text <code>input</code> element.");'
  - text: Установите для атрибута placeholder значение «URL-адрес кота».
    testString: 'assert($("input") && $("input").attr("placeholder") && $("input").attr("placeholder").match(/cat\s+photo\s+URL/gi), "Set the value of your placeholder attribute to "cat photo URL".");'
  - text: Готовый элемент <code>input</code> должен иметь действительный синтаксис.
    testString: 'assert($("input[type=text]").length > 0 && code.match(/<input((\s+\w+(\s*=\s*(?:".*?"|".*?"|[\^"">\s]+))?)+\s*|\s*)\/?>/gi), "The finished <code>input</code> element should have valid syntax.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text">
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
