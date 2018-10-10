---
id: bad87fee1348bd9aede08835
title: Nest Many Elements within a Single div Element
challengeType: 0
videoUrl: ''
localeTitle: Гнездо Много элементов в одном элементе div
---

## Description
<section id="description"> Элемент <code>div</code> , также известный как элемент разделения, является контейнером общего назначения для других элементов. Элемент <code>div</code> вероятно, является наиболее часто используемым HTML-элементом. Как и любой другой несамозакрывающийся элемент, вы можете открыть элемент <code>div</code> с помощью <code>&lt;div&gt;</code> и закрыть его в другой строке с помощью <code>&lt;/div&gt;</code> . </section>

## Instructions
<section id="instructions"> Гнездо ваших «Вещей кошек любят» и «Вещи, которые ненавидят кошек», перечисляет все в одном элементе <code>div</code> . Подсказка: Попробуйте поместить ваше открытие <code>div</code> тега выше ваших «Things кошек любит» <code>p</code> элемент и ваше закрытие <code>div</code> тег после закрытия <code>ol</code> тега , так что оба ваших списков находятся в пределах одного <code>div</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Гнездо ваших элементов <code>p</code> внутри вашего элемента <code>div</code> .
    testString: 'assert($("div").children("p").length > 1, "Nest your <code>p</code> elements inside your <code>div</code> element.");'
  - text: Вставьте свой элемент <code>ul</code> внутри элемента <code>div</code> .
    testString: 'assert($("div").children("ul").length > 0, "Nest your <code>ul</code> element inside your <code>div</code> element.");'
  - text: Гнездо вашего элемента <code>ol</code> внутри вашего элемента <code>div</code> .
    testString: 'assert($("div").children("ol").length > 0, "Nest your <code>ol</code> element inside your <code>div</code> element.");'
  - text: 'Убедитесь, что ваш элемент <code>div</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length, "Make sure your <code>div</code> element has a closing tag.");'

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
