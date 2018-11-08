---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: Добавление Алтернативного Текста к Изображению для Слабовидящих Пользователей
---

## Description

<section id="description"> Скорее всего, вы видели атрибут <code>alt</code> в теге <code>img</code> в других задачах. Содержание атрибута <code>Alt</code> описывает изображение и предоставляет его текстовую альтернативу. Это помогает в случае, если изображение не загружается или пользователь не может его увидеть. Также этот атрибут используется поисковыми системами как описание того, что изображено на картинке чтобы в дальнейшем включить её в результаты поиска. Вот пример: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code> Слабовидящие люди используют программы экранного доступа чтобы преобразовывать данные со страниц в аудиоинтерфейс. Они не смогут воспринимать информацию со страницы, если она будет предоставлена только в текстовом/визуальном формате. Для чтения изображений программы экранного доступа могут получить доступ к атрибуту <code>alt</code>, считать его содержимое и озвучить ключевую информацию. Качестваенный текст <code>alt</code> атрибута небольшой, но содержательный, а так же, вкратце передаёт смысл изображения. Вы всегда должны добавлять атрибут <code>alt</code> к тегу своего изображения. По спецификации HTML5 это считается обязательным. </section>

## Instructions
<section id="instructions"> Похоже Camper Cat не просто код-ниндзя, а ещё и нидзя в привычном для нас понимании, и он создает веб-сайт чтобы поделиться своими знаниями. Аватарка, которую он хочет использовать, демонстрирует его навыки и должна понравиться всем посетителям сайта. В тег <code>img</code> добавьте атрибут <code>alt</code>, который описывает, что Camper Cat занимается каратэ. (Изображение <code>src</code> не ссылается на существующий файл, так что вы должны увидеть текст атрибута <code>alt</code> на дисплее.) </section>


## Tests
<section id='tests'>

```yml
tests:

  - text: 'Ваш тег <code>img</code> должен иметь атрибут <code>alt</code>, а так же не быть пустым.'

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
