---
id: bad87fee1348bd9aedf08803
title: Change the Color of Text
challengeType: 0
videoUrl: https://scrimba.com/c/cRkVmSm
forumTopicId: 16775
localeTitle: Изменение цвета текста
---

## Description
<section id='description'>
Теперь давайте изменим цвет некоторых наших текстов. Мы можем сделать это, изменив <code>style</code> вашего элемента <code>h2</code> . Свойство, отвечающее за цвет текста элемента, является свойством стиля <code>color</code> . Вот как вы можете задать цвет текста вашего элемента <code>h2</code> синим: <code>&lt;h2 style=&quot;color: blue;&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> Обратите внимание, что хорошей практикой является прекращение объявлений в <code>style</code> inline с помощью <code>;</code> ,
</section>

## Instructions
<section id='instructions'>
Измените свой стиль элемента <code>h2</code> так, чтобы его цвет текста был красным.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h2</code> element should have a <code>style</code> declaration.
    testString: assert($("h2").attr('style'));
  - text: Your <code>h2</code> element should be red.
    testString: assert($("h2").css("color") === "rgb(255, 0, 0)");
  - text: Your <code>style</code> declaration should end with a <code>;</code> .
    testString: assert($("h2").attr('style') && $("h2").attr('style').endsWith(';'));

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

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<h2 style="color: red;">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>
