---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: ''
localeTitle: 'Знать, когда Alt-текст должен оставаться пустым'
---

## Description
<section id="description"> В последнем случае вы узнали, что включение атрибута <code>alt</code> в теги img является обязательным. Однако иногда изображения сгруппированы с надписью, уже описывающей их, или используются только для украшения. В этих случаях <code>alt</code> текст может показаться излишним или ненужным. В ситуациях, когда изображение уже объясняется текстовым контентом или не добавляет значения для страницы, <code>img</code> прежнему нуждается в атрибуте <code>alt</code> , но его можно установить в пустую строку. Вот пример: <code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code> Фоновые изображения обычно подпадают под «декоративную» метку. Тем не менее, они обычно применяются с правилами CSS и, следовательно, не являются частью процесса чтения расшифровок экрана. <strong>Заметка</strong> <br> Для изображений с надписью вы можете захотеть включить текст <code>alt</code> , так как он помогает каталогам поисковых систем каталогизировать содержимое изображения. </section>

## Instructions
<section id="instructions"> Camper Cat закодировал страницу скелета для части блога своего сайта. Он планирует добавить визуальный разрыв между двумя статьями с декоративным изображением самурайского меча. Добавьте атрибут <code>alt</code> в тег <code>img</code> и установите его в пустую строку. (Обратите внимание, что изображение <code>src</code> не связано с фактическим файлом - не беспокойтесь, что на дисплее нет мечей.) </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш тег <code>img</code> должен иметь атрибут <code>alt</code> .
    testString: 'assert(!($("img").attr("alt") == undefined), "Your <code>img</code> tag should have an <code>alt</code> attribute.");'
  - text: Атрибут <code>alt</code> должен быть установлен в пустую строку.
    testString: 'assert($("img").attr("alt") == "", "The <code>alt</code> attribute should be set to an empty string.");'

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

```js
// solution required
```
</section>
