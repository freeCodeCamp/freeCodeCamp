---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: https://scrimba.com/c/cM9P4t2
forumTopicId: 301019
localeTitle: Знать, когда Alt-текст должен оставаться пустым
---

## Description
<section id='description'>
В последней задаче вы узнали, что включение атрибута <code>alt</code> в теги img является обязательным. Однако иногда изображения сгруппированы с надписью, уже описывающей их, или используются только для украшения. В этих случаях <code>alt</code> текст может показаться излишним или ненужным. В ситуациях, когда изображение уже объясняется текстовым контентом или не добавляет значения для страницы, <code>img</code> прежнему нуждается в атрибуте <code>alt</code>, но его можно установить в пустую строку. Вот пример: <code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code> Фоновые изображения обычно подпадают под «декоративную» метку. Тем не менее, они обычно применяются с правилами CSS и, следовательно, не являются частью процесса чтения расшифровок экрана. <strong>Заметка</strong> <br> Для изображений с надписью вы можете захотеть включить текст <code>alt</code>, так как он помогает поисковым системам вносить в каталог содержимое изображения.
</section>

## Instructions
<section id='instructions'>
Camper Cat закодировал каркас страницы для части блога своего сайта. Он планирует добавить визуальный разрыв между двумя статьями с декоративным изображением самурайского меча. Добавьте атрибут <code>alt</code> в тег <code>img</code> и установите его в пустую строку. (Обратите внимание, что изображение <code>src</code> не связано с фактическим файлом - не беспокойтесь, что на дисплее нет мечей.)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> tag should have an <code>alt</code> attribute.
    testString: assert(!($('img').attr('alt') == undefined));
  - text: The <code>alt</code> attribute should be set to an empty string.
    testString: assert($('img').attr('alt') == '');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

</section>
