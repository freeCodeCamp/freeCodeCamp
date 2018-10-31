---
id: bad87fee1348bd9aede08830
title: Create a Form Element
challengeType: 0
videoUrl: ''
localeTitle: Создание элемента формы
---

## Description
<section id="description"> Вы можете создавать веб-формы, которые фактически отправляют данные на сервер, используя не что иное, как чистый HTML. Вы можете сделать это, указав действие в элементе <code>form</code> . Например: <code>&lt;form action=&quot;/url-where-you-want-to-submit-form-data&quot;&gt;&lt;/form&gt;</code> </section>

## Instructions
<section id="instructions"> Заглушите свое текстовое поле внутри элемента <code>form</code> и добавьте атрибут <code>action=&quot;/submit-cat-photo&quot;</code> в элемент формы. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вставьте элемент ввода текста в элемент <code>form</code> .
    testString: 'assert($("form") && $("form").children("input") && $("form").children("input").length > 0, "Nest your text input element within a <code>form</code> element.");'
  - text: 'Убедитесь, что ваша <code>form</code> имеет атрибут <code>action</code> который установлен в <code>/submit-cat-photo</code>'
    testString: 'assert($("form").attr("action") === "/submit-cat-photo", "Make sure your <code>form</code> has an <code>action</code> attribute which is set to <code>/submit-cat-photo</code>");'
  - text: 'Убедитесь, что ваш элемент <code>form</code> имеет хорошо сформированные открытые и закрытые метки.'
    testString: 'assert(code.match(/<\/form>/g) && code.match(/<form [^<]*>/g) && code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length, "Make sure your <code>form</code> element has well-formed open and close tags.");'

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
  <input type="text" placeholder="cat photo URL">
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
