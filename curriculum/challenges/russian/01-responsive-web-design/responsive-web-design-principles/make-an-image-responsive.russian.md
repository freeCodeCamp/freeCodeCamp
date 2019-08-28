---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
videoUrl: https://scrimba.com/p/pzrPu4/cz763UD
forumTopicId: 301140
localeTitle: Сделать изображение отзывчивым
---

## Description
<section id='description'>
Создание изображений с учетом CSS очень просто. Вместо применения абсолютной ширины к элементу: <code>img { width: 720px; }</code> Вы можете использовать: <blockquote> img { <br> max-width: 100%; <br> display: block; <br> высота: авто; <br> } </blockquote> Свойство <code>max-width</code> 100% масштабирует изображение в соответствии с шириной его контейнера, но изображение не будет растягиваться шире его первоначальной ширины. Установка свойства <code>display</code> для блокировки изменяет изображение с встроенного элемента (по умолчанию) на элемент блока в его собственной строке. Свойство <code>height</code> автоматически сохраняет исходное соотношение сторон изображения.
</section>

## Instructions
<section id='instructions'>
Добавьте правила стиля для тега <code>img</code> чтобы он реагировал на размер его контейнера. Он должен отображаться как элемент уровня блока, он должен соответствовать полной ширине его контейнера без растягивания, и он должен сохранять исходное соотношение сторон.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> tag should have a <code>max-width</code> set to 100%.
    testString: assert(code.match(/max-width:\s*?100%;/g));
  - text: Your <code>img</code> tag should have a <code>display</code> set to block.
    testString: assert($('img').css('display') == 'block');
  - text: Your <code>img</code> tag should have a <code>height</code> set to auto.
    testString: assert(code.match(/height:\s*?auto;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
 img {
   max-width: 100%;
   display: block;
   height: auto;
 }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

</section>
