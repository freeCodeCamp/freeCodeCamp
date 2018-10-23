---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
challengeType: 0
videoUrl: ''
localeTitle: Используйте класс CSS для улучшения элемента
---

## Description
<section id="description"> Классы можно описать как заготовки для различных стилей, которые можно добавить к элементам HTML. Вот пример объявления класса CSS: <blockquote> &lt;style&gt; <br> .blue-text { <br> color: blue; <br> } <br> &lt;/ style&gt; </blockquote> Здесь показано как мы создали CSS класс, называемый <code>blue-text</code> в теге <code>&lt;style&gt;</code> . Вы можете применить класс к HTML-элементу следующим образом: <code>&lt;h2 class=&quot;blue-text&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> Обратите внимание на то, что в элементе <code>style</code> CSS имена классов начинаются с точки, в то время как в атрибуте класса HTML-элемента имя класса не включает в себя точку. </section>

## Instructions
<section id="instructions"> Внутри элемента <code>style</code> измените имя CSS класса <code>h2</code> на <code>.red-text</code>, а так же, измените значение цвета с <code>blue</code> на <code>red</code> . Присвойте вашему элементу <code>h2</code> атрибут <code>class</code> со значением <code>&#39;red-text&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш элемент <code>h2</code> должен быть красным.
    testString: 'assert($("h2").css("color") === "rgb(255, 0, 0)", "Your <code>h2</code> element should be red.");'
  - text: Ваш элемент <code>h2</code> должен иметь атрибут <code>class</code> со значением <code>red-text</code> .
    testString: 'assert($("h2").hasClass("red-text"), "Your <code>h2</code> element should have the class <code>red-text</code>.");'
  - text: Имя вашего класса при его объявлении должно быть <code>red-text</code>, а так же, его цвет должен быть красным.
    testString: 'assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g), "Your stylesheet should declare a <code>red-text</code> class and have its color set to red.");'
  - text: 'Не используйте встроенные объявления стиля, такие как <code>style=&quot;color: red&quot;</code> в вашем элементе <code>h2</code> .'
    testString: 'assert($("h2").attr("style") === undefined, "Do not use inline style declarations like <code>style="color&#58; red"</code> in your <code>h2</code> element.");'

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

  <form action="/submit-cat-photo">
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

```js
// solution required
```
</section>
