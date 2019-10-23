---
id: bad87fee1348bd9aedf08829
title: Create a Text Field
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/c2EVnf6
forumTopicId: 16823
localeTitle: Создание текстового поля
---

## Description
<section id='description'>
Теперь давайте создадим веб-форму. Элементы ввода - удобный способ ввода данных от пользователя. Вы можете создать текстовый ввод следующим образом: <code>&lt;input type=&quot;text&quot;&gt;</code> Обратите внимание, что <code>input</code> элементы самозакрываются.
</section>

## Instructions
<section id='instructions'>
Создайте <code>input</code> элемент типа <code>text</code> ниже списков.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your app should have an <code>input</code> element of type <code>text</code>.
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
  <form>
    <input type="text">
  </form>
</main>
```

</section>
