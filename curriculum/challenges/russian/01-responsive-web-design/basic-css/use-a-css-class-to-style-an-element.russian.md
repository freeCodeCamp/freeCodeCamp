---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
challengeType: 0
videoUrl: https://scrimba.com/c/c2MvDtV
forumTopicId: 18337
localeTitle: Используйте селектор класса в CSS для стилизации элемента
---

## Description
<section id='description'>
Классы - многоразовые стили, которые можно добавить к элементам HTML. Вот пример объявления класса CSS: <blockquote> &lt;style&gt; <br> .blue-text { <br> color: blue; <br> } <br> &lt;/ style&gt; </blockquote> Вы можете видеть, что мы создали класс CSS, который назвали <code>blue-text</code> в <code>&lt;style&gt;</code> . Вы можете применить класс к HTML-элементу следующим образом: <code>&lt;h2 class=&quot;blue-text&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> Обратите внимание, что в элементе <code>style</code> CSS имена классов начинаются с точки. В атрибуте класса HTML-элементов имя класса не включает точку.
</section>

## Instructions
<section id='instructions'>
Внутри элемента <code>style</code> измените селектор <code>h2</code> на <code>.red-text</code> и обновите значение цвета с <code>blue</code> на <code>red</code> . Задайте вашему элементу <code>h2</code> атрибут <code>class</code> со значением <code>&#39;red-text&#39;</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h2</code> element should be red.
    testString: assert($("h2").css("color") === "rgb(255, 0, 0)");
  - text: Your <code>h2</code> element should have the class <code>red-text</code>.
    testString: assert($("h2").hasClass("red-text"));
  - text: Your stylesheet should declare a <code>red-text</code> class and have its color set to red.
    testString: assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g));
  - text: Do not use inline style declarations like <code>style="color&#58; red"</code> in your <code>h2</code> element.
    testString: assert($("h2").attr("style") === undefined);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {
    color: blue;
  }
</style>

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
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
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
