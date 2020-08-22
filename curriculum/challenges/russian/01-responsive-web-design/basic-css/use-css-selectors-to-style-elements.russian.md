---
id: bad87fee1348bd9aedf08805
title: Use CSS Selectors to Style Elements
challengeType: 0
videoUrl: https://scrimba.com/c/cJKMBT2
forumTopicId: 18349
localeTitle: Используйте селекторы CSS для изменения стилизации элементов
---

## Description
<section id='description'>
В CSS есть сотни <code>properties</code> CSS, которые вы можете использовать, чтобы изменить способ поиска элемента на вашей странице. Когда вы ввели <code>&lt;h2 style=&quot;color: red;&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> , вы стали стилизовать этот отдельный элемент <code>h2</code> со <code>inline CSS</code> , который обозначает <code>Cascading Style Sheets</code> . Это один из способов указать стиль элемента, но есть лучший способ применить <code>CSS</code> . В верхней части кода создайте блок <code>style</code> следующим образом: <blockquote> &lt;style&gt; <br> &lt;/ style&gt; </blockquote> Внутри этого блока стиля вы можете создать <code>CSS selector</code> для всех элементов <code>h2</code> . Например, если вы хотите, чтобы все элементы <code>h2</code> были красными, вы можете добавить правило CSS, которое выглядит так: <blockquote> &lt;style&gt; <br> h2 {color: red;} <br> &lt;/ style&gt; </blockquote> Обратите внимание, что важно иметь как открывающиеся, так и закрывающие фигурные скобки ( <code>{</code> и <code>}</code> ) вокруг правила CSS каждого селектора. Вы также должны убедиться, что правила CSS вашего селектора находится между открывающей и закрывающей фигурной скобкой. Наконец, обязательно добавьте точку с запятой в конец каждого из правил CSS вашего селектора.
</section>

## Instructions
<section id='instructions'>
Удалите атрибут стиля элемента <code>h2</code> и вместо этого создайте блок <code>style</code> CSS. Добавьте необходимые правила CSS, чтобы все элементы <code>h2</code> стали синими.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Remove the style attribute from your <code>h2</code> element.
    testString: assert(!$("h2").attr("style"));
  - text: Create a <code>style</code> element.
    testString: assert($("style") && $("style").length >= 1);
  - text: Your <code>h2</code> element should be blue.
    testString: assert($("h2").css("color") === "rgb(0, 0, 255)");
  - text: Ensure that your stylesheet <code>h2</code> declaration is valid with a semicolon and closing brace.
    testString: assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
  - text: Make sure all your <code>style</code> elements are valid and have a closing tag.
    testString: assert(code.match(/<\/style>/g) && code.match(/<\/style>/g).length === (code.match(/<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g) || []).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
