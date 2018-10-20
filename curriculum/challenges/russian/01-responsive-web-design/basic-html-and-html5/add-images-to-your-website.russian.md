---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-images-to-your-website'
videoUrl: ''
localeTitle: Добавить изображения на свой сайт
---

## Description
<section id="description"> Вы можете добавлять изображения на свой сайт с помощью элемента <code>img</code> с указанием URL-адрес определенного изображения, используя атрибут <code>src</code> . Примером этого может быть: <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot;&gt;</code> Обратите внимание, что элементы <code>img</code> самозакрываются. Все элементы <code>img</code> <strong>должны</strong> иметь атрибут <code>alt</code> . Текст внутри атрибута <code>alt</code> используется для чтения с экрана для улучшения доступности и отображается, если изображение не загружается. Примечание. Если изображение является чисто декоративным, использование чистого атрибута <code>alt</code> является наилучшей практикой. В идеале атрибут <code>alt</code> не должен содержать специальных символов, если это не требуется. Давайте добавим атрибут <code>alt</code> к нашему примеру <code>img</code> выше: <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot; alt=&quot;Author standing on a beach with two thumbs up.&quot;&gt;</code> </section>

## Instructions
<section id="instructions"> Попробуем добавить изображение на наш сайт: вставьте тег <code>img</code> перед элементом <code>h2</code> . Теперь установите атрибут <code>src</code> так, чтобы он указывал на этот url: <code>https://bit.ly/fcc-relaxing-cat</code> Наконец, не забудьте дать вашему изображению текст <code>alt</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваша страница должна иметь элемент изображения.
    testString: 'assert($("img").length > 0, "Your page should have an image element.");'
  - text: У вашего изображения должен быть атрибут <code>src</code>, который указывает на изображение котенка.
    testString: 'assert(new RegExp("\/\/bit.ly\/fcc-relaxing-cat|\/\/s3.amazonaws.com\/freecodecamp\/relaxing-cat.jpg", "gi").test($("img").attr("src")), "Your image should have a <code>src</code> attribute that points to the kitten image.");'
  - text: Элемент изображения <strong>должен</strong> иметь атрибут <code>alt</code> .
    testString: 'assert(code.match(/alt\s*?=\s*?(\"|\").*(\"|\")/), "Your image element <strong>must</strong> have an <code>alt</code> attribute.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
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
