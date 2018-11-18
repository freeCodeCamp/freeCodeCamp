---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
challengeType: 0
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-a-submit-button-to-a-form'
videoUrl: ''
localeTitle: Добавить кнопку отправки в форму
---

## Description
<section id="description"> Давайте добавим кнопку <code>submit</code> в вашу форму. Нажатие этой кнопки отправит данные из вашей формы по URL-адресу, указанному вами с помощью атрибута формы <code>action</code> . Вот пример кнопки отправки: <code>&lt;button type=&quot;submit&quot;&gt;this button submits the form&lt;/button&gt;</code> </section>

## Instructions
<section id="instructions"> Добавьте кнопку в качестве последнего элемента вашего элемента <code>form</code> с типом <code>submit</code> и «Отправить» в качестве текста. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваша форма должна иметь кнопку внутри.
    testString: 'assert($("form").children("button").length > 0, "Your form should have a button inside it.");'

  - text: 'Кнопка отправки должна иметь <code>type</code> атрибут, установленный для <code>submit</code> .'

    testString: 'assert($("button").attr("type") === "submit", "Your submit button should have the attribute <code>type</code> set to <code>submit</code>.");'
  - text: Кнопка отправки должна содержать только текст «Отправить».
    testString: 'assert($("button").text().match(/^\s*submit\s*$/gi), "Your submit button should only have the text "Submit".");'
  - text: 'Убедитесь, что ваш элемент <code>button</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure your <code>button</code> element has a closing tag.");'

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
  <form action="/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
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
