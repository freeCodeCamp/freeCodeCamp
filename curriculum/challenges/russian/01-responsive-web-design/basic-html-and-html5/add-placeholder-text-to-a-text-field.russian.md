---
id: bad87fee1348bd9aedf08830
title: Add Placeholder Text to a Text Field
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cKdJDhg
forumTopicId: 16647
localeTitle: Добавить текст для placeholder в текстовое поле
---

## Description
<section id='description'>
Текст placeholder'а - это то, что отображается в вашем элементе <code>input</code> до того, как ваш пользователь ввел что-либо. Вы можете создать текст placeholder'а следующим образом: <code>&lt;input type=&quot;text&quot; placeholder=&quot;this is placeholder text&quot;&gt;</code>
</section>

## Instructions
<section id='instructions'>
Задайте значение <code>placeholder</code> вашего <code>input</code> текста «URL-адрес кота».
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Add a <code>placeholder</code> attribute to the existing text <code>input</code> element.
    testString: assert($("input[placeholder]").length > 0);
  - text: Set the value of your placeholder attribute to "cat photo URL".
    testString: assert($("input") && $("input").attr("placeholder") && $("input").attr("placeholder").match(/cat\s+photo\s+URL/gi));
  - text: The finished <code>input</code> element should not have a closing tag.
    testString: assert(!code.match(/<input.*\/?>.*<\/input>/gi));
  - text: The finished <code>input</code> element should have valid syntax.
    testString: assert($("input[type=text]").length > 0);

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
  <input type="text" placeholder="cat photo URL">
</main>
```

</section>
