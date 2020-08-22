---
id: bad87fee1348bd9aedc08845
title: Add Font Awesome Icons to all of our Buttons
required:
  - link: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
    raw: true
challengeType: 0
forumTopicId: 16637
localeTitle: Добавим иконки Font Awesome ко всем нашим кнопкам
---

## Description
<section id='description'>
Font Awesome - это удобная библиотека иконок. Эти иконки являются векторной графикой, хранящейся в файле формата <code>.svg</code>. Иконки обрабатываются так же, как шрифты. Вы можете указать их размер с помощью пикселей, и они будут принимать размер шрифта своих родительских элементов HTML. Используйте Font Awesome, чтобы добавить иконку <code>info-circle</code> в вашу информационную кнопку и иконку <code>trash</code> на вашу кнопку удаления. Примечание: Элемент <code>span</code> является приемлемой альтернативой элементу <code>i</code> для описания иконок.
</section>

## Instructions
<section id='instructions'>
Используйте Font Awesome для добавления иконки <code>info-circle</code> к вашей информационной кнопке и иконку <code>trash</code> к вашей кнопке удаления.

<strong>Примечание:</strong> элемент <code>span</code> является приемлемой альтернативой элементу <code>i</code> для описания иконок.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Добавьте <code>&#60;i class="fas fa-info-circle"&#62;&#60;/i&#62;</code> внутрь вашей Info-кнопки.
    testString: assert($(".btn-info > i").is(".fas.fa-info-circle") || $(".btn-info > span").is(".fas.fa-info-circle"));
  - text: Добавьте <code>&#60;i class="fas fa-trash"&#62;&#60;/i&#62;</code> внутрь Delete-кнопки.
    testString: assert($(".btn-danger > i").is(".fas.fa-trash") || $(".btn-danger > span").is(".fas.fa-trash"));
  - text: Убедитесь, что у каждого из элементов <code>i</code> имеется закрывающий тег и <code>&#60;i class="fas fa-thumbs-up"&#62;&#60;/i&#62;</code> находится внутри like-кнопки.
    testString: assert(code.match(/<\/i>|<\/span/g) && code.match(/<\/i|<\/span>/g).length > 2 && ($(".btn-primary > i").is(".fas.fa-thumbs-up") || $(".btn-primary > span").is(".fas.fa-thumbs-up")));

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
      <button class="btn btn-block btn-info"><i class="fas fa-info-circle"></i> Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger"><i class="fas fa-trash"></i> Delete</button>
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
