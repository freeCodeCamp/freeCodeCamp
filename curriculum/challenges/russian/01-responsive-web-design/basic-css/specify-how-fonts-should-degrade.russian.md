---
id: bad87fee1348bd9aedf08808
title: Specify How Fonts Should Degrade
challengeType: 0
videoUrl: ''
localeTitle: 'Укажите какие шрифты должны использоваться'
---

## Description
<section id="description"> Существует несколько стандартных шрифтов, доступных во всех браузерах. Эти типовые семейства шрифтов включают в себя <code>monospace</code> , <code>serif</code> и <code>sans-serif</code> Когда один шрифт недоступен, вы можете сказать браузеру «использовать другой шрифт. Например, если вы хотите, чтобы элемент использовал шрифт <code>Helvetica</code> , но когда <code>Helvetica</code> недоступен использовался шрифт <code>sans-serif</code>, вы можете указать следующее: <blockquote> p { <br> font-family: Helvetica, sans-serif; <br> } </blockquote> Имена общих имен шрифтов не чувствительны к регистру. Кроме того, им не нужны кавычки, потому что они являются ключевыми словами CSS. </section>

## Instructions
<section id="instructions"> Для начала примените <code>monospace</code> шрифт к элементу <code>h2</code> , так чтобы он имел два шрифта - <code>Lobster</code> и <code>monospace</code> . В последнем вызове вы импортировали шрифт <code>Lobster</code> используя тег <code>link</code> . Теперь закомментируйте импорт шрифта <code>Lobster</code> (используя HTML-комментарии, о которых вы узнали ранее) из Google Fonts, чтобы он больше не был доступен. Обратите внимание, как ваш элемент <code>h2</code> может заменяться  <code>monospace</code> шрифтом. <strong>Заметка</strong> <br> Если на вашем компьютере установлен шрифт Lobster, вы не увидите замены шрифта, потому что ваш браузер сможет найти этот шрифт. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш элемент h2 должен использовать шрифт <code>Lobster</code> .
    testString: 'assert($("h2").css("font-family").match(/^"?lobster/i), "Your h2 element should use the font <code>Lobster</code>.");'
  - text: 'Ваш h2-элемент должен деградировать до <code>monospace</code> шрифта, если <code>Lobster</code> недоступен.'
    testString: 'assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?,\s*monospace\s*;\s*\}/gi.test(code), "Your h2 element should degrade to the font <code>monospace</code> when <code>Lobster</code> is not available.");'
  - text: 'Прокомментируйте свой звонок в Google для шрифта <code>Lobster</code> , поставив <code>&lt;!--</code> перед ним.'
    testString: 'assert(new RegExp("<!--[^fc]", "gi").test(code), "Comment out your call to Google for the <code>Lobster</code> font by putting <code>&#60!--</code> in front of it.");'
  - text: 'Обязательно закройте свой комментарий, добавив <code>--&gt;</code> .'
    testString: 'assert(new RegExp("[^fc]-->", "gi").test(code), "Be sure to close your comment by adding <code>--&#62;</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster;
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
