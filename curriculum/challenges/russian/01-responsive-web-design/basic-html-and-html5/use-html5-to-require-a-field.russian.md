---
id: bad87fee1348bd9aedc08830
title: Use HTML5 to Require a Field
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cMd4EcQ
forumTopicId: 18360
localeTitle: Использовать HTML5 для запроса поля
---

## Description
<section id='description'>
Вам могут потребоваться определенные поля формы, чтобы ваш пользователь не смог отправить вашу форму до тех пор, пока он или она корректно не заполнят их. Например, если вы хотите внести требуемое текстовое поле ввода, вы можете просто добавить атрибут <code>required</code> в ваш элемент <code>input</code> , например: <code>&lt;input type=&quot;text&quot; required&gt;</code>
</section>

## Instructions
<section id='instructions'>
Добавьте к вашему текстовому полю <code>input</code> атрибут <code>required</code>, чтобы ваш пользователь не мог отправить форму без завершения заполнения этого поля. Затем попробуйте отправить форму без ввода какого-либо текста. Посмотрите, как ваша форма HTML5 уведомляет вас о том, что это поле необходимо.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your text <code>input</code> element should have the <code>required</code> attribute.
    testString: assert($("input").prop("required"));

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
    <button type="submit">Submit</button>
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
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>
