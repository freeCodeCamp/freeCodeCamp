---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: Добавляем альтернативный текст к изображениям для людей с нарушениями зрения
---

## Description
<section id="description"> Вероятно, вы видели атрибут <code>alt</code> у тега <code>img</code> в других задачах. Текст <code>Alt</code> описывает содержимое изображения и служит текстовой альтернативой. Это помогает в случаях, если изображение не загружается или пользователь не может его увидеть. Он также используется поисковыми системами, чтобы понимать содержимое изображения, чтобы включить его в результаты поиска. Вот пример: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code> Люди с нарушениями зрения полагаются на устройства чтения с экрана для преобразования веб-контента в аудио-контент. Они не смогут получить информацию, если она представлена только визуально. Для описания изображений, программы чтения с экрана могут получить доступ к атрибуту <code>alt</code> и прочитать его содержимое для передачи ключевой информации. Хороший <code>alt</code> текст короткий, но содержательный и предназначен для того, чтобы кратко передать смысл изображения. Вы всегда должны добавлять атрибут <code>alt</code> к своим изображениям. По спецификации HTML5 это считается обязательным. </section>

## Instructions
<section id="instructions"> Camper Cat, оказывается, не только ниндзя кодинга, но и настоящий ниндзя, и он создает веб-сайт, чтобы поделиться своими знаниями. Изображение профиля, которое он хочет использовать, показывает его навыки и должно быть оценено всеми посетителями сайта. Добавьте атрибут <code>alt</code> в тег <code>img</code> , который поясняет, что Camper Cat занимается каратэ. (Изображение <code>src</code> не ссылается на существующий файл, поэтому вы должны увидеть текст <code>alt</code> на экране.) </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Ваш тег <code>img</code> должен иметь атрибут <code>alt</code> , и он не должен быть пустым.'
    testString: 'assert($("img").attr("alt"), "Ваш тег <code>img</code> должен содержать атрибут <code>alt</code> , и он не должен быть пустым.");'

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
