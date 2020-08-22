---
id: bad87fee1348bd9aedd08845
title: Add Font Awesome Icons to our Buttons
required:
  - link: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
    raw: true
challengeType: 0
forumTopicId: 16638
localeTitle: Добавить иконки Font Awesome к вашим кнопкам
---

## Description
<section id='description'>
Font Awesome - удобная библиотека иконок. Эти значки являются векторной графикой, хранящейся в формате <code>.svg</code> файла и  обрабатываются так же, как шрифты. Вы можете указать их размер с помощью пикселей, и они будут предполагать размер шрифта своих родительских элементов HTML. Вы можете включить Font Awesome в любое приложение, добавив следующий код в начало вашего HTML: <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css&quot; integrity=&quot;sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+&quot; crossorigin=&quot;anonymous&quot;&gt;</code> В этом случае мы уже добавили его для вас на эту страницу. Элемент <code>i</code> изначально использовался, чтобы сделать другие элементы курсивом, но теперь он обычно используется для иконок. Вы можете добавить классы Font Awesome к элементу <code>i</code> чтобы превратить его в иконку, например: <code>&lt;i class=&quot;fa fa-info-circle&quot;&gt;&lt;/i&gt;</code> Обратите внимание, что элемент <code>span</code> также подходит для использования с иконками.
</section>

## Instructions
<section id='instructions'>
Используйте Font Awesome, чтобы добавить <code>thumbs-up</code>-иконку в вашу кнопку "Like" путём вставки в неё элемента <code>i</code> с классами <code>fa</code> и <code>fa-thumbs-up</code>. Убедитесь, что текст "Like" стоит после иконки.
</section>

## Tests
<section id='tests'>

```yml
tests:

  - text: Добавьте элемент <code>i</code> с классами <code>fas</code> и <code>fa-thumbs-up</code>.
    testString: assert($("i").is(".fas.fa-thumbs-up") || $("span").is(".fas.fa-thumbs-up"));
  - text: Ваша иконка <code>fa-thumbs-up</code>  должен находиться внутри вашей кнопки «Like».
    testString: assert(($("i.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > i").is(".fas.fa-thumbs-up")) || ($("span.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > span").is(".fas.fa-thumbs-up")));
  - text: Вставьте элемент <code>i</code> в ваш элемент <code>button</code>.

    testString: assert($("button").children("i").length > 0 || $("button").children("span").length > 0);
  - text: Убедитесь, что ваш значок элемента имеет закрывающий тег.
    testString: assert(code.match(/<\/i>|<\/span>/g));

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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
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
      <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i> Like</button>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
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

</section>
