---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cp2Nkhz
forumTopicId: 16627
localeTitle: Добавить кнопку отправки в форму
---

## Description
<section id='description'>
Давайте добавим кнопку <code>submit</code> в вашу форму. Нажатие этой кнопки отправит данные из вашей формы по URL-адресу, указанному вами с помощью атрибута формы <code>action</code> . Вот пример кнопки отправки: <code>&lt;button type=&quot;submit&quot;&gt;this button submits the form&lt;/button&gt;</code>
</section>

## Instructions
<section id='instructions'>
Добавьте кнопку в качестве последнего элемента вашего элемента <code>form</code> с типом <code>submit</code> и «Отправить» в качестве текста.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your form should have a button inside it.
    testString: assert($("form").children("button").length > 0);
  - text: Your submit button should have the attribute <code>type</code> set to <code>submit</code>.
    testString: assert($("button").attr("type") === "submit");
  - text: Your submit button should only have the text "Submit".
    testString: assert($("button").text().match(/^\s*submit\s*$/gi));
  - text: Make sure your <code>button</code> element has a closing tag.
    testString: assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length);

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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>
