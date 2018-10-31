---
id: bad87fee1348bd9aedd08845
title: Add Font Awesome Icons to our Buttons
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
videoUrl: ''
localeTitle: Добавить шрифт Удивительные значки на наши кнопки
---

## Description
<section id="description"> Font Awesome - удобная библиотека икон. Эти значки являются векторной графикой, хранящейся в формате <code>.svg</code> файла. Эти значки обрабатываются так же, как шрифты. Вы можете указать их размер с помощью пикселей, и они будут предполагать размер шрифта своих родительских элементов HTML. Вы можете включить Font Awesome в любое приложение, добавив следующий код в начало вашего HTML: <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css&quot; integrity=&quot;sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+&quot; crossorigin=&quot;anonymous&quot;&gt;</code> В этом случае мы уже добавили его для вас на эту страницу за кулисами. Элемент <code>i</code> изначально использовался, чтобы сделать другие элементы курсивом, но теперь он обычно используется для значков. Вы можете добавить классы Font Awesome к элементу <code>i</code> чтобы превратить его в значок, например: <code>&lt;i class=&quot;fa fa-info-circle&quot;&gt;&lt;/i&gt;</code> Обратите внимание, что элемент <code>span</code> также подходит для использования с значками , Используйте Font Awesome, чтобы добавить значок <code>thumbs-up</code> в вашу кнопку, предоставив ему элемент <code>i</code> с классами <code>fa</code> и <code>fa-thumbs-up</code> ; обязательно сохраните текст «Like» рядом с значком. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Добавьте элемент <code>i</code> с классами <code>fa</code> и <code>fa-thumbs-up</code> .
    testString: 'assert($("i").is(".fa.fa-thumbs-up") || $("span").is(".fa.fa-thumbs-up"), "Add an <code>i</code> element with the classes <code>fa</code> and <code>fa-thumbs-up</code>.");'
  - text: Значок <code>fa-thumbs-up</code> должен находиться в кнопке Like.
    testString: 'assert(($("i.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > i").is(".fa.fa-thumbs-up")) || ($("span.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > span").is(".fa.fa-thumbs-up")), "Your <code>fa-thumbs-up</code> icon should be located within the Like button.");'
  - text: Настройте свой элемент <code>i</code> в своем элементе <code>button</code> .
    testString: 'assert($("button").children("i").length > 0 || $("button").children("span").length > 0, "Nest your <code>i</code> element within your <code>button</code> element.");'
  - text: 'Убедитесь, что ваш значок имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/i>|<\/span>/g), "Make sure your icon element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
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
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
