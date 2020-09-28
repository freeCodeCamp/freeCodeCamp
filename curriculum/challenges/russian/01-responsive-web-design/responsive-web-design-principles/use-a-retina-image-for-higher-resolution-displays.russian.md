---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0
videoUrl: https://scrimba.com/p/pzrPu4/cVZ4Rfp
forumTopicId: 301142
localeTitle: Используйте изображение Retina для дисплеев с более высоким разрешением
---

## Description
<section id='description'>
Самый простой способ сделать ваши изображения «сетчаткой» (и оптимизировать их для дисплеев сетчатки) - это определить их значения <code>width</code> и <code>height</code> как только половину исходного файла. Вот пример изображения, использующего только половину исходной высоты и ширины: <blockquote> &lt;Стиль&gt; <br> img {height: 250px; ширина: 250 пикселей; } <br> &lt;/ Стиль&gt; <br> &lt;img src = &quot;coolPic500x500&quot; alt = &quot;Самая прекрасная картина&quot;&gt; </blockquote>
</section>

## Instructions
<section id='instructions'>
Установите <code>width</code> и <code>height</code> тега <code>img</code> на половину их исходных значений. В этом случае как исходная <code>height</code> и исходная <code>width</code> составляют 200 пикселей.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> tag should have a <code>width</code> of 100 pixels.
    testString: assert($('img').css('width') == '100px');
  - text: Your <code>img</code> tag should have a <code>height</code> of 100 pixels.
    testString: assert($('img').css('height') == '100px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

</section>
