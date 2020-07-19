---
id: bad87fee1348bd9aedf08807
title: Import a Google Font
challengeType: 0
videoUrl: https://scrimba.com/c/cM9MRsJ
forumTopicId: 18200
localeTitle: Импорт шрифта Google
---

## Description
<section id='description'>
В дополнение к общим шрифтам, которые можно найти в большинстве операционных систем, можно так же использовать нестандартные пользовательские веб-шрифты для использования на нашем веб-сайте. Существует множество источников веб-шрифтов, но в этом примере мы сосредоточимся на библиотеке Google Fonts. <a href="https://fonts.google.com/" target="_blank">Google Fonts</a> - бесплатная библиотека веб-шрифтов, которую вы можете использовать в своем CSS, ссылаясь на URL-адрес шрифта. Итак, давайте попробуем импортировать и применить шрифт из библиотеки Google (обратите внимание, что если Google заблокирован в вашей стране, вам нужно будет пропустить этот пример). Чтобы импортировать шрифт Google, вы можете скопировать шрифт(ы) из библиотеки Google Fonts и затем вставить его в свой HTML. Для этого примера мы импортируем шрифт <code>Lobster</code>. Скопируйте следующий фрагмент кода и вставьте его в верхнюю часть редактора кода (перед элементом <code>style</code>): <code>&lt;link href=&quot;https://fonts.googleapis.com/css?family=Lobster&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;&gt;</code> Теперь вы можете использовать шрифт <code>Lobster</code> в своем CSS, используя <code>Lobster</code> как FAMILY_NAME, как в следующем примере: <br> <code>font-family: FAMILY_NAME, GENERIC_NAME;</code>, GENERIC_NAME необязателен и является резервным шрифтом, если другой указанный шрифт недоступен. Это будет рассматриваться в следующей задаче. Имена шрифтов чувствительны к регистру и должны быть указаны в кавычках, если в имени есть пробел. Например, вам нужны кавычки, чтобы использовать шрифт <code>&quot;Open Sans&quot;</code>, но не для шрифта <code>Lobster</code>.
</section>

## Instructions
<section id='instructions'>
Создайте правило CSS <code>font-family</code> шрифтов, которое использует шрифт <code>Lobster</code>, и убедитесь, что оно будет применено к вашему элементу <code>h2</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Import the <code>Lobster</code> font.
    testString: assert(new RegExp("googleapis", "gi").test(code));
  - text: Your <code>h2</code> element should use the font <code>Lobster</code>.
    testString: assert($("h2").css("font-family").match(/lobster/i));
  - text: Use an <code>h2</code> CSS selector to change the font.
    testString: assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?(.{0,})\s*;\s*\}/gi.test(code));
  - text: Your <code>p</code> element should still use the font <code>monospace</code>.
    testString: assert($("p").css("font-family").match(/monospace/i));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

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
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  h2 {
    font-family: Lobster;
  }  
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
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
