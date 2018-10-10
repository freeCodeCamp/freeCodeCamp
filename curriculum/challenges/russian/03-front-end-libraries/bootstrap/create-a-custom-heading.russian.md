---
id: bad87fee1348bd9aede08845
title: Create a Custom Heading
challengeType: 0
videoUrl: ''
localeTitle: Создание пользовательской рубрики
---

## Description
<section id="description"> Мы сделаем простой заголовок для нашего приложения Cat Photo, поставив заголовок и расслабляющий образ кошки в том же ряду. Помните, что Bootstrap использует гибкую сетчатую систему, которая позволяет легко помещать элементы в строки и задавать относительную ширину каждого элемента. Большинство классов Bootstrap могут быть применены к элементу <code>div</code> . Гнездо вашего первого изображения и вашего элемента <code>h2</code> пределах одного элемента <code>&lt;div class=&quot;row&quot;&gt;</code> . Настройте свой элемент <code>h2</code> внутри <code>&lt;div class=&quot;col-xs-8&quot;&gt;</code> и ваше изображение в <code>&lt;div class=&quot;col-xs-4&quot;&gt;</code> чтобы они находились в одной строке. Обратите внимание, как изображение теперь соответствует размеру, подходящему по тексту? </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш элемент <code>h2</code> и самый верхний элемент <code>img</code> должны вставляться вместе в элемент <code>div</code> с помощью <code>row</code> класса.
    testString: 'assert($("div.row:has(h2)").length > 0 && $("div.row:has(img)").length > 0, "Your <code>h2</code> element and topmost <code>img</code> element should both be nested together within a <code>div</code> element with the class <code>row</code>.");'
  - text: Гнездо вашего верхнего элемента <code>img</code> в <code>div</code> с классом <code>col-xs-4</code> .
    testString: 'assert($("div.col-xs-4:has(img)").length > 0 && $("div.col-xs-4:has(div)").length === 0, "Nest your topmost <code>img</code> element within a <code>div</code> with the class <code>col-xs-4</code>.");'
  - text: Гнездо вашего элемента <code>h2</code> в <code>div</code> с классом <code>col-xs-8</code> .
    testString: 'assert($("div.col-xs-8:has(h2)").length > 0 && $("div.col-xs-8:has(div)").length === 0, "Nest your <code>h2</code> element within a <code>div</code> with the class <code>col-xs-8</code>.");'
  - text: 'Убедитесь, что каждый из ваших элементов <code>div</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure each of your <code>div</code> elements has a closing tag.");'

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
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
