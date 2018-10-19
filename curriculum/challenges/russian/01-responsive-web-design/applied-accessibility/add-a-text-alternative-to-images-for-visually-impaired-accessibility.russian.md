---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: Добавить текстовую альтернативу изображениям для доступности с нарушением зрения
---

## Description
<section id="description"> Вероятно, вы видели атрибут <code>alt</code> в теге <code>img</code> в других задачах. Текст <code>alt</code> описывает содержимое изображения и предоставляет текстовую альтернативу. Это помогает в случае, если изображение не загружается или не может быть отображено пользователю. Атрибут также используется поисковыми системами, чтобы понять, что содержит изображение, чтобы включить его в результаты поиска. Вот пример: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code> Люди с нарушениями зрения полагаются на устройства чтения с экрана для преобразования веб-контента в аудиоинтерфейс. Они не получат информацию, если она представлена только визуально. Для изображений экранные программы могут получить доступ к атрибуту <code>alt</code> и прочитать его содержимое для доставки ключевой информации. Хороший <code>alt</code> - это короткий текст описательного характера, кратко передающий смысл изображения. Вы всегда должны включать атрибут <code>alt</code> для своих изображений. По спецификации HTML5 атрибут считается обязательным. </section>

## Instructions
<section id="instructions"> Camper Cat, оказывается, как ниндзя кодирования, так и фактический ниндзя, создает веб-сайт, чтобы поделиться своими знаниями. Изображение профиля, которое он хочет использовать, показывает его навыки и должно быть оценено всеми посетителями сайта. Добавьте в тег <code>img</code> атрибут <code>alt</code>, который объясняет, что Camper Cat знает каратэ. (Атрибут изображения <code>src</code> не ссылается на фактический файл, поэтому вы должны увидеть текст <code>alt</code> на дисплее.) </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Ваш тег <code>img</code> должен иметь атрибут <code>alt</code> , и он не должен быть пустым.'
    testString: 'assert($("img").attr("alt"), "Your <code>img</code> tag should have an <code>alt</code> attribute, and it should not be empty.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
